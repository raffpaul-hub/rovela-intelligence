# Rovela Competitor Intelligence Report
**Date:** 2026-07-31
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 4
- New ads found: 0
- New sections to build: 3
- Pricing changes: 0

---

## Callixe

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| NEW_SECTION | Homepage — baseline capture | First-run baseline established for Callixe homepage. Site uses Shrine PRO theme v1.4.2. Brand positioning: 'Pain Free Comfort' with all-natural solutions messaging. Shopify store on f51e12.myshopify.com. Currency USD, primary market US with hreflang variants for GB, CA, AU, NZ, DE, FR, ES. | No previous state | Baseline recorded: title='CALLIXE Official Site | Pain Free Comfort', meta description='CALLIXE was created to provide all-natural solutions to help you live a comfortable and pain free life.' |
| NEW_SECTION | Tech stack / integrations | Identified third-party integrations active on site: Loox (reviews), Trustpilot (reviews + order success trigger), Social Snowball (referral), The Good API / Sprout (sustainability badges, tree count banner, cart badge), BestAds attribution, hCaptcha for forms. | No previous state | Integrations: Loox, Trustpilot, Social Snowball, Sprout/The Good API, BestAds, hCaptcha |

### New Ad Creative

#### Ad 1 — Static [Low]
- Hook: Ad Library page returned a bot-verification challenge — no ad creatives were accessible in this run.
- Formula: N/A — page served a JavaScript challenge redirect (/__rd_verify) before content loaded. No ad data extracted.
- Visual: N/A
- CTA: N/A


### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Trust Bar with Sustainability Badges | sections/rovela-trust-bar.liquid | assets/rovela-trust-bar.css | 2h |
| Social Proof Reviews Strip | sections/rovela-reviews-strip.liquid | assets/rovela-reviews-strip.css | 2.5h |

## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Homepage | Homepage hash has changed from previous state. Currency is now confirmed as USD with GBP conversion rate (1.3718694), shop is on DSF Theme 2.0.11. No visible product listings or hero content extractable from truncated HTML — structural metadata consistent with prior hash but bot-challenge environment limits full content comparison. | PrevalntPrevalnt-DSF-2.0.11-USD-GB | PrevalntPrevalnt-DSF-2.0.11-USD-GB (unchanged — hash match confirmed, no structural change detected) |
| REMOVED_SECTION | Ad Library | Ad Library is still bot-challenge blocked. A new challenge token is present (Q_6hBQSGO5Pvwzcsykh5HHEXwE1gPeeZbettfFkFMeMKwlKqyQ), indicating the block is active and rotating. No ad creative data could be extracted. | BOT_CHALLENGE_BLOCKED_2026-07-28 | BOT_CHALLENGE_BLOCKED_2026-07-31 |

## Artuvate

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Ad Library page | Ad Library is still blocked by a Cloudflare-style challenge script (rd_verify challenge=3). No ad content is accessible. Status unchanged from previous run. | BLOCKED_challenge_3_rd_verify | BLOCKED_challenge_3_rd_verify (/__rd_verify_Q_6hBQSGO5Pvwzcsykh5HHEXwE1gPeeZbettfFkFMeMKwlKqyQ?challenge=3) |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| 90-Day Guarantee Trust Banner | sections/rovela-guarantee-banner.liquid | assets/rovela-guarantee-banner.css | 2h |

---

## Master Build Checklist

- [ ] Build sections/rovela-trust-bar.liquid — Trust Bar with Sustainability Badges (2h)
- [ ] Build sections/rovela-reviews-strip.liquid — Social Proof Reviews Strip (2.5h)
- [ ] Build sections/rovela-guarantee-banner.liquid — 90-Day Guarantee Trust Banner (2h)