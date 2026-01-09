import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin');
  };

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: 'loading', message: 'Makale gönderiliyor...' });

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/articles`,
        formData,
      );
      setSubmitStatus({
        type: 'success',
        message: 'Makale başarıyla yayınlandı! 🎉',
      });
      setFormData({ title: '', content: '', imageUrl: '' });
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 3000);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Hata oluştu.' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-3xl font-serif text-secondary">Yönetim Paneli</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded text-sm font-bold hover:bg-red-600 transition"
          >
            ÇIKIŞ YAP
          </button>
        </div>

        {submitStatus.message && (
          <div
            className={`p-4 mb-6 rounded ${
              submitStatus.type === 'success'
                ? 'bg-green-100 text-green-700'
                : submitStatus.type === 'error'
                ? 'bg-red-100 text-red-700'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleArticleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Makale Başlığı
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Resim URL
            </label>
            <input
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              İçerik
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows="6"
              className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-primary focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitStatus.type === 'loading'}
            className="w-full bg-secondary text-white py-3 rounded hover:bg-opacity-90 transition font-bold text-lg"
          >
            {submitStatus.type === 'loading'
              ? 'Yükleniyor...'
              : 'MAKALEYİ YAYINLA'}
          </button>
        </form>
      </div>
    </div>
  );
}
