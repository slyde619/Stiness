import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ShoppingBag } from 'lucide-react'

const Services = ({ showToast }) => {
  const [activeFilter, setActiveFilter] = useState('all')

  const services = [
    {
      id: 1,
      title: 'Soft Glam',
      category: 'makeup',
      price: '₦25,000',
      description: 'Everyday-ready glow with soft definition and flawless skin.',
      type: 'booking'
    },
    {
      id: 2,
      title: 'Bridal Glam',
      category: 'makeup',
      price: '₦80,000',
      description: 'Timeless bridal beauty with long-wear perfection.',
      type: 'booking'
    },
    {
      id: 3,
      title: 'Editorial Beat',
      category: 'makeup',
      price: '₦45,000',
      description: 'Bold, camera-ready glam for shoots, runway, and campaigns.',
      type: 'booking'
    },
    {
      id: 4,
      title: 'Luxury Bone Straight',
      category: 'hair',
      price: 'From ₦120,000',
      description: '100% human hair, silky and sleek. 10A grade.',
      type: 'order'
    },
    {
      id: 5,
      title: 'Wig Installation',
      category: 'hair',
      price: '₦15,000',
      description: 'Seamless melt with long-lasting hold and styling.',
      type: 'booking'
    }
  ]

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'makeup', label: 'Makeup' },
    { key: 'hair', label: 'Hair' }
  ]

  const filteredServices = services.filter(service => 
    activeFilter === 'all' || service.category === activeFilter
  )

  const handleBookService = (serviceName) => {
    // Scroll to booking section and pre-select service
    const bookingSection = document.getElementById('booking')
    const serviceSelect = document.getElementById('service')
    
    if (bookingSection && serviceSelect) {
      // Scroll to booking section
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
      // Pre-select the service after a short delay
      setTimeout(() => {
        for (const option of serviceSelect.options) {
          if (option.value === serviceName || option.text === serviceName) {
            serviceSelect.value = option.value || option.text
            break
          }
        }
      }, 500)
    }
    
    showToast(`${serviceName} selected! Scroll down to complete booking.`)
  }

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="services" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="flex flex-wrap items-end justify-between gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-fraunces text-3xl font-semibold tracking-tight text-slate-900">
              Services & Pricing
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Select a category to explore options. All prices in NGN.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex items-center gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-900 outline-1 outline-slate-200 hover:bg-slate-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.article
                key={service.id}
                className="rounded-2xl border border-slate-200 p-5 shadow-sm bg-white"
                variants={cardVariants}
                layout
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    {service.title}
                  </h3>
                  <motion.span 
                    className="rounded-full bg-[#FFC0CB]/40 px-3 py-1 text-xs font-medium text-slate-700"
                    whileHover={{ scale: 1.1 }}
                  >
                    {service.category}
                  </motion.span>
                </div>
                
                <p className="text-sm text-slate-600 mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-slate-900">
                    {service.price}
                  </p>
                  
                  {service.type === 'booking' ? (
                    <motion.button
                      onClick={() => handleBookService(service.title)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-1 outline-slate-200 hover:bg-slate-50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Calendar size={16} />
                      Book
                    </motion.button>
                  ) : (
                    <motion.a
                      href="#booking"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-1 outline-slate-200 hover:bg-slate-50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingBag size={16} />
                      Order
                    </motion.a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Services