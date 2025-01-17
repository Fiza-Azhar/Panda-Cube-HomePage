/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/home.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#9CA3AF', // Extend gray-400
          500: '#6B7280', // Extend gray-500
        },
        red: {
          500: '#EF4444', // Extend red-500
        },
        primary: '#E84133',
        secondary: '#1a5631',
        darkBrown: '#a12217',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        garamond: ['EB Garamond', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      headerBg: 'var(--header-bg-color)',
      headerText: 'var(--header-text-color)',
      heroText: 'var(--hero-text-color)',
      text: 'var(--grey-dark)',
      heroSectionItems: 'var(--hero-section-items)',
      footerBackgroundColor: 'var(--bg-footer-background)',
      heroSectionButtonsBackground: 'var(--heroSectionButtonsBackground)',
    },
  },
  plugins: [],
};
