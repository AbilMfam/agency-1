import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ArrowUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useBackground } from '../../layout/NeonLayout'

const showcaseProjects = [
  {
    title: 'نوآر ویب',
    description: 'طراحی رابط کاربری مدرن با تم نئونی',
    src: '/samples/1.jpg',
    accent: 'cyan'
  },
  {
    title: 'اسپکترام پلاس', 
    description: 'بازطراحی کامل وب‌سایت با انیمیشن‌های پیشرفته',
    src: '/samples/2.jpg',
    accent: 'purple'
  },
  {
    title: 'اوربیت شاپ',
    description: 'پلتفرم تجارت الکترونیک با طراحی ریسپانسیو',
    src: '/samples/3.jpg',
    accent: 'pink'
  }
]

const sectionFade = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } }
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } },
}

function useSectionBackground(color) {
  const { updateBackground } = useBackground()
  const { ref, inView } = useInView({ threshold: 0.3 })

  React.useEffect(() => {
    if (inView) {
      updateBackground(color)
    }
  }, [inView, color, updateBackground])

  return ref
}

export default function CinematicShowcase() {
  const sectionRef = useSectionBackground('#0A1428')

  return (
    <motion.section
      ref={sectionRef}
      id="cinematic-showcase"
      className="space-y-16 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">نمایش سینمایی</p>
        <h2 className="text-4xl font-semibold text-white">پروژه‌های برجسته</h2>
        <p className="text-white/70">آخرین کارهایی که به آنها افتخار می‌کنیم</p>
      </div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
      >
        {showcaseProjects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={staggerItem}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,224,255,0.08)] backdrop-blur-xl"
          >
            <div className="aspect-video overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4">{project.description}</p>
              
              <Button className="gap-2 bg-cyber-blue hover:bg-cyber-blue/80 text-white">
                <Play className="h-4 w-4" />
                مشاهده پروژه
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <motion.div
              className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyber-blue/70 to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
              aria-hidden
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}