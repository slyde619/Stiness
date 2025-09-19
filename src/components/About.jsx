import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'

const About = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  const features = [
    {
      icon: Heart,
      title: "Client-First Care",
      description: "Comfort, hygiene, and a personalized glam experience."
    },
    {
      icon: Star,
      title: "Premium Quality", 
      description: "Top-tier hair bundles, tools, and professional-grade products."
    }
  ]

  return (
    <section id="about" className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          className="grid items-center gap-10 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Column */}
          <motion.div variants={itemVariants}>
            <motion.img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
              alt="Founder portrait"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-md ring-1 ring-slate-200"
              whileHover={{ 
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          {/* Content Column */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="font-fraunces text-3xl font-semibold tracking-tight text-slate-900">
                Our Story
              </h2>
            </motion.div>

            <motion.p 
              className="text-slate-600"
              variants={itemVariants}
            >
              Founded in Akwa Ibom, Stiness House Makeover was born from a passion for beauty and a belief that glam should feel effortless. 
              We specialize in premium hair extensions and bespoke makeup artistry that highlights your best features.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 p-4 bg-white"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <motion.div 
                    className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#FFC0CB]/40"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="text-slate-800" size={16} />
                  </motion.div>
                  <p className="text-sm font-semibold text-slate-900">
                    {feature.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.blockquote 
              className="rounded-2xl bg-white p-5 shadow-sm outline-1 outline-slate-200"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm italic text-slate-700">
                "Beauty is personal. We simply bring it to the surface—polished, modern, and undeniably you."
              </p>
              <footer className="mt-3 text-xs text-slate-500">
                — Founder, Stiness House Makeover
              </footer>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About