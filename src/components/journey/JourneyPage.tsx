import React, { useState, useEffect } from 'react';
import { Flag } from './Flag';
import { Car } from './Car';
import { Modal } from '../ui/Modal';
import { JourneyControls } from './JourneyControls';
import { RoadProgress } from './RoadProgress';

const LOCATIONS = {
  CARTAGENA: 0,
  CARTA_JUAN: 1,
  FAMILY: 2,
} as const;

export function JourneyPage() {
  const [currentPosition, setCurrentPosition] = useState(LOCATIONS.CARTAGENA);
  const [showLetter, setShowLetter] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentPosition / 2) * 100);
    if (currentPosition !== LOCATIONS.CARTA_JUAN) {
      setShowLetter(false);
    }
  }, [currentPosition]);

  const handleAdvance = () => {
    if (currentPosition < LOCATIONS.FAMILY) {
      setCurrentPosition(prev => prev + 1);
      if (currentPosition === LOCATIONS.FAMILY - 1) {
        setShowFinalMessage(true);
      }
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center p-12 bg-fixed"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1492373202761-6c2644d4c83d?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md p-16 rounded-3xl shadow-2xl">
          <div className="relative space-y-40">
            {/* Flags */}
            <div className="relative h-64">
              <Flag 
                text="Cartagena" 
                isActive={currentPosition === LOCATIONS.CARTAGENA}
                isCompleted={currentPosition > LOCATIONS.CARTAGENA}
                position="start"
              />
              
              <Flag 
                text="Carta Juan" 
                isActive={currentPosition === LOCATIONS.CARTA_JUAN}
                isCompleted={currentPosition > LOCATIONS.CARTA_JUAN}
                position="middle"
              />
              
              <Flag 
                text="Mi Familia" 
                isActive={currentPosition === LOCATIONS.FAMILY}
                isCompleted={currentPosition === LOCATIONS.FAMILY}
                position="end"
              />
            </div>

            {/* Road with progress */}
            <div className="relative h-24">
              <RoadProgress progress={progress} />
              <Car position={currentPosition} />
            </div>

            {/* Controls */}
            <JourneyControls 
              onAdvance={handleAdvance}
              onOpenLetter={() => setShowLetter(true)}
              showAdvanceButton={currentPosition < LOCATIONS.FAMILY}
              showLetterButton={currentPosition === LOCATIONS.CARTA_JUAN}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      {showLetter && (
        <Modal onClose={() => setShowLetter(false)}>
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-700">
              De esta manera solo quiero desearte un buen viaje, que mi Dios te bendiga y te proteja en esas 9 horas de viaje, también que disfrutes con toda tu familia, que disfrutes cada día que estés con ellos, tus amigos también y ya sé lo que vas a tomar así que cuidado con eso HAHAHAHA solo diviértete al máximo, también quiero decirte que estaré esperando hasta que regreses, contaré cada día hasta que digas ya volví HAHAHA porque quiero compartir más contigo, conocerte mucho mejor en persona y formar nuevas experiencias, sé que lo he dicho mucho y ya es molesto pero es que eres increíble, en fin, muy romántico hahahahaha te mando un abrazo de oso, saluda a tu familia y tráeme un recuerdo 😁
            </p>
          </div>
        </Modal>
      )}

      {showFinalMessage && (
        <Modal>
          <div className="text-center py-6">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              ¡Buen Viaje, Vuelve Pronto! ❤️
            </h2>
          </div>
        </Modal>
      )}
    </div>
  );
}