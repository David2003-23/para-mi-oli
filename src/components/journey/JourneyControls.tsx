import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

interface JourneyControlsProps {
  onAdvance: () => void;
  onOpenLetter: () => void;
  showAdvanceButton: boolean;
  showLetterButton: boolean;
}

export function JourneyControls({ 
  onAdvance, 
  onOpenLetter, 
  showAdvanceButton, 
  showLetterButton 
}: JourneyControlsProps) {
  return (
    <div className="text-center mt-24 space-y-8">
      {showAdvanceButton && (
        <Button onClick={onAdvance} variant="primary" size="lg">
          <span className="flex items-center gap-3 text-lg">
            ¡Vamos!
            <MapPin className="inline-block group-hover:animate-bounce-custom" />
          </span>
        </Button>
      )}

      {showLetterButton && (
        <Button onClick={onOpenLetter} variant="secondary" size="lg">
          Abrir Carta
        </Button>
      )}
    </div>
  );
}