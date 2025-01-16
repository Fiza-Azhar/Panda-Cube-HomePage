/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/home.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      merriweather: ['Merriweather', 'serif'],
      playfair: ['Playfair Display', 'serif'],
      garamond: ['EB Garamond', 'serif'],
      crimson: ['Crimson Text', 'serif'],
    },
    colors: {
      primary:'#E84133',
      secondary:'#1a5631',
      white:'#ffffff',
      black:'#000000', 
      headerBg: 'var(--header-bg-color)',
      headerText:'var(--header-text-color)',
      heroText:'var(--hero-text-color)',
      text: 'var(--grey-dark)',
      heroSectionItems:'var(--hero-section-items)',
      footerBackgroundColor: 'var(--bg-footer-background)',
      heroSectionButtonsBackground:'var(--heroSectionButtonsBackground)',
      darkBrown:'#a12217',
    },
  },
  plugins: [],
}