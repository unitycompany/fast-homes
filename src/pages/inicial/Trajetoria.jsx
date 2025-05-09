import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CardTrajetoria from "../../components/cards/CardTrajetoria";
import GlobalButton3 from "../../components/buttons/GlobalButton3";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  padding: 5% 5%;
  max-width: 1280px;
  position: relative;
  width: 100%;
  height: auto;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden !important;

  @media (max-width: 768px) {
    gap: 50px;
    padding: 5%;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scale(1.4) translateX(0);
    opacity: 0.02;
    background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5747517e-c1c9-4ad6-3cbe-0dcb2e775e00/public');
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const Top = styled.div`
  display: contents;
  text-align: center;

  & h1 {
    font-size: 38px;
    line-height: 100%;
    font-family: var(--font--montserrat);
    width: 50%;
    font-weight: 300;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 28px;
    }

    & b {
      font-weight: 500;
      color: transparent;
      background: linear-gradient(90deg, #000000, #444344);
      -webkit-background-clip: text;
    }
  }

  & p {
    width: 60%;
    line-height: 100%;
    font-size: 16px;
    margin-top: -70px;

    @media (max-width: 768px) {
      width: 95%;
      margin-top: -30px;
    }
  }
`;

// Wrapper to maintain the divider line as before
const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: #00000050;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Button = styled.button``;

const Trajetoria = () => {
  const splideOptions = {
    type: 'slide',        // no loop
    perPage: 3,
    perMove: 1,
    gap: '20px',
    arrows: true,
    pagination: false,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  };

  return (
    <Content>
      <Top>
        <h1 data-aos="fade-up" data-aos-delay="100">
          Sua jornada com a <b>Fast Homes</b>
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          Aqui, cada etapa é pensada para tornar a experiência de ter o seu “Lar, doce lar” sem complicações.
          <br />
          <br />
          Veja como funciona o processo até a entrega da chave:
        </p>
      </Top>

      <CardsWrapper>
        <Splide options={splideOptions}>
          <SplideSlide>
            <CardTrajetoria
              animateDelay="50"
              color="#576628"
              numero="1"
              assunto="Escolha"
              descricao={`Tudo começa com a escolha do modelo que mais combina com você.
              Nossos projetos foram pensados para atender a diferentes estilos de vida e necessidades.
              Escolha entre as nossas casas prontas — ou traga o seu projeto para darmos vida ao lar ideal para você e sua família.`}
            />
          </SplideSlide>

          <SplideSlide>
            <CardTrajetoria
              animateDelay="200"
              color="#B05216"
              numero="2"
              assunto="Bate-papo"
              descricao={`Queremos entender o seu estilo de vida, os seus desejos e o que é prioridade para você.
              É nesse momento que alinhamos todos os detalhes: ouvimos suas expectativas, suas necessidades e reunimos todas as informações para garantir que o seu novo lar seja, exatamente, como você imaginou.`}
            />
          </SplideSlide>

          <SplideSlide>
            <CardTrajetoria
              animateDelay="350"
              color="#603813"
              numero="3"
              assunto="Pagamento"
              descricao={`Facilitamos as condições de pagamento para caber no seu planejamento.
              Apresentamos todos os detalhes técnicos, prazos e valores de forma clara, com total transparência.
              Aqui, temos todo o cuidado para garantir segurança e previsibilidade ao seu projeto.`}
            />
          </SplideSlide>

          <SplideSlide>
            <CardTrajetoria
              animateDelay="500"
              color="#1d1b1d"
              numero="4"
              assunto="Entrega"
              descricao={`Com o padrão Fast Homes de qualidade do início ao fim, construímos sua nova casa em tempo recorde.
              Tudo para que você receba o seu novo lar no prazo e sem complicações.`}
            />
          </SplideSlide>

          <SplideSlide>
            <CardTrajetoria
              animateDelay="500"
              color="#1d1b1d"
              numero="5"
              assunto="Feedback"
              descricao={`Queremos saber como foi sua experiência.
Após a entrega, seu feedback nos permite aprimorar nossos projetos e assegurar que cada casa da Fast Homes seja referência em qualidade e satisfação.`}
            />
          </SplideSlide>
        </Splide>
      </CardsWrapper>

      <Button data-aos="fade-up" data-aos-delay="100">
        <GlobalButton3
          text="Conversar com um consultor"
          background1="transparent"
          background2="transparent"
          colorIcon="#000"
          colorText="#000"
          border1="#000"
          border2="#000"
          to="/#form"
        />
      </Button>
    </Content>
  );
};

export default Trajetoria;
