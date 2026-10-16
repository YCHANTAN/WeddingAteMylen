# Arnel & Marilyn — Combined Wedding Website Documentation

Prepared October 16, 2026. Documentation only; no implementation.

---

<!-- Source: README.md -->

# Arnel & Marilyn — Wedding Invitation Planning Package

**Direction:** Balanced Cinematic Luxury  
**Status:** Documentation only; proposed implementation has not begun  
**Prepared:** October 16, 2026 (Asia/Manila)

A blue-led, elegant invitation that feels intimate, comfortable, and cinematic. The couple and practical event details lead; restrained motion and generous space provide the sense of luxury.

## Read in this order

1. [Design specification](DESIGN_SPEC.md) — visual direction, content, assets, and responsive layout.
2. [Website walkthrough](WEBSITE_WALKTHROUGH.md) — the guest journey and expected behavior.
3. [Animation storyboard](ANIMATION_STORYBOARD.md) — entrance, scroll, interaction, and reduced-motion behavior.
4. [Technology stack](TECH_STACK.md) — proposed tools and reasons.
5. [Implementation plan](IMPLEMENTATION_PLAN.md) — phases, dependencies, and acceptance criteria.

[Combined edition](COMBINED_DOCUMENTATION.md) contains the same six documents in one file. Individual documents are the primary editing copies; regenerate the combined edition after revisions.

## What is established

The user selected Balanced Cinematic Luxury, a blue-related palette, simplicity, warmth, smooth transitions, and later background removal for two couple photographs. The invitation image supplies the event information.

The retrieved chat contains the user's requests and all three attachments. Earlier assistant answers appear only as content-reference markers, so their detailed layout and storyboard could not be recovered. The specifics in this package are **new planning proposals**, not a claim that earlier details were approved.

## Event facts and uncertainty

| Field | Source-backed information | Publication rule |
| --- | --- | --- |
| Names | Arnel and Marilyn | Display as Arnel & Marilyn |
| Wedding date | October 29, 2026 | Display exactly |
| Ceremony venue | Santo Tomas de Villanueva Parish Pardo | Preserve source wording |
| Ceremony city | Cebu City | Display below venue |
| Ceremony time | Not printed in the supplied invitation | “Time to be confirmed”; never infer |
| Reception | “Reception follows at our home in Sitio Lumboy, Inayawan, Cebu City.” | Preserve the location description |
| Precise reception address and map pin | Not provided | “Exact address to be confirmed”; no guessed directions |
| Hashtag | Printed as “#ArnelFoundHis Marilyn” | Confirm intended spacing before presenting as a clickable hashtag |

The reception description is an area-level location, not a verified navigable address. The invitation does not give a separate reception start time. No RSVP contact, deadline, dress code, named hosts, or relationship story has been established.

## Included reference assets

The attachment retrieval order differed from the user's described order. Files are identified by their visible content:

| Planning reference | Original filename | Included file | Role |
| --- | --- | --- | --- |
| Couple photo 1 | IMG_0045.JPG | [Staircase couple photo](references/couple-01-staircase-original.JPG) | Later background removal; secondary portrait |
| Couple photo 2 | IMG_0316.JPG | [Outdoor couple photo](references/couple-02-outdoor-original.JPG) | Later background removal; proposed hero |
| Invitation / information reference | image(7).png | [Original invitation](references/invitation-information-original.png) | Exact event wording and visual reference |

These are unchanged originals. No background removal, retouching, website code, or deployment is included. Keep this package within the wedding planning group because it contains personal photographs and location information.

## Scope boundaries

The proposed first release is a single scrolling invitation with a clear date, ceremony and reception details, two couple images, a gift note, and a closing message. Maps, RSVP, calendar export, music, and countdowns are deferred options with explicit dependencies. They must not appear to work before their required information or service exists.

## Review priorities

- Confirm ceremony time, exact reception address, and an accurate reception pin.
- Confirm hashtag spelling and spacing.
- Review photo choices and approve future cutouts.
- Review the newly proposed layout, typography, motion, and edited gift wording.

