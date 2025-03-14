import React from "react";
import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: ${({ height }) => (height ? `${height}%` : "auto")};
    border-radius: 20px;
    display: flex;
    align-items: flex-start!important;
    justify-content: flex-end!important;
    flex-direction: column;
    position: relative;
    background-image: ${({ image }) => (image ? `url(${image})` : "none")};
    background-position: center;
    background-size: cover;
    overflow: hidden;

    &::before{
        content: '';
        width: 100%;
        height: 70%;
        bottom: 0;
        left: 0;
        position: absolute;
        border-image: fill 0 linear-gradient(0deg, #000, #0000);
    }
`

const Text = styled.div`
    padding: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end!important;
    flex-direction: column;
    text-align: left!important;
    align-items: flex-start!important;
    gap: 5px;
    color: #fff;
    position: relative;
    z-index: 2;

    & h1 {
        font-size: 50px;
        line-height: 100%;
        font-family: var(--font--aboreto);
    }

    & p {
        font-size: 14px;
        line-height: 120%;
        font-weight: 400;
    }
`

const CardMiniProjetos = ({ number, description, width, height, image }) => {
    return (
        <>
            <Content width={width} height={height} image={image}>
                <Text>
                    <h1>{number}</h1>
                    <p>{description}</p>
                </Text>
            </Content>
        </>
    )
}

export default CardMiniProjetos;
