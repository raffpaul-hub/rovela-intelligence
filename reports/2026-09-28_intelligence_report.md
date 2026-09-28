# Rovela Competitor Intelligence Report
**Date:** 2026-09-28
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 4
- New ads found: 0
- New sections to build: 2
- Pricing changes: 0

---

## Callixe

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| NEW_SECTION | Theme metadata | Shrine PRO theme version upgraded from 1.4.2 to 1.9.0, and theme name changed from 'CALLIXE NEW BRAND DESIGN | OPT2 Shrine PRO 1.4.2' to 'Callixe 2026' | CALLIXE NEW BRAND DESIGN | OPT2 Shrine PRO 1.4.2 | Callixe 2026 — Shrine PRO schema_version 1.9.0 |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Wellness Mission Banner | sections/rovela-mission-banner.liquid | assets/rovela-mission-banner.css | 2h |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Ad Library | Ad Library page is blocked by a bot challenge/CAPTCHA redirect — same bot challenge token pattern as previous run but with a new challenge ID. No ad creative content is accessible. | BOT_CHALLENGE_BLOCKED_TOKEN:Q_6hBQTjVKg2dK6QC3q9yuVjswQVMIitof7YW7Agomg04OhbJQ_CHALLENGE:3 | BOT_CHALLENGE_BLOCKED_TOKEN:Q_6hBQRzM67tsR2VI91HNFJv_jad-NTO19FLvFNZKI4-LSKurQ_CHALLENGE:3 |
| REMOVED_SECTION | Homepage — product listings | No product or section content was returned in the truncated HTML. The homepage appears to be a bare Shopify shell with no visible hero, product grid, or promotional sections detectable from the current payload. Could indicate a store rebuild, maintenance mode, or heavy JS-rendered content not captured in the static HTML crawl. | PrevalntPrevalnt-DSF-2.0.11-USD-US-thefitnessphere-rate1.351653 | PrevalntPrevalnt-DSF-2.0.11-USD-US-thefitnessphere-rate1.3515714 |
| PRICE_CHANGE | Homepage — Shopify currency metadata | The USD conversion rate has changed slightly between runs, suggesting a live currency rate feed. The store remains priced in USD despite being a GB-registered shop (countryCode: GB), which is a strategic flag — likely targeting US dropship audience. | rate: 1.351653 | rate: 1.3515714 |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Currency-Aware Geo Pricing Banner | sections/rovela-geo-pricing-banner.liquid | assets/rovela-geo-pricing-banner.css | 1h |

### Pricing Intelligence

| Product | Their Price | Rovela Comparable | Our Price | Action |
|---------|-------------|-------------------|-----------|--------|
| Unknown — no product data extractable from current crawl | N/A | N/A | N/A | Monitor — Prevalnt is pricing in USD from a GB-registered Shopify store. Likely targeting US market via dropship. Rovela should monitor if Prevalnt launches GBP pricing, as it would signal a direct UK market push. |

## Artuvate

### Website Changes
No changes detected since last run.

---

## Master Build Checklist

- [ ] Build sections/rovela-mission-banner.liquid — Wellness Mission Banner (2h)
- [ ] Build sections/rovela-geo-pricing-banner.liquid — Currency-Aware Geo Pricing Banner (1h)