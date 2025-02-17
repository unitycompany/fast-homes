import React, { useEffect } from "react";
import styled from "styled-components";
// Import Swiper e módulos necessários
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules"; // para autoplay
import "swiper/css"; // CSS base do Swiper
import "swiper/css/pagination";
import Carrossel from "./carrossel";

const Container = styled.div`
  width: 100%;
  height: 7.5vh;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: var(--color--green--very--low);
  font-family: var(--font--montserrat);

  @media (max-width: 768px){
    height: 7vh;
  }

  .swiper-slide {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    & > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    img {
      object-fit: contain;
      width: 25px;
      height: 25px;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }

    h3 {
      font-size: 20px;
      font-weight: 400;
      color: var(--color--white);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;


const Faixa = () => {

  return (
    <>
        <Container data-aos="fade-in">
        <Swiper
            modules={[Autoplay, FreeMode, Pagination]} 
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false, 
            }}
            spaceBetween={50} 
            slidesPerView={4} 
            freeMode={true}
            speed={2500} 
            pagination={false} 
            breakpoints={{
            0: {
                slidesPerView: 2, 
                spaceBetween: 40,
            },
            1080: {
                slidesPerView: 4,
                spaceBetween: 10, 
                },
            }}
        >
            <SwiperSlide>
            <div>
                <h3>Solicite um orçamento</h3>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <h3>Solicite um orçamento</h3>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <h3>Solicite um orçamento</h3>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <h3>Solicite um orçamento</h3>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <h3>Solicite um orçamento</h3>
            </div>
            </SwiperSlide>
        </Swiper>
        </Container>

        <Carrossel />

    </>
  );
};

export default Faixa;
