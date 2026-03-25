# Directive: co.op.homes Website — Protótipo de Alta Fidelidade

## Objetivo
Construir um site institucional moderno e premium para a **co.op.homes**, gestora de cooperativas de habitação que “reinventa a forma de comprar casa”.[web:1][web:22]  
É um protótipo funcional com ar final — pode usar placeholders, mas tudo deve parecer produto acabado orientado a leads (potenciais cooperantes e proprietários).

## Stack técnica
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (todas as animações)
- React Hook Form + Zod (formulários)
- Lucide React (ícones)

---

## Estrutura de páginas
- `/` — Homepage
- `/como-funciona` — Modelo cooperativo
- `/projetos` — Cooperativas e empreendimentos
- `/sobre` — Sobre a co.op.homes
- `/contacto` — Contacto

---

## Componentes globais

### TopBar
- Barra fina no topo (altura 36px), fundo `--color-dark`.
- Texto branco pequeno (12px), 3 mensagens em scroll horizontal contínuo:
  - "🏠 Compre casa a preço de custo com o modelo cooperativo"
  - "📊 Transparência total: plano de negócios aberto para todos os cooperantes"
  - "📍 Projetos em Lisboa, Oeiras, Miraflores, Caparica e mais"[web:2][web:22]
- Links clicáveis com texto em `--color-accent` (por ex.: "Saber mais sobre o modelo →" abre `/como-funciona`).

### Navbar
- Logo co.op.homes à esquerda.[web:22]
- Links centrados: Início | Como Funciona | Projetos | Sobre | Contacto.
- Botão CTA à direita: "Quero ser cooperante" (filled, `--color-primary`).
- Comportamento de scroll:
  - Sobre o hero: transparente, elementos em branco.
  - Após 80px: fundo branco sólido, sombra subtil, logo e links escuros.
  - Transição suave 0.3s.
- Mobile: hamburger com drawer lateral, links verticais + CTA full width.

### Footer
- Fundo `#071410`.
- 3 colunas:
  - Logo, tagline “Gestora de cooperativas de habitação — da origem do projeto à entrega da casa, chave-na-mão”.[web:2][web:23]
  - Links rápidos (Como Funciona, Projetos, Sobre, Contacto, Política de Privacidade).
  - Contacto (email, telefone, sede em Lisboa) + link para newsletter.[web:3]
- Linha superior com gradiente verde.
- Copyright cinzento 50%.
- Botão flutuante WhatsApp verde com ícone.

---

## Página: Homepage (`/`)

### Secção 1 — Hero
- Fullscreen (100vh), imagem de contexto urbano / edifício residencial contemporâneo (ex.: `/public/images/hero-coop.jpg`).[web:22]
- Overlay gradiente: `linear-gradient(to right, rgba(10,15,30,0.9) 40%, rgba(10,15,30,0.3) 100%)`.
- Conteúdo alinhado à esquerda, centrado verticalmente:
  - Label: "GESTORA DE COOPERATIVAS DE HABITAÇÃO" (uppercase, tracking largo, cor verde accent).[web:23]
  - Título: "COMPRAR CASA A PREÇO DE CUSTO".[web:22]
  - Subtítulo: explicação de que as cooperativas permitem comprar casa pagando apenas custos reais (terreno, projeto, obra), sem margem de promotor.[web:2][web:22]
  - Botões:
    - "Como funciona na prática" (filled branco → `/como-funciona`)
    - "Ver projetos em destaque" (outline → âncora para secção de projetos).
- Métricas em linha:
  - "20–25%" / "Poupança média vs. mercado tradicional".[web:2][web:18]
  - "100%" / "Transparência de custos".[web:2][web:22]
  - "Dono desde o 1.º dia" / "Via quota na cooperativa".[web:2][web:19]

### Secção 2 — Como funciona (teaser)
- Fundo branco.
- Layout 2 colunas: texto + cards.
- 3 passos (resumo de `/como-funciona`):
  1. Juntar os cooperantes — interessados unem-se e subscrevem quotas.[web:2]
  2. Financiar o projeto — financiam terreno, projeto e obra, pagando apenas custos reais.[web:2]
  3. Entregar e escriturar — cada cooperante faz escritura da sua fração no final.[web:2]
- Link: "Perceber o processo em detalhe →" para `/como-funciona`.

### Secção 3 — Projetos em destaque
- Fundo `--color-surface`.
- Título: "Cooperativas em destaque".[web:22]
- Grid de cards (3 colunas desktop).
- Cada card:
  - Badge: "NOVA OPORTUNIDADE" ou "100% SUBSCRITO".[web:2][web:22]
  - Nome: ex. "co.op. Caparica Hills II".[web:2]
  - Localização + tipologias: ex. "Costa da Caparica · 52 apartamentos · T1 a T5".[web:2][web:6]
  - Descrição curta (2–3 linhas).[web:6][web:8][web:12]
  - CTA: "Ver projeto →" (link interno ou externo).

### Secção 4 — Vantagens do modelo
- Fundo `#132d1e`.
- Texto introdutório: elimina margem do promotor, permite 20–25% de poupança + vantagens fiscais.[web:2][web:18]
- 3 vantagens com ícone:
  - Preço — “20–25% abaixo do mercado”.[web:2][web:18]
  - Transparência — “Plano de negócios aberto aos cooperantes”.[web:2]
  - Propriedade — “Proprietário desde o 1.º dia via quota”.[web:2][web:19]
- Contadores animados (valores mock).

### Secção 5 — Testemunhos
- Fundo claro.
- Carrossel ou grid com 2–3 testemunhos de cooperantes (mock).[web:16][web:17]
- Selo: "Modelo cooperativo · solução para quem não se conforma".[web:2][web:23]

### Secção 6 — CTA final
- Fundo com imagem de projeto (Miraflores / Caparica Hills) + overlay escuro.[web:6][web:12][web:20]
- Título: "Quer explorar se o modelo cooperativo é para si?".
- Subtítulo: convite para agendar conversa ou pedir informação.[web:3]
- Botões:
  - "Falar com a equipa" (scroll para contacto / `/contacto`).
  - "Ver oportunidades abertas" (âncora para projetos).

---

## Página: Como Funciona (`/como-funciona`)

### Hero
- Fundo escuro com overlay.
- Título: "COMO FUNCIONA O MODELO COOPERATIVO".
- Subtítulo: "O lucro da sua casa é todo para si".[web:2]

### Secção — Explicação do modelo
- O que é uma cooperativa de habitação: membros unem-se para financiar construção das suas casas, pagando custos reais.[web:2]
- São eliminadas margens do promotor, tornando a habitação mais acessível.[web:2]
- No fim, cada membro escriturará a sua fração, como num projeto em planta.[web:2]
- Badges: "Sem promotor", "Plano de negócios aberto", "Proprietário desde o 1.º dia".[web:2]

### Secção — Vantagens
- Cards com ícones:
  - Preço (20–25% abaixo do mercado + isenções fiscais).[web:2][web:18]
  - Transparência (plano de negócios aberto).[web:2]
  - Propriedade (quota na cooperativa).![web:2]
- Cada card: título + subtítulo + 1–2 bullets.

### Secção — Linha temporal
- Timeline em 5 etapas:
  1. Identificação de terreno / imóvel.[web:2]
  2. Constituição da cooperativa e adesão de cooperantes.[web:2]
  3. Aprovação de plano de negócios e financiamento.[web:2]
  4. Construção com reporting transparente.[web:2]
  5. Entrega, escritura e gestão pós-entrega.[web:2]

### Secção — FAQ
- Acordeão com 6–8 perguntas (mock), incluindo:
  - Riscos vs. comprar em planta.
  - Quem gere a cooperativa e papel da co.op.homes.[web:2][web:23]
  - O que acontece se a obra atrasar, etc.

---

## Página: Projetos (`/projetos`)

### Hero
- Fundo claro.
- Título: "COOPERATIVAS E EMPREENDIMENTOS".
- Subtítulo: referência a projetos 100% subscritos e novas oportunidades.[web:2][web:22]

### Filtros
- Localização (Lisboa, Oeiras, Caparica, Miraflores…).[web:2][web:6][web:8][web:12]
- Estado (Novo, Em curso, 100% subscrito).[web:2][web:22]
- Tipologia (T0–T5).[web:2]

### Grid de projetos
- Cards em 3 colunas desktop.
- Para cada projeto:[web:2][web:22]
  - Badge de estado.
  - Nome: "co.op. Caparica Hills I/II", "co.op. João XXI", "co.op. Miraflores", "co.op. Oeiras Golf", "co.op. Sol ao Rato".[web:2][web:6][web:8][web:12]
  - Localização + nº de apartamentos + tipologias.[web:2]
  - Descrição curta.[web:6][web:8][web:12]
  - CTA "Quero mais informação" ou "Ver detalhes".

### Página de projeto (opcional)
- Galeria de imagens.[web:6][web:8][web:12]
- Mapa.
- Tabela de tipologias (placeholder).
- Secção "Porque este projeto".

---

## Página: Sobre (`/sobre`)

### Hero
- Fundo neutro.
- Título: "SOBRE A CO.OP.HOMES".[web:1][web:22]
- Subtítulo: “Nascida da inconformidade com o mercado residencial, para reinventar a forma de comprar casa”.[web:1][web:23]

### Secção — Missão
- co.op.homes é uma sociedade gestora de cooperativas de habitação que coordena todo o processo para adquirir casa a preço de custo.[web:2][web:22][web:23]
- Identifica oportunidades, agrega cooperantes e gere a construção até à entrega chave‑na‑mão.[web:2][web:22]

### Secção — O que fazemos
- 3 cards:
  - Originação de projetos.[web:2][web:23]
  - Estruturação de cooperativas e plano de negócios.[web:2]
  - Gestão integrada da construção.[web:2][web:23]

### Secção — Equipa
- Cards com foto, nome e cargo (mock) para os elementos principais.[web:10][web:22]
- CTA "Falar com a equipa" → `/contacto`.

---

## Página: Contacto (`/contacto`)

### Layout
- Duas colunas: info de contacto + formulário.[web:3]

### Informação de contacto
- Telefone geral.
- Email geral.
- Morada (Lisboa, conforme site).[web:3]
- Texto: "Estamos disponíveis para esclarecer dúvidas sobre o modelo cooperativo ou projetos em curso".[web:3]

### Formulário
- Campos:
  - Nome completo.
  - Email.
  - Telemóvel.
  - Tipo de pedido (select).
  - Projeto de interesse (select com lista + "Ainda não sei").[web:2][web:22]
  - Mensagem.
- Botão: "Enviar mensagem".
- POST para `/api/contacto`.
- Loading + mensagem de sucesso.

---

## Formulários, validação e UX
- React Hook Form + Zod.
- Erros inline em vermelho.
- Validação de email e telemóvel PT.
- Botões com estado de loading.
- Toast de sucesso global.

---

## Animações (Framer Motion)
- Secções com fade + slide up.
- Duração 0.6s, easing `[0.25, 0.1, 0.25, 1]`.
- Stagger em cards.
- Navbar com transição de cor ao scroll.
- Hovers em cards com spring.
- Botões com `whileHover` e `whileTap`.
- Hero com sequência label → título → subtítulo → botões → métricas.

---

## Qualidade e standards

### Performance
- `next/image` em todas as imagens (com `sizes`).
- `loading="lazy"` abaixo do fold.
- Fontes com `display=swap`.

### Acessibilidade
- Inputs com `label`/`htmlFor`.
- `aria-label` onde necessário.
- Contraste mínimo AA.

### Responsivo
- Mobile‑first.
- Breakpoints: `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
- Navbar em hamburger abaixo de `md`.
- Grids → 1 coluna em mobile.

### Código
- TypeScript strict.
- Componentes em `/components`.
- Dados mock em `/lib/data.ts` (projetos, vantagens, FAQ, equipa).[web:2][web:22]
- Sem `any`.
- `npm run build` sem erros.

---

## Ordem de construção
1. Setup Next.js + dependências.
2. Criar `/lib/data.ts` (projetos, vantagens, FAQ, equipa).[web:2][web:22]
3. Componentes globais: TopBar, Navbar, Footer, Section, Container.
4. Homepage completa.
5. Página `/como-funciona`.
6. Página `/projetos`.
7. Página `/sobre`.
8. Página `/contacto`.
9. Review animações, responsivo e acessibilidade.
10. `npm run build`.
