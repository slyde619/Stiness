import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFC0CB]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div 
          className="rounded-2xl bg-white/60 px-8 py-6 shadow-lg ring-1 ring-white/40 backdrop-blur"
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div 
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFC0CB] shadow-inner ring-1 ring-white/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <span className="font-fraunces text-xl font-semibold tracking-tight text-slate-900">
              SH
            </span>
          </motion.div>
          <motion.p 
            className="text-sm font-medium text-slate-800/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Stiness House Makeover
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div 
            className="h-full w-1/3 rounded-full bg-white/90"
            animate={{ x: [-120, 320] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader