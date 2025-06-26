import React from "react";
import { Row, HeartIcon, DispatchTag } from "./styles";

interface ProductHeaderProps {
  className?: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <DispatchTag color="orange">Mais Vendido</DispatchTag>
      <Row>
        <h1>Lâmpadas Automáticas Luzes Led Bluetooth</h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Enviando normalmente</DispatchTag>
    </div>
  );
};

export default ProductHeader;