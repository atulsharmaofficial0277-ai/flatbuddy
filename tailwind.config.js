/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F1A',
        surface: {
          DEFAULT: '#1A1A2E',
          glass: 'rgba(26, 26, 46, 0.75)',
        },
        primary: {
          DEFAULT: '#6C63FF',
          hover: '#5b52e0',
          glow: 'rgba(108, 99, 255, 0.25)',
        },
        accent: {
          DEFAULT: '#FF6584',
          hover: '#e55370',
          glow: 'rgba(255, 101, 132, 0.25)',
        },
        success: {
          DEFAULT: '#43C59E',
          glow: 'rgba(67, 197, 158, 0.3)',
        },
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#6C63FF',
          600: '#5b52e0',
          900: '#0F0F1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 30px -5px rgba(108, 99, 255, 0.35)',
        'glow-teal': '0 0 25px -4px rgba(67, 197, 158, 0.45)',
        'glow-coral': '0 0 25px -4px rgba(255, 101, 132, 0.45)',
        'glass-card': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
      },
      borderColor: {
        'glass-hairline': 'rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.88, transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
