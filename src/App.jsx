import React, { useState, useEffect } from 'react';
import ResumeSection from './components/ResumeSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AnimatedBackground from './components/AnimatedBackground';
import ProjectPreviewModal from './components/ProjectPreviewModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PORTFOLIO_DATA from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-sky-500/30 selection:text-sky-200">
      <AnimatedBackground />
      <Navbar email={PORTFOLIO_DATA.email} />
      
      <main>
        <Hero portfolioData={PORTFOLIO_DATA} />
        <SkillsSection skills={PORTFOLIO_DATA.skills} />
        <ProjectsSection projects={PORTFOLIO_DATA.projects} onOpenPreview={(project) => setSelectedProject(project)} github={PORTFOLIO_DATA.github} />
        <ResumeSection linkedin={PORTFOLIO_DATA.linkedin} />
      </main>

      <footer className="py-8 text-center border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-sm relative z-10">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React & Tailwind.
        </p>
      </footer>

      {/* Render Modal if a project is selected */}
      {selectedProject && (
        <ProjectPreviewModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          github={PORTFOLIO_DATA.github}
        />
      )}
    </div>
  );
}