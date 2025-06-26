import React, { useState } from "react";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
  MobileWrapper,
  DesktopWrapper,
} from "./styles";
import ProductHeader from "../ProductAction/ProductHeader";
import ProductPricing from "../ProductAction/ProductPricing";
import ProductPurchaseOptions from "../ProductAction/ProductPurchaseOptions";
import SellerInfo from "../SellerInfo";

// Import assets
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import videoThumb from "../../assets/videoThumb.png";
import video from "../../assets/video.mp4";
import ConnectorSelector from "../ProductAction/ConnectorSelector";

const Product: React.FC = () => {
  const media = [
    { type: "image", src: image1, alt: "Image 1" },
    { type: "image", src: image2, alt: "Image 2" },
    { type: "image", src: image3, alt: "Image 3" },
    { type: "video", src: video, thumb: videoThumb, alt: "Product Video" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      <Row>
        <a href="https://www.mercadolivre.com.br/" target="_blank" rel="noopener noreferrer">
          Compartilhar
        </a>
        <a href="https://www.mercadolivre.com.br/vender" target="_blank" rel="noopener noreferrer">
          Vender um igual
        </a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <div className="gallery-counter">{`${currentIndex + 1}/${media.length}`}</div>
            <div className="gallery-thumbs">
              {media.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbClick(index)}
                  className={index === currentIndex ? "active" : ""}
                >
                  {item.type === "image" ? (
                    <img alt={item.alt} src={item.src} />
                  ) : (
                    <img alt={item.alt} src={item.thumb} />
                  )}
                </div>
              ))}
            </div>
            <div className="main-image">
              {media[currentIndex].type === "image" ? (
                <img alt={media[currentIndex].alt} src={media[currentIndex].src} />
              ) : (
                <video controls width="100%">
                  <source src={media[currentIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="pagination">
              {media.map((_, index) => (
                <span
                  key={index}
                  className={index === currentIndex ? "dot active" : "dot"}
                  onClick={() => handleThumbClick(index)}
                ></span>
              ))}
            </div>
          </Gallery>
          <Info />
        </Column>

        <Column className="details-column">
          {/* Desktop-only components */}
          <DesktopWrapper>
            <ProductHeader />
            <ProductPricing />
            <ConnectorSelector />
            <ProductPurchaseOptions />
            <SellerInfo />
            <WarrantySection />
          </DesktopWrapper>
          {/* Mobile-only components */}
          <MobileWrapper>
            <ProductHeader className="mobile-header" />
            <Gallery className="mobile-gallery">
              <div className="gallery-counter">{`${currentIndex + 1}/${media.length}`}</div>
              <div className="gallery-thumbs">
                {media.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbClick(index)}
                    className={index === currentIndex ? "active" : ""}
                  >
                    {item.type === "image" ? (
                      <img alt={item.alt} src={item.src} />
                    ) : (
                      <img alt={item.alt} src={item.thumb} />
                    )}
                  </div>
                ))}
              </div>
              <div className="main-image">
                {media[currentIndex].type === "image" ? (
                  <img alt={media[currentIndex].alt} src={media[currentIndex].src} />
                ) : (
                  <video controls autoPlay width="100%">
                    <source src={media[currentIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="pagination">
                {media.map((_, index) => (
                  <span
                    key={index}
                    className={index === currentIndex ? "dot active" : "dot"}
                    onClick={() => handleThumbClick(index)}
                  ></span>
                ))}
              </div>
            </Gallery>
  <ConnectorSelector className="mobile-connector-selector" />
  <ProductPricing className="mobile-price" />
  <ProductPurchaseOptions className="mobile-purchase-options" />
  <Description className="mobile-description">
    <Info />
  </Description>
  <SellerInfo className="mobile-seller-info" />
  <WarrantySection className="mobile-warranty-section" />
</MobileWrapper>
        </Column>
      </Panel>
    </Container>
  );
};

// WarrantySection and Info components
interface WarrantySectionProps {
  className?: string;
}

const WarrantySection: React.FC<WarrantySectionProps> = ({ className }) => (
  <Section className={className}>
    <h4>Garantias</h4>
    <div>
      <span>
        <p className="title">Benefícios de Compra</p>
        <p className="description">
          <strong>Frete Grátis</strong> – Entrega prevista para <strong>1-2 semanas</strong>.
          <br />
          <strong>Entrega Rápida</strong> – Receba seu pedido com agilidade.
          <br />
          <strong>Cupom de R$5,00</strong> – Crédito oferecido caso a entrega atrase.
        </p>
      </span>
      <span>
        <p className="title">Políticas de Reembolso</p>
        <p className="description">
          <strong>Reembolso Garantido</strong> se os itens chegarem danificados.
          <br />
          <strong>Reembolso Total</strong> caso o pacote seja perdido.
          <br />
          <strong>Reembolso Completo</strong> se a entrega não ocorrer em até 50 dias.
        </p>
      </span>
    </div>
    <a href="#">Saiba mais sobre nossa Política de Devolução e Reembolso</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      SANVI V5 Farol LED Bluetooth APP Controle Cor 180W H4 H7 LED H1 H11 HB3 HB4 9012 Lâmpadas automotivas Luzes LED para faróis de carros
      <br /><br />
      <strong>Compatibilidade Universal:</strong> Compatível com diversos modelos de carros e motos, o SANVI V5 é versátil e adaptável.
      <br /><strong>Luminosidade de 35000LM:</strong> Iluminação potente com 35000LM, garantindo visibilidade superior em estradas noturnas.
      <br /><strong>Eficiência de 180W/par:</strong> Conjunto de 180W oferece iluminação intensa, melhorando a segurança do motorista.
      <br /><strong>Durabilidade em Condições Extremas:</strong> Operação confiável de -40~ +120°C, o SANVI V5 LED resiste a temperaturas extremas.
      <br /><strong>Controle Bluetooth para Luzes de Cabeça:</strong> Ajuste facilmente uma cor com o aplicativo DRIVE LIGHT, conectado via Bluetooth.
      <br /><strong>Tensão:</strong> CC 9-16V
      <br /><strong>Temperatura de cor:</strong> 3000K ~ 6000K (pode ajustar a cor livremente)
      <br /><strong>Vida operacional:</strong> 30000 horas
      <br /><strong>Temperatura operacional:</strong> -40 ~ +120°C
      <br /><strong>Pacote:</strong> 2 faróis LED (um par).
      <br /><br />
      <strong>Potência da luz:</strong> 180W/par.
      <br /><strong>Lúmen:</strong> 35000LM.
      <br /><br />
      <strong>Tipo de plugue:</strong>
      <br />- Feixe Único: H1, H7, H11, HB3(9005), HB4(9006), 9012
      <br />- Feixe Hi-Lo: H4
      <br /><br />
      <strong>Inscreva-se para:</strong> farol de carro, farol de motocicleta
    </p>
  </Description>
);

export default Product;