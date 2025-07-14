import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { createPortal } from 'react-dom';
import NavigationR from './Navigation Right/NavigationR'
import NavigationT from './Navigation Top/NavigationT'
import ProfilModal from '../ProfilModal/ProfilModal';

function Tache({ 
    showProfileModal, 
    setShowProfileModal, 
    isNewRegistration, 
    setIsNewRegistration 
  }) {

    useEffect(() => {
        // Afficher le modal seulement si c'est une nouvelle inscription
        if (isNewRegistration) {
          setShowProfileModal(true);
        }
      }, [isNewRegistration, setShowProfileModal]);
    
      const handleCloseModal = () => {
        setShowProfileModal(false);
        setIsNewRegistration(false); // Réinitialiser après fermeture
      };

  return (
    <div className='h-screen bg-gradient-to-br from-orange-600 to-red-600 p-2 overflow-hidden'>
        <div className="flex h-full min-h-screen">
            <div className="w-[260px] p-2">    
                <NavigationR/>
            </div>
            <div className="flex-1 flex flex-col ml-2">

                <NavigationT />
                <div className="flex-1 mb-6 bg-gray-50 rounded-xl p-4 overflow-auto">
                    <Outlet />
                </div>

            </div>           
        </div>
        {showProfileModal && createPortal(
            <ProfilModal 
            isOpen={showProfileModal} 
            onClose={handleCloseModal} 
            />,
            document.body
        )}
    </div>
  )
}

export default Tache