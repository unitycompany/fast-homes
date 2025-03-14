import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Surgiu from "./Surgiu";
import Porque from "./Porque";
import Form from "../../components/form";
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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;
`

const PaginaSobre = () => {
    return (
        <>
            <Content>
                <Home />
                    <Surgiu />
                        <Porque />
                            <FormLP />
                                <Faixa categoria="interiores"/>
            </Content>
            
        </>
    )
}

export default PaginaSobre;