'use client';

import Link from 'next/link';

const messages = [
  '🏠 Compre casa a preço de custo com o modelo cooperativo',
  '📊 Transparência total: plano de negócios aberto para todos os cooperantes',
  '📍 Projetos em Lisboa, Oeiras, Miraflores, Caparica e mais',
];

export default function TopBar() {
  return (
    <div
      className="relative flex items-center overflow-hidden"
      style={{ height: '36px', backgroundColor: '#0a1a0e' }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          animation: marquee 28s linear infinite;
          white-space: nowrap;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {/* Repeat twice for seamless loop */}
        {[...messages, ...messages].map((msg, i) => (
          <span
            key={i}
            className="inline-flex items-center text-white/80 text-xs font-medium"
            style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
          >
            {msg}
            <span className="mx-6 text-white/30">|</span>
          </span>
        ))}
      </div>

      {/* Right fade + CTA */}
      <div
        className="absolute right-0 top-0 bottom-0 flex items-center pr-4 pl-12"
        style={{
          background:
            'linear-gradient(to right, transparent, #0a1a0e 40%)',
          zIndex: 10,
        }}
      >
        <Link
          href="/como-funciona"
          className="text-xs font-semibold hover:underline transition-colors whitespace-nowrap"
          style={{ color: '#52b788' }}
        >
          Saber mais →
        </Link>
      </div>
    </div>
  );
}
