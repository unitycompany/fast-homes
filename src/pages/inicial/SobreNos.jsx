import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../../components/buttons/GlobalButton2";

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 7.5% 5% 5% 5%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 50px;
    z-index: 1;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    overflow: hidden;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 7.5% 5% 5% 5%;
        gap: 30px;
    }
`

const Background = styled.div`
    width: 100vw;
    position: absolute;
    height: 70%;
    bottom: 0;
    background-color: #fafafa;
    z-index: -1;
    border-top: 1px solid #00000005;

    @media (max-width: 768px){
        left: 0;
        height: 55%;
        border: none;
    }
`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
    }

    & img {
        height: 500px;
        object-fit: cover;
        border-radius: 20px;
        border: 5px solid #fff;

        @media (max-width: 768px){
            border: none;
        }
    }
`

const Cards = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    width: 100%;

    @media (max-width: 768px){
        display: none;
    }
`

const Card = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    width: 50%;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 10px;
        width: 100%;
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        
        &:nth-child(1){
            width: 15%;
        }

        &:nth-child(2){
            width: 85%;
            gap: 5px;
            flex-direction: column;
            align-items: flex-start;

            & span {
                font-size: 30px;
                font-weight: 600;
                line-height: 100%;
                color: #4D5615;

                @media (max-width: 768px){
                    font-size: 26px;
                }
            }

            & p {
                font-size: 16px;
                line-height: 100%;

                @media (max-width: 768px){
                    font-size: 14px;
                }
            }
        }
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 20px;
    height: 100%;
    flex-direction: column;

    @media (max-width: 768px){
        width: 100%;
    }

    & h6 {
        font-size: 14px;
        font-weight: 600;
        color: transparent;
        background: linear-gradient(90deg, #000000, #444444);
        -webkit-background-clip: text;
        line-height: 100%;
    }

    & h1 {
        font-size: 30px;
        line-height: 110%;
        width: 70%;
        font-weight: 400;

        @media (max-width: 768px){
            width: 100%;
        }

        & b {
            font-weight: 500;
            color: transparent;
            background: linear-gradient(90deg, #000000, #444444);
            -webkit-background-clip: text;
        }
    }
`

const SobreNos = () => {
    return (
        <>
            
            <Content>
                <Background></Background>
                <Left>
                    <img data-aos="zoom-in" data-aos-delay="0" src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6e78ac0d-d748-41ef-c039-e41166058900/public" alt="" loading="lazy" />
                    <Cards>
                        <Card data-aos="fade-up" data-aos-delay="100">
                            <div>
                                <svg id="fi_3388524" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m18.5 24h-16c-1.378 0-2.5-1.122-2.5-2.5v-16c0-1.378 1.122-2.5 2.5-2.5h12.5c.276 0 .5.224.5.5s-.224.5-.5.5h-12.5c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-8.5c0-.276.224-.5.5-.5s.5.224.5.5v8.5c0 1.378-1.122 2.5-2.5 2.5z"></path></g><g><path d="m12.5 15.25c-.128 0-.256-.049-.354-.146l-4.5-4.5c-.195-.195-.195-.512 0-.707s.512-.195.707 0l4.146 4.146 10.647-10.647c.195-.195.512-.195.707 0s.195.512 0 .707l-11 11c-.097.098-.225.147-.353.147z"></path></g></svg>
                            </div>
                            <div>
                                <p>Escolha um entre os nossos modelos prontos e descubra um novo conceito de lar</p>
                            </div>
                        </Card>

                        <Card data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <svg id="fi_3388524" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m18.5 24h-16c-1.378 0-2.5-1.122-2.5-2.5v-16c0-1.378 1.122-2.5 2.5-2.5h12.5c.276 0 .5.224.5.5s-.224.5-.5.5h-12.5c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-8.5c0-.276.224-.5.5-.5s.5.224.5.5v8.5c0 1.378-1.122 2.5-2.5 2.5z"></path></g><g><path d="m12.5 15.25c-.128 0-.256-.049-.354-.146l-4.5-4.5c-.195-.195-.195-.512 0-.707s.512-.195.707 0l4.146 4.146 10.647-10.647c.195-.195.512-.195.707 0s.195.512 0 .707l-11 11c-.097.098-.225.147-.353.147z"></path></g></svg>
                            </div>
                            <div>
                                <p>Personalize o seu próprio projeto e descubra um novo conceito de lar</p>
                            </div>
                        </Card>
                    </Cards>
                </Left>
                <Right>
                    <h6 data-aos="zoom-in" data-aos-delay="50">Conheça a Fast Homes</h6>
                    <h1 data-aos="fade-up" data-aos-delay="150">A Fast Homes surgiu para <b>transformar nossa forma de construir</b> e viver.</h1>
                    <p data-aos="fade-up" data-aos-delay="200">
                        Unimos a eficiência do Steel Frame com um novo conceito de lar: mais moderno, sustentável e pensado para o seu bem-estar.
                        Acreditamos que cada casa é um projeto de vida. Por isso, oferecemos soluções inteligentes, versáteis e com acabamento de alto padrão, sempre alinhadas às suas necessidades e ao seu estilo de vida.
                        Na Fast Homes, construir é simples, rápido e seguro.
                    </p>
                    <GlobalButton2
                            text="Conhecer a Fast Homes"
                            background1="#000"
                            background2="#000"
                            colorIcon="#fff"
                            colorText="#fff"
                            to="/sobre-nos"
                    />
                </Right>
            </Content>
        </>
    )
}

export default SobreNos;