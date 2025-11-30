import React from 'react';
import { Project } from '../types';
import { Layers, Lightbulb, Zap, Code2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary-500/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/10 flex flex-col h-full">
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{project.overview}</p>
        </div>

        <div className="space-y-6 flex-grow">
          {/* Problem */}
          <div className="flex items-start gap-3">
            <div className="mt-1 min-w-[20px] text-red-400">
              <Layers size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">The Problem</h4>
              <p className="text-slate-400 text-sm">{project.problem}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="flex items-start gap-3">
            <div className="mt-1 min-w-[20px] text-primary-400">
              <Lightbulb size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">The Solution</h4>
              <p className="text-slate-400 text-sm">{project.solution}</p>
            </div>
          </div>

          {/* Impact */}
          <div className="flex items-start gap-3">
            <div className="mt-1 min-w-[20px] text-green-400">
              <Zap size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">The Impact</h4>
              <p className="text-slate-400 text-sm">{project.impact}</p>
            </div>
          </div>
        </div>
        
        {/* Technologies */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <div className="flex items-center gap-2 mb-3 text-slate-300">
            <Code2 size={16} />
            <span className="text-sm font-semibold">Technologies</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-slate-900 text-primary-400 text-xs font-medium rounded-full border border-slate-700"
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

export default ProjectCard;
