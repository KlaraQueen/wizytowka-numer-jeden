import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(28px, 4vw, 40px) 0;
  scroll-margin-top: 80px;
`;

export const Label = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: clamp(10px, 1vw, 11px);
  margin-bottom: 6px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: clamp(20px, 2.5vw, 28px);
  color: ${({ theme }) => theme.color.secondary};
  margin: 0 0 8px;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: clamp(13px, 1.1vw, 14px);
  color: ${({ theme }) => theme.color.textMuted};
  text-align: center;
  margin: 0 0 clamp(20px, 3vw, 28px);
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: clamp(12px, 1.5vw, 18px);
`;

export const Card = styled.div`
  background: white;
  padding: clamp(16px, 2vw, 20px);
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 2px 8px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.04);
  transition: all 0.3s ease;
  border-left: 3px solid ${({ theme }) => theme.color.primary};

  &:hover {
    box-shadow: 0 8px 24px ${({ theme }) => theme.color.shadowHover}, 0 0 0 1px rgba(21, 42, 31, 0.05);
    transform: translateY(-1px);
  }
`;

export const ServiceName = styled.h3`
  font-size: clamp(14px, 1.3vw, 16px);
  color: ${({ theme }) => theme.color.secondary};
  margin: 0 0 8px;
  font-weight: 700;
`;

export const Price = styled.div`
  font-size: clamp(16px, 1.5vw, 20px);
  color: ${({ theme }) => theme.color.primary};
  font-weight: 800;
  margin-bottom: 6px;
`;

export const Desc = styled.span`
  font-size: clamp(11px, 1vw, 12px);
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.3;
`;
