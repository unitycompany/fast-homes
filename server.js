import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import multer from "multer";
import FormData from "form-data";
import fs from "fs";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// Rota para obter a URL de upload do Cloudflare
app.post("/api/get-upload-url", async (req, res) => {
    try {
        const response = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
            {},
            {
                headers: {
                    "Authorization": `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("🔹 Resposta do Cloudflare:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("❌ Erro ao obter a URL de upload:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Erro ao obter a URL de upload do Cloudflare" });
    }
});

// Rota para fazer o upload da imagem no formato multipart/form-data
app.post("/api/upload-image", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Nenhum arquivo enviado." });
        }

        // Obtém a URL de upload do Cloudflare
        const cloudflareUploadURL = await getCloudflareUploadURL();
        if (!cloudflareUploadURL) return res.status(500).json({ error: "Erro ao obter URL de upload do Cloudflare." });

        // Criação do FormData para enviar o arquivo como multipart/form-data
        const form = new FormData();
        form.append("file", fs.createReadStream(req.file.path));

        // Enviar o arquivo para a URL de upload do Cloudflare
        const uploadResponse = await axios.post(cloudflareUploadURL, form, {
            headers: {
                ...form.getHeaders(), // Cabeçalhos corretos para upload
            },
        });

        // Excluir o arquivo temporário após o upload
        fs.unlinkSync(req.file.path);

        // Verifica se o upload foi bem-sucedido
        if (uploadResponse.data.success) {
            const imageUrl = uploadResponse.data.result.variants[0]; // URL da imagem
            return res.json({ success: true, imageUrl });
        } else {
            return res.status(500).json({ error: "Erro ao fazer upload para o Cloudflare." });
        }
    } catch (error) {
        console.error("❌ Erro no upload de imagem:", error);
        res.status(500).json({ error: "Erro no upload." });
    }
});

// Função para obter a URL de upload do Cloudflare
const getCloudflareUploadURL = async () => {
    try {
        const response = await axios.post(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
            {},
            {
                headers: {
                    "Authorization": `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data.result.uploadURL;  // Retorna a URL de upload
    } catch (error) {
        console.error("❌ Erro ao obter URL de upload:", error.message);
        return null;
    }
};

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));