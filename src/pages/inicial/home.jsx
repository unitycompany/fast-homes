import React from "react";
import styled, { keyframes } from "styled-components";

import GlobalButton2 from "../../components/buttons/GlobalButton2";
import GlobalButton3 from "../../components/buttons/GlobalButton3";

import { BsArrowUpRight, BsHouseDoor } from "react-icons/bs";


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
    padding: 10% 0 5% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    font-family: "Montserrat", serif;
    background-position: center;
    background-size: cover;

    @media (max-width: 768px){
        padding: 30% 0 0% 0;
    }
`;

const HomeBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/10052673-3243-41df-76b4-22bb1ad2e100/public');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @media(max-width: 768px){
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bfbb6c6e-0afb-4531-b0e7-971164932500/public');
        background-position: top;
    }
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
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff80;
        backdrop-filter: blur(1px);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        color: #fff;
        transition: all .2s ease;

        @media (max-width: 768px){
            display: none;
        }

        & > span {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            top: -50px;
            width: 200px;
            padding: 10px 10px 15px 10px;
            background-color: #fff;
            clip-path: polygon(50% 0%, 100% 0, 100% 90%, 60% 90%, 50% 100%, 50% 100%, 40% 90%, 0 90%, 0 0);
            transform: scale(0);
            transition: all .2s ease;
            gap: 10px;
            color: var(--color--black);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

            & > svg {
                font-size: 16px;
                fill: var(--color--black);
            }
        }

        & > svg {
            font-size: 25px;
            transform: rotate(45deg);
            transition: all .2s ease;
        }

        &:hover {
            background-color: #fff;
            color: var(--color--black);
            transform: scale(1.02);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
            transform: scale(1.1);
        }

        &:hover > span {
            transform: scale(1);
        }

        &:hover > svg {
            transform: rotate(-45deg);
        }
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
                    <button>
                        <span>
                            <BsHouseDoor />
                            Conhecer essa casa
                        </span>
                        <BsArrowUpRight />
                    </button>
                </HomeImages>
            </HomeCenter>
        </HomeContainer>
    );
};

export default Home;
