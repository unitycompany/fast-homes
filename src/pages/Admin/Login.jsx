import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig"; // Importa a configuração do Firebase
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #121212;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: var(--font--aboreto);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const Label = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-family: sans-serif;
  font-size: 14px;
  margin-bottom: 6px;
  margin-top: 15px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 14px;
  background-color: #171616;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: var(--color--green--low);
  }
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: var(--color--green--low);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background-color: var(--color--green--medium);
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("authenticated", "true");
      navigate("/admin/options");
    } catch (error) {
      alert("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <Container>
      <Title>Acesso Restrito</Title>
      <InputContainer>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Digite o e-mail do admin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Senha</Label>
        <Input
          type="password"
          placeholder="Senha do admin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Entrar</Button>
      </InputContainer>
    </Container>
  );
};

export default LoginPage;
