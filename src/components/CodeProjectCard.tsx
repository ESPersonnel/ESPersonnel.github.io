import React from 'react';
import { motion } from 'framer-motion';
import { CodeProject } from '../types/project';
import { Code2, Globe } from 'lucide-react';

interface CodeProjectCardProps extends CodeProject {
  index: number;
  onClick: () => void;
}

const CodeProjectCard: React.FC<CodeProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  index,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg bg-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      {image ? (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-gradient-to-br from-purple-500 to-blue-500" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeProjectCard;