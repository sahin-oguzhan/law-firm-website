import React, { useState } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        {
          username: username,
          password: password,
        },
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (err) {
      setError('Kullanıcı adı veya şifre hatalı!');
      console.error(err);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="text-3xl font-serif text-secondary">
              Yönetici Paneli
            </h2>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              Çıkış Yap
            </button>
          </div>

          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6">
            🎉 Hoş geldiniz! Giriş işlemi başarılı.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-serif text-secondary mb-6 text-center">
          Yönetici Girişi
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifre
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition duration-300 font-medium"
          >
            Giriş Yap
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-primary transition"
          >
            ← Siteye Dön
          </a>
        </div>
      </div>
    </div>
  );
}
