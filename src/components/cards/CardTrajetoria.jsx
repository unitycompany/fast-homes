import React from "react";
import styled from "styled-components";
import { MdArrowOutward } from "react-icons/md";

const Card = styled.div`
    border: 1px solid #00000050;
    width: 25%;
    min-height: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    justify-content: flex-end;
    gap: 15px;
    position: relative;
    border-radius: 20px;
    background-color: #fff;
    transition: all .1250s ease-in-out;

    @media (max-width: 768px){
        width: 100%;
        min-height: 270px;
    }

    &:hover {
        border-color: ${({color}) => color ? `${color}` : "#000" };
        transform: translateY(-5px);

        @media (max-width: 768px){
            transform: translateY(0);
        }
    }
`

const Top = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px 40px;
    border-radius: 20px 0 40px 0;
    background-color: ${({color}) => color ? `${color}` : "#000" };

    & span {
        font-size: 40px;
        font-family: var(--font--aboreto);
        color: #fff;
    }
`

const Content = styled.div`
    display: contents;

    & h1 {
        font-size: 24px;
        font-weight: 600;
        color: ${({color}) => color ? `${color}` : "#000" };
    }

    & p {
        font-size: 16px;
        font-weight: 400;
        line-height: 110%;
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 12px;
        transition: all .1250s ease-in-out;

        & svg {
            transition: all .1250s ease-in-out;
        }

        &:hover {
            color: ${({color}) => color ? `${color}` : "#000" };
        }

        &:hover svg {
            transform: rotate(45deg);
        }
    }
`

const CardTrajetoria = ({ numero, assunto, descricao, color, animateDelay }) => {
    return(
        <>
            <Card data-aos="fade-right" data-aos-delay={animateDelay}>
                <Top color={color}>
                    <span>{numero}</span>
                </Top>
                <Content color={color}>
                    <h1>{assunto}</h1>
                    <p>{descricao}</p>
                    <button>
                        Falar com um consultor <MdArrowOutward />
                    </button>
                </Content>
            </Card>
        </>
    )
}

export default CardTrajetoria;