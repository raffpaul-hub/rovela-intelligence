# Rovela Competitor Intelligence Report
**Date:** 2026-08-04
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
| NEW_SECTION | Homepage — baseline capture | First-run baseline established for Callixe homepage. Site tagline is 'Pain Free Comfort' with brand mission 'all-natural solutions to help you live a comfortable and pain free life'. Site is built on Shopify with Shrine PRO theme v1.4.2. Currency is USD. Multi-market hreflang detected for en-GB, de-DE, fr-CA, en-AU, en-NZ among others. | No previous state | Baseline recorded: Callixe — CALLIXE Official Site | Pain Free Comfort. All-natural pain relief wellness brand. Shrine PRO theme. USD pricing. Third-party apps: Loox reviews, Trustpilot, Social Snowball referral, Sprout (carbon badges), BestAds attribution. |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad library page returned a bot-challenge redirect — no ad creatives were accessible in this run.
- Formula: N/A — ad library content unavailable due to challenge gate
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Pain-Point Hero Banner | sections/rovela-pain-point-hero.liquid | assets/rovela-pain-point-hero.css | 2h |
| Trust-Bar (Social Proof Strip) | sections/rovela-trust-bar.liquid | assets/rovela-trust-bar.css | 1.5h |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Homepage — currency/locale detection | Previously the homepage hash indicated a GB-localised storefront serving GBP. Current page metadata shows Shopify.currency.active = 'USD' with a conversion rate of 1.3710432, and Shopify.country = 'US'. The store appears to now be defaulting to USD rather than GBP for this crawl session, suggesting either a geo-redirect change or a deliberate shift away from GB-first pricing. | PrevalntPrevalnt-DSF-2.0.11-USD-GB (GB locale active) | Shopify.currency.active = USD, Shopify.country = US |
| REMOVED_SECTION | Ad Library | Ad Library page is still returning a bot-challenge redirect (Cloudflare/__rd_verify challenge), identical in nature to the previous block recorded on 2026-07-31. No ad creative data is accessible. Challenge endpoint has rotated to a new token (__rd_verify_Q_6hBQRfBgQenZ1_AmJW1mkczx_nI3y8c-8w-YtPUMeqeWc79w), confirming active bot mitigation is still in place. | BOT_CHALLENGE_BLOCKED_2026-07-31 | BOT_CHALLENGE_BLOCKED_2026-08-01 (new challenge token) |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Geo-Currency Trust Banner | sections/rovela-geo-currency-banner.liquid | assets/rovela-geo-currency-banner.css | 1.5h |

### Pricing Intelligence

| Product | Their Price | Rovela Comparable | Our Price | Action |
|---------|-------------|-------------------|-----------|--------|
| Unknown — no product data retrievable this cycle | N/A | N/A | N/A | Monitor — Prevalnt appears to have shifted default currency presentation from GBP to USD. Re-run crawler with GB-spoofed headers to confirm whether UK pricing has changed. If confirmed, review Rovela pricing against any new GBP-converted figures. |

## Artuvate

### Website Changes
No changes detected since last run.

---

## Master Build Checklist

- [ ] Build sections/rovela-pain-point-hero.liquid — Pain-Point Hero Banner (2h)
- [ ] Build sections/rovela-trust-bar.liquid — Trust-Bar (Social Proof Strip) (1.5h)
- [ ] Build sections/rovela-geo-currency-banner.liquid — Geo-Currency Trust Banner (1.5h)