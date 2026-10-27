/** @type {import('tailwindcss').Config} */
export default {
  // Hover solo su dispositivi con puntatore fine: niente hover "bloccati" su touch
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Rubik"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.23, 1, 0.32, 1)',
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
        drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      boxShadow: {
        line: 'var(--shadow-border)',
        'line-hover': 'var(--shadow-border-hover)',
        float: 'var(--shadow-float)',
      },
      scale: {
        96: '0.96',
        97: '0.97',
        98: '0.98',
      },
      colors: {
        // Inchiostro navy dal logo: testo e superfici scure
        ink: {
          DEFAULT: '#0E1B2C',
          soft: '#1D2B3F',
          muted: '#5B6573',
        },
        // Sfondo caldo "sabbia"
        sand: {
          DEFAULT: '#F6F4EF',
          deep: '#ECE8DF',
        },
        // Ciano scuro per testo/link su fondo chiaro (contrasto AA)
        teal: {
          ink: '#0B7A70',
        },
        // Arancio dell'ancora nel logo, solo come piccolo accento
        anchor: '#E9A23B',
        primary: {
          DEFAULT: '#2cd5c4',
          light: '#00D9CC',
          dark: '#1A5F7A',
        },
        accent: {
          DEFAULT: '#9BE870',
          light: '#B5F090',
          dark: '#7AC050',
        },
      },
    },
  },
  plugins: [],
};
