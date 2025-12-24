import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
  Users,
  Award
} from 'lucide-react'
import { NeonNavbar } from '../components/Neon/NeonNavbar'
import NeonOrbitalScanner from '../components/Neon/NeonOrbitalScanner'
import Footer from '../components/sections/Footer'
import ReelsShowcase from '../components/sections/ReelsShowcase'

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: 'پلتفرم تجارت الکترونیک نئونی',
    image: '/samples/1.jpg',
    quote: 'یک انقلاب در دنیای تجارت الکترونیک با طراحی نئونی منحصربه‌فرد و تجربه کاربری بی‌نظیر. این پلتفرم با استفاده از آخرین تکنولوژی‌ها، محیطی مدرن و کاربرپسند برای خرید و فروش آنلاین فراهم کرده است.',
    author: 'شرکت تک‌دیجیت',
    category: 'وب‌سایت'
  },
  {
    id: 2,
    title: 'داشبورد تحلیلی هوشمند',
    image: '/samples/2.jpg',
    quote: 'ویزوالایزیشن داده‌های پیچیده با رابط کاربری سینمایی و انیمیشن‌های پیشرفته. این داشبورد به مدیران امکان تحلیل عمیق داده‌ها و گرفتن تصمیمات هوشمندانه را می‌دهد.',
    author: 'استارتاپ دیتاویژن',
    category: 'اپلیکیشن'
  },
  {
    id: 3,
    title: 'موزیک ویدیو سایبری',
    image: '/samples/3.jpg',
    quote: 'جلوه‌های ویژه نئونی و انیمیشن سه‌بعدی برای موزیک ویدیو آینده‌نگر. ترکیبی هنری از موسیقی الکترونیک و گرافیک سایبری که تجربه‌ای جدید از هنر دیجیتال را به نمایش می‌گذارد.',
    author: 'هنرمند الکترونیک',
    category: 'ویدیو'
  }
]

