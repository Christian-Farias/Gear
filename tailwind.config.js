/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gear-surface': '#0C1019',
        'gear-surface-2': '#121826',
        'gear-blue': '#2563EB',
        'gear-text': '#F1EFEA',
        'gear-text-secondary': '#94A3B8',
        'gear-border': 'rgba(236, 234, 228, 0.1)',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'radial-glow': "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
}
