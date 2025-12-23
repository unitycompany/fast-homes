import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import AlephsramosdevWidget from "../components/AlephsramosdevWidget";

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

    & > p {
      color: #fff;
      font-size: 14px;
      opacity: 0.7;
      position: relative;
      padding-left: 10px;

      &::before{
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 0.7;
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
            content: '→';
            width: 100%;
            height: 100%;
            padding-right: 0px;
            font-size: 0;
            transition: all .1s ease-in-out;
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

const FooterForm = styled.form`
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
        transition: all 0.3s ease-in-out!important; 

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
        transition: all 0.3s ease-in-out!important; 

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
    // Estados para os campos do formulário
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
  
    // Função para gerar um ID único
    const generateUniqueId = () => {
      return new Date().getTime().toString();
    };
  
    // Função para capturar os UTMs da URL
    const getUTMs = () => {
      const urlParams = new URLSearchParams(window.location.search);
      return {
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_content: urlParams.get('utm_content'),
        utm_term: urlParams.get('utm_term'),
      };
    };
  
    // Helpers de telefone
    const normalizePhone = (value) => (value || '').replace(/\D/g, '');
    const maskPhone = (digits) => {
      const d = (digits || '').replace(/\D/g, '');
      if (d.length >= 11) {
        // (XX) XXXXX-XXXX
        return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7,11)}`;
      }
      if (d.length >= 10) {
        // (XX) XXXX-XXXX
        return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6,10)}`;
      }
      return d; // fallback
    };

    // Função de envio do formulário
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('Formulário enviado!');

      // Validação básica
      if (!name || !tel || !email || !message) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
  
      setLoading(true);
      const utms = getUTMs();

      const whatsappRaw = normalizePhone(tel);
      const whatsappMasked = maskPhone(whatsappRaw);

      // Montagem do payload no novo padrão
      const body = {
        name: name,
        email: email,
        whatsapp: tel,
        whatsapp_raw: whatsappRaw,
        whatsapp_masked: whatsappMasked,
        referrer: document.referrer || "",
        submittedAt: new Date().toISOString(),
        source: window.location.href,
        utm_source: utms.utm_source || "",
        utm_medium: utms.utm_medium || "",
        utm_campaign: utms.utm_campaign || "",
        utm_term: utms.utm_term || "",
        utm_content: utms.utm_content || "",
        gclid: new URLSearchParams(window.location.search).get('gclid') || "",
        utm_captured_at: new Date().toISOString(),
        utm_source_url: window.location.href,
        message: message,
      };

      const payload = {
        ...body,
        webhookUrl: 'https://n8n.unitycompany.com.br/webhook/form-fasthomes-lp',
        executionMode: 'production',
      };
  
      try {
  const response = await fetch('https://n8n.unitycompany.com.br/webhook/form-fasthomes-lp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const text = await response.text().catch(() => '');
          throw new Error(`HTTP ${response.status} ${text}`);
        }

        // Alguns webhooks não retornam JSON. Evita quebrar o fluxo ao tentar fazer parse.
        try {
          const data = await response.json();
          console.log('Success:', data);
        } catch (_) {
          console.log('Success: webhook recebido com sucesso.');
        }

        alert("Formulário enviado com sucesso!");
        // Reseta os campos do formulário
        setName('');
        setTel('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error("Error:", error);
        alert("Houve um erro ao enviar o formulário.");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <FooterContainer>
        <FooterTop>
          <FooterCard data-aos="fade-up" data-aos-delay="100">
            <img 
              src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/28cf333a-365a-4025-f8d8-c86fdd742d00/public" 
              alt="logo-fast-homes" 
            />
            <h2>Descubra um novo conceito de lar com a Fast Homes</h2>
            <a href="mailto:contato@fasthomes.com.br" target="_blank" rel="noopener noreferrer">
              contato@fasthomes.com.br
            </a>
            <p>
              Av. Roberto Silveira, 251 - Centro, Miguel Pereira/RJ, 26900-000
            </p>
          </FooterCard>
  
          <FooterCard data-aos="fade-up" data-aos-delay="200">
            <h1>Mapa do site</h1>
            <a href="/">Início</a>
            <a href="/catalogo-de-casas">Nosso catálogo</a>
            <a href="/projetos-personalizados">Seu projeto</a>
            {/* <a href="/#form">Financiamento</a> */}
            {/* <a href="/modular">Modular</a> */}
            <a href="/sobre-nos">Sobre nós</a>
            <a href="/modulos-prontos">Módulos Prontos</a>
          </FooterCard>
  
          <FooterCard data-aos="fade-up" data-aos-delay="300">
            <h1>Parcerias</h1>
            <a href="https://fastsistemasconstrutivos.com.br" target="_blank" rel="noopener noreferrer">Fast Sistemas Construtivos</a>
            <a href="https://novametalica.com.br" target="_blank" rel="noopener noreferrer">Nova Metálica</a>
            <a href="https://saintgobain.com.br" target="_blank" rel="noopener noreferrer">Saint Gobain</a>
            <a href="https://esquadrias.fastsistemasconstrutivos.com.br" target="_blank" rel="noopener noreferrer">EcoFrame</a>
          </FooterCard>
  
          <FooterCard data-aos="fade-up" data-aos-delay="400">
            <h1>Contato</h1>
            <a href="https://wa.me/5521992882282?text=Olá!%20Gostaria%20de%20mais%20informações.
" target="_blank" rel="noopener noreferrer">+55 (21) 99288-2282</a>
            <a href="mailto:contato@fasthomes.com.br" target="_blank" rel="noopener noreferrer">contato@fasthomes.com.br</a>
          </FooterCard>
        </FooterTop>
  
        <FooterCenter>
          <FooterTitle>
            <h1 data-aos="fade-up" data-aos-delay="100">
              Tem alguma dúvida?
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Preencha o formulário ao lado e fale conosco. Estamos prontos para ajudar você!
            </p>
          </FooterTitle>
  
          <FooterForm id="contactFormFooter" onSubmit={handleSubmit}>
            <input 
              data-aos="fade-up" data-aos-delay="100"
              type="text" 
              id="name" 
              placeholder="Seu nome"
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
  
            <input 
              data-aos="fade-up" data-aos-delay="200"
              type="tel" 
              id="tel" 
              placeholder="(21) 99288-2282" 
              required 
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
  
            <input
              data-aos="fade-up" data-aos-delay="300" 
              type="email" 
              id="email" 
              placeholder="Seu e-mail" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <textarea 
              data-aos="fade-up" data-aos-delay="400"
              id="textarea" 
              placeholder="Conte-nos qual é a sua dúvida"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
  
            <button type="submit" data-aos="fade-up" data-aos-delay="600" disabled={loading}>
              {loading ? "Enviando..." : "Falar conosco"}
            </button>
  
            <p data-aos="zoom-in" data-aos-delay="1000">
              *As suas informações serão usadas apenas para fins de contato, consulte a nossa <a href="/politica-de-privacidade">Política de Privacidade</a> e o nosso <a href="/termos-e-condicoes">Termos de Condições</a>.
            </p>
          </FooterForm>
        </FooterCenter>
  
        <FooterBottom>
          <p>
            Todos os direitos reservados |<span> CNPJ: 40.436.034/0001-48 - Fast Homes</span>
          </p>
        </FooterBottom>
      </FooterContainer>
    );
  };
  
export default Footer;