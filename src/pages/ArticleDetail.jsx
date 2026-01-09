import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/articles/${id}`);
        setArticle(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <div className="text-center py-20">Yükleniyor...</div>;
  if (!article)
    return <div className="text-center py-20">Makale bulunamadı.</div>;

  return (
    <div className="py-32 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-primary font-bold hover:underline mb-8 inline-block"
        >
          ← Ana Sayfaya Dön
        </Link>

        <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg mb-10">
          <img
            src={
              article.imageUrl ||
              'https://images.unsplash.com/photo-1589829085413-56de8ae18c73'
            }
            className="w-full h-full object-cover"
            alt={article.title}
          />
        </div>

        <span className="text-primary text-xs font-bold tracking-widest uppercase">
          HUKUKİ BİLGİLENDİRME
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-secondary mt-2 mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="prose prose-lg text-gray-600 max-w-none whitespace-pre-line leading-relaxed">
          {article.content}
        </div>
      </div>
    </div>
  );
}
