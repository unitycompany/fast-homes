import React from "react";
import styled from "styled-components";
import CarrosselLP from "../../../components/carrossel-lp";

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5% 5%;
    gap: 30px;
    flex-direction: column;
    max-width: 1280px;
    left: 50%;
    top: 0;
    position: relative;
    transform: translateX(-50%);
    border: 1px solid var(--color--gray);
    border-top: none;

    & img {
        height: 650px!important;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & div {
        @media (max-width: 768px){
            width: 100%;
            height: 400px;
        }
    }

    & img {
        height: 550px;

        @media (max-width: 768px){
            height: 400px!important;
            object-fit: cover;
        }
    }
`



const Dobra3 = ({ descricao, title, carrosselDireita, carrosselEsquerda }) => {
    return (
        <>
            <Content>
                <Top data-aos="zoom-in" data-aos-delay="100">
                    <CarrosselLP
                        images={carrosselEsquerda}
                        width="50%"
                        height="650px"
                    />
                    <CarrosselLP 
                        images={carrosselDireita}
                        width="50%"
                        height="650px"
                    />
                </Top>
            </Content>
        </>
    )
}

export default Dobra3;