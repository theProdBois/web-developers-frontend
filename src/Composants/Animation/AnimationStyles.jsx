import React from 'react';

const AnimationStyles = () => (
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideDown {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @keyframes slideInFromLeft {
      from { transform: translateX(-30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideInFromRight {
      from { transform: translateX(30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 0.3; }
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-fadeIn {
      animation: fadeIn 0.6s ease-in-out;
    }
    
    .animate-slideUp {
      animation: slideUp 0.5s ease-out;
    }
    
    .animate-slideDown {
      animation: slideDown 0.4s ease-out;
    }

    .animate-slideInFromLeft {
      animation: slideInFromLeft 0.5s ease-out;
    }

    .animate-slideInFromRight {
      animation: slideInFromRight 0.5s ease-out;
    }

    .animate-scaleIn {
      animation: scaleIn 0.4s ease-out;
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .animate-pulse {
      animation: pulse 4s ease-in-out infinite;
    }

    .animate-spin {
      animation: rotate 1s linear infinite;
    }

    /* Transitions personnalisées */
    .transition-all-smooth {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .transition-transform-smooth {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Effets de hover */
    .hover-lift:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    .hover-scale:hover {
      transform: scale(1.02);
    }
  `}</style>
);

export default AnimationStyles;