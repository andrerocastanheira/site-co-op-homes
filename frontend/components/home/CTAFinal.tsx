'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function CTAFinal() {
  return (
    <section
      className="relative py-28 flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/home-cta.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(11,18,32,0.80)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#52b788' }}
          >
            Dê o primeiro passo
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight"
          >
            Quer explorar se o modelo cooperativo é para si?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.72)' }}
          >
            Agende uma conversa sem compromisso com a nossa equipa ou solicite informação sobre os projetos abertos. Respondemos sempre em menos de 24 horas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm transition-colors"
                style={{ backgroundColor: '#1c6b45', color: '#ffffff' }}
              >
                Falar com a equipa
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm transition-colors"
                style={{
                  border: '2px solid rgba(255,255,255,0.65)',
                  color: '#ffffff',
                }}
              >
                Ver oportunidades abertas
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
