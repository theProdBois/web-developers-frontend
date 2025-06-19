import React from 'react';
import { 
  FiUser, 
  FiMail, 
  FiCalendar, 
  FiCheckCircle, 
  FiLock 
} from 'react-icons/fi';

// Composant indicateur d'étapes
export const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center mb-6">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              index + 1 <= currentStep
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
              index + 1 < currentStep ? 'bg-orange-500' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};

// Étape 1: Informations personnelles
export const Step1 = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <label className="block text-gray-600 text-[13px] mb-1">Nom complet</label>
        <div className="relative">
          <FiUser className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 transition-colors"
            placeholder="REDIDA Léo Carlos"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-600 text-[13px] mb-1">Nom de développeur/Société</label>
        <div className="relative">
          <FiUser className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            value={formData.developerName}
            onChange={(e) => handleChange('developerName', e.target.value)}
            className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 transition-colors"
            placeholder="Craft"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-600 text-[13px] mb-1">Adresse e-mail</label>
        <div className="relative">
          <FiMail className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 transition-colors"
            placeholder="carlosredida@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

// Étape 2: Informations personnelles supplémentaires
export const Step2 = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-3 animate-fadeIn">
      <div>
        <label className="block text-gray-600 text-[13px] mb-1">Numéro de téléphone</label>
        <div className="flex">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-l-lg px-3">
            <span className="w-4 h-3 bg-red-500 mr-2" role='img' aria-label='Tunisie'></span>
            <span className="text-sm text-gray-600">+216</span>
          </div>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="flex-1 px-4 py-1 border border-l-0 border-gray-200 rounded-r-lg focus:outline-none focus:border-orange-500 bg-gray-50 transition-colors"
            placeholder="18 545 25"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-600 text-[13px] mb-2">Date de naissance</label>
        <div className="relative">
          <FiCalendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            value={formData.birthDate}
            onChange={(e) => handleChange('birthDate', e.target.value)}
            className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 transition-colors"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-600 text-[13px] mb-2">Sexe</label>
        <div className="flex gap-4">
          {['Homme', 'Femme', 'Autres'].map((gender) => (
            <label key={gender} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={formData.gender === gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 border-2 rounded-sm mr-2 transition-colors ${
                formData.gender === gender ? 'bg-orange-500 border-orange-500' : 'border-gray-300'
              }`}>
                {formData.gender === gender && (
                  <FiCheckCircle className="w-full h-full text-white" />
                )}
              </div>
              <span className="text-sm text-gray-600">{gender}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// Étape 3: Moyens de paiement
export const Step3 = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      <div>
        <label className="block text-gray-600 text-[13px] mb-2">Moyen de paiement préféré</label>
        <div className="space-y-3">
          {[
            { id: 'flouci', name: 'Flouci', placeholder: 'Numéro de compte Flouci' },
            { id: 'd17', name: 'D17', placeholder: 'Numéro de compte D17' },
            { id: 'other', name: 'Autre opérateur', placeholder: 'Numéro de compte' }
          ].map((payment) => (
            <div key={payment.id}>
              <label className="flex items-center cursor-pointer mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={payment.id}
                  checked={formData.paymentMethod === payment.id}
                  onChange={(e) => handleChange('paymentMethod', e.target.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 border-2 rounded-sm mr-2 transition-colors ${
                  formData.paymentMethod === payment.id ? 'bg-orange-500 border-orange-500' : 'border-gray-300'
                }`}>
                  {formData.paymentMethod === payment.id && (
                    <FiCheckCircle className="w-full h-full text-white" />
                  )}
                </div>
                <span className="text-sm text-gray-600">{payment.name}</span>
              </label>
              {formData.paymentMethod === payment.id && (
                <input
                  type="text"
                  value={formData.paymentAccount}
                  onChange={(e) => handleChange('paymentAccount', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 transition-colors animate-slideDown"
                  placeholder={payment.placeholder}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Étape 4: Mot de passe et conditions
export const Step4 = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const passwordValid = formData.password.length >= 8;

  return (
    <div className="space-y-5 animate-fadeIn">
      <div>
        <label className="block text-gray-600 text-[13px] mb-2">Mot de passe</label>
        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className={`w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none bg-gray-50 transition-colors ${
              formData.password && !passwordValid ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder="Minimum 8 caractères"
          />
        </div>
        {formData.password && !passwordValid && (
          <p className="text-red-500 text-xs mt-1">Le mot de passe doit contenir au moins 8 caractères</p>
        )}
      </div>
      
      <div>
        <label className="block text-gray-600 text-[13px] mb-2">Confirmation du mot de passe</label>
        <div className="relative">
          <FiLock className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            className={`w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none bg-gray-50 transition-colors ${
              formData.confirmPassword && !passwordsMatch ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder="Confirmez votre mot de passe"
          />
        </div>
        {formData.confirmPassword && !passwordsMatch && (
          <p className="text-red-500 text-xs mt-1">Les mots de passe ne correspondent pas</p>
        )}
      </div>
      
      <div>
        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={(e) => handleChange('acceptTerms', e.target.checked)}
            className="sr-only"
          />
          <div className={`w-4 h-4 border-2 rounded-sm mr-3 mt-0.5 flex-shrink-0 transition-colors ${
            formData.acceptTerms ? 'bg-orange-500 border-orange-500' : 'border-gray-300'
          }`}>
            {formData.acceptTerms && (
              <FiCheckCircle className="w-full h-full text-white" />
            )}
          </div>
          <span className="text-sm text-gray-600 leading-relaxed">
            J'accepte les <a href="#" className="text-orange-500 hover:underline">conditions d'utilisation</a> et la <a href="#" className="text-orange-500 hover:underline">politique de confidentialité</a> de Tounsi Store.
          </span>
        </label>
      </div>
    </div>
  );
};