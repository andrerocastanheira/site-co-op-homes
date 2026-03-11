import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)" }}>
      {/* Gradient separator */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(to right, transparent, #1e2d4a, #00d4d4, #1e2d4a, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Logo + tagline + social */}
        <div className="flex flex-col gap-6">
          <div className="relative w-32 h-12">
            <Image
              src="/images/Logo-mgl.png"
              alt="MGL – Mendes Gomes"
              fill
              className="object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            O seu concessionário de confiança na Madeira. Mais de 25 anos ao serviço das famílias
            madeirenses com qualidade e proximidade.
          </p>
          <div className="flex gap-3">
            {["facebook", "instagram"].map((rede) => (
              <a
                key={rede}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
                aria-label={rede}
              >
                {rede === "facebook" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick links */}
        <div>
          <h4
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Links Rápidos
          </h4>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/", label: "Início" },
              { href: "/marcas", label: "Marcas Representadas" },
              { href: "/oficina", label: "Oficina e Agendamento" },
              { href: "/contactos", label: "Contactos" },
              { href: "/oficina#orcamento", label: "Pedir Orçamento" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Contacto
          </h4>
          <div className="flex flex-col gap-4">
            {[
              { icon: Phone, label: "+351 291 000 000" },
              { icon: Mail, label: "geral@mgl.pt" },
              { icon: MapPin, label: "Estrada Monumental, Funchal, Madeira" },
              { icon: Clock, label: "Seg–Sex 08:30–18:00 · Sáb 09:00–13:00" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={16} strokeWidth={1.5} style={{ color: "var(--color-cyan)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {label}
                </span>
              </div>
            ))}

            <a
              href="https://wa.me/351291000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white w-fit"
              style={{ background: "#25d366" }}
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="border-t px-6 py-6 text-center"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} MGL – Mendes Gomes. Todos os direitos reservados.
          Funchal, Madeira, Portugal.
        </p>
      </div>
    </footer>
  );
}
