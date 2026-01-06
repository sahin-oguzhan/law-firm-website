import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: customDelay },
  }),
};

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/img/hero-bg-desktop.png"
          />

          <img
            src="/img/hero-bg-mobile.png"
            className="w-full h-full object-cover"
            alt="Hukuk Bürosu"
          />
        </picture>
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight drop-shadow-2xl"
        >
          <span className="block mb-4 font-normal tracking-wide">
            Gelenekten Gelen Güç,
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl italic text-primary font-light font-serif mt-2 tracking-normal">
            Geleceğe Yön Veren Hukuk
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-100 font-light tracking-wide leading-relaxed opacity-90"
        >
          Hukukun üstünlüğü ilkesiyle, müvekkillerimize en yüksek standartlarda
          hukuki danışmanlık ve temsil hizmeti sunuyoruz.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-sm font-semibold rounded-sm text-white bg-primary hover:bg-[#8E7038] transition-all duration-300 shadow-lg tracking-[0.2em] font-display uppercase hover:shadow-primary/30"
          >
            WhatsApp'tan Yazın
          </a>

          <a
            href="tel:+902125550123"
            className="inline-flex items-center justify-center px-10 py-4 border border-white/80 text-sm font-semibold rounded-sm text-white hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-[0.2em] font-display uppercase bg-black/10 backdrop-blur-sm"
          >
            Hemen Arayın
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.1 } }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white opacity-60"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </motion.div>
    </section>
  );
}
