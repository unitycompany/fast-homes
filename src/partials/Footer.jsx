import React from "react";
import styled, { keyframes } from "styled-components";

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

const FooterContainer = styled.footer`
    position: relative;
    background-color: var(--color--black);
    width: 100%;
    padding: 2.5% 0;
    font-family: "Montserrat", serif;
    z-index: 10;

    &::before{
        content: '';
        width: 100%;
        height: 102.5%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-color: var(--color--black);
        opacity: 0.4;
        clip-path: polygon(100% 0, 100% 100%, 30% 97.5%, 0 100%, 0 0);
        transform: rotate(180deg);

        @media (max-width: 768px){
            height: 101%;
            clip-path: polygon(100% 0, 100% 100%, 30% 99%, 0 100%, 0 0);
        }
    }

    &::after{
        content: '';
        width: 100%;
        height: 105%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-color: var(--color--black);
        opacity: 0.2;
        clip-path: polygon(100% 0, 100% 100%, 30% 95%, 0 100%, 0 0);
        transform: rotate(180deg);

        @media (max-width: 768px){
            height: 102%;
            clip-path: polygon(100% 0, 100% 100%, 30% 98%, 0 100%, 0 0);
        }
    }
`

const FooterTop = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    width: 100%;
    max-width: 1280px;
    position: relative;
    left: 50%;
    top: 0;
    padding: 5%;
    transform: translateX(-50%);

    @media (max-width: 768px){
        flex-direction: column;
        gap: 30px;
        padding: 10% 5%;
    }
`

const FooterCard = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2px;
    border-left: 1px solid var(--color--white);
    padding-left: 10px;

    @media (max-width: 768px){
        width: 100%;
    }

    &:nth-child(1){
        width: 30%;
        padding-left: 0;
        border-left: 0;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > img {
        width: 250px;
        padding-bottom: 10px;
    }

    & > h1 {
        font-size: 20px;
        font-family: var(--font--aboreto);
        color: var(--color--white);
        padding-bottom: 10px;

        @media (max-width: 768px){
            padding-bottom: 0;
        }

    }

    & > h2 {
        font-size: 16px;
        font-family: var(--font--aboreto);
        color: var(--color--white);
        padding-bottom: 10px;
        line-height: 100%;

        @media (max-width: 768px){
            padding-bottom: 15px;
        }
    }

    & > a {
        color: #fff;
        font-weight: 200;
        font-size: 16px;

        @media (max-width: 768px){
            font-size: 14px;
        }

        &::before{
            content: '•';
            width: 100%;
            height: 100%;
            padding-right: 0px;
            font-size: 0;
            transition: all .2s ease-in-out;
        }

        &:hover::before{
            font-size: 12px;
            padding-right: 5px;
        }

        &:hover {
            color: var(--color--white);
            font-weight: 400;
        }
    }
`

const FooterCenter = styled.div `
    width: 100%;
    max-width: 1280px;
    position: relative;
    left: 50%;
    top: 0;
    padding: 2.5% 5%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const FooterTitle = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;

    & > h1 {
        font-size: 24px;
        font-weight: 300;
        font-family: var(--font--aboreto);
        color: var(--color--white);
    }

    & > p {
        font-size: 16px;
        color: #ffffff95;
        font-weight: 200;
        width: 90%;
        line-height: 120%;
    }
`

