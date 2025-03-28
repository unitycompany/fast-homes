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

    & article {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 15px;

        &:nth-child(1){
            position: sticky;
            top: 80px;
            left: 0;
        }

        &:nth-child(2){
            margin-bottom: -20px;
            left: 0;
        }
    }
`

const Home = () => {
    return (
        <>
            <Content>
                <Top>
                    <h1>Uma nova <b>forma de construir</b></h1>
                    <p>Já imaginou morar ou investir em uma casa que une design moderno e sustentabilidade? Com a House Box, isso é possível em apenas 30 dias, dependendo do tamanho e modelo que escolher.</p>
                </Top>

                <Center>
                    <article>
                        <VideoModular 
                        />
                    </article>
                    <article>
                        <CardModular 
                            icon="house"
                            titulo="Agilidade"
                            descricao="Construa com agilidade. Obras demoradas e caras já não precisam fazer parte da sua realidade."
                        />
                        <CardModular 
                            icon="wind"
                            titulo="Sustentável"
                            descricao="Espaços sustentáveis são o futuro — e o futuro já chegou."
                        />
                        <CardModular 
                            icon="pen"
                            titulo="Agilidade"
                            descricao="Design funcional e inovador, pronto para acompanhar o seu estilo."
                        />
                        <CardModular 
                            icon="truck"
                            titulo="Entrega"
                            descricao="Sua casa chega pronta no seu terreno, dá para acreditar?"
                        />
                    </article>
                </Center>
            </Content>
        </>
    )
}

export default Home;