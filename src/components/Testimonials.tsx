import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Speech-Language Pathologist",
      school: "Lincoln Elementary School",
      district: "Springfield School District",
      content: "StoryMaker AI has completely transformed how I create social stories. What used to take me 3-4 hours now takes 15 minutes, and the students are so much more engaged with the personalized content.",
      rating: 5,
      avatar: "SJ",
      highlight: "Saves 3-4 hours per story"
    },
    {
      name: "Michael Chen",
      title: "Special Education Teacher",
      school: "Roosevelt Middle School",
      district: "Metro City Schools",
      content: "The AI-generated stories are incredibly well-crafted and age-appropriate. My students with autism spectrum disorder respond much better to these personalized stories than generic ones.",
      rating: 5,
      avatar: "MC",
      highlight: "Better student engagement"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Lead SLP",
      school: "Sunshine Elementary",
      district: "Coastal Unified School District",
      content: "As a district lead, I've seen the impact across multiple schools. Teachers report significant improvements in student behavior and social skills after using StoryMaker AI stories.",
      rating: 5,
      avatar: "ER",
      highlight: "District-wide impact"
    },
    {
      name: "Jennifer Williams",
      title: "Elementary Teacher",
      school: "Oakwood Primary",
      district: "Valley School District",
      content: "The animations and illustrations are beautiful and really capture my students' attention. The progress tracking feature helps me monitor which stories are most effective.",
      rating: 5,
      avatar: "JW",
      highlight: "Beautiful animations"
    },
    {
      name: "Robert Kim",
      title: "Behavioral Specialist",
      school: "Pine Tree Elementary",
      district: "Mountain View Schools",
      content: "I love how I can input specific behavioral goals and the AI creates stories that directly address those needs. It's like having a personal story writer for each student.",
      rating: 5,
      avatar: "RK",
      highlight: "Targeted behavioral goals"
    },
    {
      name: "Lisa Thompson",
      title: "Autism Resource Teacher",
      school: "Rainbow Elementary",
      district: "Sunshine County Schools",
      content: "The cost savings alone make this worth it. I used to spend hundreds of dollars on individual social stories. Now I have unlimited access to personalized content for one low price.",
      rating: 5,
      avatar: "LT",
      highlight: "Significant cost savings"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
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
            What SLPs and Teachers Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of educators who are already using StoryMaker AI 
            to create better learning experiences for their students.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-primary-500" />
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {currentTestimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-gray-600">
                      {currentTestimonial.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentTestimonial.school}, {currentTestimonial.district}
                    </div>
                  </div>
                </div>

                {/* Highlight */}
                <div className="mt-6 inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  {currentTestimonial.highlight}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "500+", label: "Happy Educators", sublabel: "Across 200+ schools" },
            { number: "10,000+", label: "Stories Created", sublabel: "And counting" },
            { number: "95%", label: "Time Saved", sublabel: "Per story creation" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8">Trusted by educators at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Springfield School District",
              "Metro City Schools", 
              "Coastal Unified",
              "Valley School District",
              "Mountain View Schools",
              "Sunshine County Schools"
            ].map((district, index) => (
              <div key={index} className="text-gray-500 font-medium">
                {district}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