This package is ready for review. It does not authorize or perform implementation.


---

<!-- Source: TECH_STACK.md -->

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


---

<!-- Source: DESIGN_SPEC.md -->

# Design Specification

**Direction:** Balanced Cinematic Luxury  
**Status:** Proposed visual details for review

## Design intent

Create a calm sequence of editorial scenes: an intimate portrait, a short invitation, practical details, a second portrait, and a warm closing. Luxury comes from proportion, typography, and deliberate pacing. Blue provides continuity; ivory keeps the page welcoming.

## Proposed palette

| Token | Color | Intended use |
| --- | --- | --- |
| Midnight blue | #17344A | Main text and primary action |
| Slate blue | #52758C | Secondary accents and dividers |
| Powder blue | #DCEAF2 | Broad background washes |
| Porcelain | #F8F6F1 | Main reading surface |
| Mist | #EEF3F6 | Alternate section background |
| Champagne | #B7A383 | Small decorative detail only |

Use midnight text on pale surfaces and porcelain text on midnight controls. Check actual contrast during implementation: normal text at least 4.5:1, large text and essential interface boundaries at least 3:1. Champagne is decorative, not a body-text color.

## Typography and spacing

Proposed pairing: Cormorant Garamond for names and headings, and Inter for body copy and controls, subject to license and visual review. Use one or two weights per family with sensible serif/sans fallbacks. Script lettering is optional for a tiny accent only; names must remain readable.

- Names: approximately 56–88 px on wide screens, 42–60 px on phones; allow separate lines.
- Section headings: 32–48 px desktop, 28–36 px phone.
- Body: 17–19 px with 1.55–1.7 line height; avoid delicate low-contrast text.
- Reading measure: about 55–65 characters.
- Content container: about 1120 px maximum with 20–24 px phone gutters.
- Section spacing: about 96–144 px desktop, 64–88 px phone.
- Controls: at least 44 × 44 px practical touch area, clear focus state.

These ranges guide composition; they are not a requirement to force all devices into identical dimensions.

## Content source and proposed copy

