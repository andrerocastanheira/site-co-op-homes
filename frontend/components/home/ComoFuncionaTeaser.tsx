'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const steps = [
  {
    number: '01',
    title: 'Juntar os cooperantes',
    description:
      'Interessados unem-se e subscrevem quotas na cooperativa, tornando-se proprietários coletivos do projeto desde o início.',
  },
  {
    number: '02',
    title: 'Financiar o projeto',
    description:
      'Financiam terreno, projeto e obra, pagando apenas os custos reais, sem margem de promotor nem comissões comerciais.',
  },
  {
    number: '03',
    title: 'Entregar e escriturar',
    description:
      'Concluída a obra, cada cooperante faz a escritura individual da sua fração pelo custo real de construção.',
  },
];

export default function ComoFuncionaTeaser() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#071410' }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(28,107,69,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-20"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: '#52b788' }}
          >
            O Processo
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-3xl md:text-5xl font-semibold leading-tight"
              style={{
                color: '#ffffff',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
              }}
            >
              Como funciona o<br />modelo cooperativo
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xs md:text-right"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Um modelo centenário, agora profissionalizado.<br />
              Simples, transparente e vantajoso.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: 'rgba(82,183,136,0.15)', borderTopWidth: 1, borderBottomWidth: 1, borderStyle: 'solid' }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="px-10 py-12 md:py-10"
            >
              {/* Number */}
              <span
                className="block text-5xl font-semibold mb-8 tabular-nums"
                style={{
                  color: '#52b788',
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  opacity: 0.9,
                }}
              >
                {step.number}
              </span>

              <h3
                className="text-xl font-semibold mb-3 leading-snug"
                style={{
                  color: '#ffffff',
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 text-center"
        >
          <Link
            href="/como-funciona"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#52b788' }}
          >
            Perceber o processo em detalhe
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
