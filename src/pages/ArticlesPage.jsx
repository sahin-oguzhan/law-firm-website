import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/articles`)
      .then((res) => {
        setArticles(res.data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:underline transition-all"
          >
            <span>←</span> Ana Sayfaya Dön
          </Link>
        </div>

        <h2 className="text-4xl font-serif text-center text-secondary mb-12">
          Tüm Makaleler
        </h2>

        {loading ? (
          <div className="text-center py-20 text-gray-400">Yükleniyor...</div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Henüz makale eklenmemiş.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={
                      article.imageUrl ||
                      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73'
                    }
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={article.title}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl mb-3 text-secondary">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                    {article.content}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                      to={`/makale/${article.id}`}
                      className="text-primary font-bold text-xs uppercase tracking-wider hover:text-secondary transition-colors"
                    >
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
