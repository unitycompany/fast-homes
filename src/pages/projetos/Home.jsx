import React from "react";
import styled from "styled-components";
import CardProjeto from "../../components/cards/CardProjetos";
import CardMiniProjetos from "../../components/cards/CardMiniProjetos";
import GlobalButton3 from "../../components/buttons/GlobalButton3";

const Option = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    padding: 0 5%;
    max-width: 1280px;
    position: relative;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    & article {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
    }
`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    flex-direction: column;

    & h1 {
        font-size: 30px;
        line-height: 110%;
        font-family: var(--font--aboreto);
    }

    & p {
        font-size: 16px;
        line-height: 120%;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 650px;
    gap: 10px;
    
    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        height: 600px;
    }
`

const Home = () => {
    return (
        <>
            <Option>
                <CardProjeto 
                    title="Já tem o projeto da sua casa?"
                    description="Aqui na Fast Homes, nós adaptamos seu projeto para Steel Frame, sem dor de cabeça, cuidamos de tudo, e você não terá gasto nenhum com isso."
                    direction={true}
                    position="left"
                    text={true}
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                    itemDirection={true}
                />

                <article>
                    <Left>
                        <h1>Sua casa com a qualidade da Fast homes</h1>
                        <p>
                            Aqui na <b>Fast Homes</b>, nós adaptamos seu projeto para Steel Frame, sem dor de cabeça, cuidamos de tudo, e você não terá gasto nenhum com isso.
                        </p>
                        <GlobalButton3
                            text="Enviar meu projeto para um consultor"
                            background1="transparent"
                            background2="transparent"
                            colorIcon="#000"
                            colorText="#000"
                            border1="#000"
                            border2="#000"
                            to="/catalogo-de-casas"
                        />
                    </Left>
                    <Right>
                        <div>
                            <CardMiniProjetos 
                                number="4X"
                                description="O Steel Frame é 4x mais rápido que a alvenaria tradicional"
                                width="100"
                                height="100"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                            />
                        </div>
                        <div>
                            <CardMiniProjetos 
                                number="4X"
                                description="O Steel Frame é 4x mais rápido que a alvenaria tradicional"
                                width="100"
                                height="50"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                            />

                            <CardMiniProjetos 
                                number="4X"
                                description="O Steel Frame é 4x mais rápido que a alvenaria tradicional"
                                width="100"
                                height="50"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                            />
                        </div>
                    </Right>
                </article>
            </Option>
            
            <Option>
                <CardProjeto 
                    title="Já tem o projeto da sua casa?"
                    description="Aqui na Fast Homes, nós adaptamos seu projeto para Steel Frame, sem dor de cabeça, cuidamos de tudo, e você não terá gasto nenhum com isso."
                    direction={false}
                    position="right"
                    text={false}
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                    itemDirection={false}
                />

                <article>
                    
                    <Right>
                        <div>
                            <CardMiniProjetos 
                                number="4X"
                                description="O Steel Frame é 4x mais rápido que a alvenaria tradicional"
                                width="100"
                                height="100"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                            />
                        </div>
                        <div>
                            <CardMiniProjetos 
                                number="4X"
                                description="O Steel Frame é 4x mais rápido que a alvenaria tradicional"
                                width="100"
                                height="50"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                            />

                            <CardMiniProjetos 
                                number="4X"
                                description="O Steel Frame é 4x mais rápido que a alvenaria tradicional"
                                width="100"
                                height="50"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eebf97bc-e4a7-45ac-054f-2dce6a095e00/public"
                            />
                        </div>
                    </Right>

                    <Left>
                        <h1>Sua casa com a qualidade da Fast homes</h1>
                        <p>
                            Aqui na <b>Fast Homes</b>, nós adaptamos seu projeto para Steel Frame, sem dor de cabeça, cuidamos de tudo, e você não terá gasto nenhum com isso.
                        </p>
                        <GlobalButton3
                            text="Enviar meu projeto para um consultor"
                            background1="transparent"
                            background2="transparent"
                            colorIcon="#000"
                            colorText="#000"
                            border1="#000"
                            border2="#000"
                            to="/catalogo-de-casas"
                        />
                    </Left>
                </article>
            </Option>
            
        </>
    )
}

export default Home;