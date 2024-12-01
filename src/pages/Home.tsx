import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-4">
        <h1 className="text-xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">ESPERSONNEL</span>
            <span className="block text-purple-600 items-center">3D ARTIST</span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Passionate about fluid simulations, constantly exploring new research to deepen my expertise and push the boundaries of visual effects
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div key={project.id} className="break-inside-avoid">
              <ProjectCard key={project.id} {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;