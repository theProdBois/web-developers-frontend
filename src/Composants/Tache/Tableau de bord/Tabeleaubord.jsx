import React, { useState, useEffect } from 'react';

function Status() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(7);

  const activities = [
    {
      date: 'Lundi 7',
      app: 'PhotoShop',
      developer: 'Crafter',
      description: 'Rejeter , y a problème',
      status: 'Rejeter',
      icon: '🎨'
    },
    {
      date: 'Dima 6',
      app: 'Scanner',
      developer: 'Crafter',
      description: 'App Scanner validée aujourd\'hui',
      status: 'Valider',
      icon: '📱'
    },
    {
      date: 'Sam 5',
      app: 'PhotoShop',
      developer: 'Crafter',
      description: 'Pas encore valider',
      status: 'En attente',
      icon: '🎨'
    },
    {
      date: 'Dima 6',
      app: 'Scanner',
      developer: 'Crafter',
      description: 'App Scanner validée aujourd\'hui',
      status: 'Valider',
      icon: '📱'
    }
  ];

  const stats = {
    revenues: {
      d17: '10 258.021 DNT',
      flouci: '1 258.021 DNT',
      operateur: '958.021 DNT',
      total: '12 494.063 DNT'
    },
    applications: {
      enAttente: 5,
      publiees: 51
    },
    downloads: '2.5 K'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
      const months = [
          'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
          'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ];
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      
      return `${month} ${year} ${hours}:${minutes}:${seconds}`;
  };

  const generateCalendar = () => {
      const today = new Date();
      const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
      const calendarDays = [];
      
      // Générer 11 jours : 5 avant + aujourd'hui + 5 après
      for (let i = -5; i <= 5; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);
          
          const dayName = dayNames[date.getDay()];
          const dayNumber = date.getDate();
          
          calendarDays.push({
              dayName: dayName,
              dayNumber: dayNumber,
              fullDate: date,
              isToday: i === 0
          });
      }
    
    return calendarDays.map((day, index) => (
        <div key={index} className="text-center flex-1">
            <div className="text-xs text-gray-500 mb-1">{day.dayName}</div>
            <div 
                className={`text-xs w-8 h-6 mx-auto rounded flex items-center justify-center cursor-pointer ${
                    day.dayNumber === selectedCalendarDate 
                        ? 'bg-red-500 text-white' 
                        : day.isToday 
                        ? 'bg-orange-200 border border-orange-400' 
                        : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCalendarDate(day.dayNumber)}
            >
                {day.dayNumber}
            </div>
        </div>
    ));
};

  return (
    <div className="p-4 bg-gray-50 min-h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-3">
        
        {/* Colonne gauche - Calendar et Activities */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Date et Calendar */}
          <div className=" rounded-lg">
            <div className="rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="px-3 py-1 w-full bg-orange-100 rounded-[6px] text-[16px] font-semibold text-orange-500">
                  {formatDateTime(currentDateTime)}
                </div>
              </div>
              <div className="flex space-x-1">
                {generateCalendar()}
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <h3 className="text-lg font-semibold text-orange-500 mb-2">Activité récente</h3>
            <div className="space-y-2">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between px-3 py-1 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-xs text-gray-500 w-12">{activity.date}</div>
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Ps</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{activity.app}</div>
                      <div className="text-xs text-gray-600">Développeur : {activity.developer}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-xs text-gray-600 max-w-xs">{activity.description}</div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      activity.status === 'Rejeter' 
                        ? 'bg-red-100 text-red-600' 
                        : activity.status === 'Valider'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-orange-100 text-orange-600'
                    }`}>
                      Status: {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite - Revenus */}
        <div className="bg-orange-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-6">REVENUS</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-orange-700">D17 :</span>
              <span className="font-semibold text-orange-800">{stats.revenues.d17}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-orange-700">Flouci :</span>
              <span className="font-semibold text-orange-800">{stats.revenues.flouci}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-orange-700">Operateur :</span>
              <span className="font-semibold text-orange-800">{stats.revenues.operateur}</span>
            </div>
          </div>
          
          <div className="border-t border-orange-300 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-orange-800">TOTAUX :</span>
              <span className="text-xl font-bold text-orange-600">{stats.revenues.total}</span>
            </div>
          </div>
        </div>

      </div>
      {/* Progress bars */}
      <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Application en attente</span>
                  <span className="text-orange-500 font-bold text-lg">{stats.applications.enAttente} Apk</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Par rapport à l'application publiée</div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Total d'application publié</span>
                  <span className="text-orange-500 font-bold text-lg">{stats.applications.publiees} Apk</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Par rapport à l'application non publiée</div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Téléchargements totaux</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500 font-bold text-lg">{stats.downloads}</span>
                    <span className="text-orange-500">⬇</span>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
}

export default Status;