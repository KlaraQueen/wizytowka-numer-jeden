import * as S from "./styled";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { siteData } from "../../../siteData";

const socialIconMap = {
  Facebook: FaFacebookF,
  YouTube: FaYoutube,
  Instagram: FaInstagram,
  X: FaXTwitter,
};

const Contact = () => {
  const { companyName } = siteData;
  const { title, address, nip, regon, phone, phoneHref, email, emailHref, area, socialLinks } = siteData.contact;

  const addressLines = address.split("\n");

  return (
    <S.Section>
      <S.Title>{title}</S.Title>
      <S.Wrapper>
        <S.Column>
          <S.Item>
            <S.Icon><HiLocationMarker /></S.Icon>
            <S.Block>
              <S.Label>Adres</S.Label>
              <S.Address>
                {addressLines.map((line, i) => (
                  <span key={i}>{line}{i < addressLines.length - 1 && <br />}</span>
                ))}
                <br />
                <S.Small>
                  NIP: {nip}<br />
                  REGON: {regon}
                </S.Small>
              </S.Address>
            </S.Block>
          </S.Item>
        </S.Column>
        <S.Divider />
        <S.Column>
          <S.Item>
            <S.Icon><HiPhone /></S.Icon>
            <S.Block>
              <S.Label>Telefon</S.Label>
              <S.Link href={phoneHref}>{phone}</S.Link>
            </S.Block>
          </S.Item>
          <S.Item>
            <S.Icon><HiMail /></S.Icon>
            <S.Block>
              <S.Label>E-mail</S.Label>
              <S.Link href={emailHref}>{email}</S.Link>
            </S.Block>
          </S.Item>
          <S.Item>
            <S.Icon><HiLocationMarker /></S.Icon>
            <S.Block>
              <S.Label>Obszar działania</S.Label>
              <S.Value>{area}</S.Value>
            </S.Block>
          </S.Item>
        </S.Column>
      </S.Wrapper>
      <S.SocialRow>
        {socialLinks.map(({ name, href }) => {
          const Icon = socialIconMap[name];
          return Icon ? (
            <S.SocialLink key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
              <Icon />
            </S.SocialLink>
          ) : null;
        })}
      </S.SocialRow>
      <S.Copyright>© {new Date().getFullYear()} {companyName}. Wszelkie prawa zastrzeżone.</S.Copyright>
    </S.Section>
  );
};

export default Contact;