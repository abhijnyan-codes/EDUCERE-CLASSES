import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Priya Sharma",
    course: "UGC NET",
    badge: "UGC NET Qualified",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    review: "Cracking the UGC NET in my very first attempt felt like a dream, but the structured guidance here made it a reality. The comprehensive study materials and rigorous mock test series exactly mirrored the actual exam pattern, eliminating all my exam anxiety.",
    featured: true
  },
  {
    name: "Rahul Das",
    course: "CSIR NET",
    badge: "CSIR NET Qualified",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    review: "The faculty here doesn't just teach; they mentor you. Their strategies for solving complex conceptual questions were an absolute game-changer for my preparation."
  },
  {
    name: "Ananya Kalita",
    course: "CUET",
    badge: "CUET Top Performer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    review: "Thanks to the personalized feedback and intensive practice sessions, I secured a 99.8 percentile in CUET and got into my dream central university!"
  },
  {
    name: "Bikash Saikia",
    course: "GUBEDCET",
    badge: "GUBEDCET Selected",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    review: "The learning environment is highly professional. The targeted focus on the B.Ed entrance syllabus saved me months of aimless studying."
  },
  {
    name: "Riya Borah",
    course: "UGC NET",
    badge: "UGC NET Qualified",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    review: "Time management was my biggest hurdle. The faculty's unique approach to Paper 1 helped me finish 15 minutes early on exam day."
  },
  {
    name: "Arjun Gogoi",
    course: "CUET",
    badge: "CUET Top Performer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    review: "The doubt-clearing sessions are incredible. They genuinely care about your success, making it the best coaching in Assam for serious aspirants."
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-[#050B14] relative border-t border-white/5 overflow-hidden">
      
      {/* Premium Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-orange/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            What Our <span className="text-brand-orange">Students Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Real success stories from students who achieved their goals through our dedicated mentorship and structured methodology.
          </motion.p> {/* <-- Fixed the typo right here! */}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
              className={`bg-brand-card/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-brand-orange/40 transition-all duration-500 hover:-translate-y-2 shadow-xl group relative overflow-hidden flex flex-col ${
                testimonial.featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand-card to-[#0d1b32]' : ''
              }`}
            >
              {/* Subtle accent gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Quote Icon watermark */}
              <FaQuoteRight className="absolute top-6 right-8 text-white/5 w-16 h-16 transform group-hover:scale-110 group-hover:text-brand-orange/5 transition-all duration-500" />

              {/* Top: Profile & Badges */}
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-transparent group-hover:border-brand-orange transition-colors duration-500 z-10 relative"
                  />
                  {/* Subtle Image Glow */}
                  <div className="absolute inset-0 rounded-full bg-brand-orange/40 filter blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">{testimonial.course}</span>
                    <span className="text-gray-600 text-xs">•</span>
                    <span className="px-2 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-wide">
                      {testimonial.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle: Review */}
              <p className={`text-gray-300 mb-8 leading-relaxed relative z-10 flex-grow ${
                testimonial.featured ? 'text-lg md:text-xl font-light italic' : 'text-base italic'
              }`}>
                "{testimonial.review}"
              </p>

              {/* Bottom: Rating */}
              <div className="flex gap-1 mt-auto relative z-10 pt-6 border-t border-white/5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-brand-orange w-4 h-4 drop-shadow-[0_0_5px_rgba(255,92,0,0.5)]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;