# iPhone apps by Ihor Romanenko

Public website: https://skylight777.github.io/ihor-apps/

A static, responsive collection of 14 iPhone apps. Product pages include real App Store screenshots, complete public descriptions, FAQ, related apps, canonical metadata, SoftwareApplication structured data and a sitemap.

## Local development

Python 3.10+ is sufficient. No packages or build service required.

```sh
python3 scripts/build.py
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/.

Edit editorial copy and page templates in `scripts/build.py`, styling in `style.css`, filtering in `site.js`. `data/apps.json` contains public US App Store metadata checked on October 26, 2026; update facts from Apple before rebuilding. Apple images are stored locally in `assets/`.

## Publishing

GitHub Pages serves the repository root from `main`, with `.nojekyll`. Relative links support the `/ihor-apps/` project path. Canonicals and sitemap use the production URL. No custom domain required.

All essential product content is in the generated HTML and works without JavaScript. JavaScript only filters the homepage collection. No cookies, analytics or third-party fonts.

`robots.txt` only takes effect at the domain root (`https://skylight777.github.io/robots.txt`), so a misleading project-level robots file is intentionally absent. The root returned 404 at verification, which declares no crawl restrictions. Sitemap is at `/ihor-apps/sitemap.xml`. Publication does not guarantee indexing or AI recommendations.

App policy and support pages remain in the separate existing `igor-apps-legal` repository. App Store Connect was not accessed or modified.
