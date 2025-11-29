import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'

const BackgroundContext = createContext({
  updateBackground: () => {},
})

export function useBackground() {
  return useContext(BackgroundContext)
}

export function NeonLayout({ children }) {
  const [bgColor, setBgColor] = useState('#0A1428')

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

  const updateBackground = useCallback((color) => {
    if (typeof color === 'string') {
      setBgColor(color)
    }
  }, [])

  return (
    <BackgroundContext.Provider value={{ updateBackground }}>
      <div className="relative min-h-screen bg-night text-white overflow-hidden">
        <motion.div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden
          animate={{ backgroundColor: bgColor }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 opacity-55 mix-blend-screen">
            <div className="grid-overlay neon-grid w-full h-full" />
          </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 30% 10%, rgba(242, 60, 255, 0.14), transparent 58%), radial-gradient(circle at 78% 32%, rgba(12, 27, 51, 0.9), transparent 65%)',
            opacity: 0.58,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'conic-gradient(from 90deg at 30% 30%, rgba(7, 16, 33, 0.65), transparent 65%)',
            opacity: 0.48,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 20% 80%, rgba(7,16,33,0.55), transparent 55%)' }}
        />
        <motion.div
          className="blur-blob top-0 -left-10"
          style={{ background: 'rgba(0, 120, 255, 0.12)' }}
          animate={{ x: [0, 120, -40], y: [0, -80, 20], scale: [0.9, 1.2, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blur-blob bottom-10 -right-6"
          style={{ background: 'rgba(242, 60, 255, 0.1)' }}
          animate={{ x: [0, -90, 30], y: [0, 50, -20], scale: [1, 1.05, 0.95] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full blur-[160px]"
          style={{ background: 'rgba(24, 240, 200, 0.065)' }}
          animate={{ opacity: [0.2, 0.6, 0.3], scale: [0.8, 1.1, 0.9] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/5 top-20 h-[420px] w-[420px] rounded-full blur-[180px]"
          style={{ background: 'rgba(155, 92, 255, 0.065)' }}
          animate={{ opacity: [0.15, 0.55, 0.25], scale: [0.7, 1.15, 0.85] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
          <div className="radial-highlight" style={{ opacity: 0.42 }} />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/7 via-transparent to-transparent" />
        </motion.div>
        <div className="relative z-10 px-4 pb-16 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl space-y-16 lg:space-y-24">{children}</div>
        </div>
      </div>
    </BackgroundContext.Provider>
  )
}
