import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'

const Gallery = ({ openLightbox }) => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?q=80&w=800&auto=format&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?q=80&w=1200&auto=format&fit=crop",
      alt: "Smokey eye glam"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      alt: "Soft glam bridal look"
    },
    {
      src: "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80",
      fullSrc: "https://images.unsplash.com/photo-1542089363-581452dc2be0?q=80&w=1200&auto=format&fit=crop",
      alt: "Glam curls with volume"
    },
    {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
      fullSrc: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
      alt: "Bold editorial wing"
    },
    {
      src: "https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80",
      fullSrc: "https://images.unsplash.com/photo-1512499421663-4aa2f3865ff1?q=80&w=1200&auto=format&fit=crop",
      alt: "Hair install with sleek edges"
    },
    {
      src: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80",
      fullSrc: "https://images.unsplash.com/photo-1530857225044-5d8a4f55f0d0?q=80&w=1200&auto=format&fit=crop",
      alt: "Classic red lip"
    }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: Instagram
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com',
      icon: ExternalLink
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="gallery" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="flex items-end justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-fraunces text-3xl font-semibold tracking-tight text-slate-900">
              Client Transformations
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Tap to view. Follow our social feeds for more.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-900 outline-1 outline-slate-200 hover:bg-slate-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={16} />
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div 
          className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => openLightbox(image.fullSrc)}
              className="group mb-4 w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FFC0CB] break-inside-avoid"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Open ${image.alt} in lightbox`}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                whileHover={{ brightness: 1.1 }}
              />
              
              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="text-white text-sm font-medium"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  View Full Size
                </motion.div>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 mb-4">
            Want to see your transformation featured here?
          </p>
          <motion.a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC0CB] px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-[#ffc0cb]/60 hover:bg-[#ffb3c0]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Session
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery