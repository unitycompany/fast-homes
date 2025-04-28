import { db } from "./src/services/firebaseConfig.js"; // Importando sua configuração do Firebase
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";

// Função para criar um slug automaticamente
const generateSlug = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
};

// Função para adicionar uma casa ao Firestore
const adicionarCasa = async () => {
    try {
        const nomeCasa = "Dallas";
        const idDoc = `casa-${generateSlug(nomeCasa)}`;

        const novaCasa = {
            nome: nomeCasa,
            slug: generateSlug(nomeCasa),
            area: 139,
            largura: "9,80 x 17,5",
            lote: "11,80 x 27,50",
            pavimentos: "1 pavimento",
            quartos: 0,
            suites: 2,
            banheiros: 2,
            garagem: 1,
            create: serverTimestamp(),
            churrasqueira: false,
            descricao: `Casa Dallas: elegância em 139,00m², 1 pavimento, 2 suítes, espaços amplos e design sofisticado.`,
            liveViews: 0,
            views: 100,
            piscina: false,
            imagemMobile: "",
            imagem: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fed4d69b-4084-445f-a6d2-41697c47ed00/public",
            imagemDois: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e398c996-2bba-47e1-701d-a12545567900/public",
            dobra2: {
                title1: "Área de Lazer",
                descricao: "Espaço com piscina e churrasqueira.",
                carrossel: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dbcb4ff9-ec10-458d-2530-07d2a9107200/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/35891524-d8fc-4677-0083-aebdea343600/public"]
            },
            dobra3: {
                title: "Interiores Modernos",
                descricao: "Arquitetura sofisticada.",
                carrosselEsquerda: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f5f26423-f3a4-4fbc-03fa-1a513c5fd600/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3328bbf7-8e84-45b1-0748-a6e0aa85b600/public"],
                carrosselDireita: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ae3ca71-f393-4ae1-e826-bae66be14b00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f1d224c0-af65-4ce6-4fba-d68cb7148300/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/295b89bd-a7e3-48b7-f44a-d7ca79a11200/public"]
            },
            dobra4: {
                plantaBaixa: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/219aa00d-4692-4737-3db4-a5343092a200/public"] 
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
