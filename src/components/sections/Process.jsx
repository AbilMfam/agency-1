import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/motion'
import { Button } from '../ui/button'
import { Sparkles, PenTool, Workflow, Terminal } from 'lucide-react'

const phases = [
  {
    title: 'Signal Capture',
    description: 'We translate your growth goals into interactive narratives with realtime Miro + Framer collaboration.',
    icon: Sparkles,
    duration: '48h research sprint',
  },
  {
    title: 'System Design',
    description: 'We assemble neon UI kits, motion specs, and dev-ready tokens with layered QA states.',
    icon: PenTool,
    duration: '1 week build',
  },
  {
    title: 'Cinematic Handoff',
    description: 'We deliver final prototypes plus code-ready libraries, QA footage, and telemetry dashboards.',
    icon: Workflow,
    duration: '72h launch support',
  },
]

export default function Process() {
  return (
    <motion.section
      id="process"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.15, 0.1)}
      className="relative py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-cyber-fade opacity-70" aria-hidden />
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Method</p>
          <h2 className="text-4xl font-semibold text-white">Hyper-responsive launch pipeline</h2>
          <p className="mx-auto max-w-3xl text-white/70">
            Precision sprints wired for async teams. We co-build with your squad inside FigJam, Framer, Linear, and Webflow.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {phases.map(({ title, description, icon: Icon, duration }, index) => (
            <motion.div key={title} variants={fadeInUp(index * 0.1)} className="relative">
              <div className="glass-card h-full rounded-[28px] border border-white/10 p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyber-blue">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/50">0{index + 1}</span>
                </div>
                <p className="mt-4 text-white/70">{description}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-cyber-blue">
                  {duration}
                </div>
              </div>
              {index < phases.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-12 translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="glass-card rounded-[32px] border border-white/10 p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
          variants={fadeInUp(0.3)}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">Deployment</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">Need dev-ready delivery?</h3>
            <p className="mt-3 text-white/70">
              We bridge Figma-to-React with production Storybook kits, Linaria/Tailwind tokens, and QA bots.
            </p>
          </div>
          <Button className="gap-2 text-base">
            <Terminal className="h-4 w-4" /> Request Dev Mode
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
