/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'appdark': '#0F172A'
      }
    },
    fontFamily: {
      'sans': ['Poppins Regular','ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}

