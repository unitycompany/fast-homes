import React from "react";
import styled from "styled-components";
import CarrosselLPPlanta from "../../../components/carrossel-lp-planta";

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-height: 100vh;
    overflow: hidden;

    @media (max-width: 768px){
        height: 100%;
        padding: 2.5%;
    }

    & img {
        border-radius: 20px;
        height: 650px!important;
        object-fit: contain!important;

        @media (max-width: 768px){
            height: 400px!important;
        }
    }
`

const Dobra4 = ({ plantaBaixa }) => {
    return (
        <>
            <Content>
                <CarrosselLPPlanta
                    images={plantaBaixa}
                    width="100%"
                    height="auto"
                />
            </Content>
        </>
    )
}

export default Dobra4;