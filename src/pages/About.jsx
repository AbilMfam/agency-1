import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  Sparkles,
  ArrowUpRight,
  Target,
  Eye,
  Heart,
  Users,
  MapPin,
  Mail,
  Phone,
  Rocket,
  Zap,
  ShieldCheck,
  Lightbulb,
  Award,
  Globe
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

const coreValues = [
  {
    icon: Target,
    title: 'ماموریت ما',
    description: 'تبدیل ایده‌های خلاقانه به تجربه‌های دیجیتال نئونی که برندها را در ذهن مخاطب ماندگار می‌کند. ما با ترکیب هنر و تکنولوژی، آینده دیجیتال را امروز می‌سازیم.',
  },
  {
    icon: Eye,
    title: 'چشم‌انداز ما',
    description: 'شدن پیشروترین استودیوی خلاقیت در خاورمیانه با تمرکز بر طراحی‌های نئونی و تجربه‌های کاربری بی‌نظیر. ما به دنبال تعریف مجدد استانداردهای دیجیتال هستیم.',
  },
  {
    icon: Heart,
    title: 'ارزش‌های ما',
    description: 'نوآوری، خلاقیت، تعهد و کیفیت در تمام پروژه‌ها. ما باور داریم که هر پروژه فرصتی برای خلق چیزی منحصربه‌فرد و فراتر از انتظارات است.',
  },
]

const teamMembers = [
  {
    name: 'علی رضایی',
    role: 'مدیرعامل و بنیان‌گذار',
    image: '/images/team/ceo.jpg',
    description: 'با بیش از ۱۰ سال تجربه در طراحی دیجیتال و استراتژی برند',
  },
  {
    name: 'سارا محمدی',
    role: 'مدیر طراحی و خلاقیت',
    image: '/images/team/designer.jpg',
    description: 'متخصص UI/UX و طراحی تجربه‌های نئونی',
  },
  {
    name: 'رضا اکبری',
    role: 'سرپرست فنی',
    image: '/images/team/tech.jpg',
    description: 'با تخصص در توسعه وب و تکنولوژی‌های پیشرفته',
  },
]

