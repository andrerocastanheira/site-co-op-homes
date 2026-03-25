'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Home } from 'lucide-react';
import { projects } from '@/lib/data';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

const statusConfig = {
  'nova-oportunidade': {
    label: 'NOVA OPORTUNIDADE',
    bg: '#1c6b45',
    color: '#ffffff',
  },
  '100-subscrito': {
    label: '100% SUBSCRITO',
    bg: '#16a34a',
    color: '#ffffff',
  },
  'em-curso': {
    label: 'EM CURSO',
    bg: '#f97316',
    color: '#ffffff',
  },
};

export default function ProjetosDestaque() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24" style={{ backgroundColor: '#f5f7fb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <div>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-2"
              style={{ color: '#0a1a0e' }}
            >
              Cooperativas em destaque
            </h2>
            <p className="text-base" style={{ color: '#6b7280' }}>
              Oportunidades abertas e projetos em curso
            </p>
          </div>
          <Link
            href="/projetos"
            className="text-sm font-semibold whitespace-nowrap transition-colors hover:underline"
            style={{ color: '#1c6b45' }}
          >
            Ver todos os projetos →
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => {
            const status = statusConfig[project.status];
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                className="bg-white rounded-2xl overflow-hidden border group"
                style={{
                  borderColor: '#e1e5f0',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Status badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: status.bg, color: status.color }}
                  >
                    {status.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: '#0a1a0e',
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 mb-3 text-xs" style={{ color: '#6b7280' }}>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} strokeWidth={1.5} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Home size={12} strokeWidth={1.5} />
                      {project.apartments} frações · {project.typologies}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5 line-clamp-2"
                    style={{ color: '#6b7280' }}
                  >
                    {project.description}
                  </p>

                  <Link
                    href={`/projetos#${project.slug}`}
                    className="text-sm font-semibold transition-colors hover:underline"
                    style={{ color: '#1c6b45' }}
                  >
                    Ver projeto →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-12"
        >
          <Link
            href="/projetos"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#1c6b45' }}
          >
            Ver todos os projetos →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
