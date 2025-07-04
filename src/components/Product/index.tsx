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
import ConnectorSelector from "../ProductAction/ConnectorSelector";
import ProductHeader from "../ProductAction/ProductHeader";
import ProductPricing from "../ProductAction/ProductPricing";
import ProductPurchaseOptions from "../ProductAction/ProductPurchaseOptions";
import SellerInfo from "../SellerInfo";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// Import assets
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import videoThumb from "../../assets/videoThumb.png";
import video from "../../assets/video.mp4";

const renderStars = (rating: number = 5.0) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} role="img" aria-label="star">★</Star>);
  }
  if (hasHalfStar) {
    stars.push(<Star key="half" role="img" aria-label="half-star">½</Star>);
  }
  return stars;
};

const Product: React.FC = () => {
  const media = [
    { type: "image", src: image1, alt: "Image 1" },
    { type: "image", src: image2, alt: "Image 2" },
    { type: "image", src: image3, alt: "Image 3" },
    { type: "video", src: video, thumb: videoThumb, alt: "Product Video" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  const handleThumbClick = (index: number) => {
    setCurrentIndex(index);
  };

  const productRating = 5.0;
  const productReviewCount = 34;

  const relatedProducts = [
    {
      name: "Higoogoo G70 Farol Carro Led 200W H4 H7 H11 HB3",
      price: 176.99,
      originalPrice: 299.99,
      discount: "41% OFF",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_628168-MLB85370536006_062025-O-higoogoo-g70-par-farol-carro-led-200w-h4-h1-h7-h11-hb3-hb4h3.webp",
      link: "https://produto.mercadolivre.com.br/MLB-5418757722-higoogoo-g70-par-farol-carro-led-200w-h4-h1-h7-h11-hb3-hb4h3-_JM#polycard_client=recommendations_vip-pads-up&reco_backend=vip-pads-up-experimental-a_marketplace&reco_model=rk_ent_v2_retsys_ads&reco_client=vip-pads-up&reco_item_pos=0&reco_backend_type=low_level&reco_id=845bcaf3-4cb2-4496-a149-fd85a695eeec&is_advertising=true&ad_domain=VIPDESKTOP_UP&ad_position=1&ad_click_id=ZTJlOTQwYmQtNzY3Zi00NTMyLThiYTYtMTVlOWZiZWNmNTU1",
      installments: "em 5x R$35,40 sem juros",
      isSponsored: true,
      rating: 4.8,
      reviewCount: 15,
    },
    {
      name: "Ultra Led Max 6k 15000lm 150W 12/24V H1 H3 H7 H8 H11 HB3",
      price: 256.07,
      originalPrice: 299.99,
      discount: "14% OFF",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_947470-MLB84217652654_052025-O-ultra-led-max-6k-15000lm-150w-1224v-h1-h3-h7-h8-h11-hb3-hb4.webp",
      link: "https://click1.mercadolivre.com.br/mclics/clicks/external/MLB/count?a=MgvO2KxgcqVZO5lgnWMPs1V%2BrMDC5L8i5xb6QDcMOsGGVvRlFL9DWLIH%2Byuf%2FI4HOlAjnEPeY9vvufUmv4y%2FZAG6UHuDYA2DG87MtfL%2Bk6yQ%2FyYT3QV8m7XH5lAi%2FEmvJut1sqjqAe42peLn56G22LnMUPVNyi2NeZXwTMutNRoKvC3GPV9YEQK3E9%2BoXB9U%2BsrSKbB5lm%2B5VPGgbfh760DrUWuwGcBxIGuoYKteSTMMGGYOSfETZpdMJO971pQ7ci%2F%2BagoR8OaER%2Bx4REQSjgpctBn5tBNgGDdIJnarGSbEUw6IV8saX1INo63uKGc2nqK8BOYICkZXeZQBrtovbwcZ3%2B2hIOXOPtdzbhG0PVojja3vkYILgznzaSwSsCpm2O32xitXYkvbJwvOKUlAZsj3an07BzPgVuvmkcigmeOmhB5i2iTeumVEMy7PPebyJ3hI5FH4wC1%2BqH6%2FLdz21HeV3z4%2Fu8zCITVMHtqZ3o5m2Tcvwyt%2FRPzUh%2BcxxTKTWN%2BgOXwhXmgRXG9nzy75S6B2uUi6vIszQE3Ltz%2FrUJkUN85o6bUNFlNr2l1d10Ez22UKVc8WhMmJNMob0JwWzzvJjD4dep0ZGIad9KSFaiTIqwLSkDpHz5CdhrIsRxQ0e5sSsBj3xNqQw3eh0U3z8EvbwkbQMw07ePrk%2BASdwzYzW4pcTWLprHXk1VsXfEglYlTZNJnGMkzGmLmFdETk0M0GpkrMbIEpnt0DAc2JFqNYZB9Xs1qR8f5V1fscdbOlRe4lx5184H2q%2FKYdPZZyIXjjsf%2BF9YVSWF4ySrMu9qmJVAjEqRkLu%2BKA%2FlpM1pprDiUnSfcfS2HIXFKD0rNbBw0m8BV0P46t%2B7gQChr%2FsUsNhyHbZWt6BfAi3g9OaahtbL4HmEugJ%2Bq3kmN9MSB00WjHDiKvki%2FCOfkqMkVUCYcwDHKO",
      installments: "em 6x R$42,68 sem juros",
      isSponsored: true,
      rating: 4.6,
      reviewCount: 10,
    },
    {
      name: "Kit Lâmpada Led Philips Ultinon Access Nano 1:1",
      price: 350.91,
      originalPrice: 389.99,
      discount: "10% OFF",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_816733-MLB79741842568_102024-O-kit-lmpada-led-philips-ultinon-access-nano-11.webp",
      link: "https://click1.mercadolivre.com.br/mclics/clicks/external/MLB/count?a=1rB8ufiXATfbmlYX2%2Ftya15pI6bRojYjHOotHg8HSus7DsoJ%2FmDVZocFAm1w56V1GxahdzIm%2FmWACd84m8m8YOEyanbBP46O%2FiGbtmLN4EjoOW8I%2BT3e9p5G9yleqpApiSFb2KkyvmaX8ZYS6yQkFwaLf1lPkL9FZkPyvpgiE%2B64KygQQ2cm9hNCV4zaovyI3kWRKiPlyxtt%2Frq9yvLOpa3UUQ3s8l徉luhJCFfixQKhTv0a9FMsDFG86nl4aNcfxER%2BVETiUtZ4IjT9nQEFUvoHrP6wXvA1K28xyEvQfgQ5p0E3mO99EHnZQca4b6%2FmgMk7gLEcYn4ZlXcHW7RhspqaLr2aHP4YeEexVEFbzIzB5TKcbl6oad0KerUDnCSh2tde6fA1tAVFtnEOboU%2FU0iVKr2YWYK8Da7GXtJjZQJ%2BghrVIVNFFVt8%2F4mwSFzxVS7SQu7EAc5IK1H3Af%2Bijgiu%2FQIeXHi%2FZ2C1XX8bnf5mBbWeU%2BzKQ1iYKTyNcW1T1zp4JeaAWy8kTWCGJ%2FrZI0uLwt%2BJ1mkL%2BtIDcp9VbT8Pi75TMzQAo0HPFBUSb43zLoi1Imt8RhYKteXkHbfaWA51xGRSFKnawpdB4dEU6OqAZdGyXcUYral1pPobjgRGrTztvHkVhF80d6wxzU1TpZ2DB7kiL9dSEt%2BRfHCwRO5L9UcB72c9ks9Abv27J%2F1PK0krrQg4m1%2BH%2FXg8SuU7XcOEL3cM4SbVx4ihwrEAmPv%2FMeX1dpKCAUfeBjG42Ns2To4YGXTHU%2F0LtKNBMmXkxqqPjWIcNwSiXnwuNjqdGWCV0ezPyrA3DFTC77cA%2BFHlQyNFxie3nMiWrKuGWA29yrN%2FHRCZlwuybIdsqcQTvTrd7Nm6OoJZG%2FNBx6o0SkQh8ZMwD%2FQYGtYHbUZG%2BsaeryVWYjuxY%2BW",
      installments: "em 7x R$50,13 sem juros",
      isSponsored: true,
      rating: 4.9,
      reviewCount: 20,
    },
  ];

  return (
    <Container>
      <Row></Row>

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
          <RelatedProducts products={relatedProducts} className="related-products-section" />
          <Info />
        </Column>

        <Column className="details-column">
          <DesktopWrapper>
            <ProductHeader />
            <div className="product-rating">
              <span>{productRating}</span>
              <span className="stars">{renderStars(productRating)}</span>
              <span className="review-count">({productReviewCount})</span>
            </div>
            <ProductPricing />
            <ConnectorSelector />
            <ProductPurchaseOptions />
            <SellerInfo />
            <WarrantySection />
            <PaymentMethodsSection />
          </DesktopWrapper>
          <MobileWrapper>
            <ProductHeader className="mobile-header" />
            <div className="product-rating mobile-rating">
              <span>{productRating}</span>
              <span className="stars">{renderStars(productRating)}</span>
              <span className="review-count">({productReviewCount})</span>
            </div>
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
            <RelatedProducts products={relatedProducts} className="related-products-section" />
            <Description className="mobile-description">
              <Info />
              <PaymentMethodsSection />
            </Description>
            <SellerInfo className="mobile-seller-info" />
            <WarrantySection className="mobile-warranty-section" />
          </MobileWrapper>
        </Column>
      </Panel>
      <Row></Row>
    </Container>
  );
};

interface RelatedProduct {
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  image: string;
  link: string;
  installments?: string;
  isSponsored?: boolean;
  rating?: number;
  reviewCount?: number;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
  className?: string;
}

const RelatedProductsContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  min-width: 0;
  touch-action: pan-x;
  justify-content: flex-start;
  scroll-snap-type: x mandatory;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
  }
`;

const ProductCard = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  min-width: 150px;
  flex: 0 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;

  @media (max-width: 768px) {
    width: 100px;
    min-width: 100px;
    padding: 8px;
  }

  span {
    font-size: 10px;
    color: #757575;
    margin-bottom: 6px;
  }

  .rating {
    font-size: 12px;
    color: #000;
    display: flex;
    align-items: center;
    margin-top: 4px;

    .stars {
      color: #007bff;
      margin-left: 4px;
    }

    .review-count {
      font-size: 10px;
      color: #666;
      margin-left: 4px;
    }
  }

  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
    margin-bottom: 6px;

    @media (max-width: 768px) {
      height: 80px;
    }
  }

  p {
    font-size: 12px;
    margin: 3px 0;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    font-weight: normal;

    &:nth-child(4) {
      font-size: 14px;
      font-weight: bold;
      color: #000;
    }

    &:nth-child(5) {
      text-decoration: line-through;
      color: #888;
      font-size: 10px;
    }

    &:nth-child(6) {
      color: #00a650;
      font-size: 10px;
    }

    &:nth-child(7) {
      font-size: 10px;
      color: #666;
    }

    &:nth-child(8) {
      font-size: 10px;
      color: #0066cc;
    }

    @media (max-width: 768px) {
      font-size: 10px;

      &:nth-child(4) {
        font-size: 12px;
      }
    }
  }
`;

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, className }) => {
  return (
    <Section className={className}>
      <h4>Produtos relacionados</h4>
      <RelatedProductsContainer>
        <ProductList>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.isSponsored && <span>Patrocinado</span>}
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <div className="rating">
                <span>{product.rating?.toFixed(1) || 5.0}</span>
                <span className="stars">{renderStars(product.rating)}</span>
                <span className="review-count">({product.reviewCount || 34})</span>
              </div>
              <p>R${product.price.toFixed(2)}</p>
              <p>R${product.originalPrice.toFixed(2)}</p>
              <p>{product.discount}</p>
              {product.installments && <p>{product.installments}</p>}
              <p>Frete grátis</p>
            </ProductCard>
          ))}
        </ProductList>
      </RelatedProductsContainer>
    </Section>
  );
};

