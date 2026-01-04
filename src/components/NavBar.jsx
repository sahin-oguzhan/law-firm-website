import { HiOutlineScale } from 'react-icons/hi2';

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-light/95 backdrop-blur-md shadow-sm border-b border-primary/20 transition-all duration-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 border border-primary flex items-center justify-center rounded-sm transition-colors group-hover:bg-primary group-hover:text-white">
              <HiOutlineScale
                size={28}
                className="text-primary group-hover:text-white transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-display font-bold text-xl text-secondary tracking-[0.15em] leading-none mb-1">
                ALEYNA
              </h1>
              <h2 className="font-display text-[10px] text-primary font-bold tracking-[0.3em] uppercase leading-none">
                HUKUK BÜROSU
              </h2>
            </div>
          </a>
          <nav className="hidden md:flex space-x-20 items-center">
            <NavItem text="HAKKIMIZDA" />
            <NavItem text="UZMANLIK ALANLARI" />
            <NavItem text="EKİBİMİZ" />
            <NavItem text="YAYINLAR" />
            <NavItem text="İLETİŞİM" />
          </nav>
          <div className="md:hidden text-secondary">☰</div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ text }) {
  return (
    <a
      href="#"
      className="font-display text-xs font-semibold text-secondary hover:text-primary transition-colors tracking-[0.15em]"
    >
      {text}
    </a>
  );
}
