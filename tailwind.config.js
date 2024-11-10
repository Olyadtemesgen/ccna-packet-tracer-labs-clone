/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b-custom': 'linear-gradient(to bottom, #e8eaed, white)',
      },
      borderWidth: {
        '0.5': '0.5px', 
        '0.3': '0.3px',
      },
      colors: {
        primaryYellow: '#f3e8a1', 
        primaryPurple: '#a435f0',
        primaryBlack: '#1c1d1f',
        darkGray: '#3a3b3c', 
        lightGray: '#f7f9fa',
        starYellow: '#f4c150', 
        textGray: '#6a6f73', 
        hoveredPrimary: '#7d2db5',
        hoveredWhite: "#d7e0f5",
        blackHover: '#2D2F31',
        whiteBlue: "#f0f4f8",
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs-sm': '0.75rem', 
        'sm-base': '0.875rem', 
        'base-lg': '1.125rem', 
      },
    },
  },
  plugins: [],
}

