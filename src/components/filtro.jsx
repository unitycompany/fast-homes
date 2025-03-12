import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";

const FiltroContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 2% 5% 2% 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #00000010;
    border-left: 0;
    border-right: 0;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 20px;
        padding: 5%;
    }
`;

const FiltroLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    @media (max-width: 768px){
        width: 100%;
        flex-direction: column;
        gap: 10px;
    }
`;

const FiltroSelect = styled.div`
    width: 22.5%;
    position: relative;

    @media (max-width: 768px){
        width: 100%;
    }

    & span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 15px;
        cursor: pointer;
        background-color: #F0F0F0;
        border-radius: 5px;
        user-select: none;
        font-size: 14px;

        @media (max-width: 768px){
            font-size: 12px;
        }

        & svg {
            font-size: 14px;

            @media (max-width: 768px){
                font-size: 12px;
            }
        }
    }
`;

const FiltroOption = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 10px;
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    background: white;
    z-index: 10;
    font-size: 14px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    & div {
        padding: 10px;
        cursor: pointer;
        border-bottom: 1px solid #F0F0F0;

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            background-color: #f9f9f9;
        }
    }
`;

const FiltroRight = styled.div`

    @media (max-width: 768px){
        width: 100%;
    }

    & button {
        padding: 10px 60px;
        font-size: 14px;
        font-weight: 600;
        background: linear-gradient(145deg, #000, #353535);
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        transition: all .2s ease-out;
        position: relative;
        text-transform: uppercase;

        @media (max-width: 768px){
            width: 100%;
        }

        &:hover {
            transform: scale(0.98);
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        }
    }
`;

const Filtro = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [openSelect, setOpenSelect] = useState(null);

    const options = {
        "N° de pavimentos": ["1 pavimento", "2 pavimentos", "3 pavimentos", "4 pavimentos"],
        "Área construída": ["0 a 50m²", "50m² a 100m²", "100m² a 200m²", "200m² a 400m²"],
        "N° de quartos": ["1 quarto", "2 quartos", "3 quartos", "4 quartos"],
        "N° de banheiros": ["1 banheiro", "2 banheiros", "3 banheiros", "4 banheiros"]
    };

    const handleSelect = (category, value) => {
        setSelectedOptions((prev) => ({ ...prev, [category]: value }));
        setOpenSelect(null);
    };

    return (
        <FiltroContainer>
            <FiltroLeft>
                {Object.keys(options).map((category) => (
                    <FiltroSelect key={category}>
                        <span onClick={() => setOpenSelect(openSelect === category ? null : category)}>
                            {selectedOptions[category] || category}
                            <BsChevronRight />
                        </span>
                        <FiltroOption open={openSelect === category}>
                            {options[category].map((option) => (
                                <div key={option} onClick={() => handleSelect(category, option)}>
                                    {option}
                                </div>
                            ))}
                        </FiltroOption>
                    </FiltroSelect>
                ))}
            </FiltroLeft>

            <FiltroRight>
                <button>Buscar</button>
            </FiltroRight>
        </FiltroContainer>
    );
};

export default Filtro;
