import React from "react";
import styled from "styled-components";

import { BsArrowRightShort } from "react-icons/bs";

const CardContainer = styled.div`
    width: 550px;
    height: 350px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.02);
    }

`

const CardImage = styled.div`
    width: 45%;
    height: 100%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const CardText = styled.div`
    width: 55%;
    height: 60%;
    background-color: #F6F0E8;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 10px;
    font-family: var(--font--montserrat);
    transition: all .3s ease;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

    & > h2 {
        font-size: 26px;
        font-weight: 600;
        color: var(--color--green--very--low);
    }

    & > p {
        font-size: 16px;
        line-height: 120%;
        color: var(--color--black);
        color: var(--color--green--very--low);
    }

    & > button {
        color: var(--color--green--very--low);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        transition: all .3s ease;

        &:hover {
            color: var(--color--green--very--high);
        }

        &:hover > svg {
            fill: var(--color--green--very--high);
            transform: rotate(0);
        }

        & > svg {
            font-size: 22px;
            transform: rotate(-45deg);
            fill: var(--color--green--very--low);
            transition: all .3s ease;
        }
    }
`

const CardCatalogo = ({ titulo, description }) => {
    return (
        <>

            <CardContainer>
                <CardImage>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public" alt="" loading="lazy" />
                </CardImage>
                <CardText className="CardText">
                    <h2>
                        {titulo}
                        Casa Taltaltal
                    </h2>
                    <p>
                        {description}
                        A casa tattal é grande e bonita. tem um belo quintal com uma grande pscina.
                    </p>
                    <button>
                        Conhecer mais
                        <BsArrowRightShort />
                    </button>
                </CardText>
            </CardContainer>

        </>
    )
}

export default CardCatalogo;