import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "./../../services/firebaseConfig"; 
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Filtro from "../../components/filtro";
import CardCatalogo from "../../components/cards/CardCatalogo";
import { useLocation } from "react-router-dom";

const HomeContent = styled.div`
    height: auto;
    padding-top: 7.5%;
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font--montserrat);
    flex-direction: column;
    gap: 25px;
    left: 50%;
    position: relative;
    top: 0;
    transform: translateX(-50%);
    overflow: hidden;

    @media (max-width: 768px){
        gap: 15px;
    }

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 75%;
        z-index: -1;
        transform: scale(1) translateX(30px);
        opacity: 0.02;
        background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5747517e-c1c9-4ad6-3cbe-0dcb2e775e00/public');
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
    }

    & h1 {
        font-size: 32px;
        font-weight: 300;
        line-height: 100%;
        padding: 20px 0;
        text-align: center;

        @media (max-width: 768px){
            width: 90%;
        }

        & b {
            font-weight: 500;
            color: transparent;
            background: linear-gradient(90deg, #000000, #474747);
            -webkit-background-clip: text;
        }
    }

    & p {
        margin-top: -30px;
        width: 40%;
        line-height: 120%;
        text-align: center;

        @media (max-width: 768px){
            width: 90%;
            margin-top: -20px;
        }
    }

    @media (max-width: 768px){
        padding: 25% 0 5% 0;
    }
`;

const HomeCatalogo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 2.5%;
    gap: 20px;
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: opacity 0.5s ease-in-out;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const LoadMoreButton = styled.button`
    background-color: #000;
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 20px auto;
    display: block;
    transition: all 0.3s;

    &:hover {
        background-color: #333;
    }
`;

const LoadingSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    &::after {
        content: "";
        width: 40px;
        height: 40px;
        border: 5px solid #ccc;
        border-top-color: #000;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;

const NotFoundContainer = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

const Home = () => {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    // O valor inicial será ajustado conforme o dispositivo: 6 para desktop e 3 para mobile
    const [visibleCount, setVisibleCount] = useState(6);
    const location = useLocation();

    // Detecta se o dispositivo é mobile (largura <= 768px)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Atualiza o visibleCount sempre que o dispositivo mudar
    useEffect(() => {
        setVisibleCount(isMobile ? 3 : 6);
    }, [isMobile]);

    // Função para ordenar os dados pela data de criação (mais recentes primeiro)
    // Se o campo "create" não existir, assume uma data antiga (new Date(0))
    const sortCards = (data) => {
        return data.sort((a, b) => {
          const dateA =
            a.create && typeof a.create.toDate === "function"
              ? a.create.toDate()
              : new Date(a.create || 0);
          const dateB =
            b.create && typeof b.create.toDate === "function"
              ? b.create.toDate()
              : new Date(b.create || 0);
          return dateB - dateA;
        });
      };
      
    useEffect(() => {
        setLoading(true);
        // Usa onSnapshot para ouvir atualizações em tempo real da coleção "catalogo"
        const unsubscribe = onSnapshot(collection(db, "catalogo"), (snapshot) => {
          const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          const sortedData = sortCards(data);
          setCards(sortedData);
          setFilteredCards(sortedData);
          setLoading(false);
          console.log("📌 Dados atualizados do Firebase:", sortedData);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchCards = async () => {
            setLoading(true);
            const snapshot = await getDocs(collection(db, "catalogo"));
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const sortedData = sortCards(data);
            setCards(sortedData);
            setFilteredCards(sortedData);
            setLoading(false);
            console.log("📌 Dados carregados do Firebase:", sortedData);
        };
        fetchCards();
    }, []);

    const aplicarFiltro = (selectedOptions) => {
        setLoading(true);
        console.log("🔍 Aplicando filtro:", selectedOptions);

        setTimeout(() => {
            if (!selectedOptions || Object.keys(selectedOptions).length === 0) {
                setFilteredCards(cards);
                setHasSearched(false);
                setLoading(false);
                return;
            }

            const filtered = cards.filter((casa) => {
                let matches = true;

                if (selectedOptions["N° de pavimentos"]) {
                    matches = matches && casa.pavimentos === selectedOptions["N° de pavimentos"];
                }

                if (selectedOptions["N° de quartos"]) {
                    matches = matches && casa.quartos === parseInt(selectedOptions["N° de quartos"]);
                }

                if (selectedOptions["N° de banheiros"]) {
                    matches = matches && casa.banheiros === parseInt(selectedOptions["N° de banheiros"]);
                }

                if (selectedOptions["Área construída"]) {
                    const [min, max] = selectedOptions["Área construída"].split("-").map(Number);
                    matches = matches && casa.area >= min && casa.area <= max;
                }

                return matches;
            });

            console.log("✅ Casas filtradas:", filtered);
            setFilteredCards(filtered);
            setHasSearched(true);
            setLoading(false);

            if (filtered.length === 0) {
                iniciarContagemRegressiva();
            }
        }, 800);
    };

    const iniciarContagemRegressiva = () => {
        let tempo = 5;
        setCountdown(tempo);

        const interval = setInterval(() => {
            tempo -= 1;
            setCountdown(tempo);

            if (tempo === 0) {
                clearInterval(interval);
                limparFiltro();
            }
        }, 1000);
    };

    const limparFiltro = () => {
        console.log("🗑️ Limpando filtros automaticamente.");
        setFilteredCards(cards);
        setHasSearched(false);
        setCountdown(null);
    };

    return (
        <HomeContent>
            <h1 data-aos="fade-up" data-aos-delay="100">
                Conheça o nosso <b>catálogo de casas</b>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
                Aqui, você encontra projetos modernos em Steel Frame, explore os modelos e escolha aquele que mais combina com o seu estilo de vida!
            </p>

            <Filtro
                cards={cards}
                onSearch={aplicarFiltro}
                hasSearched={hasSearched}
                onClearFilters={limparFiltro}
            />

            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {filteredCards.length === 0 ? (
                        <NotFoundContainer>
                            Nenhuma casa encontrada com os filtros selecionados.<br />
                        </NotFoundContainer>
                    ) : (
                        <HomeCatalogo isLoading={loading}>
                            {filteredCards.slice(0, visibleCount).map((card) => (
                                <CardCatalogo key={card.id} {...card} />
                            ))}
                        </HomeCatalogo>
                    )}
                </>
            )}

            {visibleCount < filteredCards.length && (
                <LoadMoreButton onClick={() => setVisibleCount(prev => prev + (isMobile ? 3 : 6))}>
                    Ver mais
                </LoadMoreButton>
            )}
        </HomeContent>
    );
};

export default Home;
