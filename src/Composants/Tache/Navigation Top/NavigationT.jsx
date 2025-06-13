import React, { useState, useEffect, useRef } from 'react';
import { FiBell, FiLogOut, FiSettings, FiCheckCircle, FiAlertTriangle, FiGitPullRequest, FiTool, FiBarChart2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function NavigationT() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const notificationsRef = useRef();
  const profileRef = useRef();
  
  const notifications = [
    {
      id: 1,
      icon: FiCheckCircle,
      title: 'Nouveau déploiement réussi en production',
      time: '12 Juin 2025 à 14h 30min',
      status: 'Succès',
      type: 'success'
    },
    {
      id: 2,
      icon: FiAlertTriangle,
      title: 'Erreur critique détectée dans l\'API utilisateurs',
      time: '12 Juin 2025 à 13h 45min',
      status: 'Urgent',
      type: 'error'
    },
    {
      id: 3,
      icon: FiGitPullRequest,
      title: 'Pull Request #247 prête pour review',
      time: '12 Juin 2025 à 12h 15min',
      status: 'En attente',
      type: 'review'
    },
    {
      id: 4,
      icon: FiTool,
      title: 'Maintenance programmée ce soir à 22h00',
      time: '12 Juin 2025 à 10h 00min',
      status: 'Planifié',
      type: 'maintenance'
    },
    {
      id: 5,
      icon: FiBarChart2,
      title: 'Rapport de performance mensuel disponible',
      time: '11 Juin 2025 à 16h 30min',
      status: 'Nouveau',
      type: 'report'
    }
  ];

  // Fermer les modals en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Logique de déconnexion ici
    console.log('Déconnexion...');
    setShowLogoutModal(false);
    setShowProfile(false);
    // Redirection ou autre logique de déconnexion
  };

  const getStatusColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-600';
      case 'error':
        return 'bg-red-100 text-red-600';
      case 'review':
        return 'bg-blue-100 text-blue-600';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-600';
      case 'report':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-orange-100 text-orange-600';
    }
  };

  const getIconBgColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'review':
        return 'bg-blue-500';
      case 'maintenance':
        return 'bg-yellow-500';
      case 'report':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <>
      <div className="px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">    
        </div>
        
        <div className="flex items-center gap-4">
          {/* Bouton Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="p-2 text-gray-50 hover:text-gray-200 transition-colors relative"
            >
              <FiBell size={20} />
              <span className="absolute top-1 right-1 bg-white p-[6px] text-red-500 text-xs rounded-full w-2 h-2 flex items-center justify-center">
                {notifications.length}
              </span>
            </button>

            {/* Modal Notifications */}
            {showNotifications && (
              <div className="absolute right-[-20px] top-12 w-96 bg-white rounded-md shadow-lg border z-50">
                <div className="p-3 border-b bg-gray-50 rounded-t-md">
                  <h3 className="font-semibold text-gray-800">Notifications Développeur</h3>
                  <p className="text-xs text-gray-500">{notifications.length} notifications non lues</p>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => {
                    const IconComponent = notification.icon;
                    return (
                      <div key={notification.id} className="p-4 border-b hover:bg-gray-50 flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${getIconBgColor(notification.type)}`}>
                          <IconComponent size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800 font-medium">{notification.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          {notification.status && (
                            <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${getStatusColor(notification.type)}`}>
                              {notification.status}
                            </span>
                          )}
                        </div>
                        <button className="text-blue-500 text-sm hover:underline font-medium">
                          Voir
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="p-3 border-t bg-gray-50 rounded-b-md">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Voir toutes les notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bouton Profil */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-500 text-sm font-bold">
                A
              </div>
            </button>

            {/* Modal Profil */}
            {showProfile && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border z-50">
                <div className="px-4 py-2 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      A
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Administrateur</h3>
                      <p className="text-[13px] text-gray-500">admin@tunisiestore.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  {/* <button className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <FiUser size={18} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Mon Profil</span>
                  </button> */}
                  
                  <button className="w-full flex items-center gap-3 px-3 py-1 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <FiSettings size={18} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Paramètres</span>
                  </button>
                  
                  <hr className="my-2" />
                  
                  <button
                    onClick={() => setShowLogoutModal(true)}
                    className="w-full flex items-center gap-3 px-3 py-1 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
                  >
                    <FiLogOut size={18} />
                    <span className="text-sm">Déconnexion</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay sombre pour les modals */}
      {(showNotifications || showProfile) && (
        <div className="fixed inset-0 bg-black bg-opacity-20 z-40" />
      )}

      {/* Modal de confirmation de déconnexion */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <FiLogOut className="text-red-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Confirmer la déconnexion</h3>
            </div>
            
            <p className="text-gray-600 mb-4">
              Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez vous reconnecter pour accéder à votre compte.
            </p>
            
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-1 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <Link to={"/"}>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >               
                  Oui, déconnecter                        
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavigationT;