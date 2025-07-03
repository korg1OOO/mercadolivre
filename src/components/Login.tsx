import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-top: 60px;
`;

const Header = styled.div`
  background-color: #ffe500;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 50px;
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    border-radius: 0;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #3483fa;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #2968c8;
  }
`;

const LinkButton = styled.a`
  color: #3483fa;
  font-size: 14px;
  text-decoration: none;
  margin-top: 10px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Por favor, preencha e-mail e senha");
      return;
    }
    history.push("/checkout");
  };

  return (
    <LoginContainer>
      <Header>
        <Logo
          src="https://play-lh.googleusercontent.com/2uEptSnLOcFWnSjxLLIfGOWrf6lWSQ8pheDbGdzhqn0dcV93PBSrUkyjAKPgY7ejmA"
          alt="Mercado Livre Logo"
        />
      </Header>
      <LoginBox>
        <Title>Entrar na sua conta</Title>
        <Input
          type="text"
          placeholder="E-mail ou usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Entrar</Button>
        <LinkButton href="#">Esqueceu sua senha?</LinkButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;