import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/lib/data';
import { Search, BarChart2, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre — co.op.homes',
  description:
    'Conheça a co.op.homes, gestora profissional de cooperativas de habitação. Nascida da inconformidade com o mercado residencial português.',
};

const whatWeDo = [
  {
    Icon: Search,
    title: 'Originação de projetos',
    description:
      'Identificamos e analisamos terrenos com viabilidade urbanística, custos controlados e potencial de poupança significativo para os cooperantes. Cada projeto é cuidadosamente selecionado.',
  },
  {
    Icon: BarChart2,
    title: 'Estruturação de cooperativas',
    description:
      'Constituímos a cooperativa, elaboramos os estatutos, abrimos contas bancárias segregadas e estruturamos o plano de negócios detalhado. Os cooperantes conhecem cada euro antes de aderir.',
  },
  {
    Icon: Wrench,
    title: 'Gestão integrada da construção',
    description:
      'Selecionamos empreiteiros por concurso, acompanhamos a obra diariamente, reportamos mensalmente aos cooperantes e garantimos a entrega chave-na-mão com os acabamentos aprovados.',
  },
];

export default function SobrePage() {
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
              'radial-gradient(ellipse 50% 80% at 100% 50%, rgba(28,107,69,0.2) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#52b788' }}
          >
            A nossa história
          </p>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 text-white"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Sobre a co.op.homes
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Nascida da inconformidade com o mercado residencial
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-8 leading-tight"
              style={{ color: '#0a1a0e', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              Uma gestora a serviço dos cooperantes
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: '#4b5563' }}>
              <p>
                A co.op.homes nasceu da convicção de que o acesso à habitação própria não deve depender de margens de promotor. Num mercado onde a distância entre o custo real de construção e o preço de venda é sistematicamente alargada, decidimos construir uma alternativa.
              </p>
              <p>
                Somos uma gestora profissional de cooperativas de habitação. O nosso modelo é simples: identificamos os terrenos certos, estruturamos cooperativas com rigor jurídico e financeiro, gerimos a construção com transparência total e entregamos as casas chave-na-mão, com planos de negócios abertos e reporting mensal.
              </p>
              <p>
                Não somos promotores. Não temos margem comercial sobre a construção. O nosso interesse está alinhado com o dos cooperantes: entregar a melhor casa, pelo menor custo possível, no prazo definido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key numbers — dark, high-impact */}
      <section className="py-20" style={{ backgroundColor: '#071410' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 divide-x"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {[
              { value: '+150', label: 'Famílias servidas' },
              { value: '5', label: 'Projetos concluídos' },
              { value: '20–25%', label: 'Poupança média' },
              { value: '€0', label: 'Margem de promotor' },
              { value: '100%', label: 'Transparência de custos' },
              { value: '2019', label: 'Ano de fundação' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="px-10 py-12"
                style={{ borderColor: 'rgba(255,255,255,0.08)', borderTopWidth: i >= 3 ? 1 : 0, borderTopStyle: 'solid' }}
              >
                <p
                  className="text-5xl md:text-6xl font-semibold tracking-tight mb-3"
                  style={{ color: '#52b788', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                >
                  {item.value}
                </p>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-28" style={{ backgroundColor: '#f4f7f5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#52b788' }}
            >
              O nosso papel
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight"
              style={{ color: '#0a1a0e', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              O que fazemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDo.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-10 flex flex-col"
                  style={{ boxShadow: '0 1px 4px rgba(7,20,16,0.06), 0 4px 24px rgba(7,20,16,0.04)' }}
                >
                  {/* Step number */}
                  <span
                    className="text-7xl font-semibold leading-none mb-8 tabular-nums select-none"
                    style={{
                      color: 'rgba(28,107,69,0.1)',
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(28,107,69,0.08)' }}
                  >
                    <Icon size={20} strokeWidth={1.5} style={{ color: '#1c6b45' }} />
                  </div>
                  {/* Title */}
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: '#0a1a0e', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm leading-relaxed mt-auto" style={{ color: '#6b7280' }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: '#0a1a0e' }}
            >
              A nossa equipa
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Profissionais com experiência em imobiliário, construção, direito e finanças
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ color: '#0a1a0e', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                >
                  {member.name}
                </h3>
                <p className="text-sm" style={{ color: '#6b7280' }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center text-sm font-semibold transition-colors hover:underline"
              style={{ color: '#1c6b45' }}
            >
              Falar com a equipa →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ backgroundColor: '#071410' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
          >
            Pronto para conhecer o modelo?
          </h2>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Agende uma conversa sem compromisso e descubra se o modelo cooperativo é a solução para a sua casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#1c6b45' }}
            >
              Falar com a equipa
            </Link>
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ border: '2px solid rgba(255,255,255,0.5)', color: '#ffffff' }}
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
