import React from "react";
import styled, { keyframes } from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import GlobalButton3 from "../../components/buttons/GlobalButton3";
import CardCatalogo from "../../components/cards/CardCatalogo01";
import CardCatalogo2 from "../../components/cards/CardCatalogo02";

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
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    font-family: "Montserrat", serif;
    flex-direction: column;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
        pointer-events: none;
        z-index: -1;
    }

    @media (max-width: 768px){
        padding: 30% 0 20% 0;
    }
`

const CatalogoBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fff;

    --gap: 2em;
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
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    width: 100%;
    padding: 2.5% 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > h1 {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;
        font-size: 35px;
        font-family: var(--font--aboreto);
        line-height: 100%;

        & > a {
            color: var(--color--green--very--low);
            border-bottom: 1px solid var(--color--green--very--low);
            transition: all .4s ease;

            &:hover {
                color: var(--color--green--medium);
                cursor: pointer;
                transform: scale(0.98);
            }
        }
    }
`

const CatalogoCards = styled.div`
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    width: 100%;
    padding: 2.5% 5%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    padding-bottom: 80px;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 400px;
        height: 100%;
        background: linear-gradient(to left, #fff, rgba(255, 255, 255, 0));
        pointer-events: none;
        z-index: 2;
    }
`;

const StyledSwiper = styled(Swiper)`
    width: 100%;
    display: flex;
`

const CatalogoCardContainer = styled.div`
`

const CatalogoItems = styled.div`
`

const Catalogo = () => {
    return (
        <>
            <CatalogoContainer>
                <CatalogoBackground />

                <CatalogoItems>
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
                        />

                    </CatalogoTop>

                    <CatalogoCards>
                        <StyledSwiper
                            slidesPerView={2}
                            spaceBetween={20}
                            loop={true}
                            speed={4000}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                            }}
                            modules={[Autoplay]}
                        >
                            <SwiperSlide>
                                <CatalogoCardContainer>
                                    <CardCatalogo />
                                    <CardCatalogo2 />
                                </CatalogoCardContainer>
                            </SwiperSlide>

                            <SwiperSlide>
                                <CatalogoCardContainer>
                                    <CardCatalogo />
                                    <CardCatalogo2 />
                                </CatalogoCardContainer>
                            </SwiperSlide>

                            <SwiperSlide>
                                <CatalogoCardContainer>
                                    <CardCatalogo />
                                    <CardCatalogo2 />
                                </CatalogoCardContainer>
                            </SwiperSlide>
                        </StyledSwiper>
                    </CatalogoCards>
                </CatalogoItems>
                
                

            </CatalogoContainer>
        </>
    )
}

export default Catalogo;