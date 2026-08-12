# Motion in the conversational layer

`foundations/05-motion.md` still governs. Nothing here overrides it except the single amendment in `00-principles.md`: the Dot may breathe while Werks is working.

Motion matters more in this layer than anywhere else in the product, for one reason: **a conversation has a sequence, and the sequence is information.** Who spoke, then who answered, then what Werks did about it. Motion here is how that order stays legible when four things land while the owner was under a floor. It is not decoration and there is still nothing in this product that moves to be delightful.

---

## Tokens

```css
--w-duration-word:     90ms;    /* one word landing in a live transcript */
--w-duration-bubble:   200ms;   /* a message arriving                    */
--w-duration-turn:     240ms;   /* the thread settling after a turn      */
--w-duration-collapse: 240ms;   /* a quiet block opening                 */
--w-duration-bargein:  120ms;   /* speech stopping. A ceiling, not a target. */
--w-duration-breath:   3200ms;  /* one breath of the Dot   (a loop period) */
--w-duration-ambient:  4800ms;  /* one ambient cycle       (a loop period) */

--w-stagger-word:      40ms;
--w-stagger-bubble:    60ms;
--w-stagger-option:    40ms;

--w-ease-breath:  cubic-bezier(0.37, 0, 0.63, 1);   /* symmetrical sine  */
--w-ease-arrive:  cubic-bezier(0.05, 0.7, 0.1, 1);  /* decelerate in     */
```

**No transition exceeds 280ms**, exactly as v1.0 requires. The two long values are loop *periods*, not transitions. A slow loop is calm; a fast one is a spinner.

---

## The specs

### A message arriving

| | |
|---|---|
| Duration | `--w-duration-bubble` (200ms) |
| Properties | `opacity 0 → 1`, `translateY 8px → 0` |
| Easing | `--w-ease-arrive` |
| Direction | Always upward, both speakers. Not sideways: a bubble sliding in from the left is a chat app doing an impression of a conversation. |
| Multiple at once | Stagger `--w-stagger-bubble` (60ms), oldest first, maximum 5 staggered. Beyond 5 they appear together, because a 12-message stagger is a title sequence. |
| Reduced motion | Appear. No fade, no rise. |

### The thread settling

After a bubble is added, the list closes or opens its gap over `--w-duration-turn` (240ms), `--w-ease-standard`. Never `height`: `transform` on a container with a known height, or FLIP. `foundations/05-motion.md`: anything animating `height` on a list is a bug.

**The thread never auto-scrolls under a reading owner.** New content while scrolled up produces a `1 new` pill, 200ms fade, no bounce, no arrow animation.

### A draft being approved

The one place a surface changes colour to confirm an action, and it earns it: the shape approved becomes the shape sent, in the same place.

| Step | Spec |
|---|---|
| 1 | Border goes dashed → solid, 120ms |
| 2 | Fill goes transparent → `--w-bubble-out-bg`, 200ms, `--w-ease-standard` |
| 3 | Text colour crossfades to `--w-bubble-out-fg`, 200ms, same curve |
| 4 | Actions below fade out over 180ms and the thread closes their gap over 180ms |
| 5 | Meta line fades in: `Sent 09:26` |
| Haptic | Medium impact, once, at step 1. From `foundations/05-motion.md`. |
| Reduced motion | The bubble is filled and the actions are gone. No steps. |

No scale, no bounce, no tick animation, no sound. It fills, it says it was sent, it stops.

### The live transcript

Per word: `opacity 0 → 1` and `translateY 2px → 0` over `--w-duration-word` (90ms), `--w-ease-arrive`, staggered `--w-stagger-word` (40ms).

The caret is a 2px Volt block at the end of the text. **It does not blink** — it moves as words are appended, and movement is the proof. A blinking caret with nothing arriving looks identical to a crashed recogniser.

Reduced motion: words appear at full opacity, no rise, no stagger, static caret.

### The read-along highlight

