import React from "react";
import styled from "styled-components";

import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
    width: 550px;
    height: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    transition: all .3s ease;

    @media (max-width: 768px){
        flex-direction: column!important;
        width: 100%;
        height: 500px;
    }


    &:hover {
        transform: scale(1);
    }

`

const CardImage = styled.div`
    width: 40%;
    height: 100%;
    border-radius: 10px;

    @media (max-width: 768px){
        width: 100%;
        height: 100%;
    }


    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`

const CardText = styled.div`
    width: 65%;
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    padding: 20px 2.5% 20px 7.5%;
    height: 70%;
    background-color: #fff;
    border: 1px solid #00000030;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 10px;
    font-family: var(--font--montserrat);
    transition: all .3s ease;

    @media (max-width: 768px){
        width: 95%;
        left: 2.5%;
        top: -5%;
        z-index: 2;
        position: relative;
        border-radius: 10px;
    }


    & > h2 {
        font-size: 24px;
        font-weight: 600;
        color: var(--color--black);
        font-family: var(--font--aboreto);
    }

    & > button {
        color: var(--color--black);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        transition: all .3s ease;
        font-weight: 400;

        &:hover {
            color: var(--color--black);
        }

        &:hover > svg {
            fill: var(--color--black);
            transform: rotate(0);
        }

        & > svg {
            font-size: 22px;
            transform: rotate(-45deg);
            fill: var(--color--black);
            transition: all .3s ease;
        }
    }
`

const CardInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`

const CardInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    & div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;

        & svg {
            width: 45px;
        }

        & span {
            font-size: 10px;
            line-height: 100%;
            font-weight: 400;
        } 
    }

    & span {
        font-weight: 600;
        text-align: left;
        width: 100%;
        font-size: 14px;
    }
