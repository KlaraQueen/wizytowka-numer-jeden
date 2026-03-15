import * as S from "./styled";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

const navItems = [
  { id: "o-nas", label: "O nas" },
  { id: "uslugi", label: "Usługi" },
  { id: "cennik", label: "Cennik" },
  { id: "zespol", label: "Nasz zespół" },
  { id: "realizacje", label: "Realizacje" },
  { id: "opinie", label: "Opinie" },
  { id: "kontakt", label: "Kontakt" },
];

const Navigation = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.Nav>
      <S.TopRow>
        <S.Logo href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <S.LogoIcon />
          <S.LogoText>Eko-Design</S.LogoText>
        </S.Logo>
        <S.IconLinks>
        <S.IconLink href="tel:+48000000000" aria-label="Telefon">
          <HiPhone />
        </S.IconLink>
        <S.IconLink href="mailto:biuro@biuroeco.pl" aria-label="E-mail">
          <HiMail />
        </S.IconLink>
        <S.IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </S.IconLink>
        <S.IconLink href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </S.IconLink>
        <S.IconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </S.IconLink>
        <S.IconLink href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
          <FaXTwitter />
        </S.IconLink>
      </S.IconLinks>
      </S.TopRow>
      <S.NavLinks>
        {navItems.map((item) => (
          <S.NavLink key={item.id} onClick={() => scrollTo(item.id)}>
            {item.label}
          </S.NavLink>
        ))}
      </S.NavLinks>
    </S.Nav>
  );
};

export default Navigation;
