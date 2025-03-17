import React from "react";
import { BsCheckLg, BsX } from "react-icons/bs";
import styled from "styled-components";

const Background = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 99998;
    position: fixed;
    display: ${({ visivel }) => (visivel ? "block" : "none")};
`

const Content = styled.div`
    position: fixed;
    width: 850px;
    height: 600px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 99999;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    padding: 20px 30px;
    gap: 30px;
    display: ${({ visivel }) => (visivel ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #00000020;
    width: 100%;

    & h2 {
        font-size: 28px;
        font-weight: 600;
        font-family: var(--font--aboreto);
        color: transparent;
        background: linear-gradient(90deg, var(--color--black), var(--color--green--low));
        -webkit-background-clip: text;
    }

    & svg {
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .5s ease-in-out;

        &:hover {
            fill: red;
            transform: scale(0.95) rotate(360deg);
        }
    }
`

const Center = styled.div`
    width: 100%;
    height: auto;
    overflow-y: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    flex-direction: column;
`

const Option = styled.div`
    display: flex;
    width: 95%;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;
    height: auto;
    border-bottom: 1px solid #00000040;
    padding: 15px 0;
    transition: padding .3s ease-in-out, background-color .2s ease-in-out;

    & div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 25px;
    }

    & img {
        width: 150px;
        transition: all .2s ease-in-out;
        border: 1px solid #00000040;

        &:hover {
            filter: contrast(110%) brightness(110%);
        }
    }

    & h4 {
        font-size: 18px;
        font-weight: 400;
        line-height: 110%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        text-transform: uppercase;

        & b {
            font-weight: 400;
            color: var(--color--green--low);
            font-size: 12px;
        }

        & svg {
            fill: green;
            font-size: 20px;
        }
    }

    & p {
        font-size: 15px;
        font-weight: 300;
        line-height: 110%;
        width: 95%;
        margin-top: -10px;
    }
`

const PacoteBasico = ({ visivel, fechar }) => {
    return (
        <>
            <Background visivel={visivel} onClick={fechar}></Background>
            <Content visivel={visivel}>
                <Top>
                    <h2>Pacote Básico</h2>
                    <button onClick={fechar}>
                        <BsX />
                    </button>
                </Top>

                <Center>
                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/77c8b7e4-472e-43b4-a2d8-4562cb2bbe00/public" />
                        <div>
                            <h4> <BsCheckLg />Projeto Estrutural</h4>
                            <p>
                            Transformamos o seu projeto arquitetônico em Steel Frame, entregando o Projeto Estrutural, Projeto Executivo e Caderno de Montagem.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f8c777e0-02be-44ea-0ceb-f135510d0000/public" />
                        <div>
                            <h4> <BsCheckLg />Fundação tipo Radier</h4>
                            <p>
                            Projeto da fundação e Ferragen e concreto usinado, o tipo de fundação predefinido é o Radier.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d633cf8e-c2b5-40b5-89f1-019a8c99ea00/public" />
                        <div>
                            <h4> <BsCheckLg />Estrutura da Casa em Aço Galvanizado</h4>
                            <p>
                                A estrutura é feita com perfis de Steel Frame Normatizado em aço galvanizado, garantindo durabilidade e resistência. O sistema é totalmente aparafusado, com espaçamentos e dimensões dos perfis detalhados no projeto estrutural. Este método oferece uma montagem precisa e rápida, ideal para uma construção eficiente e com menor desperdício de material.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c8ea9ac7-5443-465d-107c-275a63d23700/public" />
                        <div>
                            <h4> <BsCheckLg />Fechamento Externo</h4>
                            <p>
                                Paredes externas, são fachadas com Sistema Glasroc - Placo, que oferece maior resistência às intempéries e acabamento monolítico com argamassa cimentícia.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b444892d-78d8-4068-9067-edf1fc32ed00/public" />
                        <div>
                            <h4> <BsCheckLg />Acabamentos Externos Quartzolit</h4>
                            <p>
                                Paredes externas são revestidas com texturas branca Quartzolit que são compatíveis com sistema Glasroc, para ter garantia sistemica, temos manual do Fabricante com todas as orientações.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fb7a77be-a48b-403b-aa78-5d3e2af93a00/public" />
                        <div>
                            <h4> <BsCheckLg />Fechamento Interno</h4>
                            <p>
                                Paredes internas: Utilizamos placa de gesso acartonado, tipo Perfoma para áreas secas, devido a sua resistência a impacto e facilidade de fixação de cargas e tipo RU para áreas úmidas, proporcionando um acabamento resistente à umidade onde necessário.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/290c6e3c-b2d8-40f9-14d2-72ee00149900/public" />
                        <div>
                            <h4> <BsCheckLg />Fechamento da Cobertura</h4>
                            <p>
                                Cobertura com telha cerâmica e manta Solarmax para isolamento térmico e acústico eficaz. Calhas e Rufos não estão inclusos, devendo ser contratado a parte.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/97798517-1785-420e-56da-eff42d28ac00/public" />
                        <div>
                            <h4> <BsCheckLg />Esquadrias de PVC</h4>
                            <p>
                                As esquadrias de PVC oferecem excelente isolamento térmico e acústico, durabilidade, resistência a intempéries, e baixa manutenção, características ideais para o Steel Frame. Além disso, são leves, fáceis de instalar, sustentáveis e oferecem boa vedação contra infiltrações, garantindo conforto e proteção para o sistema construtivo.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/87e15bf0-2333-4bf0-6f42-6bcbc3666700/public" />
                        <div>
                            <h4> <BsCheckLg />Portas Internas em Madeira</h4>
                            <p>
                                As esquadrias internas serão fornecidas em madeira no tipo porta pronta completa com ferragens e fechaduras do fabricante Gddor modelo premium.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7910b81f-9d78-41db-9774-160704161100/public" />
                        <div>
                            <h4> <BsCheckLg />Pisos Vinílicos e Porcelanato</h4>
                            <p>
                                Os pisos vinílicos Biancogres são sinônimos de qualidade e sofisticação, perfeitos para obras modernas e funcionais. 
                                Com uma vasta linha que alia durabilidade, design inovador e fácil manutenção, são ideais para compor ambientes residenciais e comerciais com conforto e estilo.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fc0b4ce7-8c54-43f9-5608-2162a529b700/public" />
                        <div>
                            <h4> <BsCheckLg />Impermeabilização e Revestimentos <b>(Opcional)</b></h4>
                            <p>
                                Os pisos vinílicos Biancogres são sinônimos de qualidade e sofisticação, perfeitos para obras modernas e funcionais. 
                                Com uma vasta linha que alia durabilidade, design inovador e fácil manutenção, são ideais para compor ambientes residenciais e comerciais com conforto e estilo.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c8ea9ac7-5443-465d-107c-275a63d23700/public" />
                        <div>
                            <h4> <BsCheckLg />Acabamento Internos Pintura SW</h4>
                            <p>
                                Internamente foi considerado pintura com tinta acrilica fosca Metalatex, sendo que revestimentos de madeira estão exclusos nesta proposta.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fe06d892-b395-4d48-662d-68afe1d9ec00/public" />
                        <div>
                            <h4> <BsCheckLg />Instalações <b>(Opcional)</b></h4>
                            <p>
                                As instalações elétricas são embutidas, eletrodutos corrugados reforçados, quadro eletrico de embutir em pvc, disjuntores steck, cabos normatizados e complementos como caixinha de passagem, tomadas e interruptores.
                            </p>
                        </div>
                    </Option>
                </Center>
            </Content>
        </>
    )
}

export default PacoteBasico;