import React, { useEffect, useState } from "react";
import { db } from "../../../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Name from "./Name";
import Home from "./Home";
import Dobra2 from "./Dobra2";
import Dobra3 from "./Dobra3";
import Dobra4 from "./Dobra4";
import FormLP from "../../../components/form-lp";
import CardsCarrosselLP from "../../../components/cards/CardCarrosselLP";
import PacoteCompleto from "../../../components/cards/Modal01";


const LandingPage = () => {
    const { slug } = useParams();
    console.log("🔍 Parâmetro da URL (slug):", slug);
    const [dados, setDados] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "catalogo"));
                const casas = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
    
                console.log("📢 Dados recebidos do Firebase:", casas);
                console.log("🔍 Parâmetro da URL (slug):", slug);
    
                if (!slug) {
                    console.error("❌ slug está indefinido!");
                    setDados(null);
                    setLoading(false);
                    return;
                }
    
                const casaSelecionada = casas.find(casa => casa.slug === slug);
    
                if (casaSelecionada) {
                    console.log("✅ Casa encontrada:", casaSelecionada);
                    setDados(casaSelecionada);
                } else {
                    console.error("❌ Casa não encontrada no Firebase:", slug);
                    setDados(null);
                }
            } catch (error) {
                console.error("❌ Erro ao buscar dados:", error);
            }
            setLoading(false);
        };
    
        fetchData();
    }, [slug]);
    

    if (loading) return <p>Carregando...</p>;
    if (!dados) return <p>Casa não encontrada. Verifique se o slug foi salvo corretamente no Firebase.</p>;

    return (
        <>
                <PacoteCompleto />
                <Name nomeDaCasa={dados.nome} descricaoDaCasa={dados.descricao}/>
                <Home 
                    imagens={[dados.imagem, dados.imagemDois]} 
                    area={dados.area} 
                    largura={dados.largura} 
                    lote={dados.lote} 
                    quartos={dados.quartos} 
                    suites={dados.suites} 
                    banheiros={dados.banheiros} 
                    garagem={dados.garagem} 
                    churrasqueira={dados.churrasqueira} 
                    piscina={dados.piscina} 
                />
                {dados.dobra2 && <Dobra2 title1={dados.dobra2?.title1} descricao={dados.dobra2?.descricao} imagens={dados.dobra2?.carrossel} area={dados.area} />}
                {dados.dobra3 && <Dobra3 title={dados.dobra3?.title} descricao={dados.dobra3?.descricao} 
                    carrosselEsquerda={dados.dobra3?.carrosselEsquerda} carrosselDireita={dados.dobra3?.carrosselDireita} />}
                {dados.dobra4 && <Dobra4 imagem={dados.dobra4?.imagem} />}
                <FormLP />
                <CardsCarrosselLP />
        </> 
    );
};

export default LandingPage;
