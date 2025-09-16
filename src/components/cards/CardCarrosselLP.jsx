import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Content = styled.div`
    width: 100%;
    padding: 2.5% 5%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    margin-bottom: 100px;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    border: 1px solid var(--color--gray);
    border-top: none;
`

const Top = styled.div`
    width: 100%;
    & h1 {
        font-size: 30px;
        font-family: var(--font--aboreto);

        @media (max-width: 768px){
            font-size: 26px;
        }
    }
`;

const StyledSplide = styled(Splide)`
    width: 100%;

    .splide__track {
        padding: 10px 0;
    }

    .splide__slide {
        display: flex;
        justify-content: center;
    }
`;

const Card = styled.div`
    width: 100%; 
    max-width: 350px; 
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    border: 1px solid #00000030;
    border-radius: 20px;
    background: white;

    & h1 {
        font-size: 80px;
        line-height: 100%;
        font-family: var(--font--aboreto);
        color: var(--color--green--very--low);
    }

    & h4 {
        font-size: 24px;
    }

    & p {
        font-size: 16px;
    }
`;

const CardsCarrosselLP = () => {
    const cardsData = [
        { id: 1, title: "Qualidade", text: "Materiais de alta performance, acabamento de alto padrão e atenção aos detalhes garantem um lar durável, confortável e moderno." },
        { id: 2, title: "Rapidez na Entrega", text: "O sistema industrializado permite que sua casa fique pronta até 4x mais rápido que uma obra tradicional em alvenaria." },
        { id: 3, title: "Durabilidade", text: "O Steel Frame resiste à umidade, pragas e intempéries, com uma estrutura que exige baixa manutenção e dura de 100 a 300 anos." },
        { id: 4, title: "Custo-benefício", text: "Mais previsibilidade no orçamento, menos desperdício de materiais de construção e uma entrega altamente eficiente: tudo pensado para unir economia e excelência." },
        { id: 5, title: "Sustentabilidade", text: "A construção a seco utiliza apenas 5L/m² de água e gera zero resíduos na parte da estrutura. Ideal para quem busca um lar alinhado às questões sustentáveis." },
    ];

    return (
        <Content>
            <Top>
                <h1>Quais as vantagens?</h1>
            </Top>
            <StyledSplide
                options={{
                    type: "loop",
                    perPage: 3,
                    perMove: 1,
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    arrows: false,
                    pagination: false,
                    gap: "20px", // Espaço entre os slides
                    breakpoints: {
                        1024: { perPage: 3, gap: "30px" }, // Desktop
                        768: { perPage: 2, gap: "20px" }, // Tablet
                        480: { perPage: 1, gap: "10px" }, // Celular
                    },
                }}
            >
                {cardsData.map((card) => (
                    <SplideSlide key={card.id}>
                        <Card>
                            <h1>{card.id}</h1>
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                        </Card>
                    </SplideSlide>
                ))}
            </StyledSplide>
        </Content>
    );
};

export default CardsCarrosselLP;
