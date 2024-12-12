import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';

export function WelcomePage() {
  const navigate = useNavigate();
  const [showNoMessage, setShowNoMessage] = React.useState(false);

  const handleYes = () => {
    navigate('/journey');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {i % 2 === 0 ? (
              <MapPin className="text-pink-300 opacity-20" size={24} />
            ) : (
              <Heart className="text-purple-300 opacity-20" size={24} />
            )}
          </div>
        ))}
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-8 p-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-lg transform transition-all hover:scale-[1.02]">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            ¿Hola Olianys, te vas de viaje?
          </h1>
          
          <div className="flex gap-6 justify-center">
            <button
              onClick={handleYes}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 hover:shadow-lg font-semibold text-lg group"
            >
              <span className="flex items-center gap-2">
                Sí
                <MapPin className="inline-block group-hover:animate-bounce-custom" />
              </span>
            </button>
            <button
              onClick={() => setShowNoMessage(true)}
              className="px-10 py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full hover:from-pink-700 hover:to-pink-800 transition-all transform hover:scale-105 hover:shadow-lg font-semibold text-lg"
            >
              No
            </button>
          </div>

          {showNoMessage && (
            <div className="animate-fade-in mt-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Bueno, entonces vuelve a esta página cuando te vayas para el pueblo. 
                <span className="inline-block animate-wave ml-2">👋</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}