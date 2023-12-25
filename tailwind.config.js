/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'appdark': '#0F172A',
        'applight': '#eff6ff',
      }
    },
    fontFamily: {
      'sans': ['Poppins Regular','Poppins','ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}

