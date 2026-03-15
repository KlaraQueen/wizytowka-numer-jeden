import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(32px, 4vw, 48px) 0;
  scroll-margin-top: 80px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(24px, 4vw, 40px);
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 0.95fr 1.05fr;
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
  font-size: clamp(11px, 1vw, 12px);
  margin-bottom: 14px;
`;

export const Title = styled.h2`
  font-size: clamp(22px, 2.8vw, 30px);
  color: ${({ theme }) => theme.color.secondary};
  margin: 0 0 16px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  font-size: clamp(14px, 1.3vw, 16px);
  color: ${({ theme }) => theme.color.textMuted};
  line-height: 1.7;
  margin: 0;
`;

export const ImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  box-shadow: 0 32px 72px -20px rgba(21, 42, 31, 0.35), 0 8px 24px rgba(21, 42, 31, 0.12), 0 0 0 1px rgba(21, 42, 31, 0.05);
`;

export const TeamImage = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

export const EmployeesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: clamp(14px, 2vw, 20px);
  margin-top: clamp(28px, 4vw, 40px);
`;

export const EmployeeCard = styled.div`
  background: white;
  padding: clamp(18px, 2.5vw, 24px);
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 14px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 16px 40px ${({ theme }) => theme.color.shadowHover}, 0 4px 12px ${({ theme }) => theme.color.shadow}, 0 0 0 1px rgba(21, 42, 31, 0.06);
    transform: translateY(-2px);
  }
`;

export const EmployeeName = styled.h3`
  font-size: clamp(16px, 1.4vw, 18px);
  color: ${({ theme }) => theme.color.secondary};
  margin: 0 0 4px;
  font-weight: 700;
`;

export const EmployeeMeta = styled.span`
  font-size: clamp(13px, 1.2vw, 14px);
  color: ${({ theme }) => theme.color.textMuted};
  display: block;
  margin-bottom: 8px;
`;

export const EmployeeRole = styled.p`
  font-size: clamp(14px, 1.3vw, 15px);
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
  margin: 0 0 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(21, 42, 31, 0.08);
`;

export const EmployeeDetail = styled.div`
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const DetailLabel = styled.span`
  display: block;
  font-size: clamp(11px, 1vw, 12px);
  color: ${({ theme }) => theme.color.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const DetailValue = styled.span`
  font-size: clamp(14px, 1.2vw, 15px);
  color: ${({ theme }) => theme.color.text};
  line-height: 1.5;
`;
