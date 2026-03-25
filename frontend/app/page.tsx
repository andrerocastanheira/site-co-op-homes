import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ComoFuncionaTeaser from '@/components/home/ComoFuncionaTeaser';
import ProjetosDestaque from '@/components/home/ProjetosDestaque';
import VantagensModelo from '@/components/home/VantagensModelo';
import Testemunhos from '@/components/home/Testemunhos';
import CTAFinal from '@/components/home/CTAFinal';

export const metadata: Metadata = {
  title: 'co.op.homes — Compre casa a preço de custo',
  description:
    'Gestora de cooperativas de habitação. Compre a sua casa a preço de custo, sem margem de promotor e com transparência total em cada etapa do projeto.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComoFuncionaTeaser />
      <ProjetosDestaque />
      <VantagensModelo />
      <Testemunhos />
      <CTAFinal />
    </>
  );
}
