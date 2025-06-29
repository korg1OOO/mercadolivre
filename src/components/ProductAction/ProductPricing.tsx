import React from "react";
import { PriceCard, PriceRow, InstallmentsInfo, StockStatus } from "./styles";

interface ProductPricingProps {
  className?: string;
}

const ProductPricing: React.FC<ProductPricingProps> = ({ className }) => {
  return (
    <PriceCard className={className}>
      <PriceRow>
        <span className="symbol">R$</span>
        <span className="fraction">299</span>
        <span className="cents">90</span>
      </PriceRow>
      <InstallmentsInfo>em 10x de R$ 29,99</InstallmentsInfo>
      <StockStatus>Estoque disponível</StockStatus>
    </PriceCard>
  );
};

export default ProductPricing;