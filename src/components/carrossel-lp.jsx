import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
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

  svg {
    font-size: 16px;
    width: 22px;
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
`;

// =============================
// Componente CarrosselLP
// =============================
const CarrosselLP = ({ images = [], width, height }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // refs de navegação via state para garantir que estejam disponíveis
  const [mainPrevEl, setMainPrevEl] = useState(null);
  const [mainNextEl, setMainNextEl] = useState(null);
  const [modalPrevEl, setModalPrevEl] = useState(null);
  const [modalNextEl, setModalNextEl] = useState(null);

  // Bloqueia scroll do body quando modal aberto
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Quantidade de slides
  const hasMultiple = images.length > 1;

  return (
    <>
      <CarouselContainer width={width} height={height}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={hasMultiple}
          autoplay={false}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          navigation={{
            prevEl: mainPrevEl,
            nextEl: mainNextEl,
          }}
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
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCurrentSlide(idx);
                  setModalOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
              <CloseButton onClick={() => setModalOpen(false)}>
                &times;
              </CloseButton>
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                loop={hasMultiple}
                initialSlide={currentSlide}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                navigation={{
                  prevEl: modalPrevEl,
                  nextEl: modalNextEl,
                }}
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
                  <SwiperSlide
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      style={{
                        maxWidth: "100%",
                        minHeight: "100%",
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
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

export default CarrosselLP;
