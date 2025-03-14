import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import GlobalButton3 from "../../components/buttons/GlobalButton3";
import CardCatalogo from "../../components/cards/CardCatalogo01";
import CardCatalogo2 from "../../components/cards/CardCatalogo02";
import Filtro from "../../components/filtro";

const moveBackground = keyframes`
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: -20px -20px;
    }
    100% {
        background-position: 0 0;
    }
`;

const CatalogoContainer = styled.section`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: "Montserrat", serif;
    flex-direction: column;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    width: 100%;
    padding: 40px 0;

    @media (max-width: 768px){
        padding: 5% 0;
        gap: 40px;
    }
`

const CatalogoBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fff;

    --gap: 10em;
    --line: 1px;
    --color: rgba(0, 0, 0, 0.05);
    z-index: -2;

    background-image: linear-gradient(
        -90deg,
        transparent calc(var(--gap) - var(--line)),
        var(--color) calc(var(--gap) - var(--line) + 1px),
        var(--color) var(--gap)
        ),
        linear-gradient(
        0deg,
        transparent calc(var(--gap) - var(--line)),
        var(--color) calc(var(--gap) - var(--line) + 1px),
        var(--color) var(--gap)
        );

    background-size: var(--gap) var(--gap);
    animation: ${moveBackground} 10s infinite alternate ease-in-out;
`;

const CatalogoTop = styled.div`
    padding: 0% 5% 3% 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }


    & > h1 {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;
        font-size: 35px;
        font-family: var(--font--aboreto);
        line-height: 100%;

        @media (max-width: 768px){
            text-align: left;
            display: none;
            font-size: 30px;
        }

        & > a {
            color: var(--color--green--very--low);
            border-bottom: 1px solid var(--color--green--very--low);
            transition: all .4s ease;

            @media (max-width: 768px){
                border: none;
                margin-left: 5px;
            }    

            &:hover {
                color: var(--color--green--medium);
                cursor: pointer;
                transform: scale(0.98);
            }
        }
    }
`

const CatalogoCards = styled.div`
    position: relative;
    width: 100%;
    padding: 3% 5% 1% 5%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;

    @media (max-width: 768px){
        padding-bottom: 50px;
        padding-top: 20px;
    }
`;

const StyledSwiper = styled(Swiper)`
    width: 100%;
    display: flex;
`

const CatalogoItems = styled.div`
    width: 100%;

    @media (max-width: 768px){
        width: 95%;
    }
`

const Catalogo = () => {
    const [casas, setCasas] = useState([]);
    const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const fetchCasas = async () => {
      try {
        const casasQuery = query(collection(db, "catalogo"), orderBy("nome", "desc"), limit(4));
        const querySnapshot = await getDocs(casasQuery);
        const casasArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCasas(casasArray);
      } catch (error) {
        console.error("Erro ao buscar casas no Firebase:", error);
      }
    };

    fetchCasas();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define o breakpoint para mobile
    };

    handleResize(); // Verifica o tamanho inicial
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <>
            <CatalogoContainer>
                <CatalogoBackground />

                <CatalogoItems>
                    <Filtro />
                    
                    {isMobile ? (
                        <StyledSwiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true }}>
                        {casas.map((casa) => (
                            <SwiperSlide key={casa.id}>
                            <CardCatalogo
                                titulo={casa.nome}
                                area={casa.area}
                                largura={casa.largura}
                                lote={casa.lote}
                                imagem={casa.imagem}
                            />
                            </SwiperSlide>
                        ))}
                        </StyledSwiper>
                    ) : (
                        <CatalogoCards>
                        {casas.map((casa, index) =>
                            index < 2 ? (
                            <CardCatalogo
                                key={casa.id}
                                titulo={casa.nome}
                                area={casa.area}
                                largura={casa.largura}
                                lote={casa.lote}
                                imagem={casa.imagem}
                                slug={casa.slug}
                            />
                            ) : (
                            <CardCatalogo2
                                key={casa.id}
                                titulo={casa.nome}
                                area={casa.area}
                                largura={casa.largura}
                                lote={casa.lote}
                                imagem={casa.imagem}
                                slug={casa.slug}
                            />
                            )
                        )}
                        </CatalogoCards>
                    )}

                    <CatalogoTop>
                        <h1>
                            Nosso  
                            <a href="/catalogo-de-casas">
                                Catálogo de casas
                            </a>
                        </h1>

                        <GlobalButton3
                                text="Conhecer catálogo"
                                background1="transparent"
                                background2="transparent"
                                colorIcon="#000"
                                colorText="#000"
                                border1="#000"
                                border2="#000"
                                to="/catalogo-de-casas"
                        />

                    </CatalogoTop>
                </CatalogoItems>
                
                

            </CatalogoContainer>
        </>
    )
}

export default Catalogo;