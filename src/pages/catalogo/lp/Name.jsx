import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalButton2 from "../../../components/buttons/GlobalButton2";
import GlobalButton3 from "../../../components/buttons/GlobalButton3";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalButton4 from "../../../components/buttons/GlobalButton4";

const Header = styled.div`
    position: fixed!important;
    max-width: 1280px;
    top: 0!important;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5% 5%;
    transition: transform 0.5s ease-in-out, scale 0.5s ease-in-out;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 5% 5%;
        gap: 20px;
        height: 250px;
        top: 100%!important;
        left: 50%;
        transform: translateY(-100%) translateX(-50%);
        bottom: 0!important;

        ${({ isHidden }) => isHidden && `
            transform: translateY(-100%) translateX(-50%) scale(0);
        `}
    }

    &::before{
        content: '';
        position: absolute;
        width: 100vw;
        height: 100%;
        background: #ffffff15;
        backdrop-filter: blur(2px);
        top: 0!important;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;

        @media (max-width: 768px){
            bottom: 0!important;
            background: #ffffff80;
            backdrop-filter: blur(2px);
        }
    }
`;

const HeaderBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const HeaderTexts = styled.div`
    text-align: right;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #000;

    @media (max-width: 768px){
        align-items: center;
        text-align: center;
    }

    & h1 {
        font-size: 28px;
        font-weight: 600;
        font-family: var(--font--aboreto);
        line-height: 100%;
    }

    & p {
        font-size: 14px;
        font-weight: 400;
        width: 80%;
        line-height: 100%;
    }
`;

const Name = ({ nomeDaCasa, descricaoDaCasa }) => {
    const [isHidden, setIsHidden] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    let timeoutRef = null;

    useEffect(() => {
        const handleScroll = () => {
            setIsHidden(true);
            clearTimeout(timeoutRef);
            timeoutRef = setTimeout(() => setIsHidden(false), 500);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
            clearTimeout(timeoutRef);
        };
    }, []);

    const handleConsultorClick = () => {
        console.log("🔵 Botão de Consultor clicado!");
        console.log("📍 URL atual:", location.pathname);

        const formElement = document.getElementById("form");

        if (location.pathname.includes("/catalogo-de-casas")) {
            console.log("✅ Já está na página correta!");

            if (formElement) {
                console.log("🎯 Elemento `#form` encontrado, rolando...");
                formElement.scrollIntoView({ behavior: "smooth" });
            } else {
                console.log("⚠️ Elemento `#form` não encontrado na página!");
            }
        } else {
            console.log("🔀 Redirecionando para `/catalogo-de-casas`...");
            navigate("/catalogo-de-casas", { state: { scrollTo: "form" } });
        }
    };

    useEffect(() => {
        if (location.state?.scrollTo) {
            console.log("📌 Página carregada com estado `scrollTo`:", location.state.scrollTo);
            
            setTimeout(() => {
                const element = document.getElementById(location.state.scrollTo);
                if (element) {
                    console.log("🎯 ROLANDO para `#form`...");
                    element.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.log("⚠️ Elemento `#form` ainda não foi carregado!");
                }
            }, 300);
        }
    }, [location]);

    return (
        <Header isHidden={isHidden}>
            <HeaderBtns data-aos="fade-up" data-aos-delay="100"> 
                <GlobalButton4
                    text="Falar com um consultor"
                    background1="#000"
                    background2="#000"
                    colorIcon="#fff"
                    colorText="#fff"
                    to="#form"
                />
                
                <GlobalButton3
                    text="Catálogo"
                    background1="transparent"
                    background2="transparent"
                    colorIcon="#000"
                    colorText="#000"
                    border1="#000"
                    border2="#000"
                    to="/catalogo-de-casas"
                />
            </HeaderBtns>
            
            <HeaderTexts>
                <h1 data-aos="zoom-in" data-aos-delay="100">{nomeDaCasa}</h1>
                <p data-aos="fade-up" data-aos-delay="300">{descricaoDaCasa}</p>
            </HeaderTexts>
        </Header>
    );
};

export default Name;
