import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../../components/buttons/GlobalButton2";

const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    position: relative;
    padding: 2.5% 0% 2.5% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 2.5% 5% 2.5% 5%;
        gap: 0;
    }
`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px){
        width: 100%;
    }

    & h2 {
        font-size: 30px;
        font-family: var(--font--aboreto);
        color: var(--color--brown--low);

        @media (max-width: 768px){
            font-size: 26px;
            line-height: 110%;
            width: 100%;
        }
    }

    & p {
        @media (max-width: 768px){
            font-size: 14px;
            line-height: 120%;
        }
    }

    & div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;

        & div {
            width: 48%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 0px;
            padding: 10px;
            border: 1px solid var(--color--brown--low);;
            border-radius: 0 30px 0 0;
            transition: all .2s ease-in-out;

            &:hover {
                background-color: var(--color--brown--medium);
                color: #fff;

                & span {
                    color: #fff;
                }
            }

            & span {
                font-family: var(--font--aboreto);
                font-size: 38px;
                color: var(--color--brown--low);
                transition: all .2s ease-in-out;
            }

            & p {
                font-family: var(--font--aboreto);
                font-size: 16px;
            }
        }
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 650px;
    padding: 20px;

    @media (max-width: 768px){
        width: 100%;
        padding: 0;
        height: 500px;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`

const Porque = () => {
    return (
        <>
            <Content>
                <Left>
                    <h2 data-aos="fade-up" data-aos-delay="100">Por que escolher a Fast Homes?</h2>
                    <p data-aos="fade-up" data-aos-delay="300">
                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos

                        <br /> <br />

                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos, colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos
                    </p>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <div>
                            <span>100%</span>
                            <p>Satisfação</p>    
                        </div>

                        <div>
                            <span>100%</span>
                            <p>Satisfação</p>    
                        </div>

                        <div>
                            <span>100%</span>
                            <p>Satisfação</p>    
                        </div>

                        <div>
                            <span>100%</span>
                            <p>Satisfação</p>    
                        </div>
                    </div>

                    <GlobalButton2
                        text="Falar com um consultor"
                        background1="var(--color--brown--medium)"
                        background2="var(--color--brown--medium)"
                        colorIcon="#fff"
                        colorText="#fff"
                        to="/sobre-nos#form"
                    />
                </Left>

                <Right data-aos="fade-up" data-aos-delay="200">
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4e9b2a2-0170-44fa-4535-943920b58300/public" loading="lazy"/>
                </Right>
            </Content>
        </>
    )
}

export default Porque;