The word being spoken is `--w-text-primary`; text not yet reached is `--w-text-secondary`. Colour only, 90ms crossfade per word, `--w-ease-standard`.

No highlight box, no underline sweep, no karaoke fill, no scaling of the current word. This is a state change rendered as colour, so it is retained under reduced motion.

### The Dot breathing

Specified in full in `04-alive-states.md`. 3200ms, symmetrical sine, scale 0.86 → 1.0, opacity 0.55 → 1.0, `transform` and `opacity` only. Stops instantly when the work completes: **no fade-out.** Reduced motion: solid, full size, full opacity, plus the word.

### A quiet block opening

`--w-duration-collapse` (240ms), `--w-ease-standard`, `grid-template-rows: 0fr → 1fr` (or a measured height set as a custom property, if the target platform will not animate `fr`). The chevron rotates 180° over the same duration. It is the only rotating thing in the layer, and it is a direction indicator rather than a state icon, so it does not fall foul of "never animate an icon to convey state".

### Options appearing

Staggered `--w-stagger-option` (40ms), 200ms fade with a 4px rise. All options are on screen and readable **before** the first one is spoken. Speech waits for the list, not the other way round.

### Speech stopping

Audio: 60ms linear fade to silence, so it does not click. Visual: none. The read-along highlight simply stops where it stopped, and the text stays exactly as it was. Total time from the interrupt to silence: `--w-duration-bargein`, **120ms, hard ceiling.**

---

## What does not move in this layer

Everything in `foundations/05-motion.md`, plus:

- **Drafts do not stream in word by word.** They appear complete. Streaming invites the owner to start reading before the sentence exists, and approval requires reading the finished thing.
- **No typing indicator for Werks.** Three animated dots is a person pretending to type. The Dot already says it is working.
- **Money still never animates**, including inside a working card, a quote conversation or a spoken Brief.
- **The working card does not animate a fact landing.** 200ms fade, no slide, no highlight flash.
- **Nothing in an escalation moves.** The one state with zero motion, deliberately. See `03-conversational-patterns.md`.
- **Background work does not animate.** A ring, still, for as long as it takes.
- **No sound.** No earcons, no chimes, no start-of-listening tone, no send whoosh. The only audio in the product is Werks's own speech, and the only haptics are the four in `foundations/05-motion.md`.

---

## Reduced motion, in full

`prefers-reduced-motion: reduce` collapses every transition to 0.01ms globally in `tokens.css`. That is not sufficient on its own here, because several of these animations are carrying information. Each has a static equivalent, and it is not a lesser experience: it is the same information without the movement.

| Animation | Under reduced motion |
|---|---|
| Message arriving | Appears |
| Draft filling on approval | Filled, actions gone, `Sent 09:26` |
| Live transcript | Words appear, full opacity, no stagger. Static caret. |
| Read-along highlight | **Retained.** It is colour, not motion. |
| Dot breathing | Solid 12px, plus the word. Words appear immediately rather than after 2s. |
| Dot listening | Static bars at full height, plus the running timer. From v1.0, unchanged: **the timer is what proves recording is live.** |
| Quiet block opening | Opens instantly, chevron flips |
| Options appearing | All at once |
| Speech stopping | Identical. It was never animated. |

The rule underneath: **no state in this layer is knowable only through motion.** Every one has a word, a timer, a colour or a shape carrying the same fact. That is what makes it safe to switch all of it off.

---

## Performance

`transform` and `opacity` only, exactly as v1.0 requires. Specific to this layer:

- A thread is a virtualised list. Animate the arriving item, not the container.
- The staggered arrival cap of 5 exists for the four-year-old mid-range Android in the actual van, not for taste.
- The breathing Dot is one element with one compositor-friendly animation. Do not run it on more than one element at a time: `04-alive-states.md` requires one Dot per screen anyway.
- Never animate a `box-shadow`. Bubbles have no shadow.
- Pause every loop when the tab or app is not visible. A phone in a pocket animating a Volt dot is spending battery on nobody.
