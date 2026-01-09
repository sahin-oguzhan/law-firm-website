import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import axios from 'axios';

export default function PracticeAreas() {
  const [practices, setPractices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State'leri
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    iconCode: 'fa-solid fa-gavel',
  });

  const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';

  const fetchPractices = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/practices');
      setPractices(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Veri çekilemedi', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPractices();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Bu uzmanlık alanını silmek istediğine emin misin?')) {
      await axios.delete(`http://localhost:8080/api/practices/${id}`);
      fetchPractices();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/practices', formData);
    setIsModalOpen(false);
    fetchPractices();
  };

  const openEditModal = (item) => {
    setFormData(item);
    setIsModalOpen(true);
  };
  const openAddModal = () => {
    setFormData({
      id: null,
      title: '',
      description: '',
      iconCode: 'fa-solid fa-gavel',
    });
    setIsModalOpen(true);
  };

  return (
    <section id="uzmanlik" className="py-32 bg-surface-light relative">
      <RevealOnScroll width="100%">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative">
            <span className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold mb-4 block">
              Faaliyet Alanlarımız
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary font-normal mb-6">
              Uzmanlık Alanları
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>

            {isAdmin && (
              <button
                onClick={openAddModal}
                className="absolute right-0 top-0 bg-primary text-white px-4 py-2 rounded shadow hover:bg-opacity-90 transition flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
              >
                <span>➕</span> Yeni Ekle
              </button>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {practices.map((area, index) => {
                const isFeatured = index === 1;

                return (
                  <div
                    key={area.id}
                    className={`
                      group relative p-12 bg-white border border-gray-100 rounded-sm transition-all duration-500
                      hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 flex flex-col items-center text-center
                      ${
                        isFeatured
                          ? 'md:-translate-y-6 hover:-translate-y-8 shadow-xl'
                          : 'hover:-translate-y-2'
                      }
                    `}
                  >
                    {isAdmin && (
                      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openEditModal(area);
                          }}
                          className="w-6 h-6 bg-blue-50 text-blue-600 rounded flex items-center justify-center hover:bg-blue-100 text-xs"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(area.id);
                          }}
                          className="w-6 h-6 bg-red-50 text-red-600 rounded flex items-center justify-center hover:bg-red-100 text-xs"
                        >
                          🗑️
                        </button>
                      </div>
                    )}

                    {isFeatured && (
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    )}

                    <div className="w-20 h-20 mb-8 rounded-full bg-surface-light flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <i
                        className={`${
                          area.iconCode || 'fa-solid fa-gavel'
                        } text-3xl`}
                      ></i>
                    </div>

                    <h3 className="font-display text-lg font-bold text-secondary mb-4 tracking-wider uppercase group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-gray-500 font-sans font-light text-sm leading-relaxed mb-8 px-2">
                      {area.description}
                    </p>

                    <a
                      href="#"
                      className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase border-b-2 border-transparent group-hover:border-primary transition-all pb-1"
                    >
                      Detaylı Bilgi
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </RevealOnScroll>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[10000] backdrop-blur-sm">
          <div className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-lg">
            <h3 className="text-2xl font-serif text-secondary mb-6 border-b pb-4">
              {formData.id ? 'Düzenle' : 'Yeni Uzmanlık Alanı'}
            </h3>
            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Başlık
                </label>
                <input
                  className="w-full border border-gray-200 p-3 focus:border-primary focus:ring-0 outline-none transition"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  placeholder="Örn: Ceza Hukuku"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Açıklama
                </label>
                <textarea
                  className="w-full border border-gray-200 p-3 focus:border-primary focus:ring-0 outline-none transition"
                  rows="4"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  placeholder="Açıklama giriniz..."
                ></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  İkon Kodu (FontAwesome)
                </label>
                <div className="flex gap-2">
                  <input
                    className="w-full border border-gray-200 p-3 bg-gray-50"
                    value={formData.iconCode}
                    onChange={(e) =>
                      setFormData({ ...formData, iconCode: e.target.value })
                    }
                    placeholder="fa-solid fa-gavel"
                  />
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary">
                    <i className={formData.iconCode}></i>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 text-gray-500 hover:text-secondary text-sm font-bold tracking-wider"
                >
                  İPTAL
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white text-sm font-bold tracking-wider hover:bg-opacity-90 transition"
                >
                  KAYDET
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
