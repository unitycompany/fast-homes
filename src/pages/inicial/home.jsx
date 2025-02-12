import React from "react";
import styled, { keyframes } from "styled-components";

import { BsHouse, BsArrowUpRight } from "react-icons/bs";
import GlobalButton2 from "../../components/buttons/GlobalButton2";
import GlobalButton3 from "../../components/buttons/GlobalButton3";


const moveBackground = keyframes`
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: -20px -20px;
    }
    100% {
        background-position: 0 0;
    }
`;

const HomeContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 15% 0 5% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    font-family: "Montserrat", serif;
    background-position: center;
    background-size: cover;

    @media (max-width: 768px){
        padding: 30% 0 20% 0;
    }
`;

const HomeBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/10052673-3243-41df-76b4-22bb1ad2e100/public');
    background-position: center;
    background-size: contain;
`;

const HomeCenter = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    gap: 80px;
    height: auto;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 40px;
    }

`

const HomeTexts = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5%;

    @media (max-width: 768px){
        width: 100%;
    }

    & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-family: var(--font--aboreto);
        padding-bottom: 15px;

        & > h2 {
            font-size: 35px;
            line-height: 100%;

            @media (max-width: 768px){
                font-size: 20px;
            }
        }

        & > h1 {
            font-size: 100px;
            line-height: 100%;
            color: var(--color--green--very--low);

            @media (max-width: 768px){
                font-size: 58px;
            }
        }
    }

    & > p {
        font-size: 16px;
        line-height: 120%;
        font-weight: 400;
        padding-bottom: 35px;
    }

    & > button {
        padding-bottom: 10px;
    }
    
`

const HomeImages = styled.div`
    width: 50%;
    height: 600px;
    position: relative;
    color: var(--color--white);
    padding: 20px;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > button {
        position: absolute;
        z-index: 10;
        cursor: pointer;
        padding: 10px 15px;
        background-color: #00000020;
        backdrop-filter: blur(5px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        color: var(--color--white);
    } 

    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -50px;
        right: -100px;
        transform: scale(1.7);
        transition: all 1s ease;
        z-index: 1;
        display: none;
    }

    @media (max-width: 768px){
        width: 100%;
        height: 400px;
        flex-direction: column;
    }

    
`

const Home = () => {

    return (
        <HomeContainer>
            <HomeBackground />

            <HomeCenter>
                <HomeTexts>
                    <div>
                        <h2>O novo conceito de lar é</h2>
                        <h1>Modular</h1>
                    </div>
                    <p>
                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos<br /> <br />

                        Colocar uma descrição curta e objetiva falando sobre a fast homes.
                    </p>
                    <GlobalButton2
                            text="Solicitar meu orçamento"
                            background1="var(--color--green--very--low)"
                            background2="var(--color--green--very--low)"
                            colorIcon="#fff"
                            colorText="#fff"
                    />
                    <GlobalButton3
                            text="Conhecer catálogo"
                            background1="transparent"
                            background2="transparent"
                            colorIcon="#000"
                            colorText="#000"
                            border1="#000"
                            border2="#000"
                    />
                </HomeTexts>

                <HomeImages>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/905e6a45-b84d-43f7-2a56-51a5966f4f00/public" alt="" />
                    <button>Conhecer casa</button>
                </HomeImages>
            </HomeCenter>
        </HomeContainer>
    );
};

export default Home;
