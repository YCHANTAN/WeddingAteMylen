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

