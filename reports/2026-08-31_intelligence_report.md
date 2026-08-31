# Rovela Competitor Intelligence Report
**Date:** 2026-08-31
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 3
- New ads found: 0
- New sections to build: 2
- Pricing changes: 0

---

## Callixe

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Head / Third-party apps | No changes detected to third-party app stack — Loox, Trustpilot, SocialSnowball, Sprout, BestAds all still present | loox trustpilot socialsnowball sprout bestads | loox trustpilot socialsnowball sprout bestads |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad Library data unavailable — bot-challenge redirect returned instead of ad creatives
- Formula: N/A — page returned a JavaScript challenge gate, no ad content was rendered
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| International Market Trust Bar | sections/rovela-international-trust-bar.liquid | assets/rovela-international-trust-bar.css | 2h |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Homepage — currency/locale signal | Previously the homepage hash indicated USD/US targeting with rate 1.38; current page confirms currency still USD at rate 1.3814268 — effectively unchanged, but the underlying Shopify store backend is confirmed as thefitnessphere.myshopify.com operating under the DSF Theme 2.0.11. No new visible homepage sections detectable from truncated HTML. | PrevalntPrevalnt-DSF-2.0.11-USD-US-thefitnessphere-rate1.38 | PrevalntPrevalnt-DSF-2.0.11-USD-US-thefitnessphere-rate1.3814268 |
| REMOVED_SECTION | Ad Library | Ad Library bot-challenge token has rotated. Previous token Q_6hBQTrzo0GkUZrRfZaT388MXse_ReP0Qaq6XEuXgJQeTjnIA was blocked; new challenge token is Q_6hBQTNqxoX0BuM9LqiBeTloZ3uJmFofG5QewqS5_RNPipG5w with challenge=3. Page remains bot-challenge gated — no ad creative accessible. | BOT_CHALLENGE_BLOCKED_2026-08-25_TOKEN:Q_6hBQTrzo0GkUZrRfZaT388MXse_ReP0Qaq6XEuXgJQeTjnIA | BOT_CHALLENGE_BLOCKED_2026-08-28_TOKEN:Q_6hBQTNqxoX0BuM9LqiBeTloZ3uJmFofG5QewqS5_RNPipG5w_CHALLENGE:3 |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Competitor Intelligence Banner | sections/rovela-intel-banner.liquid | assets/rovela-intel-banner.css | 0.5h |

## Artuvate

### Website Changes
No changes detected since last run.

---

## Master Build Checklist

- [ ] Build sections/rovela-international-trust-bar.liquid — International Market Trust Bar (2h)
- [ ] Build sections/rovela-intel-banner.liquid — Competitor Intelligence Banner (0.5h)