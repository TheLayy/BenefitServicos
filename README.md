# Benefit Serviços — Landing Page

Site institucional e de conversão da Benefit Serviços (Benefit Broker). O projeto destaca serviços, fluxo de compra, contato e integrações de navegação em SPA.

• Produção:  https://www.benefitservicos.com.br

## 🧱 Stack
- React 18 (Vite/Cra-like structure)
- React Router (`react-router-dom`)
- CSS Modules
- Material UI (MUI) — para o FAB de upscroll
- Leaflet / React-Leaflet (mapa na seção Contato)

## 📦 Requisitos
- Node.js 18+ (recomendado)
- npm 9+

## 🔧 Instalação e Desenvolvimento
```bash
npm install
npm start
```
O projeto sobe em modo desenvolvimento com live-reload.

## 🏗️ Build de Produção
```bash
npm run build
```
Os arquivos finais serão gerados na pasta de build (de acordo com a configuração do bundler atual do projeto).

## 📁 Estrutura (principais)
- `src/pages/` — páginas de rota: `Home`, `QuemSomos`, `ProdutosServicos`, `ComoComprar`, `FaleConosco`
- `src/components/` — componentes reutilizáveis (NavBar, HeaderSection, ProductsSection, ComoComprarSection, Contato, Footer, BackToTopButton, etc.)
- `public/` — imagens e ícones

## ✨ Destaques e melhorias recentes
- Navegação mobile
  - Menu sanduíche com overlay responsivo, botão de fechar visível e acessível.
  - Itens do menu no mobile com tipografia maior e espaçamento otimizado.
  - Remoção da barra sublinhada do item ativo apenas no mobile.
  - Botão do menu estilizado como o botão de upscroll (FAB branco com sombra).
- Header (Home)
  - Logo exibida antes do texto no mobile.
  - Background deslocado para a área de textos no mobile, ocupando 100% da largura (full-bleed).
  - Tamanhos de fonte ajustados por breakpoint e imagem do header ocultada no mobile.
- Seção “Como Comprar”
  - Badges com estilo alinhado ao componente Card, variantes por bloco, e CTA como passo apenas com badge clicável.
  - Animação suave de “pulse” no badge do CTA.
- Seção de Produtos
  - Cartões/áreas de texto nunca ficam menores que o conteúdo.
  - No mobile, a imagem vem sempre antes do texto (ordem forçada via CSS).
- Contato
  - Título com largura alinhada ao conteúdo e mapa responsivo com link para o Google Maps.
- Acessibilidade / UX
  - Botão “voltar ao topo” (FAB) com foco visual.

## 🔗 Links úteis
- Serviços: https://benefitbroker.com.br/
- CTA de compra (Como Comprar): https://www.benefitservicos.com.br/100.php

## 🧪 Scripts úteis
```bash
npm start      # desenvolvimento
npm run build  # build de produção
```

## ⚠️ Observações
- Alguns ícones e imagens são servidos da pasta `public/`. Verifique caminhos como `/logo.png`, `/header-bg.png` etc.
- Caso utilize bibliotecas que dependam de chaves (ex.: mapas), configure-as via variáveis de ambiente. Veja `example.env` como referência.

## 📄 Licença
Uso interno/cliente. Consulte o responsável pelo projeto para diretrizes de distribuição.
