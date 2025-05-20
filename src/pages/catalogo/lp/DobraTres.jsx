import React from "react";
import styled from "styled-components";
import CarrosselLP from "../../../components/carrossel-lp";

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5% 5%;
    gap: 30px;
    flex-direction: column;
    max-width: 1280px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);

    & img {
        height: 650px!important;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & div {
        @media (max-width: 768px){
            width: 100%;
            height: 400px;
        }
    }

    & img {
        height: 550px;

        @media (max-width: 768px){
            height: 400px!important;
            object-fit: cover;
        }
    }
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    width: 100%;

    & h1 {
        font-size: 36px;
        font-family: var(--font--aboreto);

        @media (max-width: 768px){
            font-size: 26px;
            line-height: 110%;
        }
    }

    & p {
        font-size: 16px;
        line-height: 110%;
        width: 80%;
    }
`

const Dobra3 = ({ descricao, title, carrosselDireita, carrosselEsquerda }) => {
    return (
        <>
            <Content>
                <Top data-aos="zoom-in" data-aos-delay="100">
                    <CarrosselLP
                        images={carrosselEsquerda}
                        width="50%"
                        height="650px"
                    />
                    <CarrosselLP 
                        images={carrosselDireita}
                        width="50%"
                        height="650px"
                    />
                </Top>
                <Bottom>
                    <h1 data-aos="fade-up" data-aos-delay="100">
                        Planta Baixa
                    </h1>
                    {/* <p data-aos="fade-up" data-aos-delay="300">
                        {descricao}
                    </p> */}
                </Bottom>
            </Content>
        </>
    )
}

export default Dobra3;