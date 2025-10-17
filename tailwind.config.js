/*
 * Tailwind CSS configuration for the Bender ARS website.
 *
 * Custom colour palette values are derived from the provided brand
 * palette. The palette is organised into nested objects for the
 * main hues (orange, blue, green, pink, red) with `light` and
 * `DEFAULT` shades. Neutral and primary values live under their own
 * keys. Text colours are grouped under the `text` key.
 */
/**
 * Tailwind configuration for the modern Bender ARS site.
 *
 * We’ve replaced the original light palette with a dark, futuristic colour
 * scheme inspired by the ReactBits design and Huly.io.  The new palette
 * emphasises deep blues and purples with bright highlights for calls to
 * action.  Font families remain unchanged to preserve readability.
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Dark colour scheme used throughout the site.  These values drive
         * the primary backgrounds, surfaces, accents and text colours.  See
         * README for guidance on how to use them.  The `dark` key holds
         * canonical names; the `brand` key provides aliases that map old
         * identifiers from the light theme (e.g. `brand-text-black`) onto
         * this palette.  This keeps existing component markup working
         * without rewriting every class by hand.
         */
        dark: {
          /** Primary background – very dark blue reminiscent of a night sky. */
          bg: '#0b0f19',
          /** Surface colours for cards and panels.  Slightly lighter than the
           * background to provide subtle contrast without harsh edges. */
          surface: '#111827',
          /** Accents used for highlights, buttons and interactive elements. */
          accent: '#db6902',
          /** Secondary accent for gradients and subtle highlights. */
          secondary: '#8fccff',
          /** Text colour for primary content. */
          text: 'bdd3ce',
          /** Muted text colour for secondary information. */
          muted: '#fcf3e3',
        },
        /**
         * Brand aliases – provide backwards‑compatible names for colours
         * referenced in the original website.  Each alias points to a value
         * from the dark palette so components using classes like
         * `text-brand-text-black` still compile and display properly.
         */
        brand: {
          neutral: {
            /** Off white backgrounds map to the base dark background. */
            offWhite: '#0b0f19',
            /** Card grey backgrounds map to the dark surface. */
            cardGrey: '#111827',
          },
          /** Blue hues map to the primary accent. */
          blue: {
            DEFAULT: '#8fccff',
          },
          /** Orange hues map to the secondary accent. */
          orange: {
            DEFAULT: '#db6902',
            /** A lighter version used for hover states; slightly brighter. */
            light: '#d8b4fe',
          },
          /** Text colours from the original palette. */
          text: {
            /** Primary text becomes the dark text colour. */
            black: '#f1f5f9',
            /** Light text becomes the dark muted colour. */
            light: '#94a3b8',
            /** Medium text uses the secondary accent for subtle emphasis. */
            medium: '#c084fc',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        /**
         * Simple horizontal scrolling animation used for the rolling gallery.
         */
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        /**
         * Glow animation for the laser flow effect.  Pulses the opacity of
         * the gradient bar to simulate energy flow.
         */
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        /**
         * Animation for the Squares background.  Squares float upwards
         * slowly to create a gentle drifting effect.  Each square
         * receives its own duration and delay via inline styles.
         */
        squareFloat: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-200%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
        squareFloat: 'squareFloat linear infinite',
      },
    },
  },
  plugins: [],
};