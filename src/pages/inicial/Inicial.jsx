import React from "react";
import Home from "./home";
import Catalogo from "./Catalogo";
import Faixa from "../../components/faixa";
import Sobre from "./Sobre";
import Parcerias from "./Parcerias";



const PaginaInicial = () => {
    return (
        <>
            <Home />
                <Catalogo />
                    <Faixa categoria="interiores"/>
                        <Sobre />
                            <Faixa categoria="interiores"/>
                                <Parcerias />
                                    <Faixa categoria="interiores"/>
        </>
    );
};

export default PaginaInicial;
