import React from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate data engineering student with a love for creating innovative web solutions 
              and building systems that make complex data accessible and actionable.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Education & Focus
              </h3>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed text-center">
              Currently pursuing data engineering studies while actively building full-stack applications. 
              I specialize in creating end-to-end solutions that process and analyze data efficiently, 
              then present insights through intuitive, responsive web interfaces.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Data Engineering</span>
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium">Web Development</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;