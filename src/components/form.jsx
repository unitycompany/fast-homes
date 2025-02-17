import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import { BsArrowDown } from "react-icons/bs";
import GlobalButton3 from "./buttons/GlobalButton3";

const shine = keyframes `
    0% {
      left: -100px;
    }
  
    60% {
      left: 100%;
    }
  
    to {
      left: 100%;
    }
`;

const FormContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    width: 100%;
    gap: 50px;
    font-family: var(--font--montserrat);

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const FormText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px){
        width: 100%;
    }

    & > h1 {
        font-size: 35px;
        font-family: var(--font--aboreto);

        @media (max-width: 768px){
            line-height: 120%;
            font-size: 30px;
        }
    }

    & > p {
        font-size: 16px;
    }
`

const Formulario = styled.form`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 25px;

    @media (max-width: 768px){
        width: 100%;
        padding: 0;
    }

    & > button {
        width: 100%;
        padding: 15px;
        font-weight: 300;
        font-size: 16px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: all .2s ease!important;
        border: 1px solid #fff;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 300;

        &:hover{
            background: #fff;
            color: var(--color--black);
            letter-spacing: 1px;
            font-weight: 500;
        }

        &::before{
            content: "";
            position: absolute;
            width: 200px; 
            height: 100%;
            background-image: linear-gradient(
                120deg,
                rgba(255, 255, 255, 0) 30%,
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 0) 70%
            );
            top: 0;
            left: -200px;
            opacity: 0.7;
            animation: ${shine} 2.5s ease-out infinite;
        }
    }

    & > label {
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        width: 100%;
        padding: 10px 15px;
        position: relative;

        & > span {
            position: absolute;
            top: -10px;
            background-color: var(--color--black);
            padding: 0 10px;
            font-size: 12px;
            font-weight: 300;
        }

        & > input {
            width: 100%;
            height: 100%;
            padding: 5px 0;
            transition: all .3s ease-in-out;

            &::placeholder{
                font-size: 14px;
            }

            &:focus{
               outline: none;
               border: none;
               padding-left: 5px;
            }
        }
    }
`

const FormInputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;

    & > label {
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        width: 100%;
        padding: 10px 15px;
        position: relative;
        width: 50%;

        & > span {
            position: absolute;
            top: -10px;
            background-color: var(--color--black);
            padding: 0 10px;
            font-size: 12px;
            font-weight: 300;
        }

        & > input {
            width: 100%;
            height: 100%;
            padding: 5px 0;
            transition: all .3s ease-in-out;

            &::placeholder{
                font-size: 14px;
            }

            &:focus{
               outline: none;
               border: none;
               padding-left: 5px;
            }
        }
    }
`

const FormSelect = styled.div`
    width: 100%;
    position: relative;
`

const FormPlaceholder = styled.div`
    display: flex;
    padding: 15px 15px;
    border: 1px solid #fff;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;

    & > span {
        position: absolute;
        top: -10px;
        background-color: var(--color--black);
        padding: 0 10px;
        font-size: 12px;
        font-weight: 300;  
    }

    & > svg {
        transition: all .5s ease;
        transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    }

    & > p {
        opacity: ${({ itemSelecionado }) => (itemSelecionado ? "1" : "0.4")};
        font-size: 14px;
        font-weight: 300;
    }
`

const FormOptions = styled.div`
    border: 1px solid #fff;
    border-top: 0;
    background: var(--color--black);
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    position: relative;
    width: 100%;
    z-index: 2;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
    overflow: hidden;
    margin-bottom: ${({ isOpen }) => (isOpen ? "-10px" : "-30px")};
    transition: all .5s ease;

    & > div {
        padding: 7.5px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
        transition: all .2s ease;
        cursor: pointer;
        background-color: #ffffff10;

        &:hover {
            background-color: #ffffff40;
            color: #fff;
        }

        & > span {
            font-weight: 300;
            font-size: 14px;
        }

        & > input {
            transition: all .3s ease-in-out;
            font-size: 14px;

            &:focus{
                outline: none;
                border: none;
                padding-left: 5px;
            }

            &::placeholder {
                font-size: 14px;
            }
        }
    }
`

const Form = () => {

    const [IsOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleSelect = () => {
        setIsOpenSelect((prev) => !prev);
    }

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpenSelect(false);
    }

    return (
        <>
            <FormContainer id="form">
                <FormText>
                    <h1>
                        Solicite seu orçamento
                    </h1>
                    <p>
                    Todas as informações serão usadas apenas para fins de contato, pode consultar nossa <a href="/politica">politica de privacidade</a> e <a href="/termos">termos de condições.</a>
                    </p>
                    <GlobalButton3
                        text="Conhecer catálogo"
                        background1="transparent"
                        background2="transparent"
                        colorIcon="#fff"
                        colorText="#fff"
                        border1="#fff"
                        border2="#fff"
                    />
                </FormText>

                <Formulario id="contactForm">
                    <label>
                        <span>Nome</span>
                        <input type="text" id="name" placeholder="Digite seu nome aqui" required />
                    </label>
                    <label>
                        <span>WhatsApp</span>
                        <input type="tel" id="tel" placeholder="+55 (24) 98141-1940" required />
                    </label>
                    <label>
                        <span>E-mail</span>
                        <input type="email" id="email" placeholder="contato@fasthomes.com.br" required />
                    </label>
                    <FormInputs>
                        <label>
                            <span>Cidade</span>
                            <input type="text" id="cidade" placeholder="Miguel Pereira" required />
                        </label>
                        <label>
                            <span>Estado</span>
                            <input type="text" id="estado" placeholder="Rio de Janeiro" required />
                        </label>
                    </FormInputs>
                    <FormSelect>
                        <FormPlaceholder itemSelecionado={!!selectedOption} onClick={toggleSelect}>
                            <span>Que tipo de cliente você é</span>
                            <p>{selectedOption || "Selecione uma opção"}</p>
                            <BsArrowDown />
                        </FormPlaceholder>
                        <FormOptions isOpen={IsOpenSelect}>
                            {["Construtor", "Arquiteto", "Empresário", "Engenheiro"].map((option) => (
                                <div key={option} onClick={() => handleSelectOption(option)}>
                                    <span>{option}</span>
                                </div>
                            ))}
                            <div>
                                <span>Outro:</span>
                                <input type="text" id="tipoCliente" placeholder="Digite qual" onBlur={(e) => handleSelectOption(e.target.value)}/>
                            </div>
                        </FormOptions>
                    </FormSelect>
                    <button type="submit">
                        Solicitar orçamento
                    </button>
                </Formulario>
            </FormContainer>
        </>
    )
}

export default Form;