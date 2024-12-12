import React from 'react';
import { Flag as FlagIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FlagProps {
  text: string;
  isActive: boolean;
  isCompleted: boolean;
  position: 'start' | 'middle' | 'end';
}

export function Flag({ text, isActive, isCompleted, position }: FlagProps) {
  const positionClasses = {
    start: 'left-0',
    middle: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0'
  };

  return (
    <div className={cn(
      'absolute -top-48 text-center transition-all duration-500 transform',
      positionClasses[position],
      isActive ? 'scale-110' : 'scale-100'
    )}>
      {/* Flag Icon */}
      <div className="mb-6">
        <FlagIcon 
          className={cn(
            'w-12 h-12 mx-auto transition-all duration-500',
            isCompleted ? 'text-green-600' : 'text-purple-600'
          )}
        />
      </div>

      {/* Connection Point */}
      <div className="h-8 w-0.5 mx-auto bg-gray-300 mb-6" />

      {/* Point */}
      <div className={cn(
        'w-4 h-4 mx-auto rounded-full mb-6',
        isCompleted ? 'bg-green-600' : 'bg-purple-600'
      )} />

      {/* Text */}
      <p className={cn(
        'font-semibold whitespace-nowrap transition-all duration-500',
        isActive ? 'text-xl' : 'text-lg',
        isCompleted ? 'text-green-600' : 'text-purple-800'
      )}>
        {text}
      </p>
    </div>
  );
}