import styled from "styled-components";
import { GiFlowerPot } from "react-icons/gi";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: clamp(8px, 1.5vw, 20px);
  padding: clamp(14px, 2vw, 24px) clamp(12px, 2.5vw, 32px);
  max-width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid rgba(21, 42, 31, 0.05);
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(6px, 1vw, 12px);
  width: 100%;
  min-width: 0;
  flex-shrink: 0;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1vw, 12px);
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  font-size: clamp(15px, 1.6vw, 21px);
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const LogoIcon = styled(GiFlowerPot)`
  font-size: clamp(20px, 2.2vw, 32px);
  color: ${({ theme }) => theme.color.primary};
  flex-shrink: 0;
`;

export const LogoText = styled.span`
  font-weight: 700;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: clamp(2px, 0.6vw, 24px);
  flex-wrap: nowrap;
  width: 100%;
  justify-content: center;
  min-width: 0;
  max-width: 100%;
`;

export const NavLink = styled.button`
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: clamp(6px, 0.9vw, 15px);
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(21, 42, 31, 0.12);
  cursor: pointer;
  padding: clamp(6px, 0.6vw, 8px) clamp(12px, 1vw, 16px);
  font-family: inherit;
  letter-spacing: 0.03em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 767px) {
    font-size: clamp(6px, 2vw, 10px);
    padding: clamp(4px, 1vw, 6px) clamp(6px, 1.2vw, 10px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 1px;
    opacity: 0.6;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9), 0 2px 6px rgba(21, 42, 31, 0.15);

    &::after {
      width: calc(100% - 24px);
    }
  }
`;

export const IconLinks = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(4px, 0.6vw, 8px);
  flex-shrink: 0;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(24px, 2.4vw, 36px);
  height: clamp(24px, 2.4vw, 36px);
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-size: clamp(12px, 1.3vw, 16px);
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  background: transparent;
  border: none;
  filter: drop-shadow(0 1px 2px rgba(21, 42, 31, 0.1));

  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
    filter: drop-shadow(0 2px 4px rgba(21, 42, 31, 0.15));
    transform: translateY(-2px);
  }
`;
