import React from "react";
import styled from "styled-components";
import CarrosselLP from "../../../components/carrossel-lp";

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
    padding: 5% 5%;
    gap: 10px;
    max-height: 100vh;

    & img {
        border-radius: 20px;
        height: 700px;
        object-fit: contain;

        @media (max-width: 768px){
            height: 400px;
        }
    }
`

const Dobra4 = ({ plantaBaixa }) => {
    return (
        <>
            <Content>
                <CarrosselLP
                    images={plantaBaixa}
                    width="100%"
                    height="100%"
                />
            </Content>
        </>
    )
}

export default Dobra4;