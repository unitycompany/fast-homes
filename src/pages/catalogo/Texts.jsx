import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";

// Estilos com Styled Components
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #fff;
  color: var(--color--black);
  text-align: center;
  font-size: 1.5rem;
  
  div {
    max-width: 1280px;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    font-size: 30px;
    width: 100%;
    line-height: 100%;
    margin-bottom: 10px;
    font-family: var(--font--aboreto);
  }

  p {
    font-size: 14px;
    width: 80%;
  }
`;

const Texts = () => {
  return (
    <Wrapper>
      <Splide
        options={{
          direction: "ttb", // Transição vertical (top to bottom)
          height: "100vh", // Altura total da tela
          width: "100%", // Largura total
          arrows: false, // Sem setas
          pagination: false, // Sem paginação
          drag: true, // Sem arrastar manual
          autoplay: true, // Ativar rotação automática
          interval: 3000, // Tempo entre slides (3 segundos)
          speed: 800, // Velocidade da animação
          perPage: 1, // Mostrar um slide por vez
          perMove: 1, // Mover um slide por vez
          rewind: true, // Loop infinito ativado
          pauseOnHover: false, // Não pausa ao passar o mouse
          pauseOnFocus: false, // Não pausa ao focar
        }}
      >
        <SplideSlide>
          <Card>
            <div>
              <h1>Por que comprar um projeto de casas em Steel Frame?</h1>
              <p>Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. 

            <br /><br />Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. </p>
            </div>
          </Card>
        </SplideSlide>

        <SplideSlide>
          <Card>
            <div>
              <h1>Por que comprar um projeto de casas em Steel Frame?</h1>
              <p>Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. 

            <br /><br />Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. Espectacular casa a medida con un total de 231 m² situada en una prestigiosa zona de Mallorca. Una vivienda que se adapta completamente al desnivel del terreno y muestra sus poderosos voladizos. </p>
            </div>
          </Card>
        </SplideSlide>
      </Splide>
    </Wrapper>
  );
};

export default Texts;


