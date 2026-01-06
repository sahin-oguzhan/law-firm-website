import React from 'react';
import { motion } from 'framer-motion';

export default function RevealOnScroll({
  children,
  delay = 0,
  width = 'fit-content',
  direction = 'bottom',
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -100, y: 0 }; // Soldan gelsin
      case 'right':
        return { opacity: 0, x: 100, y: 0 }; // Sağdan gelsin
      case 'bottom':
        return { opacity: 0, y: 75, x: 0 }; // Alttan gelsin
      default:
        return { opacity: 0, y: 0, x: 0 }; // Olduğu yerde belirsin
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: delay, ease: 'easeOut' }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
