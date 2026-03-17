import * as S from "./styled";
import teamPhoto from "./Image/Gemini_Generated_Image_6de5176de5176de5.png";

const employees = [
  {
    name: "Marek Kowalski",
    role: "Właściciel",
    description: "Kieruje firmą i nadzoruje realizację projektów ogrodniczych.",
  },
  {
    name: "Katarzyna Nowak",
    role: "Projektantka ogrodów",
    description: "Tworzy projekty terenów zielonych i aranżacje roślinne.",
  },
  {
    name: "Tomasz Wiśniewski",
    role: "Specjalista ds. nawadniania",
    description: "Projektuje i montuje systemy nawadniające.",
  },
  {
    name: "Anna Lewandowska",
    role: "Ogrodnik – pielęgnacja",
    description: "Pielęgnuje ogrody i dba o rośliny przez cały rok.",
  },
  {
    name: "Piotr Dąbrowski",
    role: "Specjalista ds. trawników",
    description: "Zakłada i pielęgnuje trawniki z rolki.",
  },
];

const Team = () => {
  return (
    <S.Section id="zespol">
      <S.Wrapper>
        <S.TextBlock>
          <S.Label>Poznaj nas</S.Label>
          <S.Title>Nasz zespół</S.Title>
          <S.Description>
            Doświadczeni fachowcy z pasją do zieleni. Tworzymy ogrody, 
            które zachwycają – od projektu po pielęgnację przez cały rok.
          </S.Description>
        </S.TextBlock>
        <S.ImageWrapper>
          <S.TeamImage src={teamPhoto} alt="Zespół Eko-Design - usługi ogrodnicze" />
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
