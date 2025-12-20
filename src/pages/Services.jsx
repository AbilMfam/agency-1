import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ArrowUpRight,
  Play,
  ChevronDown,
  Search,
  PenTool,
  Code2,
  Gauge,
  ShieldCheck,
  Monitor,
  BarChart3,
  Video,
  Box,
  Palette,
  Users,
  Zap,
  Target,
  Rocket,
  Globe,
  Smartphone,
  Camera,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import { Button } from '../components/ui/button'
import { VisualHero } from '../components/Neon/VisualHero'
import { NeonImage } from '../components/Neon/NeonImage'
import { NeonAboutVisual } from '../components/Neon/NeonAboutVisual'
import { NeonNavbar } from '../components/Neon/NeonNavbar'
import Footer from '../components/sections/Footer'
import { useBackground } from '../layout/NeonLayout'

const services = [
  {
    title: 'طراحی سایت',
    subtitle: 'UI/UX + پرفورمنس',
    description: 'ساخت تجربه‌های دیجیتال سریع، مدرن و نئونی با تمرکز بر کاربری و بهینه‌سازی کامل',
    icon: Monitor,
    accent: 'cyber-blue',
    image: '/samples/1.jpg',
    features: ['طراحی ریسپانسیو', 'بهینه‌سازی سرعت', 'سئو داخلی', 'تجربه کاربری برتر']
  },
  {
    title: 'سئو و بهینه‌سازی',
    subtitle: 'SEO + Performance',
    description: 'افزایش رتبه در گوگل و بهینه‌سازی کامل برای موتورهای جستجو با استراتژی‌های هوشمند',
    icon: BarChart3,
    accent: 'laser-green',
    image: '/samples/2.jpg',
    features: ['تحلیل رقبا', 'کلمات کلیدی', 'لینک‌سازی', 'گزارش‌دهی ماهانه']
  },
  {
    title: 'تولید محتوای اینستاگرام',
    subtitle: 'Content Creation',
    description: 'خلق محتوای بصری جذاب و حرفه‌ای برای رشد برند شما در شبکه‌های اجتماعی',
    icon: Camera,
    accent: 'neon-pink',
    image: '/samples/3.jpg',
    features: ['عکاسی حرفه‌ای', 'ویدئو موشن', 'استراتژی محتوا', 'تحلیل عملکرد']
  },
  {
    title: 'تدوین ویدئو و موشن‌گرافیک',
    subtitle: 'Video + Motion',
    description: 'تولید ویدئوهای سینمایی و انیمیشن‌های خلاقانه برای ارتقای برند شما',
    icon: Video,
    accent: 'plasma-purple',
    image: '/samples/4.jpg',
    features: ['تدوین حرفه‌ای', 'افکت‌های ویژه', 'انیمیشن 2D/3D', 'رنگ‌آمیزی سینمایی']
  },
  {
    title: 'طراحی سه‌بعدی',
    subtitle: '3D Design',
    description: 'خلق دنیاهای سه‌بعدی و مدل‌های دیجیتال برای محصولات و برندینگ مدرن',
    icon: Box,
    accent: 'aqua-glow',
    image: '/samples/1.jpg',
    features: ['مدل‌سازی 3D', 'رندر فوتورئال', 'انیمیشن سه‌بعدی', 'محصول مجازی']
  },
  {
    title: 'مدیریت برند و هویت بصری',
    subtitle: 'Brand Identity',
    description: 'شکل‌دهی شخصیت بصری قدرتمند و منحصربه‌فرد برای برند شما',
    icon: Palette,
    accent: 'cyber-blue',
    image: '/samples/2.jpg',
    features: ['طراحی لوگو', 'هویت بصری', 'راهنمای برند', 'استراتژی برندینگ']
  }
]

