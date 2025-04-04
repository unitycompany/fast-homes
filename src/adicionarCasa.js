import { db } from "./services/firebaseConfig.js"; // Importando sua configuração do Firebase
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";

// Função para criar um slug automaticamente
const generateSlug = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
};

// Função para adicionar uma casa ao Firestore
const adicionarCasa = async () => {
    try {
        const nomeCasa = "Colorada";
        const idDoc = `casa-${generateSlug(nomeCasa)}`;

        const novaCasa = {
            nome: nomeCasa,
            slug: generateSlug(nomeCasa),
            descricao: "Colorado é uma casa minimalista e sofisticada.",
            area: 120,
            largura: "21,00 x 10,00",
            lote: "40x20",
            pavimentos: "2 pavimentos",
            quartos: 4,
            suites: 2,
            banheiros: 3,
            garagem: 2,
            create: serverTimestamp(),
            churrasqueira: true,
            liveViews: 0,
            views: 100,
            piscina: false,
            imagem: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/73ffb0e2-19a5-4cf5-e84b-5dbcbb3f6200/public",
            imagemDois: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5493a461-fb61-43ac-8edb-b734ca35fc00/public",
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
