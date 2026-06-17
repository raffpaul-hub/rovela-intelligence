/**
 * Rovela Competitor Intelligence Runner
 * Orchestrates web scraping + Claude analysis + report generation
 * Run: node scripts/run_intelligence.js
 */

import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// ─── CONFIG ────────────────────────────────────────────────────────────────

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const TODAY = new Date().toISOString().split("T")[0];
const FORCE_FULL_SCAN = process.env.FORCE_FULL_SCAN === "true";

const PATHS = {
  config: "./config/competitors.json",
  state: "./state/last_run.json",
  adsState: "./state/ads_seen.json",
  pricingLog: "./reports/pricing_log.csv",
  reportDir: "./reports",
  stateDir: "./state",
};

// ─── HELPERS ───────────────────────────────────────────────────────────────

function ensureDirs() {
  ["./config", "./state", "./reports", "./scripts"].forEach((d) => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });
}

function loadJSON(filePath, fallback = {}) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function log(msg) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${msg}`);
}

// ─── WEB FETCH ─────────────────────────────────────────────────────────────

async function fetchPageContent(url) {
  try {
    const result = execSync(
      `curl -sL --max-time 30 --user-agent "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" "${url}"`,
      { maxBuffer: 5 * 1024 * 1024 }
    ).toString();
    return result;
  } catch (err) {
    log(`Failed to fetch ${url}: ${err.message}`);
    return null;
  }
}

// ─── CLAUDE ANALYSIS ───────────────────────────────────────────────────────

async function analyseWithClaude(competitorName, pageHTML, adLibraryHTML, previousState) {
  log(`Sending ${competitorName} data to Claude for analysis...`);

  const previousStateStr = previousState
    ? JSON.stringify(previousState, null, 2)
    : "No previous state — this is the first run.";

  const prompt = `
You are a competitive intelligence analyst for Rovela — a UK wellness/massage product brand.

## COMPETITOR: ${competitorName}

## PREVIOUS STATE (from last run):
${previousStateStr}

## CURRENT PAGE HTML (truncated to key structural elements):
${pageHTML ? pageHTML.substring(0, 15000) : "Could not fetch page"}

## AD LIBRARY HTML:
${adLibraryHTML ? adLibraryHTML.substring(0, 8000) : "Not available"}

---

Analyse the above and return a JSON object with EXACTLY this structure:

{
  "website_changes": [
    {
      "change_type": "NEW_SECTION | REMOVED_SECTION | PRICE_CHANGE | NEW_PRODUCT",
      "location": "e.g. Homepage hero",
      "detail": "Description of what changed",
      "old_value": "Previous value if applicable",
      "new_value": "New value"
    }
  ],
  "current_products": [
    { "name": "Product name", "price": "£XX.XX" }
  ],
  "section_hashes": [
    { "section": "section name", "hash": "headline+cta concatenated" }
  ],
  "new_ads": [
    {
      "ad_id": "unique identifier if detectable",
      "format": "Static | Carousel | Video | UGC | Testimonial",
      "hook": "First headline or opening seconds description",
      "formula": "Problem/Agitation/Solution breakdown",
      "visual_treatment": "Lifestyle | Studio | Text-on-screen | Voiceover | UGC",
      "cta": "CTA text and placement",
      "virality_rating": "High | Medium | Low",
      "virality_reason": "Why this rating",
      "rovela_brief": {
        "format": "Recommended format for Rovela",
        "platform": "Meta | TikTok | Pinterest",
        "adapted_hook": "Hook rewritten for Rovela brand voice",
        "shot_list": ["Shot 1 description", "Shot 2 description"],
        "copy_overlay": "Text to overlay on the creative",
        "script": "Full script if video",
        "talent_direction": "Notes on model/talent",
        "higgsfield_model": "Nano Banana Pro | Seedance 2.0"
      }
    }
  ],
  "shopify_sections_to_build": [
    {
      "section_name": "Section name",
      "liquid_file": "sections/rovela-[name].liquid",
      "css_file": "assets/rovela-[name].css",
      "liquid_scaffold": "Full Liquid code here",
      "css_scaffold": "Full CSS code using Rovela palette here",
      "schema_settings": ["Setting 1", "Setting 2"],
      "metafields": [],
      "estimated_build_time": "Xh"
    }
  ],
  "pricing_flags": [
    {
      "product": "Product name",
      "competitor_price": "£XX.XX",
      "rovela_comparable": "Rovela product name",
      "rovela_price": "£XX.XX",
      "action": "No action | Monitor | Review Rovela pricing"
    }
  ],
  "summary": {
    "website_changes_count": 0,
    "new_ads_count": 0,
    "sections_to_build_count": 0,
    "pricing_changes_count": 0,
    "has_changes": false
  }
}

