import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Play, Heart, Share2, Volume2, VolumeX } from 'lucide-react'

// Reels data with Persian content
const reels = [
  {
    id: 1,
    title: 'پلتفرم تجارت الکترونیک',
    thumbnail: '/samples/1.jpg',
    video: '/samples/5.mp4',
    description: 'طراحی نئونی مدرن برای تجربه‌ی خرید آنلاین',
    likes: '2.3K',
    shares: '156',
    duration: '0:30'
  },
  {
    id: 2,
    title: 'داشبورد تحلیلی هوشمند',
    thumbnail: '/samples/2.jpg',
    video: '/samples/5.mp4',
    description: 'ویزوالایزیشن داده‌ها با رابط کاربری سینمایی',
    likes: '1.8K',
    shares: '89',
    duration: '0:45'
  },
  {
    id: 3,
    title: 'موزیک ویدیو سایبری',
    thumbnail: '/samples/3.jpg',
    video: '/samples/5.mp4',
    description: 'جلوه‌های ویژه نئونی و انیمیشن سه‌بعدی',
    likes: '3.1K',
    shares: '234',
    duration: '1:00'
  },
  {
    id: 4,
    title: 'اپلیکیشن موبایل مدرن',
    thumbnail: '/samples/1.jpg',
    video: '/samples/5.mp4',
    description: 'رابط کاربری روان و انیمیشن‌های جذاب',
    likes: '945',
    shares: '67',
    duration: '0:25'
  },
  {
    id: 5,
    title: 'وب‌سایت شرکتی حرفه‌ای',
    thumbnail: '/samples/2.jpg',
    video: '/samples/5.mp4',
    description: 'طراحی مینیمال با جزئیات نئونی',
    likes: '1.2K',
    shares: '102',
    duration: '0:35'
  },
  {
    id: 6,
    title: 'رابط کاربری بازی دیجیتال',
    thumbnail: '/samples/3.jpg',
    video: '/samples/5.mp4',
    description: 'تجربه‌ی گیمینگ با گرافیک سایبری',
    likes: '4.5K',
    shares: '512',
    duration: '0:50'
  }
]

export default function ReelsShowcase() {
  const containerRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)
  const scrollY = useScroll()
  
  // Safe window width calculation
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Safe scroll transformations with null checks
  const scrollYProgress = useScroll().scrollYProgress
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3])

  return (
    <section 
      dir="rtl" 
      className="relative min-h-[100vh] py-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        
        {/* Animated Neon Background */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(79, 139, 253, 0.3), transparent 70%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 0, 255, 0.2), transparent 70%)',
            filter: 'blur(50px)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 px-4 sm:px-6 lg:px-10"
        style={{ y, opacity }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{
              textShadow: `
                0 0 20px rgba(79, 139, 253, 0.8),
                0 0 40px rgba(79, 139, 253, 0.6),
                0 0 60px rgba(79, 139, 253, 0.4),
                0 0 80px rgba(79, 139, 253, 0.2)
              `,
              filter: 'brightness(1.1)'
            }}>
              ریلزهای نئونی
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto">
              ویدیوهای کوتاه از پروژه‌ها با جلوه‌های ویژه نئونی و انیمیشن‌های سینمایی
            </p>
          </motion.div>

          {/* Reels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Reel Card */}
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10">
                  {/* Thumbnail/Video Background */}
                  <div className="absolute inset-0">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      <span className="text-white text-sm font-medium">{reel.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {reel.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {reel.description}
                    </p>
                    
                    {/* Engagement Stats */}
                    <div className="flex items-center gap-6 text-white/60 text-sm">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 fill-white" />
                        <span>{reel.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        <span>{reel.shares}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 bg-gradient-to-t from-cyber-blue/20 to-transparent pointer-events-none"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyber-blue/20 to-purple-500/20 border border-cyber-blue/30 backdrop-blur-md text-white font-medium hover:from-cyber-blue/30 hover:to-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              مشاهده ریلزهای بیشتر
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
