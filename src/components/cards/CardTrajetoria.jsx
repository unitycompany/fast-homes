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
    width: 25%;
    height: 300px;
    padding: 32px;
    overflow: hidden;
    border-radius: 10px;
    transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    
    @media (max-width: 768px){
        height: auto;
        padding: 20px 26px;
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(-45deg, #3d3d3d 0%, var(--color--black) 100% );
        z-index: -1;
        transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
    }

    &:hover::before {
        height: 100%;
    }

    &:hover h1{
        color: #fff;
    }
    
    &:hover p{
        color: #fff;
    }

    &:hover button{
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
        color: #000;
    }

    & p {
        color: #000;
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
        position: relative;
        border-radius: 10px;
        cursor: pointer;
        color: #000;

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

const CardTrajetoria = ({ assunto, descricao, color, animateDelay }) => {
    const navigate = useNavigate();

    return(
        <>
            <Card data-aos="fade-right" data-aos-delay={animateDelay}>
                <Content color={color}>
                    <h1>{assunto}</h1>
                    <p>{descricao}</p>
                    <button onClick={() => navigate('/#form')}>
                        Falar com um consultor <MdArrowOutward />
                    </button>
                </Content>
            </Card>
        </>
    )
}

export default CardTrajetoria;