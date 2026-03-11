# Directive: MGL Website — Protótipo de Alta Fidelidade

## Objetivo
Construir um site institucional moderno e premium para a MGL – Mendes Gomes.
É um protótipo funcional com ar final — não precisa de dados reais mas deve
parecer um produto acabado.

## Stack técnica
```
Next.js 14 (App Router)
TypeScript
Tailwind CSS
Framer Motion (todas as animações)
React Hook Form + Zod (formulários)
Lucide React (ícones)
```

## Estrutura de páginas

### `/` — Homepage
### `/marcas` — Marcas representadas  
### `/oficina` — Oficina e agendamento
### `/contactos` — Contactos e localização

---

## Componentes globais

### `TopBar`
- Barra fina no topo (altura 36px), fundo `--color-dark`
- Texto branco pequeno (12px), 3 mensagens a fazer scroll horizontal
  em loop contínuo (CSS marquee ou Framer Motion):
  - "🔧 Marque a sua oficina online — sem esperas ao telefone"
  - "🚗 Concessionário oficial Toyota, Volvo, Fiat, Jeep e Abarth"
  - "📍 Funchal, Madeira — Estrada Monumental"
- Links clicáveis com texto colorido `--color-cyan`

### `Navbar`
- Logo MGL à esquerda
- Links de navegação centrados: Início | Marcas | Oficina | Contactos
- Botão CTA à direita: "Marcar Oficina" (filled, --color-primary)
- **Comportamento de scroll:**
  - Sobre o hero: transparente, todos os elementos brancos
  - Após 80px de scroll: fundo branco sólido, sombra subtil,
    logo e links ficam escuros
  - Transição suave 0.3s
- Mobile: hamburger menu com drawer lateral

### `Footer`
- Fundo `#0a0f1e`
- 3 colunas: Logo + tagline + redes sociais | Links rápidos | Contacto
- Linha de separação no topo com gradiente azul
- Copyright com texto cinzento 50% opacidade
- Botão WhatsApp verde com ícone

---

## Página: Homepage (`/`)

### Secção 1 — Hero
- Fullscreen (100vh), imagem `/public/images/stand-exterior.jpg`
- Overlay gradiente: `linear-gradient(to right, rgba(10,15,30,0.9) 40%, rgba(10,15,30,0.3) 100%)`
- Conteúdo alinhado à esquerda, verticalmente centrado:
  - Label pequena acima: "CONCESSIONÁRIO OFICIAL · MADEIRA" (uppercase, tracking wide, cor ciano)
  - Título principal em Bebas Neue: "O SEU CONCESSIONÁRIO NA MADEIRA" — 80px desktop, branco
  - Subtítulo em DM Sans: "Oficina autorizada e concessionário oficial de várias marcas, com equipa especializada e atendimento próximo." — branco 70% opacidade
  - 2 botões: "Marcar Oficina" (filled branco com texto escuro) + "Ver Marcas" (outline branco)
- Métricas em linha na parte inferior do hero (antes do fold):
  - "25+" / "Anos de Experiência"
  - "5" / "Marcas Representadas"
  - "100%" / "Serviço Certificado"
  - Separadores verticais brancos 40% opacidade entre cada métrica
  - Números grandes Bebas Neue 56px, labels DM Sans 11px uppercase

### Secção 2 — Marcas
- Fundo branco
- Título com linha vermelha decorativa acima (3px height, 48px width, centrada)
- 5 cards em linha: Toyota | Volvo | Fiat | Jeep | Abarth
- Cada card:
  - Fundo branco, border 1px `--color-border`, border-radius 16px
  - Padding 32px 24px
  - Logo marca centrado, 72px altura, em grayscale por defeito
  - Nome da marca abaixo em DM Sans 14px
  - **Hover:** grayscale remove, border muda para `--color-primary`,
    translateY(-4px), box-shadow, botão "Ver stock →" aparece com slide-up

### Secção 3 — Sobre / Métricas
- Fundo `--color-primary` (#1e2d4a)
- Layout: texto à esquerda + 3 métricas grandes à direita
- Texto: "Mais de 25 anos a servir a Madeira" — parágrafo de contexto
- Métricas com contador animado ao entrar no viewport:
  - "+25" / "Anos"
  - "+5.000" / "Clientes"
  - "5" / "Marcas"
- Números em Bebas Neue 72px branco, labels DM Sans 14px branco 60%

### Secção 4 — Serviços (resumo)
- Fundo `--color-surface`
- 4 cards de serviço em grid 2x2:
  1. Revisão e Manutenção
  2. Mecânica e Diagnóstico
  3. Colisão e Carroçaria
  4. Peças e Balcão
- Cada card: número de ordem (01-04) grande e bold em azul claro,
  título, descrição curta, border-left azul que aparece no hover
- CTA centrado abaixo: "Ver todos os serviços →"

### Secção 5 — CTA Banner
- Fundo com imagem da oficina + overlay escuro
- Texto grande: "Pronto para marcar a sua visita?"
- Subtexto + 2 botões: "Agendar Agora" + "Pedir Orçamento"

---

## Página: Marcas (`/marcas`)

### Hero simples
- Fundo escuro, título "AS NOSSAS MARCAS" em Bebas Neue grande
- Subtítulo descritivo

### Grid de marcas
- 5 cards grandes (não em linha — grid 3+2 centrado)
- Cada card expandido:
  - Logo grande (120px)
  - Nome da marca
  - Descrição curta (2 linhas, placeholder genérico)
  - Badge "Concessionário Oficial"
  - Botão "Ver stock" → abre URL externa em novo tab

---

## Página: Oficina (`/oficina`)

### Hero da Oficina
- Inspiração: mcoutinho.pt/oficina
- Fundo escuro (#0a0f1e) com imagem da oficina em overlay
- Título grande Bebas Neue: "OFICINA MGL"
- Linha accent vermelha sob o título (estilo mcoutinho)
- Subtítulo: "Nunca foi tão fácil. Marque online em minutos."
- **Mini-formulário inline no hero** (estilo mcoutinho):
  - Campo: Matrícula
  - Select: Marca (Toyota/Volvo/Fiat/Jeep/Abarth)
  - Botão: "Agendar Marcação →"

### Grid de Serviços (visual)
- Inspiração: grid de seleção de serviços do mcoutinho
- 8 tiles em grid 4x2, cada tile com:
  - Ícone Lucide centrado (stroke 1.5)
  - Nome do serviço
  - Border 1px, border-radius 12px
  - Hover: border ciano, ícone fica colorido
- Serviços: Revisão e Manutenção | Inspeção/IPO | Checkup |
  Pneus e Alinhamento | Sistema de Travagem | Ar Condicionado |
  Eletrónica | Colisão e Carroçaria

### Como Funciona
- 3 passos horizontais com linha conectora
- Círculos numerados (1, 2, 3) fundo azul escuro
- Ícone + título + descrição por passo:
  1. Preenche o formulário online
  2. Confirmamos a marcação por SMS/email
  3. Entregue o carro na data combinada

### Formulários (Tabs)
- 2 tabs: "📅 Agendar Marcação" | "🔧 Pedir Orçamento"
- Tab ativa com underline accent vermelho

**Tab Agendamento:**
- Grid 2 colunas:
  - Nome completo | Telemóvel
  - Email | Matrícula (formato AA-00-AA)
  - Marca (select) | Tipo de serviço (select)
  - Data preferida (date picker) | Hora preferida (select: 08:30-17:30)
  - Observações (textarea, largura total)
- Botão: "Enviar Pedido de Marcação" (largura total, 52px, bold)
- POST para `/api/agendamento` (webhook placeholder)
- Loading state + mensagem de sucesso após submit

**Tab Orçamento:**
- Grid 2 colunas:
  - Nome completo | Telemóvel
  - Email | Matrícula
  - Marca (select) | Modelo (input)
  - Tipo de serviço (select) | Urgência (select: Normal/Urgente)
  - Descrição do problema (textarea, largura total)
- Botão: "Pedir Orçamento Gratuito" (largura total, accent vermelho)
- POST para `/api/orcamento`

### Validação dos formulários
- React Hook Form + Zod
- Erros inline por campo (vermelho, small text)
- Campo matrícula: validação formato português (AA-00-AA ou 00-AA-00)
- Loading state no botão durante submit (spinner + "A enviar...")
- Toast de sucesso: "✓ Pedido enviado! Entraremos em contacto em breve."

---

## Página: Contactos (`/contactos`)

### Layout 2 colunas
- Esquerda: informação de contacto
  - Cada item: ícone Lucide + label pequena + valor bold
  - Telefone, Email, Morada, Horário
  - Botão WhatsApp grande (verde #25d366)
  - Botão "Ligar agora" (outline)
- Direita: iframe Google Maps (placeholder com morada Funchal)

---

## Animações (Framer Motion)

### Regras globais
- Todas as secções entram com: `opacity: 0 → 1` + `y: 40 → 0`
- Duração base: 0.6s, easing: `[0.25, 0.1, 0.25, 1]`
- Cards em stagger: delay 0.1s entre cada um
- Trigger: `whileInView` com `once: true`, `margin: "-100px"`

### Animações específicas
- **Contador de números** (métricas): animação de 0 → valor final,
  duração 2s, easing ease-out, trigger ao entrar no viewport
- **Navbar:** transição de cor com spring suave
- **Cards de marcas:** hover com spring `stiffness: 300, damping: 20`
- **Botões:** `whileHover: scale(1.02)`, `whileTap: scale(0.98)`
- **Hero:** animação de entrada staggered — label → título → subtítulo → botões → métricas

---

## Qualidade e standards

### Performance
- `next/image` para todas as imagens com sizes corretos
- `loading="lazy"` em imagens abaixo do fold
- Fontes com `display=swap`

### Acessibilidade
- Todos os inputs com `label` e `htmlFor`
- Botões com aria-labels onde necessário
- Contraste mínimo AA

### Responsivo
- Mobile-first
- Breakpoints: sm(640) md(768) lg(1024) xl(1280)
- Navbar colapsa em hamburger abaixo de 768px
- Grids passam a 1 coluna em mobile

### Código
- TypeScript strict
- Componentes em `/components/` com nomes descritivos
- Dados mockados em `/lib/data.ts` (marcas, serviços, etc.)
- Sem `any` types
- `npm run build` deve passar sem erros

---

## Ordem de construção recomendada

1. Setup Next.js + instalar dependências
2. `/lib/data.ts` — dados das marcas e serviços
3. Componentes globais: `TopBar`, `Navbar`, `Footer`
4. Homepage completa
5. Página `/oficina` com formulários
6. Página `/marcas`
7. Página `/contactos`
8. Revisão final de animações e responsivo
9. `npm run build` — zero erros
