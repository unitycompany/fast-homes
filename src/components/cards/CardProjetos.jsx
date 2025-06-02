import React from "react";
import styled from "styled-components";
import GlobalButton3 from "../buttons/GlobalButton3";

const Content = styled.div`
    height: auto;
    min-height: 300px;
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    position: relative;
    overflow: hidden;
    background-image: ${({ image }) => (image ? `url(${image})` : "none")};
    background-position: center;
    background-size: cover;

    @media (max-width: 768px){
        height: 80vh;
        justify-content: flex-end;    
    }
    
    &::before{
        content: '';
        width: 70%;
        height: 100%;
        top: 0;
        ${({ position }) => (position === "left" ? "left: 0;" : "right: 0;")}
        position: absolute;
        border-image: fill 0 ${({ direction }) => (direction ? "linear-gradient(90deg, #000, #0000)" : "linear-gradient(-90deg, #000, #0000)")};

        @media (max-width: 768px){
            width: 100%;
            top: 50%;
            height: 50%;
            border-image: fill 0 ${({ direction }) => (direction ? "linear-gradient(0deg, #000, #0000)" : "linear-gradient(0deg, #000, #0000)")};
        }
    }
`

const Texts = styled.div`
    display: flex;
    width: 70%;
    align-items: ${({ itemDirection }) => (itemDirection ? "flex-start" : "flex-end")};
    justify-content: center;
    flex-direction: column;
    position: absolute;
    padding: 30px 40px;
    top: 50%;
    transform: translateY(-50%);
    gap: 20px;
    ${({ position }) => (position === "left" ? "left: 0;" : "right: 0;")}
    text-align: ${({ text }) => (text ? "left" : "right")};
    color: #fff;

    @media (max-width: 768px){
        width: 100%;
        padding: 20px;
        height: 100%;
        justify-content: flex-end;
    }

    & h1 {
        font-size: 36px;
        font-family: var(--font--aboreto);
        line-height: 110%;
        text-align: ${({ text }) => (text ? "left" : "right")};

        @media (max-width: 768px){
            font-size: 26px;
        }
    }

    & p {
        font-size: 16px;
        font-weight: 400;
        line-height: 120%;
        text-align: ${({ text }) => (text ? "left" : "right")};

        @media (max-width: 768px){
            font-size: 14px;
        }
    }
`

const CardProjeto = ({ title, description, direction, position, text, image, itemDirection, textButton }) => {
    return (
        <>
            <Content direction={direction} position={position} image={image}>
                <Texts direction={direction} text={text} position={position} itemDirection={itemDirection}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <GlobalButton3
                        text={textButton || 'Conversar com um consultor'}
                        background1="transparent"
                        background2="transparent"
                        colorIcon="#fff"
                        colorText="#fff"
                        border1="#fff"
                        border2="#fff"
                        to="/projetos-personalizados#form"
                    />
                </Texts>
            </Content>
        </>
    )
}

export default CardProjeto;