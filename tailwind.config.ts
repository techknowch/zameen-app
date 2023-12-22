import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary-color': '#33a137',
        'light-grey': '#f7f7f7',
        'dark-grey': '#8a8a8a',
        'opaque': 'rgba(34,34,34,.85)',
      },
      colors: {
        primary: '#3490dc',
        secondary: '#8a8a8a',
      },
      height: {
        'custom': '450px',
      },
      width: {
        'custom': '600px',
      },
    },
  },
  plugins: [],
}
export default config
