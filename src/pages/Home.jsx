import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Phone,
  Mail,
  Instagram,
  MapPin,
  Users,
  Palette,
  Headphones,
  TrendingUp,
  Zap,
  Target,
  Rocket,
  Menu,
  X,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import { Button } from '../components/ui/button'
import { VisualHero } from '../components/Neon/VisualHero'
import { NeonImage } from '../components/Neon/NeonImage'
import { NeonAboutVisual } from '../components/Neon/NeonAboutVisual'
import { useBackground } from '../layout/NeonLayout'

const visualStacks = [
  { title: 'استیج پالس', tag: 'پروژه XR', metric: '۰۱', accent: 'aurora', src: '/samples/2.jpg' },
  { title: 'فلکس دک', tag: 'تدوین زنده', metric: '۰۲', accent: 'plasma', src: '/samples/1.jpg' },
  { title: 'اوربیت ران‌وی', tag: 'رندر تعاملی', metric: '۰۳', accent: 'pulse', src: '/samples/4.jpg' },
  { title: 'نوآر وُلت', tag: 'استودیو 3D', metric: '۰۴', accent: 'ember', src: '/samples/3.jpg' },
]

const highlightedProjects = [
  {
    title: 'نوآر ویب',
    description: 'UI/UX Design',
    src: '/samples/1.jpg',
  },
  {
    title: 'اسپکترام پلاس',
    description: 'Website Redesign',
    src: '/samples/2.jpg',
  },
  {
    title: 'اوربیت شاپ',
    description: 'E-Commerce Build',
    src: '/samples/3.jpg',
  },
  {
    title: 'هولو گرید',
    description: 'Brand Experience',
    src: '/samples/4.jpg',
  },
]

const workflowSteps = [
  {
    title: 'تحقیق و تحلیل',
    description: 'شناخت دقیق مخاطب، بازار و اهداف پروژه برای تنظیم استراتژی هوشمند.',
    icon: Search,
  },
  {
    title: 'طراحی UI/UX',
    description: 'خلق تجربه‌های بصری و تعاملی نئونی که هم زیبا هستند و هم کاربردی.',
    icon: PenTool,
  },
  {
    title: 'توسعه و اجرا',
    description: 'کدنویسی دقیق با بهره‌گیری از تکنیک‌های روز برای ساخت محصول پایدار.',
    icon: Code2,
  },
  {
    title: 'تست و بهینه‌سازی',
    description: 'ارزیابی مستمر، رفع خطا و بهبود عملکرد برای تضمین تجربه‌ای روان.',
    icon: Gauge,
  },
  {
    title: 'پشتیبانی و توسعه بلندمدت',
    description: 'همراهی دائمی برای رشد برند و افزودن قابلیت‌های تازه.',
    icon: ShieldCheck,
  },
]

const sectionFade = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8 } },
}

function WhyChooseUsSection() {
  const sectionRef = useSectionBackground('#061119')

  return (
    <motion.section
      ref={sectionRef}
      id="why-choose-us"
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">مزایا</p>
        <h2 className="text-4xl font-semibold text-white">چرا ما را انتخاب کنید؟</h2>
        <p className="text-white/70">چهار دلیل اصلی که ما را از دیگران متمایز می‌کند</p>
      </div>
      <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
        {whyChooseUsFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,224,255,0.08)] backdrop-blur-xl p-6"
            >
              <div className="absolute inset-0 rounded-[32px] border border-cyber-blue/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.div
                className="absolute inset-0 bg-cyber-blue/20 opacity-0 blur-3xl transition duration-300 group-hover:opacity-60"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.7 }}
              />
              <div className="relative z-10 flex items-start gap-4">
                <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-cyber-blue/20 text-cyber-blue">
                  <span className="absolute inset-0 rounded-2xl border border-cyber-blue/40 blur-[2px]" aria-hidden />
                  <Icon className="relative h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
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