const WarrantySection: React.FC<{ className?: string }> = ({ className }) => (
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
      <br />
      <br />
      <strong>Compatibilidade Universal:</strong> Compatível com diversos modelos de carros e motos, o SANVI V5 é versátil e adaptável.
      <br />
      <strong>Luminosidade de 35000LM:</strong> Iluminação potente com 35000LM, garantindo visibilidade superior em estradas noturnas.
      <br />
      <strong>Eficiência de 180W/par:</strong> Conjunto de 180W oferece iluminação intensa, melhorando a segurança do motorista.
      <br />
      <strong>Durabilidade em Condições Extremas:</strong> Operação confiável de -40~ +120°C, o SANVI V5 LED resiste a temperaturas extremas.
      <br />
      <strong>Controle Bluetooth para Luzes de Cabeça:</strong> Ajuste facilmente uma cor com o aplicativo DRIVE LIGHT, conectado via Bluetooth.
      <br />
      <strong>Tensão:</strong> CC 9-16V
      <br />
      <strong>Temperatura de cor:</strong> 3000K ~ 6000K (pode ajustar a cor livremente)
      <br />
      <strong>Vida operacional:</strong> 30000 horas
      <br />
      <strong>Temperatura operacional:</strong> -40 ~ +120°C
      <br />
      <strong>Pacote:</strong> 2 faróis LED (um par).
      <br />
      <br />
      <strong>Potência da luz:</strong> 180W/par.
      <br />
      <strong>Lúmen:</strong> 35000LM.
      <br />
      <br />
      <strong>Tipo de plugue:</strong>
      <br />
      - Feixe Único: H1, H7, H11, HB3(9005), HB4(9006), 9012
      <br />
      - Feixe Hi-Lo: H4
      <br />
      <br />
      <strong>Inscreva-se para:</strong> farol de carro, farol de motocicleta
    </p>
    <Reviews />
  </Description>
);

