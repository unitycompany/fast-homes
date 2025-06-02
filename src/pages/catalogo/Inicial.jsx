import React from "react";
import styled from "styled-components";

import Home from "./Home";
import CardProjeto from "../../components/cards/CardProjetos";
import Text from "./Text";
import { Helmet } from "react-helmet-async";
import Faixa from "../../components/faixa";

const Projetos = styled.div`
    max-width: 1280px;
    padding: 2.5%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
`

const PaginaCatalogo = () => {
    return (
        <>
            <Helmet>
                <title>Catálogo - Fast Homes</title>
                <meta name="description" content="Confira o catálogo completo de casas pré-fabricadas da Fast Homes. Projetos modernos, sustentáveis e prontos para personalização, ideais para seu estilo de vida." />
            </Helmet>
            <Home />   
                <Projetos>
                    <CardProjeto 
                        textButton="Traga o seu projeto para a Fast Homes"
                        title="Já tem o projeto da sua casa?"
                        description="Se você já tem o projeto dos seus sonhos, a Fast Homes o transforma em realidade - com toda a eficiência e qualidade do Steel Frame. Adaptamos o seu projeto sem complicações e, o melhor: deixando sua construção até 4x mais rápida com o sistema Steel Frame."
                        direction={true}
                        position="left"
                        text={true}
                        image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                        itemDirection={true}
                    />
                </Projetos>
                    <Text />
                        <Faixa categoria="interiores"/>
        </>
    )
}

export default PaginaCatalogo;