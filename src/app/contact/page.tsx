'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2, Users, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Call your backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setError('Failed to send message. Please try again or contact us directly at info@briquedevelopers.com');
    } finally {
      setIsLoading(false);
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
    <section id="contact" className="relative pt-32 pb-24 overflow-hidden bg-zinc-950 text-zinc-300">
      
      {/* LIVE ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-900/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-zinc-700/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px' 
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Send className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Let&apos;s discuss how we can bring your vision to life
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:border-orange-600/30 hover:-translate-y-1 backdrop-blur-md h-full"
            >
              <div className="w-12 h-12 bg-zinc-900/50 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                <item.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-white mb-2 text-base">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-md">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="+91 98765 43210"
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

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}
              </form>
            ) : (
              <div className="py-20 text-center animate-fadeIn">
                <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400 text-lg">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-white shadow-xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {['Licensed & Insured', 'Quality Workmanship', 'Transparent Pricing', 'Excellent Support'].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform">
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
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 hover:-rotate-2 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="relative h-32 rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 hover:rotate-2 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;