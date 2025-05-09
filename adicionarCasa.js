import { db } from "./src/services/firebaseConfig.js"; // Importando sua configuração do Firebase
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";

// Função para criar um slug automaticamente
const generateSlug = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
};

// Função para adicionar uma casa ao Firestore
const adicionarCasa = async () => {
    try {
        const nomeCasa = "Florença";
        const idDoc = `casa-${generateSlug(nomeCasa)}`;

        const novaCasa = {
            nome: nomeCasa,
            slug: generateSlug(nomeCasa),
            area: 126.80,
            largura: "10,50 x 12,15",
            lote: "13,50 x 22,15",
            pavimentos: "1 pavimento",
            quartos: 3,
            suites: 1,
            banheiros: 2,
            garagem: 1,
            create: serverTimestamp(),
            churrasqueira: false,
            descricao: `Casa Florença: elegância em 126.80m², 1 pavimento, 1 suíte, espaços amplos e design sofisticado.`,
            liveViews: 0,
            views: 100,
            piscina: false,
            imagemMobile: "",
            imagem: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/02f08233-7e8a-4a6a-a60d-5445e23d2700/public",
            imagemDois: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8c0984ec-ddf9-4014-104f-2fd014461a00/public",
            dobra2: {
                title1: "Área de Lazer",
                descricao: "Espaço com piscina e churrasqueira.",
                carrossel: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d49cc7c9-83f2-41af-cd81-cc4930287100/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fbb3bf45-0aad-4adc-7b6b-824a01648d00/public"]
            },
            dobra3: {
                title: "Interiores Modernos",
                descricao: "Arquitetura sofisticada.",
                carrosselEsquerda: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cea00a76-1897-4a69-c6e0-b6d140b3e700/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/77a0c3c8-acc4-4378-38bf-44dbc83aa300/public"],
                carrosselDireita: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c093df94-28a1-4830-757b-e38920c7db00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9fd8d3a-77a2-497d-cd9b-5d4c49c8b500/public"]
            },
            dobra4: {
                plantaBaixa: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0b4e8853-c911-48f7-af08-9c0be4504200/public"] 
            }
        };

        await setDoc(doc(db, "catalogo", idDoc), novaCasa);
        console.log("✅ Casa adicionada com sucesso! ID:", idDoc);
        process.exit(); // Fecha o script após a execução
    } catch (error) {
        console.error("❌ Erro ao adicionar casa:", error);
        process.exit(1);
    }
};

// Executa a função ao rodar o script
adicionarCasa();
