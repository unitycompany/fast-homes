import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "swiper/css";
import "swiper/css/pagination";
import CardCasasModular from "../../components/cards/CardCasasModular";

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding: 2.5% 5% 2.5% 5%;

  @media (max-width: 768px){
    gap: 20px;
    padding: 2.5% 5% 0 5%;
    align-items: center;
  }
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }

  & h1 {
    font-size: 36px;
    font-weight: 300;
    line-height: 100%;
    width: 100%;
    text-align: center;

    @media (max-width: 768px){
      font-size: 28px;
      text-align: center;
    }

    & b {
      font-weight: 500;
    }
  }
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 30%;
  left: 0;
  transform: translateY(-50%);
  z-index: 10;
  width: 95%;
  left: 2.5%;

  @media (max-width: 768px){
    top: 25%;
    width: 90%;
    left: 5%;
  }

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
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #1d1d1d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  & svg {
    width: 15px;
    fill: #fff;
  }

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
            Conheça as nossas <b>Houses</b>
          </h1>
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
                nome="Vitória-Régia"
                area="18m²"
                descricao="Compacta e funcional, a House Vitória-Régia é ideal para os casais que estão iniciando a vida a dois ou para os solteiros que buscam mais praticidade. Com 18m² ao total, possui mini copa, 1 quarto e 1 banheiro com banheira interna ou externa, tudo em um espaço otimizado e acolhedor."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f7f8cb19-85fa-4a77-2380-160809f6b800/public"
                nome="Capim-Limão"
                area="30m²"
                descricao="Com 30m², a House Capim-Limão é ideal para aqueles que precisam de mais espaço sem abrir mão da funcionalidade. Conta com sala de estar e cozinha integradas e 1 suíte. Uma solução inteligente, pensada para o dia a dia."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b2dd4421-6185-4b1e-fa61-c3036248e200/public"
                nome="Bromélia Azul"
                area="45m²"
                descricao="Pense em um espaço onde você pode relaxar com conforto e estilo após um longo dia. Oferece uma suíte completa e uma sala de estar espaçosa que se torna o coração do lar. A cozinha completa e o banheiro americano compartilhado tornam cada momento mais prático, perfeito para famílias que valorizam espaço e funcionalidade."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/26e1126a-ea99-4c71-1586-bb74050c5c00/public"
                nome="Mandacaru"
                area="55m²"
                descricao="Espaçosa, com duas suítes que garantem privacidade e conforto para todos. Imagine uma cozinha com ilha central, onde as refeições se tornam eventos especiais, e uma sala ampla que acomoda todos para momentos de descontração. Um lar feito para viver e compartilhar momentos inesquecíveis."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/abc7bb4f-f339-41b6-ec1f-d8ef8b268100/public"
                nome="Paineira"
                area="19m²"
                descricao="Compacta e funcional, a House Paineira é ideal para os casais que estão iniciando a vida a dois ou para os solteiros que buscam mais praticidade. Com 19m² ao total, possui uma suíte e um banheiro e uma cozinha no estilo americano, tudo em um espaço otimizado e acolhedor."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/34e8d7ab-9e2f-4c0e-cc41-d461b06a7400/public"
                nome="Ingazeira"
                area="27m²"
                descricao="Compacta e funcional, a House Ingazeira é ideal para os casais que estão iniciando a vida a dois ou para os solteiros que buscam mais praticidade. Com 27m² ao total, possui 1 quarto e 1 banheiro e uma cozinha no estilo americano, tudo em um espaço otimizado e acolhedor."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/377bb7dd-7b21-4129-628c-a6f467748600/public"
                nome="Canela"
                area="19m²"
                descricao="Compacta e funcional, a House Canela é ideal para os casais que estão iniciando a vida a dois ou para os solteiros que buscam mais praticidade. Com 19m² ao total, possui 1 suíte e 1 banheiro e uma cozinha no estilo americano, tudo em um espaço otimizado e acolhedor."
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/31171d89-5228-433a-0649-f97d5f31b700/public"
                nome="Campos do Jordão"
                area=""
                descricao="Compacta, funcional e cheia de conforto. Com um layout inteligente, a Campos do Jordão Térrea oferece um quarto aconchegante no piso principal, garantindo praticidade no dia a dia. A sala integrada à cozinha cria um ambiente fluído e acolhedor, perfeito para quem busca um lar compacto sem abrir mão do bem-estar. Um espaço pensado para facilitar sua rotina e proporcionar momentos inesquecíveis!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardCasasModular 
                image="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b45ebaaa-4f1f-477a-8eb5-5360fdb83100/public"
                nome="Fernando de Noronha"
                area=""
                descricao="Design elevado para uma experiência única! Com um mezanino charmoso, a Fernando de Noronha Superior traz um quarto suspenso que otimiza o espaço e proporciona uma sensação aconchegante e moderna. A parte inferior integra sala, cozinha e banheiro em um ambiente fluído e funcional, unindo praticidade e sofisticação. Para quem busca viver com leveza, estilo e inovação!"
              />
            </SwiperSlide> */}
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
          </Swiper>
        </Center>
      </Content>
    </>
  );
};

export default Casas;
