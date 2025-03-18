import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #1e1e1e;
  color: white;
  padding: 5%;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: var(--font--aboreto);
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  color: #000;
  width: 250px;
  cursor: pointer;
  text-align: center;
  padding: 0px;
  transition: 0.2s;
  border: 5px solid transparent;

  & p {
    padding: 10px;
    font-family: var(--font--aboreto);
  }

  & img {
    height: 200px;
  }

  &:hover {
    background-color: #f0f0f0;
    transform: scale(0.98);
    border: 5px solid var(--color--green--low);
  }
`;

const HouseImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #fff;
  padding: 0px;
  width: 90%;
  max-width: 800px;
  color: black;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  background: #fff;
  padding: 15px;
  border: 1px solid #00000050;
  position: relative;

  & span {
    position: absolute;
    top: -12px;
    left: 10px;
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 400;
    background: #fff;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  font-weight: 400;
  background: #fff;
  color: #000;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  background: #fff;
  font-weight: 400;
  color: #000;
  outline: none;
  resize: none;
`;

const Switch = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

const Button = styled.button`
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  background: ${({ color }) => color || "#2bff00"};
  border: 1px solid #000;
  color: #000;
  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
  }
`;

const CasasCadastradas = () => {
  const navigate = useNavigate();
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("authenticated") !== "true") {
      navigate("/");
    } else {
      fetchHouses();
    }
  }, []);

  const fetchHouses = async () => {
    const querySnapshot = await getDocs(collection(db, "catalogo"));
    const housesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setHouses(housesData);
  };

  const handleSelectHouse = (house) => {
    setSelectedHouse(house);
    setEditedData({ ...house });
  };

  const handleChange = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveEdit = async () => {
    if (!selectedHouse) return;
    const houseRef = doc(db, "catalogo", selectedHouse.id);
    await updateDoc(houseRef, editedData);
    fetchHouses();
    setSelectedHouse(null);
  };

  const handleDelete = async () => {
    if (!selectedHouse) return;
    if (window.confirm("Tem certeza que deseja excluir esta casa?")) {
      await deleteDoc(doc(db, "catalogo", selectedHouse.id));
      fetchHouses();
      setSelectedHouse(null);
    }
  };

  return (
    <Container>
      <Title>Casas Cadastradas</Title>

      {selectedHouse ? (
        <EditContainer>
          <HouseImage src={editedData.imagem} alt={editedData.nome} />

          <FormGroup>
            <LabelContainer>
              <span>Nome da Casa</span>
              <Input type="text" value={editedData.nome} onChange={(e) => handleChange("nome", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Descrição</span>
              <TextArea value={editedData.descricao} onChange={(e) => handleChange("descricao", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Banheiros</span>
              <Input type="text" value={editedData.banheiros} onChange={(e) => handleChange("banheiros", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Suites</span>
              <Input type="text" value={editedData.suites} onChange={(e) => handleChange("suites", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Quartos</span>
              <Input type="text" value={editedData.quartos} onChange={(e) => handleChange("quartos", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Vagas na garagem</span>
              <Input type="text" value={editedData.garagem} onChange={(e) => handleChange("garagem", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Área (m²)</span>
              <Input type="text" value={editedData.area} onChange={(e) => handleChange("area", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Largura</span>
              <Input type="text" value={editedData.largura} onChange={(e) => handleChange("largura", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Lote</span>
              <Input type="text" value={editedData.lote} onChange={(e) => handleChange("lote", e.target.value)} />
            </LabelContainer>
          </FormGroup>

          <FormGroup>
            <Switch>
              <span>Churrasqueira</span>
              <input type="checkbox" checked={editedData.churrasqueira} onChange={(e) => handleChange("churrasqueira", e.target.checked)} />
            </Switch>

            <Switch>
              <span>Piscina</span>
              <input type="checkbox" checked={editedData.piscina} onChange={(e) => handleChange("piscina", e.target.checked)} />
            </Switch>
          </FormGroup>

          {/* Dobra 2 */}
          <FormGroup>
            <LabelContainer>
              <span>Título Dobra 2</span>
              <Input type="text" value={editedData.dobra2?.title1 || ""} onChange={(e) => handleChange("dobra2.title1", e.target.value)} />
            </LabelContainer>

            <LabelContainer>
              <span>Descrição Dobra 2</span>
              <TextArea value={editedData.dobra2?.descricao || ""} onChange={(e) => handleChange("dobra2.descricao", e.target.value)} />
            </LabelContainer>
          </FormGroup>

          <ButtonGroup>
            <Button color="#2bff00" onClick={handleSaveEdit}>Salvar</Button>
            <Button color="#ff1900" onClick={handleDelete}>Excluir</Button>
            <Button color="transparent" onClick={() => setSelectedHouse(null)}>Voltar</Button>
          </ButtonGroup>
        </EditContainer>
      ) : (
        <ListContainer>
          {houses.map((house) => (
            <Card key={house.id} onClick={() => handleSelectHouse(house)}>
              <HouseImage src={house.imagem} alt={house.nome} />
              <p><strong>{house.nome}</strong></p>
            </Card>
          ))}
        </ListContainer>
      )}
    </Container>
  );
};

export default CasasCadastradas;
