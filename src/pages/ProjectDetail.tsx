import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ImageCarousel from '../components/ImageCarousel';
import VideoPlayer from '../components/VideoPlayer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const heroImages = project.images?.length ? project.images : [project.image];
  const hasVideos = project.videos && project.videos.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <div className="w-full h-[40vh] relative mb-8">
        <ImageCarousel 
          images={heroImages}
          className="w-full h-full"
          interval={4000}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mb-2"
            >
              {project.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-200 text-lg"
            >
              {project.category}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-600 mb-8">{project.description}</p>
            
            {project.software && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Software Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.software.map((sw) => (
                    <span
                      key={sw}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.images && project.images.length > 1 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Images</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.map((img, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={img} 
                        alt={`${project.title} progress ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasVideos && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.videos.map((video, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                      <VideoPlayer
                        url={video.url}
                        type={video.type}
                        className="w-full aspect-video"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;