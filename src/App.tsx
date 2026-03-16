/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <Services />
      <WorkProcess />
      <Projects onSelectProject={setSelectedProject} />
      <Achievements />
      <Footer />
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
