import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function FloatingChatTrigger() {
  const [showBalloon, setShowBalloon] = useState(false)
  const [hasOpenedChat, setHasOpenedChat] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    phoneNumber: ''
  })
  const [errors, setErrors] = useState({})
  const [showThankYou, setShowThankYou] = useState(false)
  const [balloonIndex, setBalloonIndex] = useState(0)

  useEffect(() => {
    // Show balloon immediately on mount
    setShowBalloon(true)
    const balloonTimer = setTimeout(() => setShowBalloon(false), 5000)

    // Set up interval for pulse notifications and text rotation (always active)
    const pulseInterval = setInterval(() => {
      setShowBalloon(true)
      setTimeout(() => setShowBalloon(false), 5000)
    }, 60000)

    // Set up interval for text rotation (every 60s)
    const textRotationInterval = setInterval(() => {
      setBalloonIndex((prev) => (prev + 1) % 3)
    }, 60000)

    return () => {
      clearTimeout(balloonTimer)
      clearInterval(pulseInterval)
      clearInterval(textRotationInterval)
    }
  }, [])

  const handleClick = () => {
    console.log('Chat button clicked!')
    
    console.log('Opening chat...')
    // Try to mark chat as opened, but don't let storage errors block functionality
    try {
      localStorage.setItem('chatOpened', 'true')
    } catch (error) {
      console.log('Storage not available, continuing anyway')
    }
    setHasOpenedChat(true)
    setShowBalloon(false)
    setIsChatOpen(true)
    setShowThankYou(false) // Reset thank you state
  }

  const handleCloseChat = () => {
    setIsChatOpen(false)
    // Try to mark chat as opened, but don't let storage errors block functionality
    try {
      localStorage.setItem('chatOpened', 'true')
    } catch (error) {
      console.log('Storage not available, continuing anyway')
    }
    setHasOpenedChat(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'نام الزامی است'
    }
    
    if (!formData.brandName.trim()) {
      newErrors.brandName = 'نام برند الزامی است'
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'شماره تماس الزامی است'
    } else if (!/^[\d\s\-+]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'شماره تماس نامعتبر است'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, log data to console
      console.log('Form submitted:', formData)
      console.log('درخواست همکاری:', {
        name: formData.name,
        brandName: formData.brandName,
        phoneNumber: formData.phoneNumber,
        timestamp: new Date().toISOString()
      })
      
      // Show thank you state
      setShowThankYou(true)
      
      // Auto-close after 4.5 seconds
      setTimeout(() => {
        handleCloseChat()
      }, 4500)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <>
      {/* Mobile Background Blur Overlay - Separate Layer */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md md:hidden z-[9995] pointer-events-none"
          />
        )}
      </AnimatePresence>
      
      {/* Chat Widget Container */}
      <div className="fixed bottom-6 left-6 z-[9999] flex items-end gap-3" dir="rtl" style={{ pointerEvents: 'auto' }}>
      {/* Balloon */}
      {showBalloon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="bg-neon-blue/20 backdrop-blur-md border border-neon-blue/50 rounded-lg px-4 py-2 shadow-lg shadow-neon-blue/25"
        >
          <p className="text-white text-sm font-medium">
            {balloonIndex === 0 && "قصد همکاری دارید؟"}
            {balloonIndex === 1 && "پروژه‌ای برای اجرا دارید؟"}
            {balloonIndex === 2 && "می‌خواید برندتون رشد کنه؟"}
          </p>
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-r-8 border-r-neon-blue/50 border-y-4 border-y-transparent"></div>
        </motion.div>
      )}

      {/* Chat Card */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: 'auto' }}
            exit={{ opacity: 0, scale: 0.8, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-72 max-w-[85vw] md:w-80 sm:w-96 bg-gray-900/90 backdrop-blur-xl border border-neon-blue/30 rounded-2xl shadow-2xl shadow-neon-blue/20 overflow-hidden fixed inset-x-0 mx-auto top-1/3 -translate-y-1/2 md:relative md:inset-auto md:left-auto md:top-auto md:-translate-y-0 md:inset-x-auto md:mx-0"
            dir="rtl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue/20 to-cyber-blue/20 px-4 py-3 border-b border-neon-blue/20 flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm">همکاری با ما</h3>
              <button
                onClick={handleCloseChat}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
{showThankYou ? (
  <div className="p-4 text-center">
    <div className="mb-3 text-neon-blue text-2xl">✓</div>
    <p className="text-white font-semibold text-sm">
      درخواست شما ثبت شد
    </p>
    <p className="text-gray-400 text-xs mt-2">
      به‌زودی با شما تماس می‌گیریم
    </p>
  </div>
) : (
  <form onSubmit={handleSubmit} className="p-3 space-y-3 md:p-4 md:space-y-4" dir="rtl">
    <div>
      <label className="block text-gray-300 text-xs mb-1 font-medium text-right">
        نام و نام خانوادگی *
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className={`w-full bg-gray-800/50 border rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none transition-all text-right ${
          errors.name
            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/50'
            : 'border-gray-700 focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50'
        }`}
        placeholder="نام خود را وارد کنید"
      />
      {errors.name && (
        <p className="text-red-400 text-xs mt-1 text-right">
          {errors.name}
        </p>
      )}
    </div>

    <div>
      <label className="block text-gray-300 text-xs mb-1 font-medium text-right">
        نام برند *
      </label>
      <input
        type="text"
        name="brandName"
        value={formData.brandName}
        onChange={handleInputChange}
        className={`w-full bg-gray-800/50 border rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none transition-all text-right ${
          errors.brandName
            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/50'
            : 'border-gray-700 focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50'
        }`}
        placeholder="نام برند را وارد کنید"
      />
      {errors.brandName && (
        <p className="text-red-400 text-xs mt-1 text-right">
          {errors.brandName}
        </p>
      )}
    </div>

    <div>
      <label className="block text-gray-300 text-xs mb-1 font-medium text-right">
        شماره تماس *
      </label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        className={`w-full bg-gray-800/50 border rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none transition-all text-right ${
          errors.phoneNumber
            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/50'
            : 'border-gray-700 focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50'
        }`}
        placeholder="شماره تماس را وارد کنید"
      />
      {errors.phoneNumber && (
        <p className="text-red-400 text-xs mt-1 text-right">
          {errors.phoneNumber}
        </p>
      )}
    </div>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-neon-blue/20 to-cyber-blue/20 border border-neon-blue/50 rounded-lg py-2 text-white font-medium hover:bg-neon-blue/30 transition-all duration-300 shadow-lg shadow-neon-blue/25 hover:shadow-neon-blue/40 active:scale-95"
    >
      درخواست همکاری
    </button>
  </form>
)}

          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.button
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClick}
            className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              hasOpenedChat 
                ? 'bg-gray-800/80 border-gray-600 hover:bg-gray-700/80' 
                : 'bg-neon-blue/20 border-neon-blue hover:bg-neon-blue/30'
            } backdrop-blur-md shadow-lg`}
            style={{ pointerEvents: 'auto' }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 20px rgba(2, 86, 254, 0.5)',
                '0 0 30px rgba(2, 86, 254, 0.8)',
                '0 0 20px rgba(2, 86, 254, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Chat Icon */}
            <svg 
              className={`w-6 h-6 ${hasOpenedChat ? 'text-gray-400' : 'text-neon-blue'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>

            {/* Pulse ring - always active */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-neon-blue"
              animate={{
                scale: [1, 1.3, 1.5],
                opacity: [0.8, 0.4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
    </>
  )
}
