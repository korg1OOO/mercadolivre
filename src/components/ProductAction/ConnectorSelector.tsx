import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 16px 0;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: 8px;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Escolha = styled.span`
  color: black;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
`;

const Option = styled.div<{ selected?: boolean }>`
  border: 1px solid var(--color-border);
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "#e0e0e0" : "transparent")};

  &:hover {
    border-color: var(--color-blue);
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

const ColorSection = styled.div`
  margin-top: 8px;
`;

const ColorButton = styled.button<{ selected?: boolean }>`
  padding: 8px 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: ${(props) => (props.selected ? "#e0e0e0" : "transparent")};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    border-color: var(--color-blue);
  }
`;

const Button = styled.button<{ solid?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(13px, 2vw, 15px);
  border-radius: 4px;
  padding: clamp(8px, 2vw, 12px) clamp(6px, 2vw, 10px);
  margin-top: clamp(5px, 1vw, 10px);
  color: ${(props) => (props.solid ? "var(--color-white)" : "var(--color-blue)")};
  background: ${(props) => (props.solid ? "var(--color-blue)" : "transparent")};
  border: ${(props) => (props.solid ? "none" : "1px solid var(--color-blue)")};
  cursor: pointer;
  width: 100%;
`;

interface ConnectorSelectorProps {
  className?: string; // Add className to the props interface
}

const ConnectorSelector: React.FC<ConnectorSelectorProps> = ({ className }) => {
  const [selectedConnector, setSelectedConnector] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("Cinza");
  const [error, setError] = useState<string | null>(null);

  const connectors = [
    { id: "H11", image: "https://http2.mlstatic.com/D_Q_NP_881367-MLB86085429173_062025-R.webp" },
    { id: "H7", image: "https://http2.mlstatic.com/D_Q_NP_820746-MLB86084244697_062025-R.webp" },
  ];

  const handleSelect = (id: string) => {
    setSelectedConnector(id);
    setError(null);
  };

  const handleSubmit = () => {
    if (!selectedConnector) {
      setError("Por favor, selecione um tipo de conector.");
      return;
    }
    console.log("Selected Connector:", selectedConnector);
  };

  return (
    <Wrapper className={className}>
      <Title>
        Tipo De Conector: {selectedConnector ? selectedConnector : <Escolha>Escolha</Escolha>}
      </Title>
      {error && <Error>{error}</Error>}
      <Options>
        {connectors.map((connector) => (
          <Option
            key={connector.id}
            selected={selectedConnector === connector.id}
            onClick={() => handleSelect(connector.id)}
          >
            <img src={connector.image} alt={connector.id} />
          </Option>
        ))}
      </Options>
      <ColorSection>
        <Title>Cor: {selectedColor}</Title>
        <ColorButton selected={selectedColor === "Cinza"} onClick={() => setSelectedColor("Cinza")}>
          Cinza
        </ColorButton>
      </ColorSection>
    </Wrapper>
  );
};

export default ConnectorSelector;