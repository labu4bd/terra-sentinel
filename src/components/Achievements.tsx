import React from 'react';
import { Target, Users, Globe, Briefcase } from 'lucide-react';

const Achievements = () => {
  const stats = [
    { label: 'Success Projects', value: '250+', icon: <Target className="w-6 h-6" /> },
    { label: 'Expert Employees', value: '85+', icon: <Users className="w-6 h-6" /> },
    { label: 'International Projects', value: '15+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Years Experience', value: '12+', icon: <Briefcase className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Our Impact</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Results That Speak for Themselves</h3>
            <p className="text-slate-600 text-lg font-light mb-10 leading-relaxed">
              Terra Sentinel has consistently delivered high-impact geospatial solutions for governments, private enterprises, and international organizations. Our commitment to precision and innovation drives every success.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-emerald-600 mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=500" alt="Geospatial Intelligence" className="rounded-2xl shadow-lg w-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=300" alt="Data Analysis" className="rounded-2xl shadow-lg w-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400&h=300" alt="Aerial Mapping" className="rounded-2xl shadow-lg w-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=500" alt="Digital Innovation" className="rounded-2xl shadow-lg w-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
