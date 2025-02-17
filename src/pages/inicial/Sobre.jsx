import React from "react";
import styled, { keyframes } from "styled-components";
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

const SobreContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    position: relative;
`

const SobreBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;

    --gap: 2em;
    --line: 1px;
    --color: rgba(0, 0, 0, 0.05);
    z-index: -2;

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

const SobreConteudo = styled.div`
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5% 0;
    gap: 100px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }
`

const SobreImage = styled.div`
    width: 45%;
    height: 650px;
    position: relative;

    @media (max-width: 768px) {
        width: 80%;
        height: 400px;
        margin-top: 50px;
    }

    &::before{
        content: '';
        top: -20px;
        left: -20px;
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid var(--color--green--very--high);
        z-index: -1;

        @media (max-width: 768px) {
            top: -10px;
            left: -10px;
        }
    }

    &::after{
        content: '';
        bottom: -20px;
        right: -20px;
        position: absolute;
        width: 100%;
        height: 60%;
        border: 1px solid var(--color--green--very--high);
        z-index: -1;

        @media (max-width: 768px) {
            bottom: -10px;
            right: -10px;
        }
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const SobreTexts = styled.div`
    padding-right: 5%;
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    font-family: var(--font--montserrat);

    @media (max-width: 768px) {
        width: 100%;
        padding: 5%;
    }

    & > h1 {
        font-family: var(--font--aboreto);
        font-size: 35px;
        color: var(--color--green--very--high) ;
        font-weight: 400;

        @media (max-width: 768px) {
            line-height: 100%;
        }

        & > a {
            color: var(--color--green--low);
            border-bottom: 1px solid var(--color--green--low);
            line-height: 100%;
            cursor: pointer;
            transition: all .4s ease;

            &:hover {
                transform: scale(0.9)!important;
            }
        }
    }

    & > p {
        font-size: 16px;
        color: var(--color--black);
    }
`

const Sobre = () => {
    return (
        <>
            <SobreContainer>
                <SobreBackground></SobreBackground>

                <SobreConteudo>
                    <SobreImage>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public" alt="" loading="lazy" />
                    </SobreImage>
                    <SobreTexts>
                        <h1>
                            Conheça a <a href="/sobre">Fast Homes</a>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> <br />

                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br /> <br />

                        culpa qui officia deserunt mollit anim id est laborum. <br /> <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                        <GlobalButton3
                                    text="Conhecer catálogo"
                                    background1="transparent"
                                    background2="transparent"
                                    colorIcon="#000"
                                    colorText="#000"
                                    border1="#000"
                                    border2="#000"
                            />
                    </SobreTexts>
                </SobreConteudo>
            </SobreContainer>
        </>
    )
}

export default Sobre;