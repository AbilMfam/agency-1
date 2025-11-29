import { useEffect } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'

export function NeonLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-night text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 mix-blend-screen opacity-70">
          <div className="grid-overlay w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,139,253,0.25),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(0,120,255,0.18),_transparent_60%)]" />
        <motion.div
          className="blur-blob top-10 left-0 bg-glow-blue"
          animate={{ x: [0, 80, -20], y: [0, -50, 20], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blur-blob bottom-0 right-0 bg-glow-blue"
          animate={{ x: [0, -60, 30], y: [0, 40, -10], scale: [1, 1.05, 0.98] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-10 top-1/4 h-64 w-64 rounded-full bg-cyber-blue/30 blur-[140px]"
          animate={{ opacity: [0.4, 0.8, 0.5], scale: [0.8, 1, 0.9] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="radial-highlight" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
