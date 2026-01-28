import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SeoHead from '../components/shared/SeoHead';
import { services, projects } from '../data/roofingData';
import { FiArrowRight, FiShield, FiFileText, FiAward, FiArrowLeft } from 'react-icons/fi';

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-40 text-center font-mono">
          <h1 className="text-sm tracking-[0.5em] uppercase text-gray-400">Error 404 // Service_Not_Found</h1>
          <Link to="/services" className="mt-12 inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-gray-900 text-white px-8 py-4">
            <FiArrowLeft /> Return to Index
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProjects = projects.filter(p => 
    p.category.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])
  ).slice(0, 3);

  return (
    <Layout>
      <SeoHead title={`${service.title} | Engineering Specifications`} description={service.metaDescription} />

      {/* 1. Header: The Specification Lead */}
      <section className="bg-white pt-40 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-gray-100 pb-20">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-10">
                <span className="w-10 h-px bg-emerald-500"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600">
                  Technical Division / {service.id}
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-gray-900 mb-10 leading-[0.85]">
                {service.title.split(' ')[0]} <br />
                <span className="font-light italic text-gray-400 underline decoration-emerald-50 decoration-4 underline-offset-8">
                  {service.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-2xl text-gray-500 font-light max-w-2xl leading-relaxed italic">
                {service.longDescription}
              </p>
            </div>
            
            {/* Corner Stat Badge */}
            <div className="hidden lg:block bg-gray-50 p-8 border border-gray-100">
              <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400 mb-4">Availability</span>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold uppercase tracking-widest">Across All 36 States</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Technical Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left: Component Breakdown */}
            <div className="lg:col-span-7">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-16 italic underline decoration-emerald-500/30 underline-offset-8 decoration-4">
                Core System Components
              </h2>
              
              <div className="space-y-0 border-t border-gray-100">
                {service.features.map((feature, index) => (
                  <div key={index} className="group flex items-start gap-10 py-12 border-b border-gray-100 hover:bg-gray-50/50 transition-all px-4">
                    <span className="font-mono text-[10px] text-emerald-500 pt-1">0{index + 1} //</span>
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold uppercase tracking-tighter text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {feature.split(':')[0]}
                      </h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">
                        Precision-engineered application ensuring maximum structural compliance and moisture barrier protection.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Blueprint / Technical Detail Block */}
              <div className="mt-24 p-12 bg-gray-900 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl grayscale group-hover:opacity-20 transition-opacity">
                  <FiFileText />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-8">Structural Compliance</h3>
                <p className="text-xl font-light text-gray-300 leading-relaxed mb-10 max-w-lg">
                  Every {service.title.toLowerCase()} project is audited against wind-uplift pressures and thermal expansion coefficients typical of the <span className="text-white font-bold underline decoration-emerald-500">West African corridor.</span>
                </p>
                <div className="flex items-center gap-10 text-[9px] font-black uppercase tracking-widest text-gray-500">
                  <span className="flex items-center gap-2"><FiShield className="text-emerald-500" /> CORBON AUDITED</span>
                  <span className="flex items-center gap-2"><FiAward className="text-emerald-500" /> HSE CERTIFIED</span>
                </div>
              </div>
            </div>

            {/* Right: Sticky Sidebar Console */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-16">
                
                {/* Inquiry Terminal */}
                <div className="bg-white border border-gray-900 p-10 shadow-[20px_20px_0px_0px_rgba(16,185,129,0.1)]">
                  <h3 className="text-2xl font-bold tracking-tighter uppercase mb-6 leading-none">
                    Request <br /> Specification.
                  </h3>
                  <p className="text-gray-500 text-xs font-light mb-10 uppercase tracking-[0.2em] leading-loose">
                    Download technical CAD drawings or request a material estimate for your site.
                  </p>
                  <div className="space-y-4">
                    <Link to="/contact" className="flex items-center justify-between bg-gray-900 text-white px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all group">
                      Consult an Engineer <FiArrowRight className="group-hover:translate-x-3 transition-transform" />
                    </Link>
                    <a href="tel:+23400000000" className="flex items-center justify-center border border-gray-100 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-gray-900 transition-colors">
                      Quick Hotline
                    </a>
                  </div>
                </div>

                {/* Related Works Grid */}
                {relatedProjects.length > 0 && (
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-10">Application Archive</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {relatedProjects.map(project => (
                        <Link key={project.id} to={`/projects/${project.slug}`} className="group flex items-center bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 p-4 transition-all overflow-hidden">
                          <div className="w-20 h-20 bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                            <img src={project.images[0]} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform" />
                          </div>
                          <div className="ml-6">
                            <h4 className="text-xs font-black text-gray-900 uppercase tracking-tighter leading-none mb-2">{project.title}</h4>
                            <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest">{project.location}</span>
                          </div>
                          <FiArrowRight className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-emerald-500" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetails;