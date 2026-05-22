import React from 'react';
import { Github, X, Smartphone, Server, Code2 } from 'lucide-react';

const ProjectPreviewModal = ({ project, onClose, github }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <h3 className="text-slate-200 font-medium ml-2">{project.title} - Live Preview</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 bg-slate-950 flex items-center justify-center relative group">
          <div className={`w-full h-full min-h-[400px] rounded-xl bg-gradient-to-br ${project.color} p-1 opacity-80 flex flex-col`}>
            <div className="bg-slate-900 w-full h-full rounded-lg flex flex-col items-center justify-center p-8 text-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

              {project.type === 'Mobile' ? (
                <Smartphone size={64} className="text-slate-400 mb-4" />
              ) : project.type === 'Backend' ? (
                <Server size={64} className="text-slate-400 mb-4" />
              ) : (
                <Code2 size={64} className="text-slate-400 mb-4" />
              )}

              <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-slate-400 max-w-md mx-auto mb-6">
                Interactive preview is currently in development mode. In a production environment, an iframe or interactive WebGL canvas would render here.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-200 backdrop-blur-sm border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-end gap-3">
          <a href={github} target="_blank" rel="noreferrer" className="px-4 py-2 flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            <Github size={16} /> View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewModal;
