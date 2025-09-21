import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsGallery from './components/ProjectsGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Skills />
      <ProjectsGallery />
      <Footer />
    </div>
  );
}

export default App;