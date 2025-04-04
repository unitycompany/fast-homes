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
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  user-select: none;
  transition: background 0.3s ease;

  /* Esconde os pseudo-elementos padrões do Swiper */
  &::after {
    display: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.swiper-button-prev {
    left: 20px;
    & svg {
      font-size: 16px !important;
      width: 22px;
    }
  }
  &.swiper-button-next {
    right: 20px;
    & svg {
      font-size: 16px !important;
      width: 22px;
    }
  }
`;

// =============================
// Estilos para a Imagem (Thumbnail)
// =============================
const ZoomableImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
`;

// =============================
// Estilos para o Modal
// =============================
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Impede que cliques no conteúdo fechem o modal */
  cursor: default;
  &:click {
    pointer-events: none;
  }
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  transition: transform 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  z-index: 1000;
`;

// =============================
// Componente ZoomableModalImage (Zoom ativo apenas no modal)
// =============================
const ZoomableModalImage = ({ src, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const imageRef = useRef(null);
  const touchInitialDistanceRef = useRef(null);
  const initialScaleRef = useRef(scale);

  // Desabilita o scroll do site enquanto o modal estiver aberto
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setTransformOrigin(`${x}% ${y}%`);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const zoomSensitivity = 0.005;
    let newScale = scale - e.deltaY * zoomSensitivity;
    newScale = Math.min(Math.max(newScale, 1), 3);
    setScale(newScale);
  };

  const getDistance = (touch1, touch2) => {
    const dx = touch1.pageX - touch2.pageX;
    const dy = touch1.pageY - touch2.pageY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length >= 2) {
      const distance = getDistance(e.touches[0], e.touches[1]);
      touchInitialDistanceRef.current = distance;
      initialScaleRef.current = scale;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length >= 2 && touchInitialDistanceRef.current) {
      const distance = getDistance(e.touches[0], e.touches[1]);
      const ratio = distance / touchInitialDistanceRef.current;
      let newScale = initialScaleRef.current * ratio;
      newScale = Math.min(Math.max(newScale, 1), 3);
      setScale(newScale);
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      touchInitialDistanceRef.current = null;
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalImage
          ref={imageRef}
          src={src}
          alt={alt}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: transformOrigin,
          }}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </ModalContent>
    </ModalOverlay>
  );
};

// =============================
// Componente ZoomableImage (Thumbnail que abre o modal)
// =============================
const ZoomableImage = ({ src, alt }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = (e) => {
    e && e.stopPropagation();
    setModalOpen(false);
  };

  return (
    <>
      <ZoomableImageWrapper onClick={handleOpen}>
        <StyledImage src={src} alt={alt} />
      </ZoomableImageWrapper>
      {modalOpen &&
        createPortal(
          <ZoomableModalImage src={src} alt={alt} onClose={handleClose} />,
          document.body
        )}
    </>
  );
};

// =============================
// Componente CarrosselLP
// =============================
const CarrosselLP = ({ images, width, height }) => {
  return (
    <CarouselContainer width={width} height={height}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={false}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ZoomableImage src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

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
