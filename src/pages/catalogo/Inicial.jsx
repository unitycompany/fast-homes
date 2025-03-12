import React from "react";
import styled from "styled-components";

import Home from "./Home";
import HouseModel from "../../components/render";
import Texts from "./Texts";

const Teste = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PaginaCatalogo = () => {
    return (
        <>
            <Home />   
                <HouseModel />
                    <Texts />
        </>
    )
}

export default PaginaCatalogo;