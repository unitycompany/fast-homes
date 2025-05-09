import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../../components/buttons/GlobalButton2";
import Form from "../../components/form";

const ParceriasContainer = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    position: relative;
    overflow: hidden;
    font-family: var(--font--montserrat);
    color: #fff;
    padding: 5% 0;

    @media (max-width: 768px){
        padding: 10% 0%;
    }
`

const ParceriasBackground = styled.div`
    background-color: var(--color--black);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`
 
const ParceriasConteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
    max-width: 1280px;
    padding: 2% 5%;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 2% 0;
    }
`

const ParceriasTexts = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
        padding-left: 5%;
    }

    & > h1 {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 35px;
        line-height: 100%;

        @media (max-width: 768px){
            font-size: 30px;
        }

        & > a {
            border-bottom: 1px solid #fff;
            transition: all .3s ease;

            &:hover{
                transform: scale(0.97);
                color: #e2e2e2;
            }
        }
    }

    & > p {
        font-size: 16px;
    }


`

const ParceriasImagens = styled.div`
    width: 50%;

    @media (max-width: 768px){
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    }
`

const ParceriasImageDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px){
        justify-content: space-between;
    }

    & > a {
        width: 47%;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
        margin: 5px;
        border: 5px solid #fff;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(2px);
        transition: all .4s ease;
        overflow: hidden;
        border-radius: 30px;

        @media (max-width: 768px){
            height: 160px;
            width: 47%;
        }

        &:hover {
            background-color: #fff;
            
        }

        &:hover > img {
            filter: invert(500%);
            transform: scale(1.1);
        }

        & > img {
            transition: all .4s ease;
        }
    }
`

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
    max-width: 1280px;
    padding: 0 5% 3.5% 5%;
`

const Parcerias = () => {
    return (
        <>
            <ParceriasContainer id="parcerias">
                <ParceriasBackground></ParceriasBackground>

                <ParceriasConteudo>
                    <ParceriasTexts>
                        <h1 data-aos="fade-up-right" data-aos-delay="100">
                            Nossas Parcerias
                        </h1>
                        <p data-aos="fade-up-right" data-aos-delay="400">
                        A excelência da Fast Homes também é construída com quem compartilha da nossa visão de inovação, qualidade e sustentabilidade.<br/><br/>
                        Trabalhamos lado a lado com marcas reconhecidas no mercado para garantir que cada detalhe da sua casa tenha o melhor em tecnologia, desempenho e durabilidade.
                        Juntos, oferecemos soluções completas que unem design, eficiência e confiança – do projeto à entrega do seu novo lar.

                        </p>
                        <GlobalButton2
                            text="Ver o catálogo"
                            background1="#fff"
                            background2="#fff"
                            colorIcon="#353535"
                            colorText="#353535"
                            to="/catalogo-de-casas"
                        />
                    </ParceriasTexts>

                    <ParceriasImagens>
                        <ParceriasImageDiv>
                            <a href="https://fastdrywall.com.br/" target="_blank" data-aos="fade-up" data-aos-delay="300">
                                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6b64f421-c21d-418a-22df-aeb637cc8800/public" alt="fastsistemasconstrutivos" />
                            </a>
                            <a href="https://novametalica.com.br/" target="_blank" data-aos="fade-up" data-aos-delay="500">
                                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c12d51c8-2ed5-4b88-b069-c85191014100/public" alt="novametalica" />
                            </a>
                            <a href="https://www.saint-gobain.com.br/" target="_blank" data-aos="fade-up" data-aos-delay="700">
                                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/978e5875-90fe-47bc-0e0c-973e5b58fb00/public" alt="saintgobain" />
                            </a>
                            <a href="https://esquadrias.fastsistemasconstrutivos.com.br/" target="_blank" data-aos="fade-up" data-aos-delay="100">
                                <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1eb3f29b-d879-41f9-9870-ffec8fd83100/public" alt="ecoframe" />
                            </a>
                        </ParceriasImageDiv>
                    </ParceriasImagens>
                </ParceriasConteudo>

                <FormContainer id="form">
                    <Form />
                </FormContainer>
            </ParceriasContainer>
        </>
    )
} 

export default Parcerias;