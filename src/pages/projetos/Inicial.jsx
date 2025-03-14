import React from "react";
import styled from "styled-components";
import Home from "./Home";
import FormLP from "../../components/form-lp";
import Faixa from "../../components/faixa";

const Content = styled.div`
    height: auto;
    width: 100%;
    position: relative;
    left: 50%!important;
    top: 0;
    transform: translateX(-50%)!important;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    overflow-x: hidden;
    padding: 10% 0% 0 0;
`

const PaginaProjetos = () => {
    return (
        <>
            <Content>
                <Home />
                    <FormLP />
                        <Faixa categoria="interiores" />
            </Content>
            
        </>
    )
}

export default PaginaProjetos;