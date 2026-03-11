"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, PhoneCall } from "lucide-react";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

const contactos = [
  { icon: Phone, label: "Telefone", valor: "+351 291 000 000", href: "tel:+351291000000" },
  { icon: Mail, label: "Email", valor: "geral@mgl.pt", href: "mailto:geral@mgl.pt" },
  { icon: MapPin, label: "Morada", valor: "Estrada Monumental, Funchal, Madeira", href: null },
  { icon: Clock, label: "Horário", valor: "Seg–Sex 08:30–18:00\nSáb 09:00–13:00", href: null },
];

export default function ContactosPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="flex flex-col items-center justify-center text-center pt-32 pb-16 px-6"
        style={{ background: "var(--color-dark)", minHeight: "36vh" }}
      >
        <motion.p
          {...fadeUpAnimate(0)}
          className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          style={{ color: "var(--color-cyan)" }}
        >
          Funchal, Madeira
        </motion.p>
        <motion.h1
          {...fadeUpAnimate(1)}
          className="font-display text-white leading-none"
          style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
        >
          FALE CONNOSCO
        </motion.h1>
        <motion.p
          {...fadeUpAnimate(2)}
          className="mt-4 text-base"
          style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
        >
          Estamos aqui para ajudar. Contacte-nos pelo meio que preferir.
        </motion.p>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Left: contact info */}
          <motion.div {...fadeUp()} className="flex flex-col gap-8">
            <div>
              <div className="mb-5 rounded-full" style={{ width: 48, height: 3, background: "var(--color-accent)" }} />
              <h2 className="font-display text-4xl mb-2" style={{ color: "var(--color-text)" }}>
                INFORMAÇÕES DE CONTACTO
              </h2>
              <p className="text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}>
                MGL – Mendes Gomes · Concessionário Oficial na Madeira
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactos.map(({ icon: Icon, label, valor, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(30,45,74,0.08)" }}
                  >
                    <Icon size={18} strokeWidth={1.5} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1"
                      style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-base font-semibold transition-colors"
                        style={{ color: "var(--color-text)", fontFamily: "DM Sans, sans-serif" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text)")}
                      >
                        {valor}
                      </a>
                    ) : (
                      <p
                        className="text-base font-semibold whitespace-pre-line"
                        style={{ color: "var(--color-text)", fontFamily: "DM Sans, sans-serif" }}
                      >
                        {valor}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/351291000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: "#25d366", fontFamily: "DM Sans, sans-serif" }}
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+351291000000"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border"
                style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", fontFamily: "DM Sans, sans-serif" }}
              >
                <PhoneCall size={18} strokeWidth={1.5} />
                Ligar agora
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            {...fadeUp(1)}
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "var(--color-border)", height: 500 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.753!2d-16.915!3d32.647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEstrada+Monumental%2C+Funchal%2C+Madeira!5e0!3m2!1spt!2spt!4v1234567890!5m2!1spt!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização MGL – Mendes Gomes, Funchal, Madeira"
            />
          </motion.div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-12" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Phone, title: "Atendimento rápido", desc: "Respondemos em menos de 2 horas durante o horário de funcionamento." },
              { icon: MapPin, title: "Fácil de encontrar", desc: "Estrada Monumental, no coração do Funchal, com estacionamento disponível." },
              { icon: Clock, title: "Horário alargado", desc: "Abertos de segunda a sexta até às 18h e sábados de manhã." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp(i)} className="flex flex-col items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "var(--color-primary)" }}
                >
                  <Icon size={20} strokeWidth={1.5} color="white" />
                </div>
                <h3 className="font-semibold" style={{ color: "var(--color-text)", fontFamily: "DM Sans, sans-serif" }}>
                  {title}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
