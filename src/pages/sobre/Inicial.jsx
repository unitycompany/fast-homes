import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Surgiu from "./Surgiu";
import Porque from "./Porque";
import Form from "../../components/form";
import FormLP from "../../components/form-lp";
import Faixa from "../../components/faixa";
import { Helmet } from "react-helmet-async";

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

const FormDiv = styled.div`
    padding: 0 2.5%;
    max-width: 1280px;
`

const PaginaSobre = () => {
    return (
        <>
            <Helmet>
                <title>Sobre nos - Fast Homes</title>
                <meta name="description" content="Conheça a Fast Homes, especialista em casas pré-fabricadas. Com compromisso em inovação, sustentabilidade e qualidade, ajudamos você a realizar o sonho da casa própria." />
            </Helmet>
            <Content>
                <Home />
                    <Surgiu />
                        <Porque />
                            <FormDiv>
                               <FormLP />
                            </FormDiv>
                                <Faixa categoria="interiores"/>
            </Content>
            
        </>
    )
}

export default PaginaSobre;