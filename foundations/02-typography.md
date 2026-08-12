# Typography

Editorial, confident, understated. The type does the work that colour is not allowed to do: it carries the entire hierarchy.

## The faces

| Role | Face | Why | Licence |
|---|---|---|---|
| **Display** | **Archivo** (variable, 100–900) | A grotesque drawn for headlines and highlight text. Tight, sturdy, slightly condensed at weight. Reads as newsprint rather than as software. Its Black weight is also the campaign face. | OFL, self-hostable |
| **Text / UI** | **Inter** (variable) | Built for screens at small sizes. Huge x-height, unambiguous `1lI` and `0O`, tabular figures, tuned hinting. Everything that must be read on a phone in a hurry. | OFL, self-hostable |
| **Editorial** | **Newsreader** (variable, optical size) | A serif with a newspaper voice. Used in exactly one place: the Daily Brief. | OFL, self-hostable |
| **Mono** | **JetBrains Mono** | Boiler serials, Gas Safe numbers, job references, meter readings. Anything the owner may need to read out or check character by character. | OFL, self-hostable |

All four are open licence, self-hostable, and variable. Nothing here depends on a font CDN or a per-seat licence.

**Paid upgrade path**, if the budget appears later: swap Archivo for **GT America Condensed** or **Druk** for display, and Inter for **Söhne**. The system is designed so this is a token change, not a redesign. Do not do it before there is a paying customer.

### The serif rule

Newsreader appears in **one place**: the Daily Brief headline and standfirst, and long-form marketing.

The Brief is the moment Werks speaks as a business partner rather than as a tool. It says what happened yesterday, what is waiting, and what it recommends. Giving that one surface a serif does more for "editorial, confident, understated" than restyling the whole app would, and it costs nothing anywhere else.

The serif never appears in a button, a label, a form, a chip, or a customer-facing message. If it starts spreading, the effect is gone.

## Scale

Mobile-first. These are the mobile values; the desktop overrides are at the end.

| Token | Size | Line height | Tracking | Face | Use |
|---|---|---|---|---|---|
| `2xs` | 11px | 16 | 0 | Text | Audit stamps, legal, timestamps in dense lists |
| `xs` | 12px | 16 | 0 | Text | Captions, metadata, chip text |
| `sm` | 14px | 20 | 0 | Text | Labels, secondary rows, button text at `sm` |
| `base` | 16px | 24 | 0 | Text | UI default. Buttons, list rows, inputs |
| `md` | 17px | 26 | −0.01em | Text | **Reading size.** Message bodies, drafts, anything the owner reads word by word |
| `lg` | 20px | 28 | −0.01em | Display | Card titles, sheet titles |
| `xl` | 24px | 30 | −0.02em | Display | Screen titles |
| `2xl` | 30px | 34 | −0.02em | Display | Section display, Brief headline (Editorial) |
| `3xl` | 38px | 40 | −0.03em | Display | Money figures |
| `4xl` | 48px | 48 | −0.03em | Display | Hero money, onboarding |
| `5xl` | 64px | 60 | −0.03em | Display | Marketing only |

### Why 17px for reading

The default UI size is 16px, but anything the owner reads as prose — a drafted text to a customer, a quote description, the Brief — is set at 17px. The audience skews to men over thirty-five reading in poor conditions with wet or dirty hands. One point of extra size on reading text costs nothing in layout and measurably reduces the number of people who need to bring the phone closer.

Never go below 12px. Never disable OS text scaling: `html { font-size: 100% }` and everything in `rem`. The app must survive iOS Larger Text at 200%, which is tested by the layout rules in `03-spacing-layout.md`.

## Weight

| Weight | Value | Use |
|---|---|---|
| Regular | 400 | Body, message content, descriptions |
| Medium | 500 | Labels, list row titles, metadata that needs to hold |
| Semibold | 600 | Button labels, card titles, screen titles |
| Bold | 700 | Money figures, the one thing on the screen that matters |
| Black | 800 | Display only, never below 24px. Wordmark and campaign. |

**Two weights per screen.** Regular plus one other. A screen using 400, 500, 600 and 700 has no hierarchy, it has noise. If a third weight seems necessary, the problem is usually spacing.

## Tracking

Tighten as size grows. Untracked large type looks loose and amateurish; over-tracked small type is unreadable on a phone.

- 38px and above: `−0.03em`
- 24–30px: `−0.02em`
- 17–20px: `−0.01em`
- 16px and below: `0`
- Overline / eyebrow labels (11–12px, uppercase, 500): `+0.08em`

## Numbers

