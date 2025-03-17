import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";

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
        padding: 5% 2.5%;
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

const options = {
    "N° de pavimentos": ["1 pavimento", "2 pavimentos", "3 pavimentos", "4 pavimentos"],
    "Área construída": ["0-50", "51-100", "101-200", "201-400"],
    "N° de quartos": ["1", "2", "3", "4"],
    "N° de banheiros": ["1", "2", "3", "4"]
};


const Filtro = ({ onSearch }) => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [openSelect, setOpenSelect] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = (category, value) => {
        setSelectedOptions((prev) => ({ ...prev, [category]: value }));
        setOpenSelect(null);
    };

    const handleSearch = () => {
        if (!location.pathname.includes("/catalogo-de-casas")) {
            navigate("/catalogo-de-casas", { state: { selectedOptions } });
        } else {
            onSearch(selectedOptions);
            setHasSearched(true);
        }
    };
  
    const handleClear = () => {
        setSelectedOptions({});
        onSearch(null);
        setHasSearched(false);
    };
  
    useEffect(() => {
        if (location.state?.selectedOptions) {
            setSelectedOptions(location.state.selectedOptions);
            onSearch(location.state.selectedOptions);
            setHasSearched(true);
        }
    }, [location.state]);

    return (
        <FiltroContainer>
            <FiltroLeft data-aos="zoom-in" data-aos-delay="100">
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
            <FiltroRight data-aos="zoom-in" data-aos-delay="300">
                {!hasSearched ? (
                    <button onClick={handleSearch}>Buscar</button>
                ) : (
                    <button onClick={handleClear}>Limpar</button>
                )}
            </FiltroRight>
        </FiltroContainer>
    );
};

export default Filtro;
