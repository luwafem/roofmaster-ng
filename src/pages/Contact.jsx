import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SeoHead from '../components/shared/SeoHead';
import { companyInfo } from '../data/roofingData';
import { FiArrowRight, FiPhone, FiMail, FiMapPin, FiClock, FiUploadCloud, FiShield } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '', budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Inquiry secure. Technical lead assigned.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '', budget: '' });
    }, 1500);
  };

  return (
    <Layout>
      <SeoHead title="Technical Inquiry | RoofMaster Nigeria" description="Consult with our structural engineering leads for premium roofing solutions." />

      {/* 1. Monolith Header */}
      <section className="bg-white pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-emerald-500"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600">Engagement</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-gray-900 leading-[0.8] mb-4">
                Let's <br />
                <span className="font-light italic text-gray-300 underline decoration-emerald-500 decoration-1 underline-offset-[20px]">engineer.</span>
              </h1>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-100 hidden lg:block max-w-[300px]">
              <FiClock className="text-emerald-500 mb-4" />
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-2">Protocol</p>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                Initial technical assessment delivered within <span className="text-gray-900 font-bold">24-48 business hours</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Communication Grid */}
      <section className="bg-white border-y border-gray-100">
        <div className="container mx-auto px-0 md:px-6">
          <div className="flex flex-col lg:flex-row border-x border-gray-100">
            
            {/* Left: Metadata & Channels */}
            <div className="lg:w-1/3 p-10 lg:p-16 space-y-24 bg-gray-50/50">
              
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600 mb-10">Primary Vectors</h3>
                <div className="space-y-16">
                  <div className="group cursor-pointer">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                      <FiPhone className="text-emerald-500" /> Secure Voice
                    </p>
                    <a href={`tel:${companyInfo.contact.phone}`} className="text-2xl font-bold tracking-tighter text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                      <FiMail className="text-emerald-500" /> Digital Archive
                    </p>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-2xl font-bold tracking-tighter text-gray-900 group-hover:text-emerald-600 transition-all underline decoration-gray-200 decoration-1 underline-offset-8">
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600 mb-8">Intelligence Center</h3>
                <p className="text-lg font-light text-gray-600 leading-snug italic max-w-xs">
                  {companyInfo.contact.address}<br />
                  Ikeja, Lagos, Nigeria.
                </p>
              </div>

              <div className="p-8 border border-emerald-500/10 bg-emerald-50/30 rounded-sm">
                <FiShield className="text-emerald-600 mb-4 text-xl" />
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-900 mb-2">NDA Integrated</p>
                <p className="text-[10px] text-gray-500 leading-relaxed font-light uppercase tracking-tighter">
                  All shared project blueprints are handled under strict confidentiality protocols.
                </p>
              </div>
            </div>

            {/* Right: The Intake Terminal */}
            <div className="lg:w-2/3 p-10 lg:p-24 bg-white">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-16">Technical Intake Terminal</h3>
              
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="relative group">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="peer w-full bg-transparent border-b border-gray-100 py-6 outline-none focus:border-emerald-500 transition-all placeholder-transparent text-lg" placeholder="Full Name" />
                    <label className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-emerald-600">Client / Organization</label>
                  </div>
                  <div className="relative group">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="peer w-full bg-transparent border-b border-gray-100 py-6 outline-none focus:border-emerald-500 transition-all placeholder-transparent text-lg" placeholder="Email" />
                    <label className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-emerald-600">Communications Endpoint</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="relative group">
                    <select name="service" value={formData.service} onChange={handleChange} className="peer w-full bg-transparent border-b border-gray-100 py-6 outline-none focus:border-emerald-500 text-sm font-bold uppercase tracking-widest appearance-none">
                      <option value="">Define Requirement</option>
                      <option value="industrial">Industrial Shell (Warehouse/Factory)</option>
                      <option value="commercial">Commercial Hub (Mall/Retail)</option>
                      <option value="institutional">Institutional (Church/Hospital)</option>
                    </select>
                    <label className="absolute left-0 -top-6 text-[10px] font-black uppercase tracking-widest text-emerald-600">Technical Category</label>
                  </div>
                  <div className="relative group">
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="peer w-full bg-transparent border-b border-gray-100 py-6 outline-none focus:border-emerald-500 transition-all placeholder-transparent text-lg" placeholder="Budget" />
                    <label className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-emerald-600">Projected Scale (SQM/NGN)</label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="3" className="peer w-full bg-transparent border-b border-gray-100 py-6 outline-none focus:border-emerald-500 transition-all placeholder-transparent text-lg resize-none" placeholder="Details" />
                  <label className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-emerald-600">Site Specifications / Challenges</label>
                </div>

                {/* Blueprint Upload Placeholder */}
                <div className="border-2 border-dashed border-gray-100 p-12 text-center group hover:border-emerald-500/30 transition-all cursor-pointer">
                  <FiUploadCloud className="mx-auto text-gray-300 text-4xl mb-4 group-hover:text-emerald-500 transition-colors" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Attach Technical Blueprints (PDF/DWG)</p>
                  <p className="text-[9px] text-gray-300 mt-2 italic font-light">Max size: 50MB. Secure encryption applied.</p>
                </div>

                <button type="submit" disabled={isSubmitting} className="group relative flex items-center justify-between w-full md:w-auto gap-12 bg-gray-900 text-white px-12 py-8 text-xs font-black uppercase tracking-[0.4em] overflow-hidden transition-all hover:bg-emerald-600 disabled:opacity-50">
                  <span className="relative z-10">{isSubmitting ? 'Verifying Data...' : 'Submit Technical Inquiry'}</span>
                  <FiArrowRight className="relative z-10 group-hover:translate-x-3 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Studio Visualizer */}
      <section className="bg-gray-950 py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-20"></div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-10 leading-tight">
                Inspect the <br /> <span className="font-light italic text-gray-500">Materials.</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-12 max-w-md">
                Our Ikeja studio houses a complete library of structural profiles, insulation cores, and fastener benchmarks. Architects and developers are encouraged to visit for physical specification audits.
              </p>
              
              <div className="space-y-6">
                 {[
                   { icon: <FiClock />, text: 'Mon — Fri: 08:00 - 18:00' },
                   { icon: <FiMapPin />, text: 'Ikeja Industrial Estate, Lagos' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                     <span className="text-white">{item.icon}</span> {item.text}
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="relative group h-[500px]">
              <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
              {/* Interactive map or site photo */}
              <div className="w-full h-full bg-gray-800 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000 flex items-center justify-center text-white font-mono text-[9px] uppercase tracking-widest">
                <div className="text-center p-12 border border-white/10">
                   
                   <p className="mt-8">Geospatial Data: 6.5965° N, 3.3444° E</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;