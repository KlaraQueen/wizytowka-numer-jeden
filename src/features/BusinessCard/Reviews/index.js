import * as S from "./styled";
import { FaStar } from "react-icons/fa6";

const reviews = [
  {
    author: "Anna K.",
    text: "Profesjonalna obsługa od A do Z. Trawnik wygląda teraz rewelacyjnie, a koszenie jest zawsze na czas. Polecam Eko-Design każdemu, kto szuka solidnej firmy ogrodniczej.",
    rating: 5,
  },
  {
    author: "Tomasz M.",
    text: "Zakładaliśmy ogród od zera. Zespół Eko-Design wykonał projekt i realizację perfekcyjnie. Trawa z rolki, nasadzenia – wszystko zrobione solidnie. Bardzo zadowolony!",
    rating: 5,
  },
  {
    author: "Magdalena W.",
    text: "Świetna firma! Pielęgnują nasz ogród od dwóch lat. Zawsze punktualnie, ceny fair, a efekt pracy zachwyca. Na pewno będziemy kontynuować współpracę.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <S.Section id="opinie">
      <S.Label>Opinie Google</S.Label>
      <S.Title>Co mówią o nas klienci</S.Title>
      <S.Grid>
        {reviews.map((review, index) => (
          <S.Card key={index}>
            <S.Stars>
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </S.Stars>
            <S.Author>{review.author}</S.Author>
            <S.Text>{review.text}</S.Text>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default Reviews;
