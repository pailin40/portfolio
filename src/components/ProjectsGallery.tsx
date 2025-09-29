import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import portfolio1 from "./images/portfolio1.png";
import portfolio2 from "./images/portfolio2.png";
import portfolio3 from "./images/portfolio3.png";

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Thai Embassy Helsinki Website Redesign",
      description:
        "A comprehensive redesign of the government website, focusing on improved user experience, accessibility, and modern aesthetics.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Figma",
        "Prototyping",
        "Design Systems",
      ],
      image: portfolio3,
      demoLink: "https://thai-embassy-helsinki-redesign.netlify.app/",
      githubLink: "https://github.com/pailin40/thai-embassy-helsinki",
      designLink:
        "https://www.figma.com/design/MWZnwrW96dAZS4JfEMYOkT/thai-embassy-redesign?node-id=0-1&p=f&t=Y3QhPbQoIW0POjUJ-0",
      category: "UX/UI Design, Frontend",
      hasDetails: true,
      detailedDescription:
        "Thai Embassy Helsinki Website Redesign is a project focused on both interface design and frontend development. Starting with wireframes, I refined layouts and user flows, making improvements during coding to achieve a more visually appealing and intuitive experience. The main goal was to create a user-friendly site that enhances accessibility and navigation for everyone, while preserving the official tone and branding required for a government platform.",
      features: [
        "Modern, clean design with improved navigation",
        "Responsive layout for various devices",
        "Enhanced accessibility features",
        "Clear information architecture",
      ],
      challenges: [
        "Balancing modern design with official government tone",
        "Simplifying complex content from the original site, turning a maze-like experience into a user-friendly platform.",
        "Prioritizing clear information architecture to avoid user confusion and ensure essential details are easy to find.",
        "Designing features and layouts so that navigation feels intuitive and all pages remain focused and informativey",
      ],
      timeline: "2 weeks",
      role: "Frontend, UX/UI Design",
    },
    {
      title: "Cassette Flow",
      description:
        "A retro-themed music streaming interface inspired by cassette tapes. A frontend project focused on creating an immersive user experience with nostalgic design elements and smooth interactions.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: portfolio1,
      demoLink: "https://pailin40.github.io/cassetteflow/",
      githubLink: "https://github.com/pailin40/cassetteflow",
      category: "Frontend",
      hasDetails: true,
      detailedDescription:
        "Cassette Flow is a frontend-focused project that recreates the nostalgic experience of cassette tapes in a modern music streaming interface. The project emphasizes UI/UX design, smooth animations, and responsive layouts while maintaining the retro aesthetic of classic audio equipment.",
      features: [
        "Cassette-inspired player",
        "Responsive designs",
        "Full music interface (Home, Search, Library)",
        "Modern UI with retro aesthetics",
      ],
      timeline: "4 weeks",
      role: "Frontend & UI/UX Design",
    },
    {
      title: "Pocket Banking App",
      description:
        "A mobile banking UX/UI design featuring smart money organization through spending pockets, each with individual virtual cards for targeted budget control and financial discipline.",
      technologies: [
        "Figma",
        "UI/UX Design",
        "Prototyping",
        "Design Systems",
        "User Research",
      ],
      image: portfolio2,
      designLink:
        "https://www.figma.com/design/h4fkNhIxMIuVcBfQScbLJS/mobile-bank-app?t=Y3QhPbQoIW0POjUJ-0",
      category: "UX/UI Design",
      hasDetails: true,
      detailedDescription:
        "Pocket Banking App enhances personal finance management through a unique pocket-based system. Users can allocate funds from their main account into specialized spending categories (rent, savings, travel) and receive individual virtual cards for each pocket, ensuring spending stays within designated budgets and preventing financial overflow between categories.",
      features: [
        "Multi-pocket money allocation system",
        "Individual virtual cards per spending pocket",
        "Instant peer-to-peer money transfers",
        "Interactive spending analytics dashboard",
      ],
      challenges: [
        "Steep learning curve with Figma as my first major design tool",
        "Uncertainty about project scope and detail requirements cause the extension of wireframing",
        "Balancing feature with interface simplicity",
      ],
      timeline: "3 weeks",
      role: "UX/UI Design",
    },

    // without big screen detail
    // {
    //   title: "Machine Learning Model Deployment",
    //   description: "Created an end-to-end ML pipeline with automated model training, validation, and deployment. Features A/B testing capabilities and performance monitoring.",
    //   technologies: ["Python", "Flask", "Scikit-learn", "Redis", "Kubernetes"],
    //   image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   githubLink: "https://github.com/phornpailin/ml-deployment",
    //   category: "Machine Learning"
    // }
  ];

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default ProjectsGallery;
