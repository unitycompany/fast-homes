import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../../components/buttons/GlobalButton2";
import GlobalButton3 from "../../components/buttons/GlobalButton3";

const Content = styled.section`
    max-width: 1280px;
    width: 100%;
    position: relative;
    padding: 2.5% 0% 2.5% 5%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: row;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 10% 0 0 5%;
    }
`

const Left = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;

    @media (max-width: 768px){
        width: 100%;
        gap: 20px;
        margin-top: -50px;
    }

    & div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        & p {
            font-size: 28px;
            line-height: 100%;
            font-family: var(--font--aboreto);

            @media (max-width: 768px){
                font-size: 22px;
            }
        }

        & h1 {
            font-family: var(--font--aboreto);
            font-size: 80px;
            line-height: 100%;
            margin-left: -7px;
            color: var(--color--brown--medium);

            @media (max-width: 768px){
                font-size: 40px;
                margin-left: -3px;
            }
        }
    }

    & p {

        @media (max-width: 768px){
            font-size: 14px;
        }

    }

    & article {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
    }
`

const Right = styled.section`
    width: 50%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px){
        width: 80%;
        height: 300px;
    }

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid var(--color--brown--medium);
        top: -15px;
        left: -15px;
        position: absolute;
        z-index: -1;
        border-radius: 20px 20px 0px 500px;
    }

    &::after{
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid var(--color--brown--medium);
        bottom: -15px;
        right: -15px;
        position: absolute;
        z-index: -1;
        border-radius: 20px 20px 0px 500px;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px 20px 0px 500px;
    }
`

const Home = () => {
    return (
        <>
            <Content>
                <Left>
                    <div>
                        <p>Saiba quem é a</p>
                        <h1>FAST HOMES</h1>
                    </div>

                    <p>
                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos

                        <br /> <br />

                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos
                    </p>

                    <article>
                        <GlobalButton2
                            text="Solicitar meu orçamento"
                            background1="var(--color--brown--medium)"
                            background2="var(--color--brown--medium)"
                            colorIcon="#fff"
                            colorText="#fff"
                            to="/#form"
                        />
                        <GlobalButton3
                            text="Conhecer catálogo"
                            background1="transparent"
                            background2="transparent"
                            colorIcon="#000"
                            colorText="#000"
                            border1="#000"
                            border2="#000"
                            to="/catalogo-de-casas"
                        />
                    </article>
                </Left>

                <Right>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5493a461-fb61-43ac-8edb-b734ca35fc00/public" loading="lazy" />
                </Right>
            </Content>
        </>
    )
}

export default Home;