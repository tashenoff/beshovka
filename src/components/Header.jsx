import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../data/content.json'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Use passive listener for better performance on mobile
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Also handle resize events for mobile viewport changes
    const handleResize = () => {
      // Force a repaint to fix mobile browser issues
      document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`)
    }

    window.addEventListener('resize', handleResize, { passive: true })
    handleResize() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { label: 'Услуги', id: 'services' },
    { label: 'Преимущества', id: 'advantages' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Контакты', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed-header transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">ТM</span>
            </div>
            <div>
              <h1 className={`font-display font-bold text-lg sm:text-xl ${isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                {data.company.name}
              </h1>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-primary-600 ${isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                  }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href={`tel:${data.contacts.phone}`}
              className="flex items-center space-x-1 lg:space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-2 py-2 lg:px-4 lg:py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone size={14} className="lg:w-4 lg:h-4" />
              <span className="font-medium text-sm lg:text-base hidden lg:inline">{data.contacts.phone}</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              href={`https://wa.me/${data.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 lg:space-x-2 bg-green-500 hover:bg-green-600 text-white px-2 py-2 lg:px-4 lg:py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={14} className="lg:w-4 lg:h-4" />
              <span className="font-medium text-sm lg:text-base">Написать в WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              href={`https://wa.me/${data.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-lg"
            >
              <MessageCircle size={18} />
            </motion.a>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 py-4"
            >
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="px-4 pt-4 border-t border-gray-200">
                  <a
                    href={`tel:${data.contacts.phone}`}
                    className="flex items-center space-x-2 text-primary-600 font-medium"
                  >
                    <Phone size={18} />
                    <span>{data.contacts.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
