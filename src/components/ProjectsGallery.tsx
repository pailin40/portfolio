import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Real-Time Data Pipeline Dashboard",
      description: "Built a comprehensive dashboard for monitoring data pipelines with real-time analytics and alerting. Features automated data quality checks and performance metrics visualization.",
      technologies: ["Python", "Apache Kafka", "React", "PostgreSQL", "Docker"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "https://example.com/pipeline-dashboard",
      githubLink: "https://github.com/phornpailin/pipeline-dashboard",
      category: "Data Engineering",
      hasDetails: true,
      detailedDescription: "A comprehensive real-time data pipeline monitoring system that processes millions of events daily. The dashboard provides instant visibility into data flow health, quality metrics, and system performance with automated alerting for anomalies.",
      features: [
        "Real-time data stream monitoring",
        "Automated data quality validation",
        "Performance metrics visualization",
        "Alert system for pipeline failures",
        "Historical trend analysis",
        "Multi-source data integration"
      ],
      challenges: [
        "Handling high-volume data streams with minimal latency",
        "Implementing efficient data quality checks without impacting performance",
        "Creating responsive visualizations for real-time data updates"
      ],
      timeline: "3 months",
      teamSize: "Solo project",
      role: "Full-stack Developer & Data Engineer"
    },
    {
      title: "E-Commerce Analytics Platform",
      description: "Developed a full-stack analytics platform for e-commerce data processing and visualization. Handles millions of transactions with automated reporting and business intelligence features.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "D3.js"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "https://example.com/analytics-platform",
      githubLink: "https://github.com/phornpailin/analytics-platform",
      category: "Full Stack",
      hasDetails: true,
      detailedDescription: "A comprehensive e-commerce analytics platform that transforms raw transaction data into actionable business insights. The system processes millions of transactions daily and provides real-time dashboards for business stakeholders.",
      features: [
        "Transaction data processing pipeline",
        "Customer behavior analytics",
        "Revenue and sales trend analysis",
        "Product performance metrics",
        "Automated report generation",
        "Interactive data visualizations"
      ],
      challenges: [
        "Scaling database queries for millions of transactions",
        "Optimizing real-time dashboard performance",
        "Implementing complex business logic for analytics calculations"
      ],
      timeline: "4 months",
      teamSize: "2 developers",
      role: "Lead Developer & System Architect"
    },
    {
      title: "Machine Learning Model Deployment",
      description: "Created an end-to-end ML pipeline with automated model training, validation, and deployment. Features A/B testing capabilities and performance monitoring.",
      technologies: ["Python", "Flask", "Scikit-learn", "Redis", "Kubernetes"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/phornpailin/ml-deployment",
      category: "Machine Learning"
    },
    {
      title: "Data Visualization Studio",
      description: "Interactive web application for creating custom data visualizations with drag-and-drop interface. Supports multiple data sources and export formats.",
      technologies: ["React", "TypeScript", "D3.js", "Express.js", "SQLite"],
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "https://example.com/viz-studio",
      githubLink: "https://github.com/phornpailin/viz-studio",
      category: "Data Visualization"
    },
    {
      title: "IoT Sensor Data Collector",
      description: "Built a scalable system for collecting and processing IoT sensor data with real-time streaming capabilities. Features automated anomaly detection and alert systems.",
      technologies: ["Python", "Apache Spark", "InfluxDB", "Grafana", "MQTT"],
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/phornpailin/iot-collector",
      category: "IoT & Data"
    },
    {
      title: "Task Management Web App",
      description: "Modern task management application with team collaboration features. Includes real-time updates, file sharing, and project timeline visualization.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "https://example.com/task-manager",
      githubLink: "https://github.com/phornpailin/task-manager",
      category: "Web Development"
    }
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of data engineering solutions and web applications that demonstrate 
            my passion for building scalable, user-focused technology solutions.
          </p>
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