import * as S from "./styled";
import { GiFlowerPot, GiGrass, GiTreeBranch, GiWaterDrop } from "react-icons/gi";
import { MdGrass } from "react-icons/md";
import { siteData } from "../../../siteData";

const iconMap = {
  flowerPot: GiFlowerPot,
  grass: MdGrass,
  mow: GiGrass,
  treeBranch: GiTreeBranch,
  waterDrop: GiWaterDrop,
};

const Services = () => {
  const { label, title, items } = siteData.services;

  return (
    <S.Section id="uslugi">
      <S.Label>{label}</S.Label>
      <S.Title>{title}</S.Title>
      <S.Grid>
        {items.map((service, index) => {
          const Icon = iconMap[service.icon] || GiFlowerPot;
          return (
            <S.Card key={index}>
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
              <S.CardTitle>{service.title}</S.CardTitle>
              <S.CardDesc>{service.description}</S.CardDesc>
            </S.Card>
          );
        })}
      </S.Grid>
    </S.Section>
  );
};

export default Services;
