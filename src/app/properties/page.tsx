"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Building2, ChevronRight, MapPin, Bed, Bath, Square, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  desc: string;
  image: string;
}

const PropertyListings = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const properties: Property[] = [
    { 
      id: 1, 
      title: 'The Obsidian Pavilion', 
      type: 'buy', 
      price: '$450,000', 
      location: 'Downtown Core', 
      beds: 3, baths: 2, sqft: '2,100', 
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      desc: 'A masterclass in brutalist minimalism, featuring floor-to-ceiling glass and smart-integrated systems.' 
    },
    { 
      id: 2, 
      title: 'Azure Heights Villa', 
      type: 'buy', 
      price: '$1,200,000', 
      location: 'Hillside Estates', 
      beds: 5, baths: 4, sqft: '4,500', 
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
      desc: 'An expansive estate with an infinity pool overlooking the valley. Architecturally designed for natural airflow.' 
    },
    { 
      id: 3, 
      title: 'Industrial Loft 42', 
      type: 'rent', 
      price: '$1,800/mo', 
      location: 'Arts District', 
      beds: 1, baths: 1, sqft: '650', 
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
      desc: 'Exposed brick meets modern luxury. Perfect for the urban creative seeking an inspiring workspace.' 
    },
    { 
      id: 4, 
      title: 'Glass Waterfront Condo', 
      type: 'buy', 
      price: '$850,000', 
      location: 'Coastal Strip', 
      beds: 3, baths: 3, sqft: '2,800', 
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      desc: 'A seamless blend of indoor and outdoor living with private terrace and panoramic ocean vistas.' 
    },
    { 
      id: 5, 
      title: 'Zenith Tech Plaza', 
      type: 'rent', 
      price: '$5,000/mo', 
      location: 'Innovation Hub', 
      beds: 0, baths: 2, sqft: '3,000', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      desc: 'Triple-A grade commercial space with sustainable cooling and modular office configurations.' 
    },
    { 
      id: 6, 
      title: 'The Minimalist Courtyard', 
      type: 'rent', 
      price: '$2,500/mo', 
      location: 'Quiet Gardens', 
      beds: 2, baths: 2, sqft: '1,600', 
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      desc: 'A serene sanctuary featuring Japanese-inspired gardens and open-plan living.' 
    },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || property.type === filterType;
    return matchesSearch && matchesType;
  });

  if (selectedProperty) {
    return (
      <div className="pt-24 min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedProperty(null)}
            className="flex items-center text-orange-500 hover:text-orange-400 mb-8 font-bold tracking-widest uppercase text-xs"
          >
            <ChevronRight className="rotate-180 mr-2" />
            Back to Listings
          </motion.button>
          
          <div className="bg-zinc-900/50 rounded-[3rem] overflow-hidden border border-white/5 backdrop-blur-xl">
            <div className="relative h-[60vh]">
              <img src={selectedProperty.image} className="w-full h-full object-cover" alt={selectedProperty.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                 <span className="px-4 py-1.5 bg-orange-600 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                    For {selectedProperty.type}
                 </span>
                 <h1 className="text-5xl md:text-7xl font-black">{selectedProperty.title}</h1>
              </div>
            </div>
            
            <div className="p-12">
              <div className="flex flex-col lg:flex-row justify-between gap-12">
                <div className="flex-1">
                  <div className="flex items-center text-gray-400 text-xl mb-8">
                    <MapPin className="h-6 w-6 mr-2 text-orange-500" />
                    {selectedProperty.location}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-12">
                    {[
                      { icon: Bed, val: selectedProperty.beds, label: 'Beds' },
                      { icon: Bath, val: selectedProperty.baths, label: 'Baths' },
                      { icon: Square, val: selectedProperty.sqft, label: 'Sqft' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl text-center">
                        <stat.icon className="mx-auto mb-3 text-orange-500" />
                        <div className="text-2xl font-bold">{stat.val}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-orange-500">Architectural Narrative</h2>
                  <p className="text-gray-400 text-xl leading-relaxed font-light">{selectedProperty.desc}</p>
                </div>

                <div className="lg:w-96">
                  <div className="bg-orange-600 p-8 rounded-[2.5rem] sticky top-32">
                    <div className="text-sm uppercase font-black mb-1 opacity-80">Investment Value</div>
                    <div className="text-4xl font-black mb-8">{selectedProperty.price}</div>
                    <button onClick={() => router.push('/contact')} className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-zinc-200 transition-colors mb-4">
                     Schedule a Viewing
                    </button>
                    <button className="w-full bg-orange-700 text-white py-5 rounded-2xl font-black uppercase tracking-tighter border border-white/10 hover:bg-orange-800 transition-colors">
                      Get More Information
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#050505] text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal width="100%">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              THE <span className="text-orange-600">COLLECTION.</span>
            </h1>
             <h1 className="text-5xl font-bold mb-4">Find Your Perfect Property</h1>
            <p className="text-gray-500 text-xl max-w-2xl font-medium">
              A curated selection of our extensive collection of properties for sale and rent.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        {/* --- DYNAMIC FILTER BAR --- */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[2rem] mb-16">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
              <input
                type="text"
                placeholder="Filter by architecture or district..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border-none pl-14 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-orange-600 text-white placeholder:text-gray-600"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-white/5 border-none pl-14 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-orange-600 text-white appearance-none cursor-pointer"
              >
                <option className="bg-zinc-900" value="all">All Properties</option>
                <option className="bg-zinc-900" value="buy">For Sale</option>
                <option className="bg-zinc-900" value="rent">For Rent</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- PROPERTY GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProperties.map((property, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={property.id}
                onClick={() => setSelectedProperty(property)}
                className="group relative bg-zinc-900/40 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all cursor-pointer shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={property.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={property.title} 
                  />
                  <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest">
                    {property.type}
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-3xl font-black text-orange-500 mb-2">{property.price}</div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                    {property.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-orange-500" />
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                    {property.location}
                  </div>

                  <div className="grid grid-cols-3 border-t border-white/5 pt-6 gap-2">
                    <div className="flex flex-col items-center">
                      <Bed size={16} className="text-gray-600 mb-1" />
                      <span className="text-xs font-bold">{property.beds} Beds</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-white/5">
                      <Bath size={16} className="text-gray-600 mb-1" />
                      <span className="text-xs font-bold">{property.baths} Baths</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Square size={16} className="text-gray-600 mb-1" />
                      <span className="text-xs font-bold">{property.sqft}sqft</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-32 border-2 border-dashed border-white/5 rounded-[4rem]">
            <Building2 className="h-20 w-20 text-gray-800 mx-auto mb-6" />
            <h3 className="text-3xl font-black text-white mb-2 uppercase italic">No Properties Found</h3>
            <p className="text-gray-600">Refine your search parameters to discover other masterpieces.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListings;