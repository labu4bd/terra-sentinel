import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const WorkProcess = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">How We Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Our Proven Methodology</h3>
            <p className="text-slate-600 text-lg font-light mb-10 leading-relaxed">
              We follow a structured, data-centric approach to ensure every project delivers maximum value and precision. Our process is designed for transparency and results.
            </p>
            <div className="space-y-8">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600 font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000&h=1000" 
                alt="Work Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Data Accuracy</div>
                </div>
              </div>
              <div className="text-sm text-slate-600 font-light">
                Rigorous validation protocols at every step.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
