import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const Espaco = styled.div`
  height: 100vh;
`

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
        <Espaco />
        <PaginaInicial />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
