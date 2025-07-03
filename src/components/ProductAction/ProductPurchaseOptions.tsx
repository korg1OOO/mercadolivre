import React from "react";
import { useHistory } from "react-router-dom";
import { MethodCard, CheckIcon, Actions, Button, Benefits, ShieldIcon } from "./styles";

interface ProductPurchaseOptionsProps {
  className?: string;
}

const ProductPurchaseOptions: React.FC<ProductPurchaseOptionsProps> = ({ className }) => {
  const history = useHistory();

  const handlePurchase = () => {
    history.push("/checkout");
  };

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
        <Button solid onClick={handlePurchase}>Comprar agora</Button>
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