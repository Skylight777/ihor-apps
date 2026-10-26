# Development log

## 2026-10-26 — portfolio implementation
Built a dependency-free static English website for 14 public apps, using public Apple metadata and real screenshots. Applied Apple-inspired editorial layout without copying Apple assets. Added crawlable product pages and metadata. Verified actual browser navigation, filters in three cycles, native FAQ, all product pages at mobile width, screenshots, and absence of browser errors. App Store Connect untouched. Publication pending.

## 2026-10-26 — GitHub Pages publication
Created public Skylight777/ihor-apps repository and enabled Pages from main at repository root. First deployment built successfully with HTTPS. Verified all 18 live URLs and three real browser navigation/filter/FAQ cycles. Public site: https://skylight777.github.io/ihor-apps/. No App Store Connect operations.

## 2026-10-26 — iPhone showcase redesign
Replaced raw App Store thumbnails with authentic high-resolution app interfaces composed in a generated titanium iPhone frame. Added editorial spotlight pair and redesigned homepage, catalog cards, product heroes and galleries. Preserved all functional and GEO content. Passed 45 real-browser responsive page checks, three complete interaction cycles, and local asset/link verification. See docs/DESIGN.md for asset provenance and prompt.

### Redesign deployment verification
Published commit 576d520 to main. GitHub Pages built successfully. Verified all 59 live page/asset URLs and confirmed the loaded interface inside the iPhone on the live Routine Timer page. Updated site: https://skylight777.github.io/ihor-apps/.

## 2026-10-27 — niche titles and FAQPage markup
- Why: guest checks in ChatGPT, Perplexity and Gemini (27.10.2026) showed weak visibility; page titles only had app name + developer.
- build.py: `seo` map per app → `<title>` = niche query phrase + app name; meta description = "<name> is <niche phrase> for iPhone. <summary>".
- New first FAQ item on every app page: "What does <name> do?" (same factual text).
- JSON-LD: app pages now `@graph` [SoftwareApplication, FAQPage]; homepage gets FAQPage for its 6 visible questions. LD questions = visible questions (checked on all 15 pages).
- Verified: build OK, JSON-LD parses on 15 pages, Meno Log page renders and FAQ opens in browser, no console errors.
