import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Instagram, Facebook, MessageCircle } from 'lucide-react'

const Contact = ({ showToast }) => {
  const [contactForm, setContactForm] = useState({
    email: '',
    message: ''
  })
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isContactSubmitted, setIsContactSubmitted] = useState(false)

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: Instagram
    },
    {
      name: 'Facebook', 
      href: 'https://facebook.com',
      icon: Facebook
    },
    {
      name: 'WhatsApp',
      href: 'https://chat.whatsapp.com/l0wh6S9M9moIAaWzrtViFG7',
      icon: MessageCircle
    }
  ]

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setIsContactSubmitted(true)
    showToast('Thanks! Your message has been sent.')
    
    setTimeout(() => {
      setIsContactSubmitted(false)
      setContactForm({ email: '', message: '' })
    }, 3000)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setNewsletterEmail('')
    showToast('You\'re subscribed. Welcome!')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          className="grid gap-10 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Form Column */}
          <div>
            <motion.div variants={itemVariants}>
              <h2 className="font-fraunces text-3xl font-semibold tracking-tight text-slate-900">
                Get in Touch
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We'd love to hear from you. Send a message or join our community.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleContactSubmit}
              className="mt-6 space-y-4 rounded-2xl border border-slate-200 p-5 shadow-sm bg-white"
              variants={itemVariants}
            >
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-1 outline-slate-200 placeholder:text-slate-400 focus:border-[#FFC0CB] focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={contactForm.message}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-1 outline-slate-200 placeholder:text-slate-400 focus:border-[#FFC0CB] focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <motion.button
                  type="submit"
                  disabled={isContactSubmitted}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFC0CB] px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-[#ffc0cb]/60 hover:bg-[#ffb3c0] disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isContactSubmitted ? 1 : 1.05 }}
                  whileTap={{ scale: isContactSubmitted ? 1 : 0.95 }}
                >
                  <Send size={16} />
                  {isContactSubmitted ? 'Message Sent!' : 'Send Message'}
                </motion.button>

                <a
                  href="mailto:hello@stinesshousemakeover.com"
                  className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline"
                >
                  hello@stinesshousemakeover.com
                </a>
              </div>

              {isContactSubmitted && (
                <motion.p
                  className="text-sm text-emerald-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Message sent. We'll reply soon!
                </motion.p>
              )}
            </motion.form>
          </div>

          {/* Newsletter and Social Column */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <motion.div 
              className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm font-semibold text-slate-900">
                Join our newsletter
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Get promos, new arrivals, and glam tips.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 rounded-xl border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-1 outline-slate-200 placeholder:text-slate-400 focus:border-[#FFC0CB] focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]"
                />
                <motion.button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join
                </motion.button>
              </form>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm outline-1 outline-slate-200 hover:bg-slate-50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp Note */}
            <motion.div 
              className="rounded-2xl bg-white p-5 shadow-sm outline-1 outline-slate-200"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-slate-700">
                Prefer instant chat? Use the floating WhatsApp button to reach us now.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="inline-block rounded-2xl bg-gradient-to-r from-[#FFC0CB] to-[#ffb3c0] p-8 text-center shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-fraunces text-xl font-semibold text-slate-900 mb-2">
              Ready to Glow?
            </h3>
            <p className="text-slate-700 mb-4 text-sm">
              Book your transformation today and let us bring out your best self.
            </p>
            <motion.a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Session
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact