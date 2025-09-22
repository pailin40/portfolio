import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-10">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-300 bg-clip-text text-transparent">
            Phornpailin
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
          Frontend Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Frontend developer and UI/UX designer passionate about turning ideas into user-friendly digital experiences. 
            I like seeing my ideas come to life on screen.        

          </p>
          
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-4">
              <a 
                href="mailto:Phornpailin04@outlook.com" 
                className="relative group p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110"
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
                className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/phornpailin-lertudomkitpaisan/" 
                target="_blank"
                rel="noopener noreferrer"
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