import React from "react";
import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    font-family: var(--font--montserrat);

    &:hover > div:nth-child(2){
        border-radius: 0 50px 50px 0;
        width: 60px;
        border-left: transparent;

        & > svg {
            transform: rotate(135deg);
            font-size: 14px;
        }
    }

    &:hover > div:nth-child(1){
        border-radius: 50px 0 0 50px;
        padding-right: 0px;
        border-right: transparent;
    }

    & > div:nth-child(1){
        height: 50px;
        padding: 10px 30px;
        border-radius: 100px;
        background-color: ${({ background1 }) => background1 || '#ffffff' };
        color: ${({ colorText }) => colorText || '#000000' };
        border: 1px solid ${({ border2 }) => border2 || '#ffffff' };
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        transition: all .4s ease;
        font-weight: 400;
        font-size: 16px;
        z-index: 2;

        @media (max-width: 768px){
            font-size: 14px;
            padding: 8px 20px;
        }
    }

    & > div:nth-child(2){
        height: 50px;
        width: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ background2 }) => background2 || '#ffffff' };
        border: 1px solid ${({ border1 }) => border1 || '#ffffff' };
        position: relative;
        left: 0px;
        transition: all .4s ease;

        & > svg {
            transition: all .4s ease;
            fill: ${({ colorIcon }) => colorIcon || '#000000' };
        }
    }
`;

const GlobalButton3 = ({ text, background1, background2, colorIcon, colorText, border1, border2, to }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (!to) return;

        // Se houver uma âncora no link (exemplo: "/sobre-nos#form")
        if (to.includes("#")) {
            const [path, hash] = to.split("#");

            if (location.pathname === path) {
                // Se já estiver na página correta, rola diretamente para o elemento
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                // Se não estiver na página correta, navega até lá e rola ao carregar
                navigate(path, { state: { scrollTo: hash } });
            }
        } else {
            navigate(to);
        }
    };

    return (
        <Button 
            background1={background1} 
            background2={background2} 
            colorIcon={colorIcon} 
            colorText={colorText} 
            border1={border1} 
            border2={border2} 
            onClick={handleClick}
            id="clickButton"
        >
            <div>
                <span>{text}</span>
            </div>
            <div>
                <BsArrowUpRight />
            </div>
        </Button>
    );
};

export default GlobalButton3;
