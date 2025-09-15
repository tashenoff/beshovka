import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import data from '../data/content.json'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14 sm:pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data.hero.backgroundImage}
          alt="Бесшовные трубы"
          className="w-full h-full object-cover"
        />
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/80 to-primary-800/90" />
        {/* Fallback background */}
        <div className="absolute inset-0 gradient-bg -z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                {data.company.slogan}
              </span>
              <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-6xl leading-tight mb-4 sm:mb-6">
                {data.hero.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-white/90 leading-relaxed">
                {data.hero.subtitle}
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8"
            >
              {data.hero.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm sm:text-base">{feature.replace('✓ ', '')}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-start"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-white hover:bg-gray-100 text-primary-700 font-semibold px-8 py-4 sm:px-10 sm:py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 text-base sm:text-lg"
              >
                <span>{data.hero.ctaText}</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
