import { ExternalLink, Download, FileText } from 'lucide-react';

const ResumeSection = ({ linkedin }) => (
  <section id="resume" className="py-24 px-6 relative z-10 border-t border-slate-800/50 bg-slate-900/30">
    <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
          <FileText className="text-sky-400" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Ready to collaborate?</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Take a look at my complete resume to see detailed work history, education, and achievements across Full Stack and Mobile development.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/final_resumw.pdf" download="Ankit-Dhakad-Resume.pdf" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-center gap-2 group">
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            Download Resume (PDF)
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 flex items-center justify-center gap-2">
            <ExternalLink size={18} /> Visit LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeSection;
