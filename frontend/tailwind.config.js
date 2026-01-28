/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-deep': '#020617',
        'background-card': '#0f172a',
        'accent-purple': '#a855f7',
        'accent-blue': '#3b82f6',
        'accent-cyan': '#06b6d4',
      }
    },
  },
  plugins: [],
}
