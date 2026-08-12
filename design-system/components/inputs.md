# Inputs

Typing on a phone with cold or wet hands is the worst part of using any trade app. Every input in Werks is built on the assumption that the owner would rather not be using it, and that voice or a tap is usually the better path (`patterns/voice-first.md`).

## Field anatomy

```
Label                          ← 14px / 500 / text-secondary
┌────────────────────────────┐
│ Value or placeholder       │ ← 56px tall, 17px text, 1px border-control
└────────────────────────────┘
Hint or error                  ← 14px / text-secondary, or critical
```

Labels sit **above** the field. Always. Never a floating label, never a placeholder used as a label: both vanish the moment someone starts typing, which is exactly when a distracted person needs them.

## Sizes

| Size | Height | Use |
|---|---|---|
| `md` | 48 | Dense forms, settings |
| `lg` | 56 | **Default** |
| Textarea | min 120 | Message drafts, notes. Grows with content, never scrolls internally below 4 lines. |

Text inside an input is **17px** minimum. Below 16px, iOS zooms the viewport on focus, which is disorienting and hard to undo one-handed.

## States

| State | Treatment |
|---|---|
| Default | `bg-surface`, 1px `border-control` (3.42:1, meets WCAG 1.4.11) |
| Focus | 2px `border-strong` plus the focus ring. The border thickens inward so nothing reflows. |
| Filled | Same as default. A filled field is not a special state. |
| Error | 2px `critical` border, error text below with an icon, `aria-invalid="true"` |
| Disabled | `bg-disabled`, `text-disabled`, no border change |
| Read-only | No border, `bg-sunken`, with a `Copy` action if the value is a reference |

**Errors appear on blur or submit, never on keystroke.** Telling someone their phone number is invalid while they are still typing the fourth digit is a design that has not thought about people.

## Specialised fields

**Money.** Right-aligned, tabular figures, `£` prefix inside the field as a static affix. `inputmode="decimal"`. Never a spinner, never a stepper. Amounts here run into thousands.

**Phone.** `inputmode="tel"`, auto-grouped as `07700 900123`, with a `Call` affix button when the field holds a valid number. Never validate a UK mobile against a naive regex; accept what the owner types and flag only obvious impossibilities.

**Postcode.** `autocapitalize="characters"`, auto-spaced as `PE7 3RB`. This is the single most-typed value in the product after a name; get it right.

**Address.** One field with lookup, not five fields. The result fills a read-only block underneath with an `Edit` link. Nobody is typing a five-line address on a phone in a driveway.

**Date and time.** Native platform pickers, always. A custom calendar widget on a phone is slower, less accessible and worse-looking than the OS one, in every single case.

**Search.** One field, no filter chips underneath it by default, `type="search"` with a clear button at 48×48.

**Draft editor.** A textarea for editing a customer-facing message before approving. It shows a live character count only when the channel imposes a limit (SMS segments), never otherwise. See `cards.md`.

## Selects and choices

| Number of options | Control |
|---|---|
| 2 | Two buttons, side by side, or a segmented control |
| 3–5 | A list of radio rows, 56px each, full width, tappable across the whole row |
| 6+ | A sheet with a searchable list |
| Multiple | Checkbox rows, 56px each |

**No dropdown menus.** A native `<select>` on Android is acceptable in a settings screen and nowhere else. In the main flow, choices are rows or sheets, because rows are large, readable and thumb-reachable, and dropdowns are none of those.

Radio and checkbox controls are 24px visually with a 48px hit area covering the entire row. The label is tappable. The row has a 1px separator, not a box.

## Toggles

Used only for genuine on/off preferences (quiet hours, dark theme). **Never for permissions or autonomy**: `01_vision` D6a grants autonomy per action class against measured evidence, not by a switch the owner flips once during onboarding. A toggle in that position would be a false promise about how the system works.

## Keyboard

Set the right one, every time. Getting this wrong is the most common and most annoying mobile form bug.

```html
<input inputmode="tel"     autocomplete="tel">                  <!-- phone     -->
<input inputmode="email"   autocomplete="email">                <!-- email     -->
<input inputmode="decimal">                                     <!-- money     -->
<input inputmode="numeric" autocomplete="postal-code">          <!-- postcode  -->
<input autocapitalize="words" autocomplete="name">              <!-- name      -->
<textarea autocapitalize="sentences" enterkeyhint="done">       <!-- notes     -->
```

Also: `enterkeyhint` on every field so the return key says the right thing, and `autocomplete` on every field so the OS can fill it.

## Voice as an input method

Every textarea and every long-text field carries a mic affix. Speaking is faster than typing for anyone standing up, and it is the primary path for job notes. Rules are in `components/voice-input.md` and `patterns/voice-first.md`. The short version: transcription lands in the field as editable text, and it is never sent without the owner seeing it.

## Code

```html
<div class="w-field">
  <label class="w-field__label" for="postcode">Postcode</label>
  <input class="w-input w-input--lg" id="postcode" type="text"
         inputmode="numeric" autocapitalize="characters"
         autocomplete="postal-code" placeholder="PE7 3RB">
  <p class="w-field__hint">Where the job is, not where the customer lives.</p>
</div>

<div class="w-field w-field--error">
  <label class="w-field__label" for="phone">Phone</label>
  <input class="w-input w-input--lg" id="phone" type="tel"
         inputmode="tel" aria-invalid="true" aria-describedby="phone-err"
         value="0770 90012">
  <p class="w-field__error" id="phone-err">
    <svg class="w-icon w-icon--sm" aria-hidden="true">…</svg>
    That number is too short. Nothing has been sent.
  </p>
</div>

<div class="w-field">
  <label class="w-field__label" for="amount">Amount</label>
  <div class="w-input-group w-input-group--lg">
    <span class="w-input-group__affix" aria-hidden="true">£</span>
    <input class="w-input w-input--lg w-tabular" id="amount"
           inputmode="decimal" placeholder="0.00">
  </div>
</div>
```

## Accessibility

- Every input has a real `<label for>`. Placeholder text is never the label.
- Errors are linked with `aria-describedby` and marked `aria-invalid`.
- Error text is never colour-only: icon plus words, always.
- 56px targets, 8px apart.
- Never trap focus inside a field, and never auto-advance between fields; both break screen reader navigation and both are infuriating with gloves on.
- Field text is 17px so iOS does not zoom on focus.

## Do / Don't

| Do | Don't |
|---|---|
| Label above the field | Floating or placeholder labels |
| One address field with lookup | Five address fields |
| Native date and time pickers | A custom calendar |
| Rows and sheets for choices | Dropdown menus |
| Validate on blur | Validate on keystroke |
| Offer the mic | Assume typing |
