import React from 'react'
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
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Bienvenue/>}/>
            <Route path="/tache" element={<Tache/>}>
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