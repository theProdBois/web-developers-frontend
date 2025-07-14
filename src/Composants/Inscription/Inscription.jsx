import React, { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { StepIndicator, Step1, Step2, Step3, Step4 } from '../EtapesInscri/EtapesIncri';
import SectionGauche from '../SectionGauche/SectionGauche';
import { useNavigate } from 'react-router-dom';

const Inscription = ({ onSwitchView, setShowProfileModal, setIsNewRegistration }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    fullName: '',
    developerName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    paymentMethods: [],
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const totalSteps = 4;

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.fullName && formData.developerName && formData.email;
      case 2:
        return formData.phone && formData.birthDate && formData.gender;
      case 3:
        return formData.paymentMethods && 
               formData.paymentMethods.length > 0 && 
               formData.paymentMethods.every(method => method.account && method.account.trim() !== '');
      case 4:
        return formData.password.length >= 8 && 
               formData.password === formData.confirmPassword && 
               formData.acceptTerms;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (isStepValid(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (isStepValid(4)) {
      // Marquer que c'est une nouvelle inscription
      setIsNewRegistration(true);
      setShowProfileModal(true);
      
      // Naviguer vers la page des tâches
      navigate('/tache');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-5xl flex items-stretch animate-fadeIn">
      <SectionGauche isRegistration={true} onSwitchView={onSwitchView} />
      
      {/* Section droite - Formulaire */}
      <div className="flex-1 my-2 pl-8 border-l border-gray-100 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">
          INSCRIPTION DÉVELOPPEUR
        </h2>
        
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        
        <div className="flex-1 min-h-[280px] flex flex-col justify-between">
          <div className="flex-1">
            {renderStep()}
          </div>
          
          <div className="mt-8">
            <div className="flex gap-3 mb-4">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="flex-1 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-all duration-200 font-semibold"
                >
                  Précédent
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    isStepValid(currentStep)
                      ? 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-[1.02]'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Suivant
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid(currentStep)}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    isStepValid(currentStep)
                      ? 'bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-[1.02]'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Créer le compte
                </button>
              )}
            </div>
            
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <FiLock className="mr-2" size={16} />
              Vos données sont sécurisées
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inscription