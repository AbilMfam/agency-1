import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Linkedin, Mail, Send, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  const footerContent = (
    <div className="w-full">
      <footer className="relative w-full bg-black/30 backdrop-blur-2xl border-t border-white/10 overflow-hidden">
      {/* Large Neon Orb Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.2, 0.6, 0.2], 
          scale: [0.8, 1.3, 0.8],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Secondary Animated Gradient */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] -z-10"
        initial={{ opacity: 0, x: 100, y: -100 }}
        animate={{ 
          opacity: [0.1, 0.4, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/15 to-purple-600/15 rounded-full blur-2xl" />
      </motion.div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full">
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section - Brand Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            dir="rtl"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                ایجنسی خلاقیت نئونی
              </h2>
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              ما یک ایجنسی خلاق در تهران هستیم؛ متخصص در طراحی سایت، تولید محتوا، مارکتینگ و ساخت تجربه‌های دیجیتال.
            </p>
          </motion.div>

          {/* Glass Divider */}
          <div className="relative h-px mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Middle Section - Newsletter and Links */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            
            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
              dir="rtl"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(0,224,255,0.1)]">
                <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 opacity-50" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">عضویت در خبرنامه</h3>
                  <p className="text-white/70 mb-6">جدیدترین پروژه‌ها و مقالات ما را از دست ندهید</p>
                  
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ایمیل خود را وارد کنید"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/5 pr-12 pl-4 py-4 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 px-6 py-4 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:shadow-[0_0_30px_rgba(0,224,255,0.3)]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        عضویت
                      </span>
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-1"
              dir="rtl"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(147,51,234,0.1)]">
                <div className="absolute inset-0 rounded-3xl border border-purple-400/20 opacity-50" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">لینک‌های سریع</h3>
                  <nav className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'خانه', href: '/' },
                      { name: 'نمونه کارها', href: '/portfolio' },
                      { name: 'خدمات', href: '/services' },
                      { name: 'وب‌سایت و سئو', href: '/services' },
                      { name: 'ارتباط با ما', href: '/contact' }
                    ].map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        whileHover={{ scale: 1.05, x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/80 hover:text-cyan-400 transition-colors duration-300 text-right py-2"
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>

            {/* Address Section */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
              dir="rtl"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(236,72,153,0.1)]">
                <div className="absolute inset-0 rounded-3xl border border-pink-400/20 opacity-50" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">آدرس ما</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">تهران، پاسداران</p>
                        <p className="text-white/70 text-sm">فرمانیه • دیباجی • قیطریه • اندرزگو</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Glass Divider */}
            <div className="relative h-px mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-6">
              {[
                { icon: Instagram, label: 'اینستاگرام', href: '#' },
                { icon: MessageCircle, label: 'واتساپ', href: '#' },
                { icon: Linkedin, label: 'لینکدین', href: '#' }
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <Icon className="relative h-6 w-6 text-white/80 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <motion.div
                      className="absolute -inset-2 rounded-2xl bg-cyan-400/20 blur-xl opacity-0"
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )

  // Render footer outside any layout constraints using portal
  if (!mounted) return null
  return createPortal(footerContent, document.body)
}

export default Footer
