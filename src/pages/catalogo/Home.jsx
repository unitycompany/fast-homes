import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "./../../services/firebaseConfig"; 
import { collection, getDocs } from "firebase/firestore";
import Filtro from "../../components/filtro";
import CardCatalogo from "../../components/cards/CardCatalogo";

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
`;

const HomeTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    & h1 {
        font-family: var(--font--aboreto);
        font-size: 30px;
        text-align: center;
    }

    & p {
        width: 40%;
        font-size: 14px;
        text-align: center;
        line-height: 120%;
        margin-top: -20px;
    }
`;

const HomeCatalogo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 5%;
    gap: 20px;
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

const Home = () => {
    const [cards, setCards] = useState([]); // Armazena todos os cards do Firebase
    const [visibleCount, setVisibleCount] = useState(6); // Controla quantos são visíveis

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "catalogo")); 
                const data = querySnapshot.docs.map(doc => {
                    const casa = {
                        id: doc.id,
                        ...doc.data(),
                    };
                    console.log("🏠 Dados da casa:", casa); // LOG PARA DEPURAÇÃO
                    return casa;
                });
                setCards(data);
            } catch (error) {
                console.error("❌ Erro ao buscar dados:", error);
            }
        };
    
        fetchCards();
    }, []);
    
    

    return (
        <>
            <HomeContent>
                <HomeTop>
                    <h1>Conheça nosso catálogo de casas</h1>
                    <p>Colocar uma descrição curta e objetiva falando sobre a fast homes e o que nós proporcionamos</p>
                    <Filtro />
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
