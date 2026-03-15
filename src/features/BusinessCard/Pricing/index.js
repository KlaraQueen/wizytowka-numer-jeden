import * as S from "./styled";

const prices = [
  { service: "Koszenie trawy", price: "od 80 zł", desc: "jednorazowe koszenie" },
  { service: "Pielęgnacja ogrodu", price: "od 150 zł", desc: "kompleksowa pielęgnacja" },
  { service: "Trawa z rolki", price: "od 45 zł/m²", desc: "z przygotowaniem podłoża" },
  { service: "Zakładanie ogrodu", price: "wycena indywidualna", desc: "projekt + realizacja" },
  { service: "System nawadniający", price: "od 2500 zł", desc: "instalacja kompletna" },
  { service: "Dojazd", price: "3 zł/km", desc: "usługa dojazdu  poza miastem" },
];

const Pricing = () => {
  return (
    <S.Section id="cennik">
      <S.Label>Cennik</S.Label>
      <S.Title>Orientacyjne ceny usług</S.Title>
      <S.Subtitle>Ceny mogą się różnić w zależności od zakresu i lokalizacji. Skontaktuj się po wycenę.</S.Subtitle>
      <S.Grid>
        {prices.map((item, index) => (
          <S.Card key={index}>
            <S.ServiceName>{item.service}</S.ServiceName>
            <S.Price>{item.price}</S.Price>
            <S.Desc>{item.desc}</S.Desc>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default Pricing;
