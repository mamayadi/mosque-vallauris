/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          950: '#0a1f12',
          900: '#0d2e1a',
          800: '#1a472a',
          700: '#2d6a4f',
          600: '#40916c',
          400: '#74c69d',
        },
        beige: {
          50:  '#fffbf5',
          100: '#fdf6ec',
          200: '#f8f0e0',
          300: '#f0e4c8',
          400: '#e8d5b0',
          500: '#d4b896',
          600: '#c9a96e',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light:   '#e8c96a',
          dark:    '#a07c2a',
        },
      },
      fontFamily: {
        amiri:  ['Amiri', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
