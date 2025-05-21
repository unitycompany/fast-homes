import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/pagination";
import CardSolucaoModular from "../../components/cards/CardSolucaoModular";
import GlobalButton2 from "../../components/buttons/GlobalButton2";
import { from } from "form-data";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  color: #fff;
  padding: 0 5%;
  background-color: var(--color--brown--very--high);
`;

const Conteudo = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Top = styled.div`
  text-align: center;

  & h1 {
    font-size: 32px;
    font-weight: 300;
    & b {
      font-weight: 500;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  & p {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.4;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Center = styled.div`
  position: relative;
  width: 100%;
`;

const ControlButtons = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  padding: 0 5%;
  transform: translateY(-50%);
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ControlButton = styled.button`
  background: #1d1d1d;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  & svg {
    width: 15px;
    height: 15px;
    fill: #fff;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Solucoes = () => {
  const swiperRef = useRef(null);

  return (
    <Content>
      <Conteudo>
        <Top>
          <h1>
            Soluções feitas <b>para você!</b>
          </h1>
          <p>
            Seja qual for sua necessidade, com a House Box, você terá mais do que
            uma casa: terá um espaço que se adapta ao seu sonho
          </p>
        </Top>

        <Center>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={false}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              769: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            <SwiperSlide>
              <CardSolucaoModular
                number="01"
                title="Moradia"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardSolucaoModular
                number="02"
                title="Locação"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardSolucaoModular
                number="03"
                title="Empresas"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit."
              />
            </SwiperSlide>

            <ControlButtons>
              <ControlButton onClick={() => swiperRef.current.slidePrev()}>
                <SlArrowLeft />
              </ControlButton>
              <ControlButton onClick={() => swiperRef.current.slideNext()}>
                <SlArrowRight />
              </ControlButton>
            </ControlButtons>
          </Swiper>
        </Center>

        <GlobalButton2
          text="Falar com um consultor"
          background1="#fff"
          background2="#fff"
          colorIcon="#000"
          colorText="#000"
          to="/#form"
        />
      </Conteudo>
    </Content>
  );
};

export default Solucoes;