`

const CardCatalogo = ({ titulo, area, largura, lote, imagem, slug }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (!slug) {
            console.error(`❌ Erro: slug indefinido para a casa ${nome}`);
            return;
        }
        navigate(`/catalogo-de-casas/${slug}`);
    };

    return (
        <>

            <CardContainer>
                <CardImage>
                    <img src={imagem} alt="" loading="lazy" />
                </CardImage>
                <CardText className="CardText">
                    <h2>
                        {titulo}
                        
                    </h2>
                    <CardInfos>
                        <CardInfo>
                            <div>
                                <svg id="fi_4796523" enable-background="new 0 0 512.001 512.001" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><g><path d="m494.501 512h-476.981c-7.104 0-13.45-4.241-16.168-10.803-2.719-6.562-1.229-14.048 3.793-19.071l261.44-261.439c2.929-2.929 7.678-2.929 10.606 0 2.929 2.929 2.929 7.678 0 10.606l-261.439 261.439c-1.028 1.028-.781 2.148-.542 2.725s.856 1.543 2.31 1.543h27.481v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h27.7c1.378 0 2.5-1.122 2.5-2.5v-476.979c0-1.454-.967-2.071-1.543-2.31-.577-.239-1.697-.485-2.725.542l-193.541 193.54c-2.929 2.929-7.678 2.929-10.606 0-2.929-2.929-2.929-7.678 0-10.606l193.54-193.541c5.023-5.023 12.51-6.511 19.072-3.794 6.562 2.718 10.803 9.064 10.803 16.168v476.98c0 9.65-7.851 17.5-17.5 17.5z"></path><path d="m404.501 422h-96c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h96c1.378 0 2.5-1.122 2.5-2.5v-175.73l-178.237 178.23h49.737c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5h-49.737c-6.088 0-11.528-3.635-13.858-9.26s-1.054-12.042 3.251-16.347l178.237-178.237c4.305-4.305 10.721-5.582 16.347-3.251 5.625 2.33 9.26 7.77 9.26 13.858v175.737c0 9.65-7.851 17.5-17.5 17.5z"></path><path d="m52.501 405.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m52.501 345.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m52.501 285.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m52.501 225.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m52.501 165.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m97.502 45h-23.786c-2.263-6.384-7.331-11.452-13.715-13.715v-23.785c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v23.785c-6.384 2.264-11.452 7.332-13.715 13.715h-23.786c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h23.786c2.263 6.384 7.331 11.452 13.715 13.715v23.785c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-23.785c6.384-2.263 11.452-7.331 13.715-13.715h23.786c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zm-45.001 15c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z"></path><path d="m397.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m337.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m277.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m217.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m157.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path></g></svg>
                                <span>Área (m²)</span>
                            </div>
                            <span>{area}</span>
                        </CardInfo>

                        <CardInfo>
                            <div>
                                <svg id="fi_7579033" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-name="Line Expand"><path d="m42 49h-27v-47a1 1 0 0 0 -1-1h-12a1 1 0 0 0 -1 1v60a1 1 0 0 0 1 1h40a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1zm-39 4h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h10v46.586l-10 10zm38 8h-3v-4a1 1 0 0 0 -2 0v4h-3v-2a1 1 0 0 0 -2 0v2h-3v-4a1 1 0 0 0 -2 0v4h-3v-2a1 1 0 0 0 -2 0v2h-3v-4a1 1 0 0 0 -2 0v4h-3v-2a1 1 0 0 0 -2 0v2h-6.586l10-10h26.586z"></path><circle cx="10" cy="6" r="1"></circle><path d="m62.124 4.719-2.824-2.828a3 3 0 0 0 -4.243 0l-30.41 30.409a.979.979 0 0 0 -.187.259l-5.66 11.311a1 1 0 0 0 1.341 1.342l11.314-5.657a1 1 0 0 0 .26-.187l30.409-30.406a3 3 0 0 0 0-4.243zm-12.016 4.945 1.407 1.407-23.335 23.335-1.407-1.406zm-28.175 32.417.87-1.739.87.87zm3.625-1.812-1.812-1.812 1.885-3.772 3.7 3.7zm5.458-3.028-1.422-1.421 23.335-23.335 1.422 1.421zm24.749-24.749-4.243-4.242 1.414-1.414 4.243 4.242zm4.944-4.944-2.116 2.116-4.243-4.242 2.117-2.117a1 1 0 0 1 1.414 0l2.828 2.829a1 1 0 0 1 0 1.414z"></path></svg>
                                <span>Largura x Fundo (m)</span>
                            </div>
                            <span>{largura}</span>
                        </CardInfo>

                        <CardInfo>
                            <div>
                               <svg id="fi_3348712" enable-background="new 0 0 511 511" viewBox="0 0 511 511" xmlns="http://www.w3.org/2000/svg"><g id="Outline_20_"><g><path d="m191.5 327h224c4.143 0 7.5-3.358 7.5-7.5v-176c0-2.301-1.057-4.476-2.866-5.897l-112-88c-2.721-2.137-6.547-2.137-9.268 0l-112 88c-1.81 1.422-2.866 3.596-2.866 5.897v176c0 4.142 3.357 7.5 7.5 7.5zm79.5-15v-113h65v113zm-72-164.854 104.5-82.107 104.5 82.107v164.854h-57v-120.5c0-4.142-3.357-7.5-7.5-7.5h-80c-4.143 0-7.5 3.358-7.5 7.5v120.5h-57z"></path><path d="m463.5 312c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h32c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-8.5v-249h8.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-32c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h8.5v249z"></path><path d="m503.5 384h-88c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h80.5v97h-41v-24.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v24.5h-49v-32.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.5h-49v-24.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v24.5h-49v-32.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.5h-49v-24.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v24.5h-49v-32.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.5h-49v-24.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v24.5h-41v-41.025c.166.011.331.025.5.025h24c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-24c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h40c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-40c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h24c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-24c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h40c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-40c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h24c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-24c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h40c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-40c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h24c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-24c-.169 0-.334.014-.5.025v-41.025h97v376.5c0 4.142 3.357 7.5 7.5 7.5h259.435c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-251.935v-376.5c0-4.142-3.357-7.5-7.5-7.5h-112c-4.143 0-7.5 3.358-7.5 7.5v496c0 4.142 3.357 7.5 7.5 7.5h496c4.143 0 7.5-3.358 7.5-7.5v-112c0-4.142-3.357-7.5-7.5-7.5z"></path></g></g></svg>
                                <span>Lote mínimo (m)</span>
                            </div>
                            <span>{lote}</span>
                        </CardInfo>
                    </CardInfos>
                    <button onClick={handleClick}>
                        Conhecer mais
                        <BsArrowRightShort />
                    </button>
                </CardText>
            </CardContainer>

        </>
    )
}

export default CardCatalogo;