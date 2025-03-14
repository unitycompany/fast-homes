import React from "react";
import styled from "styled-components";
import GlobalButton2 from "../../components/buttons/GlobalButton2";

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    gap: 50px;
    padding: 7.5% 5%;
`

const Left = styled.div`
    width: 50%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid var(--color--brown--medium);
        top: -15px;
        left: -15px;
        position: absolute;
        z-index: -1;
        border-radius: 500px 500px 0 0;
    }

    &::after{
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid var(--color--brown--medium);
        bottom: -15px;
        right: -15px;
        position: absolute;
        z-index: -1;
        border-radius: 500px 500px 0 0;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 500px 500px 0 0 ;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    & h2 {
        font-family: var(--font--aboreto);
        font-size: 30px;
        color: var(--color--brown--low);
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        & img {
            height: 120px;
            object-fit: cover;
            transition: all .2s ease-in-out;

            &:nth-child(1){
                width: 40%;
            }

            &:nth-child(2){
                width: 29%;
            }

            &:nth-child(3){
                width: 29%;
            }
        }
    }

    & article {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;

        & button {
            width: auto;
        }
    }
`

const Surgiu = () => {
    return (
        <>
            <Content>
                <Left>
                    <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5493a461-fb61-43ac-8edb-b734ca35fc00/public" loading="lazy" />
                </Left>
                <Right>
                    <h2>Como a Fast Homes surgiu?</h2>
                    <p>
                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos

                        <br /><br />

                        Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos, colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos
                    </p>
                    <div>
                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5493a461-fb61-43ac-8edb-b734ca35fc00/public" loading="lazy" />

                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5493a461-fb61-43ac-8edb-b734ca35fc00/public" loading="lazy" />

                        <img src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5493a461-fb61-43ac-8edb-b734ca35fc00/public" loading="lazy" />
                    </div>

                    <article>
                        <GlobalButton2
                            text="Solicitar meu orçamento"
                            background1="var(--color--brown--medium)"
                            background2="var(--color--brown--medium)"
                            colorIcon="#fff"
                            colorText="#fff"
                            to="/#Form"
                        />
                    </article>
                </Right>
            </Content>
        </>
    )
}

export default Surgiu;