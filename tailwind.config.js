import animatePlugin from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        persian: ['Vazir', 'sans-serif'],
      },
      colors: {
        night: '#000000',
        'cyber-blue': '#4f8bfd',
        'neon-blue': '#4f8bfd',
        'aqua-glow': '#8fc0ff',
        'glow-blue': 'rgba(0, 120, 255, 0.35)',
        frost: 'rgba(255, 255, 255, 0.06)',
        'frost-border': 'rgba(255, 255, 255, 0.12)',
      },
      boxShadow: {
        glow: '0 0 45px rgba(79, 139, 253, 0.4)',
        halo: '0 0 120px rgba(79, 139, 253, 0.35)',
        neon: '0 15px 45px rgba(79, 139, 253, 0.35)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top, rgba(79, 139, 253, 0.35), transparent 60%)',
        'glow-grid':
          'linear-gradient(90deg, rgba(79, 139, 253, 0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(79, 139, 253, 0.08) 1px, transparent 1px)',
        'cyber-fade':
          'radial-gradient(circle at 20% 20%, rgba(79, 139, 253, 0.32), transparent 55%), radial-gradient(circle at 80% 0%, rgba(79, 139, 253, 0.25), transparent 60%)',
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5, filter: 'blur(40px)' },
          '50%': { opacity: 0.9, filter: 'blur(60px)' },
        },
        'accordion-down': {
          from: { height: 0, opacity: 0 },
          to: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
          to: { height: 0, opacity: 0 },
        },
      },
    },
  },
  plugins: [animatePlugin],
}

