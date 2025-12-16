import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink, Calendar, User, Clock, Globe, Smartphone, Monitor, Zap, Award, TrendingUp } from 'lucide-react'
import { NeonNavbar } from '../../components/Neon/NeonNavbar'
import { Button } from '../../components/ui/button'
import Footer from '../../components/sections/Footer'

const PortfolioCaseStudy = ({ 
  title = "نمونه کار ساخت وب‌سایت فروشگاهی",
  tagline = "طراحی مدرن، واکنش‌گرا و فوق سریع",
  heroImage = "/public/samples/1.jpg",
  overview = {
    description: "طراحی و توسعه یک وب‌سایت فروشگاهی مدرن با تمرکز بر تجربه کاربری برتر و عملکرد بهینه. این پروژه شامل طراحی کامل UI/UX، پیاده‌سازی فرانت‌اند مدرن و بهینه‌سازی برای سرعت و SEO بوده است.",
    client: "شرکت تجارت الکترونیک نوین",
    year: "2024",
    category: "Web Design",
    link: "https://example.com",
    role: "UI/UX Designer & Frontend Developer",
    duration: "3 ماه"
  },
  techStack = ["React", "TailwindCSS", "Framer Motion", "Next.js", "Node.js", "MongoDB"],
  challenges = [
    "ایجاد تجربه خرید روان و سریع برای کاربران موبایل",
    "بهینه‌سازی عملکرد برای حجم بالای محصولات و تصاویر",
    "طراحی ریسپانسیو برای تمام دستگاه‌ها",
    "پیاده‌سازی سیستم پرداخت امن و قابل اعتماد"
  ],
  solutions = [
    "استفاده از تکنیک‌های lazy loading و image optimization",
    "طراحی مینیمال و کاربرپسند با focus روی محصول",
    "پیاده‌سازی progressive web app برای تجربه نزدیک به اپلیکیشن",
    "استفاده از بهترین شیوه‌های UX برای سبد خرید و پرداخت"
  ],
  desktopImages = ["/public/samples/2.jpg", "/public/samples/3.jpg"],
  mobileImages = ["/public/samples/1.jpg", "/public/samples/2.jpg", "/public/samples/3.jpg"],
  results = [
    { metric: "افزایش 45%", description: "نرخ تبدیل کاربران به خریدار" },
    { metric: "کاهش 60%", description: "زمان بارگذاری صفحه" },
    { metric: "افزایش 80%", description: "رضایت مشتریان" },
    { metric: "افزایش 120%", description: "فروش ماهانه" }
  ],
  relatedProjects = [
    { title: "پلتفرم آموزش آنلاین", category: "Web Design", image: "/public/samples/2.jpg" },
    { title: "اپلیکیشن مدیریت پروژه", category: "UI/UX", image: "/public/samples/3.jpg" },
    { title: "سایت شرکت مشاوره‌ای", category: "Branding", image: "/public/samples/1.jpg" }
  ]
}) => {
  const pageFade = {
    hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } },
  }

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

  return (
    <main className="space-y-24">
      <NeonNavbar />
      <motion.div
        initial="hidden"
        animate="show"
        variants={pageFade}
      >
      <div className="relative z-10 px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-16 lg:space-y-24">
      {/* Neon Hologram Project Board Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Global Animated Background Elements */}
        <motion.div
          className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyber-blue/20 blur-3xl"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          aria-hidden
        />
        
        {/* Floating Neon Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyber-blue"
            animate={{
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}

        {/* Hologram Panel Container */}
        <motion.div 
          className="relative z-10 w-full max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Glassy Hologram Panel */}
          <motion.div
            className="relative rounded-[3rem] border border-cyber-blue/30 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,224,255,0.15)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 0 120px rgba(0,224,255,0.25)'
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* Hologram Noise Texture Overlay */}
            <div className="absolute inset-0 rounded-[3rem] opacity-20 mix-blend-screen">
              <div className="w-full h-full bg-gradient-to-br from-cyber-blue/10 via-transparent to-neon-pink/10 animate-pulse" />
            </div>
            
            {/* Animated Neon Border Tracing Effect */}
            <svg className="absolute inset-0 w-full h-full rounded-[3rem]" style={{ pointerEvents: 'none' }}>
              <defs>
                <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="50%" stopColor="#F0F" />
                  <stop offset="100%" stopColor="#00E5FF" />
                </linearGradient>
              </defs>
              <motion.rect
                x="2"
                y="2"
                width="100%"
                height="100%"
                rx="48"
                ry="48"
                fill="none"
                stroke="url(#borderGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(0, 224, 255, 0.6))'
                }}
              />
            </svg>

            {/* Inner Content */}
            <div className="relative z-10 p-12 md:p-16 space-y-8">
              {/* Project Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center space-y-4"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyber-blue to-neon-pink bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: [
                      '0 0 20px rgba(0, 224, 255, 0.5)',
                      '0 0 30px rgba(240, 0, 255, 0.5)',
                      '0 0 20px rgba(0, 224, 255, 0.5)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {title}
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl text-white/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  {tagline}
                </motion.p>
              </motion.div>

              {/* Project Info Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <div className="text-center space-y-2">
                  <Monitor className="w-6 h-6 mx-auto text-cyber-blue" />
                  <p className="text-xs text-white/50 uppercase tracking-wider">Project Type</p>
                  <p className="text-sm font-medium text-white/90">{overview.category}</p>
                </div>
                <div className="text-center space-y-2">
                  <User className="w-6 h-6 mx-auto text-neon-pink" />
                  <p className="text-xs text-white/50 uppercase tracking-wider">Client</p>
                  <p className="text-sm font-medium text-white/90">{overview.client}</p>
                </div>
                <div className="text-center space-y-2">
                  <Calendar className="w-6 h-6 mx-auto text-laser-green" />
                  <p className="text-xs text-white/50 uppercase tracking-wider">Year</p>
                  <p className="text-sm font-medium text-white/90">{overview.year}</p>
                </div>
                <div className="text-center space-y-2">
                  <Zap className="w-6 h-6 mx-auto text-cyber-blue" />
                  <p className="text-xs text-white/50 uppercase tracking-wider">Technologies</p>
                  <p className="text-sm font-medium text-white/90">{techStack.length}+ Tools</p>
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.div
                className="flex justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <a 
                  href={overview.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-cyber-blue/50 bg-cyber-blue/10 backdrop-blur-sm text-white hover:bg-cyber-blue/20 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              </motion.div>
            </div>

            {/* Hologram Glow Effects */}
            <motion.div
              className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-r from-cyber-blue/20 via-transparent to-neon-pink/20 blur-2xl opacity-60"
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Project Overview */}
      <motion.section 
        className="py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        variants={sectionFade}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <div className="space-y-6">
              <motion.h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-blue to-white bg-clip-text text-transparent" variants={staggerItem}>
                پروژه
              </motion.h2>
              <motion.p className="text-lg text-white/70 leading-relaxed" variants={staggerItem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
            </div>

            <motion.div className="rounded-3xl border border-cyber-blue/20 backdrop-blur-sm p-8 space-y-4" variants={staggerItem}>
              <h3 className="text-xl font-semibold text-cyber-blue mb-6">اطلاعات پروژه</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-neon-pink" />
                  <div>
                    <p className="text-xs text-white/50">مشتری</p>
                    <p className="text-sm">Client Name</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-cyber-blue" />
                  <div>
                    <p className="text-xs text-white/50">دسته‌بندی</p>
                    <p className="text-sm">Web Design</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-laser-green" />
                  <div>
                    <p className="text-xs text-white/50">سال</p>
                    <p className="text-sm">2024</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-neon-pink" />
                  <div>
                    <p className="text-xs text-white/50">وب‌سایت</p>
                    <a 
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                    >
                      https://example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-cyber-blue" />
                  <div>
                    <p className="text-xs text-white/50">نقش</p>
                    <p className="text-sm">Designer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-laser-green" />
                  <div>
                    <p className="text-xs text-white/50">مدت زمان</p>
                    <p className="text-sm">3 months</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section
        className="py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        variants={sectionFade}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyber-blue to-neon-pink bg-clip-text text-transparent"
            variants={staggerItem}
          >
            تکنولوژی‌های استفاده شده
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
          >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl border border-white/10 backdrop-blur-sm p-6 text-center hover:border-cyber-blue/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-neon-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {tech}
                  </p>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Challenges & Solutions */}
      <motion.section
        className="py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        variants={sectionFade}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={staggerItem}>
              <div className="rounded-3xl border border-red-500/20 backdrop-blur-sm p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">چالش‌ها</h3>
                </div>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <div className="rounded-3xl border border-cyber-blue/20 backdrop-blur-sm p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyber-blue/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyber-blue">راه‌حل‌ها</h3>
 Brutally cut off. I'll continue with the next part of the response.

                </div>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyber-blue mt-2 flex-shrink-0" />
                      <span>{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Screens Showcase */}
      <motion.section
        className="py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        variants={sectionFade}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyber-blue to-neon-pink bg-clip-text text-transparent"
            variants={staggerItem}
          >
            نمایش دسکتاپ
          </motion.h2>
          
          <motion.div className="space-y-8" variants={staggerContainer}>
            {desktopImages.map((image, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden border border-white/10"
              >
                  <img 
                    src={image} 
                    alt={`Desktop mockup ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                    <p className="text-white text-lg">صفحه اصلی {index + 1}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile Experience */}
      <motion.section
        className="py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        variants={sectionFade}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyber-blue to-neon-pink bg-clip-text text-transparent"
            variants={staggerItem}
          >
            تجربه موبایل
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-12 md:gap-16"
            variants={staggerContainer}
          >
            {mobileImages.map((image, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: 'easeOut' }
                }}
                className="relative group"
              >
                {/* Neon glow effect on hover */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyber-blue/20 to-neon-pink/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Phone frame */}
                <div className="relative mx-auto" style={{ width: '300px', height: '600px' }}>
                  {/* Outer glass frame */}
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-800/50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                    {/* Neon accent borders */}
                    <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-cyber-blue/30 via-transparent to-neon-pink/30 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 rounded-[3rem] border border-cyber-blue/20 shadow-[0_0_40px_rgba(0,224,255,0.3)] group-hover:shadow-[0_0_60px_rgba(0,224,255,0.5)] transition-all duration-500" />
                  </div>
                  
                  {/* Screen reflection */}
                  <div className="absolute top-8 left-8 w-24 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-2xl transform rotate-12" />
                  
                  {/* Notch */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black/90 rounded-full border border-gray-800/50 shadow-inner" />
                  
                  {/* Screen */}
                  <div className="absolute inset-6 rounded-[2.5rem] overflow-hidden bg-black shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                    <img 
                      src={image} 
                      alt={`Mobile mockup ${index + 1}`}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                    />
                    
                    {/* Screen glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/10 via-transparent to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Side buttons */}
                  <div className="absolute right-2 top-24 w-1 h-12 bg-gray-700/50 rounded-full" />
                  <div className="absolute right-2 top-40 w-1 h-8 bg-gray-700/50 rounded-full" />
                  <div className="absolute left-2 top-32 w-1 h-16 bg-gray-700/50 rounded-full" />
                </div>
                
                {/* Label */}
                <motion.p 
                  className="text-center mt-6 text-white/70 font-medium group-hover:text-cyber-blue transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  صفحه {index + 1}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Results / Outcome */}
      <motion.section
        className="py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        variants={sectionFade}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyber-blue to-neon-pink bg-clip-text text-transparent"
            variants={staggerItem}
          >
            نتایج و دستاوردها
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={staggerContainer}
          >
            {results.map((result, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-2xl border border-white/10 backdrop-blur-sm p-6 text-center hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-blue to-neon-pink bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <p className="text-sm text-white/70">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={staggerItem}
            className="text-center max-w-3xl mx-auto"
          >
              <p className="text-lg text-white/80 leading-relaxed">
                این پروژه با موفقیت تمام اهداف تعیین شده را محقق کرد و به یکی از نمونه‌کارهای برجسته در پورتفولیو ما تبدیل شد. 
                بازخورد مشتریان و کاربران نهایی فوق‌العاده بود و منجر به همکاری‌های بیشتر شد.
              </p>
            </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        variants={sectionFade}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none"
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.8 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [0.95, 1.05, 0.95],
              filter: 'blur(0px)'
            }}
            transition={{ 
              opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              filter: { duration: 1.5, ease: 'easeOut' }
            }}
          >
            <motion.div
              className="w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0,224,255,0.3) 0%, rgba(240,0,255,0.2) 40%, transparent 70%)',
                boxShadow: '0 0 80px rgba(0,224,255,0.4), 0 0 120px rgba(240,0,255,0.3), inset 0 0 40px rgba(0,224,255,0.2)'
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
              }}
            />
          </motion.div>
          <motion.div
            variants={staggerItem}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-neon-pink bg-clip-text text-transparent">
              می‌خواهید وب‌سایتی مثل این داشته باشید؟
            </h2>
            <p className="text-xl text-white/70 mb-8">
              بیایید درباره پروژه بعدی شما صحبت کنیم
            </p>
            <Link to="/contact">
              <Button className="gap-3">
                شروع گفتگو
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Related Projects */}
      <motion.section
        className="py-20 px-6 md:px-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        variants={sectionFade}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyber-blue to-neon-pink bg-clip-text text-transparent"
            variants={staggerItem}
          >
            پروژه‌های مرتبط
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyber-blue/50 transition-all duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-cyber-blue">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.section>
        </div>
      </div>
      </motion.div>
      <Footer />
    </main>
  )
}

export default PortfolioCaseStudy
