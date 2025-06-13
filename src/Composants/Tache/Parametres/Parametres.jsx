import React, { useState, useEffect } from 'react';
import { FaUser, FaBell, FaLock, FaCog, FaPhoneAlt } from 'react-icons/fa';

function Parametres() {
  // États pour les différentes sections
  const [profileData, setProfileData] = useState({
    nom: 'REDIDA Léo Carlos',
    email: 'carlosredida557@gmail.com',
    telephone: '+216 18 2522 25',
    genre: 'Homme',
    dateNaissance: '2001-06-10'
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    marketingEmails: false
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: '30'
  });

  const [preferences, setPreferences] = useState({
    language: 'fr',
    timezone: 'Africa/Tunis',
    theme: 'light',
    currency: 'TND'
  });

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfileData, setTempProfileData] = useState(profileData);

  // Gestion du profil
  const handleProfileEdit = () => {
    setIsEditing(true);
    setTempProfileData(profileData);
  };

  const handleProfileSave = () => {
    setProfileData(tempProfileData);
    setIsEditing(false);
  };

  const handleProfileCancel = () => {
    setTempProfileData(profileData);
    setIsEditing(false);
  };

  const handleProfileChange = (field, value) => {
    setTempProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Gestion des notifications
  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Gestion de la sécurité
  const handleSecurityChange = (field, value) => {
    setSecurity(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Gestion des préférences
  const handlePreferenceChange = (field, value) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Composant Toggle Switch
  const ToggleSwitch = ({ checked, onChange, label }) => (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-orange-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  // Tabs de navigation
  const tabs = [
    { id: 'profile', label: 'Profil', icon: <FaUser className="inline" /> },
    { id: 'notifications', label: 'Notifications', icon: <FaBell className="inline" /> },
    { id: 'security', label: 'Sécurité', icon: <FaLock className="inline" /> },
    { id: 'preferences', label: 'Préférences', icon: <FaCog className="inline" /> },
    { id: 'support', label: 'Support', icon: <FaPhoneAlt className="inline" /> }
  ];
  

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-2">Paramètres</h1>
        <p className="text-gray-600">Gérez vos préférences et paramètres de compte</p>
      </div>

      {/* Navigation par onglets */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Section Profil */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-700">Informations du profil</h2>
                {!isEditing ? (
                  <button
                    onClick={handleProfileEdit}
                    className="px-4 py-1 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Modifier
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleProfileSave}
                      className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Sauvegarder
                    </button>
                    <button
                      onClick={handleProfileCancel}
                      className="px-4 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Annuler
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom et Prénom
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempProfileData.nom}
                      onChange={(e) => handleProfileChange('nom', e.target.value)}
                      className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="px-3 py-1 bg-gray-50 rounded-lg">{profileData.nom}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={tempProfileData.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                      className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="px-3 py-1 bg-gray-50 rounded-lg">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de téléphone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={tempProfileData.telephone}
                      onChange={(e) => handleProfileChange('telephone', e.target.value)}
                      className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="px-3 py-1 bg-gray-50 rounded-lg">{profileData.telephone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Genre
                  </label>
                  {isEditing ? (
                    <select
                      value={tempProfileData.genre}
                      onChange={(e) => handleProfileChange('genre', e.target.value)}
                      className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                      <option value="Autre">Autre</option>
                    </select>
                  ) : (
                    <p className="px-3 py-1 bg-gray-50 rounded-lg">{profileData.genre}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de naissance
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={tempProfileData.dateNaissance}
                      onChange={(e) => handleProfileChange('dateNaissance', e.target.value)}
                      className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="px-3 py-1 bg-gray-50 rounded-lg">
                      {new Date(profileData.dateNaissance).toLocaleDateString('fr-FR')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Section Notifications */}
          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Paramètres de notification</h2>
              
              <div className="space-y-1">
                <ToggleSwitch
                  checked={notifications.emailNotifications}
                  onChange={() => handleNotificationChange('emailNotifications')}
                  label="Notifications par email"
                />
                <ToggleSwitch
                  checked={notifications.pushNotifications}
                  onChange={() => handleNotificationChange('pushNotifications')}
                  label="Notifications push"
                />
                <ToggleSwitch
                  checked={notifications.smsNotifications}
                  onChange={() => handleNotificationChange('smsNotifications')}
                  label="Notifications SMS"
                />
                <ToggleSwitch
                  checked={notifications.marketingEmails}
                  onChange={() => handleNotificationChange('marketingEmails')}
                  label="Emails marketing"
                />
              </div>
            </div>
          )}

          {/* Section Sécurité */}
          {activeTab === 'security' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Paramètres de sécurité</h2>
              
              <div className="space-y-3">
                <ToggleSwitch
                  checked={security.twoFactorAuth}
                  onChange={() => handleSecurityChange('twoFactorAuth', !security.twoFactorAuth)}
                  label="Authentification à deux facteurs"
                />
                <ToggleSwitch
                  checked={security.loginAlerts}
                  onChange={() => handleSecurityChange('loginAlerts', !security.loginAlerts)}
                  label="Alertes de connexion"
                />
                
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-medium text-gray-700">Délai d'expiration de session</span>
                  <select
                    value={security.sessionTimeout}
                    onChange={(e) => handleSecurityChange('sessionTimeout', e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 heure</option>
                    <option value="120">2 heures</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-3">
                  Changer le mot de passe
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Déconnecter tous les appareils
                </button>
              </div>
            </div>
          )}

          {/* Section Préférences */}
          {activeTab === 'preferences' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Préférences générales</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Langue
                  </label>
                  <select
                    value={preferences.language}
                    onChange={(e) => handlePreferenceChange('language', e.target.value)}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="fr">Français</option>
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fuseau horaire
                  </label>
                  <select
                    value={preferences.timezone}
                    onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="Africa/Tunis">Tunis (GMT+1)</option>
                    <option value="Europe/Paris">Paris (GMT+1)</option>
                    <option value="UTC">UTC (GMT+0)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thème
                  </label>
                  <select
                    value={preferences.theme}
                    onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="light">Clair</option>
                    <option value="dark">Sombre</option>
                    <option value="auto">Automatique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Devise
                  </label>
                  <select
                    value={preferences.currency}
                    onChange={(e) => handlePreferenceChange('currency', e.target.value)}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="TND">Dinar Tunisien (TND)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="USD">Dollar US (USD)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Section Support */}
          {activeTab === 'support' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Contact Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-gray-50 rounded-lg px-6 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">📞 Support téléphonique</h3>
                  <p className="text-gray-600 mb-4">Appelez-nous directement</p>
                  <p className="font-mono text-sm">+216 XX XXX XXX</p>
                </div>

                <div className="bg-gray-50 rounded-lg px-6 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">📚 Centre d'aide</h3>
                  <p className="text-gray-600 mb-4">Consultez notre documentation</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Voir les guides
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Parametres;