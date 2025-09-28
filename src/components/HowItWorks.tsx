import React from 'react';
import { motion } from 'framer-motion';
import { User, MessageSquare, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Input Student Details",
      description: "Tell us about your students - names, grade levels, specific needs, and learning preferences.",
      icon: User,
      color: "from-blue-400 to-blue-600",
      details: [
        "Student names and pronouns",
        "Grade level and reading ability",
        "Specific social skills to address",
        "Learning preferences and interests"
      ],
      mockup: (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900">Student Profile</span>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-blue-600 font-medium mb-2">Student: Emma, 2nd Grade</div>
              <div className="text-sm text-gray-600">Focus: Sharing and turn-taking</div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "02",
      title: "Describe the Situation",
      description: "Explain the social scenario or situation you want to address with your students.",
      icon: MessageSquare,
      color: "from-purple-400 to-purple-600",
      details: [
        "Specific social situation or challenge",
        "Context and setting details",
        "Desired behaviors and outcomes",
        "Any special considerations"
      ],
      mockup: (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-purple-600" />
              </div>
              <span className="font-semibold text-gray-900">Situation Details</span>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-sm text-purple-600 font-medium mb-2">Scenario: Playground Sharing</div>
              <div className="text-sm text-gray-600">Help Emma learn to share toys and take turns during recess</div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "03",
      title: "Generate & Customize",
      description: "Our AI creates a personalized, animated story that you can review and customize as needed.",
      icon: Sparkles,
      color: "from-yellow-400 to-orange-500",
      details: [
        "AI generates custom story content",
        "Beautiful animations and illustrations",
        "Review and edit as needed",
        "Export in multiple formats"
      ],
      mockup: (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-yellow-600" />
              </div>
              <span className="font-semibold text-gray-900">Generated Story</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-4 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">📚</div>
                <div className="text-sm text-gray-600">"Emma's Playground Adventure"</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="h-2 bg-green-400 rounded w-1/3"></div>
              <div className="h-2 bg-green-400 rounded w-1/3"></div>
              <div className="h-2 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
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
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating personalized social stories has never been easier. 
            Follow these three simple steps to transform your students' learning experience.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Separator */}
              {index > 0 && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gray-200 to-transparent"></div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        Step {step.number}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mockup */}
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-md w-full"
                  >
                    {step.mockup}
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                    >
                      <ArrowRight className="h-4 w-4 text-primary-500" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Create Your First Story?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of SLPs who are already saving time and creating 
              better learning experiences for their students.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-4"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
