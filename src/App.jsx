import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

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

// Importando o componente de efeito de clique com styled-components
import ClickEffect from "./components/clickEffect"; // ajuste o caminho conforme sua estrutura

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  const hideLayout =
    location.pathname.startsWith("/catalogo-de-casas/")

  return (
    <>
      {!hideLayout && <Header />}
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
            <Route path="/sobre-nos" element={<PaginaSobre />} />
            <Route path="/modular" element={<PaginaModular />} />
            <Route path="/projetos-personalizados" element={<PaginaProjeto />} />
            <Route path="/catalogo-de-casas/:slug" element={<LandingPage />} />
            <Route path="/termos-e-condicoes" element={<Termos />} />
            <Route path="/politica-de-privacidade" element={<Privacidade />} />

            {/* Rota 404 para páginas não encontradas */}
            <Route path="*" element={<Error />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {!hideLayout && <Footer />}
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
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
