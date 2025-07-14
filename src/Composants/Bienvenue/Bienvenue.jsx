import React, { useState } from 'react';
import Inscription from '../Inscription/Inscription';
import Login from '../Login/Login';
import AnimationStyles from '../Animation/AnimationStyles';

function Bienvenue({ setShowProfileModal, setIsNewRegistration }) {
  const [currentView, setCurrentView] = useState('login');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSwitchView = (view) => {
    if (view !== currentView) {
      setIsTransitioning(true);
      
      // Délai pour l'animation de sortie
      setTimeout(() => {
        setCurrentView(view);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animations CSS */}
      <AnimationStyles />

      {/* Contenu principal avec animation */}
      <div className={`w-full max-w-5xl transition-all duration-300 transform ${
        isTransitioning 
          ? 'opacity-0 scale-95 translate-y-4' 
          : 'opacity-100 scale-100 translate-y-0 animate-slideUp'
      }`}>
        {currentView === 'login' ? (
          <div className="animate-fadeIn">
            <Login onSwitchView={() => handleSwitchView('inscription')} />
          </div>
        ) : (
          <div className="animate-fadeIn">
            <Inscription 
              onSwitchView={() => handleSwitchView('login')}
              setShowProfileModal={setShowProfileModal}
              setIsNewRegistration={setIsNewRegistration}
            />
          </div>
        )}
      </div>

      {/* Indicateur de transition */}
      {isTransitioning && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default Bienvenue;