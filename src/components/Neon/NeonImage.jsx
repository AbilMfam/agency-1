import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '../../utils/cn'

const accentGradients = {
  pulse: 'linear-gradient(135deg, rgba(79,139,253,0.35), rgba(242,60,255,0.25))',
  plasma: 'linear-gradient(145deg, rgba(155,92,255,0.4), rgba(24,240,200,0.2))',
  aurora: 'linear-gradient(120deg, rgba(92,225,255,0.35), rgba(15,12,65,0.4))',
  ember: 'linear-gradient(120deg, rgba(242,60,255,0.4), rgba(255,118,84,0.25))',
}

export function NeonImage({
  src = '/images/neon-abstract-1.png',
  alt = 'Neon visual frame',
  title,
  caption,
  accent = 'pulse',
  className,
  children,
}) {
  const accentOverlay = accentGradients[accent] || accentGradients.pulse
  const panelStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundClip: 'padding-box',
    WebkitBackgroundClip: 'padding-box',
  }

  const parallaxX = useMotionValue(0)
  const parallaxY = useMotionValue(0)
  const smoothX = useSpring(parallaxX, { stiffness: 120, damping: 20 })
  const smoothY = useSpring(parallaxY, { stiffness: 120, damping: 20 })

  const handleParallax = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 40
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 40
    parallaxX.set(x)
    parallaxY.set(y)
  }

  const resetParallax = () => {
    parallaxX.set(0)
    parallaxY.set(0)
  }

  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 45px rgba(79,139,253,0.35)',
          '0 0 80px rgba(79,139,253,0.5)',
          '0 0 45px rgba(79,139,253,0.35)',
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{
        scale: 1.04,
        boxShadow: '0 0 95px rgba(92,225,255,0.6), 0 0 65px rgba(242,60,255,0.45)',
      }}
      className={cn(
        'visual-panel visual-panel-flat border border-white/10 shadow-glow text-white overflow-hidden group isolate',
        className,
      )}
      style={{ ...panelStyle, x: smoothX, y: smoothY }}
      aria-label={alt}
      onMouseMove={handleParallax}
      onMouseLeave={resetParallax}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black/30 mix-blend-multiply" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-70"
        style={{ backgroundImage: accentOverlay }}
        aria-hidden
      />
      <div className="flex h-full flex-col justify-between">
        {title && (
          <p className="text-xs uppercase tracking-[0.4em] text-white/80">{title}</p>
        )}
        <div className="flex flex-col gap-3 text-white">
          {children}
          {caption && <span className="text-sm text-white/80">{caption}</span>}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18),_transparent_60%)] mix-blend-screen" />
      </div>
    </motion.div>
  )
}
