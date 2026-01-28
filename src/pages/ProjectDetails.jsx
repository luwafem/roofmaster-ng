import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SeoHead from '../components/shared/SeoHead';
import { projects } from '../data/roofingData';
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiTool } from 'react-icons/fi';

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-40 text-center">
          <h1 className="text-xl font-light tracking-[0.5em] uppercase text-gray-400">Entry Not Found</h1>
          <button onClick={() => navigate('/projects')} className="mt-8 text-xs font-black uppercase tracking-widest border-b border-emerald-500 pb-2 hover:text-emerald-600 transition-colors">
            Return to Index
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SeoHead title={`${project.title} | Technical Case Study`} description={project.metaDescription} />

      {/* 1. Cinematic Hero */}
      <section className="relative h-[85vh] bg-gray-900 overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end pb-32">
          <div className="container mx-auto px-6">
            <button 
              onClick={() => navigate('/projects')}
              className="group flex items-center gap-4 text-emerald-400 mb-12 text-[10px] font-black uppercase tracking-[0.5em]"
            >
              <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Index
            </button>
            <div className="max-w-5xl">
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.85] mb-8">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? 'font-light italic text-gray-400' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <div className="flex flex-wrap gap-6 items-center text-white/60">
                <span className="text-[11px] font-black uppercase tracking-widest border border-white/20 px-4 py-2">
                  {project.category}
                </span>
                <span className="text-[11px] font-bold italic tracking-widest uppercase">
                  {project.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Precision Specs (The "Technical Ledger") */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Completion Year', value: project.year },
              { label: 'Project Scope', value: project.duration },
              { label: 'Surface Area', value: project.size },
              { label: 'Structure Type', value: project.category }
            ].map((item, i) => (
              <div key={i} className="border-l border-gray-100 pl-8">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-3">{item.label}</p>
                <p className="text-lg font-bold text-gray-900 tracking-tighter">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Analysis */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Project Narrative */}
            <div className="lg:w-2/3">
              <div className="max-w-2xl">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-10 flex items-center gap-4">
                  <span className="w-8 h-px bg-gray-200"></span> Executive Summary
                </h2>
                <p className="text-4xl font-light leading-tight text-gray-900 mb-12 italic">
                  "{project.description}"
                </p>
                <div className="prose prose-xl text-gray-500 font-light leading-relaxed mb-20">
                  {project.fullDescription}
                </div>
              </div>

              {/* Technical Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className={`group relative overflow-hidden bg-gray-100 ${i % 2 !== 0 ? 'md:translate-y-20' : ''}`}>
                    <img src={img} alt="Structural Detail" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" />
                    <div className="absolute bottom-6 left-6 text-[9px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      Detail_View_0{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-16">
                <div className="bg-gray-900 text-white p-12">
                  <FiTool className="text-emerald-500 text-3xl mb-8" />
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-white/50">Bill of Materials</h3>
                  <ul className="space-y-8">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-4 items-start text-[11px] font-bold uppercase tracking-widest leading-snug">
                        <FiCheckCircle className="text-emerald-500 mt-0.5 shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.testimonial && (
                  <div className="p-8 border border-gray-100">
                    <p className="text-xl font-light italic text-gray-600 mb-8 leading-relaxed">
                      "{project.testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                       <span className="w-6 h-px bg-emerald-500"></span>
                       <p className="text-[10px] font-black uppercase tracking-widest text-gray-900">{project.testimonial.author}</p>
                    </div>
                  </div>
                )}

                <Link 
                  to="/contact" 
                  className="group flex items-center justify-between bg-emerald-600 text-white p-8 text-xs font-black uppercase tracking-[0.3em] hover:bg-gray-900 transition-all"
                >
                  Download Project Specs <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Insight: The Ridge Interaction */}
      <section className="py-32 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600 mb-8">Engineering Insight</h3>
              <h4 className="text-4xl font-bold tracking-tighter text-gray-900 mb-8">Managing Thermal Stress at the Ridge.</h4>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-xl">
                On this project, we implemented a specialized **Ridge Cap Ventilation System**. Traditional ridge capping often traps heat, leading to premature sealant failure and moisture intrusion in high-wind zones. Our solution utilizes a breathable underlayment that allows heat to escape while maintaining a 100% waterproof seal.
              </p>
              
            </div>
            <div className="relative">
               <div className="absolute inset-0 border-2 border-emerald-500/20 translate-x-4 translate-y-4" />
               <img src="/api/placeholder/800/600" alt="Technical Diagram" className="relative z-10 w-full grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Next Project (Contextual Footer) */}
      <section className="bg-white group cursor-pointer border-b border-gray-100">
        <Link to="/projects" className="container mx-auto px-6 py-32 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-300 block mb-6">Archive Navigation</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-gray-900 group-hover:text-emerald-600 transition-all duration-700">
              Explore the <span className="font-light italic">Next Build.</span>
            </h2>
          </div>
          <div className="mt-12 md:mt-0 w-32 h-32 rounded-full border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-900 group-hover:text-white transition-all duration-700">
            <FiArrowRight size={40} />
          </div>
        </Link>
      </section>
    </Layout>
  );
};

export default ProjectDetails;