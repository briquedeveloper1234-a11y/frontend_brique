"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentBg(prev => (prev + 1) % images.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentBg === i ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-orange-400 font-black tracking-[0.3em] uppercase mb-4 text-sm"
        >
          Established Excellence
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1]"
        >
          Building Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Infinite Vision</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-orange-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-orange-500 transition-all flex items-center justify-center gap-2 group">
            View Projects <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all">
            Our Services
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-orange-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
