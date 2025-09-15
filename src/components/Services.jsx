import React from 'react'
import { motion } from 'framer-motion'
import { 
  Circle, 
  Cog, 
  Flame, 
  Droplets, 
  Wind, 
  Building,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import data from '../data/content.json'

const iconMap = {
  circle: Circle,
  cog: Cog,
  flame: Flame,
  droplets: Droplets,
  wind: Wind,
  building: Building
}

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
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
            Наши услуги
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
            Широкий ассортимент <span className="text-gradient">бесшовных труб</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Предлагаем качественные трубы для различных отраслей промышленности с гарантией качества и быстрой доставкой
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Circle
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                {/* Image */}
                <div className="mb-6">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Характеристики:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Применение:</h4>
                  <p className="text-sm text-gray-600">{service.applications}</p>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="group/btn flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>Узнать подробнее</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Нужна консультация по выбору труб?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальное решение для вашего проекта с учетом всех технических требований
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Получить консультацию</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={`tel:${data.contacts.phone}`}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Позвонить сейчас</span>
                <span className="font-mono text-sm">{data.contacts.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
