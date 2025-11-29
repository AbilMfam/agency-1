import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Button } from '../ui/button'
import { fadeInUp } from '../../utils/motion'

const faqs = [
  {
    question: 'How fast can you turn around a neon-grade hero section?',
    answer:
      'We ship concept-to-prototype in under 72 hours with live Figma + Framer collaboration, including parallax, hover physics, and QA footage.',
  },
  {
    question: 'Do you integrate with internal dev teams?',
    answer:
      'Yes. We deliver token sheets, Tailwind/Framer kits, Storybook stories, and async Loom breakdowns so your devs can implement without rework.',
  },
  {
    question: 'What tech stack do you use for motion + smooth scroll?',
    answer:
      'Framer Motion, Lenis, GLSL shaders when needed, plus bespoke WebGL canvases that remain performant on mid-tier hardware.',
  },
  {
    question: 'How do engagements start?',
    answer:
      'We begin with a 48-hour calibration sprint that maps your north-star KPIs, brand palette, and launch goals to a neon system plan.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_bottom,_rgba(0,208,255,0.25),_transparent_60%)]" aria-hidden />
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <motion.div variants={fadeInUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="text-sm uppercase tracking-[0.45em] text-aqua-glow">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Transparent workflows. Predictable launches.</h2>
          <p className="mt-4 text-white/70">
            Every engagement plugs into your Notion/Linear stack, with telemetry dashboards and async updates streaming in daily.
          </p>
          <Button className="mt-8">Book strategy sync</Button>
        </motion.div>
        <motion.div variants={fadeInUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
