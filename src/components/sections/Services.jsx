import { motion } from 'framer-motion'
import { Code2, Cpu, Sparkles, Radar, Layers } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { fadeInUp, scaleHover, staggerContainer } from '../../utils/motion'

const services = [
  {
    title: 'Immersive Web Systems',
    description: 'Framer-grade hero systems, realtime lighting, and parallax canvases engineered for high-impact launches.',
    icon: Sparkles,
    highlights: ['Framer + WebGL hybrid', 'Realtime art direction', 'Accessibility baked-in'],
  },
  {
    title: 'AI-Assisted Personalization',
    description: 'Dynamic storytelling pipelines with AI scene variations and segment-aware CTA surfaces.',
    icon: Cpu,
    highlights: ['Predictive UI states', 'Adaptive narrative paths', 'Privacy-first analytics'],
  },
  {
    title: 'Dev-ready Design Ops',
    description: 'Production design systems, motion specs, and QA dashboards that keep teams shipping in sync.',
    icon: Code2,
    highlights: ['Storybook handoff', 'Token orchestration', 'Live QA feedback'],
  },
]

const extras = [
  {
    title: 'Telemetry Playground',
    description: 'Observe live journey data, micro-interactions, and conversion snapshots in one neon cockpit.',
    icon: Radar,
    metric: '4.3x avg. CTR lift',
  },
  {
    title: 'Scenario Library',
    description: 'Pre-built narrative patterns for fintech, AI, and SaaS, ready to customize with your brand DNA.',
    icon: Layers,
    metric: '22 curated flows',
  },
]

export default function Services() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.16, 0.08)}
      className="relative py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden />
      <div className="relative z-10 space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Capabilities</p>
          <h2 className="text-4xl font-semibold text-white">Cybernetic creative systems</h2>
          <p className="mx-auto max-w-3xl text-white/70">
            Modular services that plug directly into your growth engine. Built with resilient code, meticulous motion, and future-proof
            brand systems.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon, highlights }, index) => (
            <motion.div key={title} variants={fadeInUp(index * 0.1)} {...scaleHover}>
              <Card className="h-full bg-white/5 p-8">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyber-blue/20 text-cyber-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-base text-white/70">
                  <CardDescription className="text-base text-white/70">{description}</CardDescription>
                  <ul className="space-y-2 text-sm">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyber-blue shadow-glow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Launch {title.split(' ')[0]}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {extras.map(({ title, description, icon: Icon, metric }, index) => (
            <motion.div key={title} variants={fadeInUp(0.2 + index * 0.1)} className="rounded-2xl border border-white/10 p-8 glass-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyber-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-lg font-semibold text-white">{title}</p>
                </div>
                <span className="text-sm text-cyber-blue">{metric}</span>
              </div>
              <p className="mt-4 text-white/70">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
