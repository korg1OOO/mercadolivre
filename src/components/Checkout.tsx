import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
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

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5px;
    border-radius: 0;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
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
  margin-bottom: 10px;

  &:hover {
    background-color: #2968c8;
  }
`;

const LinkButton = styled.a`
  color: #3483fa;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Checkout: React.FC = () => {
  const history = useHistory();

  const handleEnterClick = () => {
    history.push("/login");
  };

  return (
    <CheckoutContainer>
      <Header>
        <Logo
          src="https://play-lh.googleusercontent.com/2uEptSnLOcFWnSjxLLIfGOWrf6lWSQ8pheDbGdzhqn0dcV93PBSrUkyjAKPgY7ejmA"
          alt="Mercado Livre Logo"
        />
      </Header>
      <LoginBox>
        <Title>Olá! Para comprar, acesse a sua conta</Title>
        <Button>Criar conta</Button>
        <LinkButton onClick={handleEnterClick} href="#">Entrar</LinkButton>
      </LoginBox>
    </CheckoutContainer>
  );
};

export default Checkout;