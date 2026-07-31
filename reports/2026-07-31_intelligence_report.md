# Rovela Competitor Intelligence Report
**Date:** 2026-07-31
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
| NEW_SECTION | Homepage | Homepage hash has changed from previous state. The current page reflects the same theme (DSF-2.0.11) and currency setup (USD/GB) but the Ad Library returned a bot-challenge page, suggesting Prevalnt may have added Cloudflare or similar bot-protection layer to their ad library or certain pages. | PrevalntPrevalnt-DSF-2.0.11-USD-GB | PrevalntPrevalnt-DSF-2.0.11-USD-GB (homepage structure unchanged; ad library now bot-protected) |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Competitor Intelligence Banner | sections/rovela-intel-banner.liquid | assets/rovela-intel-banner.css | 1h |

## Artuvate

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Product catalogue | No product data is present in the current HTML snapshot. The previous state recorded an empty products array, and the current crawl returned no product listings — the homepage appears to be a structural shell with no visible product grid or featured collection rendered in the truncated HTML. | [] | [] |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Trust Guarantee Banner | sections/rovela-trust-guarantee.liquid | assets/rovela-trust-guarantee.css | 2h |

---

## Master Build Checklist

- [ ] Build sections/rovela-intel-banner.liquid — Competitor Intelligence Banner (1h)
- [ ] Build sections/rovela-trust-guarantee.liquid — Trust Guarantee Banner (2h)