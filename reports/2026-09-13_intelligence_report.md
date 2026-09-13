# Rovela Competitor Intelligence Report
**Date:** 2026-09-13
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 2
- New ads found: 0
- New sections to build: 1
- Pricing changes: 0

---

## Callixe

### Website Changes
No changes detected since last run.

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Ad Library | Ad Library page is still returning a bot/challenge redirect script rather than actual ad content. The challenge token has changed from the previous run, indicating repeated bot-protection blocks rather than accessible ad data. | BOT_CHALLENGE_BLOCKED_TOKEN:Q_6hBQSk0-lD4advTrrLqTphrf_Z64AhN83fi52HXcZ8gJpyjw_CHALLENGE:3 | BOT_CHALLENGE_BLOCKED_TOKEN:Q_6hBQQ3ua99U0Ve7u438hzBxvcioJmFuaAZolIrSUR226pG4g_CHALLENGE:3 |
| REMOVED_SECTION | Homepage — Currency/Geo metadata | Currency remains USD and country shows US, but the exchange rate has shifted from 1.3801314 to 1.38006, suggesting a minor live-rate update rather than a deliberate pricing change. The underlying Shopify backend store remains 'thefitnessphere.myshopify.com', confirming Prevalnt is a white-label dropship store on DSF Theme 2.0.11. | rate 1.3801314 | rate 1.38006 |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Competitor Intelligence Banner — Currency/Region Switcher Awareness | sections/rovela-region-trust-bar.liquid | assets/rovela-region-trust-bar.css | 1h |

### Pricing Intelligence

| Product | Their Price | Rovela Comparable | Our Price | Action |
|---------|-------------|-------------------|-----------|--------|
| Unknown — no products visible in current HTML crawl | N/A (USD pricing detected; store country set to GB creating potential consumer confusion) | All Rovela products | GBP native | Monitor — Prevalnt is pricing UK-based visitors in USD (rate ~1.38). This introduces checkout friction and hidden FX costs for UK buyers. Rovela should actively highlight GBP transparency in ad copy and on-site messaging as a trust differentiator. |

## Artuvate

### Website Changes
No changes detected since last run.

---

## Master Build Checklist

- [ ] Build sections/rovela-region-trust-bar.liquid — Competitor Intelligence Banner — Currency/Region Switcher Awareness (1h)