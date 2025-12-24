"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Home, Building2, Wrench, ChevronRight, MapPin, CheckCircle, Award, Users, Calendar, DollarSign, Star, Square, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

// --- Types ---
interface Project {
  id: number;
  title: string;
  status: string;
  type: string;
  duration: string;
  location: string;
  size: string;
  budget: string;
  description: string;
  url: string;
}

const ConstructionPage = () => {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mouse Tracking
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

  const handleContact = () => router.push('/contact');
  const navigateToGallery = () => router.push('/gallery');

  // --- Data ---
  const services = [
    {
      title: 'Residential Construction',
      description: 'Build your dream home from the ground up with our expert residential construction services.',
      features: ['Custom Home Building', 'Multi-Family Units', 'Home Extensions', 'Kitchen & Bath Remodeling'],
      icon: Home,
      details: 'From single-family homes to luxury estates, we bring your vision to life with precision craftsmanship and attention to detail.'
    },
    {
      title: 'Commercial Construction',
      description: 'Professional commercial building solutions for offices, retail, and industrial spaces.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Mixed-Use Developments'],
      icon: Building2,
      details: 'Creating functional, aesthetically pleasing commercial spaces that drive business success and meet all regulatory requirements.'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our comprehensive renovation and remodeling services.',
      features: ['Interior Renovations', 'Exterior Upgrades', 'Historic Restoration', 'Green Remodeling'],
      icon: Wrench,
      details: 'Breathe new life into existing structures with our expert renovation services, combining modern techniques with respect for original character.'
    },
    {
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality results.',
      features: ['Planning & Design', 'Budget Management', 'Quality Control', 'Timeline Coordination'],
      icon: CheckCircle,
      details: 'Comprehensive project oversight from initial planning through final delivery, ensuring your project stays on schedule and within budget.'
    }
  ];
  const portfolioProjects = [
    { 
      id: 1,
      title: 'Luxury Residential Complex', 
      status: 'Completed', 
      type: 'Residential', 
      duration: '18 months',
      location: 'Downtown District',
      size: '50 Units',
      budget: '$25M',
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935',
      description: 'A stunning 50-unit luxury residential complex featuring modern architecture, state-of-the-art amenities, and sustainable building practices. The project includes a rooftop garden, fitness center, and underground parking.'
    },
    { 
      id: 2,
      title: 'Modern Office Tower', 
      status: 'Ongoing', 
      type: 'Commercial', 
      duration: '24 months',
      location: 'Business District',
      size: '20 Floors',
      budget: '$45M',
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      description: 'A cutting-edge 20-story office tower designed for modern businesses. Features include smart building technology, energy-efficient systems, and flexible workspace layouts to accommodate diverse business needs.'
    },
    { 
      id: 3,
      title: 'Shopping Mall Renovation', 
      status: 'Completed', 
      type: 'Commercial', 
      duration: '12 months',
      location: 'Central Market Area',
      size: '200+ Stores',
      budget: '$15M',
      url: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070',
      description: 'Complete renovation of a major shopping center, modernizing infrastructure, updating aesthetics, and improving customer experience. Included new lighting, flooring, and facade updates while maintaining operations.'
    },
    { 
      id: 4,
      title: 'Green Valley Villas', 
      status: 'Completed', 
      type: 'Residential', 
      duration: '15 months',
      location: 'Suburban Area',
      size: '30 Villas',
      budget: '$18M',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      description: 'Eco-friendly villa community featuring sustainable materials, solar panels, rainwater harvesting, and energy-efficient designs. Each villa includes private gardens and modern smart home features.'
    },
    { 
      id: 5,
      title: 'Tech Campus Development', 
      status: 'Completed', 
      type: 'Commercial', 
      duration: '20 months',
      location: 'Innovation District',
      size: '15 Buildings',
      budget: '$60M',
      url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070',
      description: 'A comprehensive tech campus with multiple buildings designed for collaborative work environments. Features include open spaces, innovation labs, cafeterias, and recreational facilities.'
    },
    { 
      id: 6,
      title: 'Historic Building Restoration', 
      status: 'Completed', 
      type: 'Renovation', 
      duration: '14 months',
      location: 'Old Town',
      size: '45,000 sqft',
      budget: '$8M',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
      description: 'Careful restoration of a century-old building, preserving historical elements while upgrading infrastructure and adding modern amenities. Now serves as a boutique hotel and event space.'
    },
  ];
  // --- Sub-Components for Alignment ---
  const SectionHeader = ({ subtitle, title, centered = false }: { subtitle: string, title: string, centered?: boolean }) => (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
        {subtitle}
      </span>
      <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
        {title}
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 relative overflow-x-hidden">
      
      {/* Enhanced Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Added a secondary purple/blue glow for color depth */}
        <motion.div style={{ x: springX, y: springY }} className="absolute w-[800px] h-[800px] bg-orange-600/20 blur-[150px] rounded-full opacity-40" />
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full opacity-20" />
        
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
      </div>

      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center border-b border-white/5 pt-20">
          <div className="max-w-7xl mx-auto px-6 w-full py-20">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <span className="text-orange-500 font-black tracking-[0.5em] uppercase text-xs mb-6 block">Building Legacy</span>
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
                    EXPERT <br/>
                    <span className="text-orange-600 italic">WORKS.</span>
                  </h1>
                  <p className="text-xl text-zinc-400 mb-10 max-w-xl font-light leading-relaxed">
                    Precision engineering meets architectural vision. We build high-performance environments for living and commerce.
                  </p>
                  <button onClick={handleContact} className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-[0_20px_50px_rgba(234,88,12,0.3)] active:scale-95">
                    Get a Free Quote
                  </button>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { l: "Projects", v: "500+" }, { l: "Years", v: "15+" },
                  { l: "Experts", v: "50+" }, { l: "Success", v: "100%" }
                ].map((s, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[2.5rem] p-8 text-center hover:bg-white/[0.07] transition-colors">
                    <div className="text-4xl font-black text-orange-500 mb-1 tracking-tighter">{s.v}</div>
                    <div className="text-zinc-500 uppercase font-black text-[9px] tracking-widest">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          <SectionHeader subtitle="Capabilities" title="Structural Solutions." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 h-full hover:border-orange-600/50 hover:bg-white/[0.04] transition-all group">
                  <div className="bg-orange-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <service.icon size={30} className="text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-light">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        <CheckCircle size={12} className="text-orange-500 mr-2" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* PORTFOLIO SECTION - REMOVED GRAYSCALE */}
        <section className="py-32 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <SectionHeader subtitle="Our Works" title="The Portfolio." />
              <button onClick={navigateToGallery} className="text-zinc-400 hover:text-orange-500 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-2 transition-colors mb-16 md:mb-20">
                View Full Gallery <ArrowUpRight size={14}/>
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioProjects.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 0.1}>
                  <div className="group relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/10 shadow-2xl">
                    {/* Image is now naturally colorful without filter */}
                    <img src={p.url} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt={p.title} />
                    {/* Added a subtle colorful gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-orange-900/10 opacity-90 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <span className="bg-orange-600 text-white text-[9px] font-black uppercase tracking-widest mb-4 px-3 py-1 rounded-full w-fit">{p.status}</span>
                      <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-4">{p.title}</h3>
                      <div className="flex items-center justify-between pt-6 border-t border-white/10 text-[10px] font-black text-zinc-300 uppercase tracking-widest">
                         <span className="flex items-center"><MapPin size={12} className="mr-1 text-orange-500"/> {p.location}</span>
                         <span className="flex items-center"><Calendar size={12} className="mr-1 text-orange-500"/> {p.duration}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_rgba(234,88,12,0.25)]">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-[0.85]">
                Ready to <br/>Start?
              </h2>
              <p className="text-xl mb-12 text-orange-50 font-light leading-relaxed">
                From blue-prints to the final inspection, we handle every detail of your construction journey.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button onClick={handleContact} className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl hover:-translate-y-1">
                  Consultation
                </button>
                <button onClick={navigateToGallery} className="bg-orange-800/40 hover:bg-orange-800/60 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-white/20 backdrop-blur-sm">
                  Full Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ConstructionPage;