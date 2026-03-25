'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#071410' }}>
      {/* Top gradient line */}
      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(to right, #1c6b45, #52b788)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + tagline */}
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              co.op.homes
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Gestora de cooperativas de habitação — da origem do projeto à entrega da casa, chave-na-mão.
            </p>
            <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Compre a sua casa a preço de custo. Sem margem de promotor, com total transparência.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}
            >
              Links rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/como-funciona', label: 'Como Funciona' },
                { href: '/projetos', label: 'Projetos' },
                { href: '/sobre', label: 'Sobre' },
                { href: '/contacto', label: 'Contacto' },
                { href: '/politica-privacidade', label: 'Política de Privacidade' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact + newsletter */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}
            >
              Contacto
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.5} style={{ color: '#52b788', flexShrink: 0 }} />
                <a
                  href="mailto:info@coophomes.pt"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  info@coophomes.pt
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} style={{ color: '#52b788', flexShrink: 0 }} />
                <a
                  href="tel:+351210000000"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  +351 210 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} style={{ color: '#52b788', flexShrink: 0, marginTop: '2px' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Lisboa, Portugal
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-medium mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Receba novidades sobre projetos
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="O seu email"
                  className="flex-1 px-3 py-2 rounded-md text-sm outline-none transition-colors"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'white',
                  }}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white transition-colors"
                  style={{ backgroundColor: '#1c6b45' }}
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} co.op.homes. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Gestora de Cooperativas de Habitação · Lisboa, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
