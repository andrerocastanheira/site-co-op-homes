# MGL – Mendes Gomes | Brand Guidelines

## Identidade
- **Nome completo:** MGL – Mendes Gomes
- **Localização:** Funchal, Madeira, Portugal
- **Tipo:** Concessionário multimarca e oficina autorizada
- **Tagline:** "O seu concessionário na Madeira"

## Marcas representadas
| Marca | URL stock externo |
|-------|-------------------|
| Toyota | https://www.toyota.pt |
| Volvo | https://www.volvocars.com/pt |
| Fiat | https://www.fiat.pt |
| Jeep | https://www.jeep.pt |
| Abarth | https://www.abarth.pt |

## Paleta de cores
```
--color-primary:     #1e2d4a   /* Azul escuro — cor principal */
--color-primary-hover: #16223a
--color-accent:      #c41e1e   /* Vermelho — linha decorativa, CTAs secundários */
--color-cyan:        #00d4d4   /* Ciano — usado com moderação para highlights */
--color-bg:          #ffffff
--color-surface:     #f8f9fa   /* Fundo de secções alternadas */
--color-dark:        #0a0f1e   /* Footer, hero overlay */
--color-text:        #0f172a
--color-text-muted:  #64748b
--color-border:      #e5e7eb
```

## Tipografia
- **Display / Headings:** `Bebas Neue` — impacto, autoridade, automóvel
- **Body / UI:** `DM Sans` — legível, moderno, acessível
- **Pesos:** headings 400 (Bebas), body 400/500/600 (DM Sans)
- **Google Fonts import:**
  ```
  Bebas+Neue:wght@400&family=DM+Sans:wght@400;500;600;700
  ```

## Iconografia
- Biblioteca: `lucide-react`
- Estilo: outline, stroke-width 1.5
- Tamanho base: 24px

## Tom de comunicação
- Premium mas próximo — não é uma marca de luxo fria
- Madeirense com orgulho — mencionar Madeira, Funchal, ilhas
- Claro e direto — sem jargão técnico desnecessário

## Contactos (placeholder — confirmar com cliente)
- **Telefone:** +351 291 000 000
- **Email:** geral@mgl.pt
- **Morada:** Estrada Monumental, Funchal, Madeira
- **WhatsApp:** +351 291 000 000
- **Horário:** Seg–Sex 08:30–18:00 | Sáb 09:00–13:00

## Assets disponíveis em /public/images/
- Logo-mgl.png — logo principal (preto, usar na navbar clara)
- imagem_mgl.jpg — fachada do stand (hero secundário)
- slider_volvo-2.jpg — lineup Volvo (hero principal, mais impactante)
- roda_manutencao.png — técnico a trabalhar em travão
- manutencao_carro-2.png — oficina com carro elevado

## Logos de marcas em /public/images/brands/
- marca_toyota.png
- marca_volvo.png
- marca_fiat.png
- marca_fiatProfissional.png
- marca_jeep.png
- marca_Abarth.png
- marca_alfaRomeu.png

## Nota importante sobre logos
Os logos das marcas têm fundos escuros — não são PNG 
transparentes. Renderiza cada card de marca com fundo 
#1a1a1a ou #111 em vez de branco, assim os logos 
integram naturalmente. No hover o card fica ligeiramente 
mais claro (#2a2a2a). Isto também dá um look mais premium.