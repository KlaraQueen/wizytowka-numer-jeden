import styled from "styled-components";

export const Section = styled.footer`
  padding: clamp(18px, 2.5vw, 24px) clamp(20px, 3vw, 40px);
  background: linear-gradient(160deg, ${({ theme }) => theme.color.secondary} 0%, #0d2218 100%);
  border-radius: ${({ theme }) => theme.radius.lg};
  color: white;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: clamp(16px, 1.8vw, 20px);
  margin-bottom: clamp(12px, 2vw, 18px);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 2vw, 20px);
  width: 100%;
  max-width: 100%;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: clamp(24px, 4vw, 48px);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 1.2vw, 14px);
  flex: 1;
  min-width: 0;
  max-width: 100%;
  align-items: center;

  @media (min-width: 640px) {
    flex: 0 1 auto;
    align-items: flex-start;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);

  @media (min-width: 640px) {
    width: 1px;
    height: auto;
    min-height: 70px;
    align-self: stretch;
  }
 `;

export const Item = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  text-align: left;
  width: 100%;
`;

export const Icon = styled.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: ${({ theme }) => theme.color.accent};
  font-size: 16px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  min-width: 0;
`;

export const Label = styled.span`
  font-size: clamp(9px, 1vw, 11px);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Address = styled.span`
  font-size: clamp(12px, 1.2vw, 14px);
  line-height: 1.5;
  font-weight: 500;
`;

export const Small = styled.span`
  font-size: clamp(10px, 1vw, 12px);
  opacity: 0.85;
  margin-top: 2px;
  display: block;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: clamp(12px, 1.2vw, 14px);
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const Value = styled.span`
  font-size: clamp(12px, 1.2vw, 14px);
  font-weight: 500;
  line-height: 1.4;
`;

export const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: clamp(16px, 2.5vw, 24px);
`;

export const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 15px;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.color.accent};
    color: white;
    transform: translateY(-2px);
  }
`;

export const Copyright = styled.p`
  font-size: clamp(10px, 1vw, 12px);
  opacity: 0.65;
  margin: clamp(12px, 1.5vw, 20px) 0 0;
  text-align: center;
`;