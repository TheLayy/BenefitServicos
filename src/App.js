// App.js
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import { AuthContext } from './services/AuthContext'; // Importar AuthContext
import Desktop from "./pages/Desktop";
import AdminPage from "./pages/AdminPage";
import Auth from "./pages/Auth";
import ProtectedRoute from './services/ProtectedRoute';

function App() {
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
      case "/admin":
        title = "Admin - Lista de Clientes";
        metaDescription = "Página administrativa para visualizar e gerenciar clientes.";
        break;
      case "/auth":
        title = "Autenticação";
        metaDescription = "Autenticação necessária para acessar a área administrativa.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/auth" element={<Auth />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
