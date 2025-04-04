import React from "react";
import styled from "styled-components";

import Home from "./Home";
import CardProjeto from "../../components/cards/CardProjetos";
import Text from "./Text";
import { Helmet } from "react-helmet-async";

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
                        title="Já tem o projeto da sua casa?"
                        description="Aqui na Fast Homes, nós adaptamos seu projeto para Steel Frame, sem dor de cabeça, cuidamos de tudo, e você não terá gasto nenhum com isso."
                        direction={true}
                        position="left"
                        text={true}
                        image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                        itemDirection={true}
                    />
                </Projetos>
                    <Text />
        </>
    )
}

export default PaginaCatalogo;