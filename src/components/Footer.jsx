import React from 'react';
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineScale,
} from 'react-icons/hi2';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="iletisim"
      className="bg-[#151515] text-white border-t border-white/5 font-sans relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-primary flex items-center justify-center rounded-sm bg-primary/10">
                <span className="font-serif text-primary text-2xl font-bold">
                  <HiOutlineScale />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-[0.15em] uppercase text-white">
                  ALEYNA
                </span>
                <span className="font-display text-[9px] text-primary tracking-[0.25em] uppercase">
                  HUKUK BÜROSU
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Hukuki süreçlerinizde şeffaflık ve güven ilkesiyle hareket eden,
              çözüm odaklı yaklaşımı benimseyen modern hukuk bürosu.
            </p>

            <div className="flex space-x-4">
              <SocialIcon icon={<FaLinkedinIn />} href="#" />
              <SocialIcon icon={<FaInstagram />} href="#" />
              <SocialIcon icon={<FaTwitter />} href="#" />
            </div>
          </div>

          <div>
            <h5 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">
              Hızlı Erişim
            </h5>
            <ul className="space-y-4">
              <FooterLink text="Anasayfa" href="#" />
              <FooterLink text="Hakkımda" href="#" />
              <FooterLink text="Uzmanlık Alanları" href="#" />
              <FooterLink text="Makaleler & Yayınlar" href="#" />
              <FooterLink text="İletişim" href="#" />
            </ul>
          </div>

          <div>
            <h5 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">
              İletişim
            </h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 text-sm font-light group">
                <HiOutlineMapPin className="text-primary text-xl mt-0.5 group-hover:text-white transition-colors shrink-0" />
                <span className="group-hover:text-gray-300 transition-colors">
                  Levent Mah. Büyükdere Cad.
                  <br />
                  Hukukçular Plaza No:15 K:8
                  <br />
                  Beşiktaş / İstanbul
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm font-light group">
                <HiOutlinePhone className="text-primary text-xl group-hover:text-white transition-colors shrink-0" />
                <span className="group-hover:text-gray-300 transition-colors">
                  +90 (212) 555 01 23
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm font-light group">
                <HiOutlineEnvelope className="text-primary text-xl group-hover:text-white transition-colors shrink-0" />
                <span className="group-hover:text-gray-300 transition-colors">
                  info@aleynahukuk.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">
              Çalışma Saatleri
            </h5>
            <ul className="space-y-4 mb-8">
              <li className="flex justify-between text-sm text-gray-400 font-light border-b border-white/5 pb-2">
                <span>Hafta İçi</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-sm text-gray-400 font-light border-b border-white/5 pb-2">
                <span>Cumartesi</span>
                <span className="text-white">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-sm text-gray-400 font-light border-b border-white/5 pb-2">
                <span>Pazar</span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  Kapalı
                </span>
              </li>
            </ul>

            <p className="text-[10px] text-gray-600 leading-normal">
              * Acil durumlarda WhatsApp hattımız üzerinden 7/24 mesaj
              bırakabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-light tracking-wide text-center md:text-left">
            © {currentYear} Av. Aleyna Öçgün. Tüm hakları saklıdır.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-white text-xs font-light transition-colors"
            >
              Yasal Uyarı
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-white text-xs font-light transition-colors"
            >
              KVKK Aydınlatma Metni
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-white text-xs font-light transition-colors"
            >
              Site Haritası
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-4 text-center">
          <p className="text-[9px] text-background-light">
            Bu web sitesi Türkiye Barolar Birliği'nin Meslek Kurallarına ve
            Reklam Yasağı Yönetmeliği'ne uygun olarak hazırlanmıştır. Sitede yer
            alan bilgiler hukuki tavsiye niteliğinde değildir.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ text, href }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-primary text-sm font-light transition-colors hover:translate-x-1 inline-block"
      >
        {text}
      </a>
    </li>
  );
}
