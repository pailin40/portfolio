import { Code, Zap, Hammer } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Web Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Zap,
      title: "UI/UX Design",
      skills: ["Figma", "Wireframing & Prototyping", "Design Systems", "User Research", "Responsive Design"],
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Hammer,
      title: "Development Tools",
      skills: ["Git", "Node.js", "Vite"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white my-5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
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