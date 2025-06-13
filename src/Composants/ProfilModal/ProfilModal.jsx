import React, { useState } from 'react';
import { FiX, FiCamera, FiUpload, FiGlobe, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProfilModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    profileImage: null,
    bio: '',
    website: '',
    github: '',
    linkedin: '',
    location: '',
    experience: '',
    specialization: '',
    programmingLanguages: [],
    frameworks: [],
    availability: '',
    hourlyRate: '',
    portfolio: [],
    certifications: []
  });

  const programmingLanguages = [
    'JavaScript', 'Python', 'Java', 'C#', 'PHP', 'TypeScript', 
    'Go', 'Rust', 'Swift', 'Kotlin', 'C++', 'Ruby'
  ];

  const frameworks = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Laravel', 
    'Spring Boot', '.NET', 'Express.js', 'Next.js', 'Nuxt.js', 'Flutter'
  ];

  const handleLanguageToggle = (language) => {
    const updatedLanguages = profileData.programmingLanguages.includes(language)
      ? profileData.programmingLanguages.filter(lang => lang !== language)
      : [...profileData.programmingLanguages, language];
    
    setProfileData({...profileData, programmingLanguages: updatedLanguages});
  };

  const handleFrameworkToggle = (framework) => {
    const updatedFrameworks = profileData.frameworks.includes(framework)
      ? profileData.frameworks.filter(fw => fw !== framework)
      : [...profileData.frameworks, framework];
    
    setProfileData({...profileData, frameworks: updatedFrameworks});
  };

  if (!isOpen) return null;

  const renderStep1 = () => (
    <div className="space-y-3">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3 border-2 border-dashed border-gray-300">
          <FiCamera className="text-gray-400" size={32} />
        </div>
        <button className="text-orange-500 text-sm hover:underline flex items-center justify-center gap-2 mx-auto">
          <FiUpload size={14} />
          Ajouter une photo de profil
        </button>
      </div>
      
      <div>
        <label className="block text-gray-600 text-sm mb-1">Bio professionnelle</label>
        <textarea
          value={profileData.bio}
          onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
          className="w-full px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 resize-none"
          rows="3"
          placeholder="Décrivez votre expérience et vos compétences..."
        />
      </div>
      
      <div>
        <label className="block text-gray-600 text-sm mb-1">Localisation</label>
        <div className="relative">
          <FiMapPin className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            type="text"
            value={profileData.location}
            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
            placeholder="Ville, Pays"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-600 text-sm mb-1">Expérience</label>
        <select
          value={profileData.experience}
          onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
        >
          <option value="">Sélectionnez votre niveau</option>
          <option value="junior">Junior (0-2 ans)</option>
          <option value="intermediate">Intermédiaire (2-5 ans)</option>
          <option value="senior">Senior (5+ ans)</option>
          <option value="expert">Expert (10+ ans)</option>
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-3">
      <div>
        <label className="block text-gray-600 text-sm mb-2">Langages de programmation *</label>
        <div className="grid grid-cols-2 gap-2 max-h-24 overflow-y-auto">
          {programmingLanguages.map((language) => (
            <label key={language} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={profileData.programmingLanguages.includes(language)}
                onChange={() => handleLanguageToggle(language)}
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-sm text-gray-700">{language}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-gray-600 text-sm mb-2">Frameworks & Technologies</label>
        <div className="grid grid-cols-2 gap-2 max-h-24 overflow-y-auto">
          {frameworks.map((framework) => (
            <label key={framework} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={profileData.frameworks.includes(framework)}
                onChange={() => handleFrameworkToggle(framework)}
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-sm text-gray-700">{framework}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-gray-600 text-sm mb-2">Spécialisation</label>
        <select
          value={profileData.specialization}
          onChange={(e) => setProfileData({...profileData, specialization: e.target.value})}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
        >
          <option value="">Choisissez votre spécialisation</option>
          <option value="frontend">Développement Frontend</option>
          <option value="backend">Développement Backend</option>
          <option value="fullstack">Développement Full-Stack</option>
          <option value="mobile">Développement Mobile</option>
          <option value="devops">DevOps</option>
          <option value="data">Data Science/ML</option>
          <option value="game">Développement de Jeux</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-3">
      <div>
        <label className="block text-gray-600 text-sm mb-1">Site web/Portfolio</label>
        <div className="relative">
          <FiGlobe className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            type="url"
            value={profileData.website}
            onChange={(e) => setProfileData({...profileData, website: e.target.value})}
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
            placeholder="https://votre-portfolio.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-600 text-sm mb-1">GitHub</label>
        <div className="relative">
          <FiGithub className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            type="text"
            value={profileData.github}
            onChange={(e) => setProfileData({...profileData, github: e.target.value})}
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
            placeholder="votre-username"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-600 text-sm mb-1">LinkedIn</label>
        <div className="relative">
          <FiLinkedin className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            type="text"
            value={profileData.linkedin}
            onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
            placeholder="votre-profil-linkedin"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-600 text-sm mb-1">Disponibilité</label>
        <select
          value={profileData.availability}
          onChange={(e) => setProfileData({...profileData, availability: e.target.value})}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
        >
          <option value="">Sélectionnez votre disponibilité</option>
          <option value="full-time">Temps plein</option>
          <option value="part-time">Temps partiel</option>
          <option value="freelance">Freelance</option>
          <option value="contract">Contrat</option>
        </select>
      </div>
    </div>
  );

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return profileData.bio.trim().length > 0 && profileData.experience;
      case 2:
        return profileData.programmingLanguages.length > 0;
      case 3:
        return true; // Étape optionnelle
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Profile data:', profileData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Complétez votre profil</h3>
            <p className="text-sm text-gray-500 mt-1">Étape {currentStep} sur 3</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Indicateur de progression */}
        <div className="flex mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex-1">
              <div className={`h-2 rounded-full mx-1 ${
                step <= currentStep ? 'bg-orange-500' : 'bg-gray-200'
              }`}></div>
            </div>
          ))}
        </div>
        
        {/* Contenu des étapes */}
        <div className="mb-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>
        
        {/* Boutons de navigation */}
        <div className="flex gap-3">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="flex-1 px-4 py-1 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Précédent
            </button>
          )}
          
          {currentStep < 3 ? (
            <button
              onClick={nextStep}
              disabled={!isStepValid(currentStep)}
              className={`flex-1 px-4 py-1 rounded-lg transition-colors ${
                isStepValid(currentStep)
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Suivant
            </button>
          ) : (
            <>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-1 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                Ignorer
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              > <Link to={"/tache"}>
                    Terminer
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilModal;