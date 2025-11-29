import { motion } from 'framer-motion'

export function NeonVisual() {
  return (
    <div className="relative flex items-center justify-center mix-blend-screen">
      <motion.div
        className="relative flex h-44 w-44 items-center justify-center rounded-full bg-cyan-400/20 backdrop-blur-xl ring-1 ring-cyan-500/40 shadow-[0_0_50px_#00eaff80] md:h-60 md:w-60"
        initial={{ opacity: 0, filter: 'blur(12px)', transform: 'scale(0.8)' }}
        animate={{ 
          opacity: 1, 
          filter: 'blur(0)', 
          transform: 'scale(1)',
          y: [-10, 10, -10], 
          rotate: [0, 360], 
          scale: [1, 1.06, 1] 
        }}
        transition={{ 
          duration: 1.2, 
          ease: 'easeOut',
          y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-b from-white/20 via-cyan-300/40 to-cyan-500/30 blur-[2px]" />
        <div className="absolute inset-5 rounded-full bg-cyan-200/30 blur-[10px]" />
        <motion.div
          className="relative h-14 w-14 rounded-full bg-cyan-200/70 shadow-[0_0_38px_rgba(0,234,255,0.8)]"
          animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.08, 0.92] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="absolute -right-4 -top-1.5 h-3.5 w-3.5 rounded-full bg-cyan-300/80 shadow-[0_0_14px_rgba(0,234,255,0.9)]"
          animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.span
          className="absolute -left-3 bottom-0 h-2.5 w-2.5 rounded-full bg-cyan-200/70 shadow-[0_0_12px_rgba(0,234,255,0.8)]"
          animate={{ y: [0, -4, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <div className="absolute inset-0 rounded-full border border-cyan-200/30" />
        <div className="absolute inset-0 rounded-full blur-[38px] bg-cyan-400/30" aria-hidden />
      </motion.div>
      <motion.div
        className="absolute h-44 w-10 rotate-45 bg-cyan-200/20 blur-[55px]"
        animate={{ opacity: [0.15, 0.4, 0.15], rotate: [30, 60, 30] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
    </div>
  )
}
