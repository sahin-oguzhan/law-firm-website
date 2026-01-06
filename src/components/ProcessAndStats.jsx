import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineScale,
  HiOutlineCheckBadge,
} from 'react-icons/hi2';
import RevealOnScroll from './RevealOnScroll';

export default function ProcessAndStats() {
  const steps = [
    {
      id: 1,
      title: 'Tanışma & Dinleme',
      desc: 'Hukuki sorununuzu detaylarıyla dinliyor, notlarımızı alıyoruz.',
      icon: <HiOutlineChatBubbleLeftRight size={32} />,
    },
    {
      id: 2,
      title: 'Analiz & Strateji',
      desc: 'Dosyanızı mevzuata göre inceliyor, en doğru yol haritasını çiziyoruz.',
      icon: <HiOutlineDocumentMagnifyingGlass size={32} />,
    },
    {
      id: 3,
      title: 'Hukuki Süreç',
      desc: 'Dava ve takip süreçlerini titizlikle yönetiyor, sizi bilgilendiriyoruz.',
      icon: <HiOutlineScale size={32} />,
    },
    {
      id: 4,
      title: 'Sonuç & Çözüm',
      desc: 'Hak kaybı yaşanmaması için süreci en verimli şekilde sonuçlandırıyoruz.',
      icon: <HiOutlineCheckBadge size={32} />,
    },
  ];

  return (
    <section id="sürec" className="relative py-24 bg-secondary overflow-hidden">
      <RevealOnScroll width="100%">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/20 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-12 text-center">
            <div className="space-y-2">
              <span className="block text-4xl md:text-5xl font-serif text-primary">
                10+
              </span>
              <span className="text-xs text-gray-400 font-display uppercase tracking-widest">
                Yıllık Tecrübe
              </span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl md:text-5xl font-serif text-primary">
                500+
              </span>
              <span className="text-xs text-gray-400 font-display uppercase tracking-widest">
                Mutlu Müvekkil
              </span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl md:text-5xl font-serif text-primary">
                %98
              </span>
              <span className="text-xs text-gray-400 font-display uppercase tracking-widest">
                Memnuniyet
              </span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl md:text-5xl font-serif text-primary">
                7/24
              </span>
              <span className="text-xs text-gray-400 font-display uppercase tracking-widest">
                Ulaşılabilirlik
              </span>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Hukuki Süreç Nasıl İşler?
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Karmaşık görünen hukuki prosedürleri sizin için şeffaf, anlaşılır
              ve yönetilebilir adımlara dönüştürüyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative group">
                <span className="absolute -top-4 -left-2 text-6xl font-serif text-white/5 font-bold group-hover:text-primary/10 transition-colors select-none">
                  0{index + 1}
                </span>

                <div className="relative p-6 bg-white/5 border border-white/10 rounded-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-white font-display text-lg font-bold mb-2 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="mailto:info@aleynahukuk.com"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-sm font-display font-bold uppercase tracking-[0.2em] hover:bg-[#8E7038] transition-all shadow-lg hover:shadow-primary/20 group"
            >
              Dosyanızı Gönderin
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <p className="mt-4 text-xs text-gray-500 font-light">
              * Hukuki durumunuzla ilgili özet bilgiyi mail üzerinden
              iletebilirsiniz.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
