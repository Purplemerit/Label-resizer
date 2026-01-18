import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#590df2',
        'accent-purple': '#a78bfa',
        'gray-950': '#050505',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        base: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        '8xl': '6rem',
      },
<<<<<<< HEAD
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
=======
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    },
  },
  plugins: [],
}

export default config

