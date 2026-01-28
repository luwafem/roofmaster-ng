import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const Card = ({
  type = 'default',
  title,
  description,
  image,
  icon,
  link,
  tags = [],
  features = [],
  index = 0, // Used for the "01" enumeration effect
  className = ''
}) => {
  const baseClasses = "relative bg-white transition-all duration-700 ease-out group";

  const renderContent = () => {
    switch (type) {
      case 'service':
        return (
          <div className={`${baseClasses} border-l border-gray-100 p-10 hover:bg-gray-50 ${className}`}>
            {/* 1. Enumeration & Category */}
            <div className="flex justify-between items-start mb-16">
              <span className="font-mono text-[10px] text-gray-300 tracking-widest">
                / 0{index + 1}
              </span>
              <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                <FiPlus className="text-gray-300 group-hover:text-white group-hover:rotate-90 transition-all" />
              </div>
            </div>
            
            {/* 2. Visual Anchor */}
            <div className="mb-8 text-4xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:-translate-y-2">
              {icon}
            </div>
            
            {/* 3. Typography Stack */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tighter uppercase leading-none">
              {title}
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
              {description}
            </p>

            {/* 4. Feature Tags (Minimalist Inline) */}
            <div className="flex flex-wrap gap-2 mb-12">
              {features.map((f, i) => (
                <span key={i} className="text-[8px] font-black uppercase tracking-[0.2em] bg-gray-50 px-2 py-1 text-gray-400">
                  {f}
                </span>
              ))}
            </div>

            {/* 5. Minimal CTA */}
            {link && (
              <Link to={link} className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-900 overflow-hidden">
                <span className="relative">
                  Explore Spec
                  <span className="absolute bottom-0 left-0 w-full h-px bg-emerald-500 translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>
                <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform text-emerald-500" />
              </Link>
            )}
          </div>
        );

      case 'project':
        return (
          <div className={`${baseClasses} aspect-[3/4] overflow-hidden ${className}`}>
            {/* Image Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/60 transition-all duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between items-start text-white">
              <div className="flex flex-col gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="self-start bg-emerald-500/90 text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold tracking-tighter uppercase mb-4 leading-none">{title}</h3>
                {link && (
                  <Link to={link} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    View Archive <FiArrowRight className="text-emerald-400" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-10 border border-gray-100 bg-white">
            {title && <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{title}</h3>}
            {description && <p className="text-gray-500 font-light">{description}</p>}
          </div>
        );
    }
  };

  return renderContent();
};

export default Card;