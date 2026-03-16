import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto py-10"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-slate-100 rounded-full transition-colors text-slate-900"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <div className="absolute bottom-6 left-6 md:hidden">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <div className="hidden md:block">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{project.title}</h2>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg font-light mb-8">
                  {project.fullDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Geospatial Intelligence</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Data-Driven Insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Satellite Analysis</span>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="mt-10 w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
