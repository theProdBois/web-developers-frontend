import React, { useState } from 'react';
import {FiGrid, FiUpload, FiBarChart2, FiClock, FiSettings} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../../Logo/Logo.png'

function NavigationR() {

  const [activeTab, setActiveTab] = useState('dashboard');
  const sidebarItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: FiGrid, link: '' },
    { id: 'soumission', label: 'Soumettre un APK', icon: FiUpload, link: 'soumission' },
    { id: 'statistiques', label: 'Statistiques', icon: FiBarChart2, link: 'statistiques' },
    { id: 'historique', label: 'Historique des transactions', icon: FiClock, link: 'historique' },
    { id: 'parametres', label: 'Paramètres', icon: FiSettings, link: 'parametres' }
  ];

  return (
      <div className="text-white">
        {/* Header */}
        <div className="px-4 pb-3 border-b border-orange-400">
          <div className="flex items-center gap-3">
            <img src={Logo} className='w-8 h-8 p-1 bg-white rounded-md '/>
            <h1 className="text-xl font-bold">Tounsi Store</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          {sidebarItems.map((item) => (
            <Link to={item.link}>
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-left transition-colors ${
                activeTab === item.id 
                  ? 'bg-white bg-opacity-20 border-l-[6px] border-white' 
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              
                <item.icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              
            </button>
            </Link>
          ))}
        </nav>

      </div>
  )
}

export default NavigationR