import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { fadeInUp } from '../../utils/motion'

const studies = [
  {
    title: 'NeuroBank Quantum Launch',
    description: 'Realtime lending cockpit with neon liquidity maps and predictive onboarding states.',
    tags: ['Fintech', 'WebGL'],
    metrics: ['+62% conversion', '48h sprint'],
  },
  {
    title: 'Orbit AI Control Deck',
    description: 'Modular AI assistant interface with parallax story beats and adaptive CTA matrix.',
    tags: ['AI SaaS', 'Framer'],
    metrics: ['NPS 74', '3.6x engagement'],
  },
  {
    title: 'PulseCloud Analytics',
    description: 'Glassmorphism data platform with holographic diffusion gradients and live avatars.',
    tags: ['Data', 'Product'],
    metrics: ['2.3x session time', '3 weeks'],
  },
]

export default function CaseStudies() {
  return (
    <section
      id="cases"
      className="relative py-24 w-[100vw] max-w-none px-0"
    >
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_center,_rgba(71,163,255,0.2),_transparent_65%)]" aria-hidden />
      
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 text-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-aqua-glow">پرونده‌های برجسته</p>
          <h2 className="text-4xl font-semibold text-white">Cyber-native launch stories</h2>
          <p className="mx-auto text-white/70">
            Built for teams who need radical polish and realtime iteration. Each launch mixes parallax mesh work with strategic CRO.
          </p>
        </div>
      </div>

      <div
        className="relative z-10 left-1/2 w-screen max-w-none -translate-x-1/2 px-0 outline outline-1 outline-red-500"
        dir="ltr"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          breakpoints={{ 1024: { slidesPerView: 2 } }}
          className="w-full pb-16"
        >
          {studies.map((study, index) => (
            <SwiperSlide key={study.title}>
              <motion.div
                variants={fadeInUp(index * 0.05)}
                whileHover={{ scale: 1.01 }}
                className="glass-card h-full rounded-[32px] border border-white/10 bg-black/50 p-10"
              >
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-widest text-white/50">
                  {study.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{study.title}</h3>
                <p className="mt-3 text-white/70">{study.description}</p>
                <div className="mt-8 grid gap-4 text-sm text-white/80 md:grid-cols-2">
                  {study.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-center">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="mt-10 h-48 rounded-2xl border border-cyber-blue/30 bg-[radial-gradient(circle,_rgba(0,208,255,0.3),_transparent_70%)]" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
