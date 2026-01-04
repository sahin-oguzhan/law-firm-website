import React from 'react';

export default function AboutMe() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-50 h-75 bg-primary/5 rounded-full filter blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 border-2 border-primary/20 translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="relative overflow-hidden rounded-sm shadow-xl aspect-3/4 lg:aspect-4/5">
              <img
                src="./img/aleyna.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105  "
              />

              <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-6 py-4 border-t border-r border-primary/20">
                <span className="block font-display text-2xl font-bold text-secondary">
                  10+
                </span>
                <span className="block font-sans text-xs text-primary uppercase tracking-wider">
                  Yıllık Tecrübe
                </span>
              </div>
            </div>
          </div>

          {/* --- SAĞ TARAF: BİYOGRAFİ --- */}
          <div className="space-y-8">
            <div>
              <span className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold mb-3 block"></span>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary leading-tight mb-6">
                Av. Aleyna <br />
                <span className="italic text-primary font-light">Öçgün</span>
              </h2>
              <div className="w-20 h-0.5 bg-primary"></div>
            </div>

            {/* Hakkında Yazısı */}
            <div className="space-y-4 text-gray-600 font-light leading-relaxed text-lg text-justify">
              <p>
                İstanbul Üniversitesi Hukuk Fakültesi'nden onur derecesiyle
                mezun olan Av. Aleyna Öçgün, meslek hayatına başladığı günden bu
                yana Ceza Hukuku ve Aile Hukuku alanlarında uzmanlaşmıştır.
              </p>
              <p>
                "Adalet gecikmez, hızlandırılır" ilkesiyle hareket eden
                büromuzda, her müvekkilin hikayesi bizim için biriciktir.
                Karmaşık hukuki süreçleri, müvekkillerimiz için anlaşılır ve
                yönetilebilir kılıyor, sonuca odaklı stratejiler geliştiriyoruz.
              </p>
            </div>

            {/* Eğitim & Sertifikalar Listesi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">▪</span>
                <div>
                  <h4 className="font-display text-sm font-bold text-secondary uppercase">
                    Eğitim
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    İstanbul Üniversitesi Hukuk Fakültesi
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">▪</span>
                <div>
                  <h4 className="font-display text-sm font-bold text-secondary uppercase">
                    Baro Sicil
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    İstanbul Barosu - 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">▪</span>
                <div>
                  <h4 className="font-display text-sm font-bold text-secondary uppercase">
                    Uzmanlık
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Aile Hukuku Arabuluculuğu
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="font-serif text-3xl text-gray-400 italic">
                Av. Aleyna Öçgün
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
