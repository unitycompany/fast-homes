import React from "react";
import styled from "styled-components";
import CardTrajetoria from "../../components/cards/CardTrajetoria";
import GlobalButton3 from "../../components/buttons/GlobalButton3";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 90px;
    padding: 5% 5%;
    max-width: 1280px;
    position: relative;
    width: 100%;
    height: auto;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden!important;

    @media (max-width: 768px){
        gap: 50px;
        padding: 5%;
    }
    
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0%;
        z-index: -1;
        transform: scale(1.4) translateX(0px);
        opacity: 0.02;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5747517e-c1c9-4ad6-3cbe-0dcb2e775e00/public');
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
    }
`

const Top = styled.div`
    border: 1px solid red;
    display: contents;
    text-align: center;

    & h1 {
        font-size: 38px;
        line-height: 100%;
        font-family: var(--font--montserrat);
        width: 50%;
        font-weight: 300;

        @media (max-width: 768px){
            width: 100%;
            font-size: 28px;
        }

        & b {
            font-weight: 500;
            color: transparent;
            background: linear-gradient(90deg, #576628, #B05216, #603813, #1d1b1d);
            -webkit-background-clip: text;
        }
    }

    & p {
        width: 60%;
        line-height: 100%;
        font-size: 16px;
        margin-top: -70px;

        @media (max-width: 768px){
            width: 95%;
            margin-top: -30px;
        }
    }
`

const Cards = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        flex-direction: column;
    }

    &::before{
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        background-color: #00000050;

        @media (max-width: 768px){
            width: 1px;
            height: 100%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
        }
    }
    
`

const Button = styled.div`

`


const Trajetoria = () => {
    return(
        <>
            
            <Content>
                <Top>
                    <h1>Como será sua <b>trajetória para ter sua casa?</b></h1>
                    <p>
                    O processo irá depender de vários fatores, porém abaixo é apenas uma forma de você enxergar como será a parte do processo
                    </p>
                </Top>

                <Cards>
                    <CardTrajetoria 
                        color="#576628"
                        numero="1"
                        assunto="Conversa"
                        descricao="Descrição sobre como irá funcionar a etapa, bem objetivo e claro, sem muita enrolação"
                    />

                    <CardTrajetoria 
                        color="#B05216"
                        numero="2"
                        assunto="Pagamento"
                        descricao="Descrição sobre como irá funcionar a etapa, bem objetivo e claro, sem muita enrolação"
                    />

                    <CardTrajetoria 
                        color="#603813"
                        numero="3"
                        assunto="Entrega"
                        descricao="Descrição sobre como irá funcionar a etapa, bem objetivo e claro, sem muita enrolação"
                    />

                    <CardTrajetoria 
                        color="#1d1b1d"
                        numero="4"
                        assunto="Feedback"
                        descricao="Descrição sobre como irá funcionar a etapa, bem objetivo e claro, sem muita enrolação"
                    />
                </Cards>
                <Button>
                    <GlobalButton3
                            text="Falar com um consultor"
                            background1="transparent"
                            background2="transparent"
                            colorIcon="#000"
                            colorText="#000"
                            border1="#000"
                            border2="#000"
                            to="/catalogo-de-casas"
                    />
                </Button>
                
            </Content>
        </>
    )
}

export default Trajetoria;