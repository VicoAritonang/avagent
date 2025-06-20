'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import About from './about/page'
import Services from './services/page'
import Blog from './blog/page'
import Contact from './contact/page'
import StructuredData from '@/components/StructuredData'
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
    <>
      <StructuredData />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30">
        <Navigation />
        
        {/* Hero Section with SEO-optimized content */}
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
                  AI Automation Solutions
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <strong>Avagenc</strong> delivers cutting-edge <em>AI automation</em> and <em>business automation</em> solutions. 
                Our <em>custom AI agents</em> and intelligent automation workflows streamline your business processes, 
                reduce operational costs, and accelerate growth for modern enterprises.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-10 flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(contactRef)}
                  className="rounded-lg px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                  aria-label="Get started with Avagenc AI automation solutions"
                >
                  Start Your AI Transformation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(servicesRef)}
                  className="rounded-lg px-8 py-4 bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition-colors shadow-lg"
                  aria-label="Learn more about Avagenc services"
                >
                  Explore AI Solutions
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12">
                <p className="text-sm text-gray-500 mb-4">Trusted by forward-thinking businesses</p>
                <div className="flex justify-center items-center space-x-2 text-gray-400">
                  <span>★★★★★</span>
                  <span className="text-sm">Rated 5.0 by our clients</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Features Grid with SEO keywords */}
            <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Custom AI Agents Development</h2>
                <p className="text-gray-600 leading-relaxed">
                  Tailored <strong>AI automation solutions</strong> that understand your unique business context. 
                  Our <em>custom AI agents</em> automate complex workflows with precision, reducing manual effort by up to 80%.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">AI Agents</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Automation</span>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-8 rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Intelligent Business Automation</h2>
                <p className="text-gray-600 leading-relaxed">
                  Innovation through <strong>AI technology</strong> and leading automation tools. 
                  Our <em>business automation</em> services deliver the best solutions across various industries and use cases.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-violet-50 text-violet-700 text-xs rounded-full">Business Intelligence</span>
                  <span className="px-2 py-1 bg-violet-50 text-violet-700 text-xs rounded-full">Innovation</span>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-8 rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Process Automation Excellence</h2>
                <p className="text-gray-600 leading-relaxed">
                  End-to-end <strong>business process automation</strong> solutions that save time, reduce errors, and boost productivity. 
                  Transform your operations with our proven <em>workflow automation</em> methodology.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">Process Optimization</span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">Efficiency</span>
                </div>
              </motion.article>
            </div>

            {/* Benefits Section */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-24 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Avagenc for AI Automation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                As a leading <strong>AI automation company</strong>, we combine cutting-edge technology with deep industry expertise 
                to deliver transformative results for your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                  <div className="text-gray-700">Reduction in Manual Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-600 mb-2">50%</div>
                  <div className="text-gray-700">Faster Process Completion</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                  <div className="text-gray-700">Accuracy in Automated Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-700">Continuous Operation</div>
                </div>
              </div>
            </motion.section>
          </div>
        </section>

        {/* Sections with proper semantic HTML */}
        <section id="about" ref={aboutRef} className="min-h-screen" aria-label="About Avagenc">
          <About />
        </section>

        <section id="services" ref={servicesRef} className="min-h-screen" aria-label="AI Automation Services">
          <Services />
        </section>

        <section id="blog" ref={blogRef} className="min-h-screen" aria-label="AI Automation Insights and Blog">
          <Blog />
        </section>

        <section id="contact" ref={contactRef} className="min-h-screen" aria-label="Contact Avagenc">
          <Contact />
        </section>
      </main>
    </>
  )
}