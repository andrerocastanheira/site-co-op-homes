"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Wrench, ClipboardCheck, Activity, CircleDot, Gauge, Wind, Cpu, Car,
  FileText, Calendar, CheckCircle, Loader2,
} from "lucide-react";
import { agendamentoSchema, orcamentoSchema, AgendamentoForm, OrcamentoForm } from "@/lib/schemas";
import { servicosOficina, marcasSelect, tiposServico, horasDisponiveis } from "@/lib/data";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

const servicoIconMap: Record<string, React.ElementType> = {
  Wrench, ClipboardCheck, Activity, CircleDot, Gauge, Wind, Cpu, Car,
};

type ActiveTab = "agendamento" | "orcamento";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs" style={{ color: "var(--color-accent)" }}>{message}</p>;
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium mb-1"
      style={{ color: "var(--color-text)", fontFamily: "DM Sans, sans-serif" }}
    >
      {children}
    </label>
  );
}

const inputClass = "w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2";
const inputStyle = { borderColor: "var(--color-border)", fontFamily: "DM Sans, sans-serif", color: "var(--color-text)" };

function AgendamentoTab() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<AgendamentoForm>({ resolver: zodResolver(agendamentoSchema) });

  async function onSubmit(data: AgendamentoForm) {
    await fetch("/api/agendamento", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 6000);
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 gap-4 text-center"
      >
        <CheckCircle size={56} strokeWidth={1.5} style={{ color: "#22c55e" }} />
        <h3 className="font-display text-3xl" style={{ color: "var(--color-text)" }}>PEDIDO ENVIADO!</h3>
        <p style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}>
          Entraremos em contacto em breve para confirmar a sua marcação.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="ag-nome">Nome completo *</Label>
          <input id="ag-nome" {...register("nome")} className={inputClass} style={inputStyle} placeholder="João Silva" />
          <FieldError message={errors.nome?.message} />
        </div>
        <div>
          <Label htmlFor="ag-tel">Telemóvel *</Label>
          <input id="ag-tel" {...register("telemovel")} className={inputClass} style={inputStyle} placeholder="912 345 678" />
          <FieldError message={errors.telemovel?.message} />
        </div>
        <div>
          <Label htmlFor="ag-email">Email *</Label>
          <input id="ag-email" type="email" {...register("email")} className={inputClass} style={inputStyle} placeholder="joao@email.pt" />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Label htmlFor="ag-matricula">Matrícula *</Label>
          <input
            id="ag-matricula"
            {...register("matricula")}
            className={inputClass}
            style={inputStyle}
            placeholder="AA-00-AA"
            onChange={(e) => { e.target.value = e.target.value.toUpperCase(); register("matricula").onChange(e); }}
          />
          <FieldError message={errors.matricula?.message} />
        </div>
        <div>
          <Label htmlFor="ag-marca">Marca *</Label>
          <select id="ag-marca" {...register("marca")} className={inputClass} style={inputStyle}>
            <option value="">Selecione uma marca</option>
            {marcasSelect.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <FieldError message={errors.marca?.message} />
        </div>
        <div>
          <Label htmlFor="ag-servico">Tipo de serviço *</Label>
          <select id="ag-servico" {...register("tipoServico")} className={inputClass} style={inputStyle}>
            <option value="">Selecione um serviço</option>
            {tiposServico.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <FieldError message={errors.tipoServico?.message} />
        </div>
        <div>
          <Label htmlFor="ag-data">Data preferida *</Label>
          <input id="ag-data" type="date" {...register("data")} className={inputClass} style={inputStyle} min={new Date().toISOString().split("T")[0]} />
          <FieldError message={errors.data?.message} />
        </div>
        <div>
          <Label htmlFor="ag-hora">Hora preferida *</Label>
          <select id="ag-hora" {...register("hora")} className={inputClass} style={inputStyle}>
            <option value="">Selecione uma hora</option>
            {horasDisponiveis.map((h) => <option key={h} value={h}>{h}</option>)}
          </select>
          <FieldError message={errors.hora?.message} />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="ag-obs">Observações</Label>
          <textarea id="ag-obs" {...register("observacoes")} rows={4} className={inputClass} style={inputStyle} placeholder="Informação adicional relevante..." />
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-sm text-white"
        style={{ background: isSubmitting ? "var(--color-text-muted)" : "var(--color-primary)", height: 52, fontFamily: "DM Sans, sans-serif" }}
      >
        {isSubmitting ? <><Loader2 size={18} className="animate-spin" />A enviar...</> : "Enviar Pedido de Marcação"}
      </motion.button>
    </form>
  );
}

function OrcamentoTab() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<OrcamentoForm>({ resolver: zodResolver(orcamentoSchema) });

  async function onSubmit(data: OrcamentoForm) {
    await fetch("/api/orcamento", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 6000);
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 gap-4 text-center"
      >
        <CheckCircle size={56} strokeWidth={1.5} style={{ color: "#22c55e" }} />
        <h3 className="font-display text-3xl" style={{ color: "var(--color-text)" }}>ORÇAMENTO SOLICITADO!</h3>
        <p style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}>
          Entraremos em contacto em breve com o seu orçamento gratuito.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="orc-nome">Nome completo *</Label>
          <input id="orc-nome" {...register("nome")} className={inputClass} style={inputStyle} placeholder="João Silva" />
          <FieldError message={errors.nome?.message} />
        </div>
        <div>
          <Label htmlFor="orc-tel">Telemóvel *</Label>
          <input id="orc-tel" {...register("telemovel")} className={inputClass} style={inputStyle} placeholder="912 345 678" />
          <FieldError message={errors.telemovel?.message} />
        </div>
        <div>
          <Label htmlFor="orc-email">Email *</Label>
          <input id="orc-email" type="email" {...register("email")} className={inputClass} style={inputStyle} placeholder="joao@email.pt" />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Label htmlFor="orc-matricula">Matrícula *</Label>
          <input
            id="orc-matricula"
            {...register("matricula")}
            className={inputClass}
            style={inputStyle}
            placeholder="AA-00-AA"
            onChange={(e) => { e.target.value = e.target.value.toUpperCase(); register("matricula").onChange(e); }}
          />
          <FieldError message={errors.matricula?.message} />
        </div>
        <div>
          <Label htmlFor="orc-marca">Marca *</Label>
          <select id="orc-marca" {...register("marca")} className={inputClass} style={inputStyle}>
            <option value="">Selecione uma marca</option>
            {marcasSelect.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <FieldError message={errors.marca?.message} />
        </div>
        <div>
          <Label htmlFor="orc-modelo">Modelo *</Label>
          <input id="orc-modelo" {...register("modelo")} className={inputClass} style={inputStyle} placeholder="ex: Corolla, XC60, 500..." />
          <FieldError message={errors.modelo?.message} />
        </div>
        <div>
          <Label htmlFor="orc-servico">Tipo de serviço *</Label>
          <select id="orc-servico" {...register("tipoServico")} className={inputClass} style={inputStyle}>
            <option value="">Selecione um serviço</option>
            {tiposServico.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <FieldError message={errors.tipoServico?.message} />
        </div>
        <div>
          <Label htmlFor="orc-urgencia">Urgência *</Label>
          <select id="orc-urgencia" {...register("urgencia")} className={inputClass} style={inputStyle}>
            <option value="">Selecione a urgência</option>
            <option value="Normal">Normal</option>
            <option value="Urgente">Urgente</option>
          </select>
          <FieldError message={errors.urgencia?.message} />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="orc-descricao">Descrição do problema *</Label>
          <textarea id="orc-descricao" {...register("descricao")} rows={5} className={inputClass} style={inputStyle} placeholder="Descreva o problema com o máximo de detalhe..." />
          <FieldError message={errors.descricao?.message} />
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-sm text-white"
        style={{ background: isSubmitting ? "var(--color-text-muted)" : "var(--color-accent)", height: 52, fontFamily: "DM Sans, sans-serif" }}
      >
        {isSubmitting ? <><Loader2 size={18} className="animate-spin" />A enviar...</> : "Pedir Orçamento Gratuito"}
      </motion.button>
    </form>
  );
}

