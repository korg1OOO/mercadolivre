import styled from "styled-components";
import { HiOutlineHeart, HiOutlineCheck, HiOutlineShieldCheck } from "react-icons/hi";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 8px;

  > h1 {
    width: 100%;
    font-size: clamp(20px, 3vw, 26px);
    font-weight: 600;
    margin: 0;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: clamp(20px, 4vw, 28px);
  height: clamp(20px, 4vw, 28px);
  color: var(--color-blue);
  margin-left: clamp(8px, 2vw, 16px);
  cursor: pointer;
`;

export const DispatchTag = styled.div<{ color?: string }>`
  margin-top: clamp(6px, 2vw, 12px);
  background: ${(props) =>
    props.color === "orange" ? "var(--color-orange)" : "var(--color-blue)"};
  color: var(--color-white);
  padding: clamp(4px, 1vw, 6px) clamp(6px, 2vw, 10px);
  border-radius: 4px;
  font-size: clamp(12px, 2vw, 14px);
  font-weight: 600;
  width: fit-content;
  margin-bottom: 8px;
`;

export const PriceCard = styled.div`
  margin-top: clamp(10px, 2vw, 18px);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: clamp(30px, 5vw, 44px);
  font-weight: 300;

  .fraction {
    margin-left: clamp(4px, 1vw, 8.8px);
  }
  .cents {
    font-size: clamp(14px, 2.5vw, 20px);
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: clamp(14px, 2vw, 16px);
  margin-top: 4px;
`;

export const StockStatus = styled.div`
  margin-top: clamp(12px, 2vw, 24px);
  font-size: clamp(16px, 2.5vw, 18px);
`;

export const MethodCard = styled.div`
  margin-top: clamp(10px, 2vw, 18px);
  display: flex;
  padding: 10px;

  > div {
    margin-left: clamp(4px, 1vw, 8px);
    display: flex;
    flex-direction: column;

    .title {
      color: var(--color-green);
      font-size: clamp(14px, 2vw, 16px);
    }
    .details {
      margin-top: clamp(3px, 1vw, 5px);
      color: var(--color-gray);
      font-size: clamp(12px, 2vw, 14px);
    }
    .more {
      margin-top: clamp(3px, 1vw, 5px);
      font-size: clamp(12px, 2vw, 14px);
      font-weight: 600;
      text-decoration: none;
      color: var(--color-blue);
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  width: clamp(18px, 3vw, 24px);
  height: clamp(18px, 3vw, 24px);
  color: var(--color-green);
`;

export const Actions = styled.div`
  margin-top: clamp(8px, 2vw, 16px);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
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
  min-height: 40px; /* Default height for accessibility */

  &:hover {
    opacity: 0.9;
  }

  /* Larger button on mobile */
  @media (max-width: 768px) {
    padding: clamp(12px, 3vw, 16px) clamp(10px, 3vw, 14px); /* Increased padding */
    font-size: clamp(15px, 3vw, 17px); /* Larger font */
    min-height: 60px; /* Larger tap target for mobile */
  }
`;

export const Benefits = styled.ul`
  margin-top: clamp(8px, 2vw, 16px);
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;

  > li {
    display: flex;

    p {
      margin-left: clamp(5px, 1vw, 10px);
      color: var(--color-gray);
      font-size: clamp(12px, 2vw, 14px);
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  width: clamp(16px, 3vw, 20px);
  height: clamp(16px, 3vw, 20px);
  color: var(--color-gray);
  flex-shrink: 0;
`;