import React from "react";
import styled, {keyframes} from "styled-components";

const letterSpacing = keyframes`
    0% {
        letter-spacing: -1px;
        opacity: 1;
    }
    50% {
        letter-spacing: 0;
        opacity: 0.9;
    }
`

const infos = [
    {
        textEffect: 'Por que',
        title: 'Comprar uma casa de Steel Frame?',
        content: 'Construir uma residência demanda muito tempo, acompanhamento constante da obra, procura e contratação de profissionais qualificados, além de incidir em muitos gastos não programados como materiais extras, desperdício e uso de recursos naturais. Adquirir um kit casa pronta entregue pela Espaço Smart garante para você muitas vantagens, entre elas:',
        direction: true,
        colorText: '#b05116',
    },
    {
        textEffect: 'Quanto',
        title: 'Tempo leva para uma casa de Steel Frame ficar pronta?',
        content: 'O prazo médio para a conclusão da fundação, parte estrutural, vedações e cobertura é de 150 dias, podendo variar de acordo com a área total da edificação e quantidade de pessoas trabalhando na obra. A Espaço Smart auxilia os clientes na indicação da mão de obra, sendo empresas credenciadas e especializadas para executar obras em Steel Frame.',
        direction: true,
        colorText: '#828E51',
    },
    {
        textEffect: 'Como',
        title: 'Comprar um projeto de casa de Steel Frame',
        content: 'Comprar um kit em Steel Frame é muito fácil e você pode adquiri-lo hoje mesmo! Escolha uma das opções de projetos em Steel Frame disponíveis em nosso catálogo, a casa selecionada diz respeito ao projeto em estrutura metálica, incluindo o kit de vedação interna, externa e coberturas.',
        direction: true,
        colorText: '#211103',
    },
]

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 5% 2.5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 80px;
    overflow: hidden;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ direction }) => (direction ? 'flex-start' : 'flex-end')};
    gap: 10px;
    position: relative;
    width: 100%;
    text-align: ${({ direction }) => (direction ? 'left' : 'right')};

    & span {
        position: absolute;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 400;
        color: ${({ colorText }) => (colorText ? `${colorText}` : '#000')};
        z-index: -1;
        line-height: 100%;
        top: -30px;
        left: ${({ direction }) => (direction ? '0px' : 'none')};
        right: ${({ direction }) => (direction ? 'none' : '0px')};
        animation: ${letterSpacing} 10s linear infinite alternate-reverse;
        opacity: 1;
    }

    & div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 5px 20px;
        position: relative;
        width: 100%;
        transition: all .3s ease-in-out;

        &:hover {
            padding: 20px;
        }

        &:hover::after{
            width: 100%;
            opacity: 0.1;
            border-radius: 0 20px 20px 0;
        }

        &::before{
            content: '';
            width: 3px;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            background-color: ${({ colorText }) => (colorText ? `${colorText}` : '#000')};
        }

        &::after{
            content: '';
            width: 2px;
            height: 100%;
            left: 3px;
            opacity: 0.2;
            top: 0;
            position: absolute;
            background-color: ${({ colorText }) => (colorText ? `${colorText}` : '#000')};
            transition: width .3s ease-in-out, border-radius .3s ease-in-out, opacity .1s ease-in-out;
        }

        & h1 {
            font-size: 32px;
            font-weight: 500;
            width: 60%;
            line-height: 100%;
            color: var(--color--black);
        }

        & p {
            width: 80%;
            line-height: 110%;
        }
    }

    
`

const TextCard = ({ textEffect, title, content, direction, colorText }) => {
    return (
        <>
            <Card direction={direction} colorText={colorText}>
                <span>{textEffect}</span>
                    <div>
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </div>
            </Card>
        </>
    )
}

const Text = () => {
    return (
        <>
            <Content>
                {
                    infos.map((item, index) => (
                        <TextCard 
                            key={index}
                            textEffect={item.textEffect}
                            title={item.title}
                            content={item.content}
                            direction={item.direction}
                            colorText={item.colorText}
                        />
                    ))
                }
            </Content>
        </>
    )
}

export default Text;