import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "swiper/css";
import "swiper/css/pagination";
import CardCasasModular from "../../components/cards/CardCasasModular";

const Content = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding: 2.5% 5% 5% 5%;

  @media (max-width: 768px){
    gap: 20px;
    padding: 2.5% 5% 0 5%;
    min-height: auto;
  }
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px){
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;
  }

  & h1 {
    font-size: 36px;
    font-weight: 300;
    line-height: 100%;

    @media (max-width: 768px){
      font-size: 28px;
    }

    & b {
      font-weight: 500;
      color: transparent;
      background: linear-gradient(90deg, #576628, #B05216, #603813, #1d1b1d);
      -webkit-background-clip: text;
    }
  }
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  & svg {
    width: 18px;
  }
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #555;
  }
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Casas = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <Content>
        <Top>
          <h1>
            Conheça nossas <b>Houses</b>
          </h1>
          <ControlButtons>
            <ControlButton
              onClick={() =>
                swiperRef.current && swiperRef.current.slidePrev()
              }
            >
              <SlArrowLeft />
            </ControlButton>
            <ControlButton
              onClick={() =>
                swiperRef.current && swiperRef.current.slideNext()
              }
            >
              <SlArrowRight />
            </ControlButton>
          </ControlButtons>
        </Top>
        <Center>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            spaceBetween={20}
            slidesPerView={3}
            speed={2500}
            pagination={false}
            navigation={false}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              1080: { slidesPerView: 3, spaceBetween: 20 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c87bc3b3-0099-4723-527b-1fcc60ab7200/public"
                nome="Ypê"
                area="18m²"
                descricao="Perfeita para casais começando uma nova jornada ou solteiros que desejam um lar moderno e prático. Combina design inteligente com aconchego. Visualize-se preparando um café na cozinha compacta antes de relaxar em um espaço que é"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f7f8cb19-85fa-4a77-2380-160809f6b800/public"
                nome="Buriti"
                area="30m²"
                descricao="Com uma suíte aconchegante, uma sala de estar espaçosa o suficiente para acomodar momentos de lazer e uma cozinha funcional para preparar suas receitas favoritas, a House Buriti é um lar projetado para crescer com você e sua família."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b2dd4421-6185-4b1e-fa61-c3036248e200/public"
                nome="Jatobá"
                area="45m²"
                descricao="Pense em um espaço onde você pode relaxar com conforto e estilo após um longo dia. Oferece uma suíte completa e uma sala de estar espaçosa que se torna o coração do lar. A cozinha completa e o banheiro americano compartilhado tornam cada momento mais prático, perfeito para famílias que valorizam espaço e funcionalidade."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/26e1126a-ea99-4c71-1586-bb74050c5c00/public"
                nome="Mangaba"
                area="55m²"
                descricao="Espaçosa, com duas suítes que garantem privacidade e conforto para todos. Imagine uma cozinha com ilha central, onde as refeições se tornam eventos especiais, e uma sala ampla que acomoda todos para momentos de descontração. Um lar feito para viver e compartilhar momentos inesquecíveis."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/31171d89-5228-433a-0649-f97d5f31b700/public"
                nome="Tiny House Térrea"
                area=""
                descricao="Compacta, funcional e cheia de conforto. Com um layout inteligente, a Tiny House Térrea oferece um quarto aconchegante no piso principal, garantindo praticidade no dia a dia. A sala integrada à cozinha cria um ambiente fluído e acolhedor, perfeito para quem busca um lar compacto sem abrir mão do bem-estar. Um espaço pensado para facilitar sua rotina e proporcionar momentos inesquecíveis!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b45ebaaa-4f1f-477a-8eb5-5360fdb83100/public"
                nome="Tiny House Superior"
                area=""
                descricao="Design elevado para uma experiência única! Com um mezanino charmoso, a Tiny House Superior traz um quarto suspenso que otimiza o espaço e proporciona uma sensação aconchegante e moderna. A parte inferior integra sala, cozinha e banheiro em um ambiente fluído e funcional, unindo praticidade e sofisticação. Para quem busca viver com leveza, estilo e inovação!"
              />
            </SwiperSlide>
          </Swiper>
        </Center>
      </Content>
    </>
  );
};

export default Casas;
