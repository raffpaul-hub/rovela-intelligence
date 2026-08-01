# Rovela Competitor Intelligence Report
**Date:** 2026-08-01
**Run type:** Incremental (3-day)

---

## Executive Summary

- Website changes: 2
- New ads found: 0
- New sections to build: 1
- Pricing changes: 0

---

## Callixe
Analysis failed — could not fetch or parse data.


## Prevalnt

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| REMOVED_SECTION | Homepage — detectable content | No product listings, hero sections, or navigational content are present in the current HTML snapshot. The page renders only Shopify boilerplate, theme metadata, and tracking scripts. This likely indicates a near-empty or heavily JavaScript-rendered storefront that could not be fully captured, or a site undergoing changes. | PrevalntPrevalnt-DSF-2.0.11-USD-GB | PrevalntPrevalnt-DSF-2.0.11-USD-GB (no visible content delta — boilerplate only) |

## Artuvate

### Website Changes
| Change Type | Location | Detail | Old | New |
|-------------|----------|--------|-----|-----|
| NEW_SECTION | Elevar event config | Two new Elevar event types are now enabled that were not previously tracked: checkout_step, collection_view, product_add_to_cart, product_add_to_cart_ajax, product_remove_from_cart, product_select, search_results_view. The previous config only had cart_reconcile, cart_view, checkout_complete, product_view, user, consent_enabled. | cart_reconcile:true|cart_view:true|checkout_complete:true|product_view:true|user:true|consent_enabled:false | cart_reconcile:true|cart_view:true|checkout_complete:true|checkout_step:true|collection_view:true|product_add_to_cart:true|product_add_to_cart_ajax:true|product_remove_from_cart:true|product_select:true|product_view:true|search_results_view:true|user:true|save_order_notes:false|consent_enabled:false |

### Shopify Sections to Build

| Section | Liquid File | CSS File | Est. Time |
|---------|-------------|----------|-----------|
| Advanced Event Tracking Consent Banner | sections/rovela-consent-tracking-banner.liquid | assets/rovela-consent-tracking-banner.css | 2h |

---

## Master Build Checklist

- [ ] Build sections/rovela-consent-tracking-banner.liquid — Advanced Event Tracking Consent Banner (2h)