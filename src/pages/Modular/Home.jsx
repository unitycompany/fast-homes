// src/pages/Home.jsx

import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import CardModular from "../../components/cards/CardModular";
import VideoModular from "../../components/cards/VideoModular";

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  padding: 10% 5% 0 5%;

  @media (max-width: 768px) {
    padding: 25% 5% 0 5%;
    gap: 30px;

  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  & h1 {
    font-size: 36px;
    font-weight: 300;
    line-height: 100%;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    & b {
      font-weight: 500;
    }
  }

  & p {
    font-size: 18px;
    line-height: 120%;
    width: 80%;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 16px;
      line-height: 110%;
    }
  }
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* garante overflow para as setas do Splide */
  .my-splide {
    position: relative;
    overflow: visible;
    width: 100%;
  }

  .my-splide .splide__arrows {
    overflow: visible;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    pointer-events: none;
    z-index: 2;

    @media (max-width: 768px) {
      width: 80%;
      left: 10%;
    }
  }

  /* estilização das setas */
  .my-splide .splide__arrow {
    position: absolute;
    top: 50%;
    width: 2rem;
    height: 2rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: opacity 0.3s;
    z-index: 10;
    pointer-events: auto;
  }

  /* seta prev totalmente fora à esquerda */
  .my-splide .splide__arrow--prev {
    left: -10px;
    transform: translate(-100%, -50%);
  }

  /* seta next totalmente fora à direita */
  .my-splide .splide__arrow--next {
    right: -10px;
    transform: translate(100%, -50%);
  }

  .my-splide .splide__arrow.is-disabled {
    opacity: 0.3;
    cursor: default;
  }
  .my-splide .splide__arrow:not(.is-disabled):hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  & article {
    width: 100%;
    display: flex;
    position: relative;
    gap: 15px;

    &:nth-child(1){
        width: 65%;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
      gap: 10px;
    }
  }
`;

const Home = () => (
  <Content>
    <Top>
      <h1>
        Uma nova <b>forma de construir</b>
      </h1>
      <p>
        Com a Fast Homes e a House Box, você recebe a sua casa pronta direto no
        seu terreno em tempo recorde.
      </p>
    </Top>

    <Center>
      <article>
        <VideoModular />
      </article>
      <article>
        <Splide
          options={{
            type: 'slide',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: true,
            breakpoints: {
              768: { perPage: 1 },
            },
          }}
          className="my-splide"
        >
          <SplideSlide>
            <CardModular
              icon="house"
              titulo="Entrega rápida direto no seu terreno"
              descricao="Construída em tempo recorde, sua casa chega pronta para morar. Obras demoradas e caras não são realidade por aqui."
            />
          </SplideSlide>
          <SplideSlide>
            <CardModular
              icon="brush"
              titulo="Design moderno e funcional"
              descricao="Ambientes planejados para otimizar o espaço e garantir o seu bem-estar no dia a dia."
            />
          </SplideSlide>
          <SplideSlide>
            <CardModular
              icon="pen"
              titulo="Construção mais limpa e sustentável"
              descricao="O Steel Frame já é o presente da construção civil: menos desperdícios, menos resíduos e mais responsabilidade."
            />
          </SplideSlide>
          <SplideSlide>
            <CardModular
              icon="truck"
              titulo="Qualidade e tecnologia unidas"
              descricao="Padrão Fast Homes com inovação House Box do projeto ao acabamento."
            />
          </SplideSlide>
        </Splide>
      </article>
    </Center>
  </Content>
);

export default Home;
