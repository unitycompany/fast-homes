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
                    <Faixa />
                        <Sobre />
                            <Faixa />
                                <Parcerias />
                                    <Faixa />
        </>
    );
};

export default PaginaInicial;
