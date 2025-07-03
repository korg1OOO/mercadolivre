import React from "react";
import styled from "styled-components";

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

const CheckoutBox = styled.div`
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
  margin-bottom: 20px;
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

const Checkout: React.FC = () => {
  const handleBuyNow = () => {
    // Redirect to Axi Pay checkout
    window.location.href = "https://checkout.axipayments.com.br/checkout/cmcne5ewf06qy79xpq11rlj4s?offer=DIAIAPN";
  };

  return (
    <CheckoutContainer>
      <Header>
        <Logo
          src="https://play-lh.googleusercontent.com/2uEptSnLOcFWnSjxLLIfGOWrf6lWSQ8pheDbGdzhqn0dcV93PBSrUkyjAKPgY7ejmA"
          alt="Mercado Livre Logo"
        />
      </Header>
      <CheckoutBox>
        <Title>Finalizar Compra</Title>
        <Button onClick={handleBuyNow}>Comprar Agora</Button>
      </CheckoutBox>
    </CheckoutContainer>
  );
};

export default Checkout;