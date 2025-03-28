import React from "react";
import styled from "styled-components";
import { BsBrush, BsHouse, BsPen, BsTruckFlatbed } from "react-icons/bs";
import { WiCloudyWindy } from "react-icons/wi";


const icons = {
    house: BsHouse,
    brush: BsBrush,
    pen: BsPen,
    truck: BsTruckFlatbed,
    wind: WiCloudyWindy,
};

const Card = styled.div`
    border-radius: 15px;
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
    box-shadow: 5px 5px 15px #4d561514;
    
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
    }

    & svg {
        width: 40px;
        height: auto;
        fill: #4D5615;
    }

    & p {
        font-size: 18px;
        color: #4D5615;
        line-height: 120%;
    }
`

const CardModular = ({ descricao, icon }) => {
    const Icon = icons[icon];

    return (
        <>
            <Card>
                {Icon && <Icon />}
                <p>{descricao}</p>
            </Card>
        </>
    )
}

export default CardModular;