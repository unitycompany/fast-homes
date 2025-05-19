import { db } from "./src/services/firebaseConfig.js"; // Importando sua configuração do Firebase
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";

// Função para criar um slug automaticamente
const generateSlug = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
};

// Função para adicionar uma casa ao Firestore
const adicionarCasa = async () => {
    try {
        const nomeCasa = "Montana";
        const idDoc = `casa-${generateSlug(nomeCasa)}`;

        const novaCasa = {
            nome: nomeCasa,
            slug: generateSlug(nomeCasa),
            area: 23,
            largura: "3,20 x 7,50",
            lote: "6,30 x 17,60",
            pavimentos: "1 pavimentos",
            quartos: 1,
            suites: 0,
            banheiros: 1,
            garagem: 0,
            create: serverTimestamp(),
            churrasqueira: false,
            descricao: `Casa Montanha: elegância em 23.00m², 1 pavimentos, 1 quarto/sala, espaços amplos e design sofisticado.`,
            liveViews: 0,
            views: 100,
            piscina: false,
            imagemMobile: "",
            imagem: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c2c98643-0a28-49ca-4b53-e004013ce100/public",
            imagemDois: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6b0b4b6f-715f-4a61-4008-cf41a61a5a00/public",
            dobra2: {
                title1: "Área de Lazer",
                descricao: "Espaço com piscina e churrasqueira.",
                carrossel: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5f64ef4c-e6f3-4183-0fb9-d0ab017f2900/public"]
            },
            dobra3: {
                title: "Interiores Modernos",
                descricao: "Arquitetura sofisticada.",
                carrosselEsquerda: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d0b086a-889e-4f60-82e6-f10dd645e300/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e7ec9f36-a8b7-4aa7-f5fb-4a94fbab4e00/public"],
                carrosselDireita: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f5f33027-a966-451c-3832-453e5962ef00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/03e3882a-6955-48bd-9cad-1938b5939600/public"]
            },
            dobra4: {
                plantaBaixa: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bcc90469-42e5-4b3a-9d35-c9fb9bd0d400/public"] 
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
