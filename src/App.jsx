import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react"

import "./styles/global.css";
import "./styles/reset.css";
import "./styles/variables.css";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import PaginaInicial from "./pages/inicial/Inicial";
import PaginaCatalogo from "./pages/catalogo/Inicial";
import PaginaSobre from "./pages/sobre/Inicial";
import PaginaProjeto from "./pages/projetos/Inicial";
import LandingPage from "./pages/catalogo/lp/LandingPage";
import PaginaModular from "./pages/Modular/Inicial";

import Privacidade from "./pages/politicas/Privacidade";
import Termos from "./pages/politicas/Termos";
import Cookie from "./pages/politicas/Cookie";

import { HelmetProvider } from "react-helmet-async";

// Página 404
import Error from "../404";

// Efeito de clique
import ClickEffect from "./components/clickEffect";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
  console.log("🔄 React rodando em:", location.pathname);
  console.log("   isCatalogDetail:", isCatalogDetail, "| isMobile:", isMobile);
  window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    // 1) pega do localStorage
    const stored = JSON.parse(localStorage.getItem("utm_params") || "{}");
    if (!Object.keys(stored).length) return;

    // 2) verifica e ajusta a URL
    const url = new URL(window.location.href);
    let changed = false;
    utmKeys.forEach((k) => {
      if (stored[k] && !url.searchParams.has(k)) {
        url.searchParams.set(k, stored[k]);
        changed = true;
      }
    });
    if (changed) {
      window.history.replaceState({}, "", url.toString());
      console.log("♻️ UTMs reaplicadas em:", url.toString());
    }
  }, [location.pathname]);

  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("utm_params") || "{}");
  if (!Object.keys(stored).length) return;

  const onClick = (e) => {
    const a = e.target.closest("a");
    if (!a || a.hostname !== window.location.hostname) return;
    const to = new URL(a.href);
    let changed = false;
    Object.entries(stored).forEach(([k, v]) => {
      if (!to.searchParams.has(k)) {
        to.searchParams.set(k, v);
        changed = true;
      }
    });
    if (changed) {
      e.preventDefault();
      window.location.href = to.toString();
    }
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}, []);



  // Detecta página de detalhe de casa (slug), mas não a listagem
  const isCatalogDetail =
    location.pathname.startsWith("/catalogo-de-casas/") &&
    location.pathname !== "/catalogo-de-casas";

  // Detecta se o usuário está em mobile (<=768px)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mostrar Header se:
  // - não for detalhe de casa (desktop ou mobile), OU
  // - for mobile (em qualquer rota)
  const showHeader = !isCatalogDetail || isMobile;
  // Footer oculto apenas em detalhe de casa
  const showFooter = !isCatalogDetail;

  // Scroll ao topo em cada mudança de rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <>
      {showHeader && <Header />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/catalogo-de-casas" element={<PaginaCatalogo />} />
            <Route
              path="/catalogo-de-casas/:slug"
              element={<LandingPage />}
            />
            <Route path="/sobre-nos" element={<PaginaSobre />} />
            <Route path="/modular" element={<PaginaModular />} />
            <Route
              path="/projetos-personalizados"
              element={<PaginaProjeto />}
            />
            <Route path="/termos-e-condicoes" element={<Termos />} />
            <Route
              path="/politica-de-privacidade"
              element={<Privacidade />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {showFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ClickEffect />
        <AppContent />
        <Cookie />
        <Analytics />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
