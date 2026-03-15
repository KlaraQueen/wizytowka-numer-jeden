import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.background};
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.color.background};
  padding: 0 clamp(12px, 2.5vw, 32px);
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 100%;
  overflow-x: hidden;
  box-shadow: 0 1px 2px rgba(21, 42, 31, 0.04);
`;

export const Content = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(16px, 3vw, 32px) clamp(16px, 3vw, 32px) clamp(32px, 4vw, 48px);
  box-sizing: border-box;
`;

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(24px, 3vw, 40px);
  margin-bottom: clamp(28px, 4vw, 40px);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.15fr;
  }
`;

export const AboutArea = styled.div`
  scroll-margin-top: 80px;
`;

export const GalleryArea = styled.div`
  scroll-margin-top: 80px;
`;

export const ContactArea = styled.div`
  scroll-margin-top: 80px;
`;