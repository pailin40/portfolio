import React from 'react';
import { Github, Linkedin, Mail, Database, Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Database className="h-8 w-8 text-blue-400" />
            <Code className="h-8 w-8 text-teal-400" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-300 bg-clip-text text-transparent">
            Phornpailin
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Data Engineering Student & Web Developer
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable data solutions and creating intuitive web experiences. 
            Bridging the gap between complex data systems and user-friendly interfaces.
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </a>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:phornpailin@example.com" 
                className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;