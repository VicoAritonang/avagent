'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

// Floating particles background component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  
  useEffect(() => {
    // Using deterministic values instead of random
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (i % 5) * 20 + 10, // Distribute evenly across width
      y: Math.floor(i / 5) * 20 + 10, // Distribute evenly across height
      size: 3 + (i % 3), // Sizes between 3-5
      duration: 15 + (i % 10) // Durations between 15-24
    }))
    setParticles(newParticles)
  }, [])

  if (typeof window === 'undefined') return null // Don't render on server

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

// Animated counter component
const AnimatedCounter = ({ end, suffix = '', duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (typeof window === 'undefined') return // Don't run on server
    
    if (isInView) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < end) {
            return Math.min(prev + Math.ceil(end / (duration * 60)), end)
          }
          return end
        })
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  if (typeof window === 'undefined') return <span>{end}{suffix}</span> // Server-side render final value

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <Navigation />
      <FloatingParticles />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative" ref={containerRef}>
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 rounded-3xl transform -skew-y-1"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-violet-800 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              About Avagent
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              style={{ y: textY }}
            >
              Pioneering the future of business automation with intelligent AI agents that understand, learn, and deliver extraordinary results
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { number: 100, suffix: '+', label: 'AI Agents Deployed' },
              { number: 50, suffix: '+', label: 'Happy Clients' },
              { number: 95, suffix: '%', label: 'Success Rate' },
              { number: 24, suffix: '/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </motion.div>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission & Vision with enhanced design */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
          >
            <motion.div
              variants={fadeInUp}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To become a pioneer in delivering Agent AI as a work automation solution that drives efficiency, scalability, and business innovation in the digital era.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <div className="space-y-4">
                  <div className="text-gray-700 leading-relaxed text-lg">
                    To build a modular Agentic AI ecosystem that integrates seamlessly with diverse business platforms and processes.
                  </div>
                  <div className="text-gray-700 leading-relaxed text-lg">
                    To provide accessible and customizable Agent AI solutions tailored to the specific needs of various industries and enterprises.
                  </div>
                  <div className="text-gray-700 leading-relaxed text-lg">
                    To pursue continuous innovation in Agentic AI R&D, ensuring our agents evolve, learn, and deliver increasing value over time.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The principles that guide everything we do
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly pushing the boundaries of what\'s possible with AI and automation technology',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  gradient: 'from-yellow-400 to-orange-500'
                },
                {
                  title: 'Excellence',
                  description: 'Delivering high-quality solutions that exceed expectations and drive real business value',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  gradient: 'from-blue-400 to-blue-600'
                },
                {
                  title: 'Partnership',
                  description: 'Building lasting relationships with our clients through trust, collaboration, and shared success',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  gradient: 'from-purple-400 to-purple-600'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl mb-6 flex items-center justify-center text-white mx-auto shadow-lg`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 rounded-3xl transform skew-y-1" />
            <div className="relative z-10 py-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Our Team
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                A dedicated team of AI specialists, automation experts, and business consultants working together to create the future of intelligent automation
              </motion.p>
              
              <motion.div
                className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-gray-200/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-gradient-to-r from-blue-400 to-violet-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold shadow-lg"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-900">10 Expert Team Members</p>
                  <p className="text-gray-600">Ready to transform your business</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}