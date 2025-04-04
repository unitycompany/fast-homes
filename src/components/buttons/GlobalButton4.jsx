import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";

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

        & > svg {
            transform: rotate(135deg);
            font-size: 14px;
        }
    }

    &:hover > div:nth-child(1){
        border-radius: 50px 0 0 50px;
        padding-right: 0px;
    }

    & > div:nth-child(1){
        height: 50px;
        padding: 10px 30px;
        border-radius: 100px;
        background-color: ${({ background1 }) => background1 || '#ffffff' };
        color: ${({ colorText }) => colorText || '#000000' };
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
        position: relative;
        left: -4px;
        transition: all .4s ease;

        & > svg {
            transition: all .4s ease;
            fill: ${({ colorIcon }) => colorIcon || '#000000' };
        }
    }
`;

const GlobalButton4 = ({ text, background1, background2, colorIcon, colorText, to }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (!to) return;

        console.log("🔵 [Botão clicado] - Destino:", to);

        if (to.includes("#")) {
            const [path, hash] = to.split("#");

            if (location.pathname === path) {
                console.log("✅ [Já está na página correta]");

                const element = document.getElementById(hash);
                if (element) {
                    console.log("🎯 [Elemento encontrado] - Rolando...");
                    element.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.log("⚠️ [Elemento não encontrado] - Tentando novamente ao carregar");
                    setTimeout(() => {
                        const retryElement = document.getElementById(hash);
                        if (retryElement) {
                            console.log("🔄 [Elemento carregado] - Rolando...");
                            retryElement.scrollIntoView({ behavior: "smooth" });
                        }
                    }, 500);
                }
            } else {
                console.log("🔀 [Redirecionando para]", path);
                navigate(path, { state: { scrollTo: hash } });
            }
        } else {
            console.log("➡️ [Navegando para]", to);
            navigate(to);
        }
    };

    useEffect(() => {
        if (location.state?.scrollTo) {
            console.log("📌 [Página carregada com estado scrollTo]:", location.state.scrollTo);
            
            setTimeout(() => {
                const element = document.getElementById(location.state.scrollTo);
                if (element) {
                    console.log("🎯 [Rolando para #form]...");
                    element.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.log("⚠️ [Elemento #form não carregado ainda]");
                }
            }, 300);
        }
    }, [location]);

    return (
        <Button 
            background1={background1} 
            background2={background2} 
            colorIcon={colorIcon} 
            colorText={colorText} 
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

export default GlobalButton4;
