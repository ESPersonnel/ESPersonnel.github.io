import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Globe } from 'lucide-react';
import { CodeProject } from '../types/project';

interface ProjectModalProps {
  project: CodeProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden relative"
              >
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-1 rounded-full bg-black/10 hover:bg-black/20 transition-colors z-10"
                >
                  <X size={20} />
                </button>
                
                {project.image && (
                  <div className="w-full aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={20} />
                      View on GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <Globe size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;