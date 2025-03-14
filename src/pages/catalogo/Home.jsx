import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "./../../services/firebaseConfig"; 
import { collection, getDocs } from "firebase/firestore";
import Filtro from "../../components/filtro";
import CardCatalogo from "../../components/cards/CardCatalogo";
import { useLocation } from "react-router-dom";

const HomeContent = styled.div`
    height: auto;
    padding-top: 12%;
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font--montserrat);
    flex-direction: column;
    gap: 40px;
    left: 50%;
    position: relative;
    top: 0;
    transform: translateX(-50%);

    @media (max-width: 768px){
        padding: 25% 0 5% 0;
    }
`;

const HomeTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px){
        padding: 0 5%;
    }

    & h1 {
        font-family: var(--font--aboreto);
        font-size: 30px;
        text-align: center;

        @media (max-width: 768px){
            font-size: 24px;
            line-height: 100%;
        }
    }

    & p {
        width: 40%;
        font-size: 14px;
        text-align: center;
        line-height: 120%;
        margin-top: -20px;

        @media (max-width: 768px){
            width: 100%;
        }
    }
`;

const HomeCatalogo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 2.5%;
    gap: 20px;

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

const LoadingText = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
`;

const Home = () => {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fetchCards = async () => {
            const snapshot = await getDocs(collection(db, "catalogo"));
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCards(data);
            setFilteredCards(data);
        };
        fetchCards();
    }, []);

    const aplicarFiltro = (selectedOptions) => {
        setLoading(true);

        console.log("Filtro selecionado:", selectedOptions);
        console.log("Dados das casas carregadas:", cards);

            
        setTimeout(() => {
            if (!selectedOptions || Object.keys(selectedOptions).length === 0) {
                setFilteredCards(cards);
                setVisibleCount(6);
                setLoading(false);
                return;
            }
    
            const filtered = cards.filter((casa) => {
                let matches = [];
    
                if (selectedOptions["N° de pavimentos"]) {
                    matches.push(casa.pavimentos === selectedOptions["N° de pavimentos"]);
                }
    
                if (selectedOptions["N° de quartos"]) {
                    matches.push(casa.quartos === parseInt(selectedOptions["N° de quartos"]));
                }
    
                if (selectedOptions["N° de banheiros"]) {
                    matches.push(casa.banheiros === parseInt(selectedOptions["N° de banheiros"]));
                }
    
                if (selectedOptions["Área construída"]) {
                    const [min, max] = selectedOptions["Área construída"].split("-").map(Number);
                    matches.push(casa.area >= min && casa.area <= max);
                }
    
                return matches.length > 0 && matches.some(Boolean);
            });
    
            setFilteredCards(filtered);
            setVisibleCount(6);
            setLoading(false);
        }, 800);
    };
    
    useEffect(() => {
        if (location.state?.selectedOptions) {
            aplicarFiltro(location.state.selectedOptions);
        }
    }, [cards, location.state]);
    
    return (
        <>
            <HomeContent>
                <HomeTop>
                    <h1>Conheça nosso catálogo de casas</h1>
                    <p>Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos</p>
                    <Filtro onSearch={aplicarFiltro}/>
                </HomeTop>
                <HomeCatalogo>
                    {cards.slice(0, visibleCount).map((card) => (
                        <CardCatalogo 
                            slug={card.slug} 
                            imagem={card.imagem}
                              id={card.id}  
                            imagemDois={card.imagemDois} 
                            key={card.id} 
                            nome={card.nome} 
                            pavimentos={card.pavimentos} 
                            area={card.area} 
                            largura={card.largura} 
                            lote={card.lote} 
                        />
                    ))}
                </HomeCatalogo>
                {visibleCount < cards.length && (
                    <LoadMoreButton onClick={() => setVisibleCount(prev => prev + 6)}>
                        Ver mais
                    </LoadMoreButton>
                )}
            </HomeContent>
        </>
    );
};

export default Home;
