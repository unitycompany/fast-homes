import React, { useState } from "react";
import styled from "styled-components";

import GlobalButton from "../components/buttons/GlobalButton";
import HeaderSelect from "./HeaderSelect";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: #000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 5px;
    z-index: 9999;
    border-bottom: 1px solid #ffffff50;
    border-top: 1px solid #ffffff50;

    @media (max-width: 768px){
        top: 0;
        border: none;
    }

    /* &::before{
        content: '';
        width: 100%;
        height: 110%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: #000;
        opacity: 0.5;
        clip-path: polygon(100% 0, 100% 100%, 60% 90%, 0 100%, 0 0);
    }

    &::after{
        content: '';
        width: 100%;
        height: 120%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: #000;
        opacity: 0.3;
        clip-path: polygon(100% 0, 100% 100%, 40% 80%, 0 100%, 0 0);
    } */

    @media (max-width: 768px){
        height: 10vh;
    }
`;

const HeaderAll = styled.div`
    background-color: #00000080;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    width: 100%;
    height: 7.5vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderImage = styled.div`
    width: 200px;

    @media (max-width: 768px){
        width: 200px;
    }

    & > button {
        cursor: pointer;

        & > img {
            transition: all .2s ease;
            
            &:hover {
                filter: invert(20%);
                transform: scale(1.05);
            }
        }
    }
`;

const HeaderLinks = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;

    @media (max-width: 768px){
        display: none;
    }

    & > ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 10px;  

        & > li {
            font-weight: 500;
            font-size: 12px;
            cursor: pointer;
            padding: 10px 8px;
            background: transparent;
            border: none;
            text-transform: uppercase;
            position: relative;
            transition: 0.5s ease;
            z-index: 2;
            font-family: var(--font--montserrat);

            &:nth-child(6){
                border: 1px solid #fff;
                padding: 10px 15px;
            }

            &::before, &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #fff;
                transition: 0.7s ease;
                z-index: -1;
            }

            &::before {
                height: 2px;
                width: 0;
            }

            &:hover::before, &.active::before {
                width: 100%;
            }

            &::after {
                height: 0;
            }

            &:hover::after, &.active::after {
                height: 100%;
                transition-delay: 0.4s;
            }

            &:hover, &.active {
                color: var(--color--black);
            }
        }
    }
`;

const HeaderSidebarLinks = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    & > ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        list-style: none;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 10px;  

        & > li {
            font-weight: 400;
            font-size: 12px;
            cursor: pointer;
            padding: 10px 8px;
            background: transparent;
            border: none;
            text-transform: uppercase;
            position: relative;
            transition: 0.5s ease;
            z-index: 2;
            font-family: var(--font--montserrat);

            &::before{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                height: 2px;
                width: 0px;
                background-color: #fff;
                transition: 0.5s ease;
            }

            &:hover{
                color: var(--color--black);
                transition-delay: 0.5s;
            }

            &:hover::before{
                width: 100%;
            }

            &::after{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                height: 0;
                width: 100%;
                background-color: #fff;
                transition: .4s ease;
                z-index: -1;
            }

            &:hover::after{
                height: 100%;
                transition-delay: .4s;
                color: var(--color--black);
            }
        }
    }
`

const HeaderSidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10% 5% 5% 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const HeaderSidebarButton = styled.div`
`

const HeaderMenu = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 10;

    @media (max-width: 768px){
        display: block;
    }

    .hamburger {
        width: 30px;
        height: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }

    .bar {
        width: 30px;
        height: 2px;
        border-radius: 40px;
        background-color: #fff;
        transition: 0.3s ease-in-out;
    }

    ${({ isOpen }) => isOpen && `
        .bar:nth-child(1) {
            transform: translateY(12px) rotate(45deg);
        }
        .bar:nth-child(2) {
            opacity: 0;
        }
        .bar:nth-child(3) {
            transform: translateY(-10px) rotate(-45deg);
        }
    `}
