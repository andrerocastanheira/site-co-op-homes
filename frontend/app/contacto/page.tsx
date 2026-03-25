'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { projects } from '@/lib/data';

const schema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telemovel: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^(\+351)?[\s-]?9[1236]\d[\s-]?\d{3}[\s-]?\d{3}$/.test(val),
      'Número de telemóvel inválido (formato PT)'
    ),
  tipoPedido: z.string().min(1, 'Selecione um tipo de pedido'),
  projeto: z.string().min(1, 'Selecione uma opção'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type FormData = z.infer<typeof schema>;

const tiposPedido = [
  { value: '', label: 'Selecione...' },
  { value: 'informacao-geral', label: 'Informação geral' },
  { value: 'agendamento-reuniao', label: 'Agendamento de reunião' },
  { value: 'informacao-projeto', label: 'Informação sobre projeto' },
  { value: 'outro', label: 'Outro' },
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setServerError('');
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Erro ao enviar mensagem');
      setSubmitted(true);
    } catch {
      setServerError('Ocorreu um erro ao enviar a mensagem. Por favor tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" style={{ paddingTop: '72px' }}>

      {/* Left panel — dark, identidade */}
      <div
        className="lg:w-[420px] xl:w-[480px] flex-shrink-0 flex flex-col justify-between px-10 py-16 lg:py-24 relative overflow-hidden"
        style={{ backgroundColor: '#071410' }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(28,107,69,0.18) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10">
          {/* Label */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#52b788' }}
          >
            Contacto
          </p>

          {/* Headline */}
          <h1
            className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Fale connosco.<br />
            Respondemos sempre.
          </h1>

          <p className="text-base leading-relaxed mb-14" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Disponíveis para esclarecer o modelo cooperativo, projetos em curso, ou qualquer outra questão. Sem pressão comercial.
          </p>

          {/* Contactos */}
          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(82,183,136,0.12)' }}
              >
                <Phone size={17} strokeWidth={1.5} style={{ color: '#52b788' }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Telefone
                </p>
                <a
                  href="tel:+351210000000"
                  className="text-base font-medium text-white transition-opacity hover:opacity-70"
                >
                  +351 210 000 000
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(82,183,136,0.12)' }}
              >
                <Mail size={17} strokeWidth={1.5} style={{ color: '#52b788' }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Email
                </p>
                <a
                  href="mailto:info@coophomes.pt"
                  className="text-base font-medium text-white transition-opacity hover:opacity-70"
                >
                  info@coophomes.pt
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(82,183,136,0.12)' }}
              >
                <MapPin size={17} strokeWidth={1.5} style={{ color: '#52b788' }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Morada
                </p>
                <p className="text-base font-medium text-white">
                  Rua do Século 131<br />
                  1200-433 Lisboa
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Bottom note */}
        <p className="relative z-10 text-xs mt-16 lg:mt-0" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Resposta em menos de 24 horas úteis
        </p>
      </div>

      {/* Right panel — formulário */}
      <div className="flex-1 flex items-center justify-center px-8 py-16 lg:py-24 bg-white">
        <div className="w-full max-w-lg">

          {submitted ? (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'rgba(28,107,69,0.08)' }}
              >
                <CheckCircle2 size={28} strokeWidth={1.5} style={{ color: '#1c6b45' }} />
              </div>
              <h2
                className="text-2xl font-semibold mb-3"
                style={{ color: '#0a1a0e', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Mensagem enviada
              </h2>
              <p className="text-base" style={{ color: '#6b7280' }}>
                Entraremos em contacto em menos de 24 horas úteis.
              </p>
            </div>
          ) : (
            <>
              <h2
                className="text-2xl font-semibold mb-8"
                style={{ color: '#0a1a0e', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Enviar mensagem
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* Nome + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6b7280' }}>
                      Nome completo *
                    </label>
                    <input
                      {...register('nome')}
                      type="text"
                      placeholder="O seu nome"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: `1.5px solid ${errors.nome ? '#ef4444' : '#e5e7eb'}`,
                        backgroundColor: '#fafafa',
                        color: '#0a1a0e',
                      }}
                    />
                    {errors.nome && (
                      <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.nome.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6b7280' }}>
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="o.seu@email.pt"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: `1.5px solid ${errors.email ? '#ef4444' : '#e5e7eb'}`,
                        backgroundColor: '#fafafa',
                        color: '#0a1a0e',
                      }}
                    />
                    {errors.email && (
                      <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Telemóvel */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6b7280' }}>
                    Telemóvel <span style={{ color: '#9ca3af' }}>(opcional)</span>
                  </label>
                  <input
                    {...register('telemovel')}
                    type="tel"
                    placeholder="+351 912 345 678"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: `1.5px solid ${errors.telemovel ? '#ef4444' : '#e5e7eb'}`,
                      backgroundColor: '#fafafa',
                      color: '#0a1a0e',
                    }}
                  />
                  {errors.telemovel && (
                    <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.telemovel.message}</p>
                  )}
                </div>

                {/* Tipo + Projeto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6b7280' }}>
                      Tipo de pedido *
                    </label>
                    <select
                      {...register('tipoPedido')}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                      style={{
                        border: `1.5px solid ${errors.tipoPedido ? '#ef4444' : '#e5e7eb'}`,
                        backgroundColor: '#fafafa',
                        color: '#374151',
                      }}
                    >
                      {tiposPedido.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                    {errors.tipoPedido && (
                      <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.tipoPedido.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6b7280' }}>
                      Projeto *
                    </label>
                    <select
                      {...register('projeto')}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                      style={{
                        border: `1.5px solid ${errors.projeto ? '#ef4444' : '#e5e7eb'}`,
                        backgroundColor: '#fafafa',
                        color: '#374151',
                      }}
                    >
                      <option value="">Selecione...</option>
                      {projects.map((p) => (
                        <option key={p.id} value={p.slug}>{p.name}</option>
                      ))}
                      <option value="ainda-nao-sei">Ainda não sei</option>
                    </select>
                    {errors.projeto && (
                      <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.projeto.message}</p>
                    )}
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6b7280' }}>
                    Mensagem *
                  </label>
                  <textarea
                    {...register('mensagem')}
                    rows={5}
                    placeholder="Como podemos ajudar?"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      border: `1.5px solid ${errors.mensagem ? '#ef4444' : '#e5e7eb'}`,
                      backgroundColor: '#fafafa',
                      color: '#0a1a0e',
                    }}
                  />
                  {errors.mensagem && (
                    <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.mensagem.message}</p>
                  )}
                </div>

                {serverError && (
                  <p className="text-sm" style={{ color: '#ef4444' }}>{serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 disabled:opacity-60 cursor-pointer"
                  style={{ backgroundColor: '#1c6b45' }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    'Enviar mensagem'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
