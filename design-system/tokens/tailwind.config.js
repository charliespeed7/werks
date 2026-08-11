/**
 * Werks — Tailwind CSS v3 config.
 *
 * Colours resolve to CSS custom properties from tokens.css, so a theme switch
 * costs nothing at runtime and there is exactly one source of truth. Import
 * tokens.css before Tailwind's base layer.
 *
 * For Tailwind v4, use tailwind-v4.css instead of this file.
 *
 * Rule: prefer the semantic names (bg-surface, text-secondary, border-control)
 * over the primitives (bg-ink-900). Primitives are exposed for the marketing
 * site and the campaign work, not for product UI.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    // Replaces Tailwind's default palette entirely. There is no blue-500 here
    // and that is deliberate: an off-token colour should fail to compile.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      // --- semantic (use these) ---
      canvas:   'var(--w-bg-canvas)',
      surface:  'var(--w-bg-surface)',
      sunken:   'var(--w-bg-sunken)',
      raised:   'var(--w-bg-raised)',
      inverse:  'var(--w-bg-inverse)',
      scrim:    'var(--w-bg-scrim)',

      primary:     'var(--w-text-primary)',
      secondary:   'var(--w-text-secondary)',
      tertiary:    'var(--w-text-tertiary)',
      placeholder: 'var(--w-text-placeholder)',
      disabled:    'var(--w-text-disabled)',
      'on-inverse':'var(--w-text-inverse)',

      'border-subtle':  'var(--w-border-subtle)',
      'border-default': 'var(--w-border-default)',
      'border-control': 'var(--w-border-control)',
      'border-strong':  'var(--w-border-strong)',

      action: {
        DEFAULT:     'var(--w-action-primary-bg)',
        fg:          'var(--w-action-primary-fg)',
        hover:       'var(--w-action-primary-bg-hover)',
        pressed:     'var(--w-action-primary-bg-pressed)',
        destructive: 'var(--w-action-destructive-bg)',
        'destructive-fg': 'var(--w-action-destructive-fg)',
      },

      signal: {
        DEFAULT: 'var(--w-signal)',
        text:    'var(--w-signal-text)',
        tint:    'var(--w-signal-tint)',
      },

      positive:  { DEFAULT: 'var(--w-status-positive-strong)',  fg: 'var(--w-status-positive-fg)',  bg: 'var(--w-status-positive-bg)' },
      attention: { DEFAULT: 'var(--w-status-attention-strong)', fg: 'var(--w-status-attention-fg)', bg: 'var(--w-status-attention-bg)' },
      critical:  { DEFAULT: 'var(--w-status-critical-strong)',  fg: 'var(--w-status-critical-fg)',  bg: 'var(--w-status-critical-bg)' },
      scheduled: { DEFAULT: 'var(--w-status-scheduled-strong)', fg: 'var(--w-status-scheduled-fg)', bg: 'var(--w-status-scheduled-bg)' },
      waiting:   { fg: 'var(--w-status-neutral-fg)', bg: 'var(--w-status-neutral-bg)' },

      // --- primitives (campaign + marketing only) ---
      white: '#FFFFFF',
      paper: { 50: '#FBFAF8', 100: '#F5F3EF', 200: '#EBE8E2', 300: '#DCD8D0', 400: '#C2BDB3' },
      ink:   { 400: '#96918A', 450: '#8C877F', 500: '#78736C', 600: '#5C5851',
               700: '#403C36', 800: '#2A2724', 900: '#1A1917', 950: '#0F0E0D' },
      volt:  { 100: '#F2FFD1', 300: '#DCFF8A', 500: '#C3FF33', 700: '#7FAD00', 900: '#3F5600' },
    },

    spacing: {
      0: '0', px: '1px',
      1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.25rem', 6: '1.5rem',
      8: '2rem', 10: '2.5rem', 12: '3rem', 16: '4rem', 20: '5rem', 24: '6rem',
      // control heights, so `h-control-lg` is available
      'control-sm': '2.5rem', 'control-md': '3rem', 'control-lg': '3.5rem', 'control-xl': '4rem',
      'safe-b': 'env(safe-area-inset-bottom, 0px)',
      'safe-t': 'env(safe-area-inset-top, 0px)',
    },

    borderRadius: {
      none: '0', xs: '4px', sm: '6px', md: '10px', lg: '14px',
      xl: '20px', '2xl': '28px', full: '999px',
    },

    fontFamily: {
      display:   ['Archivo', 'system-ui', 'sans-serif'],
      sans:      ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      editorial: ['Newsreader', 'Georgia', 'serif'],
      mono:      ['JetBrains Mono', 'ui-monospace', 'monospace'],
    },

    fontSize: {
      '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      xs:    ['0.75rem',   { lineHeight: '1rem' }],
      sm:    ['0.875rem',  { lineHeight: '1.25rem' }],
      base:  ['1rem',      { lineHeight: '1.5rem' }],
      md:    ['1.0625rem', { lineHeight: '1.625rem' }],
      lg:    ['1.25rem',   { lineHeight: '1.75rem',  letterSpacing: '-0.01em' }],
      xl:    ['1.5rem',    { lineHeight: '1.875rem', letterSpacing: '-0.02em' }],
      '2xl': ['1.875rem',  { lineHeight: '2.125rem', letterSpacing: '-0.02em' }],
      '3xl': ['2.375rem',  { lineHeight: '2.5rem',   letterSpacing: '-0.03em' }],
      '4xl': ['3rem',      { lineHeight: '3rem',     letterSpacing: '-0.03em' }],
      '5xl': ['4rem',      { lineHeight: '3.75rem',  letterSpacing: '-0.03em' }],
    },

    fontWeight: {
      regular: '400', medium: '500', semibold: '600', bold: '700', black: '800',
    },

    boxShadow: {
      none: 'none',
      1: 'var(--w-shadow-1)', 2: 'var(--w-shadow-2)',
      3: 'var(--w-shadow-3)', 4: 'var(--w-shadow-4)',
      card: 'var(--w-elevation-card)', dock: 'var(--w-elevation-dock)', sheet: 'var(--w-elevation-sheet)',
    },

    transitionDuration: {
      instant: '80ms', quick: '120ms', DEFAULT: '180ms', calm: '240ms', sheet: '280ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.2, 0, 0, 1)',
      standard: 'cubic-bezier(0.2, 0, 0, 1)',
      enter: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
      exit: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    },

    zIndex: { base: '0', sticky: '100', dock: '200', scrim: '300', sheet: '310', toast: '400', modal: '500' },

    extend: {
      maxWidth: { content: '34rem', page: '72rem' },
      keyframes: {
        // The only looping animation in the system. See components/voice-input.md.
        listening: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%':      { transform: 'scaleY(1)' },
        },
        'sheet-in': {
          from: { transform: 'translateY(100%)' },
          to:   { transform: 'translateY(0)' },
        },
      },
      animation: {
        listening: 'listening 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sheet-in': 'sheet-in 280ms cubic-bezier(0.05, 0.7, 0.1, 1)',
      },
    },
  },
  plugins: [],
}