Return ONLY valid JSON. No preamble, no markdown fences.
Use Rovela brand values: plum #5B3A6E, cream #F7F2EE, no fake urgency, premium wellness tone.
`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

  try {
    return JSON.parse(text.replace(/```json|```/g, "").trim());
  } catch (err) {
    log(`Failed to parse Claude response for ${competitorName}: ${err.message}`);
    return null;
  }
}

// ─── REPORT GENERATION ─────────────────────────────────────────────────────

function generateMarkdownReport(allResults) {
  const lines = [
    `# Rovela Competitor Intelligence Report`,
    `**Date:** ${TODAY}`,
    `**Run type:** ${FORCE_FULL_SCAN ? "Full scan (forced)" : "Incremental (3-day)"}`,
    ``,
    `---`,
    ``,
    `## Executive Summary`,
    ``,
  ];

  let totalChanges = 0;
  let totalAds = 0;
  let totalSections = 0;
  let totalPricing = 0;

  for (const [name, result] of Object.entries(allResults)) {
    if (!result) continue;
    totalChanges += result.summary?.website_changes_count || 0;
    totalAds += result.summary?.new_ads_count || 0;
    totalSections += result.summary?.sections_to_build_count || 0;
    totalPricing += result.summary?.pricing_changes_count || 0;
  }

  lines.push(`- Website changes: ${totalChanges}`);
  lines.push(`- New ads found: ${totalAds}`);
  lines.push(`- New sections to build: ${totalSections}`);
  lines.push(`- Pricing changes: ${totalPricing}`);
  lines.push(``);
  lines.push(`---`);

  for (const [name, result] of Object.entries(allResults)) {
    if (!result) {
      lines.push(`\n## ${name}\nAnalysis failed — could not fetch or parse data.\n`);
      continue;
    }

    lines.push(`\n## ${name}\n`);

    lines.push(`### Website Changes`);
    if (result.website_changes?.length) {
      lines.push(`| Change Type | Location | Detail | Old | New |`);
      lines.push(`|-------------|----------|--------|-----|-----|`);
      result.website_changes.forEach((c) => {
        lines.push(
          `| ${c.change_type} | ${c.location} | ${c.detail} | ${c.old_value || "—"} | ${c.new_value || "—"} |`
        );
      });
    } else {
      lines.push(`No changes detected since last run.`);
    }

    if (result.new_ads?.length) {
      lines.push(`\n### New Ad Creative\n`);
      result.new_ads.forEach((ad, i) => {
        lines.push(`#### Ad ${i + 1} — ${ad.format} [${ad.virality_rating}]`);
        lines.push(`- Hook: ${ad.hook}`);
        lines.push(`- Formula: ${ad.formula}`);
        lines.push(`- Visual: ${ad.visual_treatment}`);
        lines.push(`- CTA: ${ad.cta}`);
        if (ad.rovela_brief && ad.virality_rating !== "Low") {
          lines.push(`\nRovela Creative Brief:`);
          lines.push(`- Platform: ${ad.rovela_brief.platform}`);
          lines.push(`- Adapted hook: ${ad.rovela_brief.adapted_hook}`);
          lines.push(`- Shot list: ${ad.rovela_brief.shot_list?.join(" / ")}`);
          lines.push(`- Copy: ${ad.rovela_brief.copy_overlay}`);
          lines.push(`- Higgsfield model: ${ad.rovela_brief.higgsfield_model}`);
        }
        lines.push(``);
      });
    }

    if (result.shopify_sections_to_build?.length) {
      lines.push(`\n### Shopify Sections to Build\n`);
      lines.push(`| Section | Liquid File | CSS File | Est. Time |`);
      lines.push(`|---------|-------------|----------|-----------|`);
      result.shopify_sections_to_build.forEach((s) => {
        lines.push(`| ${s.section_name} | ${s.liquid_file} | ${s.css_file} | ${s.estimated_build_time} |`);
      });
    }

    if (result.pricing_flags?.length) {
      lines.push(`\n### Pricing Intelligence\n`);
      lines.push(`| Product | Their Price | Rovela Comparable | Our Price | Action |`);
      lines.push(`|---------|-------------|-------------------|-----------|--------|`);
      result.pricing_flags.forEach((p) => {
        lines.push(
          `| ${p.product} | ${p.competitor_price} | ${p.rovela_comparable} | ${p.rovela_price} | ${p.action} |`
        );
      });
    }
  }

  lines.push(`\n---\n\n## Master Build Checklist\n`);
  for (const [name, result] of Object.entries(allResults)) {
    if (!result) continue;
    result.shopify_sections_to_build?.forEach((s) => {
      lines.push(`- [ ] Build ${s.liquid_file} — ${s.section_name} (${s.estimated_build_time})`);
    });
    result.new_ads?.forEach((ad) => {
      if (ad.virality_rating !== "Low") {
        lines.push(
          `- [ ] Produce ${ad.rovela_brief?.format || ad.format} ad — ${ad.rovela_brief?.platform || "Meta"}`
        );
      }
    });
  }

  return lines.join("\n");
}

// ─── PRICING LOG ───────────────────────────────────────────────────────────

function updatePricingLog(allResults) {
  const csvExists = fs.existsSync(PATHS.pricingLog);
  const header = "Date,Competitor,Product,Old Price,New Price,% Change,Action\n";

  let rows = "";
  for (const [name, result] of Object.entries(allResults)) {
    if (!result?.website_changes) continue;
    result.website_changes
      .filter((c) => c.change_type === "PRICE_CHANGE")
      .forEach((c) => {
        const oldVal = parseFloat((c.old_value || "0").replace(/[^0-9.]/g, ""));
        const newVal = parseFloat((c.new_value || "0").replace(/[^0-9.]/g, ""));
        const pct = oldVal ? (((newVal - oldVal) / oldVal) * 100).toFixed(1) + "%" : "N/A";
        rows += `${TODAY},${name},${c.location},${c.old_value},${c.new_value},${pct},Monitor\n`;
      });
  }

  if (rows) {
    if (!csvExists) fs.writeFileSync(PATHS.pricingLog, header);
    fs.appendFileSync(PATHS.pricingLog, rows);
    log(`Pricing log updated`);
  }
}

// ─── MAIN ──────────────────────────────────────────────────────────────────

async function main() {
  log("Starting Rovela Competitor Intelligence Run");
  ensureDirs();

  const competitors = loadJSON(PATHS.config, []);
  const lastRunState = FORCE_FULL_SCAN ? {} : loadJSON(PATHS.state, {});
  const adsSeen = loadJSON(PATHS.adsState, { seen_ids: [] });

  if (!competitors.length) {
    log("No competitors configured. Edit config/competitors.json and re-run.");
    process.exit(0);
  }

  const allResults = {};
  const newState = { last_run_date: TODAY, competitors: {} };

  for (const competitor of competitors) {
    log(`Processing: ${competitor.name} (${competitor.url})`);

    const pageHTML = await fetchPageContent(competitor.url);
    const adHTML = competitor.ad_library_url
      ? await fetchPageContent(competitor.ad_library_url)
      : null;

    const previousState = lastRunState?.competitors?.[competitor.name] || null;

    const result = await analyseWithClaude(
      competitor.name,
      pageHTML,
      adHTML,
      previousState
    );

    allResults[competitor.name] = result;

    if (result) {
      newState.competitors[competitor.name] = {
        last_checked: TODAY,
        products: result.current_products,
        section_hashes: result.section_hashes,
      };

      result.new_ads?.forEach((ad) => {
        if (ad.ad_id && !adsSeen.seen_ids.includes(ad.ad_id)) {
          adsSeen.seen_ids.push(ad.ad_id);
        }
      });
    }
  }

  saveJSON(PATHS.state, newState);
  saveJSON(PATHS.adsState, adsSeen);

  const report = generateMarkdownReport(allResults);
  const reportPath = path.join(PATHS.reportDir, `${TODAY}_intelligence_report.md`);
  fs.writeFileSync(reportPath, report);
  log(`Report saved: ${reportPath}`);

  updatePricingLog(allResults);

  const hasChanges = Object.values(allResults).some((r) => r?.summary?.has_changes);
  const totalAds = Object.values(allResults).reduce((n, r) => n + (r?.summary?.new_ads_count || 0), 0);
  const totalChanges = Object.values(allResults).reduce((n, r) => n + (r?.summary?.website_changes_count || 0), 0);
  const totalSections = Object.values(allResults).reduce((n, r) => n + (r?.summary?.sections_to_build_count || 0), 0);
  const totalPricing = Object.values(allResults).reduce((n, r) => n + (r?.summary?.pricing_changes_count || 0), 0);

  if (process.env.GITHUB_ENV) {
    fs.appendFileSync(process.env.GITHUB_ENV, `NEW_CHANGES=${hasChanges}\n`);
    fs.appendFileSync(process.env.GITHUB_ENV, `REPORT_DATE=${TODAY}\n`);
    fs.appendFileSync(process.env.GITHUB_ENV, `NEW_ADS=${totalAds}\n`);
    fs.appendFileSync(process.env.GITHUB_ENV, `WEBSITE_CHANGES=${totalChanges}\n`);
    fs.appendFileSync(process.env.GITHUB_ENV, `NEW_SECTIONS=${totalSections}\n`);
    fs.appendFileSync(process.env.GITHUB_ENV, `PRICE_CHANGES=${totalPricing}\n`);
  }

  console.log(`
Run complete — ${TODAY}
Website changes: ${totalChanges}
New ads found: ${totalAds}
New sections to build: ${totalSections}
Pricing changes: ${totalPricing}
Report saved to: ${reportPath}
  `);
}

main().catch((err) => {
  console.error("Intelligence run failed:", err);
  process.exit(1);
});
