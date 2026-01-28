import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'; // Added this missing import
import Layout from '../components/layout/Layout';
import SeoHead from '../components/shared/SeoHead';
import Card from '../components/ui/Card';
import { projects } from '../data/roofingData';
import { FiSearch, FiX, FiArrowRight, FiInfo } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = useMemo(() => ['all', ...new Set(projects.map(p => p.category))], []);
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SeoHead
        title="Project Index | RoofMaster Nigeria"
        description="A technical archive of structural roofing excellence across West Africa."
      />
      
      {/* 1. Impact Header */}
      <section className="bg-white pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-emerald-500"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600">Work Archive</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-gray-900 mb-8 leading-[0.8]">
                Proven <br /> 
                <span className="font-light italic text-gray-300">Structures.</span>
              </h1>
            </div>
            <p className="text-xl text-gray-400 font-light max-w-sm pb-4 leading-relaxed italic">
              A curated ledger of industrial, commercial, and residential shell engineering.
            </p>
          </div>
        </div>
      </section>
      
      {/* 2. Control Terminal (Sticky) */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-y border-gray-100 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 text-[9px] font-black uppercase tracking-[0.2em] transition-all border ${
                    filter === category 
                    ? 'bg-gray-900 text-white border-gray-900' 
                    : 'bg-transparent text-gray-400 border-transparent hover:border-gray-200 hover:text-gray-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80 group">
              <input
                type="text"
                placeholder="Query by Location or Spec..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border-none py-4 pl-6 pr-12 text-[10px] font-bold tracking-widest uppercase focus:ring-1 focus:ring-emerald-500 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {searchTerm ? (
                  <button onClick={() => setSearchTerm('')}><FiX className="text-gray-400" /></button>
                ) : (
                  <FiSearch className="text-gray-300" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. The Grid: Staggered Architectural Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`${index % 2 !== 0 ? 'md:translate-y-24' : ''} group`}
                >
                  <Card
                    type="project"
                    title={project.title}
                    description={project.description}
                    image={project.images[0]}
                    tags={[project.category, project.location]}
                    link={`/projects/${project.slug}`}
                  />
                  <div className="mt-8 flex justify-between items-baseline border-b border-gray-50 pb-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-gray-300 mb-1">
                        ID_{String(project.id).toUpperCase().substring(0, 8)}
                      </span>
                      <h4 className="text-xs font-black uppercase tracking-tighter group-hover:text-emerald-600 transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 italic">
                      {project.location}
                    </span>
                  </div>
                </div>
              ))}

              {/* In-Grid Technical Callout */}
              <div className="hidden lg:flex flex-col justify-center p-12 bg-gray-50 border border-gray-100">
                <FiInfo className="text-emerald-500 text-3xl mb-6" />
                <h3 className="text-lg font-bold uppercase tracking-tighter mb-4">Structural Audit</h3>
                <p className="text-xs font-light text-gray-500 leading-relaxed mb-8">
                  Every project listed here has undergone a 48-hour moisture-intrusion test prior to handover.
                </p>
                
                <Link to="/services" className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-emerald-600 mt-4">
                  View Standards <FiArrowRight />
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-40 border-2 border-dashed border-gray-100">
              <h3 className="text-xs font-black text-gray-300 uppercase tracking-[0.5em]">No Technical Matches Found</h3>
            </div>
          )}
        </div>
      </section>
      
      {/* 4. The Monolith Stats */}
      <section className="bg-white py-32 border-t border-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {[
              { label: 'Units Delivered', value: '500+' },
              { label: 'States Active', value: '18' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Operational Years', value: '15' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-12 hover:bg-emerald-50 transition-colors group">
                <div className="text-6xl font-bold tracking-tighter mb-4 group-hover:text-emerald-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5. Final Call to Action */}
      <section className="py-40 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
              Ready to <br /> <span className="italic font-light text-gray-500">engineer?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
              <a href="/contact" className="group flex items-center gap-6 bg-emerald-600 text-white font-black py-8 px-20 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-gray-900 transition-all">
                Initiate Project <FiArrowRight className="group-hover:translate-x-3 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;