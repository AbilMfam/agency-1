import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Shield, CheckCircle } from 'lucide-react'
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

export default function WebContact() {
  const sectionRef = useSectionBackground('#0c0c1a')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      })
    }, 2000)
  }

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
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
          <p className="text-xs uppercase tracking-[0.42em] text-blue-400/80">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">تماس با ما</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            آماده‌اید تا پروژه وب خود را به سطح بعدی ببرید؟ با کارشناسان ما صحبت کنید و مشاوره رایگان دریافت کنید
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div 
          className="grid gap-8 lg:grid-cols-2"
          variants={staggerContainer}
        >
          {/* Contact Info */}
          <motion.div variants={staggerItem} className="space-y-8">
            {/* Contact Card */}
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-blue-900/20 backdrop-blur-xl p-8">
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-30 blur-3xl"
                style={{ backgroundColor: 'rgba(79, 139, 253, 0.15)' }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold text-white">اطلاعات تماس</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 border border-blue-500/30">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">ایمیل</p>
                      <p className="text-white font-medium">info@agency.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 border border-blue-500/30">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">تلفن</p>
                      <p className="text-white font-medium">+۹۸ ۲۱ ۸۸۶۶ ۳۳۴۴</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 border border-blue-500/30">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">آدرس</p>
                      <p className="text-white font-medium">تهران، بلوار کشاورز</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">چرا ما را انتخاب کنید؟</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-white/80">تضمین کیفیت و رضایت مشتری</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-white/80">پشتیبانی فنی ۲۴/۷</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-white/80">قیمت‌گذاری شفاف و منصفانه</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                  <span className="text-white/80">تحویل پروژه در زمان مقرر</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={staggerItem}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500"
                style={{ backgroundColor: 'rgba(79, 139, 253, 0.1)' }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">ارسال پیام</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 border border-green-500/30">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">پیام شما ارسال شد!</h4>
                    <p className="text-white/70">به زودی با شما تماس خواهیم گرفت</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">نام و نام خانوادگی</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                          style={{
                            boxShadow: '0 0 0 0 rgba(79, 139, 253, 0)',
                          }}
                          onFocus={(e) => {
                            e.target.style.boxShadow = '0 0 0 3px rgba(79, 139, 253, 0.3)'
                            e.target.style.borderColor = 'rgba(79, 139, 253, 0.5)'
                          }}
                          onBlur={(e) => {
                            e.target.style.boxShadow = '0 0 0 0 rgba(79, 139, 253, 0)'
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                          }}
                          placeholder="نام شما"
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">ایمیل</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                          style={{
                            boxShadow: '0 0 0 0 rgba(79, 139, 253, 0)',
                          }}
                          onFocus={(e) => {
                            e.target.style.boxShadow = '0 0 0 3px rgba(79, 139, 253, 0.3)'
                            e.target.style.borderColor = 'rgba(79, 139, 253, 0.5)'
                          }}
                          onBlur={(e) => {
                            e.target.style.boxShadow = '0 0 0 0 rgba(79, 139, 253, 0)'
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                          }}
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">تلفن (اختیاری)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                        style={{
                          boxShadow: '0 0 0 0 rgba(79, 139, 253, 0)',
                        }}
                        onFocus={(e) => {
                          e.target.style.boxShadow = '0 0 0 3px rgba(79, 139, 253, 0.3)'
                          e.target.style.borderColor = 'rgba(79, 139, 253, 0.5)'
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = '0 0 0 0 rgba(79, 139, 253, 0)'
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                        }}
                        placeholder="۰۹۱۲ ۳۴۵ ۶۷۸۹"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">نوع پروژه</label>
                      <input
                        type="text"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                        style={{
                          boxShadow: '0 0 0 0 rgba(79, 139, 253, 0)',
                        }}
                        onFocus={(e) => {
                          e.target.style.boxShadow = '0 0 0 3px rgba(79, 139, 253, 0.3)'
                          e.target.style.borderColor = 'rgba(79, 139, 253, 0.5)'
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = '0 0 0 0 rgba(79, 139, 253, 0)'
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                        }}
                        placeholder="وب‌سایت شرکتی، فروشگاه آنلاین،..."
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">توضیحات پروژه</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                        style={{
                          boxShadow: '0 0 0 0 rgba(79, 139, 253, 0)',
                        }}
                        onFocus={(e) => {
                          e.target.style.boxShadow = '0 0 0 3px rgba(79, 139, 253, 0.3)'
                          e.target.style.borderColor = 'rgba(79, 139, 253, 0.5)'
                        }}
                        onBlur={(e) => {
                          e.target.style.boxShadow = '0 0 0 0 rgba(79, 139, 253, 0)'
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                        }}
                        placeholder="لطفاً جزئیات پروژه خود را توضیح دهید..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-lg shadow-blue-500/30 border border-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(79, 139, 253, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          در حال ارسال...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="h-5 w-5" />
                          ارسال پیام
                        </span>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          variants={staggerItem}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">اطلاعات شما با ما امن است</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
