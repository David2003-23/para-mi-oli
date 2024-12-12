import React from 'react';

interface RoadProgressProps {
  progress: number;
}

export function RoadProgress({ progress }: RoadProgressProps) {
  return (
    <div className="relative h-8">
      {/* Main road */}
      <div className="h-full bg-gray-800 rounded-full overflow-hidden shadow-lg">
        {/* Progress trail */}
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}