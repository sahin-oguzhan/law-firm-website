import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import axios from 'axios';

export default function AboutMe() {
  const [data, setData] = useState({ description: '', imageUrl: '' });
  const [loading, setLoading] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ description: '', imageUrl: '' });

  const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/about');
      if (!res.data.description) {
        setData({
          description:
            'Hukuk büromuz, müvekkillerine en iyi hizmeti sunmak için...',
          imageUrl: 'https://i.imgur.com/9yn61Ty.jpeg',
        });
      } else {
        setData(res.data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Veri çekilemedi', error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:8080/api/about', editForm);
      setData(editForm);
      setIsEditing(false);
      alert('Hakkımda kısmı güncellendi! ✅');
    } catch (error) {
      alert('Hata oluştu! ❌');
    }
  };

  const handleEditClick = () => {
    setEditForm(data);
    setIsEditing(true);
  };

  return (
    <section id="hakkimda" className="py-24 bg-white relative group">
      {isAdmin && (
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleEditClick}
            className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary transition transform hover:scale-105"
          >
            <span>✏️</span>
            <span className="font-bold text-sm">Düzenle</span>
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              <img
                src={data.imageUrl || 'https://i.imgur.com/9yn61Ty.jpeg'}
                alt="Av. Aleyna Öçgün"
                className="relative z-10 rounded-sm shadow-2xl w-full h-125 object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div>
              <h2 className="font-serif text-4xl text-secondary mb-6">
                Hakkımda
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>

              {loading ? (
                <p>Yükleniyor...</p>
              ) : (
                <div className="prose prose-lg text-gray-600">
                  <p className="whitespace-pre-wrap leading-relaxed">
                    {data.description}
                  </p>
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="font-serif text-xl text-secondary italic">
                  Av. Aleyna Öçgün
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6 text-secondary border-b pb-2">
              Hakkımda Kısmını Düzenle
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Profil Fotoğrafı URL
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={editForm.imageUrl}
                  onChange={(e) =>
                    setEditForm({ ...editForm, imageUrl: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Açıklama Yazısı
                </label>
                <textarea
                  rows="10"
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-primary outline-none"
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  İpucu: Paragraf bırakmak için 2 kere Enter'a basın.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded font-bold"
              >
                İptal
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-secondary text-white rounded font-bold hover:bg-opacity-90"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
