import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#booking', label: 'Booking' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.a
          href="#home"
          className="group inline-flex items-center gap-3"
          aria-label="Stiness House Makeover Home"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFC0CB] shadow-sm ring-1 ring-inset ring-white/60 transition-transform group-hover:scale-[1.03]"
            whileHover={{ rotate: 5 }}
          >
            <span className="font-fraunces text-sm font-semibold tracking-tight text-slate-900">
              SH
            </span>
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Stiness House
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              Makeover
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC0CB]"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <motion.a
            href="#booking"
            className="rounded-full bg-[#FFC0CB] px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-[#ffc0cb]/60 transition hover:bg-[#ffb3c0] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC0CB]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
          <motion.a
            href="#services"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-slate-200 transition hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC0CB]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Hair
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-md p-2 outline-1 outline-slate-200 hover:bg-slate-50 md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="border-t border-slate-200/70 bg-white md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                className="mt-3 flex gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navigationItems.length * 0.05 }}
              >
                <a
                  href="#booking"
                  onClick={closeMobileMenu}
                  className="flex-1 rounded-full bg-[#FFC0CB] px-4 py-2 text-center text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-[#ffc0cb]/60 hover:bg-[#ffb3c0]"
                >
                  Book Now
                </a>
                <a
                  href="#services"
                  onClick={closeMobileMenu}
                  className="flex-1 rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 shadow-sm outline-1 outline-slate-200 hover:bg-slate-50"
                >
                  Order Hair
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header