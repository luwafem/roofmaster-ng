import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              {item.isCurrent ? (
                <span className="text-blue-700 font-semibold">{item.label}</span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;                       