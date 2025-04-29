import React, { useState, useRef, useEffect } from "react";
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

  &::after { display: none; }
  &:hover { background: rgba(0, 0, 0, 1); }

  &.prev { left: 20px; }
  &.next { right: 20px; }

  svg { font-size: 16px; width: 22px; }
`;

// =============================
// Estilos para Modal
// =============================
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
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
  background: rgba(0,0,0,0.7);
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
    top: 30%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
  }
`;

// =============================
// Componente CarrosselLP
// =============================
const CarrosselLP = ({ images, width, height }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // refs p/ navegação
  const mainPrevRef = useRef(null);
  const mainNextRef = useRef(null);
  const modalPrevRef = useRef(null);
  const modalNextRef = useRef(null);

  // Bloqueia scroll do body quando modal aberto
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <>
      <CarouselContainer width={width} height={height}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={false}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          navigation={{
            prevEl: mainPrevRef.current,
            nextEl: mainNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = mainPrevRef.current;
            swiper.params.navigation.nextEl = mainNextRef.current;
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} onClick={() => { setCurrentSlide(idx); setModalOpen(true); }}>
              <img src={img} alt={`Slide ${idx + 1}`} style={{ width: "100%", minHeight: "100%", objectFit: "cover", borderRadius: "10px" }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <NavButton ref={mainPrevRef} className="prev"><BsChevronLeft /></NavButton>
        <NavButton ref={mainNextRef} className="next"><BsChevronRight /></NavButton>
      </CarouselContainer>

      {modalOpen && createPortal(
        <ModalOverlay onClick={() => setModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setModalOpen(false)}>&times;</CloseButton>
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              initialSlide={currentSlide}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              navigation={{
                prevEl: modalPrevRef.current,
                nextEl: modalNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = modalPrevRef.current;
                swiper.params.navigation.nextEl = modalNextRef.current;
              }}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={`Slide ${idx + 1}`} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "10px" }} />
                </SwiperSlide>
              ))}
            </Swiper>
            <NavButton ref={modalPrevRef} className="prev"><BsChevronLeft /></NavButton>
            <NavButton ref={modalNextRef} className="next"><BsChevronRight /></NavButton>
          </ModalContent>
        </ModalOverlay>,
        document.body
      )}
    </>
  );
};

export default CarrosselLP;
