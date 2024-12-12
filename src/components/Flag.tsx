import React from 'react';
import { Flag as FlagIcon } from 'lucide-react';

interface FlagProps {
  text: string;
  isActive: boolean;
  isCompleted: boolean;
}

export function Flag({ text, isActive, isCompleted }: FlagProps) {
  return (
    <div className={`absolute -top-24 text-center transition-all duration-500 transform
      ${isActive ? 'scale-110' : 'scale-100'}
      ${isCompleted ? 'text-green-600' : 'text-purple-600'}`}
    >
      <div className="relative">
        <FlagIcon 
          className={`w-8 h-8 mx-auto mb-2 transition-all duration-500
            ${isActive ? 'animate-bounce-custom' : ''}
            ${isCompleted ? 'text-green-600' : 'text-purple-600'}`}
        />
        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full
          ${isCompleted ? 'bg-green-600' : 'bg-purple-600'}
          ${isActive ? 'animate-pulse' : ''}`}
        />
      </div>
      <p className={`font-semibold mt-2 whitespace-nowrap transition-all duration-500
        ${isActive ? 'text-lg' : 'text-base'}
        ${isCompleted ? 'text-green-600' : 'text-purple-800'}`}>
        {text}
      </p>
    </div>
  );
}