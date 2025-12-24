import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '../ui/button'

export function NeonNavbar({ fullWidth = false }) {
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

  // Add/remove body class when menu opens/closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`sticky top-6 z-40 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-neon backdrop-blur-2xl md:px-6 ${fullWidth ? 'w-full' : 'max-w-7xl mx-auto'}`}
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
              className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Full-screen Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="fixed inset-0 z-[80] flex flex-col bg-gradient-to-b from-[#0A1428] to-[#071021] md:hidden"
              dir="rtl"
              style={{ width: '100vw', height: '100vh', top: '0', left: '0', right: '0', bottom: '0' }}
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
