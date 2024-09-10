/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underline: {
          '0%, 100%': { width: '0%', left: '0' },
          '50%': { width: '100%', left: '0' },
        },
        fadeOutInSequence: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '25%': { opacity: '0', transform: 'translateX(-20%)' },
          '50%': { opacity: '0', transform: 'translateX(20%)' },
          '75%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        underline: 'underline 2s ease-in-out infinite',
        'fade-out-in-sequence': 'fadeOutInSequence 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
