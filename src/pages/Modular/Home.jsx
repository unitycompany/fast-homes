import React from "react";
import styled from "styled-components";
import CardModular from "../../components/cards/CardModular";
import VideoModular from "../../components/cards/VideoModular";

const Content = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    padding: 10% 5% 0% 5%;

    @media (max-width: 768px){
        padding: 25% 5% 0 5%;
    }
`

const Top = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;

    & h1 {
        font-size: 36px;
        font-weight: 300;
        line-height: 100%;

        @media (max-width: 768px){
            font-size: 28px;
        }
         
        & b {
            font-weight: 500;
            color: transparent;
            background: linear-gradient(90deg, #576628, #B05216, #603813, #1d1b1d);
            -webkit-background-clip: text;
        }
    }

    & p {
        font-size: 18px;
        line-height: 120%;
        width: 80%;

        @media (max-width: 768px){
            width: 100%;
            font-size: 16px;
            line-height: 110%;
        }
    }
`

const Center = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: auto;
    gap: 20px;
    min-height: 60vh;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 10px;
    }

    & article {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 15px;

        @media (max-width: 768px){
            width: 100%;
            gap: 10px;
        }

        &:nth-child(1){
            position: sticky;
            top: 80px;
            left: 0;

            @media (max-width: 768px){
                z-index: 2;
            }
        }

        &:nth-child(2){
            margin-bottom: -20px;
            left: 0;

            @media (max-width: 768px){
                margin-bottom: 0;
            }
        }
    }
`

const Home = () => {
    return (
        <>
            <Content>
                <Top>
                    <h1>Uma nova <b>forma de construir</b></h1>
                    <p>Com a Fast Homes e a House Box, você recebe a sua casa pronta direto no seu terreno em tempo recorde.<br/><br/>

                    Combinamos a eficiência do sistema Steel Frame, o design exclusivo da Fast Homes e a praticidade da construção modular da House Box para criar casas inteligentes, sustentáveis e prontas para morar.<br/><br/>

                    Design, funcionalidade e velocidade: Fast Homes e House Box atuam juntas para entregar casas modulares pensadas para o presente e prontas para o futuro.
                    </p>
                </Top>

                <Center>
                    <article>
                        <VideoModular 
                        />
                    </article>
                    <article>
                        <CardModular 
                            icon="house"
                            titulo=" Entrega rápida direto no seu terreno"
                            descricao="Construída em tempo recorde, sua casa chega pronta para morar. Obras demoradas e caras não são realidade por aqui."
                        />
                        <CardModular 
                            icon="wind"
                            titulo="Design moderno e funcional"
                            descricao=" Ambientes planejados para otimizar o espaço e garantir o seu bem-estar no dia a dia."
                        />
                        <CardModular 
                            icon="pen"
                            titulo="Construção mais limpa e sustentável"
                            descricao="O Steel Frame já é o presente da construção civil: menos desperdícios, menos resíduos e mais responsabilidade."
                        />
                        <CardModular 
                            icon="truck"
                            titulo="Qualidade e tecnologia unidas"
                            descricao="Padrão Fast Homes com inovação House Box do projeto ao acabamento."
                        />
                    </article>
                </Center>
            </Content>
        </>
    )
}

export default Home;