import React from "react";
import { ExternalLink, Github, ArrowRight, Figma } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  designLink?: string;
  category: string;
  onViewDetails: () => void;
  hasDetails?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  demoLink,
  githubLink,
  designLink,
  category,
  onViewDetails,
  hasDetails = false,
}) => {
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent card click when clicking on links
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    if (hasDetails) {
      onViewDetails();
    }
  };

  return (
    <div
      className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 my-10 ${
        hasDetails ? "cursor-pointer" : ""
      }`}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
              {category}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {demoLink && (
              <a
                href={demoLink}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {designLink && (
              <a
                href={designLink}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Figma className="h-4 w-4" />
                Design
              </a>
            )}
          </div>

          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
