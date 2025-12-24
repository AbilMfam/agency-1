import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'
import { FloatingChatTrigger } from '../components/Chat/FloatingChatTrigger'

const BackgroundContext = createContext({
  updateBackground: () => {},
})

export function useBackground() {
  return useContext(BackgroundContext)
}

export function NeonLayout({ children, fullWidth = false, fullWidthHeader = false }) {
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
      <div className="relative min-h-screen bg-night text-white overflow-x-clip max-w-full">
        <motion.div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden
          animate={{ backgroundColor: bgColor }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 opacity-40 mix-blend-screen">
            <div className="grid-overlay neon-grid w-full h-full" />
          </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 30% 10%, rgba(255, 184, 0, 0.12), transparent 58%), radial-gradient(circle at 78% 32%, rgba(12, 27, 51, 0.9), transparent 65%)',
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
          className="blur-blob top-0 left-0"
          style={{ background: 'rgba(79, 139, 253, 0.1)' }}
          animate={{ x: [0, 120, -40], y: [0, -80, 20], scale: [0.9, 1.2, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blur-blob bottom-10 right-0"
          style={{ background: 'rgba(255, 92, 0, 0.08)' }}
          animate={{ x: [0, -90, 30], y: [0, 50, -20], scale: [1, 1.05, 0.95] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />  
        <motion.div
          className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full blur-[160px] max-w-full"
          style={{ background: 'rgba(255, 184, 0, 0.05)' }}
          animate={{ opacity: [0.2, 0.6, 0.3], scale: [0.8, 1.1, 0.9] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/5 top-20 h-[420px] w-[420px] rounded-full blur-[180px] max-w-full max-h-full"
          style={{ background: 'rgba(65, 105, 225, 0.065)' }}
          animate={{ opacity: [0.15, 0.55, 0.25], scale: [0.7, 1.15, 0.85] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
          <div className="radial-highlight" style={{ opacity: 0.42 }} />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/7 via-transparent to-transparent" />
        </motion.div>
        <motion.div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.5 }}
          >
            <path
              d="M 0,20 Q 200,0 400,20 T 800,20 L 800,0 L 0,0 Z"
              fill="none"
              stroke="#4f8bfd"
              strokeWidth="2"
              opacity="0.6"
            />
            <path
              d="M 0,100 Q 150,80 300,100 T 600,100 T 900,100 L 900,85 L 0,85 Z"
              fill="none"
              stroke="#FFB800"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M 0,180 Q 250,160 500,180 T 1000,180 L 1000,165 L 0,165 Z"
              fill="none"
              stroke="#4f8bfd"
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M 0,260 Q 180,240 360,260 T 720,260 T 1080,260 L 1080,245 L 0,245 Z"
              fill="none"
              stroke="#FFB800"
              strokeWidth="1.2"
              opacity="0.5"
            />
            <path
              d="M 0,340 Q 220,320 440,340 T 880,340 T 1320,340 L 1320,325 L 0,325 Z"
              fill="none"
              stroke="#4f8bfd"
              strokeWidth="0.8"
              opacity="0.4"
            />
            <path
              d="M 0,420 Q 160,400 320,420 T 640,420 T 960,420 T 1280,420 L 1280,405 L 0,405 Z"
              fill="none"
              stroke="#FFB800"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M 0,500 Q 190,480 380,500 T 760,500 T 1140,500 L 1140,485 L 0,485 Z"
              fill="none"
              stroke="#4f8bfd"
              strokeWidth="1.3"
              opacity="0.6"
            />
            <path
              d="M 0,580 Q 170,560 340,580 T 680,580 T 1020,580 L 1020,565 L 0,565 Z"
              fill="none"
              stroke="#FFB800"
              strokeWidth="0.9"
              opacity="0.4"
            />
            <path
              d="M 0,660 Q 210,640 420,660 T 840,660 T 1260,660 L 1260,645 L 0,645 Z"
              fill="none"
              stroke="#4f8bfd"
              strokeWidth="1.1"
              opacity="0.5"
            />
            <path
              d="M 0,740 Q 180,720 360,740 T 720,740 T 1080,740 L 1080,725 L 0,725 Z"
              fill="none"
              stroke="#FFB800"
              strokeWidth="1.4"
              opacity="0.6"
            />
            <path
              d="M 0,820 Q 200,800 400,820 T 800,820 T 1200,820 L 1200,805 L 0,805 Z"
              fill="none"
              stroke="#4f8bfd"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M 0,900 Q 150,880 300,900 T 600,900 T 900,900 L 900,885 L 0,885 Z"
              fill="none"
              stroke="#4f8bfd"
              strokeWidth="1.2"
              opacity="0.4"
            />
            <path
              d="M 0,980 Q 175,960 350,980 T 700,980 T 1050,980 L 1050,965 L 0,965 Z"
              fill="none"
              stroke="#FFB800"
              strokeWidth="0.8"
              opacity="0.5"
            />
          </svg>
        </motion.div>
        <div className="relative z-10 pb-16">
          {fullWidth ? (
            children
          ) : (
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 space-y-16 lg:space-y-24">
              {children}
            </div>
          )}
        </div>
        <FloatingChatTrigger />
      </div>
    </BackgroundContext.Provider>
  )
}
