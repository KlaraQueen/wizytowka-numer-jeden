import * as S from "./styled";
import { siteData } from "../../../siteData";

const Hero = () => {
  const scrollToContact = () => {
    const contact = document.getElementById("kontakt");
    const header = document.querySelector("header");

    if (!contact) return;

    const headerOffset = header?.getBoundingClientRect().height ?? 0;
    const targetPosition = contact.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
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