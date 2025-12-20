import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { NeonVisual } from '../visuals/NeonVisual'

export function VisualHero({
  title = 'Neon Realm',
  subtitle,
  src = '/images/neon-hero-1.png',
  overlay = 'linear-gradient(130deg, rgba(79,139,253,0.45), rgba(0,0,0,0.4))',
  className,
  children,
}) {
  return (
    <section className={cn('relative isolate overflow-visible p-6 sm:p-10 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]', className)}>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          dir="ltr"
          className="relative z-10 flex w-full flex-col items-end justify-end gap-10 text-right text-white lg:flex-row lg:items-center lg:justify-between lg:gap-8"
        >
        <div className="flex w-full items-center justify-center lg:w-1/2 lg:flex lg:justify-center lg:items-center">
          <NeonVisual />
        </div>
        <div
          dir="rtl"
          className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 text-center mx-auto lg:w-1/2 lg:text-right lg:items-start"
          style={{ direction: 'rtl' }}
        >
          <div className="neon-chip text-white/70">Neon Studio</div>
          <motion.h1
            className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ y: 20, opacity: 0, filter: 'blur(12px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>
          {subtitle && (
          <motion.p 
            className="text-lg text-white/80"
            initial={{ y: 20, opacity: 0, filter: 'blur(12px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {subtitle}
          </motion.p>
        )}
          {children}
        </div>
        </div>
      </div>
      <motion.div
        className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-neon-pink/30 blur-[140px]"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.8, 1.1, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-10 bottom-6 h-64 w-64 rounded-full bg-laser-green/25 blur-[160px]"
        animate={{ opacity: [0.25, 0.6, 0.25], scale: [0.9, 1.12, 0.95] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
