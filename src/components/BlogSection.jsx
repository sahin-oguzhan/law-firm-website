import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RevealOnScroll from './RevealOnScroll';
import { HiTrash, HiPencil } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    title: '',
    content: '',
    imageUrl: '',
  });

  const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';

  const fetchArticles = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/articles');
      setArticles(res.data.reverse());
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id, e) => {
    e.preventDefault();
    if (window.confirm('Silmek istediğine emin misin?')) {
      await axios.delete(`http://localhost:8080/api/articles/${id}`);
      fetchArticles();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await axios.put(
          `http://localhost:8080/api/articles/${formData.id}`,
          formData,
        );
        alert('Makale güncellendi! ✅');
      } else {
        await axios.post('http://localhost:8080/api/articles', formData);
        alert('Makale yayınlandı! ✍️');
      }

      setIsModalOpen(false);
      setFormData({ id: null, title: '', content: '', imageUrl: '' });
      fetchArticles();
    } catch (error) {
      alert('Hata oluştu.');
      console.error(error);
    }
  };

  const openEditModal = (article, e) => {
    e.preventDefault();
    setFormData({
      id: article.id,
      title: article.title,
      content: article.content,
      imageUrl: article.imageUrl,
    });
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setFormData({ id: null, title: '', content: '', imageUrl: '' });
    setIsModalOpen(true);
  };

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <RevealOnScroll direction="down">
            <span className="font-display text-primary tracking-[0.2em] uppercase text-xs font-bold mb-3 block">
              Güncel Hukuki Bilgiler
            </span>
            <h2 className="font-serif text-4xl text-secondary mb-4">
              Son Makaleler
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </RevealOnScroll>

          {isAdmin && (
            <button
              onClick={openAddModal}
              className="absolute right-0 top-0 bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
            >
              <span>➕</span> Makale Yaz
            </button>
          )}
        </div>

        {loading ? (
          <div className="text-center">Yükleniyor...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <RevealOnScroll key={article.id} direction="up">
                <Link
                  to={`/makale/${article.id}`}
                  className="group block h-full bg-white rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 relative border border-gray-100"
                >
                  {isAdmin && (
                    <div className="absolute top-2 right-2 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => openEditModal(article, e)}
                        className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
                        title="Düzenle"
                      >
                        <HiPencil size={18} />
                      </button>

                      <button
                        onClick={(e) => handleDelete(article.id, e)}
                        className="bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition"
                        title="Sil"
                      >
                        <HiTrash size={18} />
                      </button>
                    </div>
                  )}

                  <div className="relative overflow-hidden h-60 bg-gray-100">
                    <img
                      src={
                        article.imageUrl ||
                        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73'
                      }
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl text-secondary mb-3 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 font-light text-sm line-clamp-3 mb-4 grow">
                      {article.content}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold text-secondary uppercase border-b border-transparent group-hover:border-primary pb-0.5 transition-all">
                        Devamını Oku →
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/makaleler"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition duration-300"
          >
            Tüm Makaleleri Gör
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10000 backdrop-blur-sm px-4">
          <div className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-serif text-secondary mb-6 border-b pb-4">
              {formData.id ? 'Makaleyi Düzenle' : 'Yeni Makale Yayınla'}
            </h3>

            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Makale Başlığı
                </label>
                <input
                  className="w-full border border-gray-200 p-3 outline-none focus:border-primary transition"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Resim URL
                </label>
                <input
                  className="w-full border border-gray-200 p-3 outline-none focus:border-primary transition"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  İçerik
                </label>
                <textarea
                  className="w-full border border-gray-200 p-3 outline-none focus:border-primary transition"
                  rows="10"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 text-gray-500 font-bold hover:bg-gray-100 rounded"
                >
                  VAZGEÇ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white font-bold hover:bg-opacity-90 rounded"
                >
                  {formData.id ? 'GÜNCELLE' : 'YAYINLA'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
