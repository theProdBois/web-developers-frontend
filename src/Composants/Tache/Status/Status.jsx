import React, { useState, useEffect } from 'react';


function Status() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const applications = [
    {
      id: 1,
      name: 'PhotoShop',
      version: '1.4.2',
      date: '1 Juin 2025 à 22h 05min',
      downloads: '12,030',
      revenue: '43 000.5',
      rating: 4.8,
      icon: 'Ps'
    },
    {
      id: 2,
      name: 'PhotoShop',
      version: '1.4.2',
      date: '1 Juin 2025 à 22h 05min',
      downloads: '12,030',
      revenue: '43 000.5',
      rating: 4.8,
      icon: 'Ps'
    },
    {
      id: 3,
      name: 'PhotoShop',
      version: '1.4.2',
      date: '1 Juin 2025 à 22h 05min',
      downloads: '12,030',
      revenue: '43 000.5',
      rating: 4.8,
      icon: 'Ps'
    },
    {
      id: 4,
      name: 'PhotoShop',
      version: '1.4.2',
      date: '1 Juin 2025 à 22h 05min',
      downloads: '12,030',
      revenue: '43 000.5',
      rating: 4.8,
      icon: 'Ps'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-orange-400 text-lg">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-gray-300 text-lg">★</span>
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-lg">★</span>
      );
    }

    return stars;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex-1 p-8 bg-white rounded-lg">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 shadow-sm max-w-md">
              <input
                type="text"
                placeholder="Recherche une application...."
                className="bg-transparent flex-1 outline-none text-gray-600 placeholder-gray-300"
              />
            </div>
          </div>

          {/* Applications List */}
          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-6">Listes d'applications</h2>
            
            <div className="space-y-3">
              {applications.map((app) => (
                <div key={app.id} className="bg-white border border-gray-200 rounded-lg px-6 py-1 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    {/* App Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-[14px]">{app.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-[14px]">{app.name}</h3>
                        <p className="text-gray-600 text-[13px]">Version : {app.version}</p>
                        <p className="text-gray-500 text-[13px]">Date : {app.date}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-8">
                      {/* Downloads */}
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Téléchargements</p>
                        <div className="bg-gray-100 rounded-lg px-4 py-2">
                          <span className="font-semibold">{app.downloads}</span>
                        </div>
                      </div>

                      {/* Revenue */}
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Revenus (TND)</p>
                        <div className="bg-gray-100 rounded-lg px-4 py-2">
                          <span className="font-semibold">{app.revenue}</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Note Moyenne</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {renderStars(app.rating)}
                          </div>
                          <span className="text-orange-500 font-bold text-lg">{app.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Status;