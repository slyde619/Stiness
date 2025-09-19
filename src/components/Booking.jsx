import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle, MapPin, Clock3, Phone } from 'lucide-react'

const Booking = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Soft Glam',
    'Bridal Glam',
    'Editorial Beat',
    'Wig Installation',
    'Hair Purchase'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    showToast('Booking received. We\'ll confirm shortly!')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        date: '',
        time: '',
        service: '',
        notes: ''
      })
    }, 3000)
  }

  const generateWhatsAppMessage = () => {
    const message = encodeURIComponent(
      `Hello Stiness House!\n\nBooking request details:\n• Name: ${formData.name || 'Not provided'}\n• Service: ${formData.service || 'Not selected'}\n• Date: ${formData.date || 'Not selected'}\n• Time: ${formData.time || 'Not selected'}\n• Notes: ${formData.notes || 'None'}`
    )
    return `https://wa.me/?text=${message}`
  }

  const locationInfo = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Akwa Ibom, Nigeria • Uyo'
    },
    {
      icon: Clock3,
      title: 'Hours',
      description: 'Mon–Sat: 9:00 AM – 7:00 PM'
    },
    {
      icon: Phone,
      title: 'Contact',
      description: 'WhatsApp Group: Join here'
    }
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
    <section id="booking" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          className="grid gap-10 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Booking Form Column */}
          <div>
            <motion.div variants={itemVariants}>
              <h2 className="font-fraunces text-3xl font-semibold tracking-tight text-slate-900">
                Book Your Glam
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Pick a date and time. We'll confirm availability and send details.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-5 shadow-sm bg-white"
              variants={itemVariants}
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-1 outline-slate-200 placeholder:text-slate-400 focus:border-[#FFC0CB] focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]"
                />
              </div>

              {/* Date and Time */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="text-sm font-medium text-slate-700">
                    Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-1 outline-slate-200 focus:border-[#FFC0CB] focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="text-sm font-medium text-slate-700">
                    Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-1 outline-slate-200 focus:border-[#FFC0CB] focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="text-sm font-medium text-slate-700">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-1 outline-slate-200 focus:border-[#FFC0CB] focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="text-sm font-medium text-slate-700">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Share your preferences or inspo"
                  className="mt-2 w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-1 outline-slate-200 placeholder:text-slate-400 focus:border-[#FFC0CB] focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFC0CB] px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-[#ffc0cb]/60 hover:bg-[#ffb3c0] disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitted ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitted ? 1 : 0.95 }}
                >
                  <CheckCircle2 size={16} />
                  {isSubmitted ? 'Booking Submitted!' : 'Confirm Booking'}
                </motion.button>

                <motion.a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 outline-1 outline-slate-200 hover:bg-slate-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={16} />
                  Book via WhatsApp
                </motion.a>
              </div>

              {isSubmitted && (
                <motion.p
                  className="text-sm text-emerald-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Booking submitted. We'll be in touch shortly!
                </motion.p>
              )}
            </motion.form>
          </div>

          {/* Map and Info Column */}
          <div className="space-y-6">
            <motion.div 
              className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white"
              variants={itemVariants}
            >
              {/* Map Iframe */}
              <div className="h-72 w-full bg-slate-100 rounded-t-3xl overflow-hidden">
                <iframe
                  title="Stiness House Makeover location map"
                  src="https://www.google.com/maps?q=Akwa%20Ibom%20Nigeria&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>

              {/* Location Info */}
              <div className="space-y-4 p-6">
                {locationInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="mt-0.5 rounded-md bg-[#FFC0CB]/40 p-2"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon size={16} />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {info.title}
                      </p>
                      <p className="text-sm text-slate-600">
                        {info.title === 'Contact' ? (
                          <>
                            WhatsApp Group:{' '}
                            <a
                              href="https://chat.whatsapp.com/l0wh6S9M9moIAaWzrtViFG7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-slate-900"
                            >
                              Join here
                            </a>
                          </>
                        ) : (
                          info.description
                        )}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Tip */}
            <motion.div 
              className="rounded-2xl bg-white p-5 shadow-sm outline-1 outline-slate-200"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-slate-700">
                Need a quick response? Tap the floating WhatsApp button to chat instantly.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Booking