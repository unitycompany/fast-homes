import React from "react";
import { BsBuildings, BsHouse, BsShop } from "react-icons/bs";
import styled from "styled-components";
import GlobalButton2 from "../../components/buttons/GlobalButton2";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    color: #fff;
    padding: 0% 5%;

    @media (max-width: 768px){
        padding: 2.5% 5%;
    }
`

const Background = styled.div`
    width: 100vw;
    height: 100%;
    background-color: var(--color--brown--very--high);
    position: absolute;
    z-index: -1;
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 5% 0;
    gap: 50px;
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        align-items: center;
        text-align: center;
        gap: 15px;
    }

    & h1 {
        font-size: 32px;
        font-weight: 300;
        line-height: 100%;

        @media (max-width: 768px){
            font-size: 28px;
            line-height: 110%;
        }

        & b {
            font-weight: 500;
        }
    }

    & p {
        font-size: 16px;
        width: 60%;
        line-height: 120%;

        @media (max-width: 768px){
            width: 100%;
        }
    }
`

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 20px;
    }
`

const Card = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
    min-height: 300px;
    color: #000;
    background-color: #fff;
    border-radius: 20px;

    @media (max-width: 768px){
        min-height: 250px;
    }

    & svg {
        font-size: 40px;
    } 

    & h1 {
        font-size: 25px;
        font-weight: 500;
        color: transparent;
        background: linear-gradient(90deg, #576628, #B05216, #603813, #1d1b1d);
        -webkit-background-clip: text;
    }

    & p {
        font-size: 16px;
        width: 80%;
        line-height: 120%;
    }
`

const Solucoes = () => {
    return (
        <>
            <Content>
                <Background></Background>
                <Conteudo>
                    <Top>
                        <h1>Soluções feitas <b>para você!</b></h1>
                        <p>Seja qual for sua necessidade, com a House Box, você terá mais do que uma casa: terá um espaço que se adapta ao seu sonho</p>
                    </Top>
                    <Cards>
                        <Card>
                            <BsHouse />
                            <h1>Moradia</h1>
                            <p>Realize o sonho da casa própria com menos complicações.</p>
                        </Card>
                        <Card>
                            <BsShop />
                            <h1>Locação</h1>
                            <p>Realize o sonho da casa própria com menos complicações.</p>
                        </Card>
                        <Card>
                        <BsBuildings />
                            <h1>Empresas</h1>
                            <p>Realize o sonho da casa própria com menos complicações.</p>
                        </Card>
                    </Cards>
                    <GlobalButton2
                            text="Falar com um consultor"
                            background1="#fff"
                            background2="#fff"
                            colorIcon="#000"
                            colorText="#000"
                            to="/#form"
                    />
                </Conteudo>
            </Content>
        </>
    )
}

export default Solucoes;