import { useRef, useEffect } from 'react'

const CinematicHorizontalScroll = () => {
  const scrollRef = useRef(null)
  
  // Simple image array
  const images = [
    '/samples/1.jpg',
    '/samples/2.jpg', 
    '/samples/3.jpg',
    '/samples/4.jpg',
    '/samples/1.jpg',
    '/samples/2.jpg',
    '/samples/3.jpg',
    '/samples/4.jpg'
  ]

  // Duplicate for seamless loop
  const duplicatedImages = [...images, ...images]

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame
    
    const animate = () => {
      scrollPosition -= scrollSpeed
      
      // Reset when we've scrolled through one set of images
      if (Math.abs(scrollPosition) >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollElement.style.transform = `translateX(${scrollPosition}px)`
      requestAnimationFrame(animate)
    }
    
    animate()
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4">
      {/* Title - centered with mobile overflow fix */}
      <div className="w-full py-6">
        <h2 className="text-2xl font-semibold text-white text-center px-4 max-w-full break-words">
          شرکت‌هایی که با ما همکاری داشته‌ایم
        </h2>
      </div>

      {/* Edge fade */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-[#03050c] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-20 z-10 pointer-events-none bg-gradient-to-l from-[#03050c] to-transparent" />

      {/* Scrolling container - right aligned */}
      <div className="relative h-56 flex items-center justify-end">
        <div 
          ref={scrollRef}
          className="flex gap-4"
          style={{ width: 'max-content' }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg transition-transform duration-200 hover:scale-105"
              style={{
                width: '240px',
                height: '144px'
              }}
            >
              <img
                src={src}
                alt={`Company ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CinematicHorizontalScroll
