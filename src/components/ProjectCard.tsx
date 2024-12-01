import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types/project';
import ImageCarousel from './ImageCarousel';

interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  images, 
  image, 
  category, 
  index,
  videos,
  aspectRatio = 4/3 // default aspect ratio
}) => {
  const [cardHeight, setCardHeight] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const projectImages = images?.length ? images : [image];

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardHeight(width / aspectRatio);
    }
  }, [aspectRatio]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg"
      style={{ height: cardHeight }}
    >
      <Link to={`/project/${id}`}>
        <div className="w-full h-full">
          <ImageCarousel 
            images={projectImages}
            className="w-full h-full"
            autoPlay={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p className="text-gray-200 text-sm">{category}</p>
            {videos && videos.length > 0 && (
              <p className="text-gray-200 text-xs mt-1">
                {videos.length} video{videos.length > 1 ? 's' : ''} available
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;