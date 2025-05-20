import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import GlobalButton3 from "../../../components/buttons/GlobalButton3";
import GlobalButton4 from "../../../components/buttons/GlobalButton4";
import { useLocation, useNavigate } from "react-router-dom";

const Header = styled.div`
  position: fixed;
  max-width: 1280px;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(${({ hidden }) => (hidden ? "-100%" : "0")});
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5% 5%;
  background: #ffffff70;
  backdrop-filter: blur(10px);
  transition: transform 0.5s ease;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 5% 5%;
    gap: 20px;
    height: 250px;
    transform: translateX(-50%) translateY(0);
  }
`;

const HeaderBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  min-width: 45%;
  width: max-content;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeaderTexts = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 20px;
  color: #000;

  & img {
    width: 120px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 60%;

    & h1 {
      font-size: 28px;
      font-weight: 600;
      font-family: var(--font--aboreto);
      line-height: 100%;
    }

    & p {
      font-size: 14px;
      font-weight: 400;
      width: 100%;
      line-height: 100%;
    }
  }

  
`;

const Name = ({ nome, descricao }) => {
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const timer = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setHidden(true);
      }

      lastScroll.current = currentScroll;

      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setHidden(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultorClick = () => {
    const formElement = document.getElementById("form");
    if (location.pathname.includes("/catalogo-de-casas")) {
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/catalogo-de-casas", { state: { scrollTo: "form" } });
    }
  };

  if (window.innerWidth > 768) {
    return (
      <Header hidden={hidden}>
        <HeaderTexts>
          <img 
            src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6d1a387d-eb9d-473b-dec5-bf229b9f0c00/public"
            alt="logo da fast homes casas modulares" 
            title="Logo da Fast Homes" 
            onClick={() => navigate('/')}/>
          <div>
            <h1>{nome}</h1>
            {/* <p>{descricao}</p> */}
          </div>
        </HeaderTexts>
        <HeaderBtns>
          <GlobalButton4
            text="Falar com um consultor"
            background1="#000"
            background2="#000"
            colorIcon="#fff"
            colorText="#fff"
            to="#form"
            onClick={handleConsultorClick}
          />
          <GlobalButton3
            text="Catálogo"
            background1="transparent"
            background2="transparent"
            colorIcon="#000"
            colorText="#000"
            border1="#000"
            border2="#000"
            to="/catalogo-de-casas"
          />
        </HeaderBtns>
      </Header>
    );
  }

  return null; // Se precisar manter o comportamento mobile, reaproveite o código original aqui.
};

export default Name;
