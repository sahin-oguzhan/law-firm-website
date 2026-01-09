import React, { useState, useEffect } from 'react';
import { HiPlus, HiMinus, HiPencil, HiTrash } from 'react-icons/hi2';
import RevealOnScroll from './RevealOnScroll';
import axios from 'axios';

export default function FaqSection() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    question: '',
    answer: '',
  });

  const isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';

  const fetchFaqs = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/faq');
      setFaqs(res.data);
      setLoading(false);
    } catch (error) {
      console.error('FAQ verisi çekilemedi', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (window.confirm('Bu soruyu silmek istediğine emin misin?')) {
      await axios.delete(`http://localhost:8080/api/faq/${id}`);
      fetchFaqs();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/faq', formData);
    setIsModalOpen(false);
    fetchFaqs();
  };

  const openEditModal = (item, e) => {
    e.stopPropagation();
    setFormData(item);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setFormData({ id: null, question: '', answer: '' });
    setIsModalOpen(true);
  };

  return (
    <section id="sss" className="py-20 bg-surface-light relative">
      <RevealOnScroll width="100%">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative mb-12">
            <h2 className="text-3xl font-serif text-center text-secondary">
              Sıkça Sorulan Sorular
            </h2>

            {isAdmin && (
              <button
                onClick={openAddModal}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow hover:bg-green-700 transition flex items-center justify-center text-xs"
                title="Yeni Soru Ekle"
              >
                <HiPlus size={20} />
              </button>
            )}
          </div>

          {loading ? (
            <div className="text-center text-gray-400">Yükleniyor...</div>
          ) : (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id || index}
                  className="group border border-primary/10 rounded-sm bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-display font-semibold text-secondary pr-8">
                      {faq.question}
                    </span>

                    <div className="flex items-center gap-3">
                      {isAdmin && (
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                          <div
                            onClick={(e) => openEditModal(faq, e)}
                            className="text-blue-500 hover:bg-blue-50 p-1 rounded cursor-pointer"
                          >
                            <HiPencil size={18} />
                          </div>
                          <div
                            onClick={(e) => handleDelete(faq.id, e)}
                            className="text-red-500 hover:bg-red-50 p-1 rounded cursor-pointer"
                          >
                            <HiTrash size={18} />
                          </div>
                        </div>
                      )}

                      <span className="text-primary text-xl">
                        {openIndex === index ? <HiMinus /> : <HiPlus />}
                      </span>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-96 opacity-100 p-6 pt-0'
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-gray-500 font-light text-sm leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </RevealOnScroll>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[10000] backdrop-blur-sm">
          <div className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-lg">
            <h3 className="text-2xl font-serif text-secondary mb-6 border-b pb-4">
              {formData.id ? 'Soruyu Düzenle' : 'Yeni Soru Ekle'}
            </h3>
            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Soru
                </label>
                <input
                  className="w-full border border-gray-200 p-3 focus:border-primary focus:ring-0 outline-none transition"
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  required
                  placeholder="Örn: Boşanma davası ne kadar sürer?"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Cevap
                </label>
                <textarea
                  className="w-full border border-gray-200 p-3 focus:border-primary focus:ring-0 outline-none transition"
                  rows="5"
                  value={formData.answer}
                  onChange={(e) =>
                    setFormData({ ...formData, answer: e.target.value })
                  }
                  required
                  placeholder="Cevabı buraya yazınız..."
                ></textarea>
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
