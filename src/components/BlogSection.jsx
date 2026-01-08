import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RevealOnScroll from './RevealOnScroll';

export default function BlogSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/articles')
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Veri çekilemedi:', err);
        setError('Makaleler yüklenirken bir sorun oluştu.');
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <section id="blog" className="py-24 bg-white">
      <RevealOnScroll width="100%">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-secondary mb-4">
              Hukuki Makaleler
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : articles.length === 0 ? (
            <p className="text-center text-gray-500">
              Henüz yayınlanmış bir makale bulunmuyor.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="relative overflow-hidden h-64 mb-6 rounded-sm w-full bg-gray-100">
                    <img
                      src={
                        article.imageUrl ||
                        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80'
                      }
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                  <div className="space-y-3 flex-1 flex flex-col">
                    <span className="text-primary text-xs font-bold tracking-widest uppercase">
                      {article.createdDate || 'GÜNCEL'}
                    </span>
                    <h3 className="font-serif text-2xl text-secondary leading-snug group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 font-light line-clamp-3 mb-4">
                      {article.content}
                    </p>

                    <div className="mt-auto pt-2">
                      <button className="text-sm font-bold text-secondary border-b border-primary pb-1 hover:text-primary transition-colors">
                        DEVAMINI OKU
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
}
