import * as S from "./styled";
import { siteData } from "../../../siteData";

const About = () => {
  const { label, title, description, works } = siteData.about;

  return (
    <S.Section>
      <S.Content>
        <S.Label>{label}</S.Label>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
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