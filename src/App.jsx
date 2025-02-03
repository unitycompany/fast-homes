import React from "react";
import { BrowserRouter } from "react-router-dom";


import "./styles/global.css";
import "./styles/reset.css";
import "./styles/variables.css";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import PaginaInicial from "./pages/inicial/Inicial";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <PaginaInicial />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
