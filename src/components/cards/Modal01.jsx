import React from "react";
import { BsCheckLg, BsX } from "react-icons/bs";
import styled, {keyframes} from "styled-components";

const Background = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ visivel }) => (visivel ? "block" : "none")};
`

const Content = styled.div`
    position: fixed!important;
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
        font-size: 24px;
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
    border-bottom: 1px solid #00000020;
    padding: 15px 0;
    transition: padding .3s ease-in-out, background-color .2s ease-in-out;
    border-radius: 10px;

    &:hover {
        background-color: #f9f9f9;
        padding: 10px 10px;
        cursor: default;
        border: 1px solid #00000020;
        
        & img {
            width: 45%;
        }
    }

    & div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
    }

    & img {
        width: 200px;
        transition: all .2s ease-in-out;
        border-radius: 5px;
    }

    & h4 {
        font-size: 18px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        & svg {
            fill: var(--color--green--low);
        }
    }

    & p {
        font-size: 16px;
        font-weight: 300;
        line-height: 110%;
        width: 90%;
        margin-top: -10px;
    }
`

const PacoteCompleto = ({ visivel, fechar }) => {
    return (
        <>
            <Background visivel={visivel} onClick={fechar}></Background>
            <Content visivel={visivel}>
                <Top>
                    <h2>Pacote Completo</h2>
                    <button onClick={fechar}>
                        <BsX />
                    </button>
                </Top>

                <Center>
                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0a7965d5-224a-45bd-864b-46890c3c8200/public" />
                        <div>
                            <h4> <BsCheckLg /> Pacote de projetos</h4>
                            <p>
                            Inclui todos os desenhos técnicos, plantas e especificações detalhadas para a construção.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84289411-6ed3-4ec7-1a40-624b9c8dd800/public" />
                        <div>
                            <h4> <BsCheckLg /> Estrutura de Light Steel Frame</h4>
                            <p>
                            Sistema construtivo leve e resistente, feito de aço galvanizado para maior  durabilidade.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84289411-6ed3-4ec7-1a40-624b9c8dd800/public" />
                        <div>
                            <h4> <BsCheckLg /> Sistemas de vedação</h4>
                            <p>
                            Revestimentos internos e externos para garantir isolamento térmico e acústico.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84289411-6ed3-4ec7-1a40-624b9c8dd800/public" />
                        <div>
                            <h4> <BsCheckLg /> Forro de cobertura</h4>
                            <p>
                            Instalação do forro para acabamento estético e proteção contra variações climáticas.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84289411-6ed3-4ec7-1a40-624b9c8dd800/public" />
                        <div>
                            <h4> <BsCheckLg /> Acabamentos internos e externos</h4>
                            <p>
                            Pisos, revestimentos e pintura final para um acabamento completo e sofisticado.
                            </p>
                        </div>
                    </Option>

                    <Option>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84289411-6ed3-4ec7-1a40-624b9c8dd800/public" />
                        <div>
                            <h4> <BsCheckLg /> Mão de obra especializada</h4>
                            <p>
                            Equipe treinada para montagem eficiente, garantindo qualidade e segurança na obra.
                            </p>
                        </div>
                    </Option>
                </Center>
            </Content>
        </>
    )
}

export default PacoteCompleto;