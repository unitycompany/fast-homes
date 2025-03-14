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
    
    &::before{
        content: '';
        width: 70%;
        height: 100%;
        top: 0;
        ${({ position }) => (position === "left" ? "left: 0;" : "right: 0;")}
        position: absolute;
        border-image: fill 0 ${({ direction }) => (direction ? "linear-gradient(90deg, #000, #0000)" : "linear-gradient(-90deg, #000, #0000)")};
    }
`

const Texts = styled.div`
    display: flex;
    width: 50%;
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

    & h1 {
        font-size: 36px;
        font-family: var(--font--aboreto);
        line-height: 110%;
        text-align: ${({ text }) => (text ? "left" : "right")};
    }

    & p {
        font-size: 16px;
        font-weight: 400;
        line-height: 120%;
        text-align: ${({ text }) => (text ? "left" : "right")};
    }
`

const CardProjeto = ({ title, description, direction, position, text, image, itemDirection }) => {
    return (
        <>
            <Content direction={direction} position={position} image={image}>
                <Texts direction={direction} text={text} position={position} itemDirection={itemDirection}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <GlobalButton3
                        text="Enviar meu projeto para o meu consultor"
                        background1="transparent"
                        background2="transparent"
                        colorIcon="#fff"
                        colorText="#fff"
                        border1="#fff"
                        border2="#fff"
                        to="/catalogo-de-casas"
                    />
                </Texts>
            </Content>
        </>
    )
}

export default CardProjeto;