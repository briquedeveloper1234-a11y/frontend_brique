"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { LayoutGrid, ArrowUpRight, Maximize2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const GalleryPage = () => {
  const categories = ['All', 'Residential', 'Commercial', 'Renovations', 'Interiors'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // UPDATED: Fresh Architectural Imagery
  const images = [
    { category: 'Residential', title: 'Modern Villa', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070' },
    // NEW: Office Tower (Dramatic angle)
    { category: 'Commercial', title: 'Office Tower', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070' },
    { category: 'Residential', title: 'Luxury Apartment', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935' },
    // NEW: Renovation (High-end detailed finish)
    { category: 'Renovations', title: 'Kitchen Remodel', url: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070' },
    { category: 'Commercial', title: 'Shopping Complex', url: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070' },
    { category: 'Interiors', title: 'Living Room Design', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974' },
    { category: 'Residential', title: 'Townhouse', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070' },
    { category: 'Commercial', title: 'Warehouse', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070' },
    { category: 'Interiors', title: 'Office Interior', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070' },
  ];

  // Mouse Tracking for Live Background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="relative pt-20 min-h-screen bg-[#0a0a0a] overflow-hidden">
      
      {/* --- LIVE INTERACTIVE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ x: springX, y: springY }}
          className="absolute w-[600px] h-[600px] bg-orange-900/10 blur-[120px] rounded-full opacity-40"
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px' 
        }}></div>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative z-10 border-b border-white/5 bg-zinc-900/20 backdrop-blur-md">
        <ScrollReveal width="100%">
          <div className="max-w-7xl mx-auto px-6 py-20 text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-orange-600 font-black tracking-[0.5em] uppercase text-[15px] mb-4 block"
            >
              Masterworks : Explore our portfolio of completed projects
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
              PROJECT <span className="text-orange-600 italic">GALLERY.</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* --- CATEGORY FILTER --- */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                    selectedCategory === category
                      ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-900/20'
                      : 'bg-transparent border-white/10 text-zinc-500 hover:border-orange-600/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </div>
      </div>

      {/* --- GALLERY GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                key={img.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 aspect-[4/5] cursor-pointer"
              >
                {/* Optimized Image */}
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                
                {/* Info Text */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-orange-600 font-black text-[10px] uppercase tracking-widest block mb-1">
                        {img.category}
                      </span>
                      <h3 className="text-white text-2xl font-black tracking-tighter">
                        {img.title}
                      </h3>
                    </div>
                    <div className="p-3 rounded-full bg-orange-600 text-white shadow-lg shadow-orange-900/30">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Aesthetic Icon */}
                <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} className="text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;