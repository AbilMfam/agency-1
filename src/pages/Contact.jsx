import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Sparkles,
  ArrowUpRight,
  Phone,
  Mail,
  Instagram,
  MapPin,
  MessageSquare,
  Send,
  User,
  Globe,
  Navigation
} from 'lucide-react'
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

const contactInfo = [
  {
    icon: Phone,
    label: 'تلفن',
    value: '+۹۸ ۲۱ ۸۸۰۰ ۰۰۰۰',
    href: 'tel:+982188000000',
  },
  {
    icon: Mail,
    label: 'ایمیل',
    value: 'info@neondigital.ir',
    href: 'mailto:info@neondigital.ir',
  },
  {
    icon: Instagram,
    label: 'اینستاگرام',
    value: '@neondigital.ir',
    href: 'https://instagram.com/neondigital.ir',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="space-y-24">
      <NeonNavbar />
      <HeroSection />
      <ContactInfoSection />
      <ContactFormSection formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <MapSection />
      <BottomCTASection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  const sectionRef = useSectionBackground('#0A1428')

  return (
    <section ref={sectionRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
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

      <div className="relative z-10 text-center space-y-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <span className="relative">
              تماس با ما
              <motion.span
                className="absolute -inset-2 rounded-full bg-cyber-blue/30 blur-xl"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              />
            </span>
          </h1>
          <motion.p
            className="max-w-2xl mx-auto text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            با تیم نئونی ما در ارتباط باشید و پروژه بعدی خود را آغاز کنید
          </motion.p>
        </motion.div>

        {/* Animated Neon Lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
        >
          <motion.svg
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <motion.line
              x1="15%"
              y1="25%"
              x2="35%"
              y2="15%"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <motion.line
              x1="65%"
              y1="75%"
              x2="85%"
              y2="65%"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />
            <motion.line
              x1="25%"
              y1="70%"
              x2="45%"
              y2="60%"
              stroke="url(#neonGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.6 }}
            />
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#F0F" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}

function ContactInfoSection() {
  const sectionRef = useSectionBackground('#071021')

  return (
    <motion.section
      ref={sectionRef}
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">اطلاعات تماس</p>
        <h2 className="text-4xl font-semibold text-white">راه‌های ارتباطی</h2>
        <p className="text-white/70">با ما از طریق هر یک از این روش‌ها در ارتباط باشید</p>
      </div>
      
      <motion.div className="grid gap-6 md:grid-cols-3" variants={staggerContainer}>
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          return (
            <motion.a
              key={info.label}
              href={info.href}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,224,255,0.08)] backdrop-blur-xl p-6 text-right"
              dir="rtl"
            >
              <div className="absolute inset-0 rounded-[32px] border border-cyber-blue/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.div
                className="absolute inset-0 bg-cyber-blue/20 opacity-0 blur-3xl transition duration-300 group-hover:opacity-60"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.7 }}
              />
              
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <p className="text-sm text-white/60">{info.label}</p>
                  <p className="text-lg font-semibold text-white">{info.value}</p>
                </div>
                
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-cyber-blue/20 text-cyber-blue">
                  <span className="absolute inset-0 rounded-2xl border border-cyber-blue/40 blur-[2px]" aria-hidden />
                  <Icon className="relative h-6 w-6" />
                </div>
              </div>
              
              <motion.span
                className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyber-blue/70 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                aria-hidden
              />
            </motion.a>
          )
        })}
      </motion.div>
    </motion.section>
  )
}

function ContactFormSection({ formData, handleChange, handleSubmit }) {
  const sectionRef = useSectionBackground('#08152A')

  return (
    <motion.section
      ref={sectionRef}
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">ارسال پیام</p>
        <h2 className="text-4xl font-semibold text-white">با ما در ارتباط باشید</h2>
        <p className="text-white/70">پیام خود را برای ما ارسال کنید و در کمتر از ۲۴ ساعت پاسخ دریافت کنید</p>
      </div>
      
      <motion.div
        variants={staggerItem}
        className="mx-auto max-w-2xl"
      >
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,224,255,0.08)] backdrop-blur-xl p-8">
          <div className="absolute inset-0 rounded-[32px] border border-cyber-blue/20 opacity-50" />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6" dir="rtl">
            <div className="space-y-2 text-right">
              <label htmlFor="name" className="text-sm font-medium text-white/80">
                نام و نام خانوادگی
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-cyber-blue" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="نام کامل شما"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 pr-12 pl-4 py-3 text-base text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyber-blue/60 focus:ring-offset-0 focus:ring-offset-transparent"
                />
              </div>
            </div>

            <div className="space-y-2 text-right">
              <label htmlFor="email" className="text-sm font-medium text-white/80">
                ایمیل
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-cyber-blue" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 pr-12 pl-4 py-3 text-base text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyber-blue/60 focus:ring-offset-0 focus:ring-offset-transparent"
                />
              </div>
            </div>

            <div className="space-y-2 text-right">
              <label htmlFor="message" className="text-sm font-medium text-white/80">
                پیام شما
              </label>
              <div className="relative">
                <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-cyber-blue" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="پیام خود را اینجا بنویسید..."
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 pr-12 pl-4 py-3 text-base text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyber-blue/60 focus:ring-offset-0 focus:ring-offset-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" className="gap-2 text-base">
                ارسال پیام
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.section>
  )
}

function MapSection() {
  const sectionRef = useSectionBackground('#061119')

  return (
    <motion.section
      ref={sectionRef}
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">موقعیت</p>
        <h2 className="text-4xl font-semibold text-white">دفتر ما</h2>
      </div>
      
      <motion.div
        variants={staggerItem}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,224,255,0.08)] backdrop-blur-xl p-12 text-center"
      >
        <div className="absolute inset-0 rounded-[32px] border border-cyber-blue/20 opacity-50" />
        
        <div className="relative z-10 space-y-6">
          <motion.div
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cyber-blue/20 text-cyber-blue"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          >
            <span className="absolute inset-0 rounded-2xl border border-cyber-blue/40 blur-[2px]" aria-hidden />
            <MapPin className="relative h-10 w-10" />
          </motion.div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">نقشه دفتر ما</h3>
            <p className="text-lg text-white/80">نقشه دفتر ما به زودی قرار می‌گیرد</p>
            <p className="text-white/60">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
          </div>
          
          <motion.div
            className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

function BottomCTASection() {
  const sectionRef = useSectionBackground('#0C1B33')

  return (
    <motion.section
      ref={sectionRef}
      className="relative"
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

        <div className="relative z-10 text-center space-y-8" dir="rtl">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">ارتباط سریع</p>
            <h2 className="text-4xl font-semibold text-white">همین حالا با تیم نئونی ما در ارتباط باشید</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              برای مشاوره رایگان و شروع پروژه بعدی خود، همین حالا از طریق شبکه‌های اجتماعی با ما در ارتباط باشید.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/982188000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-green-500/40 bg-green-500/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-xl transition-all hover:border-green-500/70 hover:bg-green-500/20 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare className="h-5 w-5" />
              واتس‌اپ
            </motion.a>
            
            <motion.a
              href="https://instagram.com/neondigital.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-pink-500/40 bg-pink-500/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-xl transition-all hover:border-pink-500/70 hover:bg-pink-500/20 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram className="h-5 w-5" />
              اینستاگرام
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
