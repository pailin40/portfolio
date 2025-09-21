import React from 'react';
import { Database, Code, Brain, Cloud, BarChart3, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["Python", "Apache Spark", "Kafka", "PostgreSQL", "MongoDB", "Redis"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Code,
      title: "Web Development",
      skills: ["React", "TypeScript", "Node.js", "Express.js", "HTML/CSS", "Tailwind CSS"],
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Jupyter", "MLOps"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      skills: ["D3.js", "Plotly", "Matplotlib", "Tableau", "Power BI", "Grafana"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Zap,
      title: "Tools & Frameworks",
      skills: ["Flask", "FastAPI", "Apache Airflow", "Elasticsearch", "Prometheus", "Nginx"],
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expertise spanning data engineering, web development, and machine learning technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-blue-300 hover:text-blue-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;