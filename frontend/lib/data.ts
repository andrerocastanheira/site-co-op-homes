export interface Project {
  id: string;
  name: string;
  location: string;
  apartments: number;
  typologies: string;
  description: string;
  status: 'nova-oportunidade' | '100-subscrito' | 'em-curso';
  image: string;
  slug: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  location: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Advantage {
  iconName: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'co.op. Caparica Hills I',
    location: 'Costa da Caparica',
    apartments: 48,
    typologies: 'T1-T4',
    description:
      'Projeto cooperativo em Costa da Caparica, a 5 minutos da praia. Empreendimento com acabamentos de qualidade superior, áreas generosas e uma comunidade de cooperantes já consolidada. 100% subscrito com entrega prevista para 2025.',
    status: '100-subscrito',
    image: '/images/caparica-hills-i.jpg',
    slug: 'caparica-hills-i',
  },
  {
    id: '2',
    name: 'co.op. Miraflores',
    location: 'Algés / Miraflores',
    apartments: 36,
    typologies: 'T1-T3',
    description:
      'Localizado em Miraflores, junto ao rio Tejo e com excelentes acessos a Lisboa. Projeto cooperativo com design contemporâneo, espaços exteriores comuns e uma localização privilegiada entre a capital e Cascais.',
    status: 'nova-oportunidade',
    image: '/images/miraflores.jpg',
    slug: 'miraflores',
  },
  {
    id: '3',
    name: 'co.op. Sol ao Rato',
    location: 'Lisboa / Rato',
    apartments: 24,
    typologies: 'T1-T3',
    description:
      'No coração de Lisboa, no bairro do Rato, este projeto cooperativo oferece uma oportunidade única de viver no centro da cidade a preço de custo. Edifício de reabilitação com identidade arquitetónica marcada.',
    status: 'nova-oportunidade',
    image: '/images/sol-ao-rato.jpg',
    slug: 'sol-ao-rato',
  },
  {
    id: '4',
    name: 'co.op. Oeiras Golf',
    location: 'Oeiras',
    apartments: 52,
    typologies: 'T2-T5',
    description:
      'Empreendimento de luxo cooperativo junto ao campo de golfe de Oeiras. Moradias e apartamentos de grandes dimensões, com piscina comunitária e jardins privados. Ideal para famílias que valorizam espaço e natureza.',
    status: 'em-curso',
    image: '/images/Oeiras Golf.jpg',
    slug: 'oeiras-golf',
  },
  {
    id: '5',
    name: 'co.op. Caparica Hills II',
    location: 'Costa da Caparica',
    apartments: 52,
    typologies: 'T1-T5',
    description:
      'Segunda fase do projeto Caparica Hills, aproveitando o sucesso e a experiência do empreendimento anterior. Maior diversidade de tipologias e novas valências comunitárias. Adesões abertas para interessados.',
    status: 'nova-oportunidade',
    image: '/images/caparica-hills-i.jpg',
    slug: 'caparica-hills-ii',
  },
  {
    id: '6',
    name: 'co.op. João XXI',
    location: 'Lisboa / Palhavã',
    apartments: 18,
    typologies: 'T1-T3',
    description:
      'Projeto boutique no bairro de Palhavã, Lisboa, com apenas 18 frações de alta qualidade. Localização premium junto à Avenida de Roma, totalmente subscrito pelos cooperantes fundadores.',
    status: '100-subscrito',
    image: '/images/miraflores.jpg',
    slug: 'joao-xxi',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Frederico Gouveia',
    role: 'Co-fundador & CEO',
    image: '/images/team/frederico.jpg',
  },
  {
    name: 'José Cunha',
    role: 'Co-fundador & Diretor de Projetos',
    image: '/images/team/Jose-cunha.jpg',
  },
  {
    name: 'José Maria',
    role: 'Diretor de Operações',
    image: '/images/team/Jose-Maria.jpg',
  },
  {
    name: 'Afonso Rodrigues',
    role: 'Gestor de Cooperativas',
    image: '/images/team/afonso.jpg',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Ana Rodrigues',
    text: 'Entrei na co.op. Caparica Hills I com algum ceticismo, mas rapidamente percebi que o modelo é mesmo diferente. Temos acesso a tudo: custos reais, relatórios mensais de obra, reuniões com a equipa. Vou poupar mais de 60 000€ face ao mercado.',
    location: 'Cooperante em Caparica Hills I',
    initials: 'AR',
  },
  {
    name: 'Miguel Ferreira',
    text: 'O que me convenceu foi a transparência. Vi o plano de negócios completo antes de assinar. A co.op.homes não tem margem escondida: pagamos mesmo o custo real da construção. É um conceito revolucionário no mercado português.',
    location: 'Cooperante em Oeiras Golf',
    initials: 'MF',
  },
  {
    name: 'Sofia Mendes',
    text: 'Depois de anos a tentar comprar casa em Lisboa sem conseguir, o modelo cooperativo foi a solução. Juntei-me à co.op. Sol ao Rato e finalmente vou conseguir viver no centro de Lisboa. A equipa é incrivelmente profissional e disponível.',
    location: 'Cooperante em Sol ao Rato',
    initials: 'SM',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'Quais são os riscos de participar numa cooperativa de habitação?',
    answer:
      'Como em qualquer projeto imobiliário, existem riscos associados, principalmente atrasos de obra e variações de custo. No modelo cooperativo da co.op.homes, esses riscos são mitigados por: plano de negócios detalhado e auditado, conta bancária segregada por projeto, seguro de caução obrigatório, e reporting mensal transparente. Os cooperantes têm sempre acesso completo à informação e participam nas decisões coletivas.',
  },
  {
    question: 'Quem gere a cooperativa e toma as decisões?',
    answer:
      'A cooperativa é gerida pelos próprios cooperantes, com a co.op.homes a atuar como gestora profissional. As decisões estratégicas são tomadas em Assembleia Geral, onde cada cooperante tem direito de voto. A co.op.homes é responsável pela execução operacional: seleção de empreiteiros, gestão de obra, contabilidade e conformidade legal, reportando regularmente aos cooperantes.',
  },
  {
    question: 'O que acontece se houver atrasos na obra?',
    answer:
      'Atrasos são possíveis em qualquer construção. No nosso modelo, os cooperantes são informados atempadamente através dos relatórios mensais. As causas são identificadas e comunicadas com transparência. Caso os atrasos sejam imputáveis a terceiros (empreiteiro, fornecedores), a cooperativa aciona as garantias contratuais. Não há penalizações diretas para os cooperantes. O custo final é de construção, independentemente do prazo.',
  },
  {
    question: 'Quais são os custos de entrada e como funcionam os pagamentos?',
    answer:
      'Os custos de entrada variam por projeto, mas tipicamente incluem: quota de adesão à cooperativa (simbólica, geralmente €500-1.000), reserva de fração (geralmente 5-10% do valor estimado), e pagamentos faseados conforme o avanço da obra. Não há custos de promotor, comissões de agência ou margens comerciais. O plano de pagamentos detalhado é apresentado antes da adesão.',
  },
  {
    question: 'Que vantagens fiscais têm os cooperantes?',
    answer:
      'O modelo cooperativo pode proporcionar vantagens fiscais significativas: isenção ou redução de IMT (Imposto Municipal sobre Transmissões), benefícios de ISP (Imposto sobre o Património), e em alguns casos, dedução de juros de crédito à habitação (se aplicável). Recomendamos sempre consulta com um contabilista para análise individualizada, pois a situação fiscal varia por cooperante.',
  },
  {
    question: 'Posso vender a minha fração depois da escritura?',
    answer:
      'Sim. Após a escritura definitiva, é proprietário pleno da sua fração e pode vendê-la livremente no mercado, como qualquer outro imóvel. Não existem restrições de revenda no nosso modelo. Dado que adquiriu a preço de custo (20-25% abaixo do mercado), beneficia imediatamente de uma mais-valia potencial desde o primeiro dia.',
  },
  {
    question: 'A co.op.homes garante a entrega da casa?',
    answer:
      'A co.op.homes é a gestora da cooperativa e não a promotora. A garantia de entrega é assegurada por seguros de caução, contratos de empreitada com penalizações, e a estrutura legal da própria cooperativa. Os cooperantes são proprietários coletivos do projeto desde o início, o que cria um nível de proteção superior ao modelo promotor-comprador tradicional.',
  },
  {
    question: 'Como é que sei que o modelo é legal e regulamentado?',
    answer:
      'As cooperativas de habitação em Portugal são regulamentadas pelo Código Cooperativo (Lei n.º 119/2015) e pela legislação específica de habitação cooperativa. Cada cooperativa é registada no RNPC (Registo Nacional de Pessoas Coletivas), tem estatutos aprovados e está sujeita a auditoria anual. A co.op.homes opera em total conformidade com a lei e todos os documentos estão disponíveis para consulta pelos cooperantes.',
  },
];

