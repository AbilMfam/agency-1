import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Play, Monitor, Smartphone } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useBackground } from '../layout/NeonLayout'
const sectionFade = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } },
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
const viewportConfig = { once: true, amount: 0.25 }
function useSectionBackground(color: string) {
  const { updateBackground } = useBackground() as any
  const { ref, inView } = useInView({ threshold: 0.3 })
  useEffect(() => {
    if (inView) {
      updateBackground(color)
    }
  }, [inView, color, updateBackground])
  return ref as any
}
export default function WebHero() {
  const sectionRef = useSectionBackground('#0a0a15')
  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      {/* Floating Geometric Mesh Background */}
      <div className="absolute inset-0">
        {/* Main Grid Pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(79, 139, 253, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 139, 253, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Floating Geometric Points */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`point-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: '#4f8bfd',
              left: `${10 + (i * 6.5)}%`,
              top: `${15 + (i * 5.5)}%`,
            }}
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
        {/* Connecting Lines (Subtle) */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${20 + i * 10}%`}
              y1={`${30 + i * 8}%`}
              x2={`${40 + i * 8}%`}
              y2={`${50 + i * 6}%`}
              stroke="#4f8bfd"
              strokeWidth="1"
              animate={{
                x2: [`${40 + i * 8}%`, `${45 + i * 8}%`, `${40 + i * 8}%`],
                y2: [`${50 + i * 6}%`, `${55 + i * 6}%`, `${50 + i * 6}%`],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            />
          ))}
        </svg>
        {/* Floating Shapes */}
        <motion.div
          className="absolute w-32 h-32 border border-blue-500/20"
          style={{
            left: '10%',
            top: '20%',
            transform: 'rotate(45deg)',
          }}
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-24 h-24 border border-blue-500/15 rounded-full"
          style={{
            right: '15%',
            bottom: '25%',
          }}
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>
      {/* Text Protection Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="absolute"
          style={{
            background: 'radial-gradient(circle at center, rgba(10, 10, 21, 0.9) 0%, rgba(10, 10, 21, 0.6) 40%, transparent 70%)',
            width: '800px',
            height: '600px',
          }}
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Web Design Excellence</span>
            </span>
          </motion.div>
          {/* Main Title */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            طراحی وب مدرن با
            <br />
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              تجربه‌ی بی‌نظیر
            </span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed"
          >
            وب‌سایت‌هایی که نه تنها زیبا هستند، بلکه نتایج تجاری واقعی به همراه دارند
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.div variants={staggerItem}>
              <Link to="/portfolio">
                <motion.div
                  className="group relative px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/20"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(79, 139, 253, 0.3)',
                    borderColor: 'rgba(79, 139, 253, 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    مشاهده نمونه‌کارها
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(45deg, rgba(79, 139, 253, 0.2), rgba(79, 139, 253, 0.1))',
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                    initial={{ opacity: 0 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link to="/contact">
                <motion.div
                  className="group relative px-8 py-4 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:border-white/30"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    شروع پروژه
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          {/* Feature Pills */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-3 pt-8"
          >
            {[
              { icon: Monitor, label: 'Responsive Design' },
              { icon: Smartphone, label: 'Mobile First' },
              { icon: ArrowUpRight, label: 'SEO Optimized' },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                variants={staggerItem}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <feature.icon className="h-4 w-4 text-blue-400" />
                <span className="text-white/80 text-sm">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #0a0a15, transparent)',
        }}
      />
    </motion.section>
  )
}