import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, FileText, Code2, Smartphone, Server, X, PlayCircle } from 'lucide-react';

const PORTFOLIO_DATA = {
  name: "Ankit Dhakad",
  role: "Full Stack & Mobile Developer",
  tagline: "Engineering enterprise-level scalable web & mobile applications.",
  about: "Passionate and detail-oriented developer with 1.4+ years of experience specializing in Flutter, React.js, Node.js, and scalable backend architectures. I build secure, high-performance solutions.",
  email: "ankit.dhakad0001@gmail.com",
  github: "https://www.github.com/Ankit4315",
  linkedin: "https://www.linkedin.com/in/ankit-dhakad-173076241",
  skills: [
    { category: "Languages", items: ["Python", "JavaScript", "Dart", "C", "SQL"] },
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"] },
    { category: "Mobile", items: ["Flutter", "Riverpod", "Deep Linking"] },
    { category: "Tools", items: ["Git", "Firebase", "Azure Blob", "Postman", "Docker"] }
  ],
  projects: [
    {
      id: 1,
      title: "Enterprise Property Platform",
      description: "A scalable backend handling core property, tenant, and cash-collection workflows for 100+ properties.",
      tech: ["Node.js", "Express", "MongoDB", "Google Gemini AI"],
      type: "Backend",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Field Operations App",
      description: "Modular mobile app utilizing Riverpod for state management, implementing RBAC and dynamic PDF generation.",
      tech: ["Flutter", "Dart", "Firebase", "Riverpod"],
      type: "Mobile",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Amazon Clone (MERN)",
      description: "Full-stack e-commerce application implementing full CRUD operations and secure user management.",
      tech: ["React.js", "Redux", "Node.js", "Express"],
      type: "Full Stack",
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 4,
      title: "AnkTalk",
      description: "A responsive and intuitive cross-platform mobile communication application with real-time features.",
      tech: ["Flutter", "Node.js", "WebSockets"],
      type: "Mobile",
      color: "from-orange-400 to-red-500"
    }
  ]
};

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`; // Tailwind sky-400
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numParticles = Math.min(window.innerWidth / 15, 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0f172a'); // slate-900
      gradient.addColorStop(1, '#020617'); // slate-950
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Connect nearby particles
        for (let j = index; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 - distance/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

const ProjectPreviewModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
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

        {/* Modal Content - Fake Browser/Device View */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-950 flex items-center justify-center relative group">
          {/* Simulated App View */}
          <div className={`w-full h-full min-h-[400px] rounded-xl bg-gradient-to-br ${project.color} p-1 opacity-80 flex flex-col`}>
             <div className="bg-slate-900 w-full h-full rounded-lg flex flex-col items-center justify-center p-8 text-center shadow-inner relative overflow-hidden">
                
                {/* Decorative background elements for preview */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

                {project.type === 'Mobile' ? <Smartphone size={64} className="text-slate-400 mb-4" /> : 
                 project.type === 'Backend' ? <Server size={64} className="text-slate-400 mb-4" /> : 
                 <Code2 size={64} className="text-slate-400 mb-4" />}
                
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-400 max-w-md mx-auto mb-6">Interactive preview is currently in development mode. In a production environment, an iframe or interactive WebGL canvas would render here.</p>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-200 backdrop-blur-sm border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-end gap-3">
          <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className="px-4 py-2 flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            <Github size={16} /> View Source
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-40 bg-slate-950/50 backdrop-blur-md border-b border-white/10 transition-all duration-300">
    <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 tracking-tight">
        AD.
      </span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
        <a href="#resume" className="hover:text-sky-400 transition-colors">Resume</a>
      </div>
      <a href={`mailto:${PORTFOLIO_DATA.email}`} className="px-4 py-2 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2">
        <Mail size={16} /> <span className="hidden sm:inline">Contact Me</span>
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
    <div className="max-w-4xl mx-auto text-center z-10">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-sky-400 text-sm font-medium animate-pulse">
        Available for new opportunities
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500">{PORTFOLIO_DATA.name}</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-8">
        {PORTFOLIO_DATA.role}
      </h2>
      <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        {PORTFOLIO_DATA.tagline} {PORTFOLIO_DATA.about}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#projects" className="px-8 py-3.5 bg-sky-500 text-white font-medium rounded-xl hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 w-full sm:w-auto">
          View Projects
        </a>
        <a href="#resume" className="px-8 py-3.5 bg-slate-800 text-white font-medium rounded-xl border border-slate-700 hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
          <FileText size={18} /> Download Resume
        </a>
      </div>
      
      <div className="mt-16 flex items-center justify-center gap-6">
        <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
          <Github size={24} />
        </a>
        <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] hover:scale-110 transition-all">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 relative z-10 border-t border-slate-800/50 bg-slate-950/30">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <Code2 className="text-sky-400" /> Technical Arsenal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
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

const Projects = ({ onOpenPreview }) => (
  <section id="projects" className="py-24 px-6 relative z-10 border-t border-slate-800/50">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Smartphone className="text-purple-400" /> Featured Projects
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.projects.map((project) => (
          <div key={project.id} className="group relative flex flex-col bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10 h-full">
            
            {/* Visual Thumbnail representation using gradients */}
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
                  href={PORTFOLIO_DATA.github} 
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

const Resume = () => (
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
          <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-center gap-2 group">
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            Download Resume (PDF)
          </button>
          <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 flex items-center justify-center gap-2">
            <ExternalLink size={18} /> Visit LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

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
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects onOpenPreview={(project) => setSelectedProject(project)} />
        <Resume />
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
        />
      )}
    </div>
  );
}