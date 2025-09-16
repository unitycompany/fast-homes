import React from "react";
import styled from "styled-components";
import CarrosselLPPlanta from "../../../components/carrossel-lp-planta";

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    left: 50%;
    height: auto;
    top: 0;
    padding: 2.5% 5%;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    overflow: hidden;
    border: 1px solid var(--color--gray);
    border-top: none;

    @media (max-width: 768px){
        height: 100%;
        padding: 2.5%;
    }

    & img {
        border-radius: 20px;
        height: 650px!important;
        object-fit: contain!important;

        @media (max-width: 768px){
            height: 400px!important;
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

const Dobra4 = ({ plantaBaixa }) => {
    return (
        <>
            <Content>
                <Bottom>
                    <h1 data-aos="fade-up" data-aos-delay="100">
                        Planta Baixa
                    </h1>
                    {/* <p data-aos="fade-up" data-aos-delay="300">
                        {descricao}
                    </p> */}
                </Bottom>
                <CarrosselLPPlanta
                    images={plantaBaixa}
                    width="100%"
                    height="auto"
                />
            </Content>
        </>
    )
}

export default Dobra4;