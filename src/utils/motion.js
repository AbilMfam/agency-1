export const fadeInUp = (delay = 0, duration = 0.8, offset = 40) => ({
  hidden: { opacity: 0, y: offset },
  show: { opacity: 1, y: 0, transition: { delay, duration, ease: 'easeOut' } },
})

export const fadeIn = (delay = 0, duration = 0.8) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay, duration, ease: 'easeOut' } },
})

export const staggerContainer = (stagger = 0.12, delayChildren = 0.2) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

export const scaleHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.99 },
}
