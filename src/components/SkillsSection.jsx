import { Code2 } from 'lucide-react';

const SkillsSection = ({ skills }) => (
  <section id="about" className="py-24 px-6 relative z-10 border-t border-slate-800/50 bg-slate-950/30">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <Code2 className="text-sky-400" /> Technical Arsenal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-semibold text-slate-200 mb-4">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map(item => (
                <span key={item} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50 hover:bg-sky-500/10 hover:text-sky-400 hover:border-sky-500/30 transition-all cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
