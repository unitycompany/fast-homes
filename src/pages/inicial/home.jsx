import React, { useEffect, useState, useRef } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import styled, { keyframes } from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import GlobalButton2 from "../../components/buttons/GlobalButton2";
import GlobalButton3 from "../../components/buttons/GlobalButton3";
import { useLocation, useNavigate } from "react-router-dom";

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
    width: 90%;
    max-width: 1280px;
    gap: 80px;
    height: auto;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 40px;
    }
`;

const HomeTexts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

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
`;

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

const Nome = styled.span`
  z-index: 100!important;
  position: absolute;
  right: 5%;
  top: 15%;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: #000;
  background-color: #ffffff50;
  backdrop-filter: blur(2px);
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 9000!important;
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

const PrevButton = styled(ArrowButton)`
  left: 20px;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const NextButton = styled(ArrowButton)`
  right: 30px;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

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
    width: 18px;
    height: 10px;
    opacity: 1;
  }

  .swiper-slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.8;
  }

  .swiper-slide-active {
    transform: scale(1.1);
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
    // Agora guardamos os dados completos da casa (nome, imagem, etc.)
    const [loadedCasas, setLoadedCasas] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

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
      const fetchCasas = async () => {
        try {
          // Ordena pela data "create" desc para pegar as casas mais recentes primeiro
          const casasQuery = query(
            collection(db, "catalogo"),
            orderBy("create", "desc"),
            limit(5)
          );
          const querySnapshot = await getDocs(casasQuery);
          const casasArray = querySnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() })) // Busca todos os dados
            .filter(casa => casa.imagem && casa.nome); // Garante que os campos existem
          setLoadedCasas(casasArray);
        } catch (error) {
          console.error("Erro ao buscar casas no Firebase:", error);
        }
      };

      fetchCasas();
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
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
              >
                {loadedCasas.map((casa, index) => (
                  <SwiperSlide key={index}>
                    <Nome>
                      {casa.nome}
                    </Nome>
                    <SlideImage
                      style={{ 
                        backgroundImage: `url(${casa.imagem})`,
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed"
                      }}
                    />
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
                        <h2 data-aos="fade-up" data-aos-delay="100">
                          Moderinadade e <b>bem estar</b>
                        </h2>
                        <h1 data-aos="fade-up" data-aos-delay="400">
                          Fast Homes
                        </h1>
                        <h2 data-aos="fade-up" data-aos-delay="100">
                          Um novo conceito de <b>lar</b>
                        </h2>
                    </div>
                    <p data-aos="fade-up-right" data-aos-delay="600">
                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos<br /><br />
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
