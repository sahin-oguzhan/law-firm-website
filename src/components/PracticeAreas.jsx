import React from 'react';
import {
  HiOutlineScale,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from 'react-icons/hi2';

export default function PracticeAreas() {
  const areas = [
    {
      id: 1,
      title: 'Ceza Hukuku',
      description:
        'Soruşturma ve kovuşturma aşamalarında şüpheli, sanık veya mağdur vekilliği ile titiz savunma hizmeti.',
      icon: <HiOutlineScale size={32} />,
      link: '#',
    },
    {
      id: 2,
      title: 'Ticaret Hukuku',
      description:
        'Şirketler hukuku, ticari sözleşmeler, birleşme ve devralmalar konusunda uzman kurumsal danışmanlık.',
      icon: <HiOutlineBriefcase size={32} />,
      link: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Aile Hukuku',
      description:
        'Boşanma, velayet, nafaka ve mal paylaşımı davalarında hassas ve çözüm odaklı hukuki destek.',
      icon: <HiOutlineUsers size={32} />,
      link: '#',
    },
  ];

  return (
    <section id="uzmanlik" className="py-32 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold mb-4 block">
            Faaliyet Alanlarımız
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary font-normal mb-6">
            Uzmanlık Alanları
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {areas.map((area) => (
            <div
              key={area.id}
              className={`
                group relative p-12 bg-white border border-gray-100 rounded-sm transition-all duration-500
                hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 flex flex-col items-center text-center
                ${
                  area.featured
                    ? 'md:-translate-y-6 hover:-translate-y-8 shadow-xl'
                    : 'hover:-translate-y-2'
                }
              `}
            >
              {area.featured && (
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              )}

              <div className="w-20 h-20 mb-8 rounded-full bg-surface-light flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {area.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-secondary mb-4 tracking-wider uppercase group-hover:text-primary transition-colors">
                {area.title}
              </h3>

              <p className="text-gray-500 font-sans font-light text-sm leading-relaxed mb-8 px-2">
                {area.description}
              </p>

              <a
                href={area.link}
                className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase border-b-2 border-transparent group-hover:border-primary transition-all pb-1"
              >
                Detaylı Bilgi
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
