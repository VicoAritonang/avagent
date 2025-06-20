'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { supabase } from '@/lib/supabaseClient'



const categories = ['All', 'AI Technology', 'Automation', 'Development', 'Case Studies', 'Business Strategy', 'Security']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('blogPosts')
        .select('*')
        .order('date', { ascending: false })
  
      if (error) {
        console.error('Error fetching blog posts:', error)
      } else {
        setBlogPosts(data || [])
      }
  
      setLoading(false)
    }
  
    fetchBlogPosts()
  }, [])
  
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase()
      
      const matchesSearch =
        post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm, blogPosts])
  
  const featuredPost = useMemo(() => {
    return filteredPosts.find(post => post.featured)
  }, [filteredPosts])

  const regularPosts = useMemo(() => {
    return filteredPosts.filter(post => !post.featured)
  }, [filteredPosts])

  const isClient = typeof window !== 'undefined'

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={containerRef}>
        {isClient && (
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 rounded-3xl transform -skew-y-1"
          />
        )}
        
        <div className="max-w-7xl mx-auto relative z-10">
          {isClient ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-violet-800 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                Insights & Updates
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover the latest trends, insights, and innovations in AI and automation
              </motion.p>
            </motion.div>
          ) : (
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-violet-800 bg-clip-text text-transparent mb-6">
                Insights & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover the latest trends, insights, and innovations in AI and automation
              </p>
            </div>
          )}

          {/* Search and Filter Section */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
                <motion.div 
                  className="relative flex-1 max-w-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all duration-300"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg'
                          : 'bg-white/80 text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Featured Post */}
          {isClient && featuredPost && selectedCategory === 'All' && !searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <motion.article
                className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover min-h-[300px] group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                        {featuredPost?.author?.split(' ').map(n => n[0]).join('')}

                        </div>
                        <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                      </div>
                      <motion.a
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          )}

          {/* Regular Blog Posts Grid */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mb-16"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                </h2>
                <span className="text-gray-600">
                  {regularPosts.length} article{regularPosts.length !== 1 ? 's' : ''} found
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                    whileHover={{ scale: 1.03, y: -8 }}
                  >
                    <div className="relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm text-gray-700">{post.author}</span>
                        </div>
                        <motion.a
                          href={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          Read more
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {regularPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Enhanced Newsletter Signup */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-3xl p-12 text-white text-center overflow-hidden"
            >
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-36 -translate-y-36 animate-pulse" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 animate-pulse" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Get the latest insights on AI, automation, and business innovation delivered straight to your inbox
                  </p>
                </motion.div>
                
                <motion.form 
                  className="max-w-md mx-auto flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const email = e.target.email.value.trim();

                    // Validasi email sederhana
                    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                    if (!isValidEmail) {
                      alert("Please enter a valid email address.");
                      return;
                    }

                    try {
                      const res = await fetch("https://n8n-elrsppnn.n8x.web.id/webhook/3477b0ec-151d-4dee-8dd2-527a94532cc0", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email })
                      });

                      if (res.ok) {
                        alert("Subscription successful!");
                        e.target.reset(); // clear input
                      } else {
                        alert("Failed to subscribe. Please try again.");
                      }
                    } catch (err) {
                      console.error(err);
                      alert("Error occurred. Please try again later.");
                    }
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-2xl text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-white shadow-lg placeholder-gray-500"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </motion.form>


                
                <motion.p 
                  className="text-sm opacity-75 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  Join 1,000+ professionals already subscribed. Unsubscribe anytime.
                </motion.p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}