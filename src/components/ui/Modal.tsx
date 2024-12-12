import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 animate-fade-in z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-3xl w-full max-h-[80vh] overflow-y-auto relative transform transition-all hover:scale-[1.02]">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
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