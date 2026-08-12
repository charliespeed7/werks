# Components

Every component in this system is built for one situation: **a decision made in eleven seconds, one-handed, outdoors, possibly wearing gloves.** Where a component could be optimised for density or for elegance instead, it isn't.

## The component contract

Every component in this folder documents:

1. **Anatomy** — the parts, named
2. **Variants** — the permitted versions, and nothing else
3. **Sizes** — from `--w-control-*`, never arbitrary
4. **States** — default, hover, pressed, focus, disabled, loading, error
5. **Tokens** — semantic only. A component that references `--w-ink-900` is a bug.
6. **Accessibility** — target size, contrast, screen reader behaviour, reduced motion
7. **Do / Don't** — the mistakes that will actually be made

## Implementation

`components/werks.css` implements every component here as plain CSS classes on top of `tokens/tokens.css`. No framework, no build step, no dependencies. Port it to React, React Native, Svelte or anything else; the class names and the structure are the contract.

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/werks.css">
```

Open `preview/index.html` to see all of it rendered, in both themes.

## The set

| Component | File | Notes |
|---|---|---|
| Button | `buttons.md` | Four variants, four sizes |
| Input, textarea, select, field | `inputs.md` | Including money, phone, address |
| Card | `cards.md` | Base, job, **approval**, money, memory |
| Navigation | `navigation.md` | Tab bar, app bar, segmented, back |
| Sheet | `sheets.md` | Bottom sheet, action sheet, confirm |
| Voice input | `voice-input.md` | Six states, the mic dock |
| Status and feedback | `status-and-feedback.md` | Chip, banner, toast, empty, skeleton, audit timeline |

## What is deliberately absent

- **Modal dialogs.** Sheets do the job on a phone and can be dismissed one-handed.
- **Tooltips.** There is no hover on a phone. If a control needs explaining, label it properly.
- **Accordions in the main flow.** Hiding an approval's content behind a disclosure invites approving unread, which is the exact failure `01_vision` D6a is designed to prevent.
- **Tables.** A phone cannot show a table. Lists of rows, always.
- **Carousels.** No horizontal scrolling content, anywhere.
- **Progress bars.** Werks does not report its own effort.
- **Avatars with photographs.** Initials only.
- **Toggle switches for permissions.** Autonomy is granted per action class against evidence (`01_vision` D6a), not by a switch the owner flips once during onboarding and forgets. Permission surfaces show what has been earned and what has not; they are not preference toggles.
