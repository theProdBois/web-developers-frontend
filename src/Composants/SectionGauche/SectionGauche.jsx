import React from 'react';

const SectionGauche = ({ isRegistration, onSwitchView }) => (
  <div className="flex-1 flex flex-col justify-center pr-8">
    <div className="flex gap-3 mb-3">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        A
      </div>
      <h1 className="text-3xl font-semibold text-orange-500">Appla <strong>TN</strong></h1>
    </div>
    
    <div className="mb-8">
      <p className="text-gray-700 leading-relaxed">
        Bienvenue dans l'espace développeur de <strong>Appla TN</strong>.
      </p>
      <p className="text-gray-700 text-[14px] leading-relaxed mt-1">
        {isRegistration 
          ? "Créez votre compte développeur pour publier vos applications, gérer vos téléchargements et recevoir vos paiements via nos solutions locales comme D17, Flouci et les opérateurs."
          : "Connectez-vous à votre compte pour publier vos APK, suivre vos statistiques de téléchargements et gérer vos paiements."
        }
      </p>
      <div className="text-gray-700 text-[14px] mt-2">
        <p>
          {isRegistration 
            ? "Vous avez déjà un compte ?"
            : "Vous n'avez pas encore de compte ?"
          }
        </p>
        <button 
          onClick={onSwitchView}
          className="text-orange-500 text-sm hover:underline transition-all duration-200 hover:text-orange-600"
        >
          {isRegistration 
            ? "Se connecter à un compte développeur ici."
            : "Créez un compte développeur ici."
          }
        </button>
      </div>
    </div>
  </div>
);

export default SectionGauche;