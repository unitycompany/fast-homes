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
