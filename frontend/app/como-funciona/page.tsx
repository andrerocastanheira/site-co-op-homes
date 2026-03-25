'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { TrendingDown, Eye, Home, ChevronDown } from 'lucide-react';
import { faqItems, steps } from '@/lib/data';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
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

function FaqItem({ item, isOpen, onToggle }: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: '#e1e5f0' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
      >
        <span
          className="text-base font-semibold"
          style={{
            color: isOpen ? '#1c6b45' : '#0a1a0e',
            fontFamily: 'var(--font-space-grotesk), sans-serif',
          }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={20} strokeWidth={1.5} style={{ color: '#1c6b45' }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="text-sm leading-relaxed pb-5"
              style={{ color: '#6b7280' }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ComoFuncionaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-[55vh] py-24 pt-40"
        style={{ backgroundColor: '#0a1a0e' }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 30% 50%, rgba(28,107,69,0.35) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#52b788' }}
            >
              Modelo cooperativo
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6"
            >
              COMO FUNCIONA O MODELO COOPERATIVO
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
            >
              O lucro da sua casa é todo para si
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {['Sem promotor', 'Plano aberto', 'Proprietário desde o 1.º dia'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: 'rgba(28,107,69,0.2)',
                    color: '#52b788',
                    border: '1px solid rgba(82,183,136,0.25)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Explanation section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2
                className="text-3xl md:text-4xl font-semibold mb-6"
                style={{ color: '#0a1a0e' }}
              >
                O que é uma cooperativa de habitação?
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                <p>
                  Uma cooperativa de habitação é uma associação de futuros proprietários que se unem para construir as suas casas em conjunto. Em vez de comprar a um promotor (que inclui a sua margem de lucro no preço), os cooperantes financiam diretamente os custos reais de construção.
                </p>
                <p>
                  O modelo existe há mais de um século na Europa, e está na base de mercados habitacionais mais equilibrados como os da Alemanha, Suíça e países nórdicos. Em Portugal, o quadro legal das cooperativas (Lei n.º 119/2015) oferece um contexto sólido para este modelo.
                </p>
                <p>
                  A co.op.homes é a gestora profissional que torna este modelo acessível: identificamos os terrenos, estruturamos a cooperativa, gerimos a construção com total transparência e entregamos a casa chave-na-mão a cada cooperante.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
                  style={{ backgroundColor: '#1c6b45' }}
                >
                  Quero saber mais
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-2 gap-x-8 gap-y-10"
            >
              {[
                { value: '20–25%', label: 'Poupança média face ao mercado' },
                { value: '+150', label: 'Famílias que já beneficiaram' },
                { value: '5', label: 'Projetos concluídos com sucesso' },
                { value: '100%', label: 'Transparência em cada euro' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="border-t pt-6"
                  style={{ borderColor: 'rgba(28,107,69,0.25)' }}
                >
                  <p
                    className="text-4xl font-semibold mb-2"
                    style={{ color: '#1c6b45', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                  >
                    {item.value}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages section */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: '#071410' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(28,107,69,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mb-20"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#52b788' }}
            >
              Porquê o modelo cooperativo
            </p>
            <h2
              className="text-3xl md:text-5xl font-semibold"
              style={{ color: '#ffffff', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              As vantagens do modelo
            </h2>
          </motion.div>

          {/* Advantages grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
            style={{ borderColor: 'rgba(82,183,136,0.15)', borderTopWidth: 1, borderBottomWidth: 1, borderStyle: 'solid' }}
          >
            {advantages.map((adv) => (
              <motion.div
                key={adv.title}
                variants={itemVariants}
                className="px-10 py-12"
              >
                {/* Metric */}
                <p
                  className="text-5xl font-semibold mb-2 tabular-nums"
                  style={{
                    color: '#52b788',
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                  }}
                >
                  {adv.title === 'Preço' ? '20–25%' : adv.title === 'Transparência' ? '100%' : 'Dia 1'}
                </p>

                {/* Title + subtitle */}
                <h3
                  className="text-xl font-semibold mb-2 mt-6"
                  style={{ color: '#ffffff', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                >
                  {adv.title}
                </h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {adv.subtitle}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {adv.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: '#52b788' }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: '#0a1a0e' }}
            >
              O processo passo a passo
            </h2>
            <p className="text-base" style={{ color: '#6b7280' }}>
              Da identificação do terreno à entrega das chaves
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ backgroundColor: 'rgba(28,107,69,0.2)' }}
            />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className={`relative flex items-start gap-8 lg:gap-0 ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Mobile / Desktop: number circle (always visible) */}
                    <div
                      className="relative z-10 flex-shrink-0 w-8 h-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                      style={{ backgroundColor: '#1c6b45' }}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 lg:w-[45%] lg:max-w-[45%] p-6 ${
                        isEven ? 'lg:mr-auto lg:ml-0 lg:pr-12' : 'lg:ml-auto lg:mr-0 lg:pl-12'
                      }`}
                      style={{ borderLeft: '2px solid rgba(28,107,69,0.25)' }}
                    >
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: '#0a1a0e', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: '#0a1a0e' }}
            >
              Perguntas frequentes
            </h2>
            <p className="text-base" style={{ color: '#6b7280' }}>
              Respostas às dúvidas mais comuns sobre o modelo cooperativo
            </p>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {faqItems.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mt-10"
          >
            <p className="text-sm mb-4" style={{ color: '#6b7280' }}>
              Tem mais perguntas? Fale diretamente com a nossa equipa.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#1c6b45' }}
            >
              Falar com a equipa
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
