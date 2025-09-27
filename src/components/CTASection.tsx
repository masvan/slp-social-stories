import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Sparkles, Play, ArrowRight, CheckCircle, Users, Clock, Heart } from 'lucide-react';

interface FormData {
  email: string;
  name: string;
  school: string;
  role: string;
}

const CTASection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  const benefits = [
    {
      icon: Clock,
      title: "Save 5+ Hours",
      description: "Per story creation"
    },
    {
      icon: Heart,
      title: "Better Outcomes",
      description: "For your students"
    },
    {
      icon: Users,
      title: "Join 500+",
      description: "Happy educators"
    }
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Welcome to StoryMaker AI!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Check your email for your free trial access and getting started guide. 
              We're excited to help you create amazing social stories!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Start Another Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Social Story Creation?
                </span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join thousands of SLPs and teachers who are already saving hours 
                and creating better learning experiences for their students.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-semibold text-lg">{benefit.title}</div>
                  <div className="text-white/80 text-sm">{benefit.description}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm mb-4">Trusted by educators at 200+ schools</p>
              <div className="flex items-center space-x-6 text-white/60 text-sm">
                <span>✓ 14-day free trial</span>
                <span>✓ No credit card required</span>
                <span>✓ Cancel anytime</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Get Started Today
              </h3>
              <p className="text-white/80">
                Start your free trial and create your first story in minutes
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                {errors.name && (
                  <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('school', { required: 'School is required' })}
                  type="text"
                  placeholder="Your School/District"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                {errors.school && (
                  <p className="text-red-300 text-sm mt-1">{errors.school.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register('role', { required: 'Role is required' })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                >
                  <option value="" className="text-gray-900">Select your role</option>
                  <option value="slp" className="text-gray-900">Speech-Language Pathologist</option>
                  <option value="teacher" className="text-gray-900">Special Education Teacher</option>
                  <option value="elementary" className="text-gray-900">Elementary Teacher</option>
                  <option value="admin" className="text-gray-900">School Administrator</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
                {errors.role && (
                  <p className="text-red-300 text-sm mt-1">{errors.role.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-primary-600 font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Your Account...</span>
                  </>
                ) : (
                  <>
                    <span>Start Free Trial</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-white/60 text-sm text-center mt-6">
              By signing up, you agree to our Terms of Service and Privacy Policy.
              <br />
              No credit card required for the free trial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
