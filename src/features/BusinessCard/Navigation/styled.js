import styled from "styled-components";
import { GiFlowerPot } from "react-icons/gi";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: clamp(10px, 1.5vw, 16px);
  padding: clamp(12px, 2vw, 20px) 0;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 800;
  font-size: clamp(15px, 1.8vw, 20px);
  cursor: pointer;
  letter-spacing: -0.02em;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    transform: scale(1.02);
  }
`;

export const LogoIcon = styled(GiFlowerPot)`
  font-size: clamp(22px, 3vw, 34px);
  color: ${({ theme }) => theme.color.primary};
`;

export const LogoText = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 28px);
  flex-wrap: wrap;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  font-size: clamp(12px, 1.1vw, 15px);
  font-weight: 500;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  padding: 6px 0;
  font-family: inherit;
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.color.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.color.secondary};

    &::after {
      width: 100%;
    }
  }
`;

export const Phone = styled.a`
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-size: clamp(12px, 1.2vw, 15px);
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.color.primary} 0%, ${({ theme }) => theme.color.primaryDark} 100%);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(45, 138, 78, 0.4);
  }
`;
