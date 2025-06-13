import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import SectionGauche from '../SectionGauche/SectionGauche';
import { Link } from 'react-router-dom'

const Login = ({ onSwitchView }) => {
  const [loginData, setLoginData] = useState({
    email: 'carlosredida@gmail.com',
    password: ''
  });

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-5xl flex items-stretch animate-fadeIn">
      <SectionGauche isRegistration={false} onSwitchView={onSwitchView} />
      
      {/* Section droite - Formulaire */}
      <div className="flex-1 my-2 pl-8 border-l border-gray-100 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">
          CONNEXION DÉVELOPPEUR
        </h2>

        <div className="space-y-4 max-w-md mx-auto w-full">
          <div>
            <label className="block text-gray-600 text-[13px] mb-2">Adresse e-mail</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
                placeholder="votre@email.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-600 text-[13px] mb-2">Mot de passe</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full pl-12 pr-12 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
                placeholder="••••••••••••••••••••••••"
              />
            </div>
          </div>
          
          <div className="text-right">
            <a href="#" className="text-orange-500 text-sm hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          <div>
              <Link to="/tache" >
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors transform hover:scale-[1.02]"
              >
                Se connecter
              </button>
              </Link>
          </div>
          
          <div className="flex items-center justify-center text-gray-400 text-sm mt-4">
            <FiLock className="mr-2" size={16} />
            Vos données sont sécurisées
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;