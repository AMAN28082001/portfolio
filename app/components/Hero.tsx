"use client"

import { motion } from "framer-motion"
import DynamicBanner from "./DynamicBanner"

interface HeroProps {
  isMobile: boolean
}

export default function Hero({ isMobile }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-gray-600 via-black-800 to-gray-900 py-12 relative overflow-hidden"
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/5 opacity-20" />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left px-4 md:pl-14 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-playfair leading-tight drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Aman Kumar Rajak
            <span className="block mt-3 text-xl md:text-2xl font-medium text-teal-300/90">
              MERN Stack Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-prose"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting robust web solutions with modern technologies
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium 
                      shadow-lg hover:shadow-teal-500/20 hover:scale-[1.02] active:scale-95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Get in Touch →
          </motion.a>
        </motion.div>

        {/* Image Container */}
        <motion.div
          className="md:w-1/2 w-full max-w-[500px] md:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <DynamicBanner />
        </motion.div>
      </div>
    </section>
  )
}