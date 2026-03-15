import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(20px, 3vw, 28px);
  background: white;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 16px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.05);
  height: fit-content;

  @media (max-width: 767px) {
    padding: clamp(24px, 4vw, 32px);
  }
`;

export const Content = styled.div`
  max-width: 100%;
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: clamp(11px, 1vw, 12px);
`;

export const Title = styled.h2`
  font-size: clamp(18px, 2vw, 22px);
  color: ${({ theme }) => theme.color.secondary};
  margin: clamp(6px, 0.8vw, 10px) 0 clamp(12px, 1.5vw, 18px);
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  font-size: clamp(14px, 1.3vw, 16px);
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
  margin: 0 0 20px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 22px;
`;

export const ListItem = styled.li`
  font-size: clamp(14px, 1.3vw, 15px);
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.7;
  margin-bottom: 10px;

  &::marker {
    color: ${({ theme }) => theme.color.primary};
  }
`;