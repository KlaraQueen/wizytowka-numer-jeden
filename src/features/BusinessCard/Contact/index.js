import * as S from "./styled";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com", label: "X (Twitter)" },
];

const Contact = () => {
  return (
    <S.Section>
      <S.Title>Skontaktuj się</S.Title>
      <S.Wrapper>
        <S.Column>
          <S.Item>
            <S.Icon><HiLocationMarker /></S.Icon>
            <S.Block>
              <S.Label>Adres</S.Label>
              <S.Address>
                Eko-Design Sp. z o.o.<br />
                ul. Przykładowa 15<br />
                22-400 Przykład<br />
                <S.Small>
                  NIP: 000-000-00-00<br />
                  REGON: 000000000
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
              <S.Link href="tel:+48000000000">+48 000 000 000</S.Link>
            </S.Block>
          </S.Item>
          <S.Item>
            <S.Icon><HiMail /></S.Icon>
            <S.Block>
              <S.Label>E-mail</S.Label>
              <S.Link href="mailto:biuro@biuroeco.pl">przykład@biuroeco.pl</S.Link>
            </S.Block>
          </S.Item>
          <S.Item>
            <S.Icon><HiLocationMarker /></S.Icon>
            <S.Block>
              <S.Label>Obszar działania</S.Label>
              <S.Value>Zamość i okolice do 50 km</S.Value>
            </S.Block>
          </S.Item>
        </S.Column>
      </S.Wrapper>
      <S.SocialRow>
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <S.SocialLink key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon />
          </S.SocialLink>
        ))}
      </S.SocialRow>
      <S.Copyright>© {new Date().getFullYear()} Eko-Design. Wszelkie prawa zastrzeżone.</S.Copyright>
    </S.Section>
  );
};

export default Contact;