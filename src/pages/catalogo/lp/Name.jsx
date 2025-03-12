import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../../../components/buttons/GlobalButton2";
import GlobalButton3 from "../../../components/buttons/GlobalButton3";

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
    padding: 1% 5%;

    &::before{
        content: '';
        position: absolute;
        width: 100vw;
        height: 100%;
        background: #000000;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(2px);
        top: 0!important;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }
`

const HeaderBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`

const HeaderTexts = styled.div`
    text-align: right;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #fff;

    & h1 {
        font-size: 30px;
        font-weight: 400;
        font-family: var(--font--aboreto);
        line-height: 100%;
    }

    & p {
        font-size: 14px;
        font-weight: 400;
        width: 80%;
        line-height: 100%;
    }
`

const Name = ({ nomeDaCasa, descricaoDaCasa }) => {
    return (
        <>
            <Header>
                <HeaderBtns>
                    <GlobalButton2
                        text="Solicitar meu orçamento"
                        background1="#fff"
                        background2="#fff"
                        colorIcon="#000"
                        colorText="#000"
                        to="#Form"
                    />
                    
                    <GlobalButton3
                        text="Catálogo"
                        background1="transparent"
                        background2="transparent"
                        colorIcon="#fff"
                        colorText="#fff"
                        border1="#fff"
                        border2="#fff"
                        to="/catalogo-de-casas"
                    />
                </HeaderBtns>
                
                <HeaderTexts>
                    <h1>{nomeDaCasa}</h1>
                    <p>{descricaoDaCasa}</p>
                </HeaderTexts>
            </Header>
        </>
    )
}

export default Name;