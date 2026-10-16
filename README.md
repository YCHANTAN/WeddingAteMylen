# WeddingAteMylen

Arnel & Marilyn's wedding invitation website.

Local implementation of the **Balanced Cinematic Luxury** planning package in [arnel-marilyn-wedding-docs](arnel-marilyn-wedding-docs/README.md).

## Run locally

Use Node.js 24 or a compatible supported release.

```sh
npm install
npm run dev
```

Open the local address printed by Astro, normally http://127.0.0.1:4321/. Build the static site with `npm run build`; the result is in `dist/`. Use `npm run preview` to serve that build.

## What is implemented

- One invitation card revealed by clicking a blue envelope. The flap opens, the letter lifts, and the card appears.
- Ceremony, reception, and gift-note tabs; portrait switching; close-to-envelope control; Escape and arrow-key support.
- Ivory, powder blue, and midnight palette; self-hosted Cormorant Garamond and Inter.
- Restrained envelope and card transitions with reduced-motion CSS.
- Semantic headings, skip link, visible keyboard focus, image descriptions, and print styles.
- The preferred portrait cropped directly from the supplied floral invitation, plus a second portrait prepared through local background extraction.

Edit event content in `src/data/wedding.ts`, layout in `src/pages/index.astro`, and visual rules in `src/styles/global.css`.

## Wedding information

The ceremony is at **6:00 AM** and the reception is at **11:00 AM** on October 29, 2026, in local Cebu time, as confirmed by the user. The user supplied the reception location as `7VC5+RG2, Cogon Pardo, Cebu City, 6000 Cebu` and the church location as `7VH3+RR5, Cebu S Rd, Cebu City, 6000 Cebu`. Ceremony, Reception, and A little note only switch the visible information. Only the dedicated Open in Google Maps buttons open a map. Plus Codes remain in the destination URLs; the invitation displays readable location names. The dress code is Blue and White, shown in A little note. RSVP, hashtag, countdown, timed calendar export, and music are not enabled. The gift note uses the grammatical edit proposed in DESIGN_SPEC.md for preview review.

## Photo preparation

The main portrait now comes directly from the user's preferred blue floral invitation, preserved at `assets/references/preferred-invitation.png`. `public/images/couple-invitation-portrait.webp` is an intact crop of that supplied image: no segmentation or face/hair regeneration was applied. The blue rose corner is also cropped from that image. The second, holding-hands portrait retains the earlier local extraction described below.

The originals remain unchanged in the documentation references folder. The final site uses local segmentation with rembg 2.0.85 / isnet-general-use, as authorized by the user. This preserves source image pixels rather than regenerating people. The staircase portrait is cropped around the upper bodies and joined hands because the railing obscures the lower scene. The outdoor veil is retained; very fine transparent edges can still benefit from a photographer's final retouch.

Earlier extracted assets retained for comparison:

- `public/images/couple-01-restored.png` and `.webp`
- `public/images/couple-02-restored.png` and `.webp`

The earlier outdoor extraction's missing hair was restored with a source-traced mask. That version is retained for comparison; the card now uses the preferred invitation crop as its main image and the restored holding-hands image as its second portrait. On mobile, the complete portrait is displayed without cropping. The information area reserves space for its tallest tab so the card does not resize during navigation.

## GitHub setup

Repository: https://github.com/YCHANTAN/WeddingAteMylen

The repository was initialized with README.md as the first commit, then the project was added in separate feature commits. For a fresh folder, the requested initial sequence is:

```sh
echo "# WeddingAteMylen" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YCHANTAN/WeddingAteMylen.git
git push -u origin main
```

This project already has its README and repository setup; do not repeat initialization or append another title when working in an existing checkout. Use `git add` and a descriptive commit message for each subsequent feature, then `git push`.

The initial ImageGen attempt for the outdoor portrait was rejected by the image tool. The generated staircase candidate altered source detail and was replaced with the local extraction. Neither generated candidate is used on the website. Intermediate preparation files are ignored under `work/`.

## Publication

This is a local review build; it has not been published. Robots metadata currently requests no indexing. Before publication, review the portraits and gift wording, resolve or explicitly accept the visible uncertainty, and decide the hosting destination. Only the delivery assets are copied to `dist/`; the original invitation and source reference images are not published.
