import React from "react";
import styled, { keyframes } from "styled-components";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Card = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 300px;
    height: auto;
    padding: 32px;
    overflow: hidden;
    border-radius: 10px;
    transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
    border: 1px solid #00000010;
    background-color: var(--color--black);
    color: #fff;
    
    @media (max-width: 768px){
        height: auto;
        padding: 20px 56px;
    }

    & h1{
        color: #fff;
    }
    
    & p{
        color: #fff;
    }

    & span {
        color: #fff;
    }

    & button{
        color: #fff;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-height: 270px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    color: #e8e8e8;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);

    & h1 {
        font-size: 24px;
        font-weight: 600;
        color: #fff;
    }

    & span {
        font-size: 40px;
        font-weight: 500;
        border-radius: 50px;
        color: #fff;
        font-family: var(--font--aboreto);
        margin-bottom: -20px;
    }

    & p {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 110%;
    }

    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 12px;
        transition: all .1250s ease-in-out;
        position: relative;
        border-radius: 10px;
        cursor: pointer;
        color: #fff;

        &::before{
            content: '';
            width: 0;
            height: 110%;
            position: absolute;
            top: -5%;
            left: -5%;
            background-color: #fff;
            border-radius: 10px;
            transition: all .2s ease-in-out;
            z-index: -1;
        }

        &:hover {
            color: #000;
        }

        &:hover::before {
            width: 110%;
            font-weight: 400;
        }

        & svg {
            transition: all .1250s ease-in-out;
        }

        &:hover svg {
            transform: rotate(45deg);
        }
    }
`

const CardTrajetoria = ({ assunto, descricao, color, animateDelay, numero }) => {
    const navigate = useNavigate();

    return(
        <>
            <Card data-aos="fade-right" data-aos-delay={animateDelay}>
                <Content color={color}>
                    <span>{numero}</span>   
                    <h1>{assunto}</h1>
                    <p>{descricao}</p>
                    <a href="#form">
                        Conversar com um consultor <MdArrowOutward />
                    </a>
                </Content>
            </Card>
        </>
    )
}

export default CardTrajetoria;