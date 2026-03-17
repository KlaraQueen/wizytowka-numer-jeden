import * as S from "./styled";
import { FaStar } from "react-icons/fa6";
import { siteData } from "../../../siteData";

const Reviews = () => {
  const { label, title, items } = siteData.reviews;

  return (
    <S.Section id="opinie">
      <S.Label>{label}</S.Label>
      <S.Title>{title}</S.Title>
      <S.Grid>
        {items.map((review, index) => (
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
