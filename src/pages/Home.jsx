import React from 'react';
import Layout from '../components/layout/Layout';
import SeoHead from '../components/shared/SeoHead';
import Hero from '../components/sections/Hero';
import { services, projects, testimonials, companyInfo } from '../data/roofingData';
import { FiArrowRight, FiZap, FiTarget, FiActivity } from 'react-icons/fi';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      <SeoHead
        title="RoofMaster Nigeria | Architectural Roofing Solutions"
        description="Clean, modern roofing systems across Nigeria. Specialist in industrial installations and precision engineering."
      />
      
      {/* 1. Immersive Hero */}
      <Hero />

      {/* 2. Brand Ethos: Minimalist Stats */}
      <section className="py-20 bg-white border-b border-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { label: 'Completed Projects', value: '450+', icon: <FiTarget /> },
              { label: 'Nigerian States', value: '18', icon: <FiActivity /> },
              { label: 'Quote Speed', value: '24hrs', icon: <FiZap /> },
              { label: 'Warranty Years', value: '10', icon: <FiArrowRight /> }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-emerald-500 mb-3 text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-bold tracking-tighter text-gray-900">{stat.value}</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. Services: The Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-600 mb-6">Our Capabilities</h2>
            <p className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[0.9]">
              Precision systems for <span className="font-light italic text-gray-400">complex structures.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {services.map((service) => (
              <div key={service.id} className="group relative bg-white p-12 hover:bg-gray-50 transition-all duration-500">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{service.icon}</span>
                  <span className="text-[10px] font-mono text-gray-300">0{service.id}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm font-light">
                  {service.description}
                </p>
                <a href={`/services/${service.slug}`} className="group flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-900">
                  Detailed Specs <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform text-emerald-500" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Insight: The Blueprints Block */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic">Engineered for the Tropics.</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Nigeria's climate demands more than just aesthetic appeal. Our systems utilize multi-layered thermal barriers and anti-corrosive coatings designed for high-humidity environments.
              </p>
              
              <div className="flex gap-8 mt-12">
                <button className="bg-emerald-600 text-white font-black py-5 px-10 text-xs uppercase tracking-[0.3em] hover:bg-emerald-500 transition-all">
                  Get Technical Quote
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-emerald-600/10 rounded-full blur-3xl"></div>
               <img 
                 src="https://unsplash.com/photos/UxwZWMW1sbw/download?force=true&w=2400" 
                 alt="Technical Drawing" 
                 className="relative z-10 opacity-50 grayscale hover:opacity-100 transition-opacity duration-1000 border border-white/10" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Projects: Asymmetric Portfolio */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-400">Selected Works</h2>
            <a href="/projects" className="text-xs font-black uppercase tracking-[0.2em] border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors">View All</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Project 1: Large */}
            <div className="md:col-span-8 group cursor-pointer overflow-hidden bg-gray-100 h-[600px] relative">
              <img src={featuredProjects[0].images[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="" />
              <div className="absolute bottom-10 left-10 text-white z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-emerald-400">{featuredProjects[0].category}</p>
                <h3 className="text-4xl font-bold tracking-tighter uppercase">{featuredProjects[0].title}</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
            </div>
            
            {/* Project 2 & 3: Stacked Small */}
            <div className="md:col-span-4 space-y-8">
              {featuredProjects.slice(1, 3).map((project, i) => (
                <div key={i} className="group cursor-pointer overflow-hidden bg-gray-100 h-[284px] relative">
                  <img src={project.images[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                     <p className="text-[8px] font-black uppercase tracking-[0.4em] mb-1">{project.category}</p>
                     <h3 className="text-xl font-bold uppercase">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonial: The Architect's View */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-px h-24 bg-emerald-500 mb-12"></div>
            <p className="text-3xl md:text-5xl font-light text-gray-900 tracking-tighter leading-tight max-w-4xl mb-12 italic">
              "{testimonials[0].text}"
            </p>
            <h4 className="text-xs font-black uppercase tracking-[0.5em] text-gray-900">{testimonials[0].name}</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">{testimonials[0].project}</p>
          </div>
        </div>
      </section>

      {/* 7. Final Action */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.5em] mb-8 block">Project Initiation</span>
          <h2 className="text-6xl md:text-9xl font-bold text-gray-900 mb-16 tracking-tighter leading-none">
            Build with <br /> <span className="italic font-light">Certainty.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <button className="group flex items-center gap-6 bg-gray-900 text-white font-black py-8 px-16 text-xs uppercase tracking-[0.4em] hover:bg-emerald-600 transition-all">
              Request Analysis <FiArrowRight className="group-hover:translate-x-3 transition-transform" />
            </button>
            <a href={`tel:${companyInfo.contact.phone}`} className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 hover:border-emerald-500 transition-all pb-2">
              {companyInfo.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;