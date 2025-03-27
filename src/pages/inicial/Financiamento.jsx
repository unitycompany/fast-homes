import React from "react";
import styled from "styled-components";
import GlobalButton3 from "../../components/buttons/GlobalButton3";

const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5% 2.5%;
    position: relative;
    gap: 80px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #000;
    min-height: 100vh;
    z-index: 1;
    overflow: hidden;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 40px;
        padding: 5%;
    }

    &::before{
        content: '';
        width: 60%;
        height: 100%;
        z-index: -1;
        opacity: 0.03;
        position: absolute;
        bottom: -350px;
        right: -200px;
        border-radius: 20px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b948185c-2f95-4390-cab1-767ccce16c00/public');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }


`

const Left = styled.div`
    width: 40%;
    height: 600px;
    border-radius: 20px;
    position: relative;

    @media (max-width: 768px){
        width: 100%;
        height: 400px;
    }

    &::before{
        content: '';
        width: 250px;
        height: 200px;
        border: 3px solid #fff;
        position: absolute;
        top: -20px;
        left: -20px;
        border-radius: 20px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dddba69f-9274-4622-53cc-e397bf590900/public');
        background-position: center;
        background-size: cover;

        @media (max-width: 768px){
            width: 150px;
            height: 100px;
            left: 5px;
            top: 5px;
        }
    }

    &::after{
        content: '';
        width: 150px;
        height: 250px;
        border: 3px solid #fff;
        position: absolute;
        bottom: 30px;
        right: -30px;
        border-radius: 20px;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dddba69f-9274-4622-53cc-e397bf590900/public');
        background-position: center;
        background-size: cover;

        @media (max-width: 768px){
            right: 5px;
            bottom: 5px;
        }
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
`

const Right = styled.div`
    width: 60%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
    }
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;

    & h1 {
        font-size: 32px;
        font-weight: 300;
        line-height: 100%;

        & b {
            font-weight: 500;
            color: transparent;
            background: linear-gradient(90deg, #576628, #B05216, #603813, #1d1b1d);
            -webkit-background-clip: text;
        }
    }

    & p {
        font-size: 16px;
        line-height: 120%;
    }
`

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
`

const Card = styled.div`
    border-left: 3px solid #B05216;
    color: #000;
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;

        & h2 {
            font-size: 18px;
            font-weight: 600;
        }

        & p {
            font-size: 16px;
            font-weight: 400;
            line-height: 120%;
        }

        &:nth-child(1){
            width: 100%;
            height: 100%;

            & svg {
                fill: #fff;
            }
        }
    }
`


const Financiamento = (  ) => {
    return (
        <>
            <Content>
                <Left>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dddba69f-9274-4622-53cc-e397bf590900/public" alt="" loading="lazy" />
                </Left>

                <Right>
                    <Texts>
                        <h1>Sua casa <b>pode ser financiada</b></h1>
                        <p>O processo irá depender de vários fatores, porém abaixo é apenas uma forma de você enxergar como será a parte do processo, O processo irá depender de vários fatores, porém abaixo é apenas uma forma de você enxergar como será a parte do processo </p>
                    </Texts>
                    <Cards>
                        <Card>
                            <div>
                                <h2>Titulo sobre algo</h2>
                                <p>O processo irá depender de vários fatores, porém abaixo é apenas uma forma de você enxergar como será a parte do processo. </p>
                            </div>
                        </Card>

                        <Card>
                            <div>
                                <h2>Titulo sobre algo</h2>
                                <p>O processo irá depender de vários fatores, porém abaixo é apenas uma forma de você enxergar como será a parte do processo. </p>
                            </div>
                        </Card>
                    </Cards>
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
                </Right>
            </Content> 
        </>
    )
}

export default Financiamento;