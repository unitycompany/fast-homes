import { db } from "./services/firebaseConfig.js"; // Importando sua configuração do Firebase
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";

// Função para criar um slug automaticamente
const generateSlug = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
};

// Função para adicionar uma casa ao Firestore
const adicionarCasa = async () => {
    try {
        const nomeCasa = "Tennessee";
        const idDoc = `casa-${generateSlug(nomeCasa)}`;

        const novaCasa = {
            nome: nomeCasa,
            slug: generateSlug(nomeCasa),
            descricao: "Casa Tennessee: elegância em 216 m², 2 pavimentos, 3 suítes, espaços amplos e design sofisticado.",
            area: 216.60,
            largura: "15,30 x 10,60",
            lote: "18,30 x 20,60",
            pavimentos: "2 pavimentos",
            quartos: 1,
            suites: 3,
            banheiros: 6,
            garagem: 1,
            create: serverTimestamp(),
            churrasqueira: false,
            liveViews: 0,
            views: 100,
            piscina: false,
            imagem: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/125e075c-01b0-4341-29ce-7d2514099800/public",
            imagemDois: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/14a05646-3816-41c1-91e5-54957e118500/public",
            dobra2: {
                title1: "Área de Lazer",
                descricao: "Espaço com piscina e churrasqueira.",
                carrossel: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5493a461-fb61-43ac-8edb-b734ca35fc00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cbf6128c-6b08-45a7-8bae-fde2bd0d5400/public"]
            },
            dobra3: {
                title: "Interiores Modernos",
                descricao: "Arquitetura sofisticada.",
                carrosselEsquerda: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a6ec363-cfb6-4c3f-a274-1d2925b69300/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7aa4063b-ba6f-4d57-4aea-49f569975c00/public"],
                carrosselDireita: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7aa4063b-ba6f-4d57-4aea-49f569975c00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a6ec363-cfb6-4c3f-a274-1d2925b69300/public"]
            },
            dobra4: {
                plantaBaixa: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9f52eb53-d876-4646-6db9-62d604a44000/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9f52eb53-d876-4646-6db9-62d604a44000/public"] 
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
