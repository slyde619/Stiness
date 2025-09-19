import { motion } from 'framer-motion'
import { Sparkles, Calendar, ShoppingBag, Images } from 'lucide-react'

const Hero = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
      alt: "Makeup artistry close-up",
      className: "col-span-2 aspect-[4/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1510414696678-2415ad8474aa?q=80&w=500&auto=format&fit=crop",
      alt: "Glam waves hair",
      className: "aspect-square"
    },
    {
      src: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80",
      alt: "Bridal glam",
      className: "aspect-square"
    },
    {
      src: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=800&auto=format&fit=crop",
      alt: "Luxury hair extensions",
      className: "col-span-2 aspect-[4/3]"
    }
  ]

  const clientAvatars = [
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  ]

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
    <section id="home" className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]">
        <motion.div 
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#FFC0CB] blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FFC0CB]/60 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 md:pt-16 lg:px-8">
        <motion.div 
          className="grid items-center gap-10 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content Column */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <motion.p 
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm outline-1 outline-slate-200"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-4 w-4" />
                Beauty, elevated.
              </motion.p>
            </motion.div>

            <motion.h1 
              className="font-fraunces text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
              variants={itemVariants}
            >
              Glam Meets Confidence
            </motion.h1>

            <motion.p 
              className="text-base leading-relaxed text-slate-600"
              variants={itemVariants}
            >
              Premium hair extensions and signature makeup looks for every occasion—right here in Akwa Ibom. 
              Discover your next transformation with our expert glam team.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center gap-3"
              variants={itemVariants}
            >
              <motion.a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC0CB] px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-[#ffc0cb]/60 transition hover:bg-[#ffb3c0] hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={16} />
                Book a Session
              </motion.a>

              <motion.a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-slate-200 transition hover:bg-slate-50 hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag size={16} />
                Shop Hair
              </motion.a>

              <motion.a
                href="#gallery"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 underline-offset-4 hover:underline"
                whileHover={{ x: 5 }}
              >
                <Images size={16} />
                See Transformations
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-6"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {clientAvatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    src={avatar}
                    alt={`Happy client ${index + 1}`}
                    className="h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">500+</span> glam sessions delivered
              </p>
            </motion.div>
          </div>

          {/* Image Grid Column */}
          <motion.div 
            className="grid grid-cols-3 gap-3 sm:gap-4"
            variants={itemVariants}
          >
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`${image.className} rounded-2xl object-cover shadow-md ring-1 ring-slate-200`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  zIndex: 10
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero