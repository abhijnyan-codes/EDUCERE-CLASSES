import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDirections } from 'react-icons/fa';

const Location = () => {
  return (
    <section className="py-32 bg-[#03060A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Visit Our <span className="text-brand-orange">Campus</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Experience our premium learning environment firsthand. Our academic counselors are ready to guide you.
            </p>

            <div className="bg-brand-card border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:border-brand-orange/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full transition-all duration-500 group-hover:bg-brand-orange/10"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-white font-bold text-lg mb-2">EDUCERE CLASSES</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      House No 01, Bye Lane 06<br />
                      Dr Zakir Hussain Road<br />
                      Mathura Nagar<br />
                      Dispur, Guwahati<br />
                      Assam 781006
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div className="ml-6 pt-3">
                    <p className="text-white font-medium">+91 60014 04894</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div className="ml-6 pt-3">
                    <p className="text-white font-medium">admissions@educereclasses.com</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-10 bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
                <FaDirections /> Get Directions
              </button>
            </div>
          </motion.div>

          {/* Right: Premium Map Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 transition-all duration-700"
          >
            {/* Standard Google Maps embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.657805178385!2d91.796347!3d26.142751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59a72abeb3b9%3A0xc342a987d6928e1d!2sEDUCERE%20CLASSES%20-%20Best%20Coaching%20centre%20for%20UGC%20NET%2F%20CSIR%20NET%2FCUET%20%2F%20GUBEDCET%20in%20Guwahati!5e0!3m2!1sen!2sin!4v1717441516000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;