export const advantages: Advantage[] = [
  {
    iconName: 'TrendingDown',
    title: 'Preço',
    subtitle: '20–25% abaixo do mercado',
    bullets: [
      'Sem margem de promotor',
      'Reduções de custo revertem aos cooperantes',
      'Vantagens fiscais ISP/IMT',
    ],
  },
  {
    iconName: 'Eye',
    title: 'Transparência',
    subtitle: 'Plano de negócios aberto',
    bullets: [
      'Acesso a todos os custos',
      'Reporting mensal de obra',
      'Decisões coletivas',
    ],
  },
  {
    iconName: 'Home',
    title: 'Propriedade',
    subtitle: 'Proprietário desde o 1.º dia',
    bullets: [
      'Quota na cooperativa',
      'Escritura no final da obra',
      'Proteção legal',
    ],
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: 'Identificação de terreno',
    description:
      'A co.op.homes identifica e analisa terrenos viáveis em localizações com procura comprovada. São avaliados viabilidade urbanística, custos de construção estimados e potencial poupança face ao mercado.',
  },
  {
    number: 2,
    title: 'Constituição da cooperativa e adesão',
    description:
      'É constituída a cooperativa de habitação, com estatutos aprovados e conta bancária segregada. Os interessados aderem como cooperantes, subscrevendo a sua quota e reservando a tipologia pretendida.',
  },
  {
    number: 3,
    title: 'Aprovação do plano de negócios e financiamento',
    description:
      'O plano de negócios detalhado é apresentado à Assembleia Geral para aprovação. São definidos os custos reais de construção, plano de pagamentos e estrutura de financiamento. Cada cooperante conhece exatamente o custo final.',
  },
  {
    number: 4,
    title: 'Construção com reporting transparente',
    description:
      'A obra arranca com empreiteiro selecionado por concurso. Mensalmente, os cooperantes recebem relatório completo: estado da obra, custos incorridos, projeção de custos finais e eventuais desvios justificados.',
  },
  {
    number: 5,
    title: 'Entrega, escritura e gestão pós-entrega',
    description:
      'Concluída a obra, cada cooperante faz a escritura individual da sua fração pelo custo real de construção. A co.op.homes apoia na gestão pós-entrega e constituição do condomínio, garantindo uma transição completa.',
  },
];
