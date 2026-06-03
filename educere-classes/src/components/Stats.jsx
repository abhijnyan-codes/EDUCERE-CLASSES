import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { value: '5000+', label: 'Students Trained' },
  { value: '92%', label: 'Success Rate' },
  { value: '15+', label: 'Expert Faculty' },
  { value: '10+', label: 'Years Excellence' },
];

const Stats = () => {
  return (
    <section className="bg-brand-navy py-16 border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-white/10">
          {statsData.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={index}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-brand-orange text-sm uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;