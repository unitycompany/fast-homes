import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Card = styled.div`
    width: 32%;
    height: auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    border: 1px solid #00000020;
    transition: all .4s ease-in-out;
    cursor: pointer;
    
    & button {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 15px;
        border-radius: 10px;
        background: #00000020;
        backdrop-filter: blur(2px);
        color: #fff;
        cursor: pointer;
        transition: all .4s ease;
        font-size: 13px;

        &:hover {
            background-color: #fff;
            color: #000;
            transform: scale(0.95);
        }
    }

    &:hover {
        transform: scale(1.02);
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color: #000;
        padding: 15px;
        border-bottom: 1px solid #00000020;

        & h4 {
            font-size: 20px;
            font-weight: 600;
            color: #000;
            font-family: var(--font--aboreto);
        }

        & span {
            font-size: 14px;
            font-weight: 400;
            opacity: 0.8;
        }
    }

`

const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    left: 0;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        border-radius: 15px 15px 0 0;
        position: absolute;
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    }

    & .visible {
        opacity: 1;
        transform: scale(1);
    }

    & .hidden {
        opacity: 0;
        transform: scale(1);
    }
`;


const CardDados = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px!important;
    gap: 5px;
    border-radius: 0 0 15px 15px;
    border: none!important;
`

const CardDado = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    border: none!important;

    & svg {
        width: 40px;
        fill: #000;
    }

    & > span {
        font-size: 12px!important;
        line-height: 100%;
        font-weight: 400;
        text-align: center;
        color: #000;
        width: 100%;
    } 
    
    & p {
        font-weight: 600;
        text-align: center;
        width: 100%;
        font-size: 14px;
        white-space: nowrap;
        margin-top: -14px;
        color: #000;
    }
