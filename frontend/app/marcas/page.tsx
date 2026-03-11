"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { marcas } from "@/lib/data";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

export default function MarcasPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-6"
        style={{ background: "var(--color-dark)", minHeight: "40vh" }}
      >
        <motion.p
          {...fadeUpAnimate(0)}
          className="text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          style={{ color: "var(--color-cyan)" }}
        >
          Concessionário Oficial · Madeira
        </motion.p>
        <motion.h1
          {...fadeUpAnimate(1)}
          className="font-display text-white leading-none"
          style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
        >
          AS NOSSAS MARCAS
        </motion.h1>
        <motion.p
          {...fadeUpAnimate(2)}
          className="mt-4 max-w-xl text-base"
          style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
        >
          Representantes oficiais das marcas mais reconhecidas do mercado automóvel mundial,
          com serviço certificado na Madeira.
        </motion.p>
      </section>

      {/* GRID DE MARCAS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marcas.map((marca, i) => (
              <motion.div
                key={marca.id}
                {...fadeUp(i)}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-200"
                style={{ borderColor: "var(--color-border)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-primary)";
                  el.style.boxShadow = "0 8px 30px rgba(30,45,74,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Logo area */}
                <div
                  className="flex items-center justify-center py-10 px-8"
                  style={{ background: "#1a1a1a" }}
                >
                  <div className="relative w-full h-28">
                    <Image src={marca.logo} alt={marca.nome} fill className="object-contain" sizes="200px" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <h2 className="font-display text-3xl" style={{ color: "var(--color-text)" }}>
                    {marca.nome.toUpperCase()}
                  </h2>

                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full w-fit"
                    style={{ background: "rgba(30,45,74,0.08)", color: "var(--color-primary)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    <Award size={12} strokeWidth={1.5} />
                    {marca.badge}
                  </span>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}>
                    {marca.descricao}
                  </p>

                  <a
                    href={marca.stockUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white w-fit transition-colors"
                    style={{ background: "var(--color-primary)", fontFamily: "DM Sans, sans-serif" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-primary-hover)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-primary)")}
                  >
                    Ver stock
                    <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
