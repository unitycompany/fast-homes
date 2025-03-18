import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./services/firebaseConfig";
import LandingPreview from "./pages/catalogo/lp/Preview";
import styled from "styled-components";
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const Sidebar = styled.aside`
  width: 320px;
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? "0" : "-330px")};
  transition: left 0.3s ease-in-out; /* Animação suave */
  top: 50%;
  transform: translateY(-50%);
  height: 70vh;
  overflow-y: auto;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 24px;
  z-index: 9999;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 5px solid var(--color--green--low);
  } 

  & label {
    width: 100%;
    position: relative;
    padding: 10px;
    border: 1px solid #00000050;

    & input {
        font-size: 16px;
        width: 100%;

        &::placeholder{
            font-size: 14px;
            color: #000;
            opacity: 0.5;
        }

        &:focus{
            border: none;
        }
    }

    & span {
        position: absolute;
        top: -10px;
        background: #fff;
        left: 8px;
        font-size: 12px;
        padding: 0 5px;
    }
  }

  & h2 {
    font-size: 16px;
    font-weight: 600;
    font-family: var(--font--aboreto);
  }

  & h1 {
    font-size: 16px;
    font-weight: 600;
    font-family: var(--font--aboreto);
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? "320px" : "10px")};
  top: 50%;
  transform: translateY(-50%);
  background: var(--color--green--low);
  color: #fff;
  border: none;
  margin-left: 10px;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 10000;

  &:hover {
    background: var(--color--green--medium);
  }
`;

const Textarea = styled.textarea`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  color: #1f2937;

  &::placeholder{
    font-size: 14px;
    opacity: 0.5;
    color: #000;
  }
`;

const Button = styled.button`
  background-color: var(--color--green--low);
  color: #fff;
  width: 100%;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 4px solid var(--color--green--medium);
  padding: 15px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: var(--color--green--low);
  }
`;

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

const AdminPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [dados, setDados] = useState({
    nome: "",
    descricao: "",
    area: "",
    largura: "",
    lote: "",
    pavimentos: "",
    quartos: "",
    suites: "",
    banheiros: "",
    garagem: "",
    churrasqueira: "",
    piscina: "",
    imagem: "",
    imagemDois: "",
    dobra2: { title1: "", descricao: "", area:"", carrossel: ["", ""] },
    dobra3: { title: "", descricao: "", carrosselEsquerda: ["", ""], carrosselDireita: ["", ""] },
    dobra4: { imagem: "" },
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const gerarSlug = (texto) =>
    texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");

  const handleInputChange = (e, section = null, field = null, index = null) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : type === "number" ? Number(value) : value;

    if (section && field && index !== null) {
      setDados((prev) => {
        const updatedArray = [...prev[section][field]];
        updatedArray[index] = newValue;
        return { ...prev, [section]: { ...prev[section], [field]: updatedArray } };
      });
    } else if (section && field) {
      setDados((prev) => ({ ...prev, [section]: { ...prev[section], [field]: newValue } }));
    } else {
      setDados((prev) => ({ ...prev, [name]: newValue }));
    }
  };

  const uploadImage = async (file) => {
    if (!file) return null;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}/${file.name}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLOUDFLARE_API_TOKEN}`,
            "Content-Type": file.type,
          },
          body: file,
        }
      );

      if (!response.ok) throw new Error("Erro ao enviar imagem");

      return `${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}/${file.name}`;
    } catch (error) {
      console.error("Erro no upload:", error);
      alert("❌ Falha ao fazer upload da imagem");
      return null;
    }
  };

  const handleImageUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = await uploadImage(file);
    if (imageUrl) {
      setDados((prev) => ({ ...prev, [fieldName]: imageUrl }));
    }
  };

  const publicarCasa = async () => {
    try {
      const docRef = await addDoc(collection(db, "catalogo"), { ...dados, slug: gerarSlug(dados.nome) });
      alert("✅ Casa publicada com sucesso! ID: " + docRef.id);
    } catch (error) {
      console.error("❌ Erro ao publicar:", error);
      alert("Erro ao publicar: " + error.message);
    }
  };

  return (
    <div className="flex">
    <ToggleButton isOpen={isSidebarOpen} onClick={toggleSidebar}>
    {isSidebarOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    {isSidebarOpen ? "Minimizar" : "Abrir"}
    </ToggleButton>

      <Sidebar isOpen={isSidebarOpen}>
        <h1>Adicionando uma casa</h1>

        {/* Dobra 1 */}

        <div>
            <label>
                <span>Nome da casa</span>
                <input name="nome" placeholder="Mississipi" value={dados.nome} onChange={handleInputChange} />
            </label>

            <label>
                <span>Descrição</span>
                <Textarea name="descricao" placeholder="É uma casa bela e bonita..." value={dados.descricao} onChange={handleInputChange} />
            </label>

            <label>
                <span>Área em m²</span>
                <input name="area" placeholder="189" value={dados.area} onChange={handleInputChange} />
            </label>
            
            <label>
                <span>Largura (m)</span>
                <input name="largura" placeholder="28,00 x 18,00" value={dados.largura} onChange={handleInputChange} />
            </label>

            <label>
                <span>Lote (m)</span>
                <input name="lote" placeholder="18x29" value={dados.lote} onChange={handleInputChange} />
            </label>
            
            <label>
                <span>Pavimentos</span>
                <input name="pavimentos" placeholder="2 pavimentos" value={dados.pavimentos} onChange={handleInputChange} />
            </label>

            <label>
                <span>Quartos</span>
                <input name="quartos" placeholder="2" value={dados.quartos} onChange={handleInputChange} />
            </label>

            <label>
                <span>Suítes</span>
                <input name="suites" placeholder="3" value={dados.suites} onChange={handleInputChange} />
            </label>
            
            <label>
                <span>Banheiros</span>
                <input type="number" name="banheiros" placeholder="4" value={dados.banheiros} onChange={handleInputChange} />
            </label>

            <label>
                <span>Vagas na garagem</span>
                <input type="number" name="garagem" placeholder="1" value={dados.garagem} onChange={handleInputChange} />
            </label>
            
            <label>
                <span>Área gourmet</span>
                <input name="churrasqueira" placeholder="Sim" value={dados.churrasqueira} onChange={handleInputChange} />
            </label>
            
            <label>
                <span>Piscina</span>
                <input name="piscina" placeholder="Não" value={dados.piscina} onChange={handleInputChange} />
            </label>
            
            <label>
                <span>Imagem de capa</span>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "imagem")} />
                {dados.imagem && <img src={dados.imagem} alt="Imagem Principal" width="100%" />}
            </label>
            
            <label>
                <span>Imagem secundária</span>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "imagemDois")} />
                {dados.imagemDois && <img src={dados.imagemDois} alt="Imagem Secundária" width="100%" />}
            </label>
            
        </div>
        
        {/* Dobra 2 */}

        <div>

            <h2>2 Seção</h2>
            <label>
                <span>Área m²</span>
                <input placeholder="189" onChange={(e) => handleInputChange(e, "dobra2", "area")} />
            </label>

            <label>
                <span>Título</span>
                <input placeholder="Elegância e sofisticação" onChange={(e) => handleInputChange(e, "dobra2", "title1")} />
            </label>

            <label>
                <span>Descrição</span>
                <Textarea placeholder="Juntamos tudo que tem mais qualidade..." onChange={(e) => handleInputChange(e, "dobra2", "descricao")} />
            </label>

            <label>
                <span>Imagem para o carrossel 01</span>
                <input placeholder="Carrossel Imagem 1" onChange={(e) => handleInputChange(e, "dobra2", "carrossel", 0)} />
            </label>

            <label>
                <span>Imagem para o carrossel 02</span>
                <input placeholder="Carrossel Imagem 2" onChange={(e) => handleInputChange(e, "dobra2", "carrossel", 1)} />
            </label>

        </div>
        
        {/* Dobra 3 */}

        <div>
            <h2>3 Seção</h2>

            <label>
                <span>Título</span>
                <input placeholder="Feita para você..." onChange={(e) => handleInputChange(e, "dobra3", "title")} />
            </label>

            <label>
                <span>Descrição</span>
                <Textarea placeholder="Descrição" onChange={(e) => handleInputChange(e, "dobra3", "descricao")} />
            </label>

            <label>
                <span>Carrossel 01 - Esquerda</span>
                <input placeholder="Carrossel Esquerda Img 1" onChange={(e) => handleInputChange(e, "dobra3", "carrosselEsquerda", 0)} />
            </label>

            <label>
                <span>Carrossel 02 - Esquerda</span>
                <input placeholder="Carrossel Esquerda Img 2" onChange={(e) => handleInputChange(e, "dobra3", "carrosselEsquerda", 1)} />
            </label>

            <label>
                <span>Carrossel 01 - Direita</span>
                <input placeholder="Carrossel Direita Img 1" onChange={(e) => handleInputChange(e, "dobra3", "carrosselDireita", 0)} />
            </label>

            <label>
                <span>Carrossel 02 - Direita</span>
                <input placeholder="Carrossel Direita Img 2" onChange={(e) => handleInputChange(e, "dobra3", "carrosselDireita", 1)} />
            </label>
        </div>

        {/* Dobra 4 */}

        <div>
            <h2>Seção 4</h2>
            <label>
                <span>Planta baixa</span>
                <input placeholder="Imagem da planta baixa" onChange={(e) => handleInputChange(e, "dobra4", "imagem")} />
            </label>
            
        </div>
        

        <Button onClick={publicarCasa}>Postar casa</Button>
      </Sidebar>

      <MainContent>
        <LandingPreview dados={dados} />
      </MainContent>
    </div>
  );
};

export default AdminPage;
