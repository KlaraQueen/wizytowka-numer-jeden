import Navigation from "./Navigation/index";
import Hero from "./Hero/index";
import Services from "./Services/index";
import Pricing from "./Pricing/index";
import Team from "./Team/index";
import About from "./About/index";
import Gallery from "./Gallery/index";
import Contact from "./Contact/index";
import * as S from "./styled";

const BusinessCard = () => {
  return (
    <S.MainWrapper>
      <S.Header>
        <Navigation />
      </S.Header>
      <S.Content>
        <Hero />
        <Services />
        <Team />
        <S.TwoCol>
          <S.AboutArea id="o-nas">
            <About />
          </S.AboutArea>
          <S.GalleryArea id="realizacje">
            <Gallery />
          </S.GalleryArea>
        </S.TwoCol>
        <Pricing />
        <S.ContactArea id="kontakt">
          <Contact />
        </S.ContactArea>
      </S.Content>
    </S.MainWrapper>
  );
};

export default BusinessCard;