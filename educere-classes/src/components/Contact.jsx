import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#03060A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Text & Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to secure <br/>
              <span className="text-brand-orange">your future?</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg font-light max-w-md">
              Admissions for the 2026 batch are currently open. Reach out to our academic counselors today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-lg bg-brand-card border border-white/10 flex items-center justify-center text-brand-orange group-hover:border-brand-orange/50 transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <div className="ml-6">
                  <h4 className="text-white font-semibold mb-1">Guwahati Campus</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    House no 01, bye lane 06,<br />
                    Dr Zakir Hussain Rd, Mathura Nagar,<br />
                    Dispur, Assam 781006
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-lg bg-brand-card border border-white/10 flex items-center justify-center text-brand-orange group-hover:border-brand-orange/50 transition-colors">
                  <FaPhoneAlt />
                </div>
                <div className="ml-6">
                  <h4 className="text-white font-semibold mb-1">Admissions Helpdesk</h4>
                  <p className="text-gray-400 text-sm">060014 04894</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: SaaS Form */}
          <div className="bg-brand-card p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Subtle background glow inside form */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-[64px]"></div>

            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#050B14] border border-white/10 rounded-lg px-4 py-3.5 text-white outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Phone</label>
                  <input type="tel" className="w-full bg-[#050B14] border border-white/10 rounded-lg px-4 py-3.5 text-white outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Course of Interest</label>
                <select className="w-full bg-[#050B14] border border-white/10 rounded-lg px-4 py-3.5 text-white outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all appearance-none cursor-pointer">
                  <option className="bg-brand-navy">Select a course...</option>
                  <option className="bg-brand-navy">UGC NET</option>
                  <option className="bg-brand-navy">CSIR NET</option>
                  <option className="bg-brand-navy">CUET</option>
                </select>
              </div>

              <button type="button" className="w-full bg-white text-brand-navy py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors shadow-lg mt-4">
                Submit Application
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;