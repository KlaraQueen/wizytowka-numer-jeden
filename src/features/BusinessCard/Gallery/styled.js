import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(20px, 3vw, 28px);
  background: white;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 16px ${({ theme }) => theme.color.shadow}, 0 2px 6px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.06);
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: 220px;

  @media (max-width: 767px) {
    padding: clamp(24px, 4vw, 32px);
  }
`;

export const Title = styled.h2`
  font-size: clamp(20px, 2.2vw, 26px);
  text-align: left;
  margin-bottom: clamp(20px, 2.5vw, 28px);
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 800;
  letter-spacing: -0.02em;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(12px, 1.5vw, 16px);
  flex: 1;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: 0 4px 12px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.04);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(21, 42, 31, 0.2) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 16px 40px ${({ theme }) => theme.color.shadowHover}, 0 4px 12px ${({ theme }) => theme.color.shadow};

    &::after {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  cursor: pointer;
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: -52px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const LightboxNavPrev = styled.button`
  position: absolute;
  top: 50%;
  left: -56px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    left: 8px;
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
`;

export const LightboxNavNext = styled.button`
  position: absolute;
  top: 50%;
  right: -56px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    right: 8px;
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
`;

export const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
`;

export const LightboxCounter = styled.span`
  position: absolute;
  bottom: -48px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 500;
`;