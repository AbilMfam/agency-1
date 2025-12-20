import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Play, Film, Users, Headphones, Scissors, Sparkles, Palette, Volume2, Check, Star, Zap, Target, Rocket, FileVideo, Layers, Package } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import { Button } from '../components/ui/button'
import { NeonNavbar } from '../components/Neon/NeonNavbar'
import Footer from '../components/sections/Footer'
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

export default function EditingServices() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-full">
      <NeonNavbar />
      <HeroSection />
      <WhatWhySection />
      <WorkflowSection />
      <PortfolioCTASection />
      <PricingSection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  const sectionRef = useSectionBackground('#050505')

  return (
    <motion.section
      id="editing-services-hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-0 pt-8 md:pt-0"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      {/* Animated Neon Mesh Background - Responsive */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: -1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="w-[280px] h-[280px] md:w-[520px] md:h-[520px] relative"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Neon Mesh Layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-purple-600/20 blur-3xl rounded-full" />
          <div className="absolute inset-4 bg-gradient-to-r from-blue-500/30 via-purple-600/30 to-blue-500/30 blur-2xl rounded-full" />
          <div className="absolute inset-8 bg-gradient-to-r from-purple-500/40 via-blue-400/40 to-purple-500/40 blur-xl rounded-full" />
          
          {/* Animated Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Hero Content - Responsive */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        {/* Text Protection Layer */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/50 pointer-events-none rounded-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative space-y-6 md:space-y-8"
        >
          {/* High-Contrast White Title - Responsive Typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.9)' }}>
            جادوی حرکت و روایت
          </h1>

          {/* High-Contrast White Subtitle - Responsive Typography */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 8px 25px rgba(0,0,0,0.8)' }}
          >
            از فیلم خام تا شاهکار دیجیتال - تدوین حرفه‌ای، موشن گرافیک خیره‌کننده و کیفیت سینمایی
          </motion.p>

          {/* CTA Buttons - Responsive Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Link to="/contact">
              <motion.div
                className="gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-cyber-blue/20 backdrop-blur-2xl text-white font-bold rounded-full border border-white/10 shadow-neon flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(0,224,255,0.2)' }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(0,224,255,0.3)',
                  boxShadow: '0 0 30px rgba(0,224,255,0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                شروع پروژه
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </Link>
            <Link to="/portfolio">
              <motion.div
                className="gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-2xl text-white font-medium rounded-full border border-white/10 shadow-neon flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                مشاوره رایگان
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles - Optimized for Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full hidden sm:block"
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

function WhatWhySection() {
  const sectionRef = useSectionBackground('#070714')

  const cards = [
    {
      title: 'تدوین حرفه‌ای چیست؟',
      description: 'هنر ترکیب صحنه‌ها، تنظیم ریتم، و ایجاد روایتی که مخاطب را captivate می‌کند. این فقط برش و چسباندن نیست - این ساختار داستان است.',
      icon: Scissors,
      accent: 'from-blue-500/20 to-purple-500/20',
      glow: 'rgba(147, 51, 234, 0.15)',
    },
    {
      title: 'موشن گرافیک چرا مهم است؟',
      description: 'عنصرهای متحرک، تایپوگرافی پویا و ترنزیشن‌های خیره‌کننده که پیام شما را به خاطره‌نشدنی تبدیل می‌کنند. در دنیای دیجیتال، حرکت یعنی توجه.',
      icon: Sparkles,
      accent: 'from-purple-500/20 to-pink-500/20',
      glow: 'rgba(236, 72, 153, 0.15)',
    },
    {
      title: 'چگونه به برند شما ارزش اضافه می‌کند؟',
      description: 'کیفیت سینمایی، رنگ‌بندی یکپارچه، و صدای حرفه‌ای - این‌ها عناصری هستند که برند شما را در سطح جهانی نمایش می‌دهند و اعتماد ایجاد می‌کنند.',
      icon: Target,
      accent: 'from-cyan-500/20 to-blue-500/20',
      glow: 'rgba(6, 182, 212, 0.15)',
    },
  ]

  return (
    <motion.section
      ref={sectionRef}
      id="what-why"
      dir="rtl"
      className="py-12 md:py-16 px-4"
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
          <p className="text-xs uppercase tracking-[0.42em] text-blue-400/80">What & Why</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            تدوین و موشن گرافیک <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">حرفه‌ای</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            درک عمیق از اینکه چرا خدمات تدوین و موشن گرافیک برای برند شما حیاتی است و چگونه می‌توانند داستان شما را به بهترین شکل روایت کنند
          </p>
        </motion.div>

        {/* Glassmorphism Cards */}
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
        >
          {cards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={card.title}
                variants={staggerItem}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 text-right transition-all duration-500 hover:border-purple-500/30 hover:bg-white/10">
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: card.glow }}
                  />

                  {/* Gradient Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                       style={{ backgroundImage: `linear-gradient(to right, transparent, ${card.glow}, transparent)` }} />

                  {/* Content */}
                  <div className="relative z-10 space-y-4 md:space-y-6">
                    {/* Icon */}
                    <div className="flex justify-start">
                      <div className={`relative h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-r ${card.accent} border border-white/20`}>
                        <Icon className="h-8 w-8 text-white" />
                        <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ width: ['20%', '80%', '20%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
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
      title: 'Strategy',
      persianTitle: 'استراتژی',
      description: 'تحلیل اهداف برند، تعریف مخاطب هدف، و برنامه‌ریزی روایت داستانی برای پروژه',
      icon: Target,
      accent: 'from-blue-500 to-cyan-500',
      glow: 'rgba(6, 182, 212, 0.2)',
    },
    {
      step: '۲',
      title: 'Editing',
      persianTitle: 'تدوین',
      description: 'برش دقیق صحنه‌ها، تنظیم ریتم، و ساختاردهی روایت برای ایجاد تأثیر حداکثری',
      icon: Scissors,
      accent: 'from-purple-500 to-pink-500',
      glow: 'rgba(236, 72, 153, 0.2)',
    },
    {
      step: '۳',
      title: 'Motion FX',
      persianTitle: 'جلوه‌های ویژه',
      description: 'اضافه کردن موشن گرافیک، ترنزیشن‌های خیره‌کننده و جلوه‌های بصری برای جذابیت بیشتر',
      icon: Sparkles,
      accent: 'from-pink-500 to-orange-500',
      glow: 'rgba(251, 146, 60, 0.2)',
    },
    {
      step: '۴',
      title: 'Delivery',
      persianTitle: 'تحویل',
      description: 'کالر گریدینگ سینمایی، میکس و مستر صدا، و تحویل خروجی نهایی با کیفیت بالا',
      icon: Rocket,
      accent: 'from-orange-500 to-yellow-500',
      glow: 'rgba(250, 204, 21, 0.2)',
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
          <p className="text-xs uppercase tracking-[0.42em] text-purple-400/80">Our Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            فرآیند <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">۴ مرحله‌ای</span> ما
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            کیفیت اتفاقی نیست. این فرآیند باعث می‌شود هر خروجی، قابل اعتماد، قابل تکرار و هم‌راستا با هدف برند باشد.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative"
          variants={staggerContainer}
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform -translate-y-1/2" />

          {/* Workflow Steps */}
          <div className="grid gap-8 md:grid-cols-4 relative">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.step}
                  variants={staggerItem}
                  className="group relative"
                >
                  {/* Glassmorphism Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6 text-center transition-all duration-500 hover:border-purple-500/30 hover:bg-white/10 hover:scale-105">
                    
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
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {step.persianTitle}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ width: ['20%', '80%', '20%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                    />
                  </div>

                  {/* Connection Line */}
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-l from-purple-500/30 to-transparent transform -translate-y-1/2 hidden md:block"
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Quality Promise */}
        <motion.div
          variants={staggerItem}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">تضمین کیفیت در هر مرحله</span>
          </div>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            هر مرحله از این فرآیند با دقت و استانداردهای سینمایی اجرا می‌شود تا نتیجه‌ای فراتر از انتظار شما تحویل دهیم
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
        {/* Neon Portal Banner */}
        <motion.div
          variants={staggerItem}
          className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-xl p-8 md:p-12 lg:p-16 text-center"
        >
          {/* Animated Portal Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Portal Ring Animation */}
          <motion.div
            className="absolute inset-4 rounded-2xl border-2 border-purple-500/20"
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
              className="absolute inset-2 rounded-2xl border border-blue-500/20"
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
            {/* Play Icon */}
            <motion.div
              className="flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="relative h-20 w-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/50"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-8 w-8 text-white ml-1" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-400 blur-xl opacity-50"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                آماده‌اید <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">جادو را ببینید؟</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                نمونه‌کارهای ما را بررسی کنید و ببینید چگونه برندها را به سطح جدیدی از داستان‌گویی بصری رسانده‌ایم
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
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-lg shadow-lg shadow-purple-500/25 border border-purple-500/30"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 40px rgba(147, 51, 234, 0.4)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>مشاهده نمونه‌کارها</span>
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
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
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
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

function PricingSection() {
  const sectionRef = useSectionBackground('#050505')

  const pricingPlans = [
    {
      name: 'Basic',
      persianName: 'سوشال مدیا',
      price: '۲.۵ میلیون',
      period: 'تومان',
      description: 'برای محتوای شبکه‌های اجتماعی و استارتاپ‌ها',
      features: [
        'تدوین حرفه‌ای تا ۲ دقیقه',
        'کالر گریدینگ استاندارد',
        'موشن گرافیک ساده',
        'میکس صدا پایه',
        '۲ دور اصلاحیه',
        'تحویل در ۵ روز کاری'
      ],
      accent: 'from-blue-600 to-cyan-600',
      glow: 'rgba(6, 182, 212, 0.15)',
      popular: false,
    },
    {
      name: 'Professional',
      persianName: 'بیزینس',
      price: '۴.۵ میلیون',
      period: 'تومان',
      description: 'برای کسب‌وکارها و برندهای در حال رشد',
      features: [
        'تدوین حرفه‌ای تا ۵ دقیقه',
        'کالر گریدینگ پیشرفته',
        'موشن گرافیک حرفه‌ای',
        'میکس و مستر صدا',
        '۴ دور اصلاحیه',
        'تحویل در ۷ روز کاری',
        'مشاوره استراتژی محتوا'
      ],
      accent: 'from-purple-600 to-pink-600',
      glow: 'rgba(236, 72, 153, 0.15)',
      popular: true,
    },
    {
      name: 'Premium',
      persianName: 'VIP',
      price: '۸ میلیون',
      period: 'تومان',
      description: 'برای برندهای بزرگ و پروژه‌های ویژه',
      features: [
        'تدوین بدون محدودیت زمان',
        'کالر گریدینگ سینمایی',
        'موشن گرافیک پیشرفته',
        'میکس و مستر حرفه‌ای',
        'اصلاحیه نامحدود',
        'تحویل فوری (۲۴ ساعته)',
        'پشتیبانی VIP',
        'فیلم‌برداری استودیو (اختیاری)'
      ],
      accent: 'from-orange-600 to-yellow-600',
      glow: 'rgba(251, 146, 60, 0.15)',
      popular: false,
    },
  ]

  return (
    <motion.section
      ref={sectionRef}
      id="pricing"
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
          <p className="text-xs uppercase tracking-[0.42em] text-orange-400/80">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            پکیج‌های <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">قیمت‌گذاری</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            انتخاب پکیج مناسب بر اساس نیاز و بودجه شما - با تضمین کیفیت در هر سطح
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className="group relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="relative px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg shadow-purple-500/50">
                    <span className="relative z-10">محبوب‌ترین</span>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-purple-400 blur-md opacity-50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Glassmorphism Card */}
              <div className={`relative overflow-hidden rounded-2xl border ${plan.popular ? 'border-purple-500/50' : 'border-white/10'} bg-white/5 backdrop-blur-xl p-6 md:p-8 text-right transition-all duration-500 hover:border-purple-500/30 hover:bg-white/10 hover:scale-105 ${plan.popular ? 'shadow-lg shadow-purple-500/20' : ''}`}>
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: plan.glow }}
                />

                {/* Popular Glow */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 opacity-30 blur-3xl"
                    style={{ backgroundColor: plan.glow }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Plan Name */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {plan.persianName}
                    </h3>
                    <p className="text-sm text-white/60">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/70">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div className="pt-4">
                    <Link to="/contact">
                      <motion.div
                        className={`w-full py-3 rounded-lg text-center font-medium transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
                            : 'border border-white/20 text-white hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        شروع پروژه
                      </motion.div>
                    </Link>
                  </motion.div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ width: ['20%', '80%', '20%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={staggerItem}
          className="text-center space-y-4"
        >
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            تمام پکیج‌ها شامل مشاوره اولیه، قرارداد رسمی، و پشتیبانی فنی پس از تحویل هستند. 
            برای پروژه‌های سفارشی، با ما تماس بگیرید.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>مشاوره رایگان</span>
                <Headphones className="h-4 w-4" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
