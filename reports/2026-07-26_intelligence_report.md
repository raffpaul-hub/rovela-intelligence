# Rovela Competitor Intelligence Report
**Date:** 2026-07-26
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 2
- New ads found: 0
- New sections to build: 2
- Pricing changes: 0

---

## Callixe
Analysis failed — could not fetch or parse data.


## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| NEW_SECTION | Homepage — full site | First crawl of Prevalnt (prevalnt.com). Site is a Shopify store running the DSF Theme (dropshipformula-2-0-11 v2.0.11). Store is registered in GB but prices display in USD. Underlying Shopify store is thefitnessphere.myshopify.com. No visible product listings, hero copy, or promotional sections were extractable from the truncated HTML — the page body was not returned. | N/A — first run | Shopify storefront live at prevalnt.com; DSF Theme; USD pricing; GB merchant |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad Library page returned a bot-challenge redirect — no ad creatives were accessible in this crawl.
- Formula: N/A — page blocked by Cloudflare/RD challenge before ad content loaded
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Prevalnt-Style DSF Trust Bar | sections/rovela-trust-bar.liquid | assets/rovela-trust-bar.css | 1.5h |

## Artuvate

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| NEW_SECTION | Homepage — first observed crawl | Artuvate is an Italian-language Shopify store (locale: it, currency: EUR) focused on wellness/home shopping. Site meta description emphasises free shipping, 7/7 customer support, and a 35-day return window. OG image references a '90 giorni' (90-day) asset suggesting a satisfaction/guarantee badge. Theme is 'Sense 12.0.0' customised as ARTUVATE1.1. Third-party tools detected: Elevar GTM analytics, ConversionBear Trust Badge, Richpanel customer support chat. | No previous state | First crawl baseline established |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad Library page returned a bot-challenge redirect — no ad creatives could be extracted this run.
- Formula: N/A — page served a Cloudflare/RD verify challenge script instead of ad content.
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Trust & Guarantee Banner | sections/rovela-trust-guarantee.liquid | assets/rovela-trust-guarantee.css | 2h |

---

## Master Build Checklist

- [ ] Build sections/rovela-trust-bar.liquid — Prevalnt-Style DSF Trust Bar (1.5h)
- [ ] Build sections/rovela-trust-guarantee.liquid — Trust & Guarantee Banner (2h)