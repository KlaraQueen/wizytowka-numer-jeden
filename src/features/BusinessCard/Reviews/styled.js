import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(28px, 4vw, 44px) 0;
  scroll-margin-top: 80px;
`;

export const Label = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: clamp(10px, 1vw, 11px);
  margin-bottom: 8px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: clamp(22px, 2.8vw, 32px);
  color: ${({ theme }) => theme.color.secondary};
  margin: 0 0 clamp(24px, 3vw, 36px);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 2vw, 24px);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background: white;
  padding: clamp(20px, 2.5vw, 28px);
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 2px 12px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px ${({ theme }) => theme.color.shadowHover}, 0 0 0 1px rgba(21, 42, 31, 0.05);
    transform: translateY(-2px);
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
  color: #fbbf24;
  font-size: 18px;
`;

export const Author = styled.div`
  font-size: clamp(14px, 1.2vw, 16px);
  font-weight: 700;
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-size: clamp(14px, 1.2vw, 15px);
  color: ${({ theme }) => theme.color.text};
  line-height: 1.6;
  margin: 0;
`;
