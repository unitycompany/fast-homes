import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaList } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
`;

const Card = styled.div`
  width: 350px;
  background: linear-gradient(139deg, rgba(36, 40, 50, 1) 0%, rgba(37, 28, 40, 1) 100%);
  border-radius: 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  line-height: 110%;
`;

const Separator = styled.div`
  border-top: 1.5px solid #42434a;
  margin: 5px 0;
`;

const ButtonList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0;
`;

const ButtonItem = styled.li`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  transition: all 0.3s ease-out;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  background: ${({ color }) => color || "transparent"};
  &:hover {
    background: var(--color--green--medium);
    color: white;
  }
  &:active {
    transform: scale(0.96);
  }
`;

const Options = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("authenticated") !== "true") {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Card>
        <Title>Painel Administrativo</Title>
        <ButtonList>
          <ButtonItem onClick={() => navigate("/admin/options/adicionar-casa")} color="var(--color--green--low)">
            <FaHome size={20} /> Adicionar Casa
          </ButtonItem>
          <Separator />
          <ButtonItem onClick={() => navigate("/admin/options/casas-cadastradas")} color="var(--color--green--low)">
            <FaList size={20} /> Casas Cadastradas
          </ButtonItem>
        </ButtonList>
      </Card>
    </Container>
  );
};

export default Options;
