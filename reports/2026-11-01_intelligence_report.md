# Rovela Competitor Intelligence Report
**Date:** 2026-11-01
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 3
- New ads found: 0
- New sections to build: 1
- Pricing changes: 0

---

## Callixe

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Third-party apps | Third-party app integrations (loox, trustpilot, socialsnowball, sprout-cart, sprout-product, sprout-banner) are no longer detectable in the current HTML snapshot. The current HTML is truncated and the ad library returned a challenge page, so this may be a scraping/verification issue rather than a true removal. | loox trustpilot socialsnowball sprout-cart sprout-product sprout-banner | Not detectable in current snapshot |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Ad Library | Ad Library remains bot-challenge blocked. A new challenge token has been issued indicating a fresh verification cycle, but no ad creative content is accessible. | BOT_CHALLENGE_BLOCKED_TOKEN:Q_6hBQSr49IKsIHs5KDs-VATFUIhqWdBrayZmRc3AW_2WwzYTA-CHALLENGE:3 | BOT_CHALLENGE_BLOCKED_TOKEN:Q_6hBQQgTi9n88Y10x2sPLR7rRkwJ9B3Bidr5lMBiWFEgwxpDA-CHALLENGE:3 |
| REMOVED_SECTION | Homepage — product listings | No product data is present in the current HTML snapshot. The previous state also recorded an empty products array, so no new product content has become visible. The homepage HTML terminates before any product grid or hero copy is rendered. | Empty products array | Empty products array — no change detectable from truncated HTML |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Competitive Trust Bar | sections/rovela-trust-bar.liquid | assets/rovela-trust-bar.css | 1h |

## Artuvate

### Website Changes
No changes detected since last run.

---

## Master Build Checklist

- [ ] Build sections/rovela-trust-bar.liquid — Competitive Trust Bar (1h)