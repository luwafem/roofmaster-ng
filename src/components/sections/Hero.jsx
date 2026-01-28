import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiClock } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center bg-slate-950 overflow-hidden">
      
      {/* 1. Full-Screen Background - Added pointer-events-none */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <img 
          src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2400&auto=format&fit=crop" 
          alt="Premium industrial roofing structure" 
          className="object-cover w-full h-full grayscale scale-110 animate-ken-burns"
        />
      </div>

      {/* 2. Content Architecture - Explicitly higher Z-index */}
      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-6xl">
          
          {/* Top Metadata */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-emerald-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">
                RoofMaster Nigeria Ltd
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-slate-400">
              <FiShield className="text-emerald-500" />
              <span className="text-[9px] font-black uppercase tracking-widest">ISO 9001 Certified</span>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.8] tracking-tighter text-white mb-12">
            Engineering <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic font-light drop-shadow-2xl">Elevated.</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-2xl border-l-2 border-emerald-500/30 pl-8">
                The benchmark for industrial and commercial roofing in West Africa. We provide structural integrity that withstands the elements and defines the skyline.
              </p>
              
              {/* BUTTONS: Ensure these are inside the Z-30 container */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="group relative z-40 flex items-center justify-center gap-6 bg-emerald-600 text-white font-black py-8 px-12 text-[11px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:bg-emerald-500 active:scale-95 shadow-xl"
                >
                  <span className="relative z-10">Start Consultation</span>
                  <FiArrowRight className="relative z-10 group-hover:translate-x-3 transition-transform text-lg" />
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/projects"
                  className="relative z-40 flex items-center justify-center gap-4 text-white font-black py-8 px-10 text-[11px] uppercase tracking-[0.4em] border-2 border-white/10 hover:border-white/40 transition-all backdrop-blur-md bg-white/5 active:scale-95"
                >
                  Portfolio Archive
                </Link>
              </div>
            </div>

            {/* Metrics */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12">
                <div className="group">
                  <p className="text-4xl lg:text-6xl font-bold tracking-tighter text-white group-hover:text-emerald-400 transition-colors">15+</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2">Years In-Country</p>
                </div>
                <div className="group">
                  <p className="text-4xl lg:text-6xl font-bold tracking-tighter text-white group-hover:text-emerald-400 transition-colors">2M+</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2">SQM Installed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Utility Bar - pointer-events-none on parent, auto on links */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end z-20 pointer-events-none">
        <div className="flex gap-8 text-slate-500 pointer-events-auto">
          <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest">
            <FiClock className="text-emerald-500" />
            <span>HQ: Lagos, NG</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% { transform: scale(1.1) translate(0,0); }
          100% { transform: scale(1) translate(-1%, -1%); }
        }
        .animate-ken-burns {
          animation: kenburns 20s infinite alternate ease-in-out;
        }
      `}} />
    </section>
  );
};

export default Hero;