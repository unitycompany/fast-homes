import React, { useEffect, useState } from "react";
import { db } from "../../../services/firebaseConfig";
import { collection, getDocs, doc, updateDoc, onSnapshot, increment } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import Name from "./Name";
import Home from "./Home";
import Dobra2 from "./DobraDois";
import Dobra3 from "./DobraTres";
import Dobra4 from "./DobraQuatro";
import FormLP from "../../../components/form-lp";
import CardsCarrosselLP from "../../../components/cards/CardCarrosselLP";
import { Helmet } from "react-helmet-async";
import Error from "../../../../404";
import { FaUser } from "react-icons/fa";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const View = styled.aside`
    position: fixed;
    bottom: 20px;
    left: 7.5%;
    z-index: 99999;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & svg {
        font-size: 12px;
        fill: #1f9202;
    }

    & span {
        font-size: 12px;
    }
`

const LandingPage = () => {
    const { slug } = useParams();
    console.log("🔍 Parâmetro da URL (slug):", slug);
    const [dados, setDados] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timeoutExceeded, setTimeoutExceeded] = useState(false);
    const [liveViews, setLiveViews] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setTimeout(() => {
                if (loading) {
                    setTimeoutExceeded(true);
                }
            }, 5000); // 5 segundos

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

    useEffect(() => {
        if (dados) {
            const houseRef = doc(db, "catalogo", dados.id);
            updateDoc(houseRef, { liveViews: increment(1)}).catch(error => {
                console.log("Erro ao incrementar liveViews", error);
            });

            const unsubscribe = onSnapshot(houseRef, (snapshot) => {
                const data = snapshot.data();
                setLiveViews(data.liveViews < 3 ? 3 : data.liveViews);
            });

            return () => {
                updateDoc(houseRef, {liveViews: increment(-1)}).catch(error => {
                    console.log("Erro ao diminuir um incremento", error);
                });
                unsubscribe();
            }
        }
    }, [dados])

    if (loading) {
        return (
            <LoadingWrapper>
                <Spinner />
                <p style={{ marginLeft: "10px" }}>
                    {timeoutExceeded ? "Carregamento demorando mais que o esperado..." : "Carregando..."}
                </p>
            </LoadingWrapper>
        );
    }

    if (!dados) return <Error />;

    return (
        <>
            <Helmet>
                <title>{dados.nome} - Fast Homes</title>
                <meta name="description" content={dados.descricao} />
            </Helmet>
            <View>
                <FaUser />
                <span>{liveViews} Pessoas vendo a casa</span>
            </View>
            <Name nome={dados.nome} descricao={dados.descricao} />
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
                pavimentos={dados.pavimentos} 
            />
            {dados.dobra2 && <Dobra2 title1={dados.dobra2?.title1} descricao={dados.dobra2?.descricao} imagens={dados.dobra2?.carrossel} area={dados.area} />}
            {dados.dobra3 && <Dobra3 title={dados.dobra3?.title} descricao={dados.dobra3?.descricao} 
                carrosselEsquerda={dados.dobra3?.carrosselEsquerda} carrosselDireita={dados.dobra3?.carrosselDireita} />}
            {dados.dobra4 && <Dobra4 plantaBaixa={dados.dobra4?.plantaBaixa} />}
            <FormLP />
            <CardsCarrosselLP />
        </> 
    );
};

export default LandingPage;
