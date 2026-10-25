# iPhone showcase design, 2026-10-26

## Direction
Apple-inspired product presentation: generous white space, restrained neutral backgrounds, physical iPhone frames, natural shadows, large typographic hierarchy, authentic app screens. Two editorial spotlights add warm and dark contrast. Every app page uses a large product hero and a device gallery.

## Assets
- `assets/hardware/iphone-titanium.png`: 866 × 1817 transparent PNG, generated with the built-in ImageGen tool. One shared file across all pages.
- `assets/<App Store ID>/display-*.jpg`: high-resolution public Apple screenshots, retrieved from the same catalog URLs as the initial site with a larger image size. Source rasters remain unchanged.
- Screen crops are applied in CSS inside the physical frame; branded App Store headers and outer margins are excluded. Native screenshot layout and text remain intact. Sugar Log’s supplied screenshots contain only a partial screen; the available content is displayed without synthesizing missing UI.
- Original low-resolution screenshots retained for provenance/history.

## ImageGen prompt
Use case: product-mockup. Create a premium photorealistic studio render of one contemporary iPhone, straight-on front elevation, absolutely no perspective tilt, portrait orientation. Natural brushed titanium thin outer rails with subtle polished chamfer highlights, precise black glass bezel, softly rounded corners, visible tiny side buttons. An entirely blank solid black screen, with a black Dynamic Island near the top. No app UI, no text, no logos, no wallpaper, no extra objects. Completely transparent background, no ground shadow outside the phone. The phone should nearly fill a 1:2.1 portrait canvas, centered with equal very small transparent margins all around. Screen-to-body ratio like an iPhone 16 Pro. This image will be used as the physical hardware frame behind separately composited authentic app screenshots on a premium website; keep all screen geometry perfectly symmetrical and flat, both vertical edges exactly parallel. Product photography quality, realistic restrained highlights, no cartoon illustration, no exaggerated reflections across the screen.

## Implementation
`device()` is the only iPhone rendering component; hero, spotlights, cards and product galleries use it. Local high-resolution screens and lazy loading keep the implementation dependency-free. No animation loops, runtime AI, third-party fonts or analytics. Reduced-motion preferences disable smooth scrolling.
