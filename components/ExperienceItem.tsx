import React from 'react';
import { Experience, AchievementCard } from '../types';
import { 
  Briefcase, Calendar, CheckCircle2, MapPin, Building2,
  Sparkles, Zap, Activity, Database, Layers, GitBranch, Cloud
} from 'lucide-react';

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={18} className="text-primary-400" />,
  Zap: <Zap size={18} className="text-primary-400" />,
  Activity: <Activity size={18} className="text-primary-400" />,
  Database: <Database size={18} className="text-primary-400" />,
  Layers: <Layers size={18} className="text-primary-400" />,
  GitBranch: <GitBranch size={18} className="text-primary-400" />,
  Cloud: <Cloud size={18} className="text-primary-400" />,
  CheckCircle2: <CheckCircle2 size={18} className="text-primary-400" />,
};

const AchievementCardBlock: React.FC<{ card: AchievementCard }> = ({ card }) => (
  <div className="bg-slate-900/60 p-4 md:p-5 rounded-xl border border-slate-700 hover:border-primary-500/40 transition-colors">
    <div className="flex items-start justify-between mb-2 gap-3">
      <div className="flex items-center gap-2">
        {iconMap[card.icon] || <CheckCircle2 size={18} className="text-primary-400" />}
        <h4 className="text-sm md:text-base font-semibold text-slate-100">{card.title}</h4>
      </div>
      <span className="px-2.5 py-1 bg-primary-500/10 text-primary-300 text-xs font-medium rounded-md border border-primary-500/30 whitespace-nowrap">
        {card.metric}
      </span>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
  </div>
);

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, isLast }) => {
  const useCards = !!(experience.achievementCards && experience.achievementCards.length > 0);

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
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-100">{experience.title}</h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                <div className="flex items-center gap-1.5">
                  <Building2 size={14} className="text-slate-500" />
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Employer</span>
                  <span className="text-primary-400 font-semibold">{experience.company}</span>
                </div>
                {experience.client && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Client</span>
                    <span className="text-slate-200 font-medium">{experience.client}</span>
                  </div>
                )}
                {experience.location && (
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <MapPin size={12} />
                    {experience.location}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center text-slate-400 text-sm bg-slate-900/50 px-3 py-1 rounded-full w-fit whitespace-nowrap">
              <Calendar size={14} className="mr-2" />
              {experience.date}
            </div>
          </div>

          {/* Summary (optional) */}
          {experience.summary && (
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              {experience.summary}
            </p>
          )}

          {/* Achievement Cards OR Bullet List */}
          {useCards ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {experience.achievementCards!.map((card, idx) => (
                <AchievementCardBlock key={idx} card={card} />
              ))}
            </div>
          ) : (
            <ul className="space-y-3 mb-6">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                  <CheckCircle2 size={18} className="text-primary-500 mt-1 min-w-[18px]" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
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
