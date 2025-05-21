import styled from "styled-components";
import GlobalButton2 from "../../components/buttons/GlobalButton2";
import CardSolucaoModular from "../../components/cards/CardSolucaoModular";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    color: #fff;
    padding: 0% 5%;

    @media (max-width: 768px){
        padding: 2.5% 5%;
    }
`

const Background = styled.div`
    width: 100vw;
    height: 100%;
    background-color: var(--color--brown--very--high);
    position: absolute;
    z-index: -1;
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5% 0;
    gap: 50px;

    @media (max-width: 768px){
        align-items: center;
    }
`

const Top = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;

    @media (max-width: 768px){
        align-items: center;
        text-align: center;
        gap: 15px;
    }

    & h1 {
        font-size: 32px;
        font-weight: 300;
        line-height: 100%;

        @media (max-width: 768px){
            font-size: 28px;
            line-height: 110%;
        }

        & b {
            font-weight: 500;
        }
    }

    & p {
        font-size: 16px;
        width: 50%;
        line-height: 120%;
        text-align: center;

        @media (max-width: 768px){
            width: 100%;
        }
    }
`

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 20px;
    }
`

const Solucoes = () => {
    return (
        <>
            <Content>
                <Background></Background>
                <Conteudo>
                    <Top>
                        <h1>Soluções feitas <b>para você!</b></h1>
                        <p>Seja qual for sua necessidade, com a House Box, você terá mais do que uma casa: terá um espaço que se adapta ao seu sonho</p>
                    </Top>
                    <Cards>
                        <CardSolucaoModular
                            number="01"
                            title="Moradia"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit."
                        />
                        <CardSolucaoModular
                            number="02"
                            title="Locação"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit."
                        />
                        <CardSolucaoModular
                            number="03"
                            title="Empresas"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit."
                        />
                    </Cards>
                    <GlobalButton2
                            text="Falar com um consultor"
                            background1="#fff"
                            background2="#fff"
                            colorIcon="#000"
                            colorText="#000"
                            to="/#form"
                    />
                </Conteudo>
            </Content>
        </>
    )
}

export default Solucoes;