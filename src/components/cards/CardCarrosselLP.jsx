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
        font-size: 20px;
    }

    & p {
        font-size: 14px;
    }
`;

const CardsCarrosselLP = () => {
    const cardsData = [
        { id: 1, title: "Qualidade", text: "Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. Espectacular casa a medida con un total de 231 m² situada en." },
        { id: 2, title: "Durabilidade", text: "DEspectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. Espectacular casa a medida con un total de 231 m² situada en." },
        { id: 3, title: "Eficiência", text: "Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. Espectacular casa a medida con un total de 231 m² situada en." },
        { id: 4, title: "Sustentabilidade", text: "Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. Espectacular casa a medida con un total de 231 m² situada en." },
        { id: 5, title: "Custo-benefício", text: "Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. Espectacular casa a medida con un total de 231 m² situada en." },
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
