import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { companyInfo } from '../../data/roofingData';
import { FiMenu, FiX, FiPhone, FiChevronRight } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Structural Lock: Prevent scrolling when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Portfolio' },
    { path: '/contact', label: 'Inquiry' }
  ];

  const isLightPage = location.pathname === '/' && !isScrolled;

  return (
    <>
      {/* 1. Global Contrast Layer */}
      <div className={`fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950/60 to-transparent z-[90] pointer-events-none transition-opacity duration-1000 ${isLightPage ? 'opacity-100' : 'opacity-0'}`} />

      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' 
          : 'bg-transparent py-10'
      }`}>
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* 2. Brand Identity */}
            <Link to="/" className="group relative z-[110] flex flex-col">
              <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-500 ${isLightPage || isMenuOpen ? 'text-white' : 'text-slate-900'}`}>
                Liatel<span className="text-emerald-500 group-hover:animate-pulse">.</span>
              </span>
              <span className={`text-[8px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${isLightPage || isMenuOpen ? 'text-emerald-500' : 'text-slate-400'}`}>
                Integrated Services
              </span>
            </Link>

            {/* 3. Engineering-Grade Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              <ul className="flex gap-12">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative group py-2 ${
                        isLightPage 
                          ? 'text-white/70 hover:text-white' 
                          : 'text-slate-500 hover:text-slate-950'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-500 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="h-8 w-px bg-white/10 mx-2" />

              <Link 
                to="/contact"
                className={`group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] px-8 py-4 transition-all duration-500 overflow-hidden relative ${
                  isLightPage 
                  ? 'bg-white text-slate-950 hover:bg-emerald-500 hover:text-white' 
                  : 'bg-slate-950 text-white hover:bg-emerald-600'
                }`}
              >
                <span className="relative z-10">Request Quote</span>
                <FiChevronRight className="relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 4. Minimalist Mobile Trigger */}
            <button
              className={`lg:hidden relative z-[110] flex items-center gap-4 transition-colors ${
                isLightPage || isMenuOpen ? 'text-white' : 'text-slate-950'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="flex flex-col gap-1.5 items-end">
                <span className={`h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
                <span className={`h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'opacity-0 w-0' : 'w-5'}`} />
                <span className={`h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
              </div>
            </button>
          </div>

          {/* 5. The "Skyline" Mobile Menu Overlay */}
          <div className={`fixed inset-0 bg-slate-950 z-[105] flex transition-all duration-[800ms] cubic-bezier(0.85, 0, 0.15, 1) ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {/* Structural Grid Overlay */}
                <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-6 h-full flex flex-col justify-between py-24 relative z-10">
              <div className="flex flex-col space-y-4">
                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.8em] mb-8">Navigation Archive</p>
                {navLinks.map((link, i) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-baseline gap-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-emerald-500/30 text-xl font-mono">0{i+1}</span>
                    <span 
                      className="text-6xl sm:text-8xl font-black tracking-tighter text-white transition-all duration-700 group-hover:text-emerald-500 group-hover:italic group-hover:translate-x-4"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                <div className="space-y-4">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500">Project Support</span>
                  <a href={`tel:${companyInfo.contact.phone}`} className="text-2xl text-white font-light hover:text-emerald-400 transition-colors">
                    {companyInfo.contact.phone}
                  </a>
                </div>
                <div className="flex flex-wrap gap-x-12 gap-y-4 items-end">
                   {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                     <a key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-emerald-500 transition-colors">
                       {social}
                     </a>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;