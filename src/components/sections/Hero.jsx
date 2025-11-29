import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Sparkles, Play, ShieldCheck } from 'lucide-react'
import { Button } from '../ui/button'
import { fadeInUp, staggerContainer, scaleHover } from '../../utils/motion'

const stats = [
  { label: 'Brands Elevated', value: '120+' },
  { label: 'Avg. ROI Lift', value: '4.3x' },
  { label: 'Campaign Runtime', value: '48h' },
]

const pillars = [
  'Realtime art-direction & QA',
  'AI-assisted personalization',
  'Privacy-first analytics',
]

export default function Hero() {
  const showcaseRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: showcaseRef, offset: ['start end', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-120, 80])

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.18, 0.1)}
      className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(71,163,255,0.25),_transparent_55%)]" aria-hidden />
      <div className="relative z-10 flex flex-col gap-16">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3 font-semibold tracking-wide text-white">
            <Sparkles className="h-5 w-5 text-cyber-blue" />
            Lumen Forge
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
            <Link className="hover:text-white transition-colors" to="/services">
              Services
            </Link>
            <a className="hover:text-white transition-colors" href="#cases">
              Case Studies
            </a>
            <a className="hover:text-white transition-colors" href="#process">
              Process
            </a>
            <a className="hover:text-white transition-colors" href="#faq">
              FAQ
            </a>
          </div>
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Book a Call
          </Button>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <motion.span variants={fadeInUp(0)} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
              <ShieldCheck className="h-4 w-4 text-cyber-blue" />
              Certified Framer & WebGL studio
            </motion.span>
            <motion.h1 variants={fadeInUp(0.1)} className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Neon-fueled digital experiences engineered for hyper-growth brands.
            </motion.h1>
            <motion.p variants={fadeInUp(0.2)} className="text-lg text-white/70 lg:max-w-xl">
              We concept, prototype, and deploy cinematic front-ends with realtime collaboration, fluid interactions, and cyber-grade polish.
            </motion.p>

            <motion.div variants={fadeInUp(0.3)} className="flex flex-col gap-4 sm:flex-row">
              <Button className="gap-2">
                Launch Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="gap-2 px-0 text-base">
                <Play className="h-4 w-4" /> Preview workflow
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp(0.35)} className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  {...scaleHover}
                  className="glass-card rounded-2xl px-4 py-6 text-center"
                >
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            ref={showcaseRef}
            style={{ y: parallaxY }}
            className="glass-card relative rounded-[32px] border-white/10 p-8 shadow-halo"
            variants={fadeInUp(0.2)}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/20 via-transparent to-transparent" aria-hidden />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Live prototype</span>
                <span>01 — 05</span>
              </div>
              <motion.div
                className="rounded-2xl border border-white/5 bg-black/60 p-6"
                animate={{ boxShadow: ['0 0 40px rgba(0,208,255,0.25)', '0 0 70px rgba(99,243,255,0.55)', '0 0 40px rgba(0,208,255,0.25)'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50">
                  <span>Neon mesh</span>
                  <span>Orbit mode</span>
                </div>
                <div className="mt-6 aspect-video rounded-xl bg-[radial-gradient(circle_at_center,_rgba(71,163,255,0.6),_transparent_60%)]" />
              </motion.div>
              <ul className="space-y-3 text-sm text-white/80">
                {pillars.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyber-blue shadow-glow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
