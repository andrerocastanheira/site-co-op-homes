'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const metrics = [
  { value: '20–25%', label: 'Poupança vs. mercado' },
  { value: '100%', label: 'Transparência de custos' },
  { value: 'Dono desde o 1.º dia', label: 'Via quota na cooperativa' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/images/hero-home.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(7,20,16,0.93) 40%, rgba(7,20,16,0.35) 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#52b788' }}
          >
            Gestora de Cooperativas de Habitação
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            A SUA CASA DE SONHO,
            <br />
            A PREÇO DE CUSTO.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed mb-6"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Através do modelo cooperativo, os futuros proprietários unem-se para construir
            as suas casas diretamente — pagando apenas os custos reais de construção,
            sem margem de promotor e com total transparência em cada euro gasto.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/como-funciona"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
                style={{ backgroundColor: '#ffffff', color: '#0a1a0e' }}
              >
                Como funciona na prática
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
                style={{
                  border: '2px solid rgba(255,255,255,0.7)',
                  color: '#ffffff',
                }}
              >
                Ver cooperativas
              </Link>
            </motion.div>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 sm:gap-0"
          >
            {metrics.map((metric, i) => (
              <div key={i} className="flex items-stretch">
                {i > 0 && (
                  <div
                    className="hidden sm:block w-px mx-8 self-stretch"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  />
                )}
                <div>
                  <p
                    className="text-xl md:text-2xl font-semibold text-white mb-1"
                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                  >
                    {metric.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
