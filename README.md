# Omnex Landing Page

Landing page profissional e moderna para a Omnex, desenvolvida com HTML5, CSS3 e JavaScript vanilla.

## Estrutura do Projeto

```
omnex-landing-page/
├── css/
│   ├── reset.css                  # CSS reset e normalização
│   └── style.css                  # Estilos principais da landing page
├── js/
│   └── main.js                    # JavaScript para interações e animações
├── images/
│   ├── omnex-blue.png             # Logo com fundo azul escuro
│   ├── omnex-icon.png             # Ícone/favicon da Omnex
│   ├── omnex-logo.png             # Logo principal
│   ├── omnex-logo-white-text.png  # Logo com texto branco
│   └── omnex-white.jpeg           # Logo com fundo claro
├── .gitignore                     # Arquivos ignorados pelo Git
├── index.html                     # Página principal
└── README.md                      # Este arquivo
```

## Características

### Design
- Layout moderno e responsivo (mobile-first)
- Sistema de design baseado em CSS Custom Properties
- Paleta de cores inspirada na identidade visual Omnex
- Animações suaves e transições elegantes
- Gradientes e efeitos visuais modernos

### Seções
1. **Header/Navegação**
   - Header fixo com efeito de transparência
   - Menu responsivo para mobile
   - Navegação suave entre seções

2. **Hero Section**
   - Design impactante em tela cheia
   - Gradiente de fundo com animações flutuantes
   - CTAs (Call-to-Action) prominentes
   - Indicador de scroll animado

3. **Soluções**
   - Grid responsivo de 3 colunas
   - Cards com efeitos hover
   - Apresentação das principais soluções

4. **Sobre**
   - Layout de duas colunas
   - Padrões geométricos animados
   - Informações sobre a empresa

5. **Contato**
   - Formulário funcional com validação
   - Design integrado com o tema
   - Links para redes sociais

6. **Footer**
   - Informações de copyright
   - Logo e branding

### Funcionalidades JavaScript
- Smooth scrolling entre seções
- Menu mobile toggle animado
- Header com mudança de background no scroll
- Sistema de notificações para formulário
- Animações de entrada com Intersection Observer
- Navegação ativa baseada na posição do scroll
- Otimizações de performance (throttling)

### Responsividade
- **Desktop**: Layout completo com todos os recursos
- **Tablet**: Adaptação de grids e espaçamentos
- **Mobile**: Menu hambúrguer, layout vertical, fontes ajustadas

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com:
  - CSS Grid
  - Flexbox
  - Custom Properties (variáveis CSS)
  - Animations e Transitions
  - Media Queries
- JavaScript ES6+ (Vanilla)
  - Intersection Observer API
  - Event Delegation
  - Performance optimization (throttling)

## Como Usar

1. **Visualizar localmente:**
   - Abra o arquivo `index.html` diretamente no navegador
   - Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (com http-server instalado globalmente)
   npx http-server
   ```

2. **Personalização:**
   - Edite as variáveis CSS em `css/style.css` (seção `:root`)
   - Modifique textos e conteúdo em `index.html`
   - Ajuste comportamentos em `js/main.js`

## Sistema de Design

### Cores Principais
- Navy Dark: `#001f3f`
- Navy Medium: `#002a54`
- Blue Primary: `#0066cc`
- Blue Bright: `#0080ff`
- White: `#ffffff`
- Gray Light: `#f4f7fa`

### Espaçamento
Sistema baseado em múltiplos de 8px:
- XS: 8px
- SM: 16px
- MD: 24px
- LG: 32px
- XL: 48px
- 2XL: 64px
- 3XL: 96px

### Tipografia
- Fonte: System Font Stack (performance otimizada)
- Tamanhos: 14px a 60px (responsivos)

## Otimizações

- **Performance:**
  - CSS e JS minificáveis
  - Imagens otimizadas (PNG com transparência)
  - Throttling em eventos de scroll
  - Lazy loading de animações

- **Acessibilidade:**
  - HTML semântico
  - Labels e ARIA attributes
  - Suporte a `prefers-reduced-motion`
  - Contraste adequado de cores

- **SEO:**
  - Meta tags apropriadas
  - Estrutura semântica
  - Alt text em imagens

## Navegadores Suportados

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## Próximos Passos

Sugestões para melhorias futuras:

1. **Backend Integration:**
   - Conectar formulário a serviço de e-mail (SendGrid, EmailJS, etc.)
   - Adicionar Google Analytics

2. **Melhorias:**
   - Adicionar mais animações ao scroll
   - Implementar lightbox para galeria (se necessário)
   - Adicionar mais seções (depoimentos, cases, etc.)

3. **SEO:**
   - Implementar Schema.org markup
   - Adicionar sitemap.xml
   - Otimizar meta tags para redes sociais (Open Graph, Twitter Cards)

4. **Performance:**
   - Minificar CSS/JS para produção
   - Implementar lazy loading de imagens
   - Adicionar service worker para PWA

## Licença

© 2025 Omnex. Todos os direitos reservados.

---

**Desenvolvido com atenção aos detalhes para representar a excelência da Omnex.**
