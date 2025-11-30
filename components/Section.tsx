import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  lightBackground?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", lightBackground = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 ${lightBackground ? 'bg-slate-800/50' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-indigo-400">
              {title}
            </span>
            <div className="absolute w-24 h-1 bg-primary-500 bottom-[-10px] left-1/2 transform -translate-x-1/2 rounded-full opacity-70"></div>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;