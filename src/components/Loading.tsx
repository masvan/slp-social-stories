import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400">
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-8 bg-white rounded-2xl flex items-center justify-center shadow-lg"
        >
          <BookOpen className="h-10 w-10 text-primary-500" />
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-4"
        >
          StoryMaker AI
        </motion.h1>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
              className="w-3 h-3 bg-white rounded-full"
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Sparkles className="h-6 w-6 text-white/30" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/80 text-lg"
        >
          Loading your story creation experience...
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;
