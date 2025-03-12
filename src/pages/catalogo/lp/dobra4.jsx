import React from "react";
import styled from "styled-components";

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
    gap: 30px;

    & img {
        border-radius: 20px;
    }
`

const Dobra4 = ({ imagem }) => {
    return (
        <>
            <Content>
                <img src={imagem} alt="" />
            </Content>
        </>
    )
}

export default Dobra4;