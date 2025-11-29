import { motion } from 'framer-motion'

export function NeonAboutVisual() {
  return (
    <motion.div
      className="relative flex justify-center items-center mx-auto w-full h-80"
      initial={{ opacity: 0, filter: 'blur(12px)', transform: 'scale(0.8)' }}
      animate={{ 
        opacity: 1, 
        filter: 'blur(0)', 
        transform: 'scale(1)',
        y: [-10, 10]
      }}
      transition={{ 
        duration: 1.2, 
        ease: 'easeOut',
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
      }}
    >
      {/* Background glow layers */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-blue/20 via-purple-500/20 to-cyber-blue/20 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      />
      
      {/* Middle blur layer */}
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-br from-neon-pink/15 to-cyber-blue/15 blur-2xl"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
      />
      
      {/* Glass sphere center */}
      <motion.div
        className="relative w-32 h-32 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl"
        animate={{ 
          rotate: [0, -180, 0],
          scale: [1, 1.02, 1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyber-blue/30 to-neon-pink/30 blur-md" />
        
        {/* Core neon dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-blue shadow-lg shadow-cyber-blue/50"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
        
        {/* Orbiting rings */}
        <motion.div
          className="absolute inset-0 rounded-full border border-cyber-blue/30"
          animate={{ 
            rotate: [0, 360],
            opacity: [0.3, 0.8, 0.3] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-neon-pink/20"
          animate={{ 
            rotate: [360, 0],
            opacity: [0.2, 0.6, 0.2] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        />
      </motion.div>
      
      {/* Floating neon particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyber-blue/60 blur-sm"
          style={{
            top: `${20 + (i * 12)}%`,
            left: `${10 + (i * 15)}%`,
          }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2] 
          }}
          transition={{ 
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut' 
          }}
        />
      ))}
    </motion.div>
  )
}