// Stats data
const portfolioStats = [
  { number: '26+', label: 'پروژه کامل', icon: Award },
  { number: '98%', label: 'رضایت مشتری', icon: Users },
  { number: '10M+', label: 'کاربر فعال', icon: TrendingUp }
]

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Premium Background */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 opacity-30">
          <div className="grid-overlay neon-grid w-full h-full" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 10%, rgba(79, 139, 253, 0.15), transparent 50%), radial-gradient(circle at 70% 80%, rgba(79, 139, 253, 0.1), transparent 50%)',
          }}
        />
        <motion.div
          className="absolute top-0 left-0 h-96 w-96 rounded-full blur-[200px]"
          style={{ background: 'rgba(79, 139, 253, 0.08)' }}
          animate={{ x: [0, 100, -50], y: [0, -50, 30], scale: [0.8, 1.2, 0.9] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full blur-[200px]"
          style={{ background: 'rgba(79, 139, 253, 0.06)' }}
          animate={{ x: [0, -80, 40], y: [0, 60, -30], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      
      <div className="relative z-10">
        <NeonNavbar />
        
        {/* Hero Section with Background Typography */}
        <section className="relative min-h-[80vh] flex items-center justify-center">
          {/* Background Elements - Full Width */}
          <div className="absolute inset-0">
            {/* Neon Orbital Scanner Background */}
            <NeonOrbitalScanner className="opacity-60" />
            
            {/* Background Typography - PORTFOLIO */}
            <motion.h1 
              className="absolute inset-0 flex items-center justify-center text-[20vw] md:text-[15vw] font-black opacity-5"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                WebkitTextFillColor: 'transparent',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            >
              PORTFOLIO
            </motion.h1>
          </div>
          
          {/* Content - Centered */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="space-y-8"
              >
                <h2 className="text-6xl md:text-8xl font-bold text-white" style={{
                  textShadow: `
                    0 0 10px rgba(79, 139, 253, 0.8),
                    0 0 20px rgba(79, 139, 253, 0.6),
                    0 0 30px rgba(79, 139, 253, 0.4),
                    0 0 40px rgba(79, 139, 253, 0.2)
                  `,
                  filter: 'brightness(1.1)'
                }}>
                  پروژه‌های برگزیده
                </h2>
                <motion.p 
                  className="text-xl md:text-2xl text-white/80 font-light"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                >
                  طراحی‌های نئونی و تجربه‌های کاربری استثنایی
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section dir="rtl" className="relative pt-32 pb-12">
          {/* Background Watermark - PORTFOLIO - Full Width */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            {/* Animated Neon Background */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Neon Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(79, 139, 253, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(79, 139, 253, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                  animation: 'neon-grid-move 20s linear infinite'
                }}
              />
              
              {/* Glowing Neon Circles */}
              <motion.div
                className="absolute top-20 right-20 w-32 h-32 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(79, 139, 253, 0.4), transparent 70%)',
                  filter: 'blur(20px)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              <motion.div
                className="absolute bottom-20 left-20 w-40 h-40 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3), transparent 70%)',
                  filter: 'blur(25px)'
                }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Neon Text with Glow Effect */}
              <motion.h2 
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[10vw] font-black"
                style={{
                  color: '#4f8bfd',
                  textShadow: `
                    0 0 10px rgba(79, 139, 253, 0.8),
                    0 0 20px rgba(79, 139, 253, 0.6),
                    0 0 30px rgba(79, 139, 253, 0.4),
                    0 0 40px rgba(79, 139, 253, 0.3),
                    0 0 70px rgba(79, 139, 253, 0.2),
                    0 0 80px rgba(79, 139, 253, 0.1),
                    inset 0 0 20px rgba(79, 139, 253, 0.2)
                  `,
                  filter: 'brightness(1.2)',
                  pointerEvents: 'none'
                }}
                animate={{
                  textShadow: [
                    '0 0 10px rgba(79, 139, 253, 0.8), 0 0 20px rgba(79, 139, 253, 0.6), 0 0 30px rgba(79, 139, 253, 0.4), 0 0 40px rgba(79, 139, 253, 0.3), 0 0 70px rgba(79, 139, 253, 0.2), 0 0 80px rgba(79, 139, 253, 0.1), inset 0 0 20px rgba(79, 139, 253, 0.2)',
                    '0 0 20px rgba(79, 139, 253, 1), 0 0 30px rgba(79, 139, 253, 0.8), 0 0 40px rgba(79, 139, 253, 0.6), 0 0 50px rgba(79, 139, 253, 0.4), 0 0 80px rgba(79, 139, 253, 0.3), 0 0 90px rgba(79, 139, 253, 0.2), inset 0 0 30px rgba(79, 139, 253, 0.3)',
                    '0 0 10px rgba(79, 139, 253, 0.8), 0 0 20px rgba(79, 139, 253, 0.6), 0 0 30px rgba(79, 139, 253, 0.4), 0 0 40px rgba(79, 139, 253, 0.3), 0 0 70px rgba(79, 139, 253, 0.2), 0 0 80px rgba(79, 139, 253, 0.1), inset 0 0 20px rgba(79, 139, 253, 0.2)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                PORTFOLIO
              </motion.h2>
              
              {/* Additional Neon Lines */}
              <motion.div
                className="absolute top-1/4 left-10 w-20 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, transparent, #4f8bfd, transparent)',
                  boxShadow: '0 0 10px #4f8bfd'
                }}
                animate={{
                  width: ['20px', '100px', '20px'],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 right-10 w-20 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, transparent, #ff00ff, transparent)',
                  boxShadow: '0 0 10px #ff00ff'
                }}
                animate={{
                  width: ['20px', '80px', '20px'],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              />
            </div>
          </div>
          
          {/* Content Layer - Above Background Text - Centered */}
          <div className="relative px-4 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl" style={{ zIndex: 10 }}>
              {/* Bento Grid Layout - RTL */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-row-reverse">
                {/* Left Card - Project Slider (RTL: should be on left) */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2 order-2 lg:order-1"
                >
                  <div className="relative h-full min-h-[450px] rounded-[40px] border border-white/10 overflow-hidden group">
                    {/* Project Image Background */}
                    <div className="absolute inset-0">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentProject}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url(${featuredProjects[currentProject].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                      </AnimatePresence>
                      
                                                                  
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </div>
                    
                    {/* Glassmorphism Border */}
                    <div className="absolute inset-0 rounded-[40px] border border-white/10" />
                    
                    {/* Project Content */}
                    <div className="relative z-10 p-10 flex flex-col justify-between h-full text-right">
                      <div className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 backdrop-blur-md">
                            <div className="h-2 w-2 rounded-full bg-cyber-blue" />
                            <span className="text-sm text-cyber-blue">
                              {featuredProjects[currentProject].category}
                            </span>
                          </div>
                        </motion.div>
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`content-${currentProject}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                          >
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                              {featuredProjects[currentProject].title}
                            </h3>
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                              {featuredProjects[currentProject].quote}
                            </p>
                            <p className="text-white/60">
                              — {featuredProjects[currentProject].author}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      
                      {/* Navigation Controls - RTL */}
                      <div className="flex items-center justify-between flex-row-reverse">
                        {/* Pagination */}
                        <div className="text-white/60 text-sm">
                          {String(currentProject + 1).padStart(2, '0')}/{String(featuredProjects.length).padStart(2, '0')}
                        </div>
                        
                        {/* Navigation Buttons - RTL */}
                        <div className="flex items-center gap-4">
                          <motion.button
                            onClick={nextProject}
                            className="h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </motion.button>
                          <motion.button
                            onClick={prevProject}
                            className="h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronRight className="h-5 w-5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-[40px] opacity-0 bg-gradient-to-t from-cyber-blue/20 to-transparent"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Right Card - Stats (RTL: should be on right) */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="lg:col-span-1 order-1 lg:order-2"
                >
                  <div className="relative h-full min-h-[450px] rounded-[40px] border border-white/10 overflow-hidden group">
                    {/* Video Background */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ filter: 'blur(4px)' }}
                    >
                      <source src="/samples/5.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Dark Overlay for Readability */}
                    <div className="absolute inset-0 bg-black/50" />
                    
                    {/* Glassmorphism Border */}
                    <div className="absolute inset-0 rounded-[40px] border border-white/10" />
                    
                    {/* Stats Content */}
                    <div className="relative z-10 p-10 flex flex-col justify-center h-full space-y-8 text-right">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{
                          textShadow: '0 0 20px rgba(79, 139, 253, 0.5)'
                        }}>
                          آمار و ارقام
                        </h3>
                        <p className="text-white/80" style={{
                          textShadow: '0 0 10px rgba(79, 139, 253, 0.3)'
                        }}>
                          موفقیت‌های ما در اعداد
                        </p>
                      </motion.div>
                      
                      <div className="space-y-6">
                        {portfolioStats.map((stat, index) => {
                          const Icon = stat.icon
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-4 group"
                            >
                              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/10 flex items-center justify-center border border-cyber-blue/30 group-hover:scale-110 transition-transform duration-300" style={{
                                boxShadow: '0 0 20px rgba(79, 139, 253, 0.3), inset 0 0 10px rgba(79, 139, 253, 0.1)'
                              }}>
                                <Icon className="h-7 w-7 text-cyber-blue" style={{
                                  filter: 'drop-shadow(0 0 5px rgba(79, 139, 253, 0.8))'
                                }} />
                              </div>
                              <div className="text-right">
                                <div className="text-4xl md:text-5xl font-bold text-white" style={{
                                  textShadow: '0 0 15px rgba(79, 139, 253, 0.4), 0 0 30px rgba(79, 139, 253, 0.2)'
                                }}>
                                  {stat.number}
                                </div>
                                <div className="text-white/70 text-sm font-medium">
                                  {stat.label}
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-[40px] opacity-0 bg-gradient-to-br from-cyber-blue/10 to-transparent"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Stats Section */}
        <section dir="rtl" className="relative py-12">
          {/* Background Watermark - STATS - Full Width */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            {/* Animated Neon Background */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Neon Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(79, 139, 253, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(79, 139, 253, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                  animation: 'neon-grid-move 20s linear infinite'
                }}
              />
              
              {/* Glowing Neon Circles */}
              <motion.div
                className="absolute top-20 right-20 w-32 h-32 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(79, 139, 253, 0.4), transparent 70%)',
                  filter: 'blur(20px)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              <motion.div
                className="absolute bottom-20 left-20 w-40 h-40 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3), transparent 70%)',
                  filter: 'blur(25px)'
                }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Neon Text with Glow Effect */}
              <motion.h2 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[10vw] font-black"
                style={{
                  color: '#4f8bfd',
                  textShadow: `
                    0 0 10px rgba(79, 139, 253, 0.8),
                    0 0 20px rgba(79, 139, 253, 0.6),
                    0 0 30px rgba(79, 139, 253, 0.4),
                    0 0 40px rgba(79, 139, 253, 0.3),
                    0 0 70px rgba(79, 139, 253, 0.2),
                    0 0 80px rgba(79, 139, 253, 0.1),
                    inset 0 0 20px rgba(79, 139, 253, 0.2)
                  `,
                  filter: 'brightness(1.2)',
                  pointerEvents: 'none'
                }}
                animate={{
                  textShadow: [
                    '0 0 10px rgba(79, 139, 253, 0.8), 0 0 20px rgba(79, 139, 253, 0.6), 0 0 30px rgba(79, 139, 253, 0.4), 0 0 40px rgba(79, 139, 253, 0.3), 0 0 70px rgba(79, 139, 253, 0.2), 0 0 80px rgba(79, 139, 253, 0.1), inset 0 0 20px rgba(79, 139, 253, 0.2)',
                    '0 0 20px rgba(79, 139, 253, 1), 0 0 30px rgba(79, 139, 253, 0.8), 0 0 40px rgba(79, 139, 253, 0.6), 0 0 50px rgba(79, 139, 253, 0.4), 0 0 80px rgba(79, 139, 253, 0.3), 0 0 90px rgba(79, 139, 253, 0.2), inset 0 0 30px rgba(79, 139, 253, 0.3)',
                    '0 0 10px rgba(79, 139, 253, 0.8), 0 0 20px rgba(79, 139, 253, 0.6), 0 0 30px rgba(79, 139, 253, 0.4), 0 0 40px rgba(79, 139, 253, 0.3), 0 0 70px rgba(79, 139, 253, 0.2), 0 0 80px rgba(79, 139, 253, 0.1), inset 0 0 20px rgba(79, 139, 253, 0.2)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                STATS
              </motion.h2>
              
              {/* Additional Neon Lines */}
              <motion.div
                className="absolute top-1/4 left-10 w-20 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, transparent, #4f8bfd, transparent)',
                  boxShadow: '0 0 10px #4f8bfd'
                }}
                animate={{
                  width: ['20px', '100px', '20px'],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 right-10 w-20 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, transparent, #ff00ff, transparent)',
                  boxShadow: '0 0 10px #ff00ff'
                }}
                animate={{
                  width: ['20px', '80px', '20px'],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              />
            </div>
          </div>
          
          {/* Content Layer - Above Background Text - Centered */}
          <div className="relative px-4 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl" style={{ zIndex: 10 }}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  دستاوردهای ما
                </h3>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  سال‌ها تجربه در خلق پروژه‌های منحصربه‌فرد
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolioStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <div className="relative h-40 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl overflow-hidden">
                        <div className="absolute inset-0 rounded-[32px] border border-white/10" />
                        <div className="relative z-10 p-8 flex items-center justify-between h-full text-right">
                          <div className="text-right">
                            <div className="text-3xl md:text-4xl font-bold text-white">
                              {stat.number}
                            </div>
                            <div className="text-white/60 text-sm mt-1">
                              {stat.label}
                            </div>
                          </div>
                          <div className="h-12 w-12 rounded-full bg-cyber-blue/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-cyber-blue" />
                          </div>
                        </div>
                        
                        <motion.div
                          className="absolute inset-0 rounded-[32px] opacity-0 bg-gradient-to-br from-cyber-blue/10 to-transparent"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Reels Showcase Section */}
        <ReelsShowcase />
      </div>
      
      <Footer />
    </div>
  )
}