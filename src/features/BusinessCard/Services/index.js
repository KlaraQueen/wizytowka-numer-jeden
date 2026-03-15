import * as S from "./styled";
import { GiFlowerPot, GiGrass, GiTreeBranch, GiWaterDrop } from "react-icons/gi";
import { MdGrass } from "react-icons/md";

const services = [
  {
    icon: GiFlowerPot,
    title: "Zakładanie ogrodów",
    desc: "Pomagamy w zakładaniu ogrodów od podstaw, zgodnie z projektem wykonanym wcześniej.",
  },
  {
    icon: MdGrass,
    title: "Trawa z rolki",
    desc: "Przygotujemy podłoże i rozłożymy piękny trawnik – efekt w jeden dzień.",
  },
  {
    icon: GiGrass,
    title: "Koszenie traw",
    desc: "Abonamentowe koszenia, opryski przeciw chwastom oraz nawożenie trawników.",
  },
  {
    icon: GiTreeBranch,
    title: "Sadzenie roślin",
    desc: "Nasadzenia, zakładanie rabat, sadzenie drzew i przesadzanie roślin.",
  },
  {
    icon: GiWaterDrop,
    title: "Systemy nawadniające",
    desc: "Kompletne instalacje podlewania ogrodów – od projektu po wykonanie.",
  },
];

const Services = () => {
  return (
    <S.Section id="uslugi">
      <S.Label>Zapoznaj się z naszą ofertą</S.Label>
      <S.Title>Usługi ogrodnicze</S.Title>
      <S.Grid>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
          <S.Card key={index}>
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
            <S.CardTitle>{service.title}</S.CardTitle>
            <S.CardDesc>{service.desc}</S.CardDesc>
          </S.Card>
          );
        })}
      </S.Grid>
    </S.Section>
  );
};

export default Services;
