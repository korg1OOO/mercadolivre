// src/components/SellerInfo/index.tsx
import React from 'react';
import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from './styles';

// Define the props interface
interface SellerInfoProps {
  className?: string; // Make className optional
}

const SellerInfo: React.FC<SellerInfoProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>vendas nos últimos 4 meses</span>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Entrega os produtos dentro do prazo</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;