import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Users, BookOpen, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingElements = [
    { icon: Sparkles, delay: 0, x: 20, y: 20 },
    { icon: BookOpen, delay: 0.5, x: -30, y: 40 },
    { icon: Users, delay: 1, x: 40, y: -20 },
    { icon: Heart, delay: 1.5, x: -20, y: 30 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 animate-gradient" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, element.x, 0],
              y: [0, element.y, 0],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <element.icon className="h-8 w-8 text-white/30" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-display text-white leading-tight"
          >
            Custom Social Stories
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              for Every Student
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            AI-powered tool that creates personalized, animated social stories 
            tailored to your students' specific needs and situations
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Creating Stories</span>
              <Sparkles className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16"
          >
            {[
              { number: "500+", label: "SLPs Trust Us" },
              { number: "10,000+", label: "Stories Created" },
              { number: "95%", label: "Time Saved" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* App Preview Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="bg-white rounded-lg p-4 shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-20 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary-500" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
