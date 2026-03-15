import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(20px, 4vw, 44px) 0;
  scroll-margin-top: 80px;

  @media (min-width: 768px) {
    padding: clamp(28px, 4vw, 44px) 0;
  }
`;

export const Label = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 9px;
  margin-bottom: 6px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: clamp(10px, 1vw, 11px);
    margin-bottom: 8px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(18px, 2.8vw, 32px);
  color: ${({ theme }) => theme.color.secondary};
  margin: 0 0 clamp(16px, 3vw, 36px);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: clamp(22px, 2.8vw, 32px);
    margin: 0 0 clamp(24px, 3vw, 36px);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(16px, 2vw, 24px);
  }
`;

export const Card = styled.div`
  background: white;
  padding: 14px;
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 0 2px 10px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.04);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: clamp(20px, 2.5vw, 28px);
    border-radius: ${({ theme }) => theme.radius.md};
    box-shadow: 0 2px 12px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.04);
  }

  &:hover {
    box-shadow: 0 8px 24px ${({ theme }) => theme.color.shadowHover}, 0 0 0 1px rgba(21, 42, 31, 0.05);
    transform: translateY(-2px);
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 8px;
  color: #fbbf24;
  font-size: 14px;

  @media (min-width: 768px) {
    gap: 4px;
    margin-bottom: 12px;
    font-size: 18px;
  }
`;

export const Author = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: 6px;

  @media (min-width: 768px) {
    font-size: clamp(14px, 1.2vw, 16px);
    margin-bottom: 8px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.text};
  line-height: 1.5;
  margin: 0;

  @media (min-width: 768px) {
    font-size: clamp(14px, 1.2vw, 15px);
    line-height: 1.6;
  }
`;