function HighlightedPortfolioSection() {
  const sectionRef = useSectionBackground('#050C18')

  return (
    <motion.section
      ref={sectionRef}
      id="highlighted-portfolio"
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div dir="rtl" className="flex w-full flex-col items-center justify-center gap-3 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">پروژه‌های ویژه</p>
        <h2 className="text-4xl font-semibold text-white">پرونده‌های برجسته</h2>
        <p className="text-white/70">منتخب پروژه‌هایی که برای برندها درخشش ساختیم.</p>
      </div>
      <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
        {highlightedProjects.map((project) => (
          <motion.div
            key={project.title}
            variants={staggerItem}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,224,255,0.08)]"
          >
            <div
              className="relative h-64 w-full"
              style={{ backgroundImage: `url(${project.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">{project.description}</p>
              <h3 className="text-3xl font-semibold">{project.title}</h3>
            </div>
            <div className="absolute inset-1 rounded-[28px] border border-white/10 opacity-0 ring-2 ring-cyber-blue/40 transition duration-300 group-hover:opacity-100" />
            <motion.div
              className="absolute inset-0 bg-cyber-blue/20 opacity-0 blur-3xl transition duration-300 group-hover:opacity-60"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.7 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

function WorkflowSection() {
  const sectionRef = useSectionBackground('#08152A')

  return (
    <motion.section
      ref={sectionRef}
      id="workflow"
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">فرآیند</p>
        <h2 className="text-4xl font-semibold text-white">مسیر همکاری ما</h2>
        <p className="text-white/70">پنج گام نئونی برای خلق تجربه‌هایی که می‌درخشند.</p>
      </div>
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-5"
        variants={staggerContainer}
      >
        {workflowSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="relative flex h-full flex-col items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-right text-white shadow-[0_0_35px_rgba(0,255,234,0.08)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span className="text-xs text-white/50">۰{index + 1}</span>
                <span className="h-px flex-1 bg-white/20" aria-hidden />
              </div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-cyber-blue/20 text-cyber-blue">
                <span className="absolute inset-0 rounded-2xl border border-cyber-blue/40 blur-[2px]" aria-hidden />
                <Icon className="relative h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
              <motion.span
                className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyber-blue/70 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              />
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
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

const services = [
  { title: 'طراحی وب‌سایت', description: 'ساخت تجربه‌های دیجیتال سریع، مدرن و نئونی', src: '/samples/1.jpg' },
  {
    title: 'طراحی رابط و تجربه کاربری (UI/UX)',
    description: 'خلق فضاهای مینیمال، تعاملی و چشم‌نواز',
    src: '/samples/2.jpg',
  },
  { title: 'موشن گرافیک و ویدئو', description: 'ارائه روایت‌های بصری پویا و آینده‌نگر', src: '/samples/3.jpg' },
  { title: 'برندسازی و هویت بصری', description: 'شکل‌دهی شخصیت بصری قدرتمند برای برند شما', src: '/samples/4.jpg' },
]

const processSteps = [
  { title: 'جلسه ایده‌پردازی', description: 'کشف هدف، مخاطب و DNA پروژه' },
  { title: 'طراحی مفهومی', description: 'خلق جریان کار، رنگ‌ها و حس‌وحال بصری' },
  { title: 'توسعه و اجرا', description: 'پیاده‌سازی دقیق و نئونی با استانداردهای روز' },
  { title: 'تحویل و پشتیبانی', description: 'تضمین بهبود، ارتقا و نگهداری پروژه' },
]

const faqItems = [
  {
    question: 'مدت زمان اجرای پروژه‌ها چقدر است؟',
    answer: 'بسته به نوع پروژه بین دو تا شش هفته زمان لازم است.',
  },
  {
    question: 'آیا خدمات تولید محتوا هم ارائه می‌دهید؟',
    answer: 'بله؛ محتوای بصری، ویدئویی و متنی منطبق بر هویت برند تولید می‌کنیم.',
  },
  {
    question: 'آیا امکان توسعه اختصاصی وجود دارد؟',
    answer: 'کاملاً؛ هر بخش از صفر مطابق نیاز شما ساخته می‌شود.',
  },
]

const whyChooseUsFeatures = [
  {
    title: 'تیم متخصص و باتجربه',
    description: 'متخصصان خلاق با سال‌ها تجربه در طراحی دیجیتال و تکنولوژی‌های نئونی',
    icon: Users,
  },
  {
    title: 'طراحی اختصاصی و خلاقانه',
    description: 'خلق هویت‌های بصری منحصربه‌فرد که برند شما را متمایز می‌کند',
    icon: Palette,
  },
  {
    title: 'پشتیبانی بلندمدت',
    description: 'همراهی مستمر در تمام مراحل رشد و توسعه برند شما',
    icon: Headphones,
  },
  {
    title: 'تمرکز بر سئو و رشد برند',
    description: 'بهینه‌سازی کامل برای موتورهای جستجو و استراتژی‌های رشد پایدار',
    icon: TrendingUp,
  },
]

export default function Home() {
  return (
    <main className="space-y-24 pb-24">
      <NeonNavbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkflowSection />
      <HighlightedPortfolioSection />
      <StacksSection />
      <ProcessSection />
      <FAQSection />
      <AboutSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}

function NeonNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'خدمات', href: '/services' },
    { label: 'نمونه‌کارها', href: '/portfolio' },
    { label: 'درباره‌ما', href: '/about' },
    { label: 'تماس', href: '/contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="sticky top-6 z-40 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-neon backdrop-blur-2xl md:px-6"
      >
        {/* Logo - Left on desktop, centered on mobile */}
        <div className="flex items-center gap-3 text-white md:gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-cyber-blue/30 blur-xl" aria-hidden />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-cyber-blue/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">نئون دیجیتال</p>
            <p className="text-lg font-semibold">استودیو خلاقیت</p>
          </div>
          <div className="md:hidden">
            <p className="text-sm font-semibold">نئون دیجیتال</p>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map(({ label, href }) => (
            <Link key={label} to={href} className="transition-colors hover:text-white">
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button - Hidden on mobile */}
        <Link to="/contact" className="hidden md:block">
          <Button size="sm" className="gap-2">
            درخواست تماس
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Link>

        {/* Mobile Hamburger Menu Button - Visible only on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 hover:border-cyber-blue/30 md:hidden"
          aria-label="Toggle mobile menu"
        >
          <div className="absolute inset-0 rounded-2xl bg-cyber-blue/20 blur-xl opacity-0 transition-opacity duration-300 hover:opacity-100" aria-hidden />
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="relative"
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="relative"
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Full-screen Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="fixed inset-0 z-[60] flex flex-col bg-gradient-to-b from-[#0A1428]/98 to-[#071021]/98 backdrop-blur-2xl md:hidden"
              dir="rtl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-white">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-cyber-blue/30 blur-xl" aria-hidden />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-cyber-blue/20">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">نئون دیجیتال</p>
                    <p className="text-lg font-semibold">استودیو خلاقیت</p>
                  </div>
                </div>
                
                <button
                  onClick={closeMobileMenu}
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10"
                  aria-label="Close mobile menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items - Vertically Centered */}
              <div className="flex-1 flex items-center justify-center px-6 py-8">
                <nav className="w-full max-w-md">
                  <div className="space-y-3">
                    {navItems.map(({ label, href }, index) => (
                      <motion.div
                        key={label}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                      >
                        <Link
                          to={href}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between rounded-2xl border border-transparent px-6 py-5 text-right text-white transition-all duration-300 hover:border-cyber-blue/30 hover:bg-cyber-blue/10"
                        >
                          <span className="text-lg font-medium">{label}</span>
                          <ArrowUpRight className="h-5 w-5 text-cyber-blue opacity-60" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
                    className="mt-12"
                  >
                    <Link to="/contact" onClick={closeMobileMenu}>
                      <Button className="w-full gap-3 text-lg py-5">
                        درخواست تماس
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </motion.div>
                </nav>
              </div>

              {/* Neon Glow Effects */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/4 h-40 w-40 rounded-full bg-cyber-blue/20 blur-3xl" />
                <div className="absolute right-0 bottom-1/4 h-48 w-48 rounded-full bg-neon-pink/15 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-laser-green/10 blur-3xl" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function HeroSection() {
  const sectionRef = useSectionBackground('#0A1428')

  return (
    <section id="home" ref={sectionRef}>
      <VisualHero title="آژانس خلاقیت نئونی" subtitle="طراحی تجربه‌های دیجیتال که می‌درخشند." src="/images/neon-hero-1.png">
        <p className="max-w-2xl text-base text-white/80"
           style={{
             animation: 'fadeInBlur 1s ease-out forwards'
           }}
        >
          ما ایده‌های خام را به صحنه‌های پویا، رابط‌های نئون‌محور و هویت‌های دیجیتال ماندگار تبدیل می‌کنیم.
        </p>
        <style jsx>{`
          @keyframes fadeInBlur {
            from {
              filter: blur(12px);
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              filter: blur(0);
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        <div className="flex flex-row flex-wrap justify-center items-center mx-auto text-center gap-4"
             style={{
               animation: 'fadeInBlur 1.2s ease-out 0.3s forwards',
               opacity: 0
             }}
        >
          <Button className="gap-2 text-base">
            شروع همکاری
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="gap-2 text-base text-white">
            مشاهده نمونه‌کارها
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </VisualHero>
    </section>
  )
}

function ServicesSection() {
  const sectionRef = useSectionBackground('#071021')

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">خدمات</p>
        <h2 className="text-4xl font-semibold text-white">خدمات ما</h2>
      </div>
      <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={staggerItem}
            className="visual-panel visual-panel-flat relative overflow-hidden border border-white/10 p-6 shadow-glow isolate"
            style={{
              backgroundImage: `url(${service.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" aria-hidden />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-white/75">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center">
        <Link to="/services">
          <Button variant="outline" className="gap-2 text-white border-cyber-blue/40 hover:bg-cyber-blue/10">
            مشاهده تمام خدمات
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.section>
  )
}

function StacksSection() {
  const sectionRef = useSectionBackground('#0C1B33')

  return (
    <motion.section
      ref={sectionRef}
      id="scenes"
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div dir="rtl" className="flex flex-col items-center justify-center gap-3 text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">نمونه‌کارها</p>
          <h2 className="text-4xl font-semibold text-white">صحنه‌های نئونی</h2>
        </div>
        <span className="text-sm text-white/70">مرور پروژه‌های شاخص</span>
      </div>
      <motion.div className="grid gap-4 overflow-visible md:grid-cols-2" variants={staggerContainer}>
        {visualStacks.map((stack) => (
          <motion.div key={stack.title} variants={staggerItem}>
            <NeonImage title={stack.tag} accent={stack.accent} src={stack.src}>
              <div className="flex items-center justify-between text-2xl font-semibold">
                <span>{stack.title}</span>
                <span className="text-white/70">{stack.metric}</span>
              </div>
            </NeonImage>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

function ProcessSection() {
  const sectionRef = useSectionBackground('#071021')

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
        <h2 className="text-4xl font-semibold text-white">فرآیند همکاری</h2>
      </div>
      <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
        {processSteps.map((step, index) => (
          <motion.div key={step.title} variants={staggerItem} className="glass-card rounded-[28px] border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <span className="text-sm text-white/60">۰{index + 1}</span>
            </div>
            <p className="mt-3 text-white/75">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useSectionBackground('#08152A')

  return (
    <motion.section
      ref={sectionRef}
      id="faq"
      className="space-y-8"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">سوالات</p>
        <h2 className="text-4xl font-semibold text-white">سوالات متداول</h2>
      </div>
      <div className="space-y-4">
        {faqItems.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.question} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-0">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right text-lg font-semibold text-white"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{faq.question}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 و-5 text-cyber-blue" />
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="px-6"
              >
                {isOpen && <p className="pb-6 text-white/75">{faq.answer}</p>}
              </motion.div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}

function AboutSection() {
  const sectionRef = useSectionBackground('#071021')

  const aboutFeatures = [
    {
      icon: Zap,
      title: 'سرعت و نوآوری',
      description: 'پیشرو در تکنولوژی‌های نئونی و طراحی آینده‌نگر',
    },
    {
      icon: Target,
      title: 'تمرکز بر هدف',
      description: 'استراتژی‌های دقیق برای رشد و موفقیت برند شما',
    },
    {
      icon: Rocket,
      title: 'رشد پایدار',
      description: 'همراهی مستمر برای دستیابی به اهداف بلندمدت',
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-32">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {/* LEFT COLUMN - ANIMATION */}
          <motion.div
            variants={staggerItem}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <NeonAboutVisual />
          </motion.div>

          {/* RIGHT COLUMN - TEXT */}
          <motion.div
            dir="rtl"
            className="flex flex-col justify-center text-right"
            variants={staggerItem}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ direction: 'rtl' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cyber-blue mb-6">
              درباره نئون دیجیتال
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-8">
              ما ایجنسی خلاق نئونی با تمرکز بر تجربه‌های دیجیتال بی‌نظیر. با ترکیب هنر و تکنولوژی، برندهایی می‌سازیم که در ذهن ماندگار می‌شوند.
            </p>

            {/* FEATURE HIGHLIGHTS */}
            <div className="space-y-4">
              {aboutFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyber-blue/20 border border-cyber-blue/30">
                      <Icon className="h-6 w-6 text-cyber-blue" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  const sectionRef = useSectionBackground('#0C1B33')

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      dir="rtl"
      className="relative text-right"
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

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.5fr_minmax(260px,0.8fr)]" dir="rtl" style={{ direction: 'rtl', textAlign: 'right' }}>
          <div className="space-y-10" dir="rtl" style={{ direction: 'rtl', textAlign: 'right' }}>
            <div className="mx-auto max-w-3xl space-y-3 text-right">
              <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">تماس</p>
              <h2 className="text-4xl font-semibold text-white">با تیم نئونی ارتباط بگیرید</h2>
              <p className="text-white/70">
                فرم زیر را پر کنید تا در کمتر از یک روز کاری با شما تماس بگیریم و مسیر ساخت تجربه نئونی را با هم آغاز کنیم.
              </p>
            </div>

            <form className="grid gap-6 md:grid-cols-2" dir="rtl">
              <label className="flex flex-col gap-2 text-right text-sm text-white/70" htmlFor="contact-name">
                نام و نام خانوادگی
                <input
                  id="contact-name"
                  type="text"
                  placeholder="نام کامل شما"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyber-blue/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-right text-sm text-white/70" htmlFor="contact-email">
                ایمیل
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@email.com"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyber-blue/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-right text-sm text-white/70" htmlFor="contact-phone">
                شماره تماس
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyber-blue/60"
                />
              </label>
              <div className="md:col-span-2">
                <label className="flex flex-col gap-2 text-right text-sm text-white/70" htmlFor="contact-message">
                  توضیحات پروژه
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="ایده یا نیازتان را توضیح دهید..."
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyber-blue/60"
                  />
                </label>
              </div>
              <div className="md:col-span-2 flex w-full justify-end">
                <Button className="gap-3 text-base ml-auto">
                  ارسال درخواست
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5/60 p-6 text-right text-white/80 shadow-[0_0_40px_rgba(79,139,253,0.15)] backdrop-blur-2xl" dir="rtl" style={{ direction: 'rtl', textAlign: 'right' }}>
            <div style={{ direction: 'rtl', textAlign: 'right' }}>
              <p className="text-xs uppercase tracking-[0.4em] text-cyber-blue">مسیرهای فوری</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">به ما پیام دهید</h3>
              <p className="mt-2 text-sm text-white/60">پاسخ‌گویی در ساعات کاری ۱۰ تا ۱۹.</p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-row-reverse items-center justify-end gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyber-blue/10 text-cyber-blue">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/60">شماره تماس</p>
                  <p className="text-lg text-white">+98 21 1234 5678</p>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center justify-end gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyber-blue/10 text-cyber-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/60">پست الکترونیک</p>
                  <p className="text-lg text-white">hello@neon.agency</p>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center justify-end gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyber-blue/10 text-cyber-blue">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/60">اینستاگرام</p>
                  <p className="text-lg text-white">@neon.agency</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 rounded-[28px] border border-cyber-blue/30 bg-gradient-to-br from-white/5 via-transparent to-cyber-blue/10 p-4">
              <div
                className="h-40 w-full rounded-2xl border border-cyber-blue/40 bg-[url('/images/neon-ui-blob-2.png')] bg-cover bg-center"
                aria-hidden
              />
              <div className="flex flex-row-reverse items-center justify-end gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyber-blue/15 text-cyber-blue">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/60">موقعیت استودیو</p>
                  <p className="base">تهران، خیابان آینده، پلاک ۲۳</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function FooterSection() {
  return (
    <footer className="space-y-4 text-center text-white/70">
      <p>© 2025 — تمامی حقوق محفوظ است.</p>
      <p>طراحی و توسعه توسط تیم نئونی ما.</p>
    </footer>
  )
}
