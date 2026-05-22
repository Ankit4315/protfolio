import { Smartphone, Server, Code2, Github, PlayCircle } from 'lucide-react';

const ProjectsSection = ({ projects, onOpenPreview, github }) => (
  <section id="projects" className="py-24 px-6 relative z-10 border-t border-slate-800/50">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Smartphone className="text-purple-400" /> Featured Projects
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative flex flex-col bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10 h-full">
            
            <div className={`h-48 w-full shrink-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"></div>
                {project.type === 'Mobile' ? <Smartphone size={48} className="text-white/50 relative z-10 group-hover:scale-110 transition-transform duration-500" /> : 
                 project.type === 'Backend' ? <Server size={48} className="text-white/50 relative z-10 group-hover:scale-110 transition-transform duration-500" /> : 
                 <Code2 size={48} className="text-white/50 relative z-10 group-hover:scale-110 transition-transform duration-500" />}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">{project.type}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 pt-4">
                <button 
                  onClick={() => onOpenPreview(project)}
                  className="flex-1 flex items-center justify-center gap-2 bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 py-2 rounded-lg font-medium transition-all duration-300 text-sm border border-sky-500/20"
                >
                  <PlayCircle size={16} /> Live Preview
                </button>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
                  aria-label="View Source code"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
