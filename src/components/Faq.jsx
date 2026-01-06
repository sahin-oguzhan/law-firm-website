import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import RevealOnScroll from './RevealOnScroll';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Dava süreci ne kadar sürer?',
      answer:
        'Her dosyanın içeriği ve mahkemelerin yoğunluğuna göre değişmekle birlikte, ortalama süreler ön görüşmede belirtilir.',
    },
    {
      question: 'Danışmanlık ücretli mi?',
      answer:
        "Barolar Birliği'nin belirlediği asgari ücret tarifesi gereğince hukuki danışmanlık hizmetleri ücretlidir.",
    },
    {
      question: 'Hangi şehirlere hizmet veriyorsunuz?',
      answer:
        "Ofisimiz İstanbul'dadır ancak Türkiye genelinde tüm dava ve hukuki süreçleri takip etmekteyiz.",
    },
    {
      question: 'Vekaletname nasıl çıkarılır?',
      answer:
        'Notere giderek avukatlık bilgilerimizle genel dava vekaletnamesi çıkartabilirsiniz. Gerekli bilgileri asistanımızdan temin edebilirsiniz.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 bg-surface-light">
      <RevealOnScroll width="100%">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-secondary">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-primary/10 rounded-sm bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-semibold text-secondary">
                    {faq.question}
                  </span>
                  <span className="text-primary text-xl">
                    {openIndex === index ? <HiMinus /> : <HiPlus />}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-40 opacity-100 p-6 pt-0'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