`

const CardCatalogo = ({ id, nome, pavimentos, area, largura, lote, imagem, imagemDois, slug }) => {
    const [hover, setHover] = useState(false);
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
            <Card  onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            >
                <ImageWrapper>
                    <img
                        src={imagem}
                        alt={nome}
                        className={hover ? "hidden" : "visible"}
                        loading="lazy"
                    />
                    <img
                        src={imagemDois}
                        alt={nome}
                        className={hover ? "visible" : "hidden"}
                        loading="lazy"
                    />
                </ImageWrapper>
                <button to={`/casas/${id}`}>Conhecer casa</button>
                <div>
                    <h4>{nome}</h4>
                    <span>{pavimentos}</span>
                </div>

                <CardDados> 
                    <CardDado>
                        <svg id="fi_4796523" enable-background="new 0 0 512.001 512.001" viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg"><g><path d="m494.501 512h-476.981c-7.104 0-13.45-4.241-16.168-10.803-2.719-6.562-1.229-14.048 3.793-19.071l261.44-261.439c2.929-2.929 7.678-2.929 10.606 0 2.929 2.929 2.929 7.678 0 10.606l-261.439 261.439c-1.028 1.028-.781 2.148-.542 2.725s.856 1.543 2.31 1.543h27.481v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h30.2v-15.429c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15.429h27.7c1.378 0 2.5-1.122 2.5-2.5v-476.979c0-1.454-.967-2.071-1.543-2.31-.577-.239-1.697-.485-2.725.542l-193.541 193.54c-2.929 2.929-7.678 2.929-10.606 0-2.929-2.929-2.929-7.678 0-10.606l193.54-193.541c5.023-5.023 12.51-6.511 19.072-3.794 6.562 2.718 10.803 9.064 10.803 16.168v476.98c0 9.65-7.851 17.5-17.5 17.5z"></path><path d="m404.501 422h-96c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h96c1.378 0 2.5-1.122 2.5-2.5v-175.73l-178.237 178.23h49.737c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5h-49.737c-6.088 0-11.528-3.635-13.858-9.26s-1.054-12.042 3.251-16.347l178.237-178.237c4.305-4.305 10.721-5.582 16.347-3.251 5.625 2.33 9.26 7.77 9.26 13.858v175.737c0 9.65-7.851 17.5-17.5 17.5z"></path><path d="m52.501 405.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m52.501 345.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m52.501 285.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m52.501 225.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m52.501 165.001c-4.142 0-7.5-3.358-7.5-7.5v-30.001c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.001c0 4.143-3.358 7.5-7.5 7.5z"></path><path d="m97.502 45h-23.786c-2.263-6.384-7.331-11.452-13.715-13.715v-23.785c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v23.785c-6.384 2.264-11.452 7.332-13.715 13.715h-23.786c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h23.786c2.263 6.384 7.331 11.452 13.715 13.715v23.785c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-23.785c6.384-2.263 11.452-7.331 13.715-13.715h23.786c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zm-45.001 15c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z"></path><path d="m397.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m337.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m277.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m217.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m157.502 60h-30.001c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h30.001c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"></path></g></svg>
                        <span>Área (m²)</span>
                        <p>{area}</p>
                    </CardDado>

                    <CardDado>
                        <svg id="fi_7579033" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-name="Line Expand"><path d="m42 49h-27v-47a1 1 0 0 0 -1-1h-12a1 1 0 0 0 -1 1v60a1 1 0 0 0 1 1h40a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1zm-39 4h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h4a1 1 0 0 0 0-2h-4v-3h2a1 1 0 0 0 0-2h-2v-3h10v46.586l-10 10zm38 8h-3v-4a1 1 0 0 0 -2 0v4h-3v-2a1 1 0 0 0 -2 0v2h-3v-4a1 1 0 0 0 -2 0v4h-3v-2a1 1 0 0 0 -2 0v2h-3v-4a1 1 0 0 0 -2 0v4h-3v-2a1 1 0 0 0 -2 0v2h-6.586l10-10h26.586z"></path><circle cx="10" cy="6" r="1"></circle><path d="m62.124 4.719-2.824-2.828a3 3 0 0 0 -4.243 0l-30.41 30.409a.979.979 0 0 0 -.187.259l-5.66 11.311a1 1 0 0 0 1.341 1.342l11.314-5.657a1 1 0 0 0 .26-.187l30.409-30.406a3 3 0 0 0 0-4.243zm-12.016 4.945 1.407 1.407-23.335 23.335-1.407-1.406zm-28.175 32.417.87-1.739.87.87zm3.625-1.812-1.812-1.812 1.885-3.772 3.7 3.7zm5.458-3.028-1.422-1.421 23.335-23.335 1.422 1.421zm24.749-24.749-4.243-4.242 1.414-1.414 4.243 4.242zm4.944-4.944-2.116 2.116-4.243-4.242 2.117-2.117a1 1 0 0 1 1.414 0l2.828 2.829a1 1 0 0 1 0 1.414z"></path></svg>
                        <span>Largura (m)</span>
                        <p>{largura}</p>
                    </CardDado>

                    <CardDado>
                        <svg id="fi_3348712" enable-background="new 0 0 511 511" viewBox="0 0 511 511" xmlns="http://www.w3.org/2000/svg"><g id="Outline_20_"><g><path d="m191.5 327h224c4.143 0 7.5-3.358 7.5-7.5v-176c0-2.301-1.057-4.476-2.866-5.897l-112-88c-2.721-2.137-6.547-2.137-9.268 0l-112 88c-1.81 1.422-2.866 3.596-2.866 5.897v176c0 4.142 3.357 7.5 7.5 7.5zm79.5-15v-113h65v113zm-72-164.854 104.5-82.107 104.5 82.107v164.854h-57v-120.5c0-4.142-3.357-7.5-7.5-7.5h-80c-4.143 0-7.5 3.358-7.5 7.5v120.5h-57z"></path><path d="m463.5 312c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h32c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-8.5v-249h8.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-32c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h8.5v249z"></path><path d="m503.5 384h-88c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h80.5v97h-41v-24.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v24.5h-49v-32.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.5h-49v-24.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v24.5h-49v-32.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.5h-49v-24.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v24.5h-49v-32.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v32.5h-49v-24.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v24.5h-41v-41.025c.166.011.331.025.5.025h24c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-24c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h40c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-40c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h24c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-24c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h40c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-40c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h24c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-24c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h40c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-40c-.169 0-.334.014-.5.025v-49.05c.166.011.331.025.5.025h24c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-24c-.169 0-.334.014-.5.025v-41.025h97v376.5c0 4.142 3.357 7.5 7.5 7.5h259.435c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-251.935v-376.5c0-4.142-3.357-7.5-7.5-7.5h-112c-4.143 0-7.5 3.358-7.5 7.5v496c0 4.142 3.357 7.5 7.5 7.5h496c4.143 0 7.5-3.358 7.5-7.5v-112c0-4.142-3.357-7.5-7.5-7.5z"></path></g></g></svg>
                        <span>Lote (m)</span>
                        <p>{lote}</p>
                    </CardDado>
                </CardDados>
                
            </Card>
        </>
    )
}

export default CardCatalogo;