import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: clamp(8px, 2vw, 16px) 0;
  width: 100%;
  box-sizing: border-box;

  > a {
    font-size: clamp(12px, 2vw, 14px);
    text-decoration: none;
    color: var(--color-blue);
    padding: clamp(2px, 1vw, 2.5px) 0;

    & + a {
      padding-left: clamp(5px, 1vw, 10px);
      margin-left: clamp(5px, 1vw, 10px);
      border-left: 1px solid var(--color-border);
    }
  }
`;

export const Panel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);
  display: grid;
  grid-template-columns: 65fr 35fr;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    > div:first-child {
      display: none;
    }
    > div:nth-child(2).details-column {
      display: block;
    }
  }
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
    padding: 16px;
    box-sizing: border-box;
  }

  &:nth-child(2) {
    padding: 16px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    &:first-child {
      border-right: none;
      border-bottom: 1px solid var(--color-border);
      display: none;
    }
    &.details-column {
      border-top: none;
      padding: 0;
    }
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    padding: 16px;
    box-sizing: border-box;
    overflow-x: hidden;
    > * {
      width: 100%;
      box-sizing: border-box;
    }
    > .mobile-header {
      order: 1;
      margin-bottom: 16px;
    }
    > .mobile-gallery {
      order: 2;
      margin-bottom: 16px;
    }
    > .mobile-connector-selector {
      order: 3;
      margin-bottom: 16px;
    }
    > .mobile-price {
      order: 4;
    }
    > .mobile-purchase-options {
      order: 5;
    }
    > .related-products-section {
      order: 6;
      margin-bottom: 16px;
    }
    > .mobile-description {
      order: 7;
    }
    > .mobile-seller-info,
    > .mobile-warranty-section {
      order: 8;
    }
  }
`;

export const DesktopWrapper = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

interface GalleryProps {
  currentIndex?: number;
  mediaLength?: number;
}

export const Gallery = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: clamp(10px, 2vw, 20px);
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
  }

  .gallery-counter {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 16px;
    color: #fff;
    background: rgba(211, 211, 211, 0.8);
    padding: 5px 10px;
    border-radius: 15px;
    z-index: 10;
  }

  .gallery-thumbs {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: clamp(10px, 2vw, 20px);
    max-width: 80px;

    > div {
      width: clamp(40px, 10vw, 60px);
      height: clamp(40px, 10vw, 60px);
      margin: clamp(3px, 1vw, 5px);
      border: 1px solid var(--color-border);
      cursor: pointer;

      &.active {
        border: 2px solid #000;
      }

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .main-image {
    flex: 2;
    width: 400px;
    height: 400px;
    overflow: hidden;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    > img,
    > video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 100%;
      height: clamp(200px, 60vw, 300px);
    }
  }

  .pagination {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      gap: 8px;
      width: 100%;
      padding: 0;

      .dot {
        height: 10px;
        width: 10px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &.active {
          background-color: #000;
        }
      }
    }
  }
`;

export const Section = styled.div`
  border-top: 1px solid var(--color-border);
  padding: clamp(24px, 4vw, 48px) clamp(16px, 3vw, 32px);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  &.related-products-section {
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    order: 4;
    min-width: 0;
    padding: 16px;
  }

  > h4 {
    font-size: clamp(16px, 2.5vw, 18px);
    margin-bottom: clamp(20px, 3vw, 40px);
  }
  > div {
    display: flex;
    flex-direction: column;
    > span + span {
      margin-top: clamp(8px, 2vw, 16px);
    }
    .title {
      font-size: clamp(14px, 2vw, 16px);
      color: var(--color-black);
    }
    .description {
      margin-top: clamp(3px, 1vw, 5px);
      font-size: clamp(12px, 2vw, 14px);
      color: var(--color-gray);
      line-height: clamp(16px, 2.5vw, 19px);
    }
  }
  > a {
    margin-top: clamp(10px, 2vw, 20px);
    font-size: clamp(12px, 2vw, 14px);
    font-weight: 600;
    color: var(--color-blue);
    text-decoration: none;
  }
`;

export const Description = styled.div`
  border-top: 1px solid var(--color-border);
  padding: clamp(22px, 4vw, 44px) clamp(16px, 3vw, 32px);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    order: 3;
  }

  > h2 {
    font-size: clamp(18px, 3vw, 24px);
    margin-bottom: clamp(16px, 3vw, 32px);
  }
  > p {
    font-size: clamp(15px, 2.5vw, 19px);
    color: var(--color-gray);
    line-height: clamp(18px, 2.5vw, 24px);
  }
`;