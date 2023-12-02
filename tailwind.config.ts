import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2rem'
        }
      }
    },
  },
  plugins: [
    nextui({
      defaultTheme: 'dark',
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {} // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {} // dark theme colors
        },
      }
    })
  ]
}
export default config
