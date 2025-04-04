import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Casas from "./Casas";
import Solucoes from "./Solucoes";
import Trajetoria from "../inicial/Trajetoria";
import FormLP from "../../components/form-lp";
import { Helmet } from "react-helmet-async";

const Content = styled.section `
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
`

const Formulario = styled.div`
    width: 100%;
    padding-bottom: 5%;
`

const PaginaModular = () => {
    return (
        <>
            <Helmet>
                <title>Modular - Fast Homes</title>
                <meta name="description" content="Conheça a Casa Modular da Fast Homes: moderna, sustentável e eficiente. Adaptamos seu projeto em módulos inteligentes, proporcionando rapidez e flexibilidade para sua nova moradia." />
            </Helmet>
            <Content>
                <Home />
                    <Casas />
                        <Solucoes />
                            <Trajetoria />
                                <Formulario>
                                    <FormLP />
                                </Formulario>
                                
            </Content>
        </>
    )
}

export default PaginaModular;