import * as S from "./styled";

const About = () => {
  const works = [
    "nasadzenia roślin i zabezpieczanie przed zimą",
    "odchwaszczanie i zwalczanie szkodników",
    "nawożenie i przycinanie drzew i krzewów",
    "zakładanie i pielęgnacja trawników z rolki i z siewu",
    "budowa małej architektury ogrodowej",
  ];

  return (
    <S.Section>
      <S.Content>
        <S.Label>O nas</S.Label>
        <S.Title>Jakie prace ogrodnicze wykonujemy?</S.Title>
        <S.Description>
          Oferta jest szeroka i można ją elastycznie dopasować do potrzeb. 
          Zajmujemy się projektowaniem nowych terenów zielonych, renowacją oraz 
          pielęgnacją już istniejących. W naszym zespole pracują fachowcy z wieloletnim doświadczeniem.
        </S.Description>
        <S.List>
          {works.map((item, i) => (
            <S.ListItem key={i}>{item}</S.ListItem>
          ))}
        </S.List>
      </S.Content>
    </S.Section>
  );
};

export default About;