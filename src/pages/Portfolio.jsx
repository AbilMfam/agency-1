import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Sparkles,
  ArrowUpRight,
  Code2,
  Video,
  Box,
  Layers,
  Star,
  Hexagon,
  Triangle,
  Circle,
  Diamond,
  Zap,
  Grid3x3,
  Eye,
  Play,
  Palette
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { NeonNavbar } from '../components/Neon/NeonNavbar'
import Footer from '../components/sections/Footer'

const sectionFade = {
  hidden: { opacity: 0, y: 60, filter: 'blur(30px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 1.5 } },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 40, filter: 'blur(20px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 1.2 } },
}

const viewportConfig = { once: true, amount: 0.15 }

const portfolioSections = [
  {
    id: 'web-design',
    title: 'طراحی سایت',
    subtitle: 'وب‌سایت‌های نئونی و آینده‌نگر',
    icon: Code2,
    bgColor: '#071021',
    items: [
      { title: 'پلتفرم تجارت الکترونیک', image: '/samples/1.jpg', description: 'رابط کاربری نئونی با انیمیشن‌های پیشرفته' },
      { title: 'داشبورد تحلیلی', image: '/samples/2.jpg', description: 'ویزوالایزیشن داده‌های بی‌نهایت' },
      { title: 'اپلیکیشن موبایل', image: '/samples/3.jpg', description: 'تجربه کاربری سینماتیک' },
      { title: 'سایت شرکتی', image: '/samples/4.jpg', description: 'هویت بصری نئونی منحصربه‌فرد' },
      { title: 'پرتال آموزشی', image: '/samples/1.jpg', description: 'محیط یادگیری تعاملی' },
      { title: 'فروشگاه آنلاین', image: '/samples/2.jpg', description: 'تجربه خرید غوطه‌ور' },
    ],
  },
  {
    id: 'video-editing',
    title: 'ادیت ویدئو',
    subtitle: 'جلوه‌های بصری سینمایی و نئونی',
    icon: Video,
    bgColor: '#08152A',
    items: [
      { title: 'تیتراژ فیلم', image: '/samples/2.jpg', description: 'انیمیشن سه‌بعدی نئونی' },
      { title: 'موزیک ویدیو', image: '/samples/3.jpg', description: 'افکت‌های ویژه سایبری' },
      { title: 'تبلیغ تجاری', image: '/samples/4.jpg', description: 'گرافیک حرکتی پیشرفته' },
      { title: 'مستند دیجیتال', image: '/samples/1.jpg', description: 'روایت بصری آینده' },
      { title: 'معرفی محصول', image: '/samples/2.jpg', description: 'انیمیشن محصول نئونی' },
      { title: 'آموزش ویدیویی', image: '/samples/3.jpg', description: 'محتوای آموزشی غنی' },
    ],
  },
  {
    id: 'animation',
    title: 'انیمیشن',
    subtitle: 'جهان‌های پویا و خیال‌انگیز',
    icon: Box,
    bgColor: '#061119',
    items: [
      { title: 'شخصیت سه‌بعدی', image: '/samples/3.jpg', description: 'مدلینگ و ریگینگ حرفه‌ای' },
      { title: 'انیمیشن لوگو', image: '/samples/4.jpg', description: 'هویت برند متحرک' },
      { title: 'موشن گرافیک', image: '/samples/1.jpg', description: 'طراحی حرکتی نئونی' },
      { title: 'انیمیشن معماری', image: '/samples/2.jpg', description: 'نمایش سه‌بعدی فضا' },
      { title: 'جلوهای ویژه', image: '/samples/3.jpg', description: 'VFX سینمایی' },
      { title: 'انیمیشن دو بعدی', image: '/samples/4.jpg', description: 'کارتون و ایلاستریشن' },
    ],
  },
  {
    id: '3d-design',
    title: 'طراحی سه‌بعدی',
    subtitle: 'مدل‌های دیجیتال و واقعیت مجازی',
    icon: Layers,
    bgColor: '#0C1B33',
    items: [
      { title: 'مدل محصول', image: '/samples/4.jpg', description: 'رندرینگ فوتورئالیستیک' },
      { title: 'محیط سه‌بعدی', image: '/samples/1.jpg', description: 'صحنه‌های سینمایی' },
      { title: 'طراحی صنعتی', image: '/samples/2.jpg', description: 'پروتوتایپ دیجیتال' },
      { title: 'واقعیت مجازی', image: '/samples/3.jpg', description: 'تجربه VR غوطه‌ور' },
      { title: 'مجسمه دیجیتال', image: '/samples/4.jpg', description: 'آرت سه‌بعدی دیجیتال' },
      { title: 'معماری داخلی', image: '/samples/1.jpg', description: 'طراحی فضا نئونی' },
    ],
  },
]