export default function About() {
  return (
    <main className="space-y-24">
      <NeonNavbar />
      <HeroSection />
      <IntroductionSection />
      <CoreValuesSection />
      <TeamSection />
      <CTASection />
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
      {[...Array(6)].map((_, i) => (
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
              درباره ما
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
            استودیوی خلاقیت نئونی - جایی که ایده‌ها به تجربه‌های درخشان تبدیل می‌شوند
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
              x1="10%"
              y1="30%"
              x2="30%"
              y2="20%"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <motion.line
              x1="70%"
              y1="80%"
              x2="90%"
              y2="70%"
              stroke="url(#neonGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
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

function IntroductionSection() {
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
      <div dir="rtl" className="text-center space-y-6 max-w-4xl mx-auto">
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-cyber-blue"
          variants={staggerItem}
        >
          معرفی
        </motion.p>
        <motion.h2
          className="text-4xl font-semibold text-white"
          variants={staggerItem}
        >
          نئون دیجیتال: استودیوی خلاقیت آینده
        </motion.h2>
        <motion.p
          className="text-lg text-white/80 leading-relaxed"
          variants={staggerItem}
        >
          ما در نئون دیجیتال، ایجنسی خلاقیت هستیم که به طراحی تجربه‌های دیجیتال بی‌نظیر اختصاص داریم. با ترکیب هنر و تکنولوژی، برندهایی می‌سازیم که نه تنها زیبا هستند، بلکه در ذهن مخاطب ماندگار می‌شوند. تیم ما از متخصصان خلاق تشکیل شده که هر کدام در حوزه خود پیشرو هستند و با همفکری، پروژه‌هایی فراتر از انتظار خلق می‌کنند.
        </motion.p>
        <motion.p
          className="text-lg text-white/80 leading-relaxed"
          variants={staggerItem}
        >
          از طراحی وب‌سایت‌های مدرن گرفته تا هویت‌های بصری نئونی و تجربه‌های کاربری منحصربه‌فرد، ما به دنبال تعریف مجدد استانداردهای دیجیتال هستیم. هر پروژه برای ما فرصتی برای نوآوری و خلق چیزی کاملاً جدید است.
        </motion.p>
      </div>
    </motion.section>
  )
}

function CoreValuesSection() {
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
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">ارزش‌های اصلی</p>
        <h2 className="text-4xl font-semibold text-white">ماموریت، چشم‌انداز و ارزش‌ها</h2>
      </div>
      
      <motion.div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3" variants={staggerContainer}>
        {coreValues.map((value, index) => {
          const Icon = value.icon
          return (
            <motion.div
              key={value.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,224,255,0.08)] backdrop-blur-xl p-8 text-right"
              dir="rtl"
            >
              <div className="absolute inset-0 rounded-[32px] border border-cyber-blue/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.div
                className="absolute inset-0 bg-cyber-blue/20 opacity-0 blur-3xl transition duration-300 group-hover:opacity-60"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.7 }}
              />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-end">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-cyber-blue/20 text-cyber-blue">
                    <span className="absolute inset-0 rounded-2xl border border-cyber-blue/40 blur-[2px]" aria-hidden />
                    <Icon className="relative h-8 w-8" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </div>
              </div>
              
              <motion.span
                className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyber-blue/70 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                aria-hidden
              />
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}

function TeamSection() {
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
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">تیم ما</p>
        <h2 className="text-4xl font-semibold text-white">بنیان‌گذاران و تیم اصلی</h2>
        <p className="text-white/70">متخصصانی که آینده دیجیتال را می‌سازند</p>
      </div>
      
      <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer}>
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            variants={staggerItem}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,224,255,0.08)] backdrop-blur-xl"
            dir="rtl"
          >
            <div className="absolute inset-0 rounded-[32px] border border-cyber-blue/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <motion.div
              className="absolute inset-0 bg-cyber-blue/20 opacity-0 blur-3xl transition duration-300 group-hover:opacity-60"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.7 }}
            />
            
            {/* Team Member Image */}
            <div className="relative h-48 overflow-hidden">
              <div
                className="h-full w-full bg-gradient-to-br from-cyber-blue/20 to-fuchsia-600/20"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </div>
            
            {/* Team Member Info */}
            <div className="relative z-10 p-6 text-right space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                <p className="text-cyber-blue font-medium">{member.role}</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">{member.description}</p>
              
              {/* Social Links */}
              <div className="flex justify-end gap-3 pt-4">
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/60 hover:text-cyber-blue transition-colors"
                  whileHover={{ scale: 1.1, borderColor: '#00E5FF' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4" />
                </motion.div>
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/60 hover:text-cyber-blue transition-colors"
                  whileHover={{ scale: 1.1, borderColor: '#00E5FF' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-4 w-4" />
                </motion.div>
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/60 hover:text-cyber-blue transition-colors"
                  whileHover={{ scale: 1.1, borderColor: '#00E5FF' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="h-4 w-4" />
                </motion.div>
              </div>
            </div>
            
            <motion.span
              className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyber-blue/70 to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
              aria-hidden
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

function CTASection() {
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
            <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">آماده همکاری؟</p>
            <h2 className="text-4xl font-semibold text-white">بیایید با هم چیزی خلق کنیم</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              پروژه بعدی شما منتظر است. بیایید با هم ایده‌هایتان را به تجربه‌های نئونی و فراموش‌نشدنی تبدیل کنیم.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/#contact">
              <Button className="gap-2 text-base">
                شروع همکاری
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/#scenes">
              <Button variant="outline" className="gap-2 text-base text-white">
                مشاهده نمونه‌کارها
                <Rocket className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
