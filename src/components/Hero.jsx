import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Hero = ({ portfolioData }) => (
  <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
    <div className="max-w-4xl mx-auto text-center z-10">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-sky-400 text-sm font-medium animate-pulse">
        Available for new opportunities
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500">{portfolioData.name}</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-8">
        {portfolioData.role}
      </h2>
      <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        {portfolioData.tagline} {portfolioData.about}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#projects" className="px-8 py-3.5 bg-sky-500 text-white font-medium rounded-xl hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 w-full sm:w-auto">
          View Projects
        </a>
        <a href="/final_resumw.pdf" download="Ankit-Dhakad-Resume.pdf" className="px-8 py-3.5 bg-slate-800 text-white font-medium rounded-xl border border-slate-700 hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
          <FileText size={18} /> Download Resume
        </a>
      </div>
      
      <div className="mt-16 flex items-center justify-center gap-6">
        <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
          <Github size={24} />
        </a>
        <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] hover:scale-110 transition-all">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
