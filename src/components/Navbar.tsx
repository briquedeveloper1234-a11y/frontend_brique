// "use client";
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Home, Building2, Wrench, Users, Image, Phone, Menu, X, ArrowRight } from 'lucide-react';

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
// Added Info icon for the About section
import { Home, Info, Building2, Wrench, Image, Phone, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info }, // Added About Button
    { name: 'Properties', href: '/properties', icon: Building2 },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'Gallery', href: '/gallery', icon: Image },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto relative group">
        
        {/* --- STATIC GLOW EFFECT --- */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-600/50 via-orange-400/20 to-orange-600/50 rounded-2xl blur-sm"></div>
        
        {/* --- MAIN STATIC CONTAINER --- */}
        <div className="relative flex justify-between items-center h-20 px-6 md:px-8 bg-slate-950/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* --- BRANDING --- */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 shrink-0">
            <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Brique Logo" 
                className="h-full w-full object-contain drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-black text-white tracking-tighter leading-none uppercase">
                Brique 
              </span>
              <span className="text-[7px] md:text-[9px] font-bold text-white tracking-[0.18em] uppercase mt-1 opacity-80">
                Developers & Construction
              </span>
            </div>
          </Link>

          {/* --- DESKTOP LINKS --- */}
          {/* Note: I adjusted the gap and padding slightly to accommodate the extra "About" link */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  pathname === item.href ? 'text-orange-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <motion.div 
                    layoutId="activePill"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* --- ACTION BUTTON --- */}
          <div className="hidden md:flex items-center">
            <button 
              className="px-5 py-3 bg-orange-600 text-white font-black text-[10px] md:text-xs rounded-xl hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-900/40 flex items-center gap-2 group/btn"
              suppressHydrationWarning={true}
            >
              GET IN TOUCH
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-white hover:text-orange-500 transition-colors"
            suppressHydrationWarning={true}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-28 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-3xl xl:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${
                    pathname === item.href 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile version of the Get In Touch button inside the drawer */}
              <button className="mt-2 w-full flex items-center justify-center gap-2 p-4 bg-white/5 text-orange-500 font-bold text-sm rounded-2xl border border-orange-500/20 hover:bg-orange-500 hover:text-white transition-all">
                GET IN TOUCH
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;