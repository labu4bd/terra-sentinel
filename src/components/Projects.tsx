import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects = ({ onSelectProject }: ProjectsProps) => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h3>
          </div>
          <button className="text-emerald-400 font-bold flex items-center gap-2 hover:text-emerald-300 transition-colors">
            View All Projects <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              onClick={() => onSelectProject(project)}
              className="group relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6 line-clamp-3">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                  Read Case Study <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
