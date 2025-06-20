import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 clamp(8px, 2vw, 16px); /* Responsive padding */
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
  @media (max-width: 320px) {
    padding: 0 8px;
  }
`;