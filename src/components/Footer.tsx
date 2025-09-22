import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Database } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-blue-400" />
                  <Code className="h-6 w-6 text-teal-400" />
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Frontend Developer & UI/UX Designer studying at SAMK, Finland.
                Creating beautiful, user-centered digital experiences.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('projects')} 
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('skills')} 
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a 
                  href="mailto:Phornpailin04@outlook.com" 
                  className="relative group p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Email Phornpailin04@outlook.com"
                >
                  <Mail className="h-5 w-5" />
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-900 text-gray-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Phornpailin04@outlook.com
                  </span>
                </a>
                <a 
                  href="https://github.com/pailin40" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/phornpailin-lertudomkitpaisan/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2025 All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                Built with
                <Heart className="h-4 w-4 text-red-400 mx-1" />
                using React & TypeScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;