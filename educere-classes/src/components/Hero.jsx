import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      
      {/* SaaS Glow Effects */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-orange/40 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute top-1/3 -right-64 w-[500px] h-[500px] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Typography & CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(255,92,0,0.1)]"
            >
              Guwahati's Premier Coaching
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold text-brand-navy leading-[1.1] mb-6 tracking-tight"
            >
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                UGC NET, CSIR NET & CUET
              </span> Success.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 max-w-xl font-medium leading-relaxed"
            >
              Experience elite mentorship, cutting-edge study materials, and a proven methodology designed to secure your top rank in competitive exams.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-brand-orange text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(255,92,0,0.3)] hover:shadow-[0_0_30px_rgba(255,92,0,0.5)] hover:-translate-y-1">
                Apply Now
              </button>
              <button className="px-8 py-4 bg-transparent text-brand-navy text-sm font-bold rounded-lg border border-brand-navy/20 hover:bg-brand-navy/5 transition-all hover:-translate-y-1">
                View Outcomes
              </button>
            </motion.div>
          </div>

          {/* Right: Realistic Image & Floating Stats */}
          <div className="relative h-[550px] hidden lg:block">
            
            {/* Main Image with Orange Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 rounded-2xl shadow-[0_20px_50px_rgba(5,11,20,0.3)] overflow-hidden border-2 border-white/50"
            >
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay z-10 transition-all hover:bg-brand-orange/0 duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Successful Students" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Floating Stat Card 1: Success Rate */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -left-10 top-20 bg-brand-card/95 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl w-48 z-20"
            >
              <div className="text-brand-orange text-3xl font-black mb-1">92%</div>
              <div className="text-xs text-gray-300 uppercase tracking-wide font-semibold">Success Rate</div>
            </motion.div>

            {/* Floating Stat Card 2: AIR Rankers */}
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 bg-brand-card/95 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl w-52 z-20"
            >
              <div className="text-white text-2xl font-black mb-1">Top 100</div>
              <div className="text-xs text-brand-orange uppercase tracking-wide font-bold">AIR Rankers</div>
            </motion.div>

            {/* Floating Stat Card 3: Students */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-6 bottom-16 bg-brand-card/95 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl w-56 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-xl border border-brand-orange/30">
                  5k+
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Students</div>
                  <div className="text-xs text-gray-400 font-medium">Successfully Trained</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;