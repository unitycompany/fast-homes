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

        @media (max-width: 768px){
            line-height: 120%;
            font-size: 30px;
        }
    }

    & > p {
        font-size: 16px;
        font-weight: 300;

        & a {
          font-weight: 500;
          transition: all .1s ease-in-out;

          &:hover {
            opacity: 0.8;
          }
        }
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

        @media (max-width: 768px){
            font-size: 12px;
            white-space: nowrap;
        }

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleSelect = () => {
    setIsOpenSelect(prev => !prev);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpenSelect(false);
  };

  const generateUniqueId = () => new Date().getTime().toString();

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validação básica para todos os campos
    if (!name || !email || !whatsapp || !cidade || !estado || !selectedOption) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    setLoading(true);
    const utms = getUTMs();

    // Captura o interesse dinâmico baseado na página atual
    const interesse = "Interesse: " + window.location.pathname;

    const payload = {
      rules: {
        update: "false",
        filter_status_update: "open",
        equal_pipeline: "true",
        status: "open",
        validate_cpf: "false",
      },
      leads: [
        {
          id: "FORMULARIO - FAST HOMES" + " - " + name,
          user: name,
          email: email,
          name: name,
          personal_phone: whatsapp,
          mobile_phone: whatsapp,
          last_conversion: {
            source: "FORMULARIO - FAST HOMES",
          },
          custom_fields: {
            uniqueId: generateUniqueId(),
            utm_source: utms.utm_source || "",
            utm_medium: utms.utm_medium || "",
            utm_campaign: utms.utm_campaign || "",
            utm_content: utms.utm_content || "",
            utm_term: utms.utm_term || "",
            page_referrer: window.location.href || "URL não encontrada",
            cidade: cidade,
            estado: estado,
            tipoCliente: selectedOption
          },
          notas: {
            interesse: interesse
          }
        }
      ]
    };

    try {
      const response = await fetch('https://app.pipe.run/webservice/integradorJson?hash=1e28b707-3c02-4393-bb9d-d3826b060dcd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log('Success:', data);
      alert('Formulário enviado com sucesso!');
      // Reseta os campos do formulário
      setName('');
      setEmail('');
      setWhatsapp('');
      setCidade('');
      setEstado('');
      setSelectedOption('');
    } catch (error) {
      console.error('Error:', error);
      alert('Houve um erro ao enviar o formulário.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer id="form">
      <FormText>
        <h1 data-aos="fade-up" data-aos-delay="100">
          Converse com um consultor
        </h1>
        <p data-aos="fade-up" data-aos-delay="400">
          Todas as informações serão usadas apenas para fins de contato, consulte a nossa <a href="/politica">Política de Privacidade</a> e <a href="/termos">Termos de Condições</a>.
        </p>
        <GlobalButton3
          text="Ver o catálogo"
          background1="transparent"
          background2="transparent"
          colorIcon="#fff"
          colorText="#fff"
          border1="#fff"
          border2="#fff"
          to="/catalogo-de-casas"
        />
      </FormText>

      <Formulario id="contactForm" onSubmit={handleSubmit}>
        <label data-aos="fade-up" data-aos-delay="100">
          <span>Nome</span>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome aqui"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label data-aos="fade-up" data-aos-delay="200">
          <span>WhatsApp</span>
          <input
            type="tel"
            id="tel"
            placeholder="+55 (21) 99288-2282"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </label>
        <label data-aos="fade-up" data-aos-delay="300">
          <span>E-mail</span>
          <input
            type="email"
            id="email"
            placeholder="contato@fasthomes.com.br"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <FormInputs>
          <label data-aos="fade-up" data-aos-delay="400">
            <span>Cidade</span>
            <input
              type="text"
              id="cidade"
              placeholder="Miguel Pereira"
              required
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </label>
          <label data-aos="fade-up" data-aos-delay="500">
            <span>Estado</span>
            <input
              type="text"
              id="estado"
              placeholder="Rio de Janeiro"
              required
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </label>
        </FormInputs>
        <FormSelect data-aos="fade-up" data-aos-delay="600">
          <FormPlaceholder itemSelecionado={!!selectedOption} onClick={toggleSelect}>
            <span>Escolha a opção que melhor te representa</span>
            <p>{selectedOption || "Selecione uma opção"}</p>
            <BsArrowDown />
          </FormPlaceholder>
          <FormOptions isOpen={isOpenSelect}>
            {["Construtor/Investidor", "Arquiteto/Engenheiro", "Cliente Final", "Outro"].map((option) => (
              <div key={option} onClick={() => handleSelectOption(option)}>
                <span>{option}</span>
              </div>
            ))}
          </FormOptions>
        </FormSelect>
        <button type="submit" data-aos="fade-up" data-aos-delay="800" disabled={loading}>
          {loading ? "Enviando..." : "Agendar uma reunião com nosso consultor"}
        </button>
      </Formulario>
    </FormContainer>
  );
};

export default Form;