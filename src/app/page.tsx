"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Home, ChevronRight, ArrowRight, Star, Bed, Bath, Square, Award, Users, TrendingUp, MapPin, Phone, Mail, Clock, ShieldCheck, Send, CheckCircle, Building2 } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import QuickServices from '@/components/QuickServices';

const HomePage = () => {
  const router = useRouter();
  const [currentBg, setCurrentBg] = React.useState(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.service && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 3000);
    }
  };

  const backgrounds = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", // Luxury Interior
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop", // Modern Villa
    // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"  // Glass Skyscraper
  ];
  const properties = [
    { 
      title: 'The Obsidian Villa', 
      price: '$2,450,000', 
      beds: 5, baths: 4, sqft: '5,200',
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
    },
    { 
      title: 'Azure Heights Penthouse', 
      price: '$1,200,000', 
      beds: 3, baths: 3, sqft: '2,800',
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: 'Heritage Estate', 
      price: '$850,000', 
      beds: 4, baths: 3, sqft: '3,400',
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    },
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      title: 'Office Address', 
      desc: 'D,89 sector 2 , Noida, Uttar Pradesh',
    },
    { 
      icon: Phone, 
      title: 'Phone', 
      desc: '0120 28 407036  , 0120 28 405999',
    },
    { 
      icon: Mail, 
      title: 'Email', 
      desc: 'info@briquedevelopers.com',
    },
    { 
      icon: Clock, 
      title: 'Working Hours', 
      desc: 'Mon - Sat: 9:00 AM - 6:00 PM',
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNavigation = (page: string) => {
    router.push(page);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring" as const, stiffness: 100 } 
    }
  };

  return (
    <div className="pt-20 overflow-x-hidden bg-white selection:bg-orange-500 selection:text-white">


      {/* --- ALL CONTENT RELATIVE TO BACKGROUND --- */}
       <div className="overflow-x-hidden bg-white selection:bg-orange-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-0">
        <AnimatePresence>
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
              style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
          </motion.div>
        </AnimatePresence>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center max-w-4xl px-4"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 border border-orange-500/50 rounded-full bg-orange-500/10 backdrop-blur-md">
              <span className="text-orange-400 font-medium tracking-widest text-xs uppercase">The Future of Living</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
              Elevating Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">Lifestyle</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Crafting architectural masterpieces and providing elite real estate solutions tailored to your ambition.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center">
              <button 
                onClick={() => handleNavigation('/properties')} 
                className="group relative px-8 py-4 bg-orange-600 rounded-full font-bold overflow-hidden transition-all hover:pr-12"
                suppressHydrationWarning={true}
              >
                <span className="relative z-10">Explore Properties</span>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
              </button>
              <button 
                onClick={() => handleNavigation('/services')} 
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all"
                suppressHydrationWarning={true}
              >
                Our Services
              </button>
            </motion.div>
          </motion.div>
        </section>


        {/* CLEAN TRANSITION SECTION */}
      <section className="bg-gradient-to-b from-black/5 via-white to-white py-24">
        {/* STATS SECTION */}
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Completed Projects', val: '500+' },
              { label: 'Awards Won', val: '24' },
              { label: 'Happy Clients', val: '1.2k' },
              { label: 'Years Exp', val: '15+' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center"
              >
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/10 transition-colors" />
          
          <div className="relative z-10">
            <div className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
              {stat.val}
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">
              {stat.label}
            </div>
          </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
     

        <QuickServices />
      

      <section className="py-24 relative overflow-hidden">
        {/* Enhanced Multi-layer Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Layer 1 - Primary Ken Burns Effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1541976844346-618be1940559?q=80&w=2070&auto=format&fit=crop"
              alt="Construction Background"
              className="w-full h-full object-cover opacity-15"
            />
          </motion.div>
          
          {/* Layer 2 - Secondary Slow Pan */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1, x: 0 }}
            animate={{ scale: 1, x: -30 }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
              alt="Architecture Background"
              className="w-full h-full object-cover opacity-10"
            />
          </motion.div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white/70 to-blue-50/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/90" />
          
          {/* Animated Mesh Gradient */}
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating Particles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full"
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full"
            animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full"
            animate={{ y: [-15, 15, -15], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Construction"
                  className="w-full h-96 object-cover"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-bold">15+ Years</div>
                  <div className="text-sm">Building Excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-10 -right-10 w-48 h-48 rounded-xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="Team Working"
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-orange-600/20"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-10 -left-10 w-40 h-40 rounded-xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                  alt="Modern Building"
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-blue-600/20"></div>
              </motion.div>

              <div className="absolute -z-10 top-10 -left-10 w-24 h-24 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -z-10 bottom-10 -right-10 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Redefining Construction Standards</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a team of visionary architects, engineers, and real estate experts dedicated to identifying opportunities and delivering value. Our precise execution and transparent processes have made us the preferred choice for hundreds of families and businesses.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Quality Craftsmanship', desc: 'Premium materials and expert finishing in every project.' },
                  { title: 'Transparent Dealings', desc: 'No hidden costs, clear timelines, and regular updates.' },
                  { title: 'Sustainable Living', desc: 'Eco-friendly designs that reduce carbon footprint.' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mt-1">
                      <Star className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('/about')}
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
                  suppressHydrationWarning={true}
                >
                  Discover Our Story 
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHY US (DARK MODE BREAK) --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Superior Quality is our <span className="text-orange-500">Foundation.</span></h2>
              <div className="grid gap-6">
                {[
                  { icon: ShieldCheck, title: "Guaranteed Safety", desc: "Rigorous safety protocols on every site." },
                  { icon: Award, title: "Award Winning", desc: "Recognized for design and sustainable building." },
                  { icon: TrendingUp, title: "Investment Growth", desc: "Properties that appreciate 20% faster than market." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <item.icon className="w-8 h-8 text-orange-500 shrink-0" />
                    <div>
                      <h5 className="font-bold text-xl">{item.title}</h5>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square rounded-full border-2 border-dashed border-orange-500/30 absolute -inset-4 animate-[spin_20s_linear_infinite]" />
               <img 
                 src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070" 
                 className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700" 
                 alt="Architectural detail" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Teaser */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-orange-600 font-black tracking-widest mb-4 uppercase">Featured Collection</h2>
              <h3 className="text-5xl font-black text-slate-900 leading-tight">Elite Real Estate</h3>
            </div>
            <button 
              onClick={() => handleNavigation('/properties')} 
              className="text-slate-900 font-black flex items-center gap-2 border-b-4 border-orange-500 pb-1 hover:text-orange-600 transition-colors"
              suppressHydrationWarning={true}
            >
              VIEW ALL PROPERTIES <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {properties.map((property, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -15 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all cursor-pointer"
                onClick={() => handleNavigation('/properties')}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={property.img} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-lg font-bold text-sm">
                    {property.price}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-orange-600 transition-colors">{property.title}</h4>
                  <div className="flex justify-between items-center py-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase">
                      <Bed size={18} className="text-orange-500" /> {property.beds} Beds
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase">
                      <Bath size={18} className="text-orange-500" /> {property.baths} Baths
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase">
                      <Square size={18} className="text-orange-500" /> {property.sqft} sqft
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative pt-32 pb-24 bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to start your project? Let's discuss how we can bring your vision to life
            </p>
          </div>

          {/* Contact Info Cards - Fixed Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {contactInfo.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:border-orange-600/30 backdrop-blur-md h-full"
                      >
                        <div className="w-12 h-12 bg-zinc-900/50 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                          <item.icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <h4 className="font-bold text-white mb-2 text-base">{item.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Form */}
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-md"
                    >
                      <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                          <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                          >
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">
                                  Full Name *
                                </label>
                                <input
                                  type="text"
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                  className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-white placeholder:text-zinc-600"
                                  placeholder="John Doe"
                                  required
                                  suppressHydrationWarning
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">
                                  Email Address *
                                </label>
                                <input
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-white placeholder:text-zinc-600"
                                  placeholder="john@example.com"
                                  required
                                  suppressHydrationWarning
                                />
                              </div>
                            </div>
          
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">
                                  Phone Number *
                                </label>
                                <input
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                  className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-white placeholder:text-zinc-600"
                                  placeholder="+1 (555) 000-0000"
                                  required
                                  suppressHydrationWarning
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">
                                  Service Interested In *
                                </label>
                                <select
                                  value={formData.service}
                                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                                  className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-white"
                                  required
                                  suppressHydrationWarning
                                >
                                  <option value="">Select a service</option>
                                  <option value="construction">Construction Services</option>
                                  <option value="buy">Property Purchase</option>
                                  <option value="rent">Property Rental</option>
                                  <option value="mortgage">Mortgage Solutions</option>
                                </select>
                              </div>
                            </div>
          
                            <div>
                              <label className="block text-sm font-semibold text-gray-400 mb-2">
                                Your Message *
                              </label>
                              <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                rows={5}
                                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none text-white placeholder:text-zinc-600"
                                placeholder="Tell us about your project requirements..."
                                required
                                suppressHydrationWarning
                              />
                            </div>
          
                            <motion.button
                              type="submit"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                              suppressHydrationWarning
                            >
                              <Send className="w-5 h-5" />
                              Send Message
                            </motion.button>
                          </motion.form>
                        ) : (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="py-20 text-center"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", duration: 0.6 }}
                              className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                              <CheckCircle className="w-10 h-10 text-green-500" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-white mb-4">
                              Message Sent Successfully!
                            </h3>
                            <p className="text-gray-400 text-lg">
                              Thank you for reaching out. We'll get back to you within 24 hours.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
          
                    {/* Right Column - Info Cards */}
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      {/* Why Choose Us Card */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-white shadow-xl"
                      >
                        <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                        <div className="space-y-4">
                          {['Licensed & Insured', 'Quality Workmanship', 'Transparent Pricing', 'Excellent Support'].map((item, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 + 0.3 }}
                              className="flex items-center"
                            >
                              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle className="h-5 w-5" />
                              </div>
                              <span className="font-medium">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
          
                      {/* Stats Card */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md"
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-orange-600/30">
                              <Building2 className="w-8 h-8 text-orange-600" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">500+</div>
                            <div className="text-sm text-gray-400">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-blue-600/30">
                              <Users className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">1.2k+</div>
                            <div className="text-sm text-gray-400">Happy Clients</div>
                          </div>
                        </div>
                      </motion.div>
          
                      {/* Image Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: -2 }}
                          className="relative h-32 rounded-xl overflow-hidden shadow-lg border border-white/10"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                            alt="Office"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          className="relative h-32 rounded-xl overflow-hidden shadow-lg border border-white/10"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                            alt="Team"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
      </section>


      
      {/* Enhanced Contact Section Link
      <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Vision?</h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Connect with our expert team to discuss your next masterpiece.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="bg-orange-600 hover:bg-orange-700 text-white py-4 px-10 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-600/20"
          >
            Get In Touch
          </button>
        </div>
      </section> */}
      </div>
    </div>
  );
};

export default HomePage;