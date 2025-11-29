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
        night: '#03050C',
        'cyber-blue': '#4f8bfd',
        'neon-blue': '#5ce1ff',
        'aqua-glow': '#8fc0ff',
        'neon-pink': '#f23cff',
        'plasma-purple': '#9b5cff',
        'laser-green': '#18f0c8',
        'glow-blue': 'rgba(0, 120, 255, 0.35)',
        frost: 'rgba(255, 255, 255, 0.06)',
        'frost-border': 'rgba(255, 255, 255, 0.12)',
      },
      boxShadow: {
        glow: '0 0 45px rgba(79, 139, 253, 0.4)',
        halo: '0 0 120px rgba(79, 139, 253, 0.35)',
        neon: '0 15px 45px rgba(79, 139, 253, 0.35)',
        'glow-frame': '0 0 140px rgba(79, 139, 253, 0.4), 0 25px 65px rgba(0, 0, 0, 0.55)',
        'orb-soft': '0 0 220px rgba(99, 163, 255, 0.55), 0 0 120px rgba(242, 60, 255, 0.35)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top, rgba(10, 20, 40, 0.85), transparent 60%)',
        'glow-grid':
          'linear-gradient(90deg, rgba(7, 16, 33, 0.85) 1px, transparent 1px), linear-gradient(180deg, rgba(7, 16, 33, 0.85) 1px, transparent 1px)',
        'cyber-fade':
          'radial-gradient(circle at 20% 20%, rgba(10, 20, 40, 0.78), transparent 55%), radial-gradient(circle at 80% 0%, rgba(7, 16, 33, 0.72), transparent 60%)',
        'neon-radial':
          'radial-gradient(circle at 30% 10%, rgba(10, 20, 40, 0.8), transparent 55%), radial-gradient(circle at 80% 35%, rgba(7, 16, 33, 0.7), transparent 60%)',
        'grid-cyber':
          'linear-gradient(90deg, rgba(7, 16, 33, 0.78) 1px, transparent 1px), linear-gradient(180deg, rgba(7, 16, 33, 0.78) 1px, transparent 1px)',
        'hero-beam':
          'conic-gradient(from 90deg at 30% 30%, rgba(10, 20, 40, 0.82), transparent 60%)',
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        orbFloat: 'orbFloat 16s ease-in-out infinite',
        glowDrift: 'glowDrift 18s ease-in-out infinite',
        galleryDrift: 'galleryDrift 14s linear infinite',
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
        orbFloat: {
          '0%': { transform: 'translate3d(-30px, 0, 0) scale(0.95)' },
          '50%': { transform: 'translate3d(30px, -20px, 0) scale(1.05)' },
          '100%': { transform: 'translate3d(-30px, 0, 0) scale(0.95)' },
        },
        glowDrift: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 0.35 },
          '50%': { transform: 'translate3d(40px, -30px, 0) scale(1.1)', opacity: 0.65 },
          '100%': { transform: 'translate3d(0, 0, 0) scale(1)' , opacity: 0.35 },
        },
        galleryDrift: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
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

