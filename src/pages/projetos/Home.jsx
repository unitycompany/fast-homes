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
    transform: translateX(-50%)!important;

    @media (max-width: 768px){
        &:nth-child(1){
            padding: 15% 2.5% 0 2.5%;;
        }

        &:nth-child(2){
            padding: 10% 2.5% 5% 2.5%;
        }
    }

    & article {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;

        @media (max-width: 768px){
            flex-direction: column;
            gap: 0px;

            &:nth-child(2){
                flex-direction: column-reverse;
            }
        }
    }
`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    flex-direction: column;

    @media (max-width: 768px){
        width: 100%;
        flex-direction: column;
        padding: 2.5% 2.5% 0 2.5%;
        gap: 20px;
    }

    & h1 {
        font-size: 30px;
        line-height: 110%;
        font-family: var(--font--aboreto);

        @media (max-width: 768px){
            font-size: 24px;
        }
    }

    & p {
        font-size: 16px;
        line-height: 120%;
        
        @media (max-width: 768px){
            font-size: 16px;
        }
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 650px;
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
        padding: 2.5% 0% 0 0%;
        height: 550px;
    }
    
    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        height: 600px;

        @media (max-width: 768px){
            height: 500px;
        }
    }
`

const Home = () => {
    return (
        <>
            <Option data-aos="fade-up" data-aos-delay="100">
                <CardProjeto 
                    title="Já tem o projeto da sua casa?"
                    description="Aqui na Fast Homes, nós adaptamos seu projeto para Steel Frame, sem dor de cabeça, cuidamos de tudo, e você não terá gasto nenhum com isso."
                    direction={true}
                    position="left"
                    text={true}
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6e78ac0d-d748-41ef-c039-e41166058900/public"
                    itemDirection={true}
                />

                <article>
                    <Left>
                        <h1>Sua casa com a qualidade da Fast homes</h1>
                        <p>
                            Aqui na <b>Fast Homes</b>, nós adaptamos seu projeto para Steel Frame, sem dor de cabeça, cuidamos de tudo, e você não terá gasto nenhum com isso.
                        </p>
                        <GlobalButton3
                            text="Conversar com um consultor"
                            background1="transparent"
                            background2="transparent"
                            colorIcon="#000"
                            colorText="#000"
                            border1="#000"
                            border2="#000"
                            to="/projetos-personalizados#form"
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
            
            <Option data-aos="zoom-in" data-aos-delay="100">
                <CardProjeto 
                    title="Já tem o projeto da sua casa?"
                    description="Aqui na Fast Homes, nós adaptamos seu projeto para Steel Frame, sem dor de cabeça, cuidamos de tudo, e você não terá gasto nenhum com isso."
                    direction={false}
                    position="right"
                    text={false}
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2751c4a0-fc31-407c-244e-8277817bdc00/public"
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
                            text="Falar com um Consultor"
                            background1="transparent"
                            background2="transparent"
                            colorIcon="#000"
                            colorText="#000"
                            border1="#000"
                            border2="#000"
                            to="/projetos-personalizados#form"
                        />
                    </Left>
                </article>
            </Option>
            
        </>
    )
}

export default Home;