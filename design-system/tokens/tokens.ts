/**
 * Werks design tokens — TypeScript export.
 *
 * For React Native, Expo, and anywhere CSS custom properties are unavailable.
 * On web, import `tokens.css` and use the custom properties directly so that
 * theming happens in the cascade rather than in JavaScript.
 *
 * Generated from tokens.json. Do not hand-edit both.
 */

export const primitive = {
  white:   '#FFFFFF',
  paper50: '#FBFAF8', paper100: '#F5F3EF', paper200: '#EBE8E2',
  paper300: '#DCD8D0', paper400: '#C2BDB3',
  ink400: '#96918A', ink450: '#8C877F', ink500: '#78736C', ink600: '#5C5851',
  ink700: '#403C36', ink800: '#2A2724', ink900: '#1A1917', ink950: '#0F0E0D',
  volt100: '#F2FFD1', volt300: '#DCFF8A', volt500: '#C3FF33',
  volt700: '#7FAD00', volt900: '#3F5600',
  green100: '#DCF3E9', green300: '#8FD9BC', green600: '#0E7C55', green800: '#0A4F37',
  amber100: '#FBEFD9', amber300: '#F0C77A', amber600: '#8F5A00', amber800: '#6E4400',
  red100: '#FBE5E1', red300: '#F0A79B', red600: '#B0271B', red800: '#731810',
  blue100: '#E2EEF8', blue300: '#9DC3E4', blue600: '#1A5C96', blue800: '#123C63',
  dkBg: '#0F0E0D', dkSurface: '#1A1917', dkRaised: '#26231F',
  dkBorder: '#35312C', dkBorderHi: '#6E6860', dkText: '#F5F3EF', dkText2: '#A8A29A',
} as const

const p = primitive

export const lightTheme = {
  bgCanvas: p.paper50, bgSurface: p.white, bgSunken: p.paper100,
  bgRaised: p.white, bgInverse: p.ink900, bgScrim: 'rgba(15,14,13,0.44)',
  bgHover: p.paper100, bgPressed: p.paper200, bgDisabled: p.paper200,

  textPrimary: p.ink900, textSecondary: p.ink600, textTertiary: p.ink500,
  textPlaceholder: p.ink500, textDisabled: p.ink400, textInverse: p.paper50,

  borderSubtle: p.paper200, borderDefault: p.paper300,
  borderControl: p.ink450, borderStrong: p.ink900,

  actionPrimaryBg: p.ink900, actionPrimaryFg: p.paper50,
  actionSecondaryBorder: p.ink450, actionSecondaryFg: p.ink900,
  actionQuietFg: p.ink600,
  actionDestructiveBg: p.red600, actionDestructiveFg: p.white,

  signal: p.volt500, signalText: p.volt900, signalTint: p.volt100,

  statusPositiveFg: p.green800, statusPositiveBg: p.green100, statusPositiveStrong: p.green600,
  statusAttentionFg: p.amber800, statusAttentionBg: p.amber100, statusAttentionStrong: p.amber600,
  statusCriticalFg: p.red800, statusCriticalBg: p.red100, statusCriticalStrong: p.red600,
  statusScheduledFg: p.blue800, statusScheduledBg: p.blue100, statusScheduledStrong: p.blue600,
  statusNeutralFg: p.ink900, statusNeutralBg: p.paper200,

  focusRing: p.ink900,
} as const

export const darkTheme: typeof lightTheme = {
  bgCanvas: p.dkBg, bgSurface: p.dkSurface, bgSunken: p.dkBg,
  bgRaised: p.dkRaised, bgInverse: p.paper50, bgScrim: 'rgba(0,0,0,0.64)',
  bgHover: p.dkRaised, bgPressed: p.dkBorder, bgDisabled: p.dkRaised,

  textPrimary: p.dkText, textSecondary: p.dkText2, textTertiary: p.ink450,
  textPlaceholder: p.ink450, textDisabled: p.ink500, textInverse: p.ink900,

  borderSubtle: p.dkBorder, borderDefault: p.dkBorder,
  borderControl: p.dkBorderHi, borderStrong: p.dkText,

  actionPrimaryBg: p.paper50, actionPrimaryFg: p.ink900,
  actionSecondaryBorder: p.dkBorderHi, actionSecondaryFg: p.dkText,
  actionQuietFg: p.dkText2,
  actionDestructiveBg: p.red300, actionDestructiveFg: p.ink900,

  signal: p.volt500, signalText: p.volt500, signalTint: p.dkRaised,

  statusPositiveFg: p.green300, statusPositiveBg: 'rgba(14,124,85,0.18)', statusPositiveStrong: p.green300,
  statusAttentionFg: p.amber300, statusAttentionBg: 'rgba(143,90,0,0.24)', statusAttentionStrong: p.amber300,
  statusCriticalFg: p.red300, statusCriticalBg: 'rgba(176,39,27,0.22)', statusCriticalStrong: p.red300,
  statusScheduledFg: p.blue300, statusScheduledBg: 'rgba(26,92,150,0.24)', statusScheduledStrong: p.blue300,
  statusNeutralFg: p.dkText, statusNeutralBg: p.dkRaised,

  focusRing: p.volt500,
}

export const space = {
  0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24,
  8: 32, 10: 40, 12: 48, 16: 64, 20: 80, 24: 96,
} as const

export const radius = {
  xs: 4, sm: 6, md: 10, lg: 14, xl: 20, '2xl': 28, full: 999,
} as const

/** Control heights in px. 48 is the floor for anything a gloved thumb must hit. */
export const size = {
  controlSm: 40, controlMd: 48, controlLg: 56, controlXl: 64,
  iconSm: 16, iconMd: 20, iconLg: 24, iconXl: 28,
  touchMin: 48, touchGlove: 56,
} as const

export const font = {
  display: 'Archivo',
  text: 'Inter',
  editorial: 'Newsreader',
  mono: 'JetBrainsMono',
} as const

/** fontSize in px, with the line height and tracking it must be set at. */
export const type = {
  '2xs':  { size: 11, lineHeight: 16, tracking: 0 },
  xs:     { size: 12, lineHeight: 16, tracking: 0 },
  sm:     { size: 14, lineHeight: 20, tracking: 0 },
  base:   { size: 16, lineHeight: 24, tracking: 0 },
  md:     { size: 17, lineHeight: 26, tracking: -0.17 },
  lg:     { size: 20, lineHeight: 28, tracking: -0.2 },
  xl:     { size: 24, lineHeight: 30, tracking: -0.48 },
  '2xl':  { size: 30, lineHeight: 34, tracking: -0.6 },
  '3xl':  { size: 38, lineHeight: 40, tracking: -1.14 },
  '4xl':  { size: 48, lineHeight: 48, tracking: -1.44 },
  '5xl':  { size: 64, lineHeight: 60, tracking: -1.92 },
} as const

export const duration = {
  instant: 80, quick: 120, base: 180, calm: 240, sheet: 280,
} as const

export const easing = {
  standard: [0.2, 0, 0, 1],
  enter: [0.05, 0.7, 0.1, 1],
  exit: [0.3, 0, 0.8, 0.15],
} as const

export const z = {
  base: 0, sticky: 100, dock: 200, scrim: 300, sheet: 310, toast: 400, modal: 500,
} as const

export type Theme = typeof lightTheme
export const themes = { light: lightTheme, dark: darkTheme } as const
