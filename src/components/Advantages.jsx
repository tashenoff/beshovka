import React from 'react'
import { motion } from 'framer-motion'
import { Award, Factory, Truck, Headphones } from 'lucide-react'
import data from '../data/content.json'

const iconMap = {
  award: Award,
  factory: Factory,
  truck: Truck,
  headphones: Headphones
}

const Advantages = () => {
  return (
    <section id="advantages" className="section-padding bg-white">
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
            Почему выбирают нас
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-gray-900 mb-6">
            Наши <span className="text-gradient">преимущества</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем не просто трубы, а комплексные решения с гарантией качества и профессиональной поддержкой
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.advantages.map((advantage, index) => {
            const IconComponent = iconMap[advantage.icon] || Award
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group text-center"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="font-display font-bold text-4xl lg:text-5xl mb-2">20+</div>
                <div className="text-primary-100">лет на рынке</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="font-display font-bold text-4xl lg:text-5xl mb-2">1000+</div>
                <div className="text-primary-100">довольных клиентов</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="font-display font-bold text-4xl lg:text-5xl mb-2">50+</div>
                <div className="text-primary-100">видов продукции</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="font-display font-bold text-4xl lg:text-5xl mb-2">24/7</div>
                <div className="text-primary-100">техническая поддержка</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Advantages
