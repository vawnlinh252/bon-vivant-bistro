import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          DEFAULT: '#6B1E2E',
          hover: '#541724',
          light: '#8B2C40',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          warm: '#F5EFE4',
          dark: '#EBE2D3',
        },
        gold: {
          DEFAULT: '#B8975A',
          hover: '#A08045',
          light: '#D4B982',
          muted: '#C5A880',
        },
        espresso: {
          DEFAULT: '#2A1A1D',
          muted: '#6B5A5D',
          subtle: '#8C7B7E',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-lora)', 'Baskerville', 'serif'],
      },
      boxShadow: {
        'subtle-gold': '0 4px 20px -2px rgba(184, 151, 90, 0.12)',
        'soft-card': '0 2px 12px rgba(42, 26, 29, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
