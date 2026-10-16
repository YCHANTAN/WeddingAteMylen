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

