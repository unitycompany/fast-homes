import React from "react";
import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsDropletHalf } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";

import { WiCloudyWindy } from "react-icons/wi";


const icons = {
    house: FaShippingFast,
    brush: AiOutlineAntDesign,
    pen: BsDropletHalf,
    truck: FaArrowTrendUp,
};

const Card = styled.div`
    border-radius: 20px;
    padding: 30px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    position: relative;
    overflow: hidden;
    border: 1px dashed rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        padding: 20px;
        border: 1px dashed rgba(0, 0, 0, 0.1);
    }
/*     
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 45%;
        transform: scale(1.8);
        opacity: 0.05;
        top: 0;
        z-index: -1;
        position: absolute;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5747517e-c1c9-4ad6-3cbe-0dcb2e775e00/public');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    } */

    & h1 {
        font-size: 20px;
        font-weight: 600;
        color: #1d1d1d;
        line-height: 110%;
        font-family: var(--font--aboreto);

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }  

    & svg {
        width: 50px;
        height: auto;
        fill: #fff;
        padding: 10px;
        background-color: var(--color--green--low);
        border-radius: 50%;
        border: 1px solid var(--color--green--high);

        @media (max-width: 768px){
            width: 35px!important;
            height: 35px!important;
            padding: 5px;
        }
    }

    & p {
        font-size: 16px;
        color: #000000;
        line-height: 120%;

        @media (max-width: 768px){
            font-size: 15px;
        }
    }
`

const CardModular = ({ descricao, icon, titulo }) => {
    const Icon = icons[icon];

    return (
        <>
            <Card>
                {Icon && <Icon />}
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </Card>
        </>
    )
}

export default CardModular;