import React from 'react';
import { motion } from 'framer-motion';

interface ImageSlideProps {
  src: string;
  alt: string;
  direction: number;
  className?: string;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ src, alt, direction, className = "" }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ x: direction * 100 + '%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction * -100 + '%', opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  );
};

export default ImageSlide;