'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { TrendingDown, Eye, Home, Check } from 'lucide-react';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const advantages = [
  {
    Icon: TrendingDown,
    title: 'Preço',
    subtitle: '20–25% abaixo do mercado',
    bullets: [
      'Sem margem de promotor',
      'Reduções de custo revertem aos cooperantes',
      'Vantagens fiscais ISP/IMT',
    ],
  },
  {
    Icon: Eye,
    title: 'Transparência',
    subtitle: 'Plano de negócios aberto',
    bullets: [
      'Acesso a todos os custos',
      'Reporting mensal de obra',
      'Decisões coletivas',
    ],
  },
  {
    Icon: Home,
    title: 'Propriedade',
    subtitle: 'Proprietário desde o 1.º dia',
    bullets: [
      'Quota na cooperativa',
      'Escritura no final da obra',
      'Proteção legal',
    ],
  },
];

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function AnimatedCounter({ target, prefix = '', suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <p
        className="text-4xl md:text-5xl font-semibold text-white mb-2"
        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
      >
        {prefix}{count}{suffix}
      </p>
      <p className="text-sm uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.55)' }}>
        {label}
      </p>
    </div>
  );
}

export default function VantagensModelo() {
  return (
    <section className="py-24" style={{ backgroundColor: '#132d1e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md:text-4xl font-semibold text-white mb-4"
          >
            Por que escolher o modelo cooperativo?
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Elimina a margem do promotor imobiliário, proporcionando poupanças de 20–25%
            face ao mercado, além de vantagens fiscais relevantes.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {advantages.map((adv) => {
            const Icon = adv.Icon;
            return (
              <motion.div
                key={adv.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div className="mb-5">
                  <Icon size={32} strokeWidth={1.5} style={{ color: '#52b788' }} />
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-1"
                  style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                >
                  {adv.title}
                </h3>
                <p className="text-sm mb-5" style={{ color: '#52b788' }}>
                  {adv.subtitle}
                </p>
                <ul className="space-y-2">
                  {adv.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <Check size={14} strokeWidth={2} className="mt-0.5 flex-shrink-0" style={{ color: '#52b788' }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Animated counters */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <div className="text-center">
            <p
              className="text-4xl md:text-5xl font-semibold text-white mb-2"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              20–25%
            </p>
            <p className="text-sm uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Poupança média
            </p>
          </div>
          <AnimatedCounter target={150} prefix="+" label="Famílias servidas" />
          <AnimatedCounter target={5} label="Projetos concluídos" />
        </motion.div>
      </div>
    </section>
  );
}
