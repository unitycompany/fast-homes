import { db } from "./src/services/firebaseConfig.js"; // Importando sua configuração do Firebase
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";

// Função para criar um slug automaticamente
const generateSlug = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
};

// Função para adicionar uma casa ao Firestore
const adicionarCasa = async () => {
    try {
        const nomeCasa = "Madri";
        const idDoc = `casa-${generateSlug(nomeCasa)}`;

        const novaCasa = {
            nome: nomeCasa,
            slug: generateSlug(nomeCasa),
            area: 137.16,
            largura: "16,15 x 8,40",
            lote: "19,15 x 18,40",
            pavimentos: "1 pavimento",
            quartos: 3,
            suites: 1,
            banheiros: 2,
            garagem: 0,
            create: serverTimestamp(),
            churrasqueira: false,
            descricao: `Casa Madri: elegância em 137.16m², 1 pavimento, 3 quartos, espaços amplos e design sofisticado.`,
            liveViews: 0,
            views: 100,
            piscina: false,
            imagemMobile: "",
            imagem: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebf4dc80-afe9-463f-e35d-73ede6299200/public",
            imagemDois: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5d539b52-8f6a-4872-ca3d-877f5c815c00/public",
            dobra2: {
                title1: "Área de Lazer",
                descricao: "Espaço com piscina e churrasqueira.",
                carrossel: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca73a9d0-9447-436d-0ead-94f3b9c9ce00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4a9610be-d28c-4de2-b7f4-a763f5e4cd00/public"]
            },
            dobra3: {
                title: "Interiores Modernos",
                descricao: "Arquitetura sofisticada.",
                carrosselEsquerda: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9057ea9a-0617-42a3-d351-25f0b527bd00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2d071a91-8be4-40cd-757c-3c84f5425b00/public"],
                carrosselDireita: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/65a0d3e9-f525-4fbf-5695-2a73ddad4b00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/94afca14-78e1-431a-253f-764b6cc92500/public"]
            },
            dobra4: {
                plantaBaixa: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3ce6611-ff61-4c78-9310-566cd9a21c00/public"] 
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
