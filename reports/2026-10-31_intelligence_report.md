# Rovela Competitor Intelligence Report
**Date:** 2026-10-31
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
| REMOVED_SECTION | Third-party apps | The 'bestads' app tag previously detected is no longer present in the current HTML. All other apps (loox, trustpilot, socialsnowball, sprout-cart, sprout-product, sprout-banner) appear unchanged, however the ad library page returned a bot-challenge redirect rather than live ad data, so this may be a scraping artefact rather than a true removal. | loox trustpilot socialsnowball sprout-cart sprout-product sprout-banner bestads | loox trustpilot socialsnowball sprout-cart sprout-product sprout-banner |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| International Market Trust Bar | sections/rovela-market-trust-bar.liquid | assets/rovela-market-trust-bar.css | 2h |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| PRICE_CHANGE | Homepage / Shopify currency meta | Exchange rate value has shifted slightly compared to previous hash | rate1.3554066 | rate1.3661472 |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Competitor Currency Tracker Banner | sections/rovela-currency-tracker-banner.liquid | assets/rovela-currency-tracker-banner.css | 1h |

### Pricing Intelligence

| Product | Their Price | Rovela Comparable | Our Price | Action |
|---------|-------------|-------------------|-----------|--------|
| Unknown — no product data extractable (bot challenge blocking product pages) | N/A | N/A | N/A | Monitor — Prevalnt ad library and product pages remain bot-challenge blocked. Re-attempt crawl with headless browser or cookie rotation to extract live SKU pricing. |

## Artuvate

### Website Changes
No changes detected since last run.

---

## Master Build Checklist

- [ ] Build sections/rovela-market-trust-bar.liquid — International Market Trust Bar (2h)
- [ ] Build sections/rovela-currency-tracker-banner.liquid — Competitor Currency Tracker Banner (1h)