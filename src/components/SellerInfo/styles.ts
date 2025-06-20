import styled, { css } from "styled-components";
import { HiOutlineLocationMarker, HiOutlineChatAlt2, HiOutlineClock } from "react-icons/hi";

export const Container = styled.div`
  padding: clamp(24px, 4vw, 48px) clamp(16px, 3vw, 32px);
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);

  @media (max-width: 768px) {
    order: 5; /* Seller info after warranty */
  }
`;

export const Title = styled.div`
  font-size: clamp(16px, 2.5vw, 18px);
  margin-bottom: clamp(10px, 2vw, 20px);
  font-weight: 600;
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  padding: clamp(4px, 1vw, 7px) 0;

  > div {
    margin-left: clamp(4px, 1vw, 8px);

    > p {
      font-size: clamp(14px, 2vw, 16px);
    }
    > strong {
      font-size: clamp(12px, 2vw, 14px);
      font-weight: normal;
      color: var(--color-gray);
    }
  }
`;

const iconCSS = css`
  width: clamp(20px, 4vw, 30px);
  height: clamp(20px, 4vw, 30px);
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCSS}
`;

export const ReputationCard = styled.div`
  margin-top: clamp(16px, 3vw, 33px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReputationThermometer = styled.ol`
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: clamp(4px, 1vw, 7px);
  padding: 0 clamp(2px, 1vw, 4px);

  > li {
    width: 100%;
    height: clamp(6px, 1vw, 8px);

    &:nth-child(1) {
      background: var(--reputation-1);
    }
    &:nth-child(2) {
      background: var(--reputation-2);
    }
    &:nth-child(3) {
      background: var(--reputation-3);
    }
    &:nth-child(4) {
      background: var(--reputation-4);
    }
    &:nth-child(5) {
      background: var(--reputation-5);
    }

    &.active {
      height: clamp(8px, 1.5vw, 12px);
    }
  }
`;

export const ReputationRow = styled.div`
  margin-top: clamp(5px, 1vw, 10px);
  display: flex;
  align-items: flex-start;

  > div {
    width: 33%;
    padding: 0 clamp(5px, 1vw, 10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > strong {
      font-size: clamp(18px, 3vw, 24px);
      font-weight: normal;
      height: clamp(20px, 4vw, 30px);
    }
    > span {
      font-size: clamp(10px, 2vw, 12px);
    }

    position: relative;

    & + div {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: clamp(20px, 4vw, 36px);
        border-left: 1px solid var(--color-border);
      }
    }
  }
`;

export const SupportIcon = styled(HiOutlineChatAlt2)`
  ${iconCSS}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconCSS}
`;

export const More = styled.a`
  margin-top: clamp(12px, 2vw, 24px);
  color: var(--color-blue);
  font-size: clamp(12px, 2vw, 14px);
  font-weight: 600;
  text-decoration: none;
`;