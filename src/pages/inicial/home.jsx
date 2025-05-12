import React, { useEffect, useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import GlobalButton3 from "../../components/buttons/GlobalButton3";
import { useLocation, useNavigate } from "react-router-dom";

// =============================
// Styled Components
// =============================
const HomeContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 5% 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden !important;
  font-family: "Montserrat", serif;
  min-height: 100dvh;
  background-color: transparent;

  @media (max-width: 768px) {
    padding: 30% 0 0 0;
    min-height: 100dvh;
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  @media (max-width: 768px) {
    height: 70dvh;
    object-position: center;
    z-index: 1!important;
  }
`;

const StyledSplide = styled(Splide)`
  width: 100%;
  height: 100%;

  .splide__track,
  .splide__list,
  .splide__slide {
    height: 100% !important;
  }

  .splide__pagination {
    bottom: 50px !important;
    left: 85% !important;
    display: flex;
    gap: 2px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .splide__pagination__page {
    width: 10px;
    height: 10px;
    background: white;
    opacity: 0.6;
    transition: all 0.3s ease;
    border-radius: 50px;
  }

  .splide__pagination__page.is-active {
    width: 18px;
    height: 10px;
    opacity: 1;
  }

  .splide__slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.8;
  }

  .splide__slide.is-active {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &::before {
    content: "";
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-image: fill 0 linear-gradient(90deg, #000, #0000);

    @media (max-width: 768px) {
      display: none;
    }
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    height: auto;
    width: 100%;
    padding: 10% 5%;
    z-index: 2;
    background: linear-gradient(45deg, #000, #1f1f1f);
  }
`;

const HomeTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
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
      padding-left: 2.5px;
      font-weight: 200;
      line-height: 100%;
      font-family: var(--font--montserrat);
      text-transform: uppercase;

      & b {
        font-weight: 400;
      }

      @media (max-width: 768px) {
        font-size: 16px;
        padding-left: 0;
      }
    }

    & > h1 {
      font-size: 80px;
      line-height: 100%;
      margin-left: -4px;
      color: #fff;

      @media (max-width: 768px) {
        font-size: 48px;
        margin-left: -4px;
      }
    }
  }

  & > p {
    font-size: 16px;
    width: 50%;
    line-height: 120%;
    font-weight: 300;
    padding-bottom: 35px;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 14px;
      width: 95%;
    }
  }

  & > button {
    padding-bottom: 10px;
  }
`;

const Nome = styled.span`
  z-index: 100 !important;
  position: absolute;
  right: 5%;
  top: 15%;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: #000;
  background-color: #ffffff50;
  backdrop-filter: blur(2px);

  @media (max-width: 768px) {
    top: 22.5%;
    background-color: #00000050;
    color: #fff;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 9000 !important;
  background: transparent;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;

  @media (max-width: 768px) {
    top: 60%;
    opacity: 0.8;
  }

  &:hover {
    opacity: 1;
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 20px;

  @media (max-width: 768px) {
    background-color: #000;
    color: #fff;
    padding: 5px;
    border-radius: 10px;
  }
`;

const NextButton = styled(ArrowButton)`
  right: 30px;

  @media (max-width: 768px) {
    right: 20px;
    background-color: #000;
    color: #fff;
    padding: 5px;
    border-radius: 10px;
  }
`;

// =============================
// Componente Home
// =============================
const Home = () => {
  const [loadedCasas, setLoadedCasas] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const splideRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const fetchCasas = async () => {
      try {
        const casasQuery = query(
          collection(db, "catalogo"),
          orderBy("create", "desc"),
          limit(5)
        );
        const snap = await getDocs(casasQuery);
        const casas = snap.docs
          .map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              nome: data.nome,
              slug: data.slug,            // <— aqui pegamos o slug
              imagem: data.imagem,
              imagemMobile: data.imagemMobile,
            };
          })
          .filter((c) => c.nome && c.slug && c.imagem);
        setLoadedCasas(casas);
      } catch (error) {
        console.error("Erro ao buscar casas no Firebase:", error);
      }
    };
    fetchCasas();
  }, []);

  return (
    <HomeContainer>
      <BackgroundWrapper>
        <StyledSplide
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: false,
            resetProgress: false,
            pagination: true,
            arrows: false,
            drag: false,
          }}
          onMounted={(splide) => {
            splideRef.current = splide;
          }}
        >
          {loadedCasas.map((casa, idx) => {
            const bgUrl =
              isMobile && casa.imagemMobile ? casa.imagemMobile : casa.imagem;
            return (
              <SplideSlide key={casa.id || idx}>
                <Nome>{casa.nome}</Nome>
                <SlideImage
                  onClick={() => navigate(`/catalogo-de-casas/${casa.slug}`)}  // <— navegação via slug
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                    backgroundAttachment: isMobile ? "scroll" : "fixed",
                  }}
                />
              </SplideSlide>
            );
          })}
        </StyledSplide>

        <PrevButton onClick={() => splideRef.current && splideRef.current.go("<")}>
          <SlArrowLeft size={24} color="#fff" />
        </PrevButton>
        <NextButton onClick={() => splideRef.current && splideRef.current.go(">")}>
          <SlArrowRight size={24} color="#fff" />
        </NextButton>
      </BackgroundWrapper>

      <HomeCenter>
        <HomeTexts>
          <div>
            <h2 data-aos="fade-up" data-aos-delay="100">
              Modernidade e <b>bem-estar</b>
            </h2>
            <h1 data-aos="fade-up" data-aos-delay="400">
              Fast Homes
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="100">
              Um novo conceito de <b>lar</b>
            </h2>
          </div>
          {/* <p data-aos="fade-up-right" data-aos-delay="600">
            Na Fast Homes, acreditamos que o seu novo lar deve refletir o seu estilo de vida: confortável, moderno e prático. Por isso, projetamos casas que unem construção eficiente, design exclusivo e qualidade superior, criando espaços que refletem cuidado, tecnologia e estética.
            <br/>
            <br/>
            Descubra um novo conceito de lar com a Fast Homes.
          </p> */}
          <GlobalButton3
            text="Ver o catálogo"
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
