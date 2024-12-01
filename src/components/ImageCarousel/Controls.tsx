import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  onPrev: () => void;
  onNext: () => void;
  showControls: boolean;
}

const Controls: React.FC<ControlsProps> = ({ onPrev, onNext, showControls }) => {
  if (!showControls) return null;

  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
};

export default Controls;