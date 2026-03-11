export const marcas = [
  {
    id: "toyota",
    nome: "Toyota",
    logo: "/images/brands/marca_toyota.png",
    descricao: "Fiabilidade, inovação e eficiência energética. Toyota é sinónimo de qualidade comprovada ao longo de décadas.",
    stockUrl: "https://www.toyota.pt",
    badge: "Concessionário Oficial",
  },
  {
    id: "volvo",
    nome: "Volvo",
    logo: "/images/brands/marca_volvo.png",
    descricao: "Segurança, sustentabilidade e design escandinavo. Volvo define o padrão em automóveis premium.",
    stockUrl: "https://www.volvocars.com/pt",
    badge: "Concessionário Oficial",
  },
  {
    id: "fiat",
    nome: "Fiat",
    logo: "/images/brands/marca_fiat.png",
    descricao: "Estilo italiano, praticidade urbana e uma história rica de mais de 100 anos de automobilismo.",
    stockUrl: "https://www.fiat.pt",
    badge: "Concessionário Oficial",
  },
  {
    id: "jeep",
    nome: "Jeep",
    logo: "/images/brands/marca_jeep.png",
    descricao: "Aventura, robustez e capacidade todo-o-terreno. Jeep é a referência para quem vive a liberdade.",
    stockUrl: "https://www.jeep.pt",
    badge: "Concessionário Oficial",
  },
  {
    id: "abarth",
    nome: "Abarth",
    logo: "/images/brands/marca_Abarth.png",
    descricao: "Performance, desportividade e o escorpião mais famoso do mundo. Abarth para quem não é comum.",
    stockUrl: "https://www.abarth.pt",
    badge: "Concessionário Oficial",
  },
] as const;

export type Marca = (typeof marcas)[number];

export const servicos = [
  {
    id: "revisao",
    nome: "Revisão e Manutenção",
    descricao: "Manutenção programada conforme o plano do fabricante, garantindo o bom funcionamento do seu veículo.",
    icone: "Wrench",
    ordem: "01",
  },
  {
    id: "mecanica",
    nome: "Mecânica e Diagnóstico",
    descricao: "Diagnóstico computorizado e reparação de sistemas mecânicos com equipamento de última geração.",
    icone: "Settings",
    ordem: "02",
  },
  {
    id: "colisao",
    nome: "Colisão e Carroçaria",
    descricao: "Reparação de danos de colisão, pintura e restauro da carroçaria com acabamento perfeito.",
    icone: "Car",
    ordem: "03",
  },
  {
    id: "pecas",
    nome: "Peças e Balcão",
    descricao: "Venda de peças originais e acessórios para todas as marcas que representamos.",
    icone: "Package",
    ordem: "04",
  },
] as const;

export const servicosOficina = [
  { id: "revisao", nome: "Revisão e Manutenção", icone: "Wrench" },
  { id: "ipo", nome: "Inspeção/IPO", icone: "ClipboardCheck" },
  { id: "checkup", nome: "Checkup Gratuito", icone: "Activity" },
  { id: "pneus", nome: "Pneus e Alinhamento", icone: "CircleDot" },
  { id: "travagem", nome: "Sistema de Travagem", icone: "Gauge" },
  { id: "ar", nome: "Ar Condicionado", icone: "Wind" },
  { id: "eletronica", nome: "Eletrónica", icone: "Cpu" },
  { id: "colisao", nome: "Colisão e Carroçaria", icone: "Car" },
] as const;

export const horasDisponiveis = [
  "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
];

export const tiposServico = [
  "Revisão e Manutenção",
  "Inspeção/IPO",
  "Checkup",
  "Pneus e Alinhamento",
  "Sistema de Travagem",
  "Ar Condicionado",
  "Eletrónica",
  "Colisão e Carroçaria",
  "Outro",
];

export const marcasSelect = ["Toyota", "Volvo", "Fiat", "Jeep", "Abarth"];

export const metricas = [
  { valor: 25, sufixo: "+", label: "Anos de Experiência" },
  { valor: 5, sufixo: "", label: "Marcas Representadas" },
  { valor: 100, sufixo: "%", label: "Serviço Certificado" },
];

export const metricasAbout = [
  { valor: 25, prefixo: "+", sufixo: "", label: "Anos" },
  { valor: 5000, prefixo: "+", sufixo: "", label: "Clientes" },
  { valor: 5, prefixo: "", sufixo: "", label: "Marcas" },
];
