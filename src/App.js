import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tache from './Composants/Tache/Tache'
import Tabeleaubord from './Composants/Tache/Tableau de bord/Tabeleaubord'
import Soumission from './Composants/Tache/Soumission de apk/Soumission'
import Status from './Composants/Tache/Status/Status'
import Historique from './Composants/Tache/Historique de trans/Historique'
import Parametres from './Composants/Tache/Parametres/Parametres'
import Bienvenue from './Composants/Bienvenue/Bienvenue'
import NotFound from './Composants/Not Found/NotFound'

function App() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isNewRegistration, setIsNewRegistration] = useState(false);

  return (
    <BrowserRouter>
        <Routes>
            <Route 
              path='/' 
              element={
                <Bienvenue 
                  setShowProfileModal={setShowProfileModal}
                  setIsNewRegistration={setIsNewRegistration}
                />
              }
            />
            <Route 
              path="/tache" 
              element={
                <Tache 
                  showProfileModal={showProfileModal}
                  setShowProfileModal={setShowProfileModal}
                  isNewRegistration={isNewRegistration}
                  setIsNewRegistration={setIsNewRegistration}
                />
              }
            >
                <Route path='' element={<Tabeleaubord/>}/>
                <Route path='soumission' element={<Soumission/>}/>
                <Route path='statistiques' element={<Status/>}/>  
                <Route path='historique' element={<Historique/>}/>             
                <Route path='parametres' element={<Parametres/>}/>               
            </Route>

            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App