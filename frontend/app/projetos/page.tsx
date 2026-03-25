'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Home, Search } from 'lucide-react';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/data';

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

const cardVariants: Variants = {
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
    bg: 'rgba(0,0,0,0.55)',
    color: '#ffffff',
  },
  'em-curso': {
    label: 'EM CURSO',
    bg: '#f97316',
    color: '#ffffff',
  },
};

const locations = ['Todos', 'Costa da Caparica', 'Algés / Miraflores', 'Lisboa / Rato', 'Oeiras', 'Lisboa / Palhavã'];
const statuses = [
  { value: 'todos', label: 'Todos' },
  { value: 'nova-oportunidade', label: 'Nova Oportunidade' },
  { value: '100-subscrito', label: '100% Subscrito' },
  { value: 'em-curso', label: 'Em Curso' },
];
const typologyOptions = ['Todos', 'T1', 'T2', 'T3', 'T4', 'T5'];

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full text-sm font-medium transition-all"
      style={{
        backgroundColor: isActive ? '#1c6b45' : '#ffffff',
        color: isActive ? '#ffffff' : '#374151',
        border: '1px solid',
        borderColor: isActive ? '#1c6b45' : '#d1d5db',
      }}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
      className="bg-white rounded-2xl overflow-hidden border group"
      style={{ borderColor: '#e1e5f0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
      id={project.slug}
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
          className="text-xl font-semibold mb-2"
          style={{ color: '#0a1a0e', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
          {project.name}
        </h3>

        <div className="flex flex-wrap items-center gap-4 mb-3 text-xs" style={{ color: '#6b7280' }}>
          <span className="flex items-center gap-1">
            <MapPin size={12} strokeWidth={1.5} />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Home size={12} strokeWidth={1.5} />
            {project.apartments} frações · {project.typologies}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>
          {project.description}
        </p>

        <Link
          href="/contacto"
          className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
          style={{ backgroundColor: '#1c6b45' }}
        >
          Quero mais informação
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProjetosPage() {
  const [locationFilter, setLocationFilter] = useState('Todos');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [typologyFilter, setTypologyFilter] = useState('Todos');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const locationMatch = locationFilter === 'Todos' || p.location === locationFilter;
      const statusMatch = statusFilter === 'todos' || p.status === statusFilter;
      const typologyMatch =
        typologyFilter === 'Todos' || p.typologies.includes(typologyFilter);
      return locationMatch && statusMatch && typologyMatch;
    });
  }, [locationFilter, statusFilter, typologyFilter]);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 flex items-center relative overflow-hidden"
        style={{ backgroundColor: '#071410' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(28,107,69,0.25) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#52b788' }}
            >
              Portfólio
            </p>
            <h1
              className="text-3xl md:text-5xl font-semibold mb-4 text-white"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              Cooperativas e Empreendimentos
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Explore os projetos em aberto, em curso e concluídos. Cada oportunidade é uma casa a preço de custo, com total transparência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16" style={{ backgroundColor: '#f5f7fb' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            {/* Status filter */}
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#6b7280' }}>
                Estado
              </p>
              <div className="flex flex-wrap gap-2">
                {statuses.map((s) => (
                  <FilterButton
                    key={s.value}
                    label={s.label}
                    isActive={statusFilter === s.value}
                    onClick={() => setStatusFilter(s.value)}
                  />
                ))}
              </div>
            </div>

            {/* Location filter */}
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#6b7280' }}>
                Localização
              </p>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <FilterButton
                    key={loc}
                    label={loc}
                    isActive={locationFilter === loc}
                    onClick={() => setLocationFilter(loc)}
                  />
                ))}
              </div>
            </div>

            {/* Typology filter */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#6b7280' }}>
                Tipologia
              </p>
              <div className="flex flex-wrap gap-2">
                {typologyOptions.map((typ) => (
                  <FilterButton
                    key={typ}
                    label={typ}
                    isActive={typologyFilter === typ}
                    onClick={() => setTypologyFilter(typ)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm mb-8" style={{ color: '#6b7280' }}>
            {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search size={48} strokeWidth={1.5} className="mx-auto mb-4" style={{ color: '#e1e5f0' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#0a1a0e' }}>
                Nenhum projeto encontrado
              </h3>
              <p className="text-sm mb-6" style={{ color: '#6b7280' }}>
                Experimente remover alguns filtros para ver mais resultados.
              </p>
              <button
                onClick={() => {
                  setLocationFilter('Todos');
                  setStatusFilter('todos');
                  setTypologyFilter('Todos');
                }}
                className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm text-white"
                style={{ backgroundColor: '#1c6b45' }}
              >
                Limpar filtros
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
