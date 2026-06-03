import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 bg-brand-navy relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/10 to-transparent mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold tracking-widest uppercase mb-8">
            Admissions Open For 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Ready To Start Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
              Success Journey?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Join the ranks of top achievers. Secure your seat today and let us guide you toward your dream career.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-5 bg-gradient-to-r from-brand-orange to-orange-500 text-white text-lg font-bold rounded-xl hover:from-orange-500 hover:to-orange-400 transition-all shadow-[0_0_30px_rgba(255,92,0,0.4)] hover:shadow-[0_0_50px_rgba(255,92,0,0.6)] hover:-translate-y-1">
              Apply Now
            </button>
            <button className="px-10 py-5 bg-brand-card text-white text-lg font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all hover:-translate-y-1">
              Call Admissions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;