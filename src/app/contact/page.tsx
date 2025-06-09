'use client'

import { motion, useInView } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { useState, useRef } from 'react'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  RocketLaunchIcon 
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" })
  const isInfoInView = useInView(infoRef, { once: true, margin: "-100px" })
  
  const isClient = typeof window !== 'undefined'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30 relative overflow-hidden">
      {/* Animated Background Elements - only on client */}
      {isClient && (
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
          <motion.div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-2xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          {isClient ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="inline-block mb-4"
              >
                <SparklesIcon className="w-12 h-12 text-blue-600 mx-auto" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-violet-800 bg-clip-text text-transparent mb-6">
                Let's Build the Future
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                Ready to transform your business with cutting-edge AI agents? 
                <span className="text-blue-600 font-semibold"> Let's discuss your vision.</span>
              </motion.p>
            </motion.div>
          ) : (
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-violet-800 bg-clip-text text-transparent mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Enhanced Contact Form */}
            {isClient ? (
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: -50 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 rounded-2xl blur-xl" />
                <div className="relative bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-8">
                    <RocketLaunchIcon className="w-8 h-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Start Your AI Journey</h2>
                  </div>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-green-600" />
                      <p className="text-green-800 font-medium">
                        Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div
                        variants={itemVariants}
                        className="group"
                      >
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:ring-0 focus:shadow-lg focus:shadow-blue-500/20 group-hover:border-gray-300"
                          placeholder="John Doe"
                          required
                        />
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="group"
                      >
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:ring-0 focus:shadow-lg focus:shadow-blue-500/20 group-hover:border-gray-300"
                          placeholder="Acme Inc."
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      variants={itemVariants}
                      className="group"
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:ring-0 focus:shadow-lg focus:shadow-blue-500/20 group-hover:border-gray-300"
                        placeholder="john@company.com"
                        required
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="group"
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:ring-0 focus:shadow-lg focus:shadow-blue-500/20 group-hover:border-gray-300 resize-none"
                        placeholder="Tell us about your automation needs, current challenges, and how AI agents can help transform your business processes..."
                        required
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-violet-700 text-white rounded-xl px-6 py-4 font-semibold text-lg shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-violet-400/20"
                        animate={isSubmitting ? {
                          x: ["-100%", "100%"],
                        } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: isSubmitting ? Infinity : 0,
                          ease: "linear"
                        }}
                      />
                      <span className="relative">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    </motion.button>
                  </form>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-sm text-gray-500 text-center mt-6"
                  >
                    We typically respond within 24 hours
                  </motion.p>
                </div>
              </motion.div>
            ) : (
              <div className="relative">
                {/* Static form version */}
                <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
                  {/* ... form fields ... */}
                </form>
              </div>
            )}

            {/* Enhanced Contact Information */}
            {isClient ? (
              <motion.div
                ref={infoRef}
                initial={{ opacity: 0, x: 50 }}
                animate={isInfoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInfoInView ? "visible" : "hidden"}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-pink-600/5 rounded-2xl blur-xl" />
                  <div className="relative bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-2xl shadow-xl border border-white/20">
                    <motion.h2 
                      variants={itemVariants}
                      className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3"
                    >
                      <EnvelopeIcon className="w-7 h-7 text-violet-600" />
                      Contact Information
                    </motion.h2>
                    
                    <div className="space-y-6">
                      <motion.div 
                        variants={itemVariants}
                        className="group cursor-pointer p-4 rounded-xl transition-colors hover:bg-gray-50/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <EnvelopeIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                            <p className="text-blue-600 font-medium">contact@avagent.tech</p>
                            <p className="text-sm text-gray-500 mt-1">Best for detailed inquiries</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        variants={itemVariants}
                        className="group cursor-pointer p-4 rounded-xl transition-colors hover:bg-gray-50/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <PhoneIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                            <p className="text-green-600 font-medium">+62 822 7399 2724</p>
                            <p className="text-sm text-gray-500 mt-1">Quick consultation calls</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        variants={itemVariants}
                        className="group cursor-pointer p-4 rounded-xl transition-colors hover:bg-gray-50/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MapPinIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                            <p className="text-gray-600 leading-relaxed">
                              Dave Apartment<br />
                              Jl. Palakali, Kukusan<br />
                              Beji, Depok City<br />
                              Jawa Barat
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-2xl blur-xl" />
                  <div className="relative bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-2xl shadow-xl border border-white/20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <ClockIcon className="w-7 h-7 text-blue-600" />
                      Office Hours
                    </h2>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700 font-medium">Monday - Friday</span>
                        <span className="text-blue-600 font-semibold">9:00 AM - 6:00 PM WIB</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700 font-medium">Saturday</span>
                        <span className="text-orange-600 font-semibold">10:00 AM - 2:00 PM WIB</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700 font-medium">Sunday</span>
                        <span className="text-gray-500">Closed</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <strong>Emergency support:</strong> Available 24/7 for enterprise clients
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {/* Static contact info version */}
                {/* ... static content ... */}
              </div>
            )}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 text-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-violet-600/10 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-violet-700 rounded-3xl p-12 lg:p-16 text-white overflow-hidden">
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
              <div className="relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-3xl lg:text-4xl font-bold mb-4"
                >
                  Ready to Revolutionize Your Business?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="text-xl lg:text-2xl mb-8 text-blue-100"
                >
                  Join the AI revolution with custom agents that work 24/7 for your success
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Free Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    View Our Portfolio
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}