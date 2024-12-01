import React from 'react';

interface IndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const Indicators: React.FC<IndicatorsProps> = ({ total, current, onSelect }) => {
  if (total <= 1) return null;
  
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`w-2 h-2 rounded-full transition-colors duration-300 
            ${i === current ? 'bg-white' : 'bg-white/50'}`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default Indicators;