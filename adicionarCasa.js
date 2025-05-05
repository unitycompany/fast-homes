import { db } from "./src/services/firebaseConfig.js"; // Importando sua configuração do Firebase
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";

// Função para criar um slug automaticamente
const generateSlug = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
};

// Função para adicionar uma casa ao Firestore
const adicionarCasa = async () => {
    try {
        const nomeCasa = "Espanha";
        const idDoc = `casa-${generateSlug(nomeCasa)}`;

        const novaCasa = {
            nome: nomeCasa,
            slug: generateSlug(nomeCasa),
            area: 106.62,
            largura: "11,50 x 9,50",
            lote: "14,50 x 16,50",
            pavimentos: "1 pavimento",
            quartos: 2,
            suites: 1,
            banheiros: 2,
            garagem: 1,
            create: serverTimestamp(),
            churrasqueira: false,
            descricao: `Casa Espanha: elegância em 106,62m², 1 pavimento, 1 suíte, espaços amplos e design sofisticado.`,
            liveViews: 0,
            views: 100,
            piscina: false,
            imagemMobile: "",
            imagem: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e70bc9f-e447-4515-13e5-1a30f095c600/public",
            imagemDois: "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9e56a13-d7ee-4e12-9d37-62cfeca6a400/public",
            dobra2: {
                title1: "Área de Lazer",
                descricao: "Espaço com piscina e churrasqueira.",
                carrossel: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f11361a3-9ccb-46c6-a4f5-37a197de4400/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9fc0f3a-7edd-4422-caea-f88f89d22b00/public"]
            },
            dobra3: {
                title: "Interiores Modernos",
                descricao: "Arquitetura sofisticada.",
                carrosselEsquerda: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/98bfc4fc-9608-4f8f-16e0-ddbf408f3300/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f60ad6e2-b0b2-4a99-60b7-dba43a0e1b00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/910b8327-4a06-421e-fb95-003817dda200/public"],
                carrosselDireita: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7dd4537-656a-41fb-de08-9dd07c387d00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b5eb94ca-817f-4e67-b181-9da21f818f00/public", "https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b8ee38c5-acf7-4187-2539-e709a7c23700/public"]
            },
            dobra4: {
                plantaBaixa: ["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bcfbb396-39ff-483b-8991-378f9494cf00/public"] 
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
