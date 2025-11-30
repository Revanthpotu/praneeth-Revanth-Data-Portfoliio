import React from 'react';
import { Experience } from '../types';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, isLast }) => {
  return (
    <div className="flex gap-4 md:gap-8 relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] md:left-[23px] top-12 bottom-[-48px] w-0.5 bg-slate-700"></div>
      )}
      
      {/* Icon */}
      <div className="relative z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 border-2 border-primary-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.3)]">
          <Briefcase size={20} className="text-primary-400" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-100">{experience.title}</h3>
              <p className="text-primary-400 font-medium">{experience.company}</p>
            </div>
            <div className="flex items-center text-slate-400 text-sm bg-slate-900/50 px-3 py-1 rounded-full w-fit">
              <Calendar size={14} className="mr-2" />
              {experience.date}
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                <CheckCircle2 size={18} className="text-primary-500 mt-1 min-w-[18px]" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
