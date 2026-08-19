/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fp': {
          bg: '#080B14',
          secondary: '#0E1320',
          card: '#121827',
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
          accent: '#7C5CFC',
          'accent-soft': '#A78BFA',
          success: '#34D399',
          border: 'rgba(148, 163, 184, 0.14)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': ['2.375rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'hero-desktop': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #7C5CFC, #A78BFA)',
      },
      boxShadow: {
        'accent': '0 0 30px rgba(124, 92, 252, 0.25)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 60px rgba(124, 92, 252, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 92, 252, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 92, 252, 0.4)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
