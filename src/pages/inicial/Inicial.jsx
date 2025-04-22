import React from "react";
import Home from "./home";
import Catalogo from "./Catalogo";
import Faixa from "../../components/faixa";
import Parcerias from "./Parcerias";
import Trajetoria from "./Trajetoria";
import Financiamento from "./Financiamento";
import SobreNos from "./SobreNos";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const PaginaInicial = () => {
    return (
        <>
            <Helmet>
                <title>Inicio - Fast Homes</title>
                <meta name="description" content="Fast Homes oferece casas pré-fabricadas sustentáveis, eficientes e personalizáveis para atender às suas necessidades de moradia moderna." />
            </Helmet>

            <Home />
                <Catalogo />
                    <Faixa categoria="interiores"/>
                        <Trajetoria />
                            {/* <Financiamento /> */}
                                <Faixa categoria="fachadas"/>
                                    <SobreNos />
                                        <Parcerias />
                                            <Faixa categoria="interiores"/>
        </>
    );
};

export default PaginaInicial;
