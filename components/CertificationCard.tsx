import React, { useState } from 'react';
import { Certification } from '../types';
import { ExternalLink, Award } from 'lucide-react';

interface CertificationCardProps {
  cert: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a 
      href={cert.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-primary-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300 flex flex-col items-center text-center h-full"
    >
      {/* 
         Badge Container Updates:
         1. bg-white: Makes logos pop and handles non-transparent images better.
         2. overflow-hidden: Clips the corners of square images so they don't stick out.
         3. rounded-2xl: Soft square shape.
         4. p-6: Adds breathing room so the logo isn't touching the edges.
      */}
      <div className="w-40 h-40 mb-8 relative flex items-center justify-center bg-white rounded-2xl p-6 border-4 border-slate-700 group-hover:border-primary-500 shadow-lg group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 overflow-hidden">
        {!imgError ? (
          <img 
            src={cert.image} 
            alt={`${cert.name} badge`}
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <Award size={64} className="text-slate-400" />
        )}
      </div>
      
      <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary-400 transition-colors">
        {cert.name}
      </h3>
      <p className="text-slate-400 text-base mb-6 font-medium">{cert.issuer}</p>
      
      <div className="mt-auto inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-primary-500 text-sm font-semibold group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
        Verify Credential <ExternalLink size={14} className="ml-2" />
      </div>
    </a>
  );
};

export default CertificationCard;