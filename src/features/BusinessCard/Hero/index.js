import * as S from "./styled";
import heroImage from "./Image/pexels-pixabay-259588.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.Section>
      <S.HeroImage src={heroImage} alt="" />
      <S.HeroOverlay />
      <S.HeroContent>
        <S.TextBlock>
          <S.Tagline>Dla naszej firmy Twój ogród jest najważniejszy.</S.Tagline>
          <S.Description>
            Zajmujemy się profesjonalnym projektowaniem oraz pielęgnacją terenów zielonych.
            Stworzymy wymarzony ogród i zadbamy, by zachwycał przez cały rok.
          </S.Description>
          <S.CtaButton onClick={scrollToContact}>Skontaktuj się z nami</S.CtaButton>
        </S.TextBlock>
      </S.HeroContent>
    </S.Section>
  );
};

export default Hero;