import { db } from "./src/services/firebaseConfig.js"; // Importando sua configuração do Firebase
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";

// Função para criar um slug automaticamente
const generateSlug = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
};

// Função para adicionar uma casa ao Firestore
const adicionarCasa = async () => {
    try {
        const nomeCasa = "Missouri";
        const idDoc = `casa-${generateSlug(nomeCasa)}`;

        const novaCasa = {
            nome: nomeCasa,
            slug: generateSlug(nomeCasa),
            area: 216.30,
            largura: "21,00 x 17,00",
            lote: "24,00 x 27,00",
            pavimentos: "1 pavimento",
            quartos: 3,
            suites: 3,
            banheiros: 3,
            garagem: 1,
            create: serverTimestamp(),
            churrasqueira: true,
            descricao: `Casa Missouri: elegância em 216,30m², 1 pavimento, 3 quartos, espaços amplos e design sofisticado.`,
            liveViews: 0,
            views: 100,
            piscina: false,
            imagem: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/edd6066d-89de-4c2b-f938-2c02289a5900/public",
            imagemDois: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a8619ca4-73a9-4f1f-7756-cad91b393500/public",
            dobra2: {
                title1: "Área de Lazer",
                descricao: "Espaço com piscina e churrasqueira.",
                carrossel: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/91b8fb62-ea21-48b1-7333-9b49c434c000/public"]
            },
            dobra3: {
                title: "Interiores Modernos",
                descricao: "Arquitetura sofisticada.",
                carrosselEsquerda: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6e78ac0d-d748-41ef-c039-e41166058900/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3328bbf7-8e84-45b1-0748-a6e0aa85b600/public"],
                carrosselDireita: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/931d5602-4bd6-43b5-65b0-ff31c2278400/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f1d224c0-af65-4ce6-4fba-d68cb7148300/public"]
            },
            dobra4: {
                plantaBaixa: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/14d5d553-968b-4f36-0be4-0b62abbd6b00/public"] 
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
