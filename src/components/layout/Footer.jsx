import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/roofingData';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* 1. Impact Call & Navigation Split */}
        <div className="flex flex-col lg:flex-row gap-20 mb-32">
          
          {/* Left: Brand Identity */}
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-10">
             
              <span className="text-2xl font-bold tracking-tighter uppercase text-gray-900">
                Liatel Integrated Servies<span className="text-emerald-500">.</span>
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 tracking-tighter leading-[0.9]">
              Engineering the <br /> 
              <span className="font-light italic text-gray-400 underline decoration-emerald-100 underline-offset-8">Nigerian Skyline.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">Primary Contact</p>
              <a href={`tel:${companyInfo.contact.phone}`} className="block text-4xl md:text-5xl font-bold text-gray-900 hover:text-emerald-600 transition-all tracking-tighter">
                {companyInfo.contact.phone}
              </a>
              <p className="text-gray-400 font-light text-sm max-w-sm leading-relaxed">
                {companyInfo.contact.address}<br />
                Lagos, Nigeria. Available 24/7 for technical emergencies.
              </p>
            </div>
          </div>

          {/* Right: Technical Navigation Grid */}
          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-12 border-l border-gray-100 pl-0 lg:pl-20">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-10">Exploration</h4>
              <ul className="space-y-5">
                {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="group flex items-center gap-2 text-gray-900 font-bold text-xs uppercase tracking-widest hover:text-emerald-600 transition-all">
                      {item} <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-10">Technical</h4>
              <ul className="space-y-5">
                {[
                  { name: 'Industrial Systems', path: '/industrial' },
                  { name: 'Residential Design', path: '/residential' },
                  { name: 'Repair Protocol', path: '/repair' },
                  { name: 'Metal Fabrication', path: '/metal' }
                ].map((s) => (
                  <li key={s.name}>
                    <Link to={`/services${s.path}`} className="text-gray-900 font-bold text-xs uppercase tracking-widest hover:text-emerald-600 transition-all">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-10">Presence</h4>
              <ul className="space-y-5">
                {Object.entries(companyInfo.socialLinks).map(([platform, url]) => (
                  <li key={platform}>
                    <a href={url} className="text-gray-900 font-bold text-xs uppercase tracking-widest hover:text-emerald-600 transition-all">
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Professional Certifications Ribbon */}
        <div className="flex flex-wrap items-center gap-8 py-10 border-y border-gray-100 mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mr-4">Accreditations:</span>
          {['NIOB Certified', 'CORBON Registered', 'Standard Organization Nigeria (SON)', 'NSE Engineering'].map(tag => (
            <span key={tag} className="text-[9px] font-bold text-gray-400 border border-gray-200 px-3 py-1 uppercase tracking-tighter hover:bg-gray-50 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* 3. The Blueprint Strip (Bottom Bar) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-mono">
          <div className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
            &copy; {currentYear} Liatel Integrated Servies
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-900 font-bold">Lagos HQ Active</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-200"></div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
              Technical Excellence by Design
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;