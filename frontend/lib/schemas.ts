import { z } from "zod";

// Matrícula portuguesa: AA-00-AA ou 00-AA-00 ou 00-00-AA ou AA-AA-00
const matriculaRegex = /^([A-Z]{2}-\d{2}-[A-Z]{2}|\d{2}-[A-Z]{2}-\d{2}|\d{2}-\d{2}-[A-Z]{2}|[A-Z]{2}-[A-Z]{2}-\d{2})$/;

export const agendamentoSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telemovel: z.string().regex(/^\+?351?\s?9\d{8}$/, "Número de telemóvel inválido"),
  email: z.string().email("Email inválido"),
  matricula: z.string().regex(matriculaRegex, "Formato de matrícula inválido (ex: AA-00-AA)"),
  marca: z.string().min(1, "Selecione uma marca"),
  tipoServico: z.string().min(1, "Selecione um tipo de serviço"),
  data: z.string().min(1, "Selecione uma data"),
  hora: z.string().min(1, "Selecione uma hora"),
  observacoes: z.string().optional(),
});

export const orcamentoSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telemovel: z.string().regex(/^\+?351?\s?9\d{8}$/, "Número de telemóvel inválido"),
  email: z.string().email("Email inválido"),
  matricula: z.string().regex(matriculaRegex, "Formato de matrícula inválido (ex: AA-00-AA)"),
  marca: z.string().min(1, "Selecione uma marca"),
  modelo: z.string().min(1, "Indique o modelo do veículo"),
  tipoServico: z.string().min(1, "Selecione um tipo de serviço"),
  urgencia: z.enum(["Normal", "Urgente"] as const),
  descricao: z.string().min(10, "Descreva o problema com pelo menos 10 caracteres"),
});

export type AgendamentoForm = z.infer<typeof agendamentoSchema>;
export type OrcamentoForm = z.infer<typeof orcamentoSchema>;