export default function Portfolio() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Exact Home Page Background Implementation */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 opacity-55 mix-blend-screen">
          <div className="grid-overlay neon-grid w-full h-full" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 30% 10%, rgba(242, 60, 255, 0.14), transparent 58%), radial-gradient(circle at 78% 32%, rgba(12, 27, 51, 0.9), transparent 65%)',
            opacity: 0.58,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'conic-gradient(from 90deg at 30% 30%, rgba(7, 16, 33, 0.65), transparent 65%)',
            opacity: 0.48,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 20% 80%, rgba(7,16,33,0.55), transparent 55%)' }}
        />
        <motion.div
          className="blur-blob top-0 -left-10"
          style={{ background: 'rgba(0, 120, 255, 0.12)' }}
          animate={{ x: [0, 120, -40], y: [0, -80, 20], scale: [0.9, 1.2, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blur-blob bottom-10 -right-6"
          style={{ background: 'rgba(242, 60, 255, 0.1)' }}
          animate={{ x: [0, -90, 30], y: [0, 50, -20], scale: [1, 1.05, 0.95] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full blur-[160px]"
          style={{ background: 'rgba(24, 240, 200, 0.065)' }}
          animate={{ opacity: [0.2, 0.6, 0.3], scale: [0.8, 1.1, 0.9] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/5 top-20 h-[420px] w-[420px] rounded-full blur-[180px]"
          style={{ background: 'rgba(155, 92, 255, 0.065)' }}
          animate={{ opacity: [0.15, 0.55, 0.25], scale: [0.7, 1.15, 0.85] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="radial-highlight" style={{ opacity: 0.42 }} />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/7 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-2 lg:space-y-4">
          <NeonNavbar />
          <HeroSection />
          {portfolioSections.map((section, index) => (
            <PortfolioSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] py-40 flex items-center justify-center overflow-visible">
      {/* Animated Neon Circle Behind Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        {/* Main Neon Circle */}
        <motion.div
          className="absolute w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.25), rgba(255, 0, 255, 0.15), transparent)',
            boxShadow: '0 0 60px rgba(0, 240, 255, 0.4), 0 0 40px rgba(255, 0, 255, 0.3), inset 0 0 30px rgba(0, 240, 255, 0.15)',
            filter: 'blur(20px)',
            border: '2px solid rgba(0, 240, 255, 0.3)'
          }}
          animate={{
            scale: [0.92, 1.08, 0.92],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Inner Glow Circle */}
        <motion.div
          className="absolute w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.35), transparent 70%)',
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
            filter: 'blur(10px)'
          }}
          animate={{
            scale: [1.08, 0.92, 1.08],
            opacity: [0.7, 0.4, 0.7]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        
        {/* Core Bright Center */}
        <motion.div
          className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.5), rgba(255, 0, 255, 0.3), transparent)',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.7)',
            filter: 'blur(4px)'
          }}
          animate={{
            scale: [0.96, 1.04, 0.96],
            opacity: [0.9, 0.6, 0.9]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>
      
      <div className="relative z-10 text-center space-y-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 60, filter: 'blur(30px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="space-y-8"
        >
          <h1 className="text-7xl md:text-9xl font-bold text-white">
            <span className="relative">
              گالری نئونی
              <motion.span
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyber-blue/40 via-fuchsia-600/40 to-cyber-blue/40 blur-3xl"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              />
            </span>
          </h1>
          <motion.p
            className="max-w-4xl mx-auto text-3xl text-white/90 font-light"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            سفر به دنیای پروژه‌های سینمایی و نئونی
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioSection({ section, index }) {
  const Icon = section.icon
  const isEven = index % 2 === 0

  return (
    <motion.section
      className="relative space-y-12 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      variants={sectionFade}
    >
      <div className="text-center space-y-8">
        <motion.div
          className="inline-flex items-center justify-center gap-4 text-cyber-blue"
          variants={staggerItem}
        >
          <Icon className="h-8 w-8" />
          <p className="text-sm uppercase tracking-[0.5em] text-cyber-blue">دسته‌بندی</p>
          <Icon className="h-8 w-8" />
        </motion.div>
        
        <motion.div variants={staggerItem} className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            {section.title}
          </h2>
          
          <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
            {section.subtitle}
          </p>
        </motion.div>
      </div>

      <motion.div 
        className={`grid gap-8 ${isEven ? 'lg:grid-cols-3' : 'lg:grid-cols-2 xl:grid-cols-3'}`}
        variants={staggerContainer}
      >
        {section.items.map((item, itemIndex) => (
          <NeonCinematicCard 
            key={`${section.id}-${itemIndex}`} 
            item={item} 
            index={itemIndex}
            categoryId={section.id}
          />
        ))}
      </motion.div>
    </motion.section>
  )
}

function NeonCinematicCard({ item, index, categoryId }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={staggerItem}
      className="group relative"
      whileHover={{ 
        y: -15,
        scale: 1.03,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.4, ease: 'easeOut' }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_0_100px_rgba(0,224,255,0.15)] backdrop-blur-2xl">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
        
        {/* Neon Stroke Outline */}
        <div className={`absolute inset-0 rounded-[24px] border transition-all duration-500 ${
          categoryId === 'web-design' ? 'border-cyber-blue/40' :
          categoryId === 'video-editing' ? 'border-fuchsia-600/40' :
          categoryId === 'animation' ? 'border-purple-600/40' :
          'border-blue-600/40'
        } ${isHovered ? 'opacity-100' : 'opacity-50'}`} />
        
        <div className="relative h-80 overflow-hidden">
          <div
            className="h-full w-full transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Neon Overlay on Hover */}
            <motion.div
              className="absolute inset-0 opacity-0"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: categoryId === 'web-design' ? 
                  'linear-gradient(to top, rgba(0,224,255,0.4), transparent)' :
                  categoryId === 'video-editing' ? 
                  'linear-gradient(to top, rgba(240,0,255,0.4), transparent)' :
                  categoryId === 'animation' ? 
                  'linear-gradient(to top, rgba(147,51,234,0.4), transparent)' :
                  'linear-gradient(to top, rgba(59,130,246,0.4), transparent)'
              }}
            />
          </div>
          
          {/* Floating Icon */}
          <motion.div
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
            animate={{ 
              y: [0, -10, 0],
              opacity: isHovered ? 1 : 0.7
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.3 }
            }}
          >
            {categoryId === 'web-design' && <Code2 className="h-6 w-6 text-cyber-blue" />}
            {categoryId === 'video-editing' && <Video className="h-6 w-6 text-fuchsia-600" />}
            {categoryId === 'animation' && <Box className="h-6 w-6 text-purple-600" />}
            {categoryId === '3d-design' && <Layers className="h-6 w-6 text-blue-600" />}
          </motion.div>
        </div>
        
        <div className="relative z-10 p-8 text-right space-y-4">
          <motion.div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium backdrop-blur-md ${
              categoryId === 'web-design' ? 'border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue' :
              categoryId === 'video-editing' ? 'border-fuchsia-600/30 bg-fuchsia-600/10 text-fuchsia-600' :
              categoryId === 'animation' ? 'border-purple-600/30 bg-purple-600/10 text-purple-600' :
              'border-blue-600/30 bg-blue-600/10 text-blue-600'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="h-3 w-3" />
            {categoryId === 'web-design' && 'طراحی سایت'}
            {categoryId === 'video-editing' && 'ادیت ویدیو'}
            {categoryId === 'animation' && 'انیمیشن'}
            {categoryId === '3d-design' && 'سه‌بعدی'}
          </motion.div>
          
          <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
          
          <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
        </div>
        
        {/* Advanced Hover Effects */}
        <motion.div
          className="absolute inset-0 rounded-[24px] opacity-0 blur-3xl transition-opacity duration-500"
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          style={{
            background: categoryId === 'web-design' ? 
              'radial-gradient(circle, rgba(0,224,255,0.3), transparent)' :
              categoryId === 'video-editing' ? 
              'radial-gradient(circle, rgba(240,0,255,0.3), transparent)' :
              categoryId === 'animation' ? 
              'radial-gradient(circle, rgba(147,51,234,0.3), transparent)' :
              'radial-gradient(circle, rgba(59,130,246,0.3), transparent)'
          }}
        />
        
        {/* Glowing Edges */}
        <motion.div
          className={`absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500 ${
            categoryId === 'web-design' ? 'shadow-[0_0_40px_rgba(0,224,255,0.6)]' :
            categoryId === 'video-editing' ? 'shadow-[0_0_40px_rgba(240,0,255,0.6)]' :
            categoryId === 'animation' ? 'shadow-[0_0_40px_rgba(147,51,234,0.6)]' :
            'shadow-[0_0_40px_rgba(59,130,246,0.6)]'
          }`}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* Floating Animation */}
        <motion.div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full opacity-0 group-hover:opacity-100"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
          style={{
            background: categoryId === 'web-design' ? 
              'linear-gradient(to right, transparent, rgba(0,224,255,0.8), transparent)' :
              categoryId === 'video-editing' ? 
              'linear-gradient(to right, transparent, rgba(240,0,255,0.8), transparent)' :
              categoryId === 'animation' ? 
              'linear-gradient(to right, transparent, rgba(147,51,234,0.8), transparent)' :
              'linear-gradient(to right, transparent, rgba(59,130,246,0.8), transparent)'
          }}
        />
      </div>
    </motion.div>
  )
}