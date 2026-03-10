import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./styles/global.css";
import "./styles/reset.css";
import "./styles/variables.css";

import Header from "./partials/Header";
import Footer from "./partials/Footer";

// Lazy load de páginas — reduz bundle inicial (~386 KiB de JS não usado)
const PaginaInicial = lazy(() => import("./pages/inicial/Inicial"));
const PaginaCatalogo = lazy(() => import("./pages/catalogo/Inicial"));
const PaginaSobre = lazy(() => import("./pages/sobre/Inicial"));
const PaginaProjeto = lazy(() => import("./pages/projetos/Inicial"));
const LandingPage = lazy(() => import("./pages/catalogo/lp/LandingPage"));
const PaginaModular = lazy(() => import("./pages/Modular/Inicial"));
const Privacidade = lazy(() => import("./pages/politicas/Privacidade"));
const Termos = lazy(() => import("./pages/politicas/Termos"));
const Cookie = lazy(() => import("./pages/politicas/Cookie"));
const Error = lazy(() => import("../404"));

// Lazy load de libs pesadas — AOS, Analytics, ClickEffect
const ClickEffect = lazy(() => import("./components/clickEffect"));
const LazyAnalytics = lazy(() =>
  import("@vercel/analytics/react").then((m) => ({ default: m.Analytics }))
);

import { HelmetProvider, Helmet } from "react-helmet-async";

const BASE_URL = "https://fasthomes.com.br";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fast Homes",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/catalogo-de-casas?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fast Homes",
  url: BASE_URL,
  logo:
    "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/28cf333a-365a-4025-f8d8-c86fdd742d00/public",
  sameAs: [
    "https://www.instagram.com/fasthomesbr",
    "https://www.facebook.com/fasthomesbr",
    "https://www.linkedin.com/company/fasthomesbr/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-21-99288-2282",
      contactType: "customer support",
      areaServed: "BR",
      availableLanguage: ["Portuguese", "English"],
    },
  ],
};

const getBreadcrumb = (pathname) => {
  const items = [
    { name: "Início", path: "/" },
  ];

  const mapping = {
    "/catalogo-de-casas": "Catálogo de Casas",
    "/projetos-personalizados": "Projetos Personalizados",
    "/modulos-prontos": "Módulos Prontos",
    "/sobre-nos": "Sobre Nós",
    "/politica-de-privacidade": "Política de Privacidade",
    "/termos-e-condicoes": "Termos e Condições",
  };

  if (mapping[pathname]) {
    items.push({ name: mapping[pathname], path: pathname });
  }

  if (items.length === 1) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
};

const getPageSchema = (pathname) => {
  const common = {
    "@context": "https://schema.org",
    url: `${BASE_URL}${pathname === "/" ? "" : pathname}`,
  };

  switch (pathname) {
    case "/":
      return {
        ...common,
        "@type": "WebPage",
        name: "Fast Homes - Casas em Steel Frame",
        description:
          "Casas em steel frame com construção rápida, sustentável e de alta qualidade pela Fast Homes.",
      };
    case "/catalogo-de-casas":
      return {
        ...common,
        "@type": "CollectionPage",
        name: "Catálogo de Casas - Fast Homes",
        description:
          "Conheça o catálogo completo de casas pré-fabricadas em steel frame da Fast Homes.",
      };
    case "/projetos-personalizados":
      return {
        ...common,
        "@type": "WebPage",
        name: "Projetos Personalizados - Fast Homes",
        description:
          "Transforme seu projeto em realidade com a Fast Homes em steel frame.",
      };
    case "/modulos-prontos":
      return {
        ...common,
        "@type": "WebPage",
        name: "Módulos Prontos - Fast Homes",
        description:
          "Módulos prontos em steel frame da Fast Homes, rapidez e eficiência na construção.",
      };
    case "/sobre-nos":
      return {
        ...common,
        "@type": "AboutPage",
        name: "Sobre a Fast Homes",
        description:
          "Conheça a Fast Homes, construtora especializada em steel frame e construção industrializada.",
      };
    case "/politica-de-privacidade":
      return {
        ...common,
        "@type": "WebPage",
        name: "Política de Privacidade - Fast Homes",
        description: "Política de privacidade da Fast Homes.",
      };
    case "/termos-e-condicoes":
      return {
        ...common,
        "@type": "WebPage",
        name: "Termos e Condições - Fast Homes",
        description: "Termos e condições de uso do site da Fast Homes.",
      };
    default:
      return null;
  }
};

const getStructuredData = (pathname) => {
  const data = [websiteSchema, organizationSchema];
  const breadcrumb = getBreadcrumb(pathname);
  const page = getPageSchema(pathname);
  if (breadcrumb) data.push(breadcrumb);
  if (page) data.push(page);
  return data;
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const AppContent = () => {
  const location = useLocation();
  const structuredData = getStructuredData(location.pathname);

  useEffect(() => {
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

  // Inicializa AOS de forma lazy (não bloqueia o bundle principal)
  useEffect(() => {
    let mounted = true;
    import("aos").then((AOS) => {
      if (!mounted) return;
      import("aos/dist/aos.css");
      AOS.init({
        duration: 1200,
        offset: 50,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    });
    return () => { mounted = false; };
  }, []);

  // Fallback mínimo para Suspense
  const suspenseFallback = (
    <div style={{ minHeight: "100vh", background: "#000" }} />
  );

  return (
    <>
      {structuredData.map((schema, idx) => (
        <Helmet key={`ld-${idx}`}>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      ))}

      {showHeader && <Header />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <Suspense fallback={suspenseFallback}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PaginaInicial />} />
              <Route path="/catalogo-de-casas" element={<PaginaCatalogo />} />
              <Route
                path="/catalogo-de-casas/:slug"
                element={<LandingPage />}
              />
              <Route path="/sobre-nos" element={<PaginaSobre />} />
              <Route path="/modulos-prontos" element={<PaginaModular />} />
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
          </Suspense>
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
        <Suspense fallback={null}>
          <ClickEffect />
        </Suspense>
        <AppContent />
        <Suspense fallback={null}>
          <Cookie />
          <LazyAnalytics />
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
