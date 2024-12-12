import React from 'react';

interface CarProps {
  position: number;
}

export function Car({ position }: CarProps) {
  return (
    <div 
      className="absolute -top-12 transition-all duration-1000 transform hover:scale-110"
      style={{ 
        left: `${(position / 2) * 100}%`,
        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
      }}
    >
      <div className="relative w-20 h-20">
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full text-red-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 17h14v-5H5v5zm11.5-13.5L19 7h-3l-2.5-3.5h3zm-8 0L11 7H8L5.5 3.5h3zM8 7h8l2.5 5H5.5L8 7z" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full filter blur-sm"></div>
      </div>
    </div>
  );
}