import * as S from "./styled";
import { siteData } from "../../../siteData";

const Team = () => {
  const { companyName, images } = siteData;
  const { label, title, description, employees } = siteData.team;

  return (
    <S.Section id="zespol">
      <S.Wrapper>
        <S.TextBlock>
          <S.Label>{label}</S.Label>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TextBlock>
        <S.ImageWrapper>
          <S.TeamImage src={images.team} alt={`Zespół ${companyName} - usługi ogrodnicze`} />
        </S.ImageWrapper>
      </S.Wrapper>

      <S.EmployeesGrid>
        {employees.map((emp, index) => (
          <S.EmployeeCard key={index}>
            <S.EmployeeName>{emp.name}</S.EmployeeName>
            <S.EmployeeRole>{emp.role}</S.EmployeeRole>
            <S.EmployeeDesc>{emp.description}</S.EmployeeDesc>
          </S.EmployeeCard>
        ))}
      </S.EmployeesGrid>
    </S.Section>
  );
};

export default Team;
