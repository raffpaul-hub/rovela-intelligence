# Rovela Competitor Intelligence Report
**Date:** 2026-07-26
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 3
- New ads found: 0
- New sections to build: 3
- Pricing changes: 0

---

## Callixe

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| NEW_SECTION | Homepage — general site observation | First crawl of Callixe homepage. Site is a Shopify store using Shrine PRO theme (v1.4.2). Brand positions itself as 'all-natural solutions for pain-free, comfortable life'. Currency USD. Serves EN, ES, DE, FR, EN-GB, EN-AU, EN-CA, EN-NZ markets. Integrates Loox reviews, Trustpilot, Social Snowball referral, The Good API (sustainability badges), and BestAds attribution. | No previous state | Site live at callixe.com — theme: CALLIXE NEW BRAND DESIGN OPT2, Shrine PRO 1.4.2 |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad Library page returned a bot-challenge redirect — no ad creatives were accessible in this crawl.
- Formula: N/A — page served JavaScript challenge (/__rd_verify) before content loaded; no ad data extracted.
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Pain-Free Promise Banner (mirroring Callixe positioning) | sections/rovela-pain-free-promise.liquid | assets/rovela-pain-free-promise.css | 1.5h |

### Pricing Intelligence

| Product | Their Price | Rovela Comparable | Our Price | Action |
|---------|-------------|-------------------|-----------|--------|
| Callixe — products unknown (no product HTML in scope) | N/A — requires /collections crawl | N/A | N/A | Monitor — schedule crawl of callixe.com/collections/all to extract full product catalogue and pricing |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| NEW_SECTION | Homepage | Prevalnt homepage is now detectable with a basic Shopify DSF Theme (dropshipformula-2-0-11 v2.0.11). Previously only a placeholder hash existed. The store operates in USD despite being registered in GB (country code GB, currency USD at rate ~1.36), suggesting US-market targeting. | PrevalntPrevalnt (placeholder hash only) | Live Shopify storefront detected on DSF dropship theme with Apple Pay, Shop Pay, PayPal v4, hCaptcha, and Shopify Payments enabled |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad Library returned a bot-challenge redirect — no creative content was accessible
- Formula: N/A — page rendered a JavaScript challenge (/__rd_verify_Q_6hBQSoo0nFIz0xe7l1q51mYerv4X2QaqLSUo3QIIaU3yZ3tw) and reloaded, preventing scrape
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Trust & Credentials Bar | sections/rovela-trust-bar.liquid | assets/rovela-trust-bar.css | 1.5h |

## Artuvate

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Homepage — detectable product listings | No product data is present in the current HTML snapshot; previous state also recorded empty products array. The page renders standard Shopify homepage shell without visible product sections in the truncated HTML. | [] | [] |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad Library page returned a bot-challenge redirect — no ad creatives were accessible in this run.
- Formula: N/A — page returned a Cloudflare/RD verification challenge before any ad content loaded.
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| 90-Day Guarantee Trust Banner | sections/rovela-guarantee-banner.liquid | assets/rovela-guarantee-banner.css | 2h |

---

## Master Build Checklist

- [ ] Build sections/rovela-pain-free-promise.liquid — Pain-Free Promise Banner (mirroring Callixe positioning) (1.5h)
- [ ] Build sections/rovela-trust-bar.liquid — Trust & Credentials Bar (1.5h)
- [ ] Build sections/rovela-guarantee-banner.liquid — 90-Day Guarantee Trust Banner (2h)