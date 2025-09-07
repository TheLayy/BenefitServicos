// App.js
import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import ProdutosServicos from "./pages/ProdutosServicos";
import ComoComprar from "./pages/ComoComprar";
import FaleConosco from "./pages/FaleConosco";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Benefit Broker";
        metaDescription = "Benefit Broker Seguros: Encontre as melhores cotações de seguros.";
        break;
      case "/quem-somos":
        title = "Quem Somos | Benefit Broker";
        metaDescription = "Conheça a Benefit Broker e nossa missão de oferecer as melhores soluções em seguros.";
        break;
      case "/produtos-servicos":
        title = "Produtos e Serviços | Benefit Broker";
        metaDescription = "Conheça nossos produtos e serviços de seguros personalizados para atender suas necessidades.";
        break;
      case "/como-comprar":
        title = "Como Comprar | Benefit Broker";
        metaDescription = "Saiba como adquirir nossos seguros de forma rápida e segura.";
        break;
      case "/fale-conosco":
        title = "Fale Conosco | Benefit Broker";
        metaDescription = "Entre em contato conosco para tirar suas dúvidas ou solicitar uma cotação.";
        break;
      default:
        title = "Benefit Broker";
        metaDescription = "Benefit Broker Seguros: Encontre as melhores cotações de seguros.";
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDescription;
      document.head.appendChild(meta);
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/produtos-servicos" element={<ProdutosServicos />} />
      <Route path="/como-comprar" element={<ComoComprar />} />
      <Route path="/fale-conosco" element={<FaleConosco />} />
      {/* Add a catch-all route that redirects to home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AppContent />
    </>
  );
}

export default App;
