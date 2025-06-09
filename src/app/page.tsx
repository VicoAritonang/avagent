'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import About from './about/page'
import Services from './services/page'
import Blog from './blog/page'
import Contact from './contact/page'
import { useRef } from 'react'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900">Transform Your Business with</span>
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Agentic AI Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Custom AI Agents and intelligent automation workflows that streamline your business processes.
              Built for modern enterprises who want to stay ahead.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(contactRef)}
                className="rounded-lg px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(servicesRef)}
                className="rounded-lg px-6 py-3 bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-white shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">Custom AI Agents</h3>
              <p className="mt-2 text-gray-600">
                Tailored AI solutions that understand your business context and automate complex workflows.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-white shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">Innovative AI Services</h3>
              <p className="mt-2 text-gray-600">
                Innovation from AI technology and leading tools to bring the best service that will help you in various fields.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl bg-white shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">Business Process Automation</h3>
              <p className="mt-2 text-gray-600">
                End-to-end automation solutions that save time, reduce errors, and boost productivity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="min-h-screen">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="min-h-screen">
        <Services />
      </section>

      {/* Blog Section */}
      <section id="blog" ref={blogRef} className="min-h-screen">
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="min-h-screen">
        <Contact />
      </section>
    </main>
  )
}
