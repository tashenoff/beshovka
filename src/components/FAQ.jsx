import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import data from '../data/content.json'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="faq" className="section-padding bg-white">
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
            Часто задаваемые вопросы
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-gray-900 mb-6">
            Ответы на <span className="text-gradient">популярные вопросы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Собрали самые частые вопросы о нашей продукции и услугах. Не нашли ответ? Свяжитесь с нами!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {data.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 transition-colors"
              >
                {/* Question */}
                <motion.button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="font-semibold text-lg text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <Minus className="w-6 h-6 text-primary-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-primary-600" />
                    )}
                  </div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-2xl mb-4">
                Остались вопросы?
              </h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Наши специалисты готовы ответить на любые вопросы о продукции и помочь с выбором оптимального решения
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
                >
                  Задать вопрос
                </motion.button>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${data.contacts.phone}`}
                  className="bg-primary-500 hover:bg-primary-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-primary-400"
                >
                  {data.contacts.phone}
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              Время работы: <span className="font-semibold text-gray-900">{data.contacts.workingHours}</span>
            </p>
            <p className="text-gray-600 mt-2">
              Email: <a href={`mailto:${data.contacts.email}`} className="text-primary-600 hover:text-primary-700 font-medium">{data.contacts.email}</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
