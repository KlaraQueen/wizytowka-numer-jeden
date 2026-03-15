import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(20px, 4vw, 48px) 0;
  scroll-margin-top: 80px;

  @media (min-width: 768px) {
    padding: clamp(32px, 4vw, 48px) 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 4vw, 40px);
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 0.95fr 1.05fr;
    gap: clamp(24px, 4vw, 40px);
  }
`;

export const TextBlock = styled.div`
  order: 1;

  @media (min-width: 768px) {
    order: 0;
  }
`;

export const Label = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2.5px;
  font-size: 10px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: clamp(11px, 1vw, 12px);
    margin-bottom: 14px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(18px, 2.8vw, 30px);
  color: ${({ theme }) => theme.color.secondary};
  margin: 0 0 10px;
  font-weight: 800;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: clamp(22px, 2.8vw, 30px);
    margin: 0 0 16px;
  }
`;

export const Description = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.6;
  margin: 0;

  @media (min-width: 768px) {
    font-size: clamp(14px, 1.3vw, 16px);
    line-height: 1.7;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 16px 40px -12px rgba(21, 42, 31, 0.25), 0 4px 16px rgba(21, 42, 31, 0.1);

  @media (min-width: 768px) {
    border-radius: ${({ theme }) => theme.radius.xl};
    box-shadow: 0 32px 72px -20px rgba(21, 42, 31, 0.35), 0 8px 24px rgba(21, 42, 31, 0.12), 0 0 0 1px rgba(21, 42, 31, 0.05);
  }
`;

export const TeamImage = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

export const EmployeesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: clamp(14px, 2vw, 20px);
    margin-top: clamp(28px, 4vw, 40px);
  }
`;

export const EmployeeCard = styled.div`
  background: white;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 2px 10px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.04);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: clamp(18px, 2.5vw, 24px);
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: 0 4px 14px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.05);
  }

  &:hover {
    box-shadow: 0 16px 40px ${({ theme }) => theme.color.shadowHover}, 0 4px 12px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.06);
    transform: translateY(-2px);
  }
`;

export const EmployeeName = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.color.secondary};
  margin: 0 0 2px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: clamp(16px, 1.4vw, 18px);
    margin: 0 0 4px;
  }
`;

export const EmployeeMeta = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.color.textMuted};
  display: block;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    font-size: clamp(13px, 1.2vw, 14px);
    margin-bottom: 8px;
  }
`;

export const EmployeeRole = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
  margin: 0 0 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(21, 42, 31, 0.08);

  @media (min-width: 768px) {
    font-size: clamp(14px, 1.3vw, 15px);
    margin: 0 0 12px;
    padding-bottom: 12px;
  }
`;

export const EmployeeDetail = styled.div`
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const DetailLabel = styled.span`
  display: block;
  font-size: 9px;
  color: ${({ theme }) => theme.color.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: clamp(11px, 1vw, 12px);
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
`;

export const DetailValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.text};
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: clamp(14px, 1.2vw, 15px);
    line-height: 1.5;
  }
`;
