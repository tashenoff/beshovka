import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin,
  ArrowUp,
  ExternalLink
} from 'lucide-react'
import data from '../data/content.json'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">СТ</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl">{data.company.name}</h3>
                  <p className="text-gray-400">{data.company.slogan}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                {data.company.description}
              </p>

              {/* Social/Contact Links */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={`tel:${data.contacts.phone}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Phone size={16} />
                  <span className="text-sm font-medium">Позвонить</span>
                </motion.a>
                
                <motion.a
                  href={`https://wa.me/${data.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle size={16} />
                  <span className="text-sm font-medium">WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-display font-bold text-lg mb-6">Разделы</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Услуги', id: 'services' },
                  { label: 'Преимущества', id: 'advantages' },
                  { label: 'Отзывы', id: 'testimonials' },
                  { label: 'FAQ', id: 'faq' },
                  { label: 'Контакты', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-display font-bold text-lg mb-6">Контакты</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href={`tel:${data.contacts.phone}`}
                      className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      {data.contacts.phone}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href={`https://wa.me/${data.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                      {data.contacts.whatsapp}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href={`mailto:${data.contacts.email}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {data.contacts.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-300">{data.contacts.address}</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Режим работы:</div>
                <div className="text-gray-300 font-medium">{data.contacts.workingHours}</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} {data.company.name}. Все права защищены.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              <span className="text-gray-400 text-sm">Политика конфиденциальности</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 text-sm">Условия использования</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
