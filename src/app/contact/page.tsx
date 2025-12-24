// 'use client';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

// const Contact = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // Mouse Tracking for Live Background
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Smooth springs for the "float" effect
//   const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
//   const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX - 250); // Offset to center the orb
//       mouseY.set(e.clientY - 250);
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [mouseX, mouseY]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.name && formData.email && formData.phone && formData.service && formData.message) {
//       setIsSubmitted(true);
//       setTimeout(() => {
//         setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//       }, 2000);
//     } else {
//       alert('Please complete all fields to proceed.');
//     }
//   };

//   return (
//     <section id="contact" className="relative pt-32 pb-24 overflow-hidden bg-[#0a0a0a] text-zinc-300">
      
//       {/* --- LIVE INTERACTIVE BACKGROUND --- */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Mouse Following Glow */}
//         <motion.div 
//           style={{ x: springX, y: springY }}
//           className="absolute w-[500px] h-[500px] bg-orange-900/10 blur-[100px] rounded-full opacity-60"
//         />
        
//         {/* Subtle Static Orbs */}
//         <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-900/20 blur-[120px] rounded-full" />

//         {/* Live Grain Overlay */}
//         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
//         {/* Blueprint Grid */}
//         <div className="absolute inset-0 opacity-[0.02]" style={{ 
//           backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//           backgroundSize: '100px 100px' 
//         }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="mb-20">
//           <motion.span 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="text-orange-600 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block"
//           >
//             Direct Inquiry
//           </motion.span>
//           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
//             LET'S BUILD <br /> <span className="text-zinc-600 italic">THE FUTURE.</span>
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-16">
          
//           {/* --- LEFT SIDE: INFO --- */}
//           <div className="lg:col-span-5 space-y-12">
//             <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-10">
//               {[
//                 { icon: MapPin, title: "Global HQ", detail: "123 Construction Avenue, NY" },
//                 { icon: Phone, title: "Direct Line", detail: "+1 (555) 000-8888" },
//                 { icon: Mail, title: "Digital Inquiries", detail: "concierge@brickconstruct.com" },
//                 { icon: Clock, title: "Availability", detail: "Mon - Sat: 09:00 - 18:00" }
//               ].map((item, i) => (
//                 <motion.div 
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   key={i} 
//                   className="group flex items-start gap-6"
//                 >
//                   <div className="mt-1 p-3.5 bg-zinc-900/80 border border-white/5 rounded-2xl group-hover:border-orange-600/50 transition-all">
//                     <item.icon size={20} className="text-orange-600" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
//                     <p className="text-zinc-500 text-sm leading-relaxed">{item.detail}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* --- RIGHT SIDE: FORM / SUCCESS --- */}
//           <div className="lg:col-span-7 relative">
//             <AnimatePresence mode="wait">
//               {!isSubmitted ? (
//                 <motion.div 
//                   key="form"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 1.05, filter: "blur(15px)" }}
//                   className="bg-[#141414]/40 border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-2xl shadow-2xl"
//                 >
//                   <form onSubmit={handleSubmit} className="space-y-8">
//                     <div className="grid md:grid-cols-2 gap-8">
//                       <div className="space-y-2">
//                         <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
//                         <input
//                           type="text"
//                           required
//                           value={formData.name}
//                           onChange={(e) => setFormData({...formData, name: e.target.value})}
//                           className="w-full bg-white/[0.03] border border-white/5 px-6 py-4 rounded-2xl focus:border-orange-600 outline-none transition-all text-white"
//                           placeholder="Your Name"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Email</label>
//                         <input
//                           type="email"
//                           required
//                           value={formData.email}
//                           onChange={(e) => setFormData({...formData, email: e.target.value})}
//                           className="w-full bg-white/[0.03] border border-white/5 px-6 py-4 rounded-2xl focus:border-orange-600 outline-none transition-all text-white"
//                           placeholder="Email Address"
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                         <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Message</label>
//                         <textarea
//                           rows={4}
//                           required
//                           value={formData.message}
//                           onChange={(e) => setFormData({...formData, message: e.target.value})}
//                           className="w-full bg-white/[0.03] border border-white/5 px-6 py-4 rounded-2xl focus:border-orange-600 outline-none transition-all text-white resize-none"
//                           placeholder="Project Brief"
//                         />
//                     </div>

//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       type="submit"
//                       className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/20"
//                     >
//                       Initiate Inquiry <Send size={16} />
//                     </motion.button>
//                   </form>
//                 </motion.div>
//               ) : (
//                 <motion.div 
//                   key="success"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex flex-col items-center justify-center text-center p-20 bg-zinc-900/50 border border-orange-600/30 rounded-[3rem] backdrop-blur-3xl min-h-[500px]"
//                 >
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1, rotate: 360 }}
//                     transition={{ type: "spring", damping: 10 }}
//                     className="mb-8"
//                   >
//                     <CheckCircle2 size={100} className="text-orange-600" />
//                   </motion.div>
//                   <h3 className="text-4xl font-black text-white mb-4 uppercase italic">Vision Received.</h3>
//                   <p className="text-zinc-500">Our consultants will reach out within 24 business hours.</p>
//                   <button onClick={() => setIsSubmitted(false)} className="mt-8 text-orange-600 text-xs font-black tracking-widest uppercase hover:text-white transition-colors">Return</button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2, Users } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
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

  return (
    <section id="contact" className="relative pt-32 pb-24 overflow-hidden bg-[#0d0d0d] text-zinc-300">
      
      {/* LIVE ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-900/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            opacity: [0.05, 0.15, 0.05] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-zinc-700/10 blur-[100px] rounded-full"
        />

        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px' 
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Send className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can bring your vision to life
          </p>
        </motion.div>

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
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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
  );
};

export default Contact;