import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalButton3 from "../../../components/buttons/GlobalButton3";
import GlobalButton4 from "../../../components/buttons/GlobalButton4";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegTimesCircle, FaRegCircle } from "react-icons/fa";

const Header = styled.div`
  position: fixed;
  max-width: 1280px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5% 5%;
  background: #ffffff70;
  backdrop-filter: blur(10px);
  transition: transform 0.5s ease-in-out, scale 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 5% 5%;
    gap: 20px;
    height: 250px;
    /* O Header permanece inalterado */
    top: 0;
    left: 50%;
    transform: translateY(0) translateX(-50%);
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
  text-align: right;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  color: #000;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  & h1 {
    font-size: 28px;
    font-weight: 600;
    font-family: var(--font--aboreto);
    line-height: 100%;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    width: 70%;
    line-height: 100%;
  }
`;

// O MobileToggleButton recebe a prop isOpen para alterar sua posição
const MobileToggleButton = styled.button`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "250px" : "0px")};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${({isOpen}) => (isOpen ? "1" : "100")};
  background: #ffffff70;
  backdrop-filter: blur(10px);
  padding: 5px 10px;
  color: #000;
  border: none;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
  transition: top 0.2s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Name = ({ nome, descricao }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileInfoVisible, setIsMobileInfoVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detecta se o dispositivo é mobile (<= 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  if (!isMobile) {
    return (
      <Header>
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
        <HeaderTexts>
          <h1>{nome}</h1>
          <p>{descricao}</p>
        </HeaderTexts>
      </Header>
    );
  }

  return (
    <>
      <MobileToggleButton
        onClick={() => setIsMobileInfoVisible((prev) => !prev)}
        isOpen={isMobileInfoVisible}
      >
        {isMobileInfoVisible ? <FaRegTimesCircle /> : <FaRegCircle />}
      </MobileToggleButton>
      {isMobileInfoVisible && (
        <Header>
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
          <HeaderTexts>
            <h1>{nome}</h1>
            <p>{descricao}</p>
          </HeaderTexts>
        </Header>
      )}
    </>
  );
};

export default Name;
