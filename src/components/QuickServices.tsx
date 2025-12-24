"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const QuickServices = () => {
  const handleNavigation = (path: string) => {
    console.log("Navigating to:", path);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#05070a]">
      {/* --- CINEMATIC BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Geometric Grid */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`, 
                     backgroundSize: '80px 80px' }} />
        
        {/* Ambient Glows */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-orange-900/20 blur-[150px] rounded-full" 
        />
      </div>

      <ScrollReveal width="100%">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* --- MINIMALIST HEADER --- */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-4 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm"
            >
              <span className="text-orange-500 font-bold tracking-widest text-xs uppercase">Our Expertise</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              What Are You <span className="text-orange-500">Looking For?</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From urban skyscrapers to coastal retreats, we deliver 
              <span className="text-white font-semibold"> unparalleled craftsmanship </span> across all sectors.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* SERVICE 1: REAL ESTATE */}
            <motion.div
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative h-[650px] group rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl cursor-pointer"
              onClick={() => handleNavigation('/properties')}
            >
              <img 
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop" 
                alt="Luxury Real Estate"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute inset-0 p-14 flex flex-col justify-end">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center shadow-xl">
                      <Layers className="text-white" size={24} />
                    </div>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">Real Estate</h3>
                  </div>
                  <p className="text-gray-400 max-w-sm font-medium text-lg leading-relaxed">
                    Curating high-yield assets and luxury residences for the global investor.
                  </p>
                  <button 
                    className="flex items-center gap-4 text-white font-black group/btn"
                    suppressHydrationWarning={true}
                  >
                    <span className="w-12 h-[2px] bg-orange-600 transition-all group-hover:w-24"></span>
                    <span className="group-hover:text-orange-500 transition-colors">EXPLORE PROPERTIES</span>
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* SERVICE 2: CONSTRUCTION */}
            <motion.div
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative h-[650px] group rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl cursor-pointer"
              onClick={() => handleNavigation('/services')}
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Structural Engineering"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
              />
              {/* Overlay with a hint of blue to differentiate from Real Estate */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/40 to-transparent" />
              
              <div className="absolute inset-0 p-14 flex flex-col justify-end">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">Construction</h3>
                  </div>
                  <p className="text-gray-400 max-w-sm font-medium text-lg leading-relaxed">
                    Engineering excellence through advanced structural methods and sustainable material science.
                  </p>
                  <button 
                    className="flex items-center gap-4 text-white font-black group/btn"
                    suppressHydrationWarning={true}
                  >
                    <span className="w-12 h-[2px] bg-blue-600 transition-all group-hover:w-24"></span>
                    <span className="group-hover:text-blue-400 transition-colors">VIEW SERVICES</span>
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default QuickServices;