export default function OficinaPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("agendamento");

  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center" style={{ minHeight: "70vh" }}>
        <Image src="/images/roda_manutencao.png" alt="Oficina MGL" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "rgba(10,15,30,0.85)" }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <motion.div {...fadeUpAnimate(0)} className="max-w-2xl">
            <h1 className="font-display text-white leading-none mb-3" style={{ fontSize: "clamp(56px, 8vw, 96px)" }}>
              OFICINA MGL
            </h1>
            <div className="mb-6 rounded-full" style={{ width: 64, height: 3, background: "var(--color-accent)" }} />
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "DM Sans, sans-serif" }}>
              Nunca foi tão fácil. Marque online em minutos.
            </p>

            {/* Mini-form inline */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="text"
                placeholder="Matrícula (ex: AA-00-AA)"
                className="flex-1 px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 backdrop-blur-sm"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              />
              <select
                className="px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/60 backdrop-blur-sm"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <option value="" className="text-black">Marca</option>
                {marcasSelect.map((m) => <option key={m} value={m} className="text-black">{m}</option>)}
              </select>
              <button
                onClick={() => document.getElementById("formularios")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-lg font-semibold text-sm text-white whitespace-nowrap"
                style={{ background: "var(--color-primary)", fontFamily: "DM Sans, sans-serif" }}
              >
                Agendar Marcação →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRID DE SERVIÇOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="mx-auto mb-5 rounded-full" style={{ width: 48, height: 3, background: "var(--color-accent)" }} />
            <h2 className="font-display text-5xl" style={{ color: "var(--color-text)" }}>OS NOSSOS SERVIÇOS</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {servicosOficina.map((s, i) => {
              const Icon = servicoIconMap[s.icone];
              return (
                <motion.div
                  key={s.id}
                  {...fadeUp(i)}
                  className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl border cursor-pointer transition-all duration-200 text-center"
                  style={{ borderColor: "var(--color-border)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-cyan)";
                    el.style.boxShadow = "0 4px 20px rgba(0,212,212,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {Icon && <Icon size={28} strokeWidth={1.5} style={{ color: "var(--color-text-muted)" }} />}
                  <span className="text-sm font-medium" style={{ color: "var(--color-text)", fontFamily: "DM Sans, sans-serif" }}>
                    {s.nome}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="mx-auto mb-5 rounded-full" style={{ width: 48, height: 3, background: "var(--color-accent)" }} />
            <h2 className="font-display text-5xl" style={{ color: "var(--color-text)" }}>COMO FUNCIONA</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "1", icon: FileText, title: "Preenche o formulário", desc: "Indica o teu veículo, marca e tipo de serviço pretendido. Leva menos de 2 minutos." },
              { num: "2", icon: CheckCircle, title: "Confirmamos a marcação", desc: "A nossa equipa confirma a marcação por SMS ou email no próprio dia." },
              { num: "3", icon: Calendar, title: "Entrega o carro", desc: "Na data e hora combinadas, entrega o veículo na nossa oficina em Funchal." },
            ].map((step, i) => (
              <motion.div key={i} {...fadeUp(i)} className="flex flex-col items-center text-center gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center font-display text-white text-4xl"
                  style={{ background: "var(--color-primary)" }}
                >
                  {step.num}
                </div>
                <step.icon size={28} strokeWidth={1.5} style={{ color: "var(--color-primary)" }} />
                <h3 className="font-semibold text-lg" style={{ color: "var(--color-text)", fontFamily: "DM Sans, sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)", fontFamily: "DM Sans, sans-serif" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIOS */}
      <section id="formularios" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="mx-auto mb-5 rounded-full" style={{ width: 48, height: 3, background: "var(--color-accent)" }} />
            <h2 className="font-display text-5xl" style={{ color: "var(--color-text)" }}>MARQUE OU PEÇA ORÇAMENTO</h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex border-b mb-10" style={{ borderColor: "var(--color-border)" }}>
            {[
              { key: "agendamento" as const, label: "📅 Agendar Marcação" },
              { key: "orcamento" as const, label: "🔧 Pedir Orçamento" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="relative px-6 py-4 text-sm font-semibold transition-colors"
                style={{
                  color: activeTab === tab.key ? "var(--color-text)" : "var(--color-text-muted)",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: "var(--color-accent)" }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "agendamento" ? <AgendamentoTab /> : <OrcamentoTab />}
          </motion.div>
        </div>
      </section>
    </>
  );
}
