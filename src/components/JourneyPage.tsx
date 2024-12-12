import React, { useState, useEffect } from 'react';
import { Flag } from './Flag';
import { Car } from './Car';
import { Message } from './Message';
import { MapPin } from 'lucide-react';

const LOCATIONS = {
  CARTAGENA: 0,
  CARTA_JUAN: 1,
  FAMILY: 2,
};

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
      className="min-h-screen bg-cover bg-center p-8 bg-fixed"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1492373202761-6c2644d4c83d?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md p-12 rounded-3xl shadow-2xl">
          <div className="relative mb-32">
            {/* Road */}
            <div className="relative">
              <div className="h-8 bg-gray-800 rounded-full overflow-hidden">
                {/* Progress trail */}
                <div 
                  className="h-full progress-trail"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              {/* Road markings */}
              <div className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
                <div className="h-full bg-yellow-400 animate-pulse" 
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(250, 204, 21, 0) 0%, rgba(250, 204, 21, 1) 50%, rgba(250, 204, 21, 0) 100%)',
                  }}
                />
              </div>

              {/* Flags */}
              <div className="absolute left-0" style={{ width: '0%' }}>
                <Flag 
                  text="Cartagena" 
                  isActive={currentPosition === LOCATIONS.CARTAGENA}
                  isCompleted={currentPosition > LOCATIONS.CARTAGENA}
                />
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Flag 
                  text="Carta Juan" 
                  isActive={currentPosition === LOCATIONS.CARTA_JUAN}
                  isCompleted={currentPosition > LOCATIONS.CARTA_JUAN}
                />
              </div>
              
              <div className="absolute right-0">
                <Flag 
                  text="Mi Familia" 
                  isActive={currentPosition === LOCATIONS.FAMILY}
                  isCompleted={currentPosition === LOCATIONS.FAMILY}
                />
              </div>

              {/* Car */}
              <Car position={currentPosition} />
            </div>

            {/* Controls */}
            <div className="text-center mt-16 space-y-6">
              {currentPosition < LOCATIONS.FAMILY && (
                <button
                  onClick={handleAdvance}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 hover:shadow-lg font-semibold text-lg group"
                >
                  <span className="flex items-center gap-2 justify-center">
                    ¡Vamos!
                    <MapPin className="inline-block group-hover:animate-bounce-custom" />
                  </span>
                </button>
              )}

              {currentPosition === LOCATIONS.CARTA_JUAN && (
                <button
                  onClick={() => setShowLetter(true)}
                  className="px-10 py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full hover:from-pink-700 hover:to-pink-800 transition-all transform hover:scale-105 hover:shadow-lg font-semibold text-lg"
                >
                  Abrir Carta
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      {showLetter && (
        <Message onClose={() => setShowLetter(false)}>
          <div className="space-y-4">
            <p className="text-xl leading-relaxed text-gray-700">
              Bueno esta es mi sorpresa y tambien como una forma de despedirme ya que no pude en persona, quiero desearte que tengas un buen viaje que por todo el camino hacia Hatillo tambien decirte aunque se que ya lo sabes disfruta cada minuto que pases con tu familia y con todos tus seres queridos me les mandas un saludito a tus papas jajajaja. Tambien aprovecho esta carta para decirte algo importante y es que quiero que sepas me has flechado y he quedado impiresionado de la mujer tan valiosa que eres, ademas de lo bella que sos tanto por fuera como por dentro y yo entiendo que no deberia estar diciendo esto y que todo debe ser a su tiempo, respeto mucho eso pero tambien quiero ser sincero y este sentimiento queria expresarlo contigo solo espero que esto que te estoy contando no llegue arruinar nuestra amistad, en fin estare contando los dias hasta que vuelvas para pasar tiempo contigo hacer de todo generar aventuras y obviamente conocernos mucho mas tambien se que en tu casa con tu familia vas a recibir amor pero yo te voy a mandar todo mi amor desde mi humilde hogar jajajjaa, te mando un abrazo y un beso enorme con amor tu juanito 🩶
            </p>
          </div>
        </Message>
      )}

      {showFinalMessage && (
        <Message>
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              ¡Buen Viaje, Vuelve Pronto! ❤️
            </h2>
          </div>
        </Message>
      )}
    </div>
  );
}