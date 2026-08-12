# Accessibility

The audience is largely men over thirty-five with hearing damage from years on tools, sun glare, cold hands, and reading glasses they have left in the van. Accessibility here is not a compliance exercise bolted on at the end. It is the same problem as designing for the job.

**Target: WCAG 2.2 AA, with AAA contrast on body text.**

## Contrast

Every permitted pair is verified in CI:

```bash
node tokens/verify-contrast.mjs
```

44 pairs, zero failures. Primary text is 16.84:1 against the canvas. Secondary is 6.78:1. Control borders clear 1.4.11 at 3.42:1. Status chips all clear 7:1.

The rule that keeps it that way: **never lighten a grey to make a mock look calmer.** Remove something from the screen instead. If a new pair is introduced, it goes into `verify-contrast.mjs` before it goes into a component.

## Colour is never the only signal

Binding, and stated in full in `foundations/01-colour.md`. Every status carries a word and usually an icon. In direct sunlight, `green-100` and `paper-100` are the same beige to everyone, which makes this a legibility rule as much as a colour-vision one.

## Targets

- 48×48 absolute minimum (WCAG 2.2 target size is 24×24; this system doubles it because of gloves)
- 56px default, 64px for primary actions
- 8px minimum between adjacent targets
- Hit areas extend past visual bounds

## Text scaling

- `html { font-size: 100% }`, everything in `rem`, OS text scaling always respected
- Every screen tested at 200%
- `min-height` on anything containing text, never `height`
- Buttons wrap rather than truncate
- Icon-plus-label rows stack above 130%
- Never `overflow: hidden` on a container holding user or customer text

## Motion

`prefers-reduced-motion` is honoured globally in `tokens.css`. The listening indicator, the only looping animation in the system, degrades to static bars plus a running timer, and the timer is always present so live state is never carried by motion alone.

## Screen readers

- Semantic HTML. Real `<button>`, real `<label for>`, real headings in order.
- Icons: `aria-hidden` when decorative, `aria-label` describing the action when standalone.
- Voice state changes announced through a polite live region.
- Sheets: `role="dialog"`, `aria-modal`, focus moved in and returned out, content behind marked `inert`.
- The Dot has a text equivalent: `aria-label="Waiting. Something needs you."`
- Money is announced as money: `aria-label="1,240 pounds"` where the visual is `£1,240`.
- Approval cards are a single labelled region so the whole draft can be read in one gesture before the buttons are reached.

## Focus

- Always visible, never removed. 3px ring, 2px offset.
- Ink on light (16.84:1), Volt on dark (16.23:1).
- Logical order following the visual order.
- Focus moves into sheets on open and back to the trigger on close.
- No focus traps outside sheets, and sheets are always escapable.

## Motor

- No gesture is the only way to do anything. Every swipe has a button equivalent.
- No long-press-then-drag, no pinch, no multi-finger gestures.
- Hold-to-talk has a tap-to-start alternative, applied automatically when assistive technology is detected.
- No time limits on any interaction. The only timed element in the system is the 6-second Undo, and its underlying action is always visible afterwards in the audit trail.
- Nothing requires precision. The smallest meaningful target is 48px.

## Hearing

- No audio output at all. Werks never speaks (`patterns/voice-first.md`).
- No information conveyed by sound alone.
- Haptics support, never replace, on-screen state.

## Cognitive

- One decision per screen.
- Plain language, short sentences, no jargon (`voice/voice-and-tone.md`).
- No timed pressure, no streaks, no counters designed to be cleared.
- Consistent placement: the primary action is always in the same place.
- Nothing hidden behind a gesture the owner has to remember.
- Everything autosaved. There is no way to lose work.

## Testing

Per screen, before it is called done:

1. `node tokens/verify-contrast.mjs` passes
2. Keyboard only, start to finish
3. VoiceOver on iOS and TalkBack on Android, start to finish
4. OS text at 200%
5. Reduced motion on
6. Greyscale filter: is every status still distinguishable?
7. Outdoors, real device, 40% brightness
8. Gloves

Items 7 and 8 are not standard accessibility tests. They are the two that this audience will actually fail on, and they belong on the same list.
