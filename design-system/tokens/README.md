# Tokens

`tokens.json` is the source of truth. Everything else in this folder is generated from it or hand-kept in sync with it.

| File | For | Notes |
|---|---|---|
| `tokens.json` | Everything | W3C DTCG draft format. Figma Variables, Style Dictionary and Tokens Studio all read this shape. |
| `tokens.css` | Web | Two tiers, three theme states. The only file the browser needs. |
| `tokens.ts` | React Native, Expo | Numbers in px rather than rem, since RN has no rem. |
| `tailwind.config.js` | Tailwind v3 | Replaces the default palette entirely. |
| `tailwind-v4.css` | Tailwind v4 | `@theme` block. Use instead of the config file, not alongside. |
| `verify-contrast.mjs` | CI | 38 pairs, zero failures. Run it on every PR. |

## Two tiers, and why it matters

**Tier 1 — primitives.** `--w-ink-900`, `--w-volt-500`, `--w-space-4`. Raw values. Theme-independent.

**Tier 2 — semantic.** `--w-text-primary`, `--w-bg-surface`, `--w-action-primary-bg`. What the thing is *for*.

Components reference **Tier 2 only**. A component using `var(--w-ink-600)` is a bug, even when it renders identically today, because it will not follow the theme and it hides the intent from the next person to read it.

This is why the dark theme is a fifty-line override rather than a second stylesheet.

## Theme states

Three, all handled in `tokens.css`:

```
:root                                          light (default)
@media (prefers-color-scheme: dark)
  :root:not([data-theme="light"])              system dark
:root[data-theme="dark"]                       explicit dark, wins in both directions
```

Light is the default and stays the default: the app is used outdoors in daylight more often than in the dark, and an auto-dark app in a sunlit street is unreadable.

## Adding a token

1. Add it to `tokens.json` with a `$description` saying what it is for.
2. Add the semantic alias to `tokens.css` Tier 2, in both light and dark.
3. Mirror it in `tokens.ts` and the Tailwind configs.
4. **If it is a colour, add every permitted foreground/background pair to `verify-contrast.mjs` and run it.**
5. Document the meaning in `foundations/01-colour.md`. A colour with no written meaning acquires the wrong one.

## Verifying

```bash
node verify-contrast.mjs
```

Exits non-zero on any failure. Wire it into CI. When it fails, fix the token rather than the test: it exists because "lighten that grey slightly, the mock looks busy" is the single most common way a palette stops being readable in daylight.

## Figma

`tokens.json` maps to Figma Variables directly: one collection per top-level group, with **Light** and **Dark** modes on the `semantic` collection only. Primitives have a single mode. Bind component properties to semantic variables, never to primitives, so the two stay in the same relationship they have in code.
