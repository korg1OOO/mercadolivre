import React from "react";
import { MethodCard, CheckIcon, Actions, Button, Benefits, ShieldIcon } from "./styles";

interface ProductPurchaseOptionsProps {
  className?: string;
}

const ProductPurchaseOptions: React.FC<ProductPurchaseOptionsProps> = ({ className }) => {
  return (
    <div className={className}>
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
            Compra Garantida, receba o produto que está esperando ou devolvemos seu
            dinheiro.
          </p>
        </li>
      </Benefits>
    </div>
  );
};

export default ProductPurchaseOptions;