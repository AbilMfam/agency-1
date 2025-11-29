import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Camera,
  Video,
  Clapperboard,
  Megaphone,
  Share2,
  Palette,
  Globe,
  BarChart3,
  CameraIcon,
  PenTool,
  Lightbulb,
  FileText,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Play,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const services = [
  { title: 'فیلمبرداری حرفه‌ای', description: 'تولید محتوای ویدیویی با تجهیزات سینمایی و تیم پاسداران.', icon: Camera },
  { title: 'تدوین ویدیو', description: 'ادیت، اصلاح رنگ و میکس صدا برای خروجی نهایی چندفرمت.', icon: Clapperboard },
  { title: 'موشن گرافیک', description: 'انیمیشن تایپوگرافی، آیکون و گرافیک برای توضیح سریع خدمات.', icon: Video },
  { title: 'مدیریت سوشال مدیا', description: 'استراتژی، تقویم و اجرای شبکه‌های اجتماعی برندهای شمال تهران.', icon: Share2 },
  { title: 'تولید محتوا', description: 'سناریو، کپشن و محتوای چندرسانه‌ای ویژه مخاطب محلی.', icon: FileText },
  { title: 'برندینگ', description: 'طراحی هویت، لحن و دستورالعمل برند با روحیه نئونی.', icon: Palette },
  { title: 'طراحی گرافیک', description: 'پوستر، بسته‌بندی و کیت بصری برای کمپین‌های فصلی.', icon: PenTool },
  { title: 'طراحی سایت', description: 'طراحی سایت و لندینگ پیج با تجربه تعاملی.', icon: Globe },
  { title: 'سئو و بهینه‌سازی', description: 'تحلیل کلیدواژه و بهبود رتبه برای بازارهای محلی.', icon: BarChart3 },
  { title: 'عکاسی', description: 'شات‌های پرتره، محصول و فضایی با نورپردازی اختصاصی.', icon: CameraIcon },
  { title: 'بلاگری و پرسونال برندینگ', description: 'تدوین لحن و حضور آنلاین برای افراد تاثیرگذار.', icon: Lightbulb },
]

const portfolioHighlights = [
  { title: 'Cypher — Immersive Fashion Drop', year: 2024, tag: 'Interactive Film', gradient: 'from-[#4f8bfd] via-transparent to-transparent' },
  { title: 'PulseLAB — AI Studio Suite', year: 2025, tag: 'Product Launch', gradient: 'from-[#00b7ff] via-transparent to-transparent' },
  { title: 'Noir District — Experiential Space', year: 2023, tag: 'Installation', gradient: 'from-[#7c9bff] via-transparent to-transparent' },
  { title: 'Orbit City — Smart TVC', year: 2024, tag: 'Broadcast', gradient: 'from-[#4f8bfd] via-[#00b7ff] to-transparent' },
]

const features = [
  { title: 'سرعت تحویل', description: 'اسپرینت‌های ۴۸ تا ۷۲ ساعته با هماهنگی کامل تیم.', icon: Zap },
  { title: 'خلاقیت', description: 'کیت‌های ایده‌پردازی و آرت‌دایرکشن نئونی.', icon: Sparkles },
  { title: 'رشد ارگانیک', description: 'تحلیل دیتا، تولید محتوا و بهینه‌سازی دائمی.', icon: BarChart3 },
  { title: 'تجربه برندهای بزرگ', description: 'همراه برندهای پاسداران تا بین‌المللی.', icon: ShieldCheck },
]

const caseStudies = [
  { title: 'لانچ نئونی Andrargu', industry: 'Beauty Tech', result: '3.6x CTR', description: 'کمپین چندرسانه‌ای برای مخاطب آوانگارد تهران.', cta: 'مشاهده پروژه' },
  { title: 'کمپین محلی Qeytarieh', industry: 'Hospitality', result: '+58% Leads', description: 'تجربه تعاملی با نقشه حرارتی و ویدیو تعاملی.', cta: 'مشاهده پروژه' },
  { title: 'استودیو Orbit Frame', industry: 'Media', result: '4K Social Clips', description: 'پکیج ویدئویی شش‌قسمتی با روایت داستانی.', cta: 'مشاهده پروژه' },
]

