import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper as _Swiper, SwiperSlide as _Slide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// =============================
// Estilos do Carrossel
// =============================
const CarouselContainer = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "400px"};
  position: relative;
  overflow: hidden;
`;

// Botões de navegação
const NavButton = styled.aside`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  user-select: none;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 1);
  }

  &.prev {
    left: 20px;
  }
  &.next {
    right: 20px;
  }
`;

// Rótulo de pavimento
const FloorLabel = styled.span`
  position: absolute;
  top: 5%;
  left: 2.5%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-family: var(--font--aboreto);
  z-index: 100;

  @media (max-width: 768px){
    left: 50%;
    transform: translateX(-50%);
    top: 0%;
  }
`;

// =============================
// Estilos para Modal
// =============================
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 90%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 102;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px){
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #000;
  }
`;

// =============================
// Swiper estilizado
// =============================
const StyledSwiper = styled(_Swiper)`
  width: 100%;
  height: 100%;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    color: #fff;
    transition: background 0.3s ease;
  }
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.7;
    width: 12px;
    height: 12px;
    margin: 0 4px !important;
    transition: opacity 0.3s, transform 0.3s;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const StyledSlide = styled(_Slide)`
  padding: 0 5px;
`;

// =============================
// Componente CarrosselLP
// =============================
const CarrosselLPPlanta = ({ images = [], width, height }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mainPrevEl, setMainPrevEl] = useState(null);
  const [mainNextEl, setMainNextEl] = useState(null);
  const [modalPrevEl, setModalPrevEl] = useState(null);
  const [modalNextEl, setModalNextEl] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [modalOpen]);

  const hasMultiple = images.length > 1;

  // Função para rótulo do piso
  const getFloorLabel = (index) => {
    if (index === 0) return "Térreo";
    return `${index}º Pavimento`;
  };

  return (
    <>
      <CarouselContainer width={width} height={height}>
        <StyledSwiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={hasMultiple}
          autoplay={false}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          navigation={{ prevEl: mainPrevEl, nextEl: mainNextEl }}
          onSwiper={(swiper) => {
            if (hasMultiple && mainPrevEl && mainNextEl) {
              swiper.params.navigation.prevEl = mainPrevEl;
              swiper.params.navigation.nextEl = mainNextEl;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
        >
          {images.map((img, idx) => (
            <StyledSlide key={idx}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => { setCurrentSlide(idx); setModalOpen(true); }}
                />
                {/* Rótulo de piso */}
                <FloorLabel>{getFloorLabel(idx)}</FloorLabel>
              </div>
            </StyledSlide>
          ))}
        </StyledSwiper>

        {hasMultiple && (
          <>
            <NavButton ref={setMainPrevEl} className="prev">
              <BsChevronLeft />
            </NavButton>
            <NavButton ref={setMainNextEl} className="next">
              <BsChevronRight />
            </NavButton>
          </>
        )}
      </CarouselContainer>

      {modalOpen &&
        createPortal(
          <ModalOverlay onClick={() => setModalOpen(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setModalOpen(false)}>&times;</CloseButton>
              <StyledSwiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                loop={hasMultiple}
                initialSlide={currentSlide}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                navigation={{ prevEl: modalPrevEl, nextEl: modalNextEl }}
                onSwiper={(swiper) => {
                  if (hasMultiple && modalPrevEl && modalNextEl) {
                    swiper.params.navigation.prevEl = modalPrevEl;
                    swiper.params.navigation.nextEl = modalNextEl;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                }}
              >
                {images.map((img, idx) => (
                  <StyledSlide key={idx}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <img
                        src={img}
                        alt={`Slide ${idx + 1}`}
                        style={{
                          objectFit: 'contain',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                          borderRadius: '10px',
                        }}
                      />
                      <FloorLabel>{getFloorLabel(idx)}</FloorLabel>
                    </div>
                  </StyledSlide>
                ))}
              </StyledSwiper>
              {hasMultiple && (
                <>
                  <NavButton ref={setModalPrevEl} className="prev">
                    <BsChevronLeft />
                  </NavButton>
                  <NavButton ref={setModalNextEl} className="next">
                    <BsChevronRight />
                  </NavButton>
                </>
              )}
            </ModalContent>
          </ModalOverlay>,
          document.body
        )}
    </>
  );
};

export default CarrosselLPPlanta;
