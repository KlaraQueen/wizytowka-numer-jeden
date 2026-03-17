import * as S from "./styled";
import { siteData } from "../../../siteData";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const { title, subtitle, buttonText } = siteData.hero;

  return (
    <S.Section>
      <S.HeroImage src={siteData.images.hero} alt="" />
      <S.HeroOverlay />
      <S.HeroContent>
        <S.TextBlock>
          <S.Tagline>{title}</S.Tagline>
          <S.Description>{subtitle}</S.Description>
          <S.CtaButton onClick={scrollToContact}>{buttonText}</S.CtaButton>
        </S.TextBlock>
      </S.HeroContent>
    </S.Section>
  );
};

export default Hero;