const processSteps = [
  {
    title: 'تحلیل و نیازسنجی',
    description: 'شناخت دقیق اهداف، مخاطبان و رقبا برای تدوین استراتژی هوشمند',
    icon: Search,
    color: 'cyber-blue'
  },
  {
    title: 'طراحی وایرفریم و ایده‌پردازی',
    description: 'خلق ساختار اولیه و ایده‌پردازی خلاقانه برای پروژه',
    icon: Lightbulb,
    color: 'neon-pink'
  },
  {
    title: 'اجرای طراحی و تولید',
    description: 'پیاده‌سازی دقیق و نئونی با استانداردهای روز و تکنولوژی‌های مدرن',
    icon: Code2,
    color: 'laser-green'
  },
  {
    title: 'تست و بهبود',
    description: 'ارزیابی مستمر، رفع خطا و بهینه‌سازی برای تضمین کیفیت',
    icon: Gauge,
    color: 'plasma-purple'
  },
  {
    title: 'تحویل نهایی + پشتیبانی',
    description: 'تحویل پروژه و همراهی دائمی برای رشد و توسعه بلندمدت',
    icon: ShieldCheck,
    color: 'aqua-glow'
  }
]

const highlights = [
  {
    title: 'زمان تحویل بالا',
    description: 'تحویل سریع و با کیفیت در زمان مقرر',
    icon: Zap,
    color: 'laser-green'
  },
  {
    title: 'کیفیت سینمایی',
    description: 'استانداردهای سینمایی در تمام پروژه‌ها',
    icon: Camera,
    color: 'neon-pink'
  },
  {
    title: 'تیم متخصص',
    description: 'متخصصان خلاق با سال‌ها تجربه',
    icon: Users,
    color: 'cyber-blue'
  }
]

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

function useSectionBackground(color) {
  const { updateBackground } = useBackground()
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      updateBackground(color)
    }
  }, [inView, color, updateBackground])

  return ref
}

