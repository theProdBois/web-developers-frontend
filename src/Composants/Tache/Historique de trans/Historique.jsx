import React, { useState } from 'react';
import { 
  FaCalendar,
} from 'react-icons/fa';

function Historique() {

  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');  

  const transactions = [
    {
      id: '#E007K001',
      application: 'PhotoShop',
      version: 'v 4.2.1',
      acheteur: 'REDIDA Léo',
      modePaiement: 'D17',
      montant: '780,2 DNT',
      dateHeure: '01/06/2025 à 05:14min',
      status: 'Succès'
    },
    {
      id: '#E007K001',
      application: 'PhotoShop',
      version: 'v 4.2.1',
      acheteur: 'REDIDA Léo',
      modePaiement: 'D17',
      montant: '780,2 DNT',
      dateHeure: '01/06/2025 à 05:14min',
      status: 'Succès'
    },
    {
      id: '#E007K001',
      application: 'PhotoShop',
      version: 'v 4.2.1',
      acheteur: 'REDIDA Léo',
      modePaiement: 'D17',
      montant: '780,2 DNT',
      dateHeure: '01/06/2025 à 05:14min',
      status: 'Succès'
    }
  ];

  return (
    <div className="p-6 bg-white rounded-xl min-h-full">   

      {/* Titre de section */}
      <h2 className="text-lg font-semibold text-orange-500 mb-4">Paiement et Achat</h2>

      {/* Header avec recherche */}
      <div className="mb-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Date de début */}
            <div className="relative">
              <FaCalendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="date"
                placeholder="Date de début"
                className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
              <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">
                Date de début
              </label>
            </div>

            {/* Date de fin */}
            <div className="relative">
              <FaCalendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="date"
                placeholder="Date de fin"
                className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
              <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">
                Date de fin
              </label>
            </div>
            </div>

      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className=' bg-gray-100'>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700">AchatID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Application</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Acheteur</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Mode de paiement</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Montant</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Date et heurs</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-1 px-4 text-sm text-gray-600">{transaction.id}</td>
                <td className="py-1 px-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{transaction.application}</div>
                    <div className="text-xs text-gray-500">{transaction.version}</div>
                  </div>
                </td>
                <td className="py-1 px-4 text-sm text-gray-600">{transaction.acheteur}</td>
                <td className="py-1 px-4 text-sm text-gray-600">{transaction.modePaiement}</td>
                <td className="py-1 px-4 text-sm text-gray-600">{transaction.montant}</td>
                <td className="py-1 px-4 text-sm text-gray-600">{transaction.dateHeure}</td>
                <td className="py-1 px-4">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historique;