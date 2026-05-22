import React from 'react';
import { Mail } from 'lucide-react';

const Navbar = ({ email }) => (
  <nav className="fixed top-0 w-full z-40 bg-slate-950/50 backdrop-blur-md border-b border-white/10 transition-all duration-300">
    <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      
      {}
      <div className="relative flex items-center justify-center w-16 h-10 group">
        <style>{`
          @keyframes snake-move {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-snake {
            stroke-dasharray: 30 70; /* Length of snake and gap */
            animation: snake-move 2s linear infinite;
          }
        `}</style>
        
        <svg viewBox="0 0 80 45" className="w-full h-full drop-shadow-[0_0_8px_rgba(56,189,248,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] transition-all duration-300">
          <defs>
            <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" /> {/* sky-400 */}
              <stop offset="50%" stopColor="#60a5fa" /> {/* blue-400 */}
              <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
            </linearGradient>
          </defs>
          
          {/* Base A letters - semi transparent slate */}
          <path d="M 15 35 L 25 10 L 35 35" fill="none" stroke="#334155" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Base D backbone */}
          <path d="M 45 10 L 45 35" fill="none" stroke="#334155" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Snake Track (Faint outline of where the snake travels) */}
          <path 
            d="M 20 22.5 L 30 22.5 C 40 22.5, 45 10, 55 10 C 70 10, 70 35, 55 35 C 45 35, 45 25, 50 25" 
            fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" pathLength="100" 
          />

          {/* Glowing Animated Snake Line */}
          <path 
            d="M 20 22.5 L 30 22.5 C 40 22.5, 45 10, 55 10 C 70 10, 70 35, 55 35 C 45 35, 45 25, 50 25" 
            fill="none" stroke="url(#snakeGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" pathLength="100"
            className="animate-snake"
          />
        </svg>
      </div>

      {}
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
        <a href="#resume" className="hover:text-sky-400 transition-colors">Resume</a>
      </div>
      
      {}
      <a href={`mailto:${email}`} className="px-4 py-2 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2">
        <Mail size={16} /> <span className="hidden sm:inline">Contact Me</span>
      </a>
    </div>
  </nav>
);

export default Navbar;
