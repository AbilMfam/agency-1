import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const NeonOrbitalScanner = ({ className = "" }) => {
  const [particles, setParticles] = useState([])
  const controls = useAnimation()
  const containerRef = useRef(null)

  // Generate random digital dust particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5
      }))
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  // Start animations on mount
  useEffect(() => {
    controls.start({
      opacity: [0.3, 0.8, 0.3],
      scale: [0.95, 1.05, 0.95]
    })
  }, [controls])

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Rotating Neon Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-cyber-blue/60"
          style={{
            boxShadow: `
              0 0 20px rgba(79, 139, 253, 0.8),
              0 0 40px rgba(79, 139, 253, 0.6),
              0 0 60px rgba(79, 139, 253, 0.4),
              inset 0 0 20px rgba(79, 139, 253, 0.2)
            `
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Middle Ring */}
        <motion.div
          className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-cyber-blue/50"
          style={{
            boxShadow: `
              0 0 15px rgba(79, 139, 253, 0.7),
              0 0 30px rgba(79, 139, 253, 0.5),
              0 0 45px rgba(79, 139, 253, 0.3),
              inset 0 0 15px rgba(79, 139, 253, 0.2)
            `
          }}
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Inner Ring */}
        <motion.div
          className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-cyber-blue/40"
          style={{
            boxShadow: `
              0 0 10px rgba(79, 139, 253, 0.6),
              0 0 20px rgba(79, 139, 253, 0.4),
              0 0 30px rgba(79, 139, 253, 0.2),
              inset 0 0 10px rgba(79, 139, 253, 0.1)
            `
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      {/* Digital Dust Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyber-blue"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(79, 139, 253, 0.8)`
          }}
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`,
            opacity: 0
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + 20}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pulsing Glow Effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={controls}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-72 h-72 md:w-96 md:h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(79, 139, 253, 0.1), transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
      </motion.div>

      {/* Scanline Effect */}
      <motion.div
        className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
        style={{
          boxShadow: '0 0 20px rgba(79, 139, 253, 0.8)',
          filter: 'brightness(1.5)'
        }}
        animate={{
          y: ['-10%', '110%']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
      />

      {/* Additional Glow Layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-56 h-56 md:w-72 md:h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(79, 139, 253, 0.05), transparent 60%)',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}

export default NeonOrbitalScanner
