import React from "react";
import styled from "styled-components";
import Home from "./Home";

const Content = styled.section `
    border: 1px solid red;
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
`

const PaginaModular = () => {
    return (
        <>
            <Content>
                <Home />
            </Content>
        </>
    )
}

export default PaginaModular;