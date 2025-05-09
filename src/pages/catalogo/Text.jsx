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
        content: 'Construir com Steel Frame é mais rápido, eficiente e limpo. Ao contrário da alvenaria tradicional, esse sistema evita desperdícios, reduzindo custos com materiais de construção e mão de obra, e ainda contribui para o uso consciente dos recursos naturais. Mais do que um projeto, na Fast Homes, você recebe um lar feito para durar.',
        direction: true,
        colorText: '#b05116',
    },
    {
        textEffect: 'Quanto',
        title: 'Tempo leva para uma casa de Steel Frame ser construída?',
        content: 'O prazo médio é de até 150 dias, desde a fundação até a finalização. Esse tempo pode variar conforme o projeto e o ritmo da obra, mas sempre é mais rápido do que a alvenaria tradicional. E com a nossa equipe de profissionais especializados, garantimos eficiência do início ao fim.',
        direction: true,
        colorText: '#828E51',
    },
    {
        textEffect: 'Como',
        title: 'Comprar um projeto de casa em Steel Frame',
        content: 'Na Fast Homes, comprar a sua nova casa é simples: você escolhe um dos nossos modelos prontos ou traz o seu próprio projeto, conversamos para entender melhor as suas necessidades, apresentamos as condições de pagamento e prazos e seguimos para a construção. Em pouco tempo, você recebe o seu lar com o padrão de qualidade Fast Homes.',
        direction: true,
        colorText: '#211103',
    },
]

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    position: relative;
    padding: 5% 2.5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 80px;
    overflow: hidden;

    @media (max-width: 768px){
        height: auto;
        padding: 15% 2.5% 5% 2.5%;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ direction }) => (direction ? 'flex-start' : 'flex-end')};
    gap: 10px;
    position: relative;
    width: 100%;
    text-align: ${({ direction }) => (direction ? 'left' : 'right')};

    @media (max-width: 768px){
        height: auto;
    }

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
            
            @media (max-width: 768px){
                width: 100%;
                font-size: 26px;
            }
        }

        & p {
            width: 80%;
            line-height: 110%;

            @media (max-width: 768px){
                width: 100%;
                font-size: 15px;
            }
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