import { useState, useEffect } from 'react';
import { HiOutlineScale, HiBars3, HiXMark } from 'react-icons/hi2';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-light/95 backdrop-blur-md shadow-sm border-b border-primary/20 transition-all duration-300">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <a href="#" className="flex items-center gap-3 group relative z-50">
              <div className="w-12 h-12 border border-primary flex items-center justify-center rounded-sm transition-colors group-hover:bg-primary group-hover:text-white">
                <HiOutlineScale
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-display font-bold text-xl text-secondary tracking-[0.15em] leading-none mb-1">
                  AV. ALEYNA ÖÇGÜN
                </h1>
                <h2 className="font-display text-[10px] text-primary font-bold tracking-[0.3em] uppercase leading-none">
                  HUKUK & DANIŞMANLIK
                </h2>
              </div>
            </a>

            <nav className="hidden md:flex space-x-12 lg:space-x-16 items-center">
              <NavItem text="ANASAYFA" target="#anasayfa" />
              <NavItem text="HAKKIMDA" target="#hakkimda" />
              <NavItem text="UZMANLIK ALANLARI" target="#uzmanlik" />
              <NavItem text="SÜREÇ" target="#sürec" />
              <NavItem text="SSS" target="#sss" />
              <NavItem text="İLETİŞİM" target="#iletisim" />
            </nav>

            <button
              className="md:hidden relative z-50 p-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menüyü Aç/Kapat"
            >
              {isOpen ? <HiXMark size={32} /> : <HiBars3 size={32} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-40 bg-surface-light flex flex-col justify-center items-center
          transition-all duration-500 ease-in-out md:hidden
          ${
            isOpen
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-full pointer-events-none'
          }
        `}
      >
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <nav className="flex flex-col space-y-8 text-center relative z-10">
          <MobileNavItem text="ANASAYFA" onClick={() => setIsOpen(false)} />
          <MobileNavItem text="HAKKIMDA" onClick={() => setIsOpen(false)} />
          <MobileNavItem
            text="UZMANLIK ALANLARI"
            onClick={() => setIsOpen(false)}
          />
          <MobileNavItem
            text="SÜREÇ & İSTATİSTİKLER"
            onClick={() => setIsOpen(false)}
          />
          <MobileNavItem text="SSS" onClick={() => setIsOpen(false)} />
          <MobileNavItem text="İLETİŞİM" onClick={() => setIsOpen(false)} />

          <div className="pt-10 border-t border-primary/20 mt-10 w-48 mx-auto">
            <a
              href="tel:+902125550123"
              className="block text-primary font-serif italic text-lg mb-2"
            >
              +90 (111) 111 11 11
            </a>
            <span className="text-xs text-gray-400 font-display uppercase tracking-widest">
              İzmir, TR
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

function NavItem({ text, target }) {
  return (
    <a
      href={target}
      className="font-display text-xs font-semibold text-secondary hover:text-primary transition-colors tracking-[0.15em] relative group"
    >
      {text}
      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileNavItem({ text, target, onClick }) {
  return (
    <a
      href={target}
      onClick={onClick}
      className="font-serif text-2xl text-secondary hover:text-primary transition-colors hover:tracking-widest duration-300"
    >
      {text}
    </a>
  );
}
