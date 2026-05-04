/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#080B10',
          2: '#0D1117',
          3: '#111820',
        },
        surface: {
          DEFAULT: '#131B24',
          2: '#1A2433',
        },
        border: {
          DEFAULT: '#1E2D3D',
          2: '#243344',
        },
        text: {
          DEFAULT: '#E8EDF5',
          2: '#8B9BB4',
          3: '#4A5D73',
        },
        accent: {
          DEFAULT: '#00E5FF',
          purple: '#7B61FF',
          green: '#00FF94',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'ring': 'ring 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        ring: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}