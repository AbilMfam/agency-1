import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.7, ease: 'easeOut' },
  }),
}

export function GlowGallery({ items = [], className }) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2 xl:grid-cols-3', className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.label + index}
          custom={index}
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          whileHover={{ scale: 1.015 }}
          className="gallery-card group"
        >
          <div
            className="relative overflow-hidden rounded-[28px] border border-white/10"
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(79,139,253,0.35), rgba(0,0,0,0.6)), url(${item.src})`,
              backgroundSize: item.cover === false ? 'contain' : 'cover',
              backgroundPosition: 'center',
            }}
          >
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 opacity-40 mix-blend-screen"
              style={{ backgroundImage: item.overlay || 'radial-gradient(circle, rgba(92,225,255,0.3), transparent 65%)' }}
            />
            <div className="relative z-10 flex flex-col justify-between gap-4 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/70">
                <span>{item.label}</span>
                <span className="text-white/60">{item.tag}</span>
              </div>
              <p className="text-2xl font-semibold text-white">{item.title}</p>
              {item.caption && <p className="text-sm text-white/70">{item.caption}</p>}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
