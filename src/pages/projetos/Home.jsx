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
            gap: 20px;

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
        height: auto;
        flex-direction: column;
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
            height: 400px;
        }
    }
`

const Home = () => {
    return (
        <>
            <Option data-aos="zoom-in" data-aos-delay="100">

                <article>
                    
                    <Right>
                        <div>
                            <CardMiniProjetos 
                                number="Eficiência estrutural"
                                description="Construção precisa, com materiais leves, resistentes e de alta durabilidade."
                                width="100"
                                height="100"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/66228922-7e9e-4a61-d2c7-99637da26300/public"
                            />
                        </div>
                        <div>
                            <CardMiniProjetos 
                                number="Conforto termoacústico"
                                description="Ambientes mais silenciosos e com temperatura equilibrada o ano todo."
                                width="100"
                                height="50"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67d35ae2-a4c2-444c-780e-82a3a66f1700/public"
                            />

                            <CardMiniProjetos 
                                number="Baixa manutenção"
                                description="Acabamento de alto padrão que exige menos reparos ao longo dos anos."
                                width="100"
                                height="50"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/69901ac3-ef62-4ce2-39e2-c5c6c14a7900/public"
                            />
                        </div>
                    </Right>

                    <Left>
                        <h1>O seu projeto começa aqui</h1>
                        <p>
                            A nossa equipe técnica desenvolve um projeto personalizado para você, considerando: seu estilo de vida, sua rotina, suas necessidades e o número de moradores.
                            <br/><br/>
                            Com o sistema Steel Frame, garantimos uma construção rápida, eficiente e com alto padrão de qualidade desde o planejamento.

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
                </article>

                <CardProjeto 
                    title="Já tem o projeto da sua casa?"
                    description="Se você já tem o projeto dos seus sonhos, a Fast Homes o transforma em realidade – com toda a eficiência e qualidade do Steel Frame. Adaptamos o seu projeto sem complicações e, o melhor: com a garantia de uma construção 4x mais rápida."
                    direction={false}
                    position="right"
                    text={false}
                    image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2751c4a0-fc31-407c-244e-8277817bdc00/public"
                    itemDirection={false}
                />
            </Option>

            <Option data-aos="fade-up" data-aos-delay="100">

                <article>
                    <Left>
                        <h1>O seu projeto com a nossa qualidade</h1>
                        <p>
                            Na <b>Fast Homes, adaptamos o seu projeto</b> para o sistema Steel Frame.
                            Cuidamos de todo o processo para que você tenha uma casa do jeito que idealizou, mas com toda a inovação que só a Fast Homes oferece.<br/><br/>
                            Você mantém o seu projeto original com todos os benefícios da construção a seco.
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
                                number="Adaptação inteligente"
                                description="Analisamos e ajustamos o seu projeto para o sistema Steel Frame, mantendo o conceito original."
                                width="100"
                                height="100"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/20f3dc9a-78b9-489f-d698-97015a3b1200/public"
                            />
                        </div>
                        <div>
                            <CardMiniProjetos 
                                number="Entrega rápida"
                                description="Com o Steel Frame, sua casa fica pronta até 4x mais rápido."
                                width="100"
                                height="50"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f599a42a-0f08-492b-6ad3-e9f925725100/public"
                            />

                            <CardMiniProjetos 
                                number="Qualidade garantida"
                                description="Trabalhamos com materiais de alta performance, tecnologia de ponta e mão de obra especializada."
                                width="100"
                                height="50"
                                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fe07fcc-e4e1-4cab-a28a-1226726da000/public"
                            />
                        </div>
                    </Right>
                </article>
            </Option>    
        </>
    )
}

export default Home;