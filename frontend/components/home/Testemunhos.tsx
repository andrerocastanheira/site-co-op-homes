'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

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

export default function Testemunhos() {
  const dragRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-white">
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
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: '#0a1a0e' }}
          >
            O que dizem os nossos cooperantes
          </h2>
          <p className="text-base" style={{ color: '#6b7280' }}>
            Experiências reais de quem escolheu o modelo cooperativo
          </p>
        </motion.div>

        {/* Mobile: horizontal drag scroll */}
        <div className="md:hidden">
          <motion.div
            ref={dragRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide pb-4"
            drag="x"
            dragConstraints={dragRef}
            style={{ touchAction: 'pan-y' }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Desktop: grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden md:grid grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={cardVariants}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom seal */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-14"
        >
          <p
            className="text-xs uppercase tracking-widest font-medium"
            style={{ color: '#6b7280' }}
          >
            Modelo cooperativo · solução para quem não se conforma
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    name: string;
    text: string;
    location: string;
    initials: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="rounded-2xl p-7 border flex-shrink-0 w-[300px] md:w-auto"
      style={{
        borderColor: '#e1e5f0',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={1.5}
            fill="#f59e0b"
            style={{ color: '#f59e0b' }}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: '#374151' }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
          style={{ backgroundColor: '#1c6b45' }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: '#0a1a0e' }}>
            {testimonial.name}
          </p>
          <p className="text-xs" style={{ color: '#6b7280' }}>
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