`;

const HeaderSidebar = styled.div`
    display: none;

    @media (max-width: 768px) {
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: fixed;
        top: 10vh;
        left: 0;
        height: 90dvh;
        background: #000;
        border-top: 2px solid #fff;
        transition: transform 0.3s ease-in-out;
        transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
        z-index: 1000;

        &::before {
            content: '';
            width: 100vw;
            height: 100%;
            top: -2px;
            left: 250px;
            position: absolute;
            z-index: -5;
            background: #000;
            opacity: ${({ isOpen }) => (isOpen ? "0.7" : "0")};
            visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
            transition: opacity 0.3s ease-in-out, visibility 0s linear ${({ isOpen }) => (isOpen ? "0.1s" : "0s")};
        }
    }
`;

const HeaderButton = styled.div`
    @media (max-width: 768px){
        display: none;
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <> 
            <HeaderContainer>
                <HeaderAll>
                    <HeaderImage>
                        <button onClick={() => navigate('/')}> 
                            <img 
                                src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3d1440c5-f0d7-41e3-953e-64662df60e00/public" 
                                alt="logo-fast-homes" 
                            />
                        </button>
                    </HeaderImage>
                    <HeaderLinks>
                        <ul>
                            <div>
                                <HeaderSelect />
                            </div>
                            {/* <li onClick={() => navigate=("/monte-sua-casa")}>Monte sua casa</li> */}
                            
                            <li 
                                onClick={() => navigate("/projetos-personalizados")} 
                                className={location.pathname === "/projetos-personalizados" ? "active" : ""}
                            >
                                Seu projeto
                            </li>
                            <li 
                                onClick={() => navigate("/financiamento")} 
                                className={location.pathname === "/financiamento" ? "active" : ""}
                            >
                                Financiamento
                            </li>
                            <li 
                                onClick={() => navigate("/modular")} 
                                className={location.pathname === "/modular" ? "active" : ""}
                            >
                                Modular
                            </li>
                            <li 
                                onClick={() => navigate("/sobre-nos")} 
                                className={location.pathname === "/sobre-nos" ? "active" : ""}
                            >
                                Sobre nós
                            </li>
                            <li 
                                onClick={() => navigate("/catalogo-de-casas")} 
                                className={location.pathname === "/catalogo-de-casas" ? "active" : ""}
                            >
                                Catálogo
                            </li>
                        </ul>
                    </HeaderLinks>
                    {/* <HeaderButton>
                        <GlobalButton 
                            text="Conhecer catálogo"
                            background1="#ffffff"
                            background2="#ffffff"
                            colorIcon="#000000"
                            colorText="#000000"
                            to="/catalogo-de-casas"
                        />
                    </HeaderButton> */}
                    <HeaderMenu onClick={toggleSidebar} isOpen={isSidebarOpen}>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </HeaderMenu>
                </HeaderAll>
            </HeaderContainer>

            <HeaderSidebar isOpen={isSidebarOpen}>
                <HeaderSidebarContainer>
                    <HeaderSidebarLinks>
                        <ul>
                            <div>
                                <HeaderSelect />
                            </div>
                            <li onClick={() => navigate("/projetos-personalizados")}>Seu projeto</li>
                            <li onClick={() => navigate("/financiamento")}>Financiamento</li>
                            <li onClick={() => navigate("/modular")}>Modular</li>
                            <li onClick={() => navigate("/sobre-nos")}>Sobre nós</li>
                            <li onClick={() => navigate("/catalogo-de-casas")}>Catálogo</li>
                        </ul>
                    </HeaderSidebarLinks>
                    <HeaderSidebarButton>
                        <GlobalButton 
                            text="Conhecer catálogo"
                            background1="#ffffff"
                            background2="#ffffff"
                            colorIcon="#000000"
                            colorText="#000000"
                            to="/catalogo-de-casas"
                        />
                    </HeaderSidebarButton>
                </HeaderSidebarContainer>
            </HeaderSidebar>
        </>
    );
};

export default Header;
