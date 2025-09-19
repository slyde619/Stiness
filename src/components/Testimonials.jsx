import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const trackRef = useRef(null)

  const testimonials = [
    {
      name: 'Ada',
      service: 'Bridal Glam',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      text: 'Flawless! My makeup lasted all day and photographed beautifully. The team was so professional.'
    },
    {
      name: 'Ini',
      service: 'Wig Install',
      avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop',
      text: 'The melt was seamless and the style lasted over a week. Highly recommend!'
    },
    {
      name: 'Mary',
      service: 'Soft Glam',
      avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=200&auto=format&fit=crop',
      text: 'Natural yet glam—exactly what I asked for. The experience was lovely.'
    },
    {
      name: 'Grace',
      service: 'Editorial Beat',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      text: 'Bold and stunning! Perfect for my photoshoot. The attention to detail was incredible.'
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let currentIndex = 0
    const scrollInterval = setInterval(() => {
      const children = track.children
      if (children.length === 0) return

      currentIndex = (currentIndex + 1) % children.length
      const targetElement = children[currentIndex]
      
      track.scrollTo({
        left: targetElement.offsetLeft - 12,
        behavior: 'smooth'
      })
    }, 3500)

    return () => clearInterval(scrollInterval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="testimonials" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-fraunces text-3xl font-semibold tracking-tight text-slate-900">
            What Clients Say
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Real feedback from beautiful transformations.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative mt-6">
          <motion.div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 hide-scrollbar"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="min-w-[300px] max-w-sm snap-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                {/* Client Info */}
                <div className="flex items-center gap-3 mb-3">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.service}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-slate-700">
                  "{testimonial.text}"
                </p>

                {/* Star Rating */}
                <motion.div 
                  className="flex items-center gap-1 mt-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <svg
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 mb-4">
            Ready to join our happy clients?
          </p>
          <motion.a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC0CB] px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-[#ffc0cb]/60 hover:bg-[#ffb3c0]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Transformation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials