'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/como-funciona', label: 'Como Funciona' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHomepage = pathname === '/';
  const isScrolled = scrollY > 80 || !isHomepage;

  const logoColor = isScrolled ? '#1c6b45' : '#ffffff';
  const textColor = isScrolled ? '#111827' : '#ffffff';
  const bgClass = isScrolled ? 'bg-white shadow-md' : 'bg-transparent';

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${bgClass}`}
        style={{
          top: isScrolled && isHomepage ? '0px' : isHomepage ? '36px' : '0px',
          transitionProperty: 'background-color, box-shadow, top',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-semibold transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                color: logoColor,
                letterSpacing: '-0.02em',
              }}
            >
              co.op.homes
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-300 hover:opacity-80"
                    style={{
                      color: isActive
                        ? '#52b788'
                        : textColor,
                      borderBottom: isActive ? '2px solid #52b788' : '2px solid transparent',
                      paddingBottom: '2px',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contacto"
                className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: '#1c6b45',
                  color: '#ffffff',
                }}
              >
                Quero ser cooperante
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md transition-colors"
              style={{ color: textColor }}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col md:hidden transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#0a1a0e' }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span
            className="text-xl font-semibold text-white"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            co.op.homes
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/70 hover:text-white"
            aria-label="Fechar menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium border-b border-white/10 transition-colors"
                style={{ color: isActive ? '#52b788' : 'rgba(255,255,255,0.85)' }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 pb-8">
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center py-3 rounded-full font-semibold text-white text-sm"
            style={{ backgroundColor: '#1c6b45' }}
          >
            Quero ser cooperante
          </Link>
        </div>
      </div>
    </>
  );
}
