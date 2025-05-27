import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock3, CakeSlice } from 'lucide-react';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-sinner text-saint px-6 py-24 overflow-hidden"
    >
      {/* Background halo glow */}
      <div className="absolute inset-0 bg-gradient-radial from-sinful-red/10 via-transparent to-transparent blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-serif mb-4 tracking-tight leading-tight">
          Saints & Sinners Bake Shop
        </h1>
        <p className="text-lg text-saint/80 mb-8">
          Handcrafted pastries, killer coffee, and heavenly vibes in the heart of Long Beach.
        </p>

        {/* Info */}
        <div className="flex flex-col items-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-goldleaf" />
            <span>702 E 10th St, Long Beach, CA 90813</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock3 className="w-5 h-5 text-goldleaf" />
            <div className="text-left">
              <p><strong>Mon–Fri:</strong> 7:00 AM – 3:00 PM</p>
              <p><strong>Sat–Sun:</strong> 8:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative icon */}
      <CakeSlice className="absolute bottom-8 right-8 w-10 h-10 text-frosting opacity-20" />
    </motion.div>
  );
}

export default Home;