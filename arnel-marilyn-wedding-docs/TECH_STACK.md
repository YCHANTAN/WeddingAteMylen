# Technology Stack

**Status:** Proposed for later implementation; no dependencies installed.

## Recommended approach

Use a static Astro site with TypeScript, semantic HTML, and plain CSS. This is a small, content-led invitation with a little progressive enhancement. Keep the content readable before animation runs.

| Layer | Proposed choice | Purpose |
| --- | --- | --- |
| Page generation | Astro, static output | Produce a portable invitation page |
| Content and behavior | TypeScript | Keep event fields and optional features consistent |
| Styling | Plain CSS with shared design tokens | Control palette, typography, spacing, and responsive layouts |
| Motion | CSS transitions/keyframes | Fade and translate a small number of elements |
| Reveal detection | Native Intersection Observer | Trigger one-time reveals on entering the viewport |
| Images | Astro image assets plus exported transparent derivatives | Deliver appropriately sized photo variants |
| Fonts | One licensed serif and one licensed sans, self-hosted | Keep typography coherent and loading predictable |
| Hosting | Static HTTPS hosting; provider undecided | Publish the eventual built files |
| Review | Browser inspection and targeted automated checks | Check layout, links, accessibility, and motion |

Astro supports TypeScript imports and scripts, and its image asset API provides image processing facilities. Consult the [Astro imports reference](https://docs.astro.build/en/guides/imports/) and [image assets reference](https://docs.astro.build/en/reference/modules/astro-assets/) before implementation. Static build organization is described in the [project structure documentation](https://docs.astro.build/en/basics/project-structure/).

This is a planning choice for this project, not a claim that a particular framework is required. Pin compatible stable package versions and the runtime at implementation time; this package intentionally specifies no unverified version numbers.

## Motion strategy

Use Intersection Observer only to decide when a section enters view; use CSS for its visual transition. See the [Intersection Observer reference](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

Honor the system motion preference through [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). Keep content visible when scripts fail or reduced motion is active. The storyboard defines project-specific durations; they are design proposals.

A separate animation library is unnecessary for the proposed first release. Reassess only if approved interactions need complex sequencing that cannot remain clear and lightweight.

## Planned content model

Keep a single source of event content rather than repeating values in multiple sections.

| Content group | Planned fields and constraints |
| --- | --- |
| Couple | Display names; approved image references; alt text |
| Date | October 29, 2026; no inferred time |
| Ceremony | Source venue and city; time remains empty until confirmed |
| Reception | Source location description; exact address, time, and pin remain empty |
| Editorial | Approved introduction, gift note, closing, hashtag |
| Optional links | Verified ceremony map, verified reception map, RSVP destination |
| Status | Whether each unconfirmed field may be shown or omitted |

Represent unknown values as empty/unconfirmed, not sample event data. A missing map URL means no active directions control. A missing ceremony time means no time-specific calendar download or precise countdown.

## Asset pipeline

Preserve source photos separately from future derivatives. Later create transparent masters, inspect edges, then export responsive delivery images. Verify alpha-channel support in the chosen processing path before optimizing. Keep a PNG fallback if a delivery format produces halos or damages the veil.

Preload or prioritize only the main portrait if measurement justifies it. Lazy-load the lower portrait, reserve image dimensions, and avoid shipping original-resolution photos to every phone.

## Proposed delivery budgets

These are targets to measure during implementation, not results already achieved:

- Initial page transfer: approximately 1.5 MB or less on a phone, including the first portrait and fonts.
- Initial compressed JavaScript: approximately 50 KB or less.
- Target LCP at or below 2.5 seconds and CLS at or below 0.1 under a stated mobile test profile.
- If visual quality conflicts with a budget, document the tradeoff and reduce secondary assets first.

## Deferred services

No backend, account system, analytics, or database is needed for the planned first release. Add RSVP only after confirming the response workflow, owner, required fields, destination, and guest-facing success/failure behavior. Hosting choice, domain, and publishing remain later decisions.

