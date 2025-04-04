import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { delay } from "framer-motion";

// 🎨 Estilos personalizados
const CarouselContainer = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "400px"};
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const NavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100 !important;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  user-select: none;
  transition: 0.3s;

  /* Removendo o pseudo-elemento padrão do Swiper */
  &::after {
    display: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.swiper-button-prev {
    left: 20px;
    width: auto;
  }
  &.swiper-button-next {
    right: 20px;
    width: auto;
  }
`;



const CarrosselLP = ({ images, width, height }) => {
  return (
    <CarouselContainer width={width} height={height} data-aos="fade-up" data-aos-delay="100">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de Navegação Customizados */}
      <NavButton className="swiper-button-prev">
        <BsChevronLeft />
      </NavButton>
      <NavButton className="swiper-button-next">
        <BsChevronRight />
      </NavButton>
    </CarouselContainer>
  );
};

export default CarrosselLP;