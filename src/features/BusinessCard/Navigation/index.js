import * as S from "./styled";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { siteData } from "../../../siteData";

const Navigation = () => {
  const { companyName, contact, nav } = siteData;
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.Nav>
      <S.TopRow>
        <S.Logo href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <S.LogoIcon />
          <S.LogoText>{companyName}</S.LogoText>
        </S.Logo>
        <S.IconLinks>
        <S.IconLink href={contact.phoneHref} aria-label="Telefon">
          <HiPhone />
        </S.IconLink>
        <S.IconLink href={contact.emailHref} aria-label="E-mail">
          <HiMail />
        </S.IconLink>
        {contact.socialLinks.map(({ name, href }) => {
          const Icon = { Facebook: FaFacebookF, YouTube: FaYoutube, Instagram: FaInstagram, X: FaXTwitter }[name];
          return Icon ? (
            <S.IconLink key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
              <Icon />
            </S.IconLink>
          ) : null;
        })}
      </S.IconLinks>
      </S.TopRow>
      <S.NavLinks>
        {nav.items.map((item) => (
          <S.NavLink key={item.id} onClick={() => scrollTo(item.id)}>
            {item.label}
          </S.NavLink>
        ))}
      </S.NavLinks>
    </S.Nav>
  );
};

export default Navigation;
