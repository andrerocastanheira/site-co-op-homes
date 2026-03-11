"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Settings, Car, Package, ArrowRight } from "lucide-react";
import CounterAnimation from "@/components/CounterAnimation";
import { marcas, servicos, metricas } from "@/lib/data";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

const servicoIcons: Record<string, React.ElementType> = {
  Wrench, Settings, Car, Package,
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full" style={{ height: "100vh", minHeight: 600 }}>
        <Image
          src="/images/slider_volvo-2.jpg"
          alt="MGL – Stand Volvo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,15,30,0.92) 40%, rgba(10,15,30,0.35) 100%)",
          }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-2xl">
            <motion.p
              {...fadeUpAnimate(0)}
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--color-cyan)" }}
            >
              Concessionário Oficial · Madeira
            </motion.p>

            <motion.h1
              {...fadeUpAnimate(1)}
              className="font-display text-white mb-6 leading-none"
              style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
            >
              O SEU CONCESSIONÁRIO NA MADEIRA
            </motion.h1>

            <motion.p
              {...fadeUpAnimate(2)}
              className="text-base md:text-lg mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "DM Sans, sans-serif" }}
            >
              Oficina autorizada e concessionário oficial de várias marcas, com equipa
              especializada e atendimento próximo.
            </motion.p>

            <motion.div {...fadeUpAnimate(3)} className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/oficina"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm"
                  style={{ background: "white", color: "var(--color-dark)", fontFamily: "DM Sans, sans-serif" }}
                >
                  Marcar Oficina
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/marcas"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm border border-white text-white"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Ver Marcas
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Métricas no fundo do hero */}
        <motion.div {...fadeUpAnimate(4)} className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              {metricas.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 px-8 text-center"
                  style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
                >
                  <div className="font-display text-white leading-none mb-1" style={{ fontSize: 56 }}>
                    {m.valor}{m.sufixo}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── MARCAS ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="mx-auto mb-5 rounded-full" style={{ width: 48, height: 3, background: "var(--color-accent)" }} />
            <h2 className="font-display text-5xl" style={{ color: "var(--color-text)" }}>AS NOSSAS MARCAS</h2>
            <p className="mt-3 text-base" style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}>
              Representantes oficiais das marcas mais reconhecidas do mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {marcas.map((marca, i) => (
              <motion.div
                key={marca.id}
                {...fadeUp(i)}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative flex flex-col items-center p-8 rounded-2xl border cursor-pointer transition-all duration-200"
                style={{ background: "#1a1a1a", borderColor: "transparent" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-primary)";
                  el.style.background = "#2a2a2a";
                  el.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "transparent";
                  el.style.background = "#1a1a1a";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="relative w-full h-16 mb-4">
                  <Image src={marca.logo} alt={marca.nome} fill className="object-contain" sizes="120px" />
                </div>
                <span className="text-sm font-medium text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {marca.nome}
                </span>
                <a
                  href={marca.stockUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-200"
                  style={{ color: "var(--color-cyan)" }}
                >
                  Ver stock →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE / MÉTRICAS ─────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--color-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()}>
            <div className="mb-6 rounded-full" style={{ width: 48, height: 3, background: "var(--color-cyan)" }} />
            <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
              MAIS DE 25 ANOS A SERVIR A MADEIRA
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "DM Sans, sans-serif" }}>
              A MGL – Mendes Gomes é uma referência no mercado automóvel madeirense. Com mais
              de duas décadas de experiência, oferecemos um serviço completo que vai da compra
              do veículo à manutenção especializada, sempre com o rigor das marcas que
              representamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { target: 25, prefixo: "+", label: "Anos" },
              { target: 5000, prefixo: "+", label: "Clientes" },
              { target: 5, prefixo: "", label: "Marcas" },
            ].map((m, i) => (
              <motion.div key={i} {...fadeUp(i)} className="text-center">
                <div className="font-display text-white leading-none mb-2" style={{ fontSize: 72 }}>
                  {m.prefixo}<CounterAnimation target={m.target} />
                </div>
                <div className="text-sm uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="mx-auto mb-5 rounded-full" style={{ width: 48, height: 3, background: "var(--color-accent)" }} />
            <h2 className="font-display text-5xl" style={{ color: "var(--color-text)" }}>OS NOSSOS SERVIÇOS</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {servicos.map((s, i) => {
              const Icon = servicoIcons[s.icone];
              return (
                <motion.div
                  key={s.id}
                  {...fadeUp(i)}
                  className="group relative bg-white rounded-2xl p-8 border overflow-hidden transition-all duration-200"
                  style={{ borderColor: "var(--color-border)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderLeftColor = "var(--color-primary)";
                    el.style.borderLeftWidth = "3px";
                    el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderLeftColor = "var(--color-border)";
                    el.style.borderLeftWidth = "1px";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="font-display text-6xl leading-none mb-4 opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ color: "var(--color-primary)", fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    {s.ordem}
                  </div>
                  {Icon && <Icon size={28} strokeWidth={1.5} className="mb-4" style={{ color: "var(--color-primary)" }} />}
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--color-text)", fontFamily: "DM Sans, sans-serif" }}>
                    {s.nome}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}>
                    {s.descricao}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/oficina" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--color-primary)", fontFamily: "DM Sans, sans-serif" }}>
              Ver todos os serviços <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/manutencao_carro-2.png" alt="Oficina MGL" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "rgba(10,15,30,0.82)" }} />
        <motion.div {...fadeUp()} className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            PRONTO PARA MARCAR A SUA VISITA?
          </h2>
          <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "DM Sans, sans-serif" }}>
            Agende a sua marcação online em minutos. Confirmação imediata por SMS ou email.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/oficina" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm text-white" style={{ background: "var(--color-primary)", fontFamily: "DM Sans, sans-serif" }}>
                Agendar Agora
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/oficina#orcamento" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm border border-white text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Pedir Orçamento
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
