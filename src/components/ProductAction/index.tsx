// src/components/ProductAction/index.tsx
import React from 'react';
import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

// Define the props interface
interface ProductActionProps {
  className?: string; // Make className optional
}

const ProductAction: React.FC<ProductActionProps> = ({ className }) => {
  return (
    <Container className={className}>
      <DispatchTag color="orange">Mais Vendido</DispatchTag>

      <Row>
        <h1>Lâmpadas Automáticas Luzes Led Bluetooth</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">389</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 10x de R$ 38,99</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício da Loja</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que está esperando ou devolvemos
            seu dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;