const FooterForm = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    & > input {
        padding: 10px 0px;
        border-bottom: 1px solid #ffffff80;
        width: 100%;
        color: #fff;
        transition: all 0.3s ease-in-out; 

        &:focus{
            outline: none;
            border: none;
            border-bottom: 1px solid #ffffff80;
            border-left: 1px solid #ffffff80;
            padding-left: 10px;
            color: var(--color--white);
        }

        &::placeholder{
            font-size: 16px;
            font-weight: 300;
        }
    }

    & > textarea {
        padding: 10px 0px;
        border-bottom: 1px solid #ffffff80;
        width: 100%;
        min-height: 120px;
        height: auto;
        overflow-y: hidden;
        color: #fff;
        transition: all 0.3s ease-in-out; 

        &:focus{
            outline: none;
            border: none;
            border-bottom: 1px solid #ffffff80;
            border-left: 1px solid #ffffff80;
            padding-left: 10px;
            color: var(--color--white);
        }

        &::placeholder{
            font-size: 16px;
            font-weight: 300;
        }
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
        border: 1px solid var(--color--white);
        color: var(--color--white);
        letter-spacing: 1px;
        font-weight: 300;

        &:hover{
            background: var(--color--white);
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

    & > p {
        color: #ffffff70;
        font-weight: 300;
        line-height: 120%;
        font-size: 14px;

        & > a {
            color: #fff;
            border-bottom: 1px solid #fff;
            transition: all .1s ease;

            &:hover {
                color: var(--color--white);
                border-bottom: 1px solid var(--color--white);
            }
        }
    }
`

const FooterBottom = styled.div`
    width: 100%;
    max-width: calc(1280px - 128px);
    position: relative;
    left: 50%;
    top: 0;
    margin-top: 80px;
    padding: 20px 2.5%;
    transform: translateX(-50%);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        background-color: transparent;
        margin-top: 40px;
        gap: 50px;
        padding: 2.5%;
    }

    & > p{
        font-size: 16px;
        font-weight: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #000000;

        &:nth-child(1){
            @media (max-width: 768px){
                gap: 5px;
                line-height: 120%;
                flex-direction: column;
            }
        }

        @media (max-width: 768px){
            color: #fff;
            text-align: center;
            font-size: 12px;
        }

        & > a > img {
            width: 75px;
            transition: all .1s ease;

            @media (max-width: 768px){
                filter: invert(500%);
            }

            &:hover {
                filter: invert(20%);

                @media (max-width: 768px){
                    filter: invert(400%);
                }
            }
        }
    }
`

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterTop>
                    <FooterCard>
                        <img 
                            src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8997c35e-ec2d-4f63-c868-82af3c925c00/public" 
                            alt="logo-fast-homes" 
                        />
                        <h2>
                            O Novo conceito de lar é Fast Homes
                        </h2>
                        <a href="mailto:contato@fasthomes.com.br" target="_blank">
                            contato@fasthomes.com.br
                        </a>
                        <a href="#">
                            Solicite um orçamento
                        </a>
                    </FooterCard>

                    <FooterCard>
                        <h1>
                            Mapa do site
                        </h1>
                        <a href="/">
                            Inicio
                        </a>
                        <a href="/catalogo-de-casas">
                            Catálogo de casas
                        </a>
                        <a href="/projetos-personalizados">
                            Projetos personalizados
                        </a>
                        <a href="/sobre">
                            Sobre nós
                        </a>
                        <a href="/#parcerias">
                            Parcerias
                        </a>
                    </FooterCard>

                    <FooterCard>
                        <h1>
                            Parcerias
                        </h1>
                        <a href="https://fastdrywall.com.br" target="_blank">
                            Fast Drywall
                        </a>
                        <a href="https://esquadrias.fastsistemasconstrutivos.com.br" target="_blank">
                            EcoFrame
                        </a>
                        <a href="https://novametalica.com.br" target="_blank">
                            Nova Metálica
                        </a>
                        <a href="https://saintgobain.com.br" target="_blank">
                            Saint Gobain
                        </a>
                    </FooterCard>

                    <FooterCard>
                        <h1>
                            Contato
                        </h1>
                        <a href="#" target="_blank">
                            WhatsApp
                        </a>
                        <a href="#" target="_blank">
                            +55 (24) 98141-4121
                        </a>
                        <a href="#" target="_blank">
                            contato@fasthomes.com.br
                        </a>
                    </FooterCard>
                </FooterTop>

                <FooterCenter>
                    <FooterTitle>
                        <h1>
                            Ficou com alguma dúvida?
                        </h1>
                        <p>
                            Preencha o formulário ao lado para que possamos entrar em contato para tirar todas as suas dúvidas
                        </p>
                    </FooterTitle>

                    <FooterForm>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Diga seu nome"
                            required 
                        />

                        <input 
                            type="tel" 
                            id="tel" 
                            placeholder="(24) 98131-1321" 
                            required 
                        />

                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Seu e-mail" 
                            required 
                        />

                        <textarea 
                            type="text" 
                            id="textarea" 
                            placeholder="Qual a sua dúvida"
                        />
                        <button type="submit">
                            Fale conosco
                        </button>
                        <p>
                            *Todas as informações serão usadas apenas para fins de contato, pode consultar nossa <a href="/politica-de-privacidade">politica de privacidade</a> e <a href="/termos-e-condicoes">termos e condições</a>.
                        </p>
                    </FooterForm>
                </FooterCenter>

                <FooterBottom>
                    <p>
                        Todos os direitos reservados |<span> CNPJ: 45.989.824/0001-74 - Fast Homes</span>
                    </p>
                    <p>
                        Desenvolvido por 
                        <a href="https://www.alephsramos.com.br" target="_blank">
                            <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/aa412b31-1015-40a2-cfd6-ab7afce75500/public" alt="logo do aleph desenvolvedor web" />
                        </a>
                    </p>
                </FooterBottom>
            </FooterContainer>
        </>
    )
}

export default Footer;