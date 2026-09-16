# Rovela Competitor Intelligence Report
**Date:** 2026-09-16
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
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Head / Third-party apps | Sprout tree-planting badge scripts are now loading three separate endpoints (cart_badge_script, product_script, tree_count_banner_script) — previously logged as a single 'sprout' entry. The 'bestads' attribution script is still present. No net removal, but Sprout integration appears more deeply embedded with banner-level tree count display, suggesting an eco/sustainability angle is being pushed harder on-site. | loox trustpilot socialsnowball sprout bestads | loox trustpilot socialsnowball sprout (3 endpoints: cart badge, product badge, tree count banner) bestads |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad Library page returned a bot-challenge redirect — no creative data accessible this run.
- Formula: N/A — page served a JS challenge (/__rd_verify_Q_6hBQQ1VoOwcrK5Ugiej_bR1stFovPx1miArNcjwVX_XKSy0Q) before rendering ad content.
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Eco Impact Banner (Sprout Tree Count) | sections/rovela-eco-impact-banner.liquid | assets/rovela-eco-impact-banner.css | 2h |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Ad Library | Ad Library remains bot-challenge blocked. Previous run also returned a challenge token. No ad creative data is accessible. Challenge token has rotated from Q_6hBQQ3ua99U0Ve7u438hzBxvcioJmFuaAZolIrSUR226pG4g to Q_6hBQQ1VoOwcrK5Ugiej_bR1stFovPx1miArNcjwVX_XKSy0Q. | BOT_CHALLENGE_BLOCKED_TOKEN:Q_6hBQQ3ua99U0Ve7u438hzBxvcioJmFuaAZolIrSUR226pG4g_CHALLENGE:3 | BOT_CHALLENGE_BLOCKED_TOKEN:Q_6hBQQ1VoOwcrK5Ugiej_bR1stFovPx1miArNcjwVX_XKSy0Q_CHALLENGE:3 |

## Artuvate

### Website Changes
No changes detected since last run.

---

## Master Build Checklist

- [ ] Build sections/rovela-eco-impact-banner.liquid — Eco Impact Banner (Sprout Tree Count) (2h)