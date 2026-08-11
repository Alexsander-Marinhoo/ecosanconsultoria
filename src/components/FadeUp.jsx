import React from 'react';
import { motion } from 'framer-motion';

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.45,
  yOffset = 18,
  className = '',
}) {
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 0px 0px', amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: [0.26, 1, 0.3, 1], // Crisp, fast spring-like ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
