import React from 'react';
import { X } from 'lucide-react';

interface MessageProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export function Message({ children, onClose }: MessageProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 animate-fade-in z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative transform transition-all hover:scale-[1.02]">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        )}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}