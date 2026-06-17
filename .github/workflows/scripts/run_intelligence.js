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
Use Rovela brand values: plum #5B3A6E, cream #F7F2EE, no fake
