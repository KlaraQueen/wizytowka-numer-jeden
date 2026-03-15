import styled from "styled-components";

export const Section = styled.header`
  position: relative;
  min-height: clamp(320px, 45vw, 420px);
  padding: clamp(40px, 6vw, 64px) clamp(16px, 3vw, 32px);
  text-align: center;
  background: ${({ theme }) => theme.color.backgroundAlt};
  border-radius: 0 0 ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg};
  margin-bottom: clamp(24px, 3vw, 36px);
  overflow: hidden;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse 70% 60% at 50% 50%, rgba(21, 42, 31, 0.35) 0%, transparent 70%),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.color.backgroundAlt} 0%,
      transparent 35%,
      transparent 65%,
      ${({ theme }) => theme.color.background} 100%
    );
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: clamp(240px, 35vw, 292px);
`;

export const TextBlock = styled.div`
  width: 100%;
`;

export const Tagline = styled.h1`
  font-size: clamp(22px, 3vw, 32px);
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 16px;
  letter-spacing: -0.03em;
  text-shadow: 
    0 0 8px rgba(255, 255, 255, 0.9),
    0 0 16px rgba(255, 255, 255, 0.7),
    0 1px 3px rgba(255, 255, 255, 0.95);
`;

export const Description = styled.p`
  font-size: clamp(15px, 1.3vw, 17px);
  color: ${({ theme }) => theme.color.secondary};
  line-height: 1.6;
  margin: 0 auto 24px;
  max-width: 520px;
  text-shadow: 
    0 0 6px rgba(255, 255, 255, 0.9),
    0 0 12px rgba(255, 255, 255, 0.6),
    0 1px 2px rgba(255, 255, 255, 0.9);
`;

export const CtaButton = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.color.primary} 0%, ${({ theme }) => theme.color.primaryDark} 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: clamp(14px, 1.2vw, 16px);
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 24px rgba(45, 138, 78, 0.45), 0 2px 8px rgba(21, 42, 31, 0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(45, 138, 78, 0.45);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

