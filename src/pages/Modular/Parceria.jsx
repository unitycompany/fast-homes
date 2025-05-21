import react from 'react';
import GlobalButton3 from '../../components/buttons/GlobalButton3';
import styled, {keyframes} from 'styled-components';

// keyframes para a primeira imagem (DIV 2):
const move1 = keyframes `
  0%   { top: 0;    left: 50%; }  /* etapa 1: top-right */
  25%  { top: 50%;  left: 50%; }  /* etapa 2: bottom-right */
  50%  { top: 50%;  left: 0;    }  /* etapa 3: bottom-left */
  75%  { top: 0;    left: 0;    }  /* etapa 4: top-left */
  100% { top: 0;    left: 50%; }  /* volta ao início */
`;

// keyframes para a segunda imagem (DIV 3):
const move2 = keyframes `
  0%   { top: 50%;  left: 0;    }  /* etapa 1: bottom-left */
  25%  { top: 0;    left: 0;    }  /* etapa 2: top-left */
  50%  { top: 0;    left: 50%; }  /* etapa 3: top-right */
  75%  { top: 50%;  left: 50%; }  /* etapa 4: bottom-right */
  100% { top: 50%;  left: 0;    }  /* volta ao início */
`;

const ParceriaContent = styled.section `
    background-color: #000;
    color: #fff;

    & .faixa {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2.5% 0;
        position: relative;
        width: 100%;

        @media(max-width: 768px) {
            padding: 5% 0;
            flex-direction: column;
        }

        &::before {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            background-color: #fff;
            left: 0;
            top: 50%;
            transform: translateY(-50%);    
        }

        & h1 {
            background-color: #000;
            position: relative;
            z-index: 1;
            padding: 0 1%;
            font-family: var(--font--aboreto);
            font-size: 20px;

            @media(max-width: 768px) {
                font-size: 16px;
                padding: 0 2%;
            }
        }
    }

    & .title-mobile {
        display: none;

        @media(max-width: 768px) {
            display: block;
            font-size: 26px;
            font-family: var(--font--aboreto);
            text-align: center;
            width: 90%;
            left: 5%;
            line-height: 100%;
            position: relative;
            font-weight: 600;
            margin-bottom: 20px;    
        }
    }

    & main {
        display: flex;
        align-items: center;   
        justify-content: center;
        flex-direction: row;
        width: 100%;
        padding: 5%;
        gap: 50px;

        @media (max-width: 768px) {
            flex-direction: column-reverse;
            padding: 5% 5% 10% 5%;
        }

        & article {
            width: 50%;
            display: flex;
            align-items: flex-start;
            justify-content: center;    
            flex-direction: column;
            gap: 30px;

            @media (max-width: 768px) {
                width: 100%;
                align-items: center;
                text-align: center;
            }

            & h1 {
                font-size: 42px;
                font-family: var(--font--aboreto);  
                line-height: 110%;
                font-weight: 600;

                @media (max-width: 768px) {
                    display: none;
                }
            }
            
            & p {
                margin-bottom: -20px;
                font-size: 16px;
                font-weight: 300;

                &:nth-child(4){
                    margin-bottom: 0;
                }
            }
        }

        aside {
            position: relative;
            width: 50%;
            height: 500px; 
            
            @media (max-width: 768px) {
                width: 100%;
                height: 350px;  
            }

            // as quatro células 2×2 terão cada uma 50% de largura e 50% de altura
            > div {
                width: 50%;
                height: 50%;

                // as divs vazias (1 e 4) ficam estáticas
                &:nth-child(1) { position: absolute; top: 0;   left: 0;   }
                &:nth-child(4) { position: absolute; top: 50%;  left: 50%; }

                // DIV 2 (contém img 01): animação move1
                &:nth-child(2) {
                position: absolute;
                background-color: #fff;
                border-radius: 20px;
                width: 48.5%;
                height: 48.5%;
                animation: ${move1} 8s ease-in-out infinite;
                img { width: 100%; height: 100%; object-fit: cover; }
                }

                // DIV 3 (contém img 02): animação move2
                &:nth-child(3) {
                position: absolute;
                width: 48.5%;
                height: 48.5%;
                background-color: #fff;
                border-radius: 20px;
                animation: ${move2} 8s ease-in-out infinite;
                img { width: 100%; height: 100%; object-fit: cover; }
                }
            }
            }
    }
`



const Parceria = () => {
    return (
        <>
            <ParceriaContent>
                <div className='faixa'>
                    <h1>Fast Homes e House Box</h1>
                </div>
                <h1 className='title-mobile'>O novo conceito de lar é modular</h1>
                <main>
                    <article>
                        <h1>O novo conceito de lar é modular</h1>
                        <p>A união entre a Fast Homes e a House Box nasceu com um objetivo em comum: popularizar a construção modular em todo o Brasil.</p>
                        <p>Combinamos o design moderno da Fast Homes com a eficiência da House Box para oferecer soluções eficientes, modernas e sustentáveis.</p>
                        <p>Mais do que construir casas, essa parceria busca transformar a forma de morar, levando praticidade, qualidade e inovação para quem deseja morar, investir ou empreender, mas com bem menos burocracia e muito mais velocidade na entrega.</p>
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
                    </article>
                    
                    <aside>
                        <div></div>
                        <div>
                            <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/11152b3c-1a94-4970-f99e-0a6ee9080100/public" alt="" loading='lazy' />
                        </div>
                        <div>
                            <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79e150fc-9edf-47b1-869a-537cd5b8b700/public" alt="" loading='lazy' />
                        </div>
                        <div></div>
                    </aside>
                </main>
            </ParceriaContent>
        </>
    )
}

export default Parceria;