const testimonials = [
  { name: 'Nika Rahimi', role: 'CMO, Flux Wear', comment: 'تیم آژانس تنها گروهی بود که توانست تجربه‌ای کاملاً نئونی و عملکردی خلق کند. هر تحویل با کیفیت استودیو جهانی است.' },
  { name: 'Daniel Karimi', role: 'Founder, Orbit Cafe', comment: 'در کمتر از دو هفته یک لانچ کامل دریافت کردیم؛ از فیلمبرداری تا استراتژی سوشال. نتایج فوق‌العاده بود.' },
  { name: 'Tara Soltani', role: 'Head of Brand, Pasdaran Hub', comment: 'تعهد، خلاقیت و کنترل کیفیت‌شان مثال‌زدنی است. روایت برند ما را دوباره تعریف کردند.' },
  { name: 'Amir Rezaee', role: 'Product Lead, Fereshteh Labs', comment: 'موشن‌ها و سناریونویسی مثل یک استودیو بین‌المللی است. همکاری مداوم ادامه دارد.' },
]

const pricing = [
  {
    title: 'Starter',
    price: '45M تومان',
    description: 'پکیج سه‌هفته‌ای برای برندهای نوپا.',
    features: ['۲ سناریو', 'ویدئوی ۶۰ ثانیه', '۱۰ اسلاید سوشال', 'تحویل Express'],
  },
  {
    title: 'Growth',
    price: '95M تومان',
    description: 'محبوب‌ترین گزینه برای کمپین فصلی.',
    featured: true,
    features: ['۳ ویدئو HQ', 'پوشش عکاسی', 'استراتژی محتوا', 'داشبورد KPI'],
  },
  {
    title: 'Enterprise',
    price: 'تماس بگیرید',
    description: 'راهکار اختصاصی برای برندهای گسترده.',
    features: ['کانسپت چندمرحله‌ای', 'پشتیبانی مستمر', 'تولید چند زبانه', 'آنالیتیکس سفارشی'],
  },
]

const faqItems = [
  ['چقدر سریع می‌توانیم شروع کنیم؟', 'با اسپرینت شناخت ۴۸ ساعته، فاز تولید ظرف ۵ تا ۷ روز آغاز می‌شود.'],
  ['آیا فقط در تهران کار می‌کنید؟', 'تیم ما در پاسداران مستقر است اما پروژه‌های بین‌المللی و ریموت نیز می‌پذیریم.'],
  ['چگونه کیفیت را تضمین می‌کنید؟', 'هر فاز با چک‌لیست QC، بازخورد زنده و نسخه آزمایشی همراه است.'],
  ['آیا استراتژی مارکتینگ هم ارائه می‌دهید؟', 'بله، از جایگاه‌سازی تا اجرای رسانه‌ای را پوشش می‌دهیم.'],
  ['فرایند پرداخت چگونه است؟', '۳۰٪ در شروع، 40٪ در میانه و ۳۰٪ پس از تحویل نهایی.'],
  ['آیا می‌توانیم فقط یک خدمت انتخاب کنیم؟', 'تمام خدمات به صورت ماژولار ارائه می‌شوند و می‌توانید فقط یک سرویس رزرو کنید.'],
]

const footerLinks = {
  sitemap: ['Home', 'Services', 'Portfolio', 'About', 'Contact'],
  socials: [
    { label: 'Instagram', icon: Instagram, href: '#' },
    { label: 'LinkedIn', icon: Linkedin, href: '#' },
    { label: 'Twitter', icon: Twitter, href: '#' },
    { label: 'YouTube', icon: Youtube, href: '#' },
  ],
  locales: ['پاسداران', 'فرمانیه', 'قیطریه', 'دیباجی', 'اندرزگو'],
}

export default function Home() {
  return (
    <main className="space-y-24 pb-24">
      <NeonNavbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <FeaturesSection />
      <ShowcaseSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  )
}

function NeonNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-6 z-30 mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5/10 bg-white/5 backdrop-blur-2xl px-6 py-3 shadow-neon"
    >
      <div className="flex items-center gap-3 text-white">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyber-blue/20">
          <Sparkles className="h-5 w-5 text-cyber-blue" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">agency</p>
          <p className="text-lg font-semibold">Neon Forge</p>
        </div>
      </div>
      <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-white">
            {item}
          </a>
        ))}
      </div>
      <Button size="sm" className="gap-2">
        Get in Touch
        <ArrowUpRight className="h-4 w-4" />
      </Button>
    </motion.nav>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-black/50 p-10 py-24 text-white shadow-neon">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,139,253,0.25),_transparent_60%)]" aria-hidden />
      <div className="relative z-10 grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.5em] text-white/70">
            Creatives
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            آژانس تولید محتوا و ویدیو مارکتینگ در تهران
          </h1>
          <p className="text-lg text-white/80">
            ساخت محتوای حرفه‌ای برای کسب‌وکارهای پاسداران، فرمانیه، قیطریه، دیباجی و اندرزگو.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="text-base">مشاهده نمونه‌کار</Button>
            <Button variant="outline" className="text-base text-white">
              شروع همکاری
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['120+', 'پروژه سینمایی'],
              ['4.7x', 'میانگین ROI'],
              ['48h', 'راه‌اندازی کمپین'],
            ].map(([value, label]) => (
              <div key={label} className="glass-card rounded-2xl px-4 py-6 text-center">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <motion.div
            className="glass-card relative h-full rounded-[32px] border border-white/10 p-8"
            animate={{ boxShadow: ['0 0 60px rgba(79,139,253,0.4)', '0 0 80px rgba(79,139,253,0.6)', '0 0 60px rgba(79,139,253,0.4)'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="mb-6 flex items-center justify-between text-sm text-white/60">
              <span>Realtime preview</span>
              <span>01/04</span>
            </div>
            <motion.div initial={{ opacity: 0.6, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4 }} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black/60">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/40 via-transparent to-transparent" />
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundImage: 'linear-gradient(120deg, rgba(79,139,253,0.35), transparent 40%)' }}
              />
              <motion.svg
                viewBox="0 0 400 240"
                className="h-full w-full"
                initial={{ pathLength: 0, strokeDashoffset: 400 }}
                animate={{ pathLength: 1, strokeDashoffset: 0 }}
                transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
              >
                <motion.path
                  d="M10 180 Q120 80 200 140 T390 80"
                  fill="none"
                  stroke="rgba(79,139,253,0.8)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="12 14"
                />
              </motion.svg>
            </motion.div>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <div className="flex items-center justify-between">
                <span>Adaptive neon mesh</span>
                <span className="text-cyber-blue">Live</span>
              </div>
              <p className="text-white/60">از پارالاکس سه‌بعدی تا میکرو اینتراکشن، همه‌چیز realtime است.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl space-y-10 px-6">
      <div className="text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Services</p>
        <h2 className="text-4xl font-semibold text-white">ماتریس خدمات نئونی</h2>
        <p className="text-white/70">۱۲ خدمت برای استارتاپ‌ها، برندهای لوکس و تیم‌های خلاق تهران.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ title, description, icon: Icon }) => (
          <motion.div key={title} whileHover={{ scale: 1.02 }} className="glass-card flex flex-col gap-4 rounded-3xl border border-white/10 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyber-blue/15 text-cyber-blue">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl space-y-10 px-6">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Our Works</p>
        <h2 className="text-4xl font-semibold text-white">Portfolio Highlights</h2>
        <p className="text-white/70">برخی از پروژه‌هایی که برای برندهای کافه، زیبایی، فروشگاهی و خودرویی انجام داده‌ایم.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {portfolioHighlights.map((item) => (
          <ParallaxCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}

function ParallaxCard({ item }) {
  const cardRef = useRef(null)

  const handleMove = (event) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    const rotateX = (-y / rect.height) * 10
    const rotateY = (x / rect.width) * 10
    card.style.setProperty('--tiltX', `${rotateX}deg`)
    card.style.setProperty('--tiltY', `${rotateY}deg`)
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--tiltX', '0deg')
    card.style.setProperty('--tiltY', '0deg')
  }

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="parallax-card glass-card relative overflow-hidden rounded-[32px] border border-white/10 p-8"
      style={{ transform: 'perspective(1200px) rotateX(var(--tiltX, 0deg)) rotateY(var(--tiltY, 0deg))', transition: 'transform 0.25s ease-out' }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60`} aria-hidden />
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">{item.tag}</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
        </div>
        <div className="flex items-center justify-between text-white/70">
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs">{item.year}</span>
          <Button variant="ghost" className="gap-2 text-white">
            جزئیات بیشتر <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturesSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl space-y-10 px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Advantages</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">چرا ما؟</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map(({ title, description, icon: Icon }) => (
          <div key={title} className="glass-card flex items-start gap-4 rounded-[28px] border border-white/10 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Icon className="h-6 w-6 text-cyber-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ShowcaseSection() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-white/5 px-6 py-16 shadow-neon">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Showcase</p>
          <h2 className="text-4xl font-semibold text-white">سینمای اختصاصی برند شما</h2>
          <p className="text-white/70">
            از برداشت هوایی تا صحنه‌های استودیو، یک تجربه کامل با نورپردازی نئون و کنترل زنده لنز.
          </p>
          <Button className="gap-2 text-base">
            <Play className="h-4 w-4" /> مشاهده پشت صحنه
          </Button>
        </div>
        <motion.div whileHover={{ scale: 1.01 }} className="relative overflow-hidden rounded-[28px] border border-white/10">
          <div className="aspect-video bg-[radial-gradient(circle_at_center,_rgba(79,139,253,0.4),_transparent_60%)]">
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">
                <Play className="h-8 w-8 text-white" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  return (
    <section id="cases" className="mx-auto max-w-6xl space-y-10 px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Case Studies</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">روایت پروژه‌ها</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study) => (
          <div key={study.title} className="glass-card flex h-full flex-col rounded-[28px] border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{study.industry}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{study.title}</h3>
            <p className="mt-2 text-white/70">{study.description}</p>
            <div className="mt-auto flex items-center justify-between pt-6">
              <span className="text-cyber-blue">{study.result}</span>
              <Button variant="ghost" className="text-white">
                {study.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl space-y-10 px-6">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Testimonials</p>
        <h2 className="text-4xl font-semibold text-white">نظر مشتریان</h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{ delay: 5500 }}
        pagination={{ clickable: true }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1240: { slidesPerView: 3 } }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="glass-card h-full rounded-3xl border border-white/10 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyber-blue/20 text-lg font-semibold text-white">
                  {item.name[0]}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/60">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">{item.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl space-y-10 px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">Pricing</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">پکیج‌های همکاری</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <div
            key={plan.title}
            className={`glass-card flex h-full flex-col rounded-[28px] border ${plan.featured ? 'border-cyber-blue/60 bg-cyber-blue/10' : 'border-white/10'} p-6`}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">{plan.title}</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">{plan.price}</h3>
            <p className="mt-2 text-white/70">{plan.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyber-blue" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8">رزرو</Button>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl space-y-8 px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-cyber-blue">FAQ</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">سوالات پرتکرار</h2>
      </div>
      <Accordion type="single" collapsible>
        {faqItems.map(([question, answer], index) => (
          <AccordionItem key={question} value={`faq-${index}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-gradient-to-br from-cyber-blue/30 via-transparent to-transparent px-10 py-16 text-center text-white shadow-neon">
      <p className="text-sm uppercase tracking-[0.4em] text-white/80">Final Call</p>
      <h2 className="mt-4 text-4xl font-semibold">هر پروژه برای ما یک فرصت منحصر‌به‌فرد است.</h2>
      <p className="mt-4 text-white/80">اگر به دنبال تیمی هستید که هم خلاق باشد و هم نتیجه‌گرا، جلسه رزرو کنید.</p>
      <Button className="mt-8 gap-2 text-base">
        رزرو جلسه
        <ArrowUpRight className="h-5 w-5" />
      </Button>
    </section>
  )
}

function FooterSection() {
  return (
    <footer className="mx-auto max-w-6xl space-y-8 px-6 py-12">
      <div className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyber-blue/20 text-white">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Neon Forge</p>
            <p className="text-2xl font-semibold text-white">Premium Agency</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-white/70">
          {footerLinks.socials.map(({ label, icon: Icon, href }) => (
            <a key={label} href={href} className="flex items-center gap-2 text-sm hover:text-white">
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold text-white">Sitemap</h4>
          <ul className="mt-3 space-y-2 text-white/70">
            {footerLinks.sitemap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Local SEO</h4>
          <p className="mt-3 text-white/70">
            دفتر ما در پاسداران تهران است و به کسب‌وکارهای فرمانیه، قیطریه، دیباجی، اندرزگو و محدوده شمال تهران خدمات ارائه می‌دهیم.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <p className="mt-3 text-white/70">hello@neonforge.agency<br />+98 21 000 000</p>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 text-sm text-white/50">© {new Date().getFullYear()} Neon Forge — All rights reserved.</div>
    </footer>
  )
}
