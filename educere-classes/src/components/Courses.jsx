import React from 'react';
import { motion } from 'framer-motion';
import { coursesData } from '../data/courses';

const Courses = () => {
  return (
    <section id="courses" className="py-32 bg-brand-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Curated Programs. <br/>
            <span className="text-gray-500">Unmatched Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={course.id}
              className="group relative bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-brand-orange/50 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Hover Glow Effect inside card */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-brand-orange transition-colors duration-300">
                {course.title}
              </h3>
              <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed relative z-10">
                {course.description}
              </p>
              
              <div className="mt-auto relative z-10">
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{course.duration}</span>
                  <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;