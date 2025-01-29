import React, { useState } from "react";
import styled from "styled-components";

import GlobalButton from "../components/buttons/GlobalButton";
import HeaderSelect from "./HeaderSelect";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: var(--color--black);
    width: 100%;
    height: 8vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        height: 10vh;
    }
`;

const HeaderImage = styled.div`
    width: 200px;

    @media (max-width: 768px){
        width: 200px;
    }

    & > button {
        cursor: pointer;
    }
`;

const HeaderLinks = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

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
        display: flex;
        gap: 20px;  

        & > li {
            font-weight: 300;
            font-size: 14px;
            cursor: pointer;
            padding: 10px;
            background: transparent;
            border: none;
            position: relative;
            transition: 0.5s ease;
            z-index: 2;

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
    width: 250px;
    position: fixed;
    top: 10vh;
    left: 0;
    height: 90vh;
    background-color: var(--color--black);
    border-top: 2px solid #fff;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    z-index: 1000;
`;

const HeaderButton = styled.div`
    @media (max-width: 768px){
        display: none;
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <> 
            <HeaderContainer>
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
                        <li>Monte sua casa</li>
                        <li>Sobre nós</li>
                        <li>Parcerias</li>
                    </ul>
                </HeaderLinks>
                <HeaderButton>
                    <GlobalButton 
                        text="Solicitar orçamento"
                        background1="#ffffff"
                        background2="#ffffff"
                        colorIcon="#000000"
                        colorText="#000000"
                    />
                </HeaderButton>
                <HeaderMenu onClick={toggleSidebar} isOpen={isSidebarOpen}>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </HeaderMenu>
            </HeaderContainer>

            <HeaderSidebar isOpen={isSidebarOpen}>
                {/* Conteúdo da sidebar pode ser adicionado aqui */}
            </HeaderSidebar>
        </>
    );
};

export default Header;