export default function Services() {
  return (
    <main className="space-y-24">
      <NeonNavbar />
      <HeroSection />
      <ServicesGridSection />
      <HighlightSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  const sectionRef = useSectionBackground('#0A1428')

  return (
    <section id="services-hero" ref={sectionRef} className="relative">
      <motion.div
        className="relative overflow-hidden rounded-[48px] border border-white/10 bg-black/40 p-6 sm:p-10"
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(12px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Background with neon gradients and effects */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle at 30% 10%, rgba(79,139,253,0.4), transparent 58%), radial-gradient(circle at 78% 32%, rgba(12, 27, 51, 0.9), transparent 65%), conic-gradient(from 90deg at 30% 30%, rgba(7, 16, 33, 0.65), transparent 65%)',
          }}
          aria-hidden
        />
        
        {/* Additional neon gradient layers */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(79,139,253,0.3), rgba(242,60,255,0.2), rgba(24,240,200,0.15))',
            opacity: 0.6,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'conic-gradient(from 90deg at 30% 30%, rgba(10, 20, 40, 0.82), transparent 60%)',
            opacity: 0.48,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 20% 80%, rgba(7,16,33,0.55), transparent 55%)' }}
        />
        
        {/* Animated neon elements */}
        <motion.div
          className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(79,139,253,0.6), transparent)' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute left-20 bottom-10 w-24 h-24 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(242,60,255,0.5), transparent)' }}
          animate={{ 
            scale: [1.2, 0.8, 1.2],
            opacity: [0.3, 0.7, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        
        {/* Additional floating neon orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-16 h-16 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(24,240,200,0.4), transparent)' }}
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            opacity: [0.2, 0.6, 0.3, 0.6]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute bottom-20 right-1/3 w-20 h-20 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(155,92,255,0.3), transparent)' }}
          animate={{ 
            x: [0, -25, 35, 0],
            y: [0, 20, -15, 0],
            opacity: [0.3, 0.5, 0.2, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        
        {/* Animated grid overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(7, 16, 33, 0.78) 1px, transparent 1px), linear-gradient(180deg, rgba(7, 16, 33, 0.78) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left side - Animated visual element */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            >
              {/* Neon geometric shape */}
              <motion.div
                className="absolute inset-0 border-4 rounded-3xl"
                style={{ borderColor: '#4f8bfd' }}
                animate={{ 
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 border-2 rounded-2xl"
                style={{ borderColor: '#f23cff' }}
                animate={{ 
                  rotate: [360, 270, 180, 90, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 border rounded-xl"
                style={{ borderColor: '#18f0c8' }}
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: [0.9, 1.1, 0.9]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Center glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ 
                  background: 'radial-gradient(circle at center, rgba(79,139,253,0.3), transparent 70%)',
                  boxShadow: '0 0 80px rgba(79,139,253,0.5)'
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>

          {/* Right side - Text content */}
          <div dir="rtl" className="text-right space-y-6" style={{ direction: 'rtl' }}>
            <motion.div
              initial={{ opacity: 0, x: 50, filter: 'blur(12px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue text-sm font-medium mb-4">
                Neon Digital Agency
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl lg:text-6xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              خدمات آژانس نئونی
            </motion.h1>
            
            <motion.p
              className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              راهکارهای خلاقانه برای ارتقای برند، بهبود تجربه کاربری و ساخت حضور حرفه‌ای آنلاین
            </motion.p>
            
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link to="/contact">
                <Button className="gap-3 text-base px-8 py-4 bg-gradient-to-r from-cyber-blue/80 via-neon-blue to-aqua-glow text-night shadow-glow hover:shadow-halo hover:-translate-y-0.5 border-0">
                  شروع همکاری
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyber-blue"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}

function ServicesGridSection() {
  const sectionRef = useSectionBackground('#071021')

  return (
    <motion.section
      ref={sectionRef}
      id="services-grid"
      className="space-y-16"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div dir="rtl" className="flex flex-col items-center justify-center gap-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">خدمات ما</p>
        </motion.div>
        <motion.h2
          className="text-4xl lg:text-5xl font-semibold text-white"
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          راهکارهای نئونی
        </motion.h2>
        <motion.p
          className="text-white/70 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          خدمات تخصصی برای ارتقای دیجیتال برند شما با کیفیت سینمایی
        </motion.p>
      </div>
      
      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" 
        variants={staggerContainer}
        dir="rtl"
      >
        {services.map((service, index) => {
          const Icon = service.icon
          const isEditingService = service.title === 'تدوین ویدئو و موشن‌گرافیک'
          const isWebDesignService = service.title === 'طراحی سایت'
          const Card = (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl"
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              {/* Background image with overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Neon border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-300"
                  style={{ 
                    borderColor: service.accent === 'cyber-blue' ? '#4f8bfd' : service.accent === 'laser-green' ? '#18f0c8' : service.accent === 'neon-pink' ? '#f23cff' : service.accent === 'plasma-purple' ? '#9b5cff' : '#8fc0ff',
                    borderWidth: '2px'
                  }}
                  whileHover={{ 
                    opacity: 1,
                    boxShadow: service.accent === 'cyber-blue' ? '0 0 40px rgba(79,139,253,0.6)' : service.accent === 'laser-green' ? '0 0 40px rgba(24,240,200,0.6)' : service.accent === 'neon-pink' ? '0 0 40px rgba(242,60,255,0.6)' : service.accent === 'plasma-purple' ? '0 0 40px rgba(155,92,255,0.6)' : '0 0 40px rgba(143,192,255,0.6)'
                  }}
                />
                
                {/* Icon overlay */}
                <motion.div
                  className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl border text-white backdrop-blur-md"
                  style={{ 
                    borderColor: service.accent === 'cyber-blue' ? 'rgba(79,139,253,0.4)' : service.accent === 'laser-green' ? 'rgba(24,240,200,0.4)' : service.accent === 'neon-pink' ? 'rgba(242,60,255,0.4)' : service.accent === 'plasma-purple' ? 'rgba(155,92,255,0.4)' : 'rgba(143,192,255,0.4)',
                    backgroundColor: service.accent === 'cyber-blue' ? 'rgba(79,139,253,0.2)' : service.accent === 'laser-green' ? 'rgba(24,240,200,0.2)' : service.accent === 'neon-pink' ? 'rgba(242,60,255,0.2)' : service.accent === 'plasma-purple' ? 'rgba(155,92,255,0.2)' : 'rgba(143,192,255,0.2)'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: service.accent === 'cyber-blue' ? '0 0 20px rgba(79,139,253,0.8)' : service.accent === 'laser-green' ? '0 0 20px rgba(24,240,200,0.8)' : service.accent === 'neon-pink' ? '0 0 20px rgba(242,60,255,0.8)' : service.accent === 'plasma-purple' ? '0 0 20px rgba(155,92,255,0.8)' : '0 0 20px rgba(143,192,255,0.8)'
                  }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 text-right" dir="rtl">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-white/60">{service.subtitle}</p>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs text-white/60">
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: service.accent === 'cyber-blue' ? '#4f8bfd' : service.accent === 'laser-green' ? '#18f0c8' : service.accent === 'neon-pink' ? '#f23cff' : service.accent === 'plasma-purple' ? '#9b5cff' : '#8fc0ff' }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-[32px] opacity-0 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.accent === 'cyber-blue' ? 'rgba(79,139,253,0.1)' : service.accent === 'laser-green' ? 'rgba(24,240,200,0.1)' : service.accent === 'neon-pink' ? 'rgba(242,60,255,0.1)' : service.accent === 'plasma-purple' ? 'rgba(155,92,255,0.1)' : 'rgba(143,192,255,0.1)'}, transparent)`
                  }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              
              {/* Animated light streak */}
              <motion.span
                className="absolute -bottom-2 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-full"
                style={{ 
                  background: `linear-gradient(to right, transparent, ${service.accent === 'cyber-blue' ? 'rgba(79,139,253,0.8)' : service.accent === 'laser-green' ? 'rgba(24,240,200,0.8)' : service.accent === 'neon-pink' ? 'rgba(242,60,255,0.8)' : service.accent === 'plasma-purple' ? 'rgba(155,92,255,0.8)' : 'rgba(143,192,255,0.8)'}, transparent)` 
                }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  width: ['5rem', '8rem', '5rem']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                aria-hidden
              />
            </motion.div>
          )

          return isEditingService ? (
            <Link key={service.title} to="/editing-services" className="block cursor-pointer">
              {Card}
            </Link>
          ) : isWebDesignService ? (
            <Link key={service.title} to="/web-design-services" className="block cursor-pointer">
              {Card}
            </Link>
          ) : (
            Card
          )
        })}
      </motion.div>
    </motion.section>
  )
}

function HighlightSection() {
  const sectionRef = useSectionBackground('#0C1B33')

  return (
    <motion.section
      ref={sectionRef}
      id="highlight"
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-br from-[#06102A]/90 via-[#071735]/80 to-[#03070F]/90 p-8 shadow-[0_0_80px_rgba(0,255,234,0.15)] backdrop-blur-3xl sm:p-12">
        <div className="absolute inset-x-10 inset-y-8 rounded-[40px] border border-white/5 bg-gradient-to-r from-cyber-blue/5 via-transparent to-pink-500/5 blur-3xl" aria-hidden />
        
        <motion.span
          className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyber-blue/30 blur-3xl"
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.15, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />
        <motion.span
          className="absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl"
          animate={{ opacity: [0.15, 0.45, 0.15], scale: [0.9, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          aria-hidden
        />

        <div className="relative z-10 text-center" dir="rtl">
          <div className="space-y-4 mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">مزایا</p>
            <h2 className="text-4xl font-semibold text-white">چرا خدمات نئونی متفاوت است؟</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              ترکیب تکنولوژی، خلاقیت و طراحی نئونی برای ساخت تجربه‌ای فراموش‌نشدنی
            </p>
          </div>
          
          {/* Animated line behind title */}
          <motion.div
            className="absolute left-1/2 top-20 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
            animate={{ opacity: [0.3, 1, 0.3], width: ['8rem', '12rem', '8rem'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
          
          <motion.div 
            className="grid gap-8 md:grid-cols-3 mt-16"
            variants={staggerContainer}
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  variants={staggerItem}
                  className="relative group"
                >
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-white"
                         style={{ backgroundColor: highlight.color === 'cyber-blue' ? 'rgba(79,139,253,0.2)' : highlight.color === 'laser-green' ? 'rgba(24,240,200,0.2)' : 'rgba(242,60,255,0.2)' }}>
                      <span className="absolute inset-0 rounded-2xl border blur-[2px]" 
                            style={{ borderColor: highlight.color === 'cyber-blue' ? 'rgba(79,139,253,0.4)' : highlight.color === 'laser-green' ? 'rgba(24,240,200,0.4)' : 'rgba(242,60,255,0.4)' }} 
                            aria-hidden />
                      <Icon className="relative h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                      <p className="text-sm text-white/70">{highlight.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at center, ${highlight.color === 'cyber-blue' ? 'rgba(79,139,253,0.1)' : highlight.color === 'laser-green' ? 'rgba(24,240,200,0.1)' : 'rgba(242,60,255,0.1)'}, transparent)` }}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function ProcessSection() {
  const sectionRef = useSectionBackground('#08152A')
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      id="process"
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">فرآیند</p>
        <h2 className="text-4xl font-semibold text-white">مسیر همکاری</h2>
        <p className="text-white/70">پنج گام نئونی برای خلق تجربه‌هایی که می‌درخشند</p>
      </div>
      
      <div className="relative" dir="rtl" ref={inViewRef}>
        {/* Timeline line - behind all content */}
        <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-neon-pink to-laser-green opacity-30" style={{ zIndex: 1 }} />
        
        {/* Animated orb - behind icons but above timeline */}
        <motion.div
          className="absolute right-6 w-4 h-4 rounded-full bg-cyber-blue shadow-[0_0_20px_rgba(79,139,253,0.8)]"
          style={{ zIndex: 5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { 
            opacity: 1,
            scale: 1,
            top: ['0%', '20%', '40%', '60%', '80%', '100%'],
            backgroundColor: ['#4f8bfd', '#f23cff', '#18f0c8', '#9b5cff', '#8fc0ff', '#4f8bfd']
          } : { 
            opacity: 0, 
            scale: 0.5 
          }}
          transition={{ 
            opacity: { duration: 0.8, ease: 'easeInOut' },
            scale: { duration: 0.6, ease: 'easeOut' },
            top: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
            backgroundColor: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
        />
        
        <motion.div 
          className="space-y-8 relative"
          style={{ zIndex: 10 }}
          variants={staggerContainer}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="relative flex items-start gap-6 text-right"
                dir="rtl"
              >
                {/* Step number and icon - highest z-index */}
                <div className="relative flex flex-col items-center" style={{ zIndex: 20 }}>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-white"
                       style={{ 
                         borderColor: step.color === 'cyber-blue' ? '#4f8bfd' : step.color === 'neon-pink' ? '#f23cff' : step.color === 'laser-green' ? '#18f0c8' : step.color === 'plasma-purple' ? '#9b5cff' : '#8fc0ff',
                         backgroundColor: step.color === 'cyber-blue' ? 'rgba(79,139,253,0.2)' : step.color === 'neon-pink' ? 'rgba(242,60,255,0.2)' : step.color === 'laser-green' ? 'rgba(24,240,200,0.2)' : step.color === 'plasma-purple' ? 'rgba(155,92,255,0.2)' : 'rgba(143,192,255,0.2)'
                       }}>
                    <span className="absolute inset-0 rounded-2xl border blur-[2px]" 
                          style={{ borderColor: step.color === 'cyber-blue' ? 'rgba(79,139,253,0.4)' : step.color === 'neon-pink' ? 'rgba(242,60,255,0.4)' : step.color === 'laser-green' ? 'rgba(24,240,200,0.4)' : step.color === 'plasma-purple' ? 'rgba(155,92,255,0.4)' : 'rgba(143,192,255,0.4)' }} 
                          aria-hidden />
                    <Icon className="relative h-5 w-5" />
                  </div>
                  <span className="mt-2 text-xs text-white/50 font-semibold">0{index + 1}</span>
                </div>
                
                {/* Content - higher z-index than orb */}
                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl relative" style={{ zIndex: 15 }}>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

function CTASection() {
  const sectionRef = useSectionBackground('#071021')

  return (
    <motion.section
      ref={sectionRef}
      id="cta"
      dir="rtl"
      className="relative text-right"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="relative overflow-hidden rounded-[44px] bg-gradient-to-br from-[#0A1428] via-[#071021] to-[#050C18] p-8 shadow-[0_0_80px_rgba(0,255,234,0.15)] backdrop-blur-3xl sm:p-12">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-transparent to-neon-pink/10 opacity-50" aria-hidden />
        
        <motion.div
          className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-cyber-blue/20 blur-3xl"
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.15, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />
        <motion.div
          className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-neon-pink/20 blur-3xl"
          animate={{ opacity: [0.15, 0.45, 0.15], scale: [0.9, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          aria-hidden
        />

        <div className="relative z-10 text-center space-y-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">آماده‌ای؟</p>
            <h2 className="text-4xl font-semibold text-white">
              آماده‌ای یه قدم بزرگ برای برندت برداری؟
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              تیم نئونی در کنارته تا بهترین نسخه دیجیتالی کسب‌وکارت رو بسازیم
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <Button className="gap-3 text-base px-8 py-4">
                شروع همکاری
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="gap-3 text-base px-8 py-4 text-white border-cyber-blue/40 hover:bg-cyber-blue/10">
                مشاهده نمونه‌کارها
                <Play className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
