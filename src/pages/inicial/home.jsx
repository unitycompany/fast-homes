import React, { useEffect, useState, useRef } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";


import GlobalButton2 from "../../components/buttons/GlobalButton2";
import GlobalButton3 from "../../components/buttons/GlobalButton3";
import { useLocation } from "react-router-dom";


const HomeContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 5% 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    overflow: hidden!important;
    font-family: "Montserrat", serif;
    background-position: center;
    background-size: cover;
    min-height: 100dvh;
    border-image: fill 0 linear-gradient(45deg, #000000, #0000);

    @media (max-width: 768px){
        padding: 30% 0 10% 0;
    }
`;

const HomeCenter = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    gap: 80px;
    height: auto;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 40px;
    }

`

const HomeTexts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5%;

    @media (max-width: 768px){
        width: 100%;
    }

    & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-family: var(--font--aboreto);
        padding-bottom: 15px;
        color: #fff;

        & > h2 {
            font-size: 20px;
            padding-left: 7.5px;
            font-weight: 200;
            line-height: 100%;
            font-family: var(--font--montserrat);
            text-transform: uppercase;

            & b {
              font-weight: 400;
            }

            @media (max-width: 768px){
                font-size: 16px;
            }
        }

        & > h1 {
            font-size: 80px;
            line-height: 100%;
            color: #fff;

            @media (max-width: 768px){
                font-size: 48px;
            }
        }
    }

    & > p {
        font-size: 16px;
        width: 40%;
        line-height: 120%;
        font-weight: 300;
        padding-bottom: 35px;
        color: #fff;

        @media (max-width: 768px){
          font-size: 14px;
          width: 95%;
        }
    }

    & > button {
        padding-bottom: 10px;
    }
    
`

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1; 

  &::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 2;
    clip-path: polygon(80% 98%, 0% 100%, 100% 100%);

    background-color: #fff;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;

  @media (max-width: 768px){
    top: 30%;
  }
`;

// Botão da seta anterior
const PrevButton = styled(ArrowButton)`
  left: 15px;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

// Botão da seta seguinte
const NextButton = styled(ArrowButton)`
  right: 15px;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;


const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  /* Paginação (Dots) */
  .swiper-pagination {
    bottom: 50px !important; 
    left: 85%!important;
    display: flex;
    gap: 2px; 

    @media (max-width: 768px){
      display: none;
    }
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: white;
    opacity: 0.6;
    transition: all 0.3s ease;
    border-radius: 50px;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
    width: 18px; /* Aumentar tamanho do ativo */
    height: 10px;
    opacity: 1;
  }

  /* Slides */
  .swiper-slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.8;
  }

  .swiper-slide-active {
    transform: scale(1.1); /* Aumenta um pouco o ativo */
    opacity: 1;
  }
`;

const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-image: fill 0 linear-gradient(45deg, #000000, #0000);
  transition: all .5s ease-in-out;
`;

const Home = () => {
    const [loadedImages, setLoadedImages] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);
    


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const casasQuery = query(collection(db, "catalogo"), orderBy("nome", "desc"), limit(5));
        const querySnapshot = await getDocs(casasQuery);
        const imagensArray = querySnapshot.docs
          .map(doc => doc.data().imagem) // Pegando apenas o campo de imagem
          .filter(img => img); // Filtrando para evitar imagens vazias ou undefined

        setLoadedImages(imagensArray);
      } catch (error) {
        console.error("Erro ao buscar imagens no Firebase:", error);
      }
    };

    fetchImages();
  }, []);

    return (
        <HomeContainer>
            <BackgroundWrapper>
              <StyledSwiper
                modules={[Autoplay, Pagination, EffectFade, Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  // Define as referências para os botões de navegação
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
              >
                {loadedImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <SlideImage  style={{ backgroundImage: `url(${img})`, height: "100%", backgroundSize: "cover", backgroundAttachment: "fixed" }} />
                  </SwiperSlide>
                ))}
              </StyledSwiper>

              <PrevButton ref={prevRef}>
                <SlArrowLeft size={24} color="#fff" />
              </PrevButton>
              <NextButton ref={nextRef}>
                <SlArrowRight size={24} color="#fff" />
              </NextButton>
            </BackgroundWrapper>

            <HomeCenter>
                <HomeTexts>
                    <div>
                        <h2 data-aos="fade-up" data-aos-delay="100">O novo <b>conceito de lar</b> é</h2>
                        <h1 data-aos="fade-up" data-aos-delay="400">Fast Homes</h1>
                    </div>
                    <p data-aos="fade-up-right" data-aos-delay="600">
                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos<br /> <br />

                        Colocar uma descrição curta e objetiva falando sobre a fast homes.
                    </p>
                    <GlobalButton2
                            text="Falar com um consultor"
                            background1="#fff"
                            background2="#fff"
                            colorIcon="#000"
                            colorText="#000"
                            to="/#form"
                    />
                    <GlobalButton3
                            text="Conhecer catálogo"
                            background1="transparent"
                            background2="transparent"
                            colorIcon="#fff"
                            colorText="#fff"
                            border1="#fff"
                            border2="#fff"
                            to="/catalogo-de-casas"
                    />
                </HomeTexts>
            </HomeCenter>
        </HomeContainer>
    );
};

export default Home;
