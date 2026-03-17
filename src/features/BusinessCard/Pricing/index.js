import * as S from "./styled";
import { siteData } from "../../../siteData";

const Pricing = () => {
  const { label, title, subtitle, items } = siteData.pricing;

  return (
    <S.Section id="cennik">
      <S.Label>{label}</S.Label>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Grid>
        {items.map((item, index) => (
          <S.Card key={index}>
            <S.ServiceName>{item.name}</S.ServiceName>
            <S.Price>{item.price}</S.Price>
            <S.Desc>{item.unit}</S.Desc>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default Pricing;
