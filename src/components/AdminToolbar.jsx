import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminToolbar() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';

  if (!isAdmin) return null;

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    window.location.reload();
  };

  return (
    <div className="bg-gray-900 text-white py-2 px-4 flex justify-between items-center fixed top-0 left-0 w-full z-[9999] shadow-md text-sm">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="font-bold tracking-wide">YÖNETİCİ MODU AKTİF</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-xs hidden sm:inline">
          Düzenlemek için kalem ikonlarına tıklayın
        </span>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition text-xs font-bold"
        >
          ÇIKIŞ YAP
        </button>
      </div>
    </div>
  );
}
