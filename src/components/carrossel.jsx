import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { db } from "../services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font--montserrat);
  background-color: #000;

  .swiper {
    width: 100%;
    height: 350px;

    @media (max-width: 768px){
      height: 300px;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    transition: opacity 0.2s ease-in-out;

    div {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease-in-out;
    }

    button {
      position: absolute;
      bottom: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
      padding: 8px 10px;
      backdrop-filter: blur(2px);
      font-size: 12px;
      z-index: 5;
      transition: all 0.4s ease-in-out;
      transform: scale(0);
      cursor: pointer;

      &:hover {
        background-color: #fff;
        color: #000;
      }
    }

    &:hover img {
      transform: scale(1.1);
    }

    &:hover button {
      bottom: 50%;
      transform: scale(1) translateY(50%);
    }

    span {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: #fff;
      font-size: 12px;
      padding: 5px 10px;
      cursor: default;
      text-shadow: 0 0 10px #000000;
      font-weight: 500;
    }
  }

  /* Aplica opacidade reduzida nos slides que não estão em hover */
  .swiper-slide.dimmed {
    opacity: 0.2;
  }
`;

const Carrossel = ({ category }) => {
  const [casas, setCasas] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCasas = async () => {
      try {
        const casasRef = collection(db, "imagens");
        const casasQuery = query(casasRef, where("category", "==", category));
        const querySnapshot = await getDocs(casasQuery);

        let casasArray = [];
        querySnapshot.forEach((doc) => {
          casasArray.push({ id: doc.id, ...doc.data() });
        });

        setCasas(casasArray.sort(() => 0.5 - Math.random()).slice(0, 6));
      } catch (error) {
        console.error("Erro ao buscar imagens do Firebase:", error);
      }
    };

    fetchCasas();
  }, [category]);

  return (
    <Container data-aos="zoom-in" data-aos-delay="100">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        spaceBetween={0}
        slidesPerView={4}
        speed={2500}
        pagination={false}
        navigation={false}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 0 },
          1080: { slidesPerView: 4, spaceBetween: 0 },
        }}
      >
        {casas.length === 0 ? (
          <p>Carregando imagens...</p>
        ) : (
          casas.map((casa, index) => (
            <SwiperSlide
              key={casa.id}
              className={hoveredIndex !== null && hoveredIndex !== index ? "dimmed" : ""}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <button onClick={() => navigate(casa.destinationUrl)}>
                  Conhecer Casa
                </button>
                {casa.imageUrl ? (
                  <img src={casa.imageUrl} alt={casa.name} loading="lazy"/>
                ) : (
                  <p>Imagem não disponível</p>
                )}
                <span>{casa.name}</span>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Container>
  );
};

export default Carrossel;
