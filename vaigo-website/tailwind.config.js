/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],   // body
        heading: ['Lastica', 'cursive'],  // headings & nav
      },
      fontSize: {
        // Headings (smaller & tighter)
        h1: ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }], // ~28px mobile
        'h1-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // ~40px desktop
        h2: ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        'h2-lg': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        h3: ['1.25rem', { lineHeight: '1.3' }],
        nav: ['0.95rem', { lineHeight: '1.3', letterSpacing: '0.03em' }],

        // Body text
        base: ['1rem', { lineHeight: '1.6' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.65' }], // 18px
      },
    },
  },
  plugins: [],
}