The event table in [README](README.md#event-facts-and-uncertainty) is the shared factual baseline. The source invitation reads:

> Please join us to celebrate our love and new beginnings!

Its gift note reads:

> Your presence on our big day is the best gift could ask for! If you were thinking of giving a gift, a monetary gift to help us start our new journey would be greatly appreciated

A proposed grammatical edit for review:

> Your presence on our big day is the best gift we could ask for. If you wish to give a gift, a monetary contribution toward our new journey would be greatly appreciated.

Use the edited version only after review. Do not add bank details, QR codes, registries, promises, or personal history. Keep the note optional in tone.

## Section-by-section layout

| Section | Wide-screen composition | Phone composition |
| --- | --- | --- |
| Hero | Names and date on the left; outdoor portrait cutout on the right over a soft blue field | Names and date first, portrait beneath; action stays easy to reach |
| Invitation | Centered short message with generous space and fine divider | Same message, shorter line length |
| Wedding details | Two balanced editorial panels for ceremony and reception | Ceremony then reception in document order |
| Portrait moment | Staircase cutout with a quiet asymmetrical blue shape | Portrait centered, no overlapping text |
| Gift note | Restrained porcelain panel, no payment emphasis | Single readable paragraph |
| Closing | Names, date, warm closing line; hashtag only after confirmation | Compact closing with “Back to top” |

Hero primary action: **View wedding details**, linking to the details section. An unobtrusive navigation row may provide “Details” and “Gift note”; keep it static initially. No opening envelope gate, forced loading sequence, or scroll locking is proposed.

### Ceremony panel

Display:
- October 29, 2026
- Santo Tomas de Villanueva Parish Pardo
- Cebu City
- Time to be confirmed

No assumed street address or map pin.

### Reception panel

Display the invitation wording: “Reception follows at our home in Sitio Lumboy, Inayawan, Cebu City.”

Add “Exact address to be confirmed.” Do not convert “follows” into a specific start time. A directions button is conditional on a host-verified pin.

## Couple images and future cutouts

| Asset | Observations from the supplied photo | Proposed treatment |
| --- | --- | --- |
| IMG_0316.JPG | Outdoor forehead-kiss pose; delicate veil; lower bodies extend beyond the frame | Hero portrait; preserve translucent veil, hair, hands, and original crop limits |
| IMG_0045.JPG | Couple holding hands on stairs; railing intersects/occludes parts of the scene; subjects stand at different levels | Secondary portrait; preserve the joined-hands composition and believable grounding |

Later background removal must retain identity, pose, clothing, natural skin texture, and source proportions. Remove scenery, not parts of the couple. Do not invent feet, hidden anatomy, clothing, or missing regions. If a railing occlusion prevents a convincing full cutout, use an honest tighter crop or a framed portrait fallback and request review.

Inspect transparent edges on both light and blue surfaces, especially the veil and fingers. Avoid white halos, hard erasure, excessive smoothing, and fake cast shadows. A subtle background glow may separate white clothing from porcelain.

Keep unchanged originals in references/. Future working masters and responsive exports belong in separate asset folders. Draft alt text should describe the couple's pose, for example “Arnel kisses Marilyn's forehead as they stand together.” Refine after the final crop.

## Responsive and inclusive behavior

Use natural document flow. At roughly 768 px, assess whether two-column sections still fit; collapse earlier if text or portraits become crowded. Review at 320, 390, 768, 1024, and 1440 px widths, plus landscape orientation and 200% zoom.

Keep text outside photographs, preserve logical heading order, offer a skip link, and keep all controls keyboard accessible. Decorative flowers, grain, and shapes receive no spoken description. Show image fallback text if a portrait fails to load. Print view should present the names, date, details, and uncertainty notes cleanly.

## Deferred design options

RSVP, dress code, entourage, story timeline, gallery expansion, countdown, calendar export, and music are outside the baseline. Add only when useful and supported by confirmed content. Music must be optional with an explicit play control if selected later.


---

<!-- Source: ANIMATION_STORYBOARD.md -->

# Animation Storyboard

**Status:** Proposed timing and behavior; no animation has been implemented.

The page should feel like a gentle sequence of wedding film frames while guests retain control of scrolling. All event information remains available without waiting for a performance.

## Shared motion rules

- Use opacity and short translations for most motion.
- Entrance easing proposal: cubic-bezier(0.22, 1, 0.36, 1).
- Control transitions: about 160–220 ms with a simple ease-out.
- Scroll reveals: about 550–750 ms, triggered once when roughly 15% of a section is visible.
- Keep translations around 12–24 px, reduced on smaller screens.
- Never restart reveals on every scroll reversal.
- Do not hide focused elements or move the viewport automatically.
- Motion is decorative; text and controls work if enhancement fails.

## Scene sequence

Times below are relative to each scene's trigger, not a fixed movie timeline.

| Scene | Trigger | Proposed choreography | Duration / sequence | Intended feeling |
| --- | --- | --- | --- | --- |
| 1. Arrival | Initial page ready | Hero names fade in with 16 px upward movement; date follows | Names 700 ms; date begins 100 ms later for 550 ms | Quiet welcome |
| 2. Portrait entrance | Hero image ready | Outdoor cutout fades in, translating upward 12 px; no face distortion or dramatic zoom | 850 ms, overlapping the name entrance | Intimacy and presence |
| 3. Invitation line | Message enters view | Message and fine divider reveal as a single group | 600 ms | A breath between scenes |
| 4. Event details | Details enter view | Heading then ceremony and reception panels; small stagger only on wide screens | 600 ms each; up to 100 ms stagger | Clear, calm information |
| 5. Second portrait | Portrait section enters view | Staircase cutout and soft background shape fade together | 700 ms | Personal editorial moment |
| 6. Gift note | Note enters view | One paragraph group fades, translating upward 12 px | 550 ms | Warm and unobtrusive |
| 7. Closing | Closing enters view | Names and final line fade together | 600 ms | Gentle finish |

On phones, shorten the hero sequence so the essential introduction feels complete within about one second. Show text immediately if the image is slow; the image can join later without shifting layout.

## Transitions between scenes

Let changing background colors and section spacing create the visual transitions. Avoid full-screen wipes, pinned scenes, scroll hijacking, mandatory swipes, continuous particle effects, and autoplay video.

A thin divider may fade into view. It should not draw attention away from ceremony or reception details. No continuous parallax is required for the balanced direction.

## Guest interactions

| Interaction | Expected response |
| --- | --- |
| “View wedding details” | Native anchor navigation; optional smooth scrolling when motion preference allows |
| Hover on a primary action | Small color change, no oversized bounce |
| Keyboard focus | Immediate visible outline with no delayed reveal |
| Tap | Clear pressed color; no dependence on hover |
| Back to top | Native anchor behavior, smooth only when appropriate |
| Verified directions link, if later added | Open the confirmed destination with a descriptive accessible label |

Do not make unconfirmed controls look actionable. Do not animate a disabled map control as an invitation to click.

## Reduced motion and failure behavior

When reduced motion is requested, show the final composition immediately. Remove translations, scroll smoothing, portrait movement, and staged delays. A brief opacity change up to 150 ms is optional, but instantaneous presentation is preferred.

The ordinary HTML/CSS state must be readable. Only apply reveal start states after enhancement is available. If the observer is unsupported, initialization fails, or scripts are disabled, content remains visible. If the user navigates directly to a section or focuses a control there, reveal it immediately.

## Image loading and interruption

Reserve each image's layout area before loading. Never blank a name or event panel because a portrait has not downloaded. A resize, tab switch, browser back navigation, or orientation change should not replay the opening sequence. Keep transformations limited to decorative wrappers so they do not disturb text measurement.

## Motion acceptance checklist

- Names and date are readable immediately or during a brief entrance, with no blocking overlay.
- Every section remains usable with scripts disabled and reduced motion enabled.
- Scrolling up does not cause repeated hiding or flashing.
- Keyboard focus never lands on an invisible control.
- Both portraits retain crisp faces and natural proportions during transitions.
- A representative phone scrolls smoothly with no visible layout jumps.
- Direct links to event details work before and after images load.


---

<!-- Source: WEBSITE_WALKTHROUGH.md -->

# Website Walkthrough

**Status:** Description of the proposed experience, not an existing live website.

## 1. Opening the invitation

A guest opens the wedding link on a phone. A porcelain and powder-blue scene presents **Arnel & Marilyn** and **October 29, 2026**. The outdoor portrait appears as a carefully prepared cutout, with its veil preserved against a soft blue backdrop.

A brief entrance adds warmth. There is no required tap to enter. The main action, **View wedding details**, jumps to the practical information. On a slow connection, the names, date, and action remain available while the portrait loads.

On a wider screen, text and portrait share the hero horizontally. On a phone, text leads and the portrait sits below it.

## 2. Reading the invitation

The guest scrolls into the invitation line:

“Please join us to celebrate our love and new beginnings!”

Generous space and a fine divider provide a quiet transition. No invented story about the couple is introduced.

## 3. Finding ceremony information

The ceremony panel shows the date and the source venue wording:

**October 29, 2026**  
**Santo Tomas de Villanueva Parish Pardo**  
**Cebu City**  
**Time to be confirmed**

The date is a wedding date, not a verified start timestamp. Until the hosts confirm a time, the site must not supply an assumed hour, countdown to a ceremony start, or timed calendar event.

A future ceremony map link appears only after the intended destination is checked with the hosts.

## 4. Finding the reception

The next panel reads:

“Reception follows at our home in Sitio Lumboy, Inayawan, Cebu City.”

It also states **Exact address to be confirmed**. Guests can understand the general location, but the site does not imply that this is enough for door-to-door navigation.

Before an exact address or pin is confirmed, omit an active directions button. Once confirmed, show a descriptive **Reception directions** link and retain readable location text in case maps cannot open. Do not invent a travel duration or a reception start time.

## 5. Seeing the second portrait

The staircase photo becomes a secondary portrait moment. Its future cutout should preserve both people and their joined hands. If the staircase railing prevents a clean result, a reviewed tighter crop or framed-image fallback is preferable to fabricated detail.

The section adds personality without creating a second gallery interaction or interrupting access to the event details.

## 6. Reading the gift note

The guest reaches a short, understated gift note based on the invitation. The proposed edited wording in DESIGN_SPEC.md needs review before publication.

The visual treatment stays as modest as the rest of the invitation. No payment form, account number, or QR code is part of this plan.

## 7. Reaching the closing

Names and date return with a simple proposed closing: “We look forward to celebrating with you.” The invitation's hashtag may be added after its intended spacing is confirmed. A **Back to top** link lets the guest return without searching.

RSVP is absent from the baseline because no response contact or workflow has been supplied. Do not show a form that cannot submit or claim that a response has been received.

## Alternative guest conditions

| Situation | Expected experience |
| --- | --- |
| Reduced motion enabled | Complete static composition; no translated entrances or smooth scrolling |
| Scripts unavailable | All event text and native links remain usable |
| Keyboard navigation | Logical order, visible focus, skip link, no focus trap |
| Images unavailable | Reserved layout and useful alternative text; event details remain readable |
| Narrow phone | Single column without horizontal scrolling |
| Enlarged text / 200% zoom | Content reflows and controls remain reachable |
| Direct link to details | Guest lands at details without needing the opening sequence |
| Map service unavailable | Confirmed written address remains visible once supplied |

## Practical guest questions

| Question | Current answer |
| --- | --- |
| Who is getting married? | Arnel and Marilyn |
| When is the wedding? | October 29, 2026 |
| What time does the ceremony start? | To be confirmed |
| Where is the ceremony? | Santo Tomas de Villanueva Parish Pardo, Cebu City |
| Where is the reception? | Their home in Sitio Lumboy, Inayawan, Cebu City; exact address to be confirmed |
| What time does the reception start? | No separate time supplied; invitation says it follows the ceremony |
| How do I RSVP? | No method supplied; feature deferred |
| What should I wear? | No dress code supplied |


---

<!-- Source: IMPLEMENTATION_PLAN.md -->

# Implementation Plan

**Status:** Future work only. This package contains no website implementation.

## Phase 1 — Confirm content and decisions

Review the proposed documents with the family. Record corrections in a single event-content source.

Required confirmations:
- Ceremony time, including AM/PM and intended local time.
- Precise reception address, a host-verified map pin, and how much location detail should be public.
- Intended hashtag spelling and spacing.
- Approval of the gift-note edit and closing copy.
- Which image leads, final crops, and approval of future background removal.

Optional decisions:
- Whether RSVP is needed; if so, contact/workflow, deadline, fields, recipient, and response handling.
- Whether a ceremony map link, music, calendar export, or countdown is useful.
- Font approval, publishing destination, and domain.

**Exit condition:** Each field is confirmed or explicitly retained as unconfirmed. Layout work can proceed with honest placeholders; enabling maps and time-specific features depends on verified information.

## Phase 2 — Prepare image assets

1. Duplicate the unchanged reference images into a future working asset area.
2. Remove the backgrounds from the two couple photos only.
3. Preserve the outdoor veil, hair edges, fingers, clothing, and visible source anatomy.
4. Resolve the staircase railing and different standing levels using an honest crop or framed fallback if necessary.
5. Inspect full-resolution cutouts against porcelain and blue backgrounds.
6. Obtain visual review, then create responsive delivery variants with preserved transparency.

**Deliverables:** Two reviewed portrait treatments, transparent masters where feasible, optimized variants, crop guidance, and final alt text.

**Exit condition:** No obvious halos, erased body detail, invented anatomy, or accidental identity changes. Background removal is not performed in this documentation stage.

## Phase 3 — Establish the visual composition

Prepare phone and wide-screen layout drafts using the approved content and portraits. Apply the proposed palette, font hierarchy, spacing, section order, and restrained floral accents.

Review the hero first: white clothing must remain distinct against the background, and names must stay readable. Confirm that ceremony and reception information is easy to find without watching animations.

**Exit condition:** Family review accepts the visual direction; narrow layouts have no clipping or text-over-photo conflicts.

## Phase 4 — Build the static page

When implementation is authorized, set up the proposed stack, record chosen stable versions, and create the semantic section structure. Centralize event content and uncertainty states. Add responsive images, appropriate headings, native anchor links, alternative text, and focus styling.

Implement the static reading experience before motion. Keep any unfinished optional feature absent from the guest interface.

**Exit condition:** The entire invitation is readable and navigable without animation or scripts; source facts match the invitation.

## Phase 5 — Add restrained motion

Implement the storyboard with CSS and one-time viewport reveal detection. Keep the initial content state visible unless animation enhancement initializes successfully.

Add the reduced-motion behavior, direct-anchor handling, and safe image-loading behavior. Check the experience on a representative phone before adding decorative complexity.

**Exit condition:** All storyboard acceptance checks pass and motion never blocks the guest's task.

## Phase 6 — Verify content and experience

| Review area | Evidence required |
| --- | --- |
| Event accuracy | Side-by-side review against the invitation and later host confirmations |
| Uncertainty | No fabricated ceremony time, reception address/pin, or reception time |
| Assets | Both image treatments reviewed on light and blue backgrounds |
| Responsive layout | Review at 320, 390, 768, 1024, and 1440 px plus landscape |
| Accessibility | Keyboard pass, visible focus, contrast check, screen-reader spot check, 200% zoom |
| Motion | Standard and reduced-motion checks; scripts-disabled check |
| Loading | Slow-network image behavior and no disruptive layout shifts |
| Links | Every anchor and any verified external destination checked |
| Performance | Measured mobile profile recorded against proposed budgets |
| Build | Production build succeeds and a preview renders correctly |
| Optional RSVP | If added, real submission, failure, and duplicate handling verified |

Use targeted automated checks for content constraints and link validity where helpful; visual review remains necessary for portraits and choreography. Record actual results rather than marking planned checks as completed.

**Exit condition:** No unresolved issue prevents guests from finding accurate event information. If time or address is still unknown, publication requires the family to accept the clearly stated unconfirmed text.

## Phase 7 — Review and publish later

Provide a reviewable preview. Obtain the family's final content and photo review, choose the hosting destination, and publish only within the later authorized scope. Check the final URL on a phone and confirm that any verified directions links open the intended locations.

Create a short handoff describing how to update event text, replace a photo, and rebuild or republish. Keep the source invitation and original photographs out of public delivery folders unless intentionally selected for publication.

## Dependencies and boundaries

| Task | Dependency |
| --- | --- |
| Layout draft | Current source-backed content plus visible uncertainty |
| Final portrait layout | Reviewed cutouts or approved fallback crops |
| Reception directions | Exact address and verified pin |
| Timed calendar export | Confirmed start time, timezone, and intended event duration |
| Countdown | Confirmed target timestamp and clear purpose |
| RSVP | Agreed workflow and functioning destination |
| Publication | Reviewed preview, confirmed destination, and later publishing authorization |

Do not substitute a midnight timestamp for an unknown ceremony time. Do not infer an address from a place name or photo. No schedule estimates or completed implementation claims are made in this package.

## Documentation maintenance

README.md holds the concise factual baseline and reference inventory. DESIGN_SPEC.md owns proposed layout and visual rules. ANIMATION_STORYBOARD.md owns motion. WEBSITE_WALKTHROUGH.md explains guest behavior. TECH_STACK.md owns proposed technical choices and sources. Keep these documents aligned after decisions change, then regenerate COMBINED_DOCUMENTATION.md and the ZIP.



