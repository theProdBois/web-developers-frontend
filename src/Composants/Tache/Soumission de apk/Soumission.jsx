import React, { useState } from 'react';
import { FaPaintBrush, FaFilm, FaLaptopCode } from 'react-icons/fa';
import { MdPhoneAndroid, MdLock } from 'react-icons/md';


function Soumission() {
  const [searchApp, setSearchApp] = useState('');
  const [currentView, setCurrentView] = useState('list');
  const [expandedApp, setExpandedApp] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    version: '',
    description: '',
    programmingLanguage: '',
    availableLanguages: [],
    category: '',
    price: '',
    apkFile: null,
    screenshots: [],
    privacyPolicyLink: '',
    supportEmail: '',
    developerName: '',
    minAndroidVersion: '',
    permissions: []
  });

  const applications = [
    {
      id: 1,
      name: 'PhotoShop',
      version: '1.4.2',
      date: '1 Juin 2025 à 22h 05min',
      status: 'En attente',
      price: '5 000.5 DNT',
      icon: <FaPaintBrush />,
      downloads: '12,030',
      revenue: '43 000.5',
      rating: 4.8,
      programmingLanguage: 'React Native',
      availableLanguages: ['Français', 'Anglais', 'Espagnol'],
      description: 'Application de retouche photo professionnelle avec des outils avancés pour créer et éditer des images de haute qualité.',
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg', 'screenshot3.jpg'],
      privacyPolicyLink: 'https://example.com/privacy',
      category: 'Photographie',
      developerName: 'Adobe Inc.',
      minAndroidVersion: '6.0',
      permissions: ['Caméra', 'Stockage', 'Internet']
    },
    {
      id: 2,
      name: 'VideoEdit Pro',
      version: '2.1.0',
      date: '15 Mai 2025 à 14h 30min',
      status: 'Validé',
      price: '3 500.0 DNT',
      icon: <FaFilm />,
      downloads: '8,520',
      revenue: '29 820.0',
      rating: 4.6,
      programmingLanguage: 'Flutter',
      availableLanguages: ['Français', 'Anglais'],
      description: 'Éditeur vidéo professionnel avec effets spéciaux et transitions avancées pour créer des vidéos exceptionnelles.',
      screenshots: ['video1.jpg', 'video2.jpg'],
      privacyPolicyLink: 'https://example.com/privacy-video',
      category: 'Multimédia',
      developerName: 'VideoTech Studios',
      minAndroidVersion: '7.0',
      permissions: ['Caméra', 'Microphone', 'Stockage']
    },
    {
      id: 3,
      name: 'CodeEditor',
      version: '1.0.5',
      date: '20 Mai 2025 à 09h 15min',
      status: 'En attente',
      price: '2 000.0 DNT',
      icon: <FaLaptopCode />,
      downloads: '15,240',
      revenue: '30 480.0',
      rating: 4.9,
      programmingLanguage: 'Kotlin',
      availableLanguages: ['Français', 'Anglais', 'Allemand', 'Chinois'],
      description: 'Éditeur de code complet avec coloration syntaxique et support pour plus de 50 langages de programmation.',
      screenshots: ['code1.jpg', 'code2.jpg', 'code3.jpg', 'code4.jpg'],
      privacyPolicyLink: 'https://example.com/privacy-code',
      category: 'Développement',
      developerName: 'DevTools Co.',
      minAndroidVersion: '8.0',
      permissions: ['Stockage', 'Internet']
    }
  ];

  const categories = ['Photographie', 'Multimédia', 'Développement', 'Jeux', 'Productivité', 'Éducation', 'Santé'];
  const languages = ['Français', 'Anglais', 'Espagnol', 'Allemand', 'Italien', 'Chinois', 'Japonais', 'Arabe'];
  const programmingLanguages = ['React Native', 'Flutter', 'Kotlin', 'Java', 'Swift', 'C#', 'JavaScript'];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`text-sm ${star <= rating ? 'text-orange-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
        <span className="text-sm font-medium text-orange-500 ml-1">{rating}</span>
      </div>
    );
  };

  const toggleAppDetails = (appId) => {
    setExpandedApp(expandedApp === appId ? null : appId);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLanguageToggle = (language) => {
    setFormData(prev => ({
      ...prev,
      availableLanguages: prev.availableLanguages.includes(language)
        ? prev.availableLanguages.filter(lang => lang !== language)
        : [...prev.availableLanguages, language]
    }));
  };

  const handlePermissionToggle = (permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter(perm => perm !== permission)
        : [...prev.permissions, permission]
    }));
  };

  const AppDetails = ({ app }) => (
    <div className="mt-4 p-4 bg-gray-50 rounded-b-lg animate-in slide-in-from-top duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Informations techniques</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Langage de programmation :</span> {app.programmingLanguage}</p>
              <p><span className="font-medium">Version Android minimale :</span> {app.minAndroidVersion}</p>
              <p><span className="font-medium">Catégorie :</span> {app.category}</p>
              <p><span className="font-medium">Développeur :</span> {app.developerName}</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Langues disponibles</h4>
            <div className="flex flex-wrap gap-2">
              {app.availableLanguages.map((lang) => (
                <span key={lang} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Permissions requises</h4>
            <div className="flex flex-wrap gap-2">
              {app.permissions.map((permission) => (
                <span key={permission} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                  {permission}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{app.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Captures d'écran</h4>
            <div className="grid grid-cols-2 gap-2">
              {app.screenshots.map((screenshot, index) => (
                <div key={index} className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <MdPhoneAndroid size={14} /> Screenshot {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Liens</h4>
            <a href={app.privacyPolicyLink} className="text-blue-600 hover:underline text-sm flex items-center gap-1">
              <MdLock size={14} /> Politique de confidentialité
            </a>
          </div>

        </div>
      </div>
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {applications
        .filter(app => app.name.toLowerCase().includes(searchApp.toLowerCase()))
        .map((app) => (
        <div key={app.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-[14px] font-bold text-sm">
                    {app.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{app.name}</h3>
                  <p className="text-sm text-gray-600">Version : {app.version}</p>
                  <p className="text-sm text-gray-500">Date : {app.date}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    app.status === 'En attente' 
                      ? 'bg-orange-100 text-orange-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {app.status}
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Prix</p>
                  <span className="text-sm font-medium text-gray-700">{app.price}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="p-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => toggleAppDetails(app.id)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      expandedApp === app.id 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {expandedApp === app.id ? 'Masquer' : 'Détails'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {expandedApp === app.id && <AppDetails app={app} />}
        </div>
      ))}
    </div>
  );

  const StatsView = () => (
    <div className="space-y-4">
      {applications
        .filter(app => app.name.toLowerCase().includes(searchApp.toLowerCase()))
        .map((app) => (
        <div key={app.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-[14px] font-bold text-sm">
                    {app.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{app.name}</h3>
                  <p className="text-sm text-gray-600">Version : {app.version}</p>
                  <p className="text-sm text-gray-500">Date : {app.date}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Téléchargements</p>
                  <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded">{app.downloads}</span>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Revenus (DNT)</p>
                  <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded">{app.revenue}</span>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Note Moyenne</p>
                  {renderStars(app.rating)}
                </div>

                <button 
                  onClick={() => toggleAppDetails(app.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    expandedApp === app.id 
                      ? 'bg-orange-600 text-white' 
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  {expandedApp === app.id ? 'Masquer' : 'Détails'}
                </button>
              </div>
            </div>
          </div>
          
          {expandedApp === app.id && <AppDetails app={app} />}
        </div>
      ))}
    </div>
  );

  const SubmitForm = () => (
    <div className="bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Soumettre une nouvelle application</h3>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nom de l'application *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleFormChange('name', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Ex: MonApp"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Version *</label>
            <input
              type="text"
              value={formData.version}
              onChange={(e) => handleFormChange('version', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Ex: 1.0.0"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleFormChange('description', e.target.value)}
            rows={4}
            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            placeholder="Décrivez votre application..."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Langage de programmation *</label>
            <select
              value={formData.programmingLanguage}
              onChange={(e) => handleFormChange('programmingLanguage', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              required
            >
              <option value="">Sélectionner un langage</option>
              {programmingLanguages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie *</label>
            <select
              value={formData.category}
              onChange={(e) => handleFormChange('category', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              required
            >
              <option value="">Sélectionner une catégorie</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Prix (DNT) *</label>
            <input
              type="number"
              step="0.1"
              value={formData.price}
              onChange={(e) => handleFormChange('price', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="0.0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Version Android minimale *</label>
            <input
              type="text"
              value={formData.minAndroidVersion}
              onChange={(e) => handleFormChange('minAndroidVersion', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Ex: 6.0"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nom du développeur *</label>
            <input
              type="text"
              value={formData.developerName}
              onChange={(e) => handleFormChange('developerName', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Votre nom ou nom de société"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email de support *</label>
            <input
              type="email"
              value={formData.supportEmail}
              onChange={(e) => handleFormChange('supportEmail', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="support@exemple.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Lien de politique de confidentialité *</label>
          <input
            type="url"
            value={formData.privacyPolicyLink}
            onChange={(e) => handleFormChange('privacyPolicyLink', e.target.value)}
            className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            placeholder="https://exemple.com/privacy"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Langues disponibles *</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {languages.map(language => (
              <label key={language} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.availableLanguages.includes(language)}
                  onChange={() => handleLanguageToggle(language)}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <span className="text-sm">{language}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Permissions requises</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['Caméra', 'Microphone', 'Stockage', 'Internet', 'Localisation', 'Contacts', 'Téléphone', 'SMS'].map(permission => (
              <label key={permission} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.permissions.includes(permission)}
                  onChange={() => handlePermissionToggle(permission)}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <span className="text-sm">{permission}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Fichier APK *</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
            <div className="space-y-2">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-gray-600">Glissez votre fichier APK ici ou</p>
                <button type="button" className="text-orange-500 hover:text-orange-600 font-medium">
                  cliquez pour parcourir
                </button>
              </div>
              <p className="text-xs text-gray-500">APK uniquement, max 100MB</p>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Captures d'écran (3-8 images)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
            <div className="space-y-2">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L32 26.414m-5-5l1.586-1.586a2 2 0 012.828 0L44 33.414M14 14l.01.01M14 4h20a4 4 0 014 4v20a4 4 0 01-4 4H6a4 4 0 01-4-4V8a4 4 0 014-4h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-gray-600">Ajoutez vos captures d'écran</p>
                <button type="button" className="text-orange-500 hover:text-orange-600 font-medium">
                  Sélectionner les images
                </button>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG - Format portrait recommandé</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6">
          <button
            type="button"
            onClick={() => setCurrentView('list')}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Soumettre l'application
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm max-w-md">
          <input
            type="text"
            placeholder="Recherche une application...."
            value={searchApp}
            onChange={(e) => setSearchApp(e.target.value)}
            className="bg-transparent flex-1 outline-none text-gray-600 placeholder-gray-300"
          />
        </div>
        
        <button 
          onClick={() => setCurrentView('submit')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-normal flex items-center space-x-2 transition-colors"
        >
          <p>Soumettre une application</p> 
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </button>
      </div>

      {/* Titre de section */}
      <h2 className="text-lg font-semibold text-orange-500 mb-4">
        {currentView === 'submit' ? 'Soumettre une application' : 'Listes d\'applications'}
      </h2>

      {/* Navigation tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setCurrentView('list')}
          className={`px-4 py-1 rounded-lg font-normal text-[14px] transition-colors ${
            currentView === 'list'
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          Liste
        </button>
        <button
          onClick={() => setCurrentView('stats')}
          className={`px-4 py-1 rounded-lg font-normal transition-colors ${
            currentView === 'stats'
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          Statistiques
        </button>
        <button
          onClick={() => setCurrentView('submit')}
          className={`px-4 py-1 rounded-lg font-normal transition-colors ${
            currentView === 'submit'
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          Soumettre
        </button>
      </div>

      {/* Content */}
      <div className="transition-all duration-300">
        {currentView === 'list' && <ListView />}
        {currentView === 'stats' && <StatsView />}
        {currentView === 'submit' && <SubmitForm />}
      </div>
    </div>
  );
}

export default Soumission;