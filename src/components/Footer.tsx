import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Database } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-blue-400" />
                  <Code className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold">Phornpailin</h3>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Data Engineering Student & Web Developer passionate about building 
                scalable solutions that bridge the gap between complex data and intuitive user experiences.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200">Projects</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#skills" className="text-slate-300 hover:text-white transition-colors duration-200">Skills</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a 
                  href="mailto:Phornpailin04@outlook.com" 
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
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
                © 2025 Phornpailin. All rights reserved.
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