const PaymentMethods = styled.div`
  margin-top: clamp(16px, 3vw, 32px);
  border-top: 1px solid var(--color-border);
  padding-top: clamp(16px, 3vw, 32px);

  > h3 {
    font-size: clamp(16px, 2.5vw, 18px);
    margin-bottom: clamp(10px, 2vw, 20px);
    color: var(--color-black);
  }

  > p {
    font-size: clamp(14px, 2vw, 16px);
    color: var(--color-gray);
    margin-bottom: clamp(10px, 2vw, 20px);
    line-height: clamp(18px, 2.5vw, 24px);

    > img {
      margin-right: clamp(5px, 1vw, 10px);
      vertical-align: middle;
    }
  }

  > a {
    font-size: clamp(12px, 2vw, 14px);
    font-weight: 600;
    color: var(--color-blue);
    text-decoration: none;
  }
`;

const PaymentMethodsSection: React.FC = () => (
  <PaymentMethods>
    <h3>Meios de Pagamento</h3>
    <p>
      <strong>Linha de Crédito</strong>
      <br />
      <img
        src="https://http2.mlstatic.com/storage/logos-api-admin/f3e8e940-f549-11ef-bad6-e9962bcd76e5-m.svg"
        alt="Mercado Pago"
        style={{ width: "100px" }}
      />
    </p>
    <p>
      <strong>Cartões de crédito</strong>
      <br />
      <strong>Pague em até 12x</strong>
      <br />
      <img
        src="https://http2.mlstatic.com/storage/logos-api-admin/ddf23a60-f3bd-11eb-a186-1134488bf456-m.svg"
        alt="Hipercard"
        style={{ width: "50px" }}
      />
      <img
        src="https://http2.mlstatic.com/storage/logos-api-admin/37f7b160-6278-11ec-ae75-df2bef173be2-m.svg"
        alt="Elo"
        style={{ width: "50px" }}
      />
      <img
        src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
        alt="Visa"
        style={{ width: "50px" }}
      />
      <img
        src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
        alt="Mastercard"
        style={{ width: "50px" }}
      />
    </p>
    <p>
      <strong>Pix</strong>
      <br />
      <img
        src="https://http2.mlstatic.com/storage/logos-api-admin/f99fcca0-f3bd-11eb-9984-b7076edb0bb7-m.svg"
        alt="Pix"
        style={{ width: "70px" }}
      />
    </p>
    <p>
      <strong>Boleto bancário</strong>
      <br />
      <img
        src="https://http2.mlstatic.com/storage/logos-api-admin/00174300-571e-11e8-8364-bff51f08d440-m.svg"
        alt="Boleto"
        style={{ width: "30px" }}
      />
    </p>
    <a href="https://checkout.axipayments.com.br/checkout/cmcne5ewf06qy79xpq11rlj4s?offer=DIAIAPN">
      Confira outros meios de pagamento
    </a>
  </PaymentMethods>
);

const ReviewsContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  .rating-summary {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .rating {
      font-size: 24px;
      font-weight: bold;
      color: #000;
      margin-right: 10px;
    }

    .stars {
      color: #007bff;
      font-size: 20px;
    }

    .review-count {
      font-size: 14px;
      color: #666;
      margin-left: 10px;
    }
  }

  .rating-breakdown {
    margin-bottom: 10px;

    .bar {
      height: 8px;
      background: #e0e0e0;
      margin: 5px 0;
      width: 200px;

      .fill {
        height: 100%;
        background: #007bff;
      }
    }

    span {
      font-size: 14px;
      color: #666;
      margin-right: 10px;
    }
  }

  .photo-reviews {
    display: flex;
    gap: 10px;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border: 1px solid #e0e0e0;
      cursor: pointer;
    }

    .date {
      font-size: 12px;
      color: #666;
      margin-top: 5px;
    }
  }
`;

const Reviews: React.FC = () => {
  const ratingBreakdown = [
    { stars: 5, count: 33, percentage: 100 },
    { stars: 4, count: 5, percentage: 14.7 },
    { stars: 3, count: 1, percentage: 2.2 },
    { stars: 2, count: 0, percentage: 0.0 },
    { stars: 1, count: 0, percentage: 0.0 },
  ];

  const reviewPhotos = [
    { id: 1, src: "https://http2.mlstatic.com/D_NQ_NP_2X_772016-MLA86685161307_062025-O.webp", date: "25 Jun 2025" },
    { id: 2, src: "https://http2.mlstatic.com/D_NQ_NP_2X_788097-MLA86366515060_062025-O.webp", date: "25 Jun 2025" },
  ];

  return (
    <ReviewsContainer>
      <h3>Opiniões do produto</h3>
      <div className="rating-summary">
        <span className="rating">5.0</span>
        <span className="stars">{renderStars(5.0)}</span>
        <span className="review-count">(39 avaliações)</span>
      </div>
      <div className="rating-breakdown">
        {ratingBreakdown.map((item) => (
          <div key={item.stars}>
            <span>{item.stars} estrelas</span>
            <div className="bar">
              <div
                className="fill"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
      <h4>Opiniões com fotos</h4>
      <div className="photo-reviews">
        {reviewPhotos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.src} alt={`Review photo ${photo.id}`} />
          </div>
        ))}
      </div>
    </ReviewsContainer>
  );
};

const Star = styled.span`
  color: #007bff;
  font-size: 16px;
  margin-right: 2px;
`;

export default Product;