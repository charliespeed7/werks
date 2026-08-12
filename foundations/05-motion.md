# Motion

Werks moves as little as possible. Motion here has one job: to explain where something came from and where it went, so the owner never has to work out what just changed.

Nothing in this product moves to be delightful.

## Durations

| Token | ms | Use |
|---|---|---|
| `instant` | 80 | Press states, ripple-free feedback |
| `quick` | 120 | Hover, focus, chip and toggle changes |
| `base` | 180 | **Default.** Fades, small position changes, list item removal |
| `calm` | 240 | Card expansion, screen transitions, toasts |
| `sheet` | 280 | Bottom sheets rising and dismissing |

Nothing exceeds 280ms. A person standing in the rain does not have 400ms.

## Easing

```
standard  cubic-bezier(0.2, 0, 0, 1)     everything by default
enter     cubic-bezier(0.05, 0.7, 0.1, 1) things arriving: sheets, toasts
exit      cubic-bezier(0.3, 0, 0.8, 0.15) things leaving
```

**No spring, no bounce, no overshoot, no elastic.** Overshoot reads as playful, and this product handles somebody's invoices.

## What is allowed to move

1. **Sheets** rise from the bottom edge and fall back to it. 280ms, `enter`.
2. **Approved items** leave the queue: 180ms fade with a 4px upward drift, then the list closes the gap over 180ms. The owner sees the item go so they know the tap registered.
3. **Press feedback**: 80ms background change. No ripple, no scale.
4. **Screen transitions**: a 12px horizontal slide with a fade, 240ms. Forward slides in from the right, back from the left.
5. **The listening indicator**: the only continuous animation in the system, described below.
6. **Skeletons**: a 1.4s opacity pulse between 100% and 60%. No shimmer sweep.

## What is not allowed to move

- Money figures. Never count up. A number animating from £0 to £6,400 is a slot machine, and this is the owner's actual cash.
- Icons, on state change. State is text.
- Anything on a loop, except the listening indicator.
- Anything on scroll: no parallax, no reveal-on-scroll, no sticky-header shrinking beyond an opacity change.
- Anything celebrating. No confetti, no success bounce, no haptic flourish on approval.
- The Dot, **except while Werks is working** (amended in v1.1, see `conversational/00-principles.md`). It sits still at idle, still while something waits for you, and still while a background task runs for three days. A pulsing dot is a notification badge begging for attention, which is the opposite of what this brand is. A dot that breathes *because a request is in flight* and stops the instant it lands is a status readout, and that is the only motion the Dot is permitted. The test: if the animation would still be running with nothing happening, it is a badge and it is banned.

## The listening animation

The single exception, and it earns it: while the microphone is recording, the owner needs continuous proof that audio is being captured. A static icon cannot prove that.

Three vertical bars, 3px wide, 4px apart, Volt on Ink, scaling on the Y axis between 0.4 and 1.0 over 1s, with each bar offset by 120ms.

```css
@keyframes listening {
  0%, 100% { transform: scaleY(0.4); }
  50%      { transform: scaleY(1); }
}
.w-listening-bar {
  animation: listening 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  transform-origin: center;
}
.w-listening-bar:nth-child(2) { animation-delay: 120ms; }
.w-listening-bar:nth-child(3) { animation-delay: 240ms; }
```

Where real amplitude data is available, drive the bar heights from it rather than from the keyframe loop. Real levels prove the microphone is hearing *this* room; a canned loop proves nothing and looks identical when the mic is muted. See `components/voice-input.md`.

## Reduced motion

`prefers-reduced-motion: reduce` is honoured globally in `tokens.css`. All transitions collapse to 0.01ms and loops run once.

The listening indicator must still show state without motion: under reduced motion it becomes three static bars at full height in Volt, plus the word "Listening" and a running timer. **The timer is what proves recording is live when animation is off**, so it is always present, not only in the reduced-motion case.

## Haptics

Native app only, and sparingly.

| Event | Haptic |
|---|---|
| Recording starts | Light impact |
| Recording ends | Light impact |
| Approve, send | Medium impact, once, at the moment the action commits |
| Destructive confirmation | Medium impact |
| Error, failed send | Notification error |
| Everything else | Nothing |

No haptic on scroll, on tab change, on toggle, or on arrival of a notification. Phones live in pockets on building sites; a chatty haptic is noise the owner cannot switch off without switching off the useful ones too.

## Performance

Animate `transform` and `opacity` only. Anything animating `height`, `top` or `box-shadow` on a list is a bug. Target 60fps on a four-year-old mid-range Android, which is the actual device in the actual van, not the newest iPhone on the design team's desk.
