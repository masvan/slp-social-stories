import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Zap, Shield, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for individual SLPs and teachers",
      icon: Users,
      color: "from-blue-400 to-blue-600",
      popular: false,
      features: [
        "50 stories per month",
        "Basic animations",
        "Standard templates",
        "PDF export",
        "Email support",
        "Mobile app access"
      ],
      limitations: [
        "Limited customization options",
        "Basic progress tracking"
      ],
      cta: "Start Free Trial",
      ctaStyle: "btn-secondary"
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Most popular for active educators",
      icon: Crown,
      color: "from-purple-400 to-purple-600",
      popular: true,
      features: [
        "Unlimited stories",
        "Advanced animations",
        "Custom templates",
        "Multiple export formats",
        "Priority support",
        "Progress tracking & analytics",
        "Collaboration tools",
        "Advanced customization"
      ],
      limitations: [],
      cta: "Start Free Trial",
      ctaStyle: "btn-primary"
    },
    {
      name: "School District",
      price: "Custom",
      period: "pricing",
      description: "For districts and large organizations",
      icon: Shield,
      color: "from-green-400 to-green-600",
      popular: false,
      features: [
        "Unlimited stories for all users",
        "All Professional features",
        "Admin dashboard",
        "Bulk user management",
        "Custom branding",
        "Dedicated support",
        "Training & onboarding",
        "SLA guarantee",
        "Custom integrations"
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaStyle: "btn-secondary"
    }
  ];

  const addOns = [
    {
      name: "Training Package",
      price: "$199",
      description: "2-hour training session for your team",
      features: ["Live training", "Best practices", "Q&A session"]
    },
    {
      name: "Custom Templates",
      price: "$99",
      description: "Bespoke story templates for your needs",
      features: ["Custom design", "Brand integration", "Unlimited use"]
    },
    {
      name: "Priority Support",
      price: "$49",
      description: "24/7 priority support and faster response",
      features: ["24/7 availability", "Phone support", "1-hour response"]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial, 
            no credit card required.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative card p-8 ${
                plan.popular 
                  ? 'ring-2 ring-primary-500 shadow-2xl scale-105' 
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-start space-x-3 opacity-60">
                    <div className="h-5 w-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 text-sm">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full ${plan.ctaStyle} py-3`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h3>
            <p className="text-gray-600">
              Enhance your experience with these optional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {addon.name}
                  </h4>
                  <div className="text-2xl font-bold text-primary-500 mb-2">
                    {addon.price}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {addon.description}
                  </p>
                  <div className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I cancel anytime?",
                answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
              },
              {
                question: "Is there a free trial?",
                answer: "Absolutely! All plans come with a 14-day free trial. No credit card required to get started."
              },
              {
                question: "What file formats can I export?",
                answer: "You can export stories as PDFs, videos, interactive presentations, and more. Professional plans include additional formats."
              },
              {
                question: "Do you offer training?",
                answer: "Yes, we offer training packages and have extensive documentation. Professional and District plans include priority support."
              },
              {
                question: "Is my data secure?",
                answer: "We take security seriously. All data is encrypted and stored securely. We're SOC 2 compliant and FERPA aligned."
              },
              {
                question: "Can I upgrade or downgrade?",
                answer: "You can change your plan at any time. Upgrades take effect immediately, downgrades at the next billing cycle."
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold text-gray-900">
                  {faq.question}
                </h4>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <Shield className="h-6 w-6" />
            <span className="font-semibold">30-day money-back guarantee</span>
          </div>
          <p className="text-gray-600 mt-4">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
