"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/marcas", label: "Marcas" },
  { href: "/oficina", label: "Oficina" },
  { href: "/contactos", label: "Contactos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-homepage, always show solid navbar
  const isSolid = !isHomepage || scrolled;

  return (
    <motion.header
      className="fixed top-9 left-0 right-0 z-50 transition-all duration-300"
      animate={{
        backgroundColor: isSolid ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        boxShadow: isSolid ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="relative w-28 h-10 flex items-center">
          <Image
            src="/images/Logo-mgl.png"
            alt="MGL – Mendes Gomes"
            fill
            className="object-contain"
            style={{ filter: isSolid ? "none" : "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: isSolid
                  ? pathname === link.href
                    ? "var(--color-primary)"
                    : "var(--color-text)"
                  : "rgba(255,255,255,0.9)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/oficina"
            className="px-5 py-2 rounded-md text-sm font-semibold text-white transition-colors duration-200"
            style={{ background: "var(--color-primary)", fontFamily: "DM Sans, sans-serif" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "var(--color-primary-hover)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "var(--color-primary)")
            }
          >
            Marcar Oficina
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <X size={24} color={isSolid ? "var(--color-text)" : "white"} />
          ) : (
            <Menu size={24} color={isSolid ? "var(--color-text)" : "white"} />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-md text-sm font-medium transition-colors"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                    background:
                      pathname === link.href ? "var(--color-surface)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/oficina"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-md text-sm font-semibold text-white text-center"
                style={{ background: "var(--color-primary)" }}
              >
                Marcar Oficina
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
