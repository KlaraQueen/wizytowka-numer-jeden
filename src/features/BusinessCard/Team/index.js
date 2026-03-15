import * as S from "./styled";
import teamPhoto from "./Image/Gemini_Generated_Image_6de5176de5176de5.png";

const employees = [
  {
    name: "Marek Kowalski",
    age: 55,
    role: "Właściciel",
    education: "Technikum Ogrodnicze w Lublinie",
    experience: "35 lat doświadczenia w branży ogrodniczej",
  },
  {
    name: "Katarzyna Nowak",
    age: 42,
    role: "Projektantka ogrodów",
    education: "Wydział Architektury Krajobrazu SGGW Warszawa",
    experience: "18 lat w projektowaniu terenów zielonych",
  },
  {
    name: "Tomasz Wiśniewski",
    age: 38,
    role: "Specjalista ds. nawadniania",
    education: "Technikum Ogrodnicze, kursy instalatorskie",
    experience: "15 lat doświadczenia",
  },
  {
    name: "Anna Lewandowska",
    age: 35,
    role: "Ogrodnik – pielęgnacja",
    education: "Technikum Ogrodnicze w Zamościu",
    experience: "12 lat w pielęgnacji ogrodów",
  },
  {
    name: "Piotr Dąbrowski",
    age: 40,
    role: "Specjalista ds. trawników",
    education: "Technikum Ogrodnicze, kursy zieleni miejskiej",
    experience: "14 lat w zakładaniu i pielęgnacji trawników",
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
            <S.EmployeeMeta>{emp.age} lat</S.EmployeeMeta>
            <S.EmployeeRole>{emp.role}</S.EmployeeRole>
            <S.EmployeeDetail>
              <S.DetailLabel>Wykształcenie</S.DetailLabel>
              <S.DetailValue>{emp.education}</S.DetailValue>
            </S.EmployeeDetail>
            <S.EmployeeDetail>
              <S.DetailLabel>Doświadczenie</S.DetailLabel>
              <S.DetailValue>{emp.experience}</S.DetailValue>
            </S.EmployeeDetail>
          </S.EmployeeCard>
        ))}
      </S.EmployeesGrid>
    </S.Section>
  );
};

export default Team;