Money is the product. `01_vision` D2 and D3 make it the thing Werks is sold on, so numbers get more care than anything else in the system.

- **Money is Display, Bold, tabular.** `font-variant-numeric: tabular-nums` on every figure, always, so a list of amounts does not shiver as it updates.
- **Currency symbol matches the figure size.** No superscript pence, no small-caps pound sign. `£1,240`, not `£1,240.00` — drop `.00` when it is round, keep pence when they exist.
- **Never abbreviate money.** `£6,400`, never `£6.4k`. This is somebody's actual cash.
- **Never colour a money figure by sentiment.** A large number is not good news and a small one is not bad news. Ink, always. Colour goes on the status chip beside it.
- **Dates:** `12 Aug`, `12 Aug 2026` when the year is not obvious, `Tue 12 Aug` when the day matters. Never `12/08/2026`.
- **Times:** 24-hour, `09:30`. Trades work to a diary, not to am/pm.
- **Relative time only under seven days:** `2 hours ago`, `Yesterday`, `3 days ago`, then the date. `47 days ago` is a number nobody can picture; `26 Jun` is.
- **Phone numbers** are grouped `07700 900123` and are always tappable.
- **Serials and references** are mono, uppercase, with the reference type as a label above rather than inline.

## The Daily Brief

The one place the system uses the editorial face.

```
OVERLINE   11px / Inter 500 / +0.08em / uppercase / text-secondary
           "Wednesday 12 August"

HEADLINE   30px / Newsreader 500 / −0.02em / text-primary
           "Two quotes went out. £2,400 is still sitting at 45 days."

STANDFIRST 17px / Inter 400 / text-secondary
           "Four things are waiting for you. The oldest has been there since Monday."
```

The headline is a sentence about the business, not a label. It is written by the same rules as everything else in `voice/voice-and-tone.md`: outcome first, money in real numbers, no adjectives.

## Application

```css
.w-screen-title { font: 600 var(--w-text-xl)/1.25 var(--w-font-display); letter-spacing: -0.02em; }
.w-card-title   { font: 600 var(--w-text-lg)/1.4  var(--w-font-display); letter-spacing: -0.01em; }
.w-body         { font: 400 var(--w-text-md)/1.53 var(--w-font-text); }
.w-ui           { font: 400 var(--w-text-base)/1.5 var(--w-font-text); }
.w-label        { font: 500 var(--w-text-sm)/1.43 var(--w-font-text); }
.w-meta         { font: 400 var(--w-text-xs)/1.33 var(--w-font-text); color: var(--w-text-secondary); }
.w-overline     { font: 500 var(--w-text-2xs)/1.45 var(--w-font-text);
                  letter-spacing: 0.08em; text-transform: uppercase; color: var(--w-text-secondary); }
.w-money        { font: 700 var(--w-text-3xl)/1.05 var(--w-font-display);
                  letter-spacing: -0.03em; font-variant-numeric: tabular-nums; }
.w-brief        { font: 500 var(--w-text-2xl)/1.15 var(--w-font-editorial); letter-spacing: -0.02em; }
.w-ref          { font: 400 var(--w-text-sm)/1.43 var(--w-font-mono); text-transform: uppercase; }
```

## Measure

Reading text is capped at **34rem / 544px** (`--w-max-content`), roughly 65 characters. On a phone this never binds; on a tablet or the web approvals view it stops a drafted message spanning the full width, which is the fastest way to make a paragraph unreadable.

## Desktop overrides

The product is phone-first (`MASTER_CONTEXT`, product principles). Desktop exists for the occasional evening on a laptop and for the marketing site. At `min-width: 768px`, step display sizes up one notch and leave everything readable unchanged:

| Token | Mobile | Desktop |
|---|---|---|
| `xl` (screen title) | 24px | 30px |
| `2xl` | 30px | 38px |
| `3xl` (money) | 38px | 48px |
| `4xl` | 48px | 64px |
| Body, UI, labels | unchanged | unchanged |

Body text does not grow on desktop. Sixteen and seventeen pixels are correct at every width; growing them just makes the page look like a slide.

## Loading

Self-host as `woff2` variable fonts, subset to Latin plus `£`. Preload the two faces that appear above the fold — Inter and Archivo — and let Newsreader and the mono load lazily.

Use `font-display: swap` with a metrics-matched fallback so text is readable on the first paint. Trade sites are opened on poor mobile signal in a driveway; invisible text while a font loads is worse than a fallback for a moment.

```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter-var.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-display: swap;
  unicode-range: U+0000-00FF, U+2018-2019, U+201C-201D, U+00A3;
}
```
