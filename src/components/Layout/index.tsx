// src/components/Layout/index.tsx
import React from "react";
import Header from "../Header";
import Product from "../Product";
import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header /> {/* Header should not be wrapped in Wrapper if full width is needed */}
      <Wrapper>
        <Product />
      </Wrapper>
    </Container>
  );
};

export default Layout;