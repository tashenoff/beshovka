import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import data from '../data/content.json'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Формируем сообщение для WhatsApp
    const whatsappMessage = `*Новая заявка с сайта*%0A%0A` +
      `👤 *Имя:* ${formData.name}%0A` +
      `📞 *Телефон:* ${formData.phone}%0A` +
      `${formData.email ? `📧 *Email:* ${formData.email}%0A` : ''}` +
      `${formData.company ? `🏢 *Компания:* ${formData.company}%0A` : ''}` +
      `💬 *Сообщение:* ${formData.message}`
    
    // Открываем WhatsApp с предзаполненным сообщением
    const whatsappUrl = `https://wa.me/${data.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Открываем WhatsApp
      window.open(whatsappUrl, '_blank')
      
      // Очищаем форму
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Свяжитесь с нами
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-gray-900 mb-6">
            Готовы <span className="text-gradient">обсудить ваш проект?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получите профессиональную консультацию и персональное предложение от наших специалистов
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">
              Отправьте заявку
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Название компании"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                  placeholder="Опишите ваши требования к трубам, объемы, сроки..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 font-semibold py-4 px-6 rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Отправляем...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Отправить заявку</span>
                  </>
                )}
              </motion.button>

              {/* Submit Status */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="font-medium">
                    {submitStatus === 'success'
                      ? 'Заявка сформирована! Сейчас откроется WhatsApp для отправки.'
                      : 'Произошла ошибка при отправке. Попробуйте еще раз.'}
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Свяжитесь прямо сейчас
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <motion.a
                  href={`tel:${data.contacts.phone}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Позвонить</div>
                    <div className="text-primary-600 font-medium">{data.contacts.phone}</div>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href={`https://wa.me/${data.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-green-600 font-medium">{data.contacts.whatsapp}</div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href={`mailto:${data.contacts.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600 font-medium">{data.contacts.email}</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Наш офис
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Адрес</div>
                    <div className="text-gray-600">{data.contacts.address}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Режим работы</div>
                    <div className="text-gray-600">{data.contacts.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-xl mb-4">
                Быстрый ответ гарантирован
              </h3>
              <div className="space-y-3 text-primary-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Ответ в течение 15 минут</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Персональное предложение за 24 часа</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Бесплатная техническая консультация</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
