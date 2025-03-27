import React from "react";
import Home from "./home";
import Catalogo from "./Catalogo";
import Faixa from "../../components/faixa";
import Parcerias from "./Parcerias";
import Trajetoria from "./Trajetoria";
import Financiamento from "./Financiamento";
import SobreNos from "./SobreNos";

const PaginaInicial = () => {
    return (
        <>
            <Home />
                <Catalogo />
                    <Faixa categoria="interiores"/>
                        <Trajetoria />
                            <Financiamento />
                                <Faixa categoria="interiores"/>
                                    <SobreNos />
                                        <Parcerias />
                                            <Faixa categoria="interiores"/>
        </>
    );
};

export default PaginaInicial;
