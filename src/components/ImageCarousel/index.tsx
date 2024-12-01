import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ImageSlide from './ImageSlide';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  autoPlay?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
  className = "",
  autoPlay = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, autoPlay]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false} mode="wait">
        <ImageSlide
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          direction={direction}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;