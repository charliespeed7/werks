#!/usr/bin/env node
/**
 * Werks contrast verifier.
 *
 * Every foreground/background pair the design system permits is listed here and
 * checked against WCAG 2.2. Run it in CI. If someone lightens a grey to make a
 * mock look nicer, this fails before it reaches a phone screen in daylight.
 *
 *   node tokens/verify-contrast.mjs
 *
 * Thresholds:
 *   text      4.5:1  (1.4.3)
 *   large     3.0:1  (>=24px, or >=19px bold)
 *   nonText   3.0:1  (1.4.11 — control borders, focus rings, icons carrying meaning)
 *   decor     none   (documented as decorative; must never be the only signal)
 *
 * Werks targets 7:1 for primary body text because the app is read outdoors.
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const tokens = JSON.parse(readFileSync(join(here, 'tokens.json'), 'utf8'))

const C = tokens.colour
const hex = (group, key) => C[group][key].$value

const P = {
  white: hex('paper', 'white'),
  'paper-50': hex('paper', '50'), 'paper-100': hex('paper', '100'),
  'paper-200': hex('paper', '200'), 'paper-300': hex('paper', '300'), 'paper-400': hex('paper', '400'),
  'ink-400': hex('ink', '400'), 'ink-450': hex('ink', '450'), 'ink-500': hex('ink', '500'),
  'ink-600': hex('ink', '600'), 'ink-700': hex('ink', '700'), 'ink-800': hex('ink', '800'),
  'ink-900': hex('ink', '900'), 'ink-950': hex('ink', '950'),
  'volt-100': hex('volt', '100'), 'volt-300': hex('volt', '300'), 'volt-500': hex('volt', '500'),
  'volt-700': hex('volt', '700'), 'volt-900': hex('volt', '900'),
  'green-100': hex('green', '100'), 'green-300': hex('green', '300'),
  'green-600': hex('green', '600'), 'green-800': hex('green', '800'),
  'amber-100': hex('amber', '100'), 'amber-300': hex('amber', '300'),
  'amber-600': hex('amber', '600'), 'amber-800': hex('amber', '800'),
  'red-100': hex('red', '100'), 'red-300': hex('red', '300'),
  'red-600': hex('red', '600'), 'red-800': hex('red', '800'),
  'blue-100': hex('blue', '100'), 'blue-300': hex('blue', '300'),
  'blue-600': hex('blue', '600'), 'blue-800': hex('blue', '800'),
  'dk-bg': C.dark.bg.$value, 'dk-surface': C.dark.surface.$value,
  'dk-raised': C.dark.raised.$value, 'dk-border': C.dark.border.$value,
  'dk-border-hi': C.dark.borderHi.$value, 'dk-text': C.dark.text.$value,
  'dk-text-2': C.dark.text2.$value,
}

const luminance = (h) => {
  const s = h.replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16) / 255)
  const f = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
}
const ratio = (a, b) => {
  const [la, lb] = [luminance(a), luminance(b)]
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05)
}

const MIN = { text: 4.5, large: 3, nonText: 3, decor: 0 }

/** [foreground, background, level, what it is used for] */
const PAIRS = [
  // --- light theme, on canvas ---
  ['ink-900', 'paper-50', 'text', 'Primary text'],
  ['ink-600', 'paper-50', 'text', 'Secondary text'],
  ['ink-500', 'paper-50', 'text', 'Tertiary text and placeholders'],
  ['ink-400', 'paper-50', 'decor', 'Disabled text — never the only signal'],
  ['green-600', 'paper-50', 'text', 'Paid / positive inline text'],
  ['amber-600', 'paper-50', 'text', 'Overdue / attention inline text'],
  ['red-600', 'paper-50', 'text', 'Critical inline text and destructive quiet button'],
  ['blue-600', 'paper-50', 'text', 'Scheduled inline text'],
  ['volt-900', 'paper-50', 'text', 'Signal as text on paper — the only permitted volt text'],
  ['volt-500', 'paper-50', 'decor', 'FORBIDDEN as text. Shape only, and only on ink.'],

  // --- light theme, on surface ---
  ['ink-900', 'white', 'text', 'Input value text'],
  ['ink-500', 'white', 'text', 'Input placeholder'],
  ['ink-450', 'white', 'nonText', 'Control border (1.4.11)'],
  ['ink-450', 'paper-50', 'nonText', 'Control border on canvas (1.4.11)'],

  // --- inverse surfaces ---
  ['paper-50', 'ink-900', 'text', 'Primary button label'],
  ['volt-500', 'ink-900', 'nonText', 'The Dot on ink'],
  ['volt-500', 'ink-950', 'nonText', 'The Dot on the mic dock'],
  ['ink-400', 'ink-900', 'text', 'Muted text on inverse surfaces'],

  // --- status chips ---
  ['green-800', 'green-100', 'text', 'Paid chip'],
  ['amber-800', 'amber-100', 'text', 'Overdue chip'],
  ['red-800', 'red-100', 'text', 'Red line chip'],
  ['blue-800', 'blue-100', 'text', 'Booked chip'],
  ['ink-900', 'paper-200', 'text', 'Awaiting approval chip'],
  ['volt-900', 'volt-100', 'text', 'Signal chip'],

  // --- dark theme ---
  ['dk-text', 'dk-bg', 'text', 'Primary text, dark'],
  ['dk-text', 'dk-surface', 'text', 'Primary text on card, dark'],
  ['dk-text-2', 'dk-bg', 'text', 'Secondary text, dark'],
  ['dk-text-2', 'dk-surface', 'text', 'Secondary text on card, dark'],
  ['ink-450', 'dk-bg', 'text', 'Tertiary text, dark'],
  ['dk-border-hi', 'dk-bg', 'nonText', 'Control border, dark (1.4.11)'],
  ['dk-border-hi', 'dk-surface', 'nonText', 'Control border on card, dark (1.4.11)'],
  ['volt-500', 'dk-bg', 'nonText', 'Focus ring and The Dot, dark'],
  ['green-300', 'dk-surface', 'text', 'Paid text, dark'],
  ['amber-300', 'dk-surface', 'text', 'Overdue text, dark'],
  ['red-300', 'dk-surface', 'text', 'Critical text, dark'],
  ['blue-300', 'dk-surface', 'text', 'Booked text, dark'],
  ['ink-900', 'paper-50', 'text', 'Primary button label, dark theme (inverted)'],
  ['ink-900', 'red-300', 'text', 'Destructive button label, dark theme'],

  // --- v1.1 conversational layer ---
  // Only pairs that are new. The business bubble (paper-50 on ink-900), the draft
  // outline (ink-450 / dk-border-hi on canvas) and Werks's own text on the canvas
  // are already covered above and are not repeated here.
  ['ink-900', 'paper-100', 'text', 'Customer message bubble'],
  ['ink-600', 'paper-100', 'text', 'Timestamp inside a customer bubble'],
  ['ink-450', 'paper-100', 'nonText', 'Uncertain-word underline inside a bubble (1.4.11)'],
  ['dk-text', 'dk-raised', 'text', 'Customer message bubble, dark'],
  ['dk-text-2', 'dk-raised', 'text', 'Timestamp inside a customer bubble, dark'],
  ['volt-500', 'dk-raised', 'nonText', 'The Dot on a raised surface, dark'],
]

let failures = 0
const rows = PAIRS.map(([fg, bg, level, use]) => {
  const r = ratio(P[fg], P[bg])
  const min = MIN[level]
  const pass = r >= min
  if (!pass) failures++
  return { fg, bg, level, use, r, min, pass }
})

const pad = (s, n) => String(s).padEnd(n)
console.log('\n  WERKS CONTRAST REPORT\n')
console.log(`  ${pad('FOREGROUND', 14)}${pad('BACKGROUND', 14)}${pad('RATIO', 9)}${pad('MIN', 6)}${pad('', 5)}USE`)
console.log('  ' + '-'.repeat(96))
for (const row of rows) {
  const mark = row.pass ? '  ok ' : ' FAIL'
  console.log(
    `  ${pad(row.fg, 14)}${pad(row.bg, 14)}${pad(row.r.toFixed(2) + ':1', 9)}${pad(
      row.min ? row.min.toFixed(1) : '—', 6
    )}${pad(mark, 5)}${row.use}`
  )
}

const body = rows.find((r) => r.fg === 'ink-900' && r.bg === 'paper-50')
console.log('\n  ' + '-'.repeat(96))
console.log(`  Body text on canvas: ${body.r.toFixed(2)}:1 (Werks outdoor target: 7:1)`)
console.log(`  ${rows.length} pairs checked, ${failures} failing.\n`)

if (failures > 0) {
  console.error('  Contrast check failed. Fix the token, not the test.\n')
  process.exit(1)
}
