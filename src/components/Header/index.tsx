import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const HeaderContainer = styled.header`
  background-color: var(--color-header);
  padding: clamp(8px, 2vw, 10px) clamp(10px, 3vw, 20px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: clamp(30px, 8vw, 50px);
  margin-right: clamp(5px, 2vw, 10px);
  max-width: 100%;
`;

const CepLink = styled.a`
  color: var(--color-black);
  font-size: clamp(12px, 2vw, 14px);
  text-decoration: none;
  margin-right: clamp(10px, 3vw, 20px);

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchBar = styled.input`
  flex: 1;
  padding: clamp(8px, 2vw, 10px);
  font-size: clamp(14px, 2.5vw, 16px);
  border: 1px solid var(--color-border);
  border-radius: 4px 0 0 4px;
  outline: none;
  background-color: white;
`;

const SearchButton = styled.button`
  padding: clamp(8px, 2vw, 10px) clamp(10px, 3vw, 15px); /* Adjusted padding for icon */
  font-size: clamp(14px, 2.5vw, 16px);
  background-color: white;
  border: 1px solid var(--color-border);
  border-left: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  color: var(--color-black);
  display: flex; /* Ensure icon centers properly */
  align-items: center; /* Center icon vertically */
  justify-content: center; /* Center icon horizontally */

  &:hover {
    background-color: #f5f5f5;
  }
`;

const NavSection = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--color-black);
  font-size: clamp(12px, 2vw, 14px);
  text-decoration: none;
  margin-left: clamp(10px, 2vw, 20px);
  padding: clamp(3px, 1vw, 5px) clamp(5px, 2vw, 10px);

  &:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled.div`
  margin-left: clamp(10px, 2vw, 20px);
  font-size: clamp(16px, 3vw, 20px);
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <a
          href="https://www.mercadolivre.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo
            src="https://play-lh.googleusercontent.com/2uEptSnLOcFWnSjxLLIfGOWrf6lWSQ8pheDbGdzhqn0dcV93PBSrUkyjAKPgY7ejmA"
            alt="Mercado Livre Logo"
          />
        </a>
        <CepLink
          href="https://www.mercadolivre.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Informe seu CEP
        </CepLink>
      </LogoSection>
      <SearchSection>
        <SearchForm
          action="https://www.mercadolivre.com.br/busca/"
          method="GET"
          target="_blank"
        >
          <SearchBar
            type="text"
            name="q"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <SearchButton type="submit">
            <FaSearch style={{ color: '#808080', fontSize: '16px' }} /> {/* Gray color and size */}
          </SearchButton>
        </SearchForm>
      </SearchSection>
      <NavSection>
        <NavLink
          href="https://www.mercadolivre.com.br/categorias"
          target="_blank"
          rel="noopener noreferrer"
        >
          Categorias
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/ofertas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ofertas
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/cupons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cupons
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/supermercado"
          target="_blank"
          rel="noopener noreferrer"
        >
          Supermercado
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/moda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Moda
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/mercado-play"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mercado Play
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/vender"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vender
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/contato"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/criar-conta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crie sua conta
        </NavLink>
        <NavLink
          href="https://www.mercadolivre.com.br/entrar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar
        </NavLink>
        <CartIcon>🛒</CartIcon>
      </NavSection>
    </HeaderContainer>
  );
};

export default Header;