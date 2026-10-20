/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gear-bg': '#07090E',
        'gear-surface': '#0C1019',
        'gear-surface-2': '#121826',
        'gear-surface-3': '#1A2234',
        'gear-blue': '#2563EB',
        'gear-blue-light': '#3B82F6',
        'gear-blue-hi': '#60A5FA',
        'gear-blue-glow': '#1D4ED8',
        'gear-cyan': '#38BDF8',
        'gear-coral': '#FF5C38',
        'gear-paper': '#ECEAE4',
        'gear-paper-muted': '#C8C5BB',
        'gear-text': '#F1EFEA',
        'gear-text-secondary': '#94A3B8',
        'gear-border': 'rgba(236, 234, 228, 0.1)',
        'gear-border-light': 'rgba(236, 234, 228, 0.18)',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'beam': 'beam 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        beam: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.15), transparent 70%)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
