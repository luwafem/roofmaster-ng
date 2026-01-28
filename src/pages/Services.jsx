import React from 'react';
import Layout from '../components/layout/Layout';
import SeoHead from '../components/shared/SeoHead';
import Card from '../components/ui/Card';
import { services, faqs } from '../data/roofingData';
import { FiArrowRight, FiPlus, FiMinus, FiCpu, FiShield, FiWind } from 'react-icons/fi';

const Services = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <Layout>
      <SeoHead
        title="Engineering Services | RoofMaster Nigeria"
        description="Architectural roofing solutions. Industrial, residential, and technical maintenance engineered for the West African climate."
      />
      
      {/* 1. The Gallery Header */}
      <section className="relative pt-40 pb-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-emerald-500"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600">Solutions Archive</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-8 leading-[0.85]">
                Systems <br /> 
                <span className="font-light italic text-gray-400">Integrated.</span>
              </h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xl">
                From high-span industrial warehouses to minimalist residential villas, we provide the structural shell that defines the project's longevity.
              </p>
            </div>
            <div className="hidden lg:block pb-4">
              <div className="flex gap-10">
                {[
                  { label: 'Thermal Efficiency', icon: <FiCpu /> },
                  { label: 'Wind Load Certified', icon: <FiWind /> },
                  { label: 'Weather-Tight', icon: <FiShield /> }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl text-emerald-500 mb-2 flex justify-center">{item.icon}</div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-gray-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. Grid System */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {services.map((service, index) => (
              <Card
                key={service.id}
                type="service"
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                link={`/services/${service.slug}`}
                className="bg-white"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. The Protocol: Vertical Timeline */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-10">Installation Protocol</h2>
              <h3 className="text-5xl font-bold tracking-tighter mb-12">Precision at <br/><span className="italic font-light text-gray-500">every millimetre.</span></h3>
              <p className="text-gray-400 font-light text-lg mb-12">Our methodology is borrowed from aeronautical precision—ensuring every fastener and seal is accounted for in our digital audit.</p>
              
              <button className="group flex items-center gap-6 border border-white/20 px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-gray-900 transition-all">
                Download Specs <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="space-y-0">
              {[
                { step: '01', title: 'Topographic Analysis', detail: 'Using LiDAR and manual drone surveys to map structural load points.' },
                { step: '02', title: 'Material Engineering', detail: 'Selecting gauge and coating based on coastal vs. inland humidity.' },
                { step: '03', title: 'Certified Assembly', detail: 'Rapid installation by IRATA and HSE certified technicians.' },
                { step: '04', title: 'Post-Project Audit', detail: 'Final infrared leak-detection sweep and 10-year certification.' },
              ].map((item, i) => (
                <div key={i} className="group border-b border-white/5 py-10 flex gap-8">
                  <span className="text-emerald-500 font-mono text-xs">{item.step}</span>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tighter mb-4">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm group-hover:text-gray-300 transition-colors">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-xs font-black uppercase tracking-[0.6em] text-gray-400 mb-6">Frequently Asked</h2>
              <p className="text-4xl font-bold tracking-tighter text-gray-900">Technical Briefings.</p>
            </div>
            
            <div className="space-y-0 border-t border-gray-100">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 py-8">
                  <button
                    className="flex justify-between items-center w-full text-left group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className={`text-lg font-bold tracking-tight transition-colors ${openFaq === index ? 'text-emerald-600' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-500 ${openFaq === index ? 'rotate-180 text-emerald-600' : 'text-gray-300'}`}>
                      <FiMinus />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-500 text-md font-light leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. Minimalist CTA */}
      <section className="py-40 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-gray-900 mb-16">
            Ready to <br /><span className="italic font-light text-gray-400">Collaborate?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <a href="/contact" className="group flex items-center gap-6 bg-gray-900 text-white font-black py-8 px-16 text-xs uppercase tracking-[0.4em] hover:bg-emerald-600 transition-all">
              Initiate Estimate <FiArrowRight className="group-hover:translate-x-3 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;