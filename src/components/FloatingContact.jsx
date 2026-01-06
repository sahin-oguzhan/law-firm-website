import React, { useState } from 'react';
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiXMark,
  HiChatBubbleLeftRight,
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = {
    phone: '+905555555555',
    email: 'info@aleynahukuk.com',
    whatsapp: '905555555555',
    message: 'Merhaba, hukuki danışmanlık almak istiyorum.',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 translate-y-10 invisible'
        }`}
      >
        <a
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-3 group"
        >
          <span className="bg-white text-secondary text-xs font-bold py-1 px-3 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            E-Posta Gönder
          </span>
          <div className="w-12 h-12 bg-white text-secondary hover:bg-secondary hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all border border-gray-100">
            <HiOutlineEnvelope size={24} />
          </div>
        </a>

        <a
          href={`https://wa.me/${
            contactInfo.whatsapp
          }?text=${encodeURIComponent(contactInfo.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <span className="bg-white text-secondary text-xs font-bold py-1 px-3 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            WhatsApp
          </span>
          <div className="w-12 h-12 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-full shadow-lg flex items-center justify-center transition-all">
            <FaWhatsapp size={26} />
          </div>
        </a>

        <a
          href={`tel:${contactInfo.phone}`}
          className="flex items-center gap-3 group"
        >
          <span className="bg-white text-secondary text-xs font-bold py-1 px-3 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Hemen Ara
          </span>
          <div className="w-12 h-12 bg-white text-primary hover:bg-primary hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all border border-gray-100">
            <HiOutlinePhone size={24} />
          </div>
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative
          ${
            isOpen
              ? 'bg-secondary rotate-90'
              : 'bg-primary hover:scale-110 hover:bg-[#8E7038]'
          }
        `}
      >
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
        )}

        <div className="relative z-10 text-white">
          {isOpen ? <HiXMark size={32} /> : <HiChatBubbleLeftRight size={32} />}
        </div>
      </button>
    </div>
  );
}
