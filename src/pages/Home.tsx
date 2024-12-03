import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import CodeProjectCard from '../components/CodeProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';
import { codeProjects } from '../data/codeProjects';
import { CodeProject } from '../types/project';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<CodeProject | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: CodeProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-4">
        <h1 className="text-xl font-bold text-gray-900 sm:text-5xl md:text-6xl font-marmalade">
            <span className="block">ESPERSONNEL</span>
            <span className="block text-purple-600 items-center">3D ARTIST</span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Passionate about fluid simulations, constantly exploring new research to deepen my expertise and push the boundaries of visual effects
          </p>
        </div>


        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-marmalade">3D Projects</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {projects.map((project, index) => (
              <div key={project.id} className="break-inside-avoid">
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-marmalade">Code Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codeProjects.map((project, index) => (
              <CodeProjectCard
                key={project.id}
                {...project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

export default Home;