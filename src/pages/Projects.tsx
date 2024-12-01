import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Projects</h1>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div key={project.id} className="break-inside-avoid">
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;