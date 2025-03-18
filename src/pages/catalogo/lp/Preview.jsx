import React from 'react';
import Name from './Name';
import Home from './Home';
import Dobra2 from './DobraDois';
import Dobra3 from './DobraTres';
import Dobra4 from './DobraQuatro';
import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    max-width: 1280px; /* Em vez de min-width */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
`;


const LandingPreview = ({ dados }) => {
  if (!dados) return <p>Preencha os campos para visualizar a Landing Page.</p>;

  return (
    <>
        <Content>
            <Name nome={dados.nome} descricao={dados.descricao} />
            <Home
                imagens={[dados.imagem, dados.imagemDois]}
                area={dados.area}
                largura={dados.largura}
                lote={dados.lote}
                quartos={dados.quartos}
                suites={dados.suites}
                banheiros={dados.banheiros}
                garagem={dados.garagem}
                piscina={dados.piscina}
                churrasqueira={dados.churrasqueira}
            />
            <Dobra2
                area={dados.dobra2.area}
                title1={dados.dobra2.title1}
                descricao={dados.dobra2.descricao}
                imagens={dados.dobra2.carrossel}
            />
            <Dobra3
                title={dados.dobra3.title}
                descricao={dados.dobra3.descricao}
                carrosselEsquerda={dados.dobra3.carrosselEsquerda}
                carrosselDireita={dados.dobra3.carrosselDireita}
            />
            <Dobra4 imagem={dados.dobra4.imagem} />
        </Content>
      
    </>
  );
};

export default LandingPreview;
