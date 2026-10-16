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

