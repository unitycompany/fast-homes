import React from "react";
import styled from "styled-components";
import { MdArrowOutward } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 400px;
    height: auto;
    border-radius: calc(15px + 5px);
    padding: 5px;
    gap: 15px;
    border: 1px solid #00000020;
    position: relative;
    overflow: hidden;
    z-index: 2;

    @media (max-width: 768px){
        max-width: 98%;
        margin-left: 1%;
    }
    
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 45%;
        transform: scale(1.3);
        opacity: 0.03;
        top: 0;
        z-index: -1;
        position: absolute;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5747517e-c1c9-4ad6-3cbe-0dcb2e775e00/public');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    & img {
        width: 100%;
        height: 250px;
        border-radius: 15px;
        object-fit: cover;
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 5px 20px;

        & h2 {
            font-weight: 600;
            font-size: 20px;
            font-family: var(--font--aboreto);
        }

        & span {
            font-weight: 300;
            font-size: 15px;
            font-family: var(--font--aboreto);
        }
    }

    & p {
        width: 90%;
        line-height: 110%;
        font-size: 14px;
        font-weight: 400;
    }

    & button {
        font-size: 14px;
        width: 90%;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        padding: 10px 0;
        cursor: pointer;
    }
`

const CardCasasModular = ({ image, nome, area, descricao }) => {
    const navigate = useNavigate();

    return (
        <>
            <Card>
                <img src={image} alt='foto da casa {nome}' loading="lazy" />
                <div>
                    <h2>{nome}</h2>
                    <span>{area}</span>
                </div>
                <p>{descricao}</p>
                <button onClick={() => navigate('/#form')}>
                    Falar com um consultor <MdArrowOutward />
                </button>
            </Card>
        </>
    )
}

export default CardCasasModular;