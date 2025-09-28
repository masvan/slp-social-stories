import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Brain, 
  Zap, 
  GraduationCap, 
  Share2, 
  TrendingUp,
  Shield,
  Clock,
  Heart,
  Star
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: User,
      title: "Personalized Content",
      description: "Input student names, grade levels, and specific needs to create truly customized stories that resonate with each child.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI-Powered Generation",
      description: "Advanced AI creates engaging, age-appropriate stories that address specific social situations and learning objectives.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Zap,
      title: "Fully Animated",
      description: "Beautiful, child-friendly animations bring stories to life and keep students engaged throughout the learning process.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Curriculum Aligned",
      description: "All stories meet educational standards and align with common core requirements for social-emotional learning.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Export stories as videos, PDFs, or interactive presentations. Share instantly with parents, colleagues, or students.",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor student engagement, comprehension, and progress with built-in analytics and reporting tools.",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 5+ Hours Per Story",
      description: "What used to take days now takes minutes",
      stat: "95%"
    },
    {
      icon: Heart,
      title: "Better Student Outcomes",
      description: "Personalized stories lead to better engagement",
      stat: "3x"
    },
    {
      icon: Shield,
      title: "Cost Effective",
      description: "No more buying individual stories",
      stat: "$200+"
    },
    {
      icon: Star,
      title: "Always Fresh Content",
      description: "Never run out of new story ideas",
      stat: "∞"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            Everything You Need to Create
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              {" "}Amazing Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed specifically for SLPs and educators to create 
            engaging, personalized social stories that make a real difference.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card p-8 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Why SLPs Choose StoryMaker AI
            </h3>
            <p className="text-xl text-gray-600">
              See the difference personalized stories make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 flex items-center justify-center">
                  <benefit.icon className="h-10 w-10 text-primary-500" />
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {benefit.stat}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Before vs After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              The StoryMaker AI Difference
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform the way you create social stories
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              whileHover={{ y: -5 }}
              className="card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">😔</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-red-500 mb-1">Before</div>
                    <h4 className="text-2xl font-bold text-gray-900">Generic Stories</h4>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-sm">×</span>
                    </div>
                    <span className="text-gray-700">Generic stories that don't connect with students</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-sm">×</span>
                    </div>
                    <span className="text-gray-700">Hours spent creating custom content manually</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-sm">×</span>
                    </div>
                    <span className="text-gray-700">High costs for individual story purchases</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-sm">×</span>
                    </div>
                    <span className="text-gray-700">Limited engagement and student interest</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              whileHover={{ y: -5 }}
              className="card p-8 relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-500 mb-1">With StoryMaker AI</div>
                    <h4 className="text-2xl font-bold text-gray-900">Personalized Stories</h4>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Personalized stories that students love and remember</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Create professional stories in minutes, not hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Unlimited stories for one low monthly price</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Higher engagement and better learning outcomes</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
