import React from 'react';
import { X, ExternalLink, Github, Calendar, Users, Target } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoLink?: string;
    githubLink?: string;
    category: string;
    detailedDescription?: string;
    features?: string[];
    challenges?: string[];
    timeline?: string;
    role?: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/30 transition-all duration-200"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
              {project.category}
            </span>
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {project.detailedDescription || project.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {project.timeline && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Timeline</div>
                  <div className="text-gray-600">{project.timeline}</div>
                </div>
              </div>
            )}
            
            
            {project.role && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">My Role</div>
                  {/* <div className="text-gray-600">{project.role}</div> */}
                  <div className="text-gray-600 whitespace-nowrap">{project.role}</div>
                </div>
              </div>
            )}
          </div>
          
          {project.features && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {project.challenges && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            {project.demoLink && (
              <a 
                href={project.demoLink}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;