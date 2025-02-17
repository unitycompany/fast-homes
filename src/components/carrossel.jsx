import React, { useEffect } from "react";
import styled from "styled-components";
// Import Swiper e módulos necessários
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules"; // para autoplay
import "swiper/css"; // CSS base do Swiper
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: var(--color--green--very--low);
  font-family: var(--font--montserrat);

  @media (max-width: 768px){
    height: 300px;
  }

  .swiper-slide {
    display: flex;
    height: 350px!important;
    gap: 10px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    @media (max-width: 768px){
      height: 300px!important;
      width: 100%;
    }

    & > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: 100%!important;
        width: 100%;
        overflow: hidden;
        position: relative;

        & > button {
          transform: scale(0);
          position: absolute;
          color: #fff;
          background-color: #00000020;
          padding: 8px 15px;
          backdrop-filter: blur(2px);
          z-index: 2;
          transition: all .4s ease-in-out;

          &:hover {
              background-color: var(--color--white);
              color: var(--color--black);
              cursor: pointer;
          }
        }

        &:hover > img {
          transform: scale(1.2) rotate(2deg);
        }

        &:hover > button {
          transform: scale(1);
        }
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all .5s ease-in-out;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
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


const Carrossel = () => {
  const navigate = useNavigate();

  return (
    <>
        <Container data-aos="fade-in">
        <Swiper
            modules={[Autoplay, FreeMode, Pagination]} 
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false, 
                reverseDirection: true,
            }}
            spaceBetween={0} 
            slidesPerView={4} 
            freeMode={false}
            speed={2500} 
            pagination={false} 
            breakpoints={{
            0: {
                slidesPerView: 1, 
                spaceBetween: 0,
            },
            1080: {
                slidesPerView: 4,
                spaceBetween: 0, 
                },
            }}
        >
            <SwiperSlide>
            <div>
                <button onClick={() => navigate('/catalogo-de-casas')}>
                  Conhecer Casa
                </button>
                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public" alt="" />
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
               <button onClick={() => navigate('/catalogo-de-casas')}>
                  Conhecer Casa
                </button>
                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public" alt="" />
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <button onClick={() => navigate('/catalogo-de-casas')}>
                  Conhecer Casa
                </button>
                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public" alt="" />
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
               <button onClick={() => navigate('/catalogo-de-casas')}>
                  Conhecer Casa
                </button>
                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public" alt="" />
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <button onClick={() => navigate('/catalogo-de-casas')}>
                  Conhecer Casa
                </button>
                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1b4765-6b9d-42ed-fddf-71cb28fb9700/public" alt="" />
            </div>
            </SwiperSlide>
        </Swiper>
        </Container>

    </>
  );
};

export default Carrossel;
