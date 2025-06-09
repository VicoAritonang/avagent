'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { 
  RocketLaunchIcon,
  CpuChipIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Custom AI Agents',
    description: 'Tailor-made AI agents designed to automate specific tasks and workflows in your business.',
    icon: CpuChipIcon,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Process Automation',
    description: 'End-to-end automation solutions using n8n and other cutting-edge tools.',
    icon: CogIcon,
    gradient: 'from-violet-500 to-violet-600'
  },
  {
    title: 'Analytics & Insights',
    description: 'Data-driven insights and analytics powered by AI to help you make better decisions.',
    icon: ChartBarIcon,
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures and compliance with industry standards.',
    icon: ShieldCheckIcon,
    gradient: 'from-red-500 to-red-600'
  },
  {
    title: 'Integration Services',
    description: 'Seamless integration with your existing systems and third-party applications.',
    icon: RocketLaunchIcon,
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Support & Training',
    description: '24/7 support and comprehensive training for your team.',
    icon: ChatBubbleBottomCenterTextIcon,
    gradient: 'from-teal-500 to-teal-600'
  }
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-violet-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-violet-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-gray-900">Our</span>
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Services & Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and automation solutions to transform your business operations
              and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="relative bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-12 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how our AI solutions can help you achieve your goals.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </motion.a>
              </div>
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "linear-gradient(45deg, #3B82F6 25%, transparent 25%, transparent 50%, #3B82F6 50%, #3B82F6 75%, transparent 75%, transparent)",
                  backgroundSize: "60px 60px"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}