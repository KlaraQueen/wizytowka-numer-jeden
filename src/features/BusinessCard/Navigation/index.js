import * as S from "./styled";

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
      <S.Logo href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <S.LogoIcon />
        <S.LogoText>Eko-Design</S.LogoText>
      </S.Logo>
      <S.NavLinks>
        {navItems.map((item) => (
          <S.NavLink key={item.id} onClick={() => scrollTo(item.id)}>
            {item.label}
          </S.NavLink>
        ))}
      </S.NavLinks>
      <S.Phone href="tel:+48000000000">+48 000 000 000</S.Phone>
    </S.Nav>
  );
};

export default Navigation;
