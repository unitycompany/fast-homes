import React from "react";
import styled from "styled-components";
import CarrosselLP from "../../../components/carrossel-lp";

const Content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5% 5%;
    gap: 30px;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;

    @media (max-width: 768px){
        flex-direction: column-reverse;
    }
`

const Left = styled.div`
    width: 45%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    min-height: auto;
    position: relative;

    @media (max-width: 768px){
        width: 100%;
    }

    & div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        flex-direction: column;

        & h1 {
            font-size: 40px;
            font-family: var(--font--aboreto);
            line-height: 100%;
        }

        & p {
            font-size: 22px;
            line-height: 110%;
            width: 90%;
            font-weight: 300;

            @media (max-width: 768px){
                font-size: 18px;
            }
        }
    }

    & div:nth-child(2){
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%);
        align-items: center;
        gap: 5px;

        @media (max-width: 768px){
            position: relative;
            width: 100%;
            margin-top: 20px;
        }

        & h1 {
            font-size: 100px;
            font-family: var(--font--aboreto);
            line-height: 100%;

            @media (max-width: 768px){
                font-size: 80px;
            }
        }

        & p {
            font-size: 24px;
            line-height: 110%;
        }
    }
`

const Right = styled.div`
    width: 55%;
    height: 100%;

    @media (max-width: 768px){
        width: 100%;
        height: 60dvh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & img {
        height: 90dvh!important;

        @media (max-width: 768px){
            height: 60dvh!important;
        }
    }
`

const Dobra2 = ({ title1, area, descricao, imagens }) => {
    return (
        <>
            <Content>
                <Left>
                    <div>
                        <p data-aos="fade-up" data-aos-delay="300" style={{ whiteSpace: 'pre-line' }}>{descricao}</p>
                    </div>
                    <div>
                        {/* <h1 data-aos="zoom-in" data-aos-delay="100">{area}M²</h1>
                        <span data-aos="fade-up" data-aos-delay="500">Área construida</span> */}
                    </div>
                </Left>
                <Right data-aos="fade-up" data-aos-delay="100">
                    <CarrosselLP
                        images={imagens}
                        width="100%"
                        height="90dvh"
                    />
                </Right>
            </Content>
        </>
    )
}

export default Dobra2;