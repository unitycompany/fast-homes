import React from "react";
import styled from "styled-components";
import GlobalButton3 from "../../components/buttons/GlobalButton3";

const SobreContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
    gap: 100px;
    padding: 10% 0;
    height: auto;
    background-color: var(--color--white);
`

const SobreImage = styled.div`
    width: 45%;
    height: 650px;
    position: relative;

    &::before{
        content: '';
        top: -20px;
        left: -20px;
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid var(--color--green--very--high);
        z-index: -1;
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

    & > h1 {
        font-family: var(--font--aboreto);
        font-size: 35px;
        color: var(--color--green--very--high) ;
        font-weight: 400;
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
                <SobreImage>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public" alt="" loading="lazy" />
                </SobreImage>
                <SobreTexts>
                    <h1>
                        Conheça a Fast Homes
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
            </SobreContainer>
        </>
    )
}

export default Sobre;