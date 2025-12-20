import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'
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

export default function WebPricing() {
  const sectionRef = useSectionBackground('#0b0b18')

  const pricingPlans = [
    {
      name: 'Standard',
      persianName: 'استاندارد',
      price: '$2,999',
      persianPrice: '۲,۹۹۹ دلار',
      description: 'برای کسب‌وکارهای نوپا و وب‌سایت‌های شخصی',
      features: [
        'طراحی واکنش‌گرا کامل',
        '۵ صفحه اصلی',
        'SEO بهینه‌سازی شده',
        'فرم تماس',
        'یک ماه پشتیبانی',
        'هاستینگ رایگان ۳ ماه',
      ],
      accent: 'from-blue-500 to-cyan-500',
      glow: 'rgba(79, 139, 253, 0.2)',
      popular: false,
    },
    {
      name: 'Business',
      persianName: 'تجاری',
      price: '$5,999',
      persianPrice: '۵,۹۹۹ دلار',
      description: 'برای شرکت‌ها و کسب‌وکارهای در حال رشد',
      features: [
        'طراحی واکنش‌گرا کامل',
        '۱۰ صفحه اصلی',
        'SEO پیشرفته',
        'سیستم مدیریت محتوا',
        'پورتال مشتریان',
        '۳ ماه پشتیبانی',
        'هاستینگ رایگان ۶ ماه',
        'یکپارچه‌سازی API',
      ],
      accent: 'from-cyan-500 to-blue-500',
      glow: 'rgba(6, 182, 212, 0.25)',
      popular: true,
    },
    {
      name: 'E-commerce',
      persianName: 'فروشگاهی',
      price: '$9,999',
      persianPrice: '۹,۹۹۹ دلار',
      description: 'برای فروشگاه‌های آنلاین و پلتفرم‌های تجارت',
      features: [
        'طراحی واکنش‌گرا کامل',
        'فروشگاه کامل',
        'سیستم پرداخت',
        'مدیریت محصولات',
        'سبد خرید',
        '۶ ماه پشتیبانی',
        'هاستینگ رایگان ۱ سال',
        'تحلیل و گزارش',
        'یکپارچه‌سازی ارسال',
      ],
      accent: 'from-blue-500 to-indigo-500',
      glow: 'rgba(99, 102, 241, 0.2)',
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
        <motion.div 
          className="text-center space-y-4"
          variants={staggerItem}
        >
          <p className="text-xs uppercase tracking-[0.42em] text-blue-400/80">Pricing Plans</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            پلن‌های <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">قیمت‌گذاری</span> ما
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            پلن‌های متنوع برای هر بودجه و نیاز - از وب‌سایت‌های شخصی تا پلتفرم‌های تجارت الکترونیک
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:gap-8 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium shadow-lg shadow-blue-500/50 border border-blue-500/30">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>محبوب‌ترین</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className={`relative overflow-hidden rounded-3xl border ${plan.popular ? 'border-blue-500/40' : 'border-blue-500/20'} bg-white/5 backdrop-blur-xl transition-all duration-700 hover:border-blue-500/60 hover:bg-white/10 hover:scale-105`}>
                
                <motion.div
                  className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{ backgroundColor: plan.glow }}
                />

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative z-10 space-y-6 p-6 md:p-8">
                  <div className="flex justify-center">
                    <div className={`relative h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-r ${plan.accent} border border-white/20 shadow-lg ${plan.popular ? 'shadow-blue-500/50' : 'shadow-blue-500/25'}`}>
                      <div className="h-8 w-8 bg-white/30 rounded-full" />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {plan.persianName}
                    </h3>
                    <p className="text-blue-300/80 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center space-y-2">
                    <div className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'} border ${plan.popular ? 'border-blue-500/40' : 'border-blue-500/20'} shadow-lg ${plan.popular ? 'shadow-blue-500/50' : 'shadow-blue-500/25'}`}>
                      <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-blue-300'}`}>
                        {plan.persianPrice}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 text-right"
                      >
                        <div className="flex-shrink-0">
                          <Check className="h-5 w-5 text-blue-400" />
                        </div>
                        <span className="text-white/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-full py-3 rounded-full text-center font-medium transition-all duration-300 ${plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 border border-blue-500/30 hover:shadow-blue-500/70' 
                      : 'border border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50'}`}
                    >
                      {plan.popular ? 'شروع فوری' : 'انتخاب پلن'}
                    </div>
                  </motion.div>

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

        <motion.div
          variants={staggerItem}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">پلن سفارشی هم داریم</span>
          </div>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            نیازهای خاصی دارید؟ ما پلن‌های سفارشی برای پروژه‌های بزرگ و مشتریان خاص ارائه می‌دهیم
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
