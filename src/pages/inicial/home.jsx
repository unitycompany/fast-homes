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
    padding: 12.5% 0 10% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    font-family: "Montserrat", serif;

    @media (max-width: 768px){
        padding: 30% 0 20% 0;
    }
`;

const HomeBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    background-color: var(--color--white);
    --gap: 5em;
    --line: 1px;
    --color: rgba(0, 0, 0, 0.05);

    background-image: linear-gradient(
        -90deg,
        transparent calc(var(--gap) - var(--line)),
        var(--color) calc(var(--gap) - var(--line) + 1px),
        var(--color) var(--gap)
        ),
        linear-gradient(
        0deg,
        transparent calc(var(--gap) - var(--line)),
        var(--color) calc(var(--gap) - var(--line) + 1px),
        var(--color) var(--gap)
        );

    background-size: var(--gap) var(--gap);
    animation: ${moveBackground} 10s infinite alternate ease-in-out;
`;

const HomeCenter = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    padding: 0 5%;
    gap: 80px;
    height: auto;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

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
    height: 650px;
    position: relative;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public');
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: var(--color--white);
    padding: 20px;
    gap: 20px;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px){
        width: 100%;
        height: 400px;
        flex-direction: column;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 25px;
        left: 25px;
        background-color: transparent;
        border: 1px solid var(--color--green--very--high);
        opacity: 0.6;
        z-index: -1;
        border-radius: 50px;

        @media (max-width: 768px){
            top: 10px;
            left: 10px;
        }
    }
    
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: -25px;
        left: -25px;
        background-color: transparent;
        border: 1px solid var(--color--green--high);
        opacity: 0.6;
        z-index: -5;
        border-radius: 50px;

        @media (max-width: 768px){
            top: -10px;
            left: -10px;
        }
    }

    & > div:nth-child(1) {
        width: 30%;
        height: 100px;

        & > button {
            width: 100%;
            height: 100%;
            background-color: #ffffff05;
            backdrop-filter: blur(2px);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
            cursor: pointer;
            transition: all .3s ease-in-out;

            @media (max-width: 768px){
                display: none;
            }

            &:hover {
                background-color: #ffffff10;
                backdrop-filter: blur(2px);
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
            }

            &:hover > span {
                font-size: 14px;
            }

            &:hover > svg {
                font-size: 40px;

                @media (max-width: 768px){
                    font-size: 30px;
                }
            }

            & > span {
                font-size: 0;
                transition: all .3s ease-in-out;

                @media (max-width: 768px){
                    color: #000;
                }

                @media (max-width: 768px){
                    font-size: 12px;
                }
            }

            & > svg {
                font-size: 50px;
                transition: all .3s ease-in-out;

                @media (max-width: 768px){
                    font-size: 25px;
                    fill: #000;
                }
            }
        }
    }

    & > div:nth-child(2) {
        height: 100px;
        padding: 10px 5px 10px 20px;
        border-radius: 20px;
        background-color: #ffffff05;
        backdrop-filter: blur(2px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .3s ease-in-out;

        @media (max-width: 768px){
            padding: 10px 10px 10px 20px;
        }

        &:hover {
            background-color: #ffffff10;
            backdrop-filter: blur(2px);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }

        & > div:nth-child(1){
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 5px;

            @media (max-width: 768px){
                width: 80%;
            }

            & > span {
                font-size: 18px;
                font-weight: 500;
                color: #fff;

                @media (max-width: 768px){
                    font-size: 16px;
                }
            }

            & > p {
                font-size: 14px;
                line-height: 110%;
                font-weight: 300;
                color: #fff;

                @media (max-width: 768px){
                    font-size: 14px;
                }
            }
        }

        & > div:nth-child(2){
            background-color: #ffffff;
            backdrop-filter: blur(20px);
            height: 90px;
            width: 95px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all .1s ease-in-out;

            @media (max-width: 768px){
                height: 50px;
                width: 50px;
                align-items: flex-end;
                justify-content: flex-end;
            }

            &:hover {
                transform: scale(0.95);
            }

            & > button {
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                width: 100%;
                height: 100%;
                transition: all .2s ease-in-out;

                &:hover > svg {
                    transform: rotate(45deg);
                }
                
                & > svg {
                    font-size: 40px;
                    fill: var(--color--black);
                    transition: all .2s ease-in-out;

                    @media (max-width: 768px){
                        font-size: 20px;
                    }
                }
            }
            
            
        }
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
                    <div>
                        <button>
                            <BsHouse />
                            <span>Catálogo</span>
                        </button>
                    </div>
                    <div>
                        <div className="backgroundCasa">
                            <span>Nome da casa</span>
                            <p>Descrição breve sobre a casa que está sendo apresentada acima</p>
                        </div>
                        <div>
                            <button>
                                <BsArrowUpRight />
                            </button>
                        </div>
                    </div>
                </HomeImages>
            </HomeCenter>
        </HomeContainer>
    );
};

export default Home;
