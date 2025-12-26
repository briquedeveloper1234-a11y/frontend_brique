// "use client";
// import React from 'react';
// import { Building2, Award, Users, Star, CheckCircle } from 'lucide-react';
// import { ScrollReveal } from '@/components/ui/ScrollReveal';

// const AboutPage = () => {
//   return (
//     <>
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(2deg); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(-2deg); }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { 
//             transform: translate(-50%, -50%) scale(1) rotate(0deg);
//             box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
//           }
//           50% { 
//             transform: translate(-50%, -50%) scale(1.08) rotate(5deg);
//             box-shadow: 0 0 40px 10px rgba(249, 115, 22, 0.4);
//           }
//         }
        
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
        
//         @keyframes ken-burns {
//           0% { transform: scale(1) translateX(0); }
//           50% { transform: scale(1.1) translateX(-20px); }
//           100% { transform: scale(1) translateX(0); }
//         }
        
//         @keyframes glow {
//           0%, 100% { 
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% { 
//             opacity: 0.6;
//             transform: scale(1.2);
//           }
//         }
        
//         @keyframes particle-1 {
//           0%, 100% { transform: translate(0, 0); opacity: 1; }
//           25% { transform: translate(20px, -30px); opacity: 0.5; }
//           50% { transform: translate(-10px, -50px); opacity: 0.3; }
//           75% { transform: translate(15px, -70px); opacity: 0.1; }
//         }
        
//         @keyframes particle-2 {
//           0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
//           50% { transform: translate(-30px, 40px) scale(1.5); opacity: 0.3; }
//         }
        
//         @keyframes particle-3 {
//           0%, 100% { transform: translate(0, 0); opacity: 0.8; }
//           33% { transform: translate(40px, 20px); opacity: 0.4; }
//           66% { transform: translate(-20px, -30px); opacity: 0.2; }
//         }
        
//         @keyframes particle-4 {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
//           50% { transform: translate(25px, -40px) rotate(180deg); opacity: 0.2; }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 6s ease-in-out infinite;
//           animation-delay: 1s;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }
        
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
        
//         .animate-ken-burns {
//           animation: ken-burns 20s ease-in-out infinite;
//         }
        
//         .animate-glow {
//           animation: glow 3s ease-in-out infinite;
//         }
        
//         .animate-particle-1 {
//           animation: particle-1 8s ease-in-out infinite;
//         }
        
//         .animate-particle-2 {
//           animation: particle-2 6s ease-in-out infinite;
//         }
        
//         .animate-particle-3 {
//           animation: particle-3 10s ease-in-out infinite;
//         }
        
//         .animate-particle-4 {
//           animation: particle-4 7s ease-in-out infinite;
//         }
        
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//       <div className="pt-20 min-h-screen relative overflow-hidden">
//         {/* Animated Background */}
//         <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//           <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
//           <ScrollReveal width="100%">
//             <div className="text-center mb-16">
//               <h1 className="text-5xl font-bold text-gray-900 mb-4">About BrickConstruct</h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Building excellence since 2010, transforming visions into reality
//               </p>
//             </div>
//           </ScrollReveal>
          
//           <ScrollReveal width="100%" delay={0.2}>
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//               <div className="space-y-6">
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   BrickConstruct was founded with a simple mission: to provide exceptional construction and real estate services that exceed our clients&apos; expectations. With over 15 years of combined experience, we&apos;ve grown from a small local contractor to a trusted name in both construction and real estate development.
//                 </p>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   Our team of skilled professionals brings expertise in residential and commercial construction, property development, real estate sales, rentals, and mortgage solutions. We pride ourselves on delivering quality workmanship, transparent communication, and projects completed on time and within budget.
//                 </p>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   Whether you&apos;re looking to build your dream home, invest in commercial property, or find the perfect rental, BrickConstruct is your partner every step of the way.
//                 </p>
//               </div>
//               <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
//                 {/* Multi-layer Animated Background */}
//                 <div className="absolute inset-0">
//                   {/* Layer 1 - Primary Background with Ken Burns */}
//                   <div className="absolute inset-0 animate-ken-burns">
//                     <img 
//                       src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&h=900&fit=crop" 
//                       alt="Construction background" 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
                  
//                   {/* Gradient Overlays for Depth */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-transparent to-blue-600/30"></div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
                  
//                   {/* Animated Mesh Gradient */}
//                   <div className="absolute inset-0 opacity-40">
//                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400/20 via-purple-400/20 to-blue-400/20 animate-blob"></div>
//                   </div>
//                 </div>

//                 {/* Content Overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center z-20">
//                   <div className="text-center px-8">
//                     {/* Floating Badge */}
//                     <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-10 shadow-2xl animate-pulse-slow border-4 border-white mb-6">
//                       <div className="text-center">
//                         <div className="text-6xl font-bold text-white mb-2">15+</div>
//                         <div className="text-sm text-white font-semibold uppercase tracking-widest">Years</div>
//                       </div>
//                     </div>
                    
//                     {/* Text Content */}
//                     <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
//                       <h3 className="text-3xl font-bold text-gray-900 mb-4">Building Excellence Since 2010</h3>
//                       <p className="text-gray-700 text-lg leading-relaxed">
//                         From innovative designs to flawless execution, we bring your vision to life with precision and passion.
//                       </p>
//                       <div className="mt-6 flex justify-center gap-4">
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-orange-600">500+</div>
//                           <div className="text-sm text-gray-600">Projects</div>
//                         </div>
//                         <div className="w-px bg-gray-300"></div>
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-orange-600">100%</div>
//                           <div className="text-sm text-gray-600">Satisfaction</div>
//                         </div>
//                         <div className="w-px bg-gray-300"></div>
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-orange-600">50+</div>
//                           <div className="text-sm text-gray-600">Awards</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Animated Particles */}
//                 <div className="absolute top-10 right-10 w-3 h-3 bg-orange-400 rounded-full animate-particle-1 z-15"></div>
//                 <div className="absolute top-20 right-32 w-2 h-2 bg-blue-400 rounded-full animate-particle-2 z-15"></div>
//                 <div className="absolute bottom-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-particle-3 z-15"></div>
//                 <div className="absolute bottom-32 right-20 w-2 h-2 bg-pink-400 rounded-full animate-particle-4 z-15"></div>
//                 <div className="absolute top-1/3 left-10 w-3 h-3 bg-purple-400 rounded-full animate-particle-1 z-15"></div>
                
//                 {/* Decorative Glowing Elements */}
//                 <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-30 blur-3xl animate-glow"></div>
//                 <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-3xl animate-glow animation-delay-1000"></div>
//               </div>
//             </div>
//           </ScrollReveal>

//           {/* Values */}
//           <ScrollReveal width="100%">
//             <div className="bg-gray-50 rounded-lg p-12 mb-20">
//               <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
//               <div className="grid md:grid-cols-4 gap-8">
//                 {[
//                   { icon: Award, title: 'Excellence', desc: 'Committed to the highest standards in everything we do' },
//                   { icon: Users, title: 'Integrity', desc: 'Honest, transparent, and ethical in all our dealings' },
//                   { icon: Star, title: 'Innovation', desc: 'Embracing new technologies and construction methods' },
//                   { icon: CheckCircle, title: 'Reliability', desc: 'Delivering on our promises, every single time' },
//                 ].map((value, idx) => (
//                   <div key={idx} className="text-center">
//                     <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                       <value.icon className="h-10 w-10 text-orange-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
//                     <p className="text-gray-600">{value.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ScrollReveal>

//           {/* Team Section */}
//           <ScrollReveal width="100%">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
//               <p className="text-gray-600">Meet the experts behind BrickConstruct</p>
//             </div>
//           </ScrollReveal>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { name: 'John Anderson', role: 'CEO & Founder', exp: '20+ years in construction' },
//               { name: 'Sarah Mitchell', role: 'Director of Operations', exp: '15+ years in project management' },
//               { name: 'Michael Chen', role: 'Head of Real Estate', exp: '12+ years in real estate' },
//             ].map((member, idx) => (
//               <ScrollReveal key={idx} delay={idx * 0.1} width="100%">
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                   <div className="bg-gradient-to-br from-gray-300 to-gray-500 h-64 flex items-center justify-center">
//                     <Users className="h-32 w-32 text-gray-600" />
//                   </div>
//                   <div className="p-6 text-center">
//                     <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                     <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
//                     <p className="text-gray-600 text-sm">{member.exp}</p>
//                   </div>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutPage;
"use client";
import React from 'react';
import { Building2, Award, Users, Star, CheckCircle, Target, Eye, Shield } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const AboutPage = () => {
  return (
    <>


      <div className="pt-20 min-h-screen relative overflow-hidden bg-slate-50">
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-slate-200 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Header Section */}
          <ScrollReveal width="100%">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-widest text-orange-600 uppercase bg-orange-100 rounded-full">
                Our Story
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
                ABOUT <span className="text-orange-600">BRIQUE</span> 
              </h1>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tighter">DEVELOPERS AND CONSTRUCTION</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                We don't just build structures; we craft the landmarks of tomorrow.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <ScrollReveal width="100%" delay={0.2}>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-[6px] border-orange-600">
                   <p className="text-slate-800 text-2xl leading-tight font-bold italic">
                    "Precision in every brick, <br/>passion in every project."
                  </p>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed">
                  With over 15 years of industry disruption, Brique has evolved into a powerhouse of construction and real estate. Our approach blends raw industrial strength with modern architectural elegance.
                </p>

                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-[20px_20px_60px_#d9d9d9,-20px_-20px_60px_#ffffff]">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    From high-rise commercial hubs to bespoke residential estates, our signature is <strong>uncompromising quality</strong>.
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-14 h-14 rounded-2xl border-4 border-white bg-slate-100 flex items-center justify-center shadow-sm">
                         <Users className="w-6 h-6 text-orange-600" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 leading-none">50+ Experts</p>
                    <p className="text-sm text-slate-500 font-medium">Leading the industry</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.4}>
              <div className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl group">
                {/* --- THE UNIQUE IMAGE --- */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 animate-ken-burns">
                    <img 
                      src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80" 
                      alt="Unique Architectural Facade" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Moody unique overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-transparent to-slate-950/90"></div>
                </div>

                {/* Floating Badge (Glassmorphism) */}
                <div className="absolute top-12 right-12 z-30">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white text-center">
                    <div className="text-4xl font-black">15+</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">Years Excellence</div>
                  </div>
                </div>

                {/* Bottom Stats Card */}
                <div className="absolute bottom-10 left-10 right-10 z-30">
                  <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 shadow-2xl">
                    <div className="grid grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="text-3xl font-black text-orange-500">500</div>
                        <div className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mt-2">Built</div>
                      </div>
                      <div className="text-center border-x border-white/10">
                        <div className="text-3xl font-black text-orange-500">100%</div>
                        <div className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mt-2">Trust</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-orange-500">50</div>
                        <div className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mt-2">Awards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Values Section */}
          <ScrollReveal width="100%">
            <div className="grid md:grid-cols-4 gap-8 mb-32">
              {[
                { icon: Award, title: 'Excellence', desc: 'Setting the gold standard, Committed to the highest standards in everything we do.', color: 'text-orange-600' },
                { icon: Shield, title: 'Integrity', desc: 'Transparency, honesty, and integrity in every bolt of our dealings.', color: 'text-blue-600' },
                { icon: Star, title: 'Innovation', desc: 'Future-proof methods, Embracing new technologies and construction methods.', color: 'text-purple-600' },
                { icon: CheckCircle, title: 'Reliability', desc: 'We never miss a deadline, Delivering on our promises, every single time.', color: 'text-emerald-600' },
              ].map((value, idx) => (
                <div key={idx} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl hover:shadow-orange-500/10 transition-all duration-500">
                  <div className={`mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    <value.icon className={`h-10 w-10 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">{value.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Team Section */}
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-[120px]"></div>
             </div>
             
             <div className="relative z-10">
                <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Our Leadership Team</h2>
                  <p className="text-xl font-bold text-gray-600">Meet the experts behind Brique Developers and Construction</p>
                  <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">The minds turning abstract blueprints into concrete reality.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { name: 'Mr. Bhupendra',
                      //  role: 'CEO & FOUNDER', 
                       image: '/site images/team_member_1.png' },
                    { name: 'Mr. S.M. Ali',
                       //  role: 'MARKETING HEAD ', 
                       image: '/site images/team_member_2_v3.jpg' },
                    { name: 'Rajnni Yadeev', 
                      // role: "REAL ESTATE EXPERTISE", 
                      image: '/site images/team_member_3.jpg' },
                  ].map((member, idx) => (
                    <div key={idx} className="group">
                      <div className="relative aspect-[4/5] bg-slate-800 rounded-[3rem] overflow-hidden mb-6 border border-white/5">
                        {member.image ? (
                           <img 
                           src={member.image} 
                           alt={member.name} 
                           className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                         />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                            <Users size={120} className="text-orange-500" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-8 left-8">
                           {/* <p className="text-orange-500 font-black text-xs tracking-[0.3em] mb-2 uppercase">{member.role}</p> */}
                           <h3 className="text-2xl font-bold text-white uppercase">{member.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;