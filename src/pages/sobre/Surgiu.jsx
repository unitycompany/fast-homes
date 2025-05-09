import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../../components/buttons/GlobalButton2";

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    gap: 50px;
    padding: 7.5% 5%;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 15% 5%;
    }
`

const Left = styled.div`
    width: 50%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px){
        width: 100%;
        height: 400px;
        margin-left: -50%;
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
        border-radius: 500px 500px 0 0;
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
        border-radius: 500px 500px 0 0;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 500px 500px 0 0 ;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    @media (max-width: 768px){
        width: 100%;
    }

    & h2 {
        font-family: var(--font--aboreto);
        font-size: 30px;
        color: var(--color--brown--low);

        @media (max-width: 768px){
            font-size: 26px;
            line-height: 110%;
        }
    }

    & p {
        @media (max-width: 768px){
            font-size: 14px;
            line-height: 120%;
        } 
    }

    & div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;

        & img {
            height: 120px;
            object-fit: cover;
            transition: all .2s ease-in-out;

            &:nth-child(1){
                width: 40%;
            }

            &:nth-child(2){
                width: 29%;
            }

            &:nth-child(3){
                width: 29%;
            }
        }
    }

    & article {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;

        & button {
            width: auto;
        }
    }
`


const Surgiu = () => {
    return (
        <>
            <Content>
                <Left data-aos="zoom-in" data-aos-delay="100">
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/63458025-85e6-434a-44b6-831d6e958700/public" loading="lazy" />
                </Left>
                <Right>
                    <h2 data-aos="fade-up" data-aos-delay="100">Como a Fast Homes surgiu?</h2>
                    <p data-aos="fade-up" data-aos-delay="300">
                        A Fast Homes surgiu da vontade de tornar a construção mais leve, rápida e inteligente.
                        <br /><br />

                        Percebemos que muitas pessoas tinham o sonho de morar bem, mas enfrentavam obras demoradas, caras e cheias de imprevistos.

                        <br /><br />
                        A nossa proposta é otimizar os projetos para oferecer casas modernas, sustentáveis e prontas para morar em menos tempo, com mais conforto e menos dor de cabeça.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2110b3ee-1420-4cf2-0987-dfc2143fee00/public" loading="lazy" />

                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6e78ac0d-d748-41ef-c039-e41166058900/public" loading="lazy" />

                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2751c4a0-fc31-407c-244e-8277817bdc00/public" loading="lazy" />
                    </div>

                    <article data-aos="zoom-in" data-aos-delay="300">
                        <GlobalButton2
                            text="Conversar com um consultor"
                            background1="var(--color--brown--medium)"
                            background2="var(--color--brown--medium)"
                            colorIcon="#fff"
                            colorText="#fff"
                            to="/sobre-nos#form"
                        />
                    </article>
                </Right>
            </Content>
        </>
    )
}

export default Surgiu;