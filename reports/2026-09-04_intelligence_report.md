# Rovela Competitor Intelligence Report
**Date:** 2026-09-04
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 2
- New ads found: 0
- New sections to build: 2
- Pricing changes: 0

---

## Callixe

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Head / Third-party apps | Sprout app scripts are still present but now load three separate Sprout badge scripts (cart_badge_script, product_script, tree_count_banner_script) instead of a single reference — indicating expanded sustainability/tree-planting badge placements across the storefront. | sprout (single reference inferred) | sprout-app cart_badge_script + product_script + tree_count_banner_script (three endpoints) |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad library inaccessible — Cloudflare/bot-challenge page returned instead of ad creative data.
- Formula: N/A — no ad HTML was returned
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Sustainability Badge Banner | sections/rovela-sustainability-banner.liquid | assets/rovela-sustainability-banner.css | 2h |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Homepage | Homepage content remains structurally identical to previous run. No visible product listings, hero copy, or CTA text changes detected in the truncated HTML. The Shopify theme version (DSF-2.0.11), currency (USD), and store handle (thefitnessphere.myshopify.com) are unchanged. | PrevalntPrevalnt-DSF-2.0.11-USD-US-thefitnessphere-rate1.38057 | PrevalntPrevalnt-DSF-2.0.11-USD-US-thefitnessphere-rate1.3803252 |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Currency & Geo Mismatch Trust Bar | sections/rovela-trust-geo-bar.liquid | assets/rovela-trust-geo-bar.css | 1.5h |

### Pricing Intelligence

| Product | Their Price | Rovela Comparable | Our Price | Action |
|---------|-------------|-------------------|-----------|--------|
| Prevalnt — no products currently visible/scrapeable | N/A | N/A | N/A | Monitor — Prevalnt homepage rendered no product cards in this crawl. Re-check next cycle with authenticated session or direct /products.json endpoint scrape. |

## Artuvate

### Website Changes
No changes detected since last run.

---

## Master Build Checklist

- [ ] Build sections/rovela-sustainability-banner.liquid — Sustainability Badge Banner (2h)
- [ ] Build sections/rovela-trust-geo-bar.liquid — Currency & Geo Mismatch Trust Bar (1.5h)