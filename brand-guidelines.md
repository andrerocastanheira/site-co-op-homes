# co.op.homes · Brand Guidelines

## Identidade

- **Nome completo:** co.op.homes
- **Localização:** Lisboa, Portugal
- **Tipo:** Sociedade gestora de cooperativas de habitação (fintech imobiliária)
- **Tagline principal:** "A sua casa de sonho, a preço de custo."
- **Tagline de apoio:** "Reinventar a forma de comprar casa."

---

## Proposta de Valor

- Comprar casa pagando apenas os custos reais: terreno, projetos e obra.
- Eliminar a margem do promotor, gerando poupanças de 20–25% face ao mercado tradicional.
- Transparência total: plano de negócios aberto a todos os cooperantes.
- Propriedade desde o primeiro dia, via quota na cooperativa.

---

## Paleta de Cores

> Tom verde — natureza, sustentabilidade, crescimento. Fundos claros.

```css
--color-primary:        #1c6b45;  /* Verde floresta — confiança, natureza */
--color-primary-hover:  #155235;
--color-accent:         #52b788;  /* Verde sage/mint — destaques e links */
--color-accent-soft:    #d8f3dc;  /* Fundo suave de badges */
--color-bg:             #ffffff;  /* Fundo principal */
--color-surface:        #f5f7fb;  /* Secções alternadas, cards */
--color-dark:           #0a1a0e;  /* Hero escuro, overlays, footer */
--color-text:           #111827;  /* Texto principal */
--color-text-muted:     #6b7280;  /* Texto secundário */
--color-border:         #e1e5f0;  /* Bordas de cards e inputs */
--color-success:        #16a34a;  /* Estados positivos / 100% subscrito */
--color-warning:        #f97316;  /* Avisos, prazos */
```

---

## Tipografia

### Logo

- Manter exatamente o lettering atual do logotipo co.op.homes (não recriar em CSS).
- Usar sempre o ficheiro fornecido (SVG ou PNG) em vez de tentar replicar a fonte.
- Não alterar cor, espaçamento ou proporções.

### UI e Headings

**Headings: Space Grotesk**
- Uso: H1–H3, métricas, labels de secção.
- Pesos: 500 e 600.

**Body / UI: Inter**
- Uso: parágrafos, formulários, botões, microcopy.
- Pesos: 400 (body), 500 (labels e botões), 600 (subtítulos).

---

## Iconografia

- **Biblioteca:** lucide-react
- **Estilo:** outline, stroke-width: 1.5
- **Tamanho base:** 24px
- **Usos principais:**
  - Vantagens (preço, transparência, propriedade)
  - Passos "Como funciona"
  - Itens de contacto, FAQ, alertas

---

## Tom de Comunicação

### Princípios

- Mistura de fintech com imobiliário: didático, orientado a números e acessibilidade.
- Clareza radical: explicar sempre como funciona, com exemplos concretos.
- Transparência: não esconder riscos nem complexidade do modelo cooperativo.

### Estilo

- Frases curtas, voz ativa.
- Evitar jargão jurídico; quando usar, explicar logo a seguir em linguagem simples.
- Repetir conceitos chave:
  - "preço de custo"
  - "poupança média de 20–25%"
  - "plano de negócios aberto"
  - "proprietário desde o primeiro dia"

### Exemplos de Copy

- "A sua casa de sonho, a preço de custo."
- "Sem margem de promotor, com total transparência em todos os custos."
- "Quaisquer reduções de custo revertem integralmente a favor dos cooperantes."

---

## Contactos (para layouts)

- Página de contacto: usar telefone, email e morada tal como aparecem em `/contacto`.
- Call to action preferencial: levar utilizador ao formulário de contacto.
- Tom nos contactos: próximo, sem formalismo excessivo, mas profissional.

---

## Diretrizes de Imagem

### Mood Visual

- Fintech imobiliário: luz natural, arquitetura contemporânea, fotografia limpa.
- Evitar filtros pesados e cores muito quentes.
- Paleta de imagem: brancos, cinzas claros, azuis e verdes suaves.

### Imagens a Reutilizar do Site

**Homepage hero**
- Exportar a imagem hero atual da home e guardar como `/public/images/hero-home.jpg`.

**Projetos**
- Caparica Hills: `/public/images/projects/caparica-hills.jpg`
- Miraflores: `/public/images/projects/miraflores.jpg`
- Oeiras Golf: `/public/images/projects/oeiras-golf.jpg`
- Sol ao Rato: `/public/images/projects/sol-ao-rato.jpg`

**Equipa**
- Diretório recomendado: `/public/images/team/`
- Ficheiros:
  - `/public/images/team/frederico.jpg`
  - `/public/images/team/jose-cunha.jpg`
  - `/public/images/team/jose-ribeiro.jpg`
  - `/public/images/team/afonso.jpg`
- Origem: fotos usadas na página "A Equipa" do site atual.[web:10][web:22]
- Uso: secção de equipa na página `/sobre` (cards com foto + nome + cargo).

### Regras

- Sempre que falar de um projeto específico, usar a foto real desse projeto.
- Em mobile, recortar a imagem focando no edifício, não tanto no céu.

---

## Aplicação da Identidade

### Hero da Homepage

- Fundo: `hero-home.jpg` com overlay em `--color-dark` e gradiente.
- Heading: Space Grotesk 600 com o texto "A sua casa de sonho, a preço de custo."
- Subtítulo: Inter 400, explicar em 2–3 linhas o modelo cooperativo e a poupança.
- Botões:
  - Filled `--color-primary`: "Como funciona o modelo"
  - Outline `--color-primary`: "Ver cooperativas em destaque"

### Cards de Projeto

- Fundo `--color-surface`, borda `--color-border`
- Topo com imagem do projeto (16:9)
- Badge de estado:
  - "NOVA OPORTUNIDADE" com fundo `--color-primary`
  - "100% SUBSCRITO" com fundo `--color-success`
- Conteúdo:
  - Título em Space Grotesk 600
  - Linha com localização, nº de apartamentos, tipologias
  - CTA em Inter 500: "Quero mais informação"

### Secção "Como Funciona"

- 3–5 passos, cada um com ícone Lucide.
- Cards brancos, borda suave, título em Space Grotesk e texto em Inter.
- Palavras chave a **bold**: "custos reais", "sem promotor", "plano de negócios aberto".

### Secção "Equipa"

- Fotos reais da página "A Equipa".
- Nome em Space Grotesk 600.
- Cargo em Inter 400, cor `--color-text-muted`.

---

## Voz e Disclaimers

- Evitar promessas absolutas como "sem risco" ou "garantia total".
- Sempre que mencionar poupanças: *"Os valores apresentados são estimativas e podem variar consoante o projeto."*
- Em páginas técnicas (Como funciona): incluir bloco a explicar riscos semelhantes à compra em planta.

---

## Componentes Recomendados

| Componente | Descrição |
|---|---|
| `Logo` | Variante light/dark, usando sempre o ficheiro oficial |
| `TopBar` | Mensagens sobre preço de custo, transparência e propriedade |
| `Navbar` | Com CTA "Quero ser cooperante" |
| `HeroHome` | Hero da homepage com imagem de projeto real |
| `ProjectCard` | Cards de cooperativas em destaque |
| `AdvantageCard` | Vantagens do modelo (preço, transparência, propriedade) |
| `StepCard` | Passos "Como funciona" |
| `TeamMemberCard` | Cartões da equipa |