import React, { useEffect, useState } from "react";
import { db } from "../../../services/firebaseConfig";
import { doc, getDocs, collection, setDoc, deleteDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import Name from "./Name";
import Home from "./Home";
import Dobra2 from "./DobraDois";
import Dobra3 from "./DobraTres";
import Dobra4 from "./DobraQuatro";
import FormLP from "../../../components/form-lp";
import CardsCarrosselLP from "../../../components/cards/CardCarrosselLP";
import { Helmet } from "react-helmet-async";
import Error from "../../../../404";
import { FaCircle, FaUser } from "react-icons/fa";

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

const pulse = keyframes`
    0% {
        transform: scale(1.0);
    }
    50% {
        transform: scale(1.2);
    }
`

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
    box-shadow: 0 0 5px rgba(9, 110, 0, 0.5);

    & svg {
        font-size: 12px;
        fill: #1f9202;
        animation: ${pulse} 1s linear infinite alternate-reverse;
    }

    & span {
        font-size: 12px;

        & b {
            font-weight: 600;
            color: #1f9202;
        }
    }
`

const LandingPage = () => {
    const { slug } = useParams();
    console.log("🔍 Parâmetro da URL (slug):", slug);
    const [dados, setDados] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timeoutExceeded, setTimeoutExceeded] = useState(false);
    const [liveViews, setLiveViews] = useState(0);
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
          // Gera um ID único para o visualizador usando crypto.randomUUID se disponível
          const viewerId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
          
          // Define a referência para o documento da casa e para a subcoleção "liveViews"
          const houseDocRef = doc(db, "catalogo", dados.id);
          const liveViewsCollectionRef = collection(houseDocRef, "liveViews");
          const viewerDocRef = doc(liveViewsCollectionRef, viewerId);
    
          // Registra a visualização com um timestamp
          setDoc(viewerDocRef, { lastActive: serverTimestamp() })
            .catch(error => console.error("Erro ao registrar visualização:", error));
    
          // A cada 1 minuto, atualiza o timestamp para indicar que o usuário continua ativo
          const heartbeatInterval = setInterval(() => {
            setDoc(viewerDocRef, { lastActive: serverTimestamp() }, { merge: true })
              .catch(error => console.error("Erro no heartbeat:", error));
          }, 60000);
    
          // Escuta a subcoleção para contar as visualizações ativas
          // Considera como ativo se o registro foi atualizado nos últimos 2 minutos (threshold ajustável)
          const unsubscribe = onSnapshot(liveViewsCollectionRef, (snapshot) => {
            const now = new Date();
            let count = 0;
            snapshot.forEach((docSnapshot) => {
              const data = docSnapshot.data();
              if (data.lastActive) {
                const lastActiveDate = data.lastActive.toDate();
                if (now - lastActiveDate < 2 * 60000) { // 2 minutos de tolerância
                  count++;
                }
              }
            });
            setLiveViews(count);
          });
    
          // Cleanup: remove o heartbeat e o registro de visualização ao sair da página
          return () => {
            clearInterval(heartbeatInterval);
            unsubscribe();
            deleteDoc(viewerDocRef)
              .catch(error => console.error("Erro ao remover visualização:", error));
          };
        }
      }, [dados]);

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
                <FaCircle />
                <span>
                <b>{liveViews} pessoas</b> vendo a casa - {dados.nome}
                </span>
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
