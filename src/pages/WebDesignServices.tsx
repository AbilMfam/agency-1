import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Play, Monitor, Smartphone, Zap, Target, Code, Palette, Rocket, Check, Star, Globe, Users, Layout, Database, Shield, Mail, Phone, MapPin } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import { Button } from '../components/ui/button'
import { NeonNavbar } from '../components/Neon/NeonNavbar'
import Footer from '../components/sections/Footer'
import { useBackground } from '../layout/NeonLayout'
import WebPricing from './WebPricing'
import WebContact from './WebContact'

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

export default function WebDesignServices() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-full">
      <NeonNavbar />
      <HeroSection />
      <ServicesSection />
      <WorkflowSection />
      <PortfolioCTASection />
      <WebPricing />
      <WebContact />
      <Footer />
    </main>
  )
}

function HeroSection() {
  const sectionRef = useSectionBackground('#050505')

  return (
    <motion.section
      id="web-design-hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-0 pt-8 md:pt-0"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      {/* Digital Neural Network Background - Enhanced Neon Effects */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: -1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Neural Network SVG Canvas */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="intense-glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f8bfd" stopOpacity="1" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#4f8bfd" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* Connection Lines - Enhanced Neon */}
          <g id="connections" opacity="0.6">
            {/* Static connections with neon gradient */}
            <line x1="200" y1="150" x2="400" y2="250" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="400" y1="250" x2="600" y2="200" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="600" y1="200" x2="800" y2="300" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="800" y1="300" x2="1000" y2="250" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="300" y1="400" x2="500" y2="450" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="500" y1="450" x2="700" y2="400" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="700" y1="400" x2="900" y2="500" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="200" y1="600" x2="400" y2="550" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="400" y1="550" x2="600" y2="650" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="600" y1="650" x2="800" y2="600" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
            <line x1="800" y1="600" x2="1000" y2="650" stroke="url(#neon-gradient)" strokeWidth="2" filter="url(#intense-glow)" />
          </g>

          {/* Animated Nodes - Enhanced Neon */}
          <g id="nodes">
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={i}
                cx={200 + (i * 80)}
                cy={150 + Math.sin(i * 0.5) * 100}
                r="5"
                fill="url(#neon-gradient)"
                filter="url(#intense-glow)"
                animate={{
                  cy: [
                    150 + Math.sin(i * 0.5) * 100,
                    150 + Math.sin(i * 0.5 + 1) * 120,
                    150 + Math.sin(i * 0.5) * 100
                  ],
                  opacity: [0.6, 1, 0.6],
                  r: [5, 7, 5],
                  fill: ["#4f8bfd", "#00d4ff", "#4f8bfd"]
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
            
            {/* Floating secondary nodes - Enhanced */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={`secondary-${i}`}
                cx={300 + (i * 100)}
                cy={400 + Math.cos(i * 0.7) * 80}
                r="4"
                fill="#00d4ff"
                opacity="0.8"
                filter="url(#intense-glow)"
                animate={{
                  cx: [
                    300 + (i * 100),
                    300 + (i * 100) + Math.sin(i * 0.3) * 40,
                    300 + (i * 100)
                  ],
                  cy: [
                    400 + Math.cos(i * 0.7) * 80,
                    400 + Math.cos(i * 0.7 + 1) * 120,
                    400 + Math.cos(i * 0.7) * 80
                  ],
                  opacity: [0.5, 0.9, 0.5],
                  r: [4, 6, 4]
                }}
                transition={{
                  duration: 4 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </g>

          {/* Animated Connection Lines - Enhanced Neon */}
          <motion.g id="animated-connections" opacity="0.8">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={150 + i * 130}
                y1={200 + Math.sin(i * 0.8) * 60}
                x2={350 + i * 130}
                y2={300 + Math.cos(i * 0.6) * 80}
                stroke="url(#neon-gradient)"
                strokeWidth="1.5"
                filter="url(#intense-glow)"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  strokeWidth: [1, 2.5, 1],
                  stroke: ["#4f8bfd", "#00d4ff", "#4f8bfd"]
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.g>

          {/* Additional neon pulse effects */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={250 + i * 150}
              cy={350 + Math.sin(i * 0.5) * 100}
              r="8"
              fill="none"
              stroke="url(#neon-gradient)"
              strokeWidth="1"
              filter="url(#intense-glow)"
              animate={{
                r: [8, 15, 8],
                opacity: [0.8, 0.2, 0.8],
                strokeWidth: [1, 0.5, 1]
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </svg>

        {/* Enhanced floating particles with neon glow */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{ 
                background: 'radial-gradient(circle, #00d4ff 0%, #4f8bfd 50%, transparent 70%)',
                boxShadow: '0 0 12px #4f8bfd, 0 0 24px #00d4ff'
              }}
              initial={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
                opacity: [0, 0.8, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Hero Content - Mobile Optimized */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        {/* Enhanced Text Protection Layer with Backdrop Blur */}
        <div className="absolute inset-0 bg-gradient-radial from-black/20 via-black/50 to-black/80 backdrop-blur-sm pointer-events-none rounded-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative space-y-6 md:space-y-8"
        >
          {/* Enhanced Lighter Gradient Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" 
              style={{ 
                textShadow: '0 15px 40px rgba(0,0,0,0.95), 0 0 20px rgba(79, 139, 253, 0.3)',
                backgroundImage: 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 30%, #E0F6FF 50%, #B0E0E6 70%, #87CEEB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'brightness(1.2) contrast(1.1)'
              }}>
            خلق تجربه‌های دیجیتال منحصر به فرد
          </h1>

          {/* High-Contrast White Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 8px 25px rgba(0,0,0,0.8)' }}
          >
            طراحی وب مدرن، توسعه حرفه‌ای و بهینه‌سازی کامل - وب‌سایت‌هایی که تأثیرگذار و به‌یادماندنی هستند
          </motion.p>

          {/* Enhanced Glassmorphism Buttons - Mobile Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mx-auto"
          >
            <Link to="/contact">
              <motion.div
                className="gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-3xl text-white font-bold rounded-full border border-white/30 flex items-center justify-center relative overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(79, 139, 253, 0.15)',
                  boxShadow: '0 8px 32px rgba(79, 139, 253, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                  background: 'linear-gradient(135deg, rgba(79, 139, 253, 0.15) 0%, rgba(79, 139, 253, 0.05) 100%)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(79, 139, 253, 0.25)',
                  boxShadow: '0 12px 48px rgba(79, 139, 253, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
                  borderColor: 'rgba(79, 139, 253, 0.5)',
                  background: 'linear-gradient(135deg, rgba(79, 139, 253, 0.25) 0%, rgba(79, 139, 253, 0.1) 100%)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                شروع پروژه
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </Link>
            <Link to="/portfolio">
              <motion.div
                className="gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-3xl text-white font-medium rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 12px 48px rgba(255, 255, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                نمونه کارها
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Electric Blue Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full hidden sm:block"
            style={{ backgroundColor: '#4f8bfd' }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.8, 800) : 800),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.8, 800) : 800),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.section>
  )
}

function ServicesSection() {
  const sectionRef = useSectionBackground('#070714')

  const services = [
    {
      title: 'طراحی UI/UX',
      subtitle: 'رابط کاربری و تجربه کاربری',
      description: 'طراحی رابط‌های کاربری زیبا و کاربردی که تجربه‌ای به‌یادماندنی برای کاربران ایجاد می‌کند. از تحلیل نیازهای کاربر تا طراحی نهایی، ما تضمین می‌کنیم که هر تعامل با وب‌سایت شما لذت‌بخش باشد.',
      image: '/samples/1.jpg',
      features: ['تحلیل کاربر', 'طراحی وایرفریم', 'پروتوتایپ تعاملی', 'تست کاربردپذیری'],
      accent: 'from-blue-500/20 to-cyan-500/20',
      glow: 'rgba(79, 139, 253, 0.2)',
    },
    {
      title: 'توسعه فول-استک',
      subtitle: 'فرانت‌اند و بک‌اند',
      description: 'پیاده‌سازی کامل وب‌سایت با تکنولوژی‌های مدرن. از طراحی ظاهری گرفته تا زیرساخت قدرتمند، ما پلتفرم‌هایی ایجاد می‌کنیم که سریع، امن و مقیاس‌پذیر هستند.',
      image: '/samples/2.jpg',
      features: ['React/Next.js', 'Node.js', 'API طراحی', 'بهینه‌سازی سرعت'],
      accent: 'from-cyan-500/20 to-blue-500/20',
      glow: 'rgba(6, 182, 212, 0.2)',
    },
    {
      title: 'بهینه‌سازی SEO',
      subtitle: 'موتورهای جستجو و سرعت',
      description: 'افزایش رتبه وب‌سایت شما در گوگل و بهبود سرعت بارگذاری. ما با تکنیک‌های پیشرفته SEO و بهینه‌سازی عملکرد، وب‌سایت شما را برای موفقیت آماده می‌کنیم.',
      image: '/samples/3.jpg',
      features: ['تحلیل SEO', 'بهینه‌سازی محتوا', 'سرعت بارگذاری', 'گزارش عملکرد'],
      accent: 'from-blue-500/20 to-indigo-500/20',
      glow: 'rgba(99, 102, 241, 0.2)',
    },
  ]

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      dir="rtl"
      className="py-16 md:py-24 px-4"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-4"
          variants={staggerItem}
        >
          <p className="text-xs uppercase tracking-[0.42em] text-blue-400/80">Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            خدمات <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">تخصصی ما</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            با تمرکز بر کیفیت و نوآوری، ما خدمات جامع طراحی و توسعه وب را ارائه می‌دهیم که برند شما را متمایز می‌کند
          </p>
        </motion.div>

        {/* Image-Centric Service Cards */}
        <motion.div 
          className="grid gap-8 md:gap-12 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group relative"
            >
              {/* Premium Glass Frame with #4f8bfd Border */}
              <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl transition-all duration-700 hover:border-blue-500/40 hover:bg-white/10">
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{ backgroundColor: service.glow }}
                />

                {/* Premium Border Animation */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10 space-y-6 p-6 md:p-8">
                  {/* Service Image */}
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Image Frame Border */}
                    <div className="absolute inset-0 rounded-2xl border border-blue-500/20" />
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4 text-right">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-blue-300/80 font-medium">
                      {service.subtitle}
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs text-blue-300"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ width: ['20%', '80%', '20%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

function WorkflowSection() {
  const sectionRef = useSectionBackground('#090912')

  const workflowSteps = [
    {
      step: '۱',
      title: 'Discovery',
      persianTitle: 'کشف و تحلیل',
      description: 'تحلیل اهداف کسب‌وکار، شناخت مخاطب هدف، و برنامه‌ریزی استراتژی دیجیتال',
      icon: Target,
      accent: 'from-blue-500 to-cyan-500',
      glow: 'rgba(79, 139, 253, 0.2)',
    },
    {
      step: '۲',
      title: 'UI/UX Design',
      persianTitle: 'طراحی رابط و تجربه',
      description: 'طراحی وایرفریم، پروتوتایپ، و ایجاد رابط کاربری زیبا و کاربردی',
      icon: Palette,
      accent: 'from-cyan-500 to-blue-500',
      glow: 'rgba(6, 182, 212, 0.2)',
    },
    {
      step: '۳',
      title: 'Development',
      persianTitle: 'توسعه و کدنویسی',
      description: 'پیاده‌سازی فرانت‌اند، بک‌اند، و اتصال دیتابیس با تکنولوژی‌های مدرن',
      icon: Code,
      accent: 'from-blue-500 to-indigo-500',
      glow: 'rgba(99, 102, 241, 0.2)',
    },
    {
      step: '۴',
      title: 'Launch',
      persianTitle: 'راه‌اندازی و پشتیبانی',
      description: 'دیپلوی، بهینه‌سازی سرعت، و ارائه پشتیبانی فنی مستمر',
      icon: Rocket,
      accent: 'from-indigo-500 to-blue-500',
      glow: 'rgba(79, 139, 253, 0.2)',
    },
  ]

  return (
    <motion.section
      ref={sectionRef}
      id="workflow"
      dir="rtl"
      className="py-16 md:py-24 px-4"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-4"
          variants={staggerItem}
        >
          <p className="text-xs uppercase tracking-[0.42em] text-blue-400/80">Our Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            فرآیند <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">۴ مرحله‌ای</span> ما
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            کیفیت اتفاقی نیست. این فرآیند باعث می‌شود هر پروژه، قابل اعتماد، قابل تکرار و هم‌راستا با هدف کسب‌وکار باشد.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div 
          className="grid gap-8 md:grid-cols-4 relative"
          variants={staggerContainer}
        >
          {workflowSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="group relative"
              >
                  {/* Glassmorphism Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6 text-center transition-all duration-500 hover:border-blue-500/30 hover:bg-white/10 hover:scale-105">
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ backgroundColor: step.glow }}
                    />

                    {/* Step Number */}
                    <div className="relative mb-4 flex justify-center">
                      <motion.div
                        className={`relative h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r ${step.accent} text-white font-bold text-lg`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.step}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/30 blur-md"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className={`relative h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${step.accent} bg-opacity-20 border border-white/20`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2 md:space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {step.persianTitle}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ width: ['20%', '80%', '20%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              )
            })}
        </motion.div>

        {/* Quality Promise */}
        <motion.div
          variants={staggerItem}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">تضمین کیفیت در هر مرحله</span>
          </div>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            هر مرحله از این فرآیند با دقت و استانداردهای جهانی اجرا می‌شود تا نتیجه‌ای فراتر از انتظار شما تحویل دهیم
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function PortfolioCTASection() {
  const sectionRef = useSectionBackground('#0a0a15')

  return (
    <motion.section
      ref={sectionRef}
      id="portfolio-cta"
      dir="rtl"
      className="py-16 md:py-24 px-4"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="max-w-6xl mx-auto">
        {/* Electric Blue Glass Portal Banner */}
        <motion.div
          variants={staggerItem}
          className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-blue-900/20 backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center"
        >
          {/* Animated Portal Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(79, 139, 253, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(79, 139, 253, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Portal Ring Animation */}
          <motion.div
            className="absolute inset-4 rounded-2xl border-2 border-blue-500/20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <motion.div
              className="absolute inset-2 rounded-2xl border border-cyan-500/20"
              animate={{
                rotate: [0, -360],
                scale: [1, 0.95, 1],
              }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Globe Icon */}
            <motion.div
              className="flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="relative h-20 w-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-8 w-8 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400 blur-xl opacity-50"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                آماده‌اید <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">شاهکارهای دیجیتال</span> را ببینید؟
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                نمونه‌کارهای وب ما را بررسی کنید و ببینید چگونه برندها را به سطح جدیدی از حضور آنلاین رسانده‌ایم
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/portfolio">
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-lg shadow-lg shadow-blue-500/25 border border-blue-500/30"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 40px rgba(79, 139, 253, 0.4)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>مشاهده نمونه‌کارهای وب</span>
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Electric Blue Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: '#4f8bfd',
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  initial={{
                    x: Math.random() * 60 - 30,
                    y: Math.random() * 60 - 30,
                    opacity: 0,
                  }}
                  animate={{
                    x: Math.random() * 120 - 60,
                    y: Math.random() * 120 - 60,
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
