export const siteData = {
  companyName: "Eko-Design",
  ownerName: "Karolina",

  images: {
    hero: require("./Images/hero.png"),
    team: require("./Images/team.png"),
    gallery: [
      { src: require("./Images/gallery-1.jpg"), alt: "Realizacja 1" },
      { src: require("./Images/gallery-2.jpg"), alt: "Realizacja 2" },
      { src: require("./Images/gallery-3.jpg"), alt: "Realizacja 3" },
      { src: require("./Images/gallery-4.jpg"), alt: "Realizacja 4" },
    ],
    logo: null,
  },

  hero: {
    title: "Dla naszej firmy Twój ogród jest najważniejszy.",
    subtitle: "Zajmujemy się profesjonalnym projektowaniem oraz pielęgnacją terenów zielonych. Stworzymy wymarzony ogród i zadbamy, by zachwycał przez cały rok.",
    buttonText: "Skontaktuj się z nami",
  },

  services: {
    label: "Zapoznaj się z naszą ofertą",
    title: "Usługi ogrodnicze",
    items: [
      { icon: "flowerPot", title: "Zakładanie ogrodów", description: "Pomagamy w zakładaniu ogrodów od podstaw, zgodnie z projektem wykonanym wcześniej." },
      { icon: "grass", title: "Trawa z rolki", description: "Przygotujemy podłoże i rozłożymy piękny trawnik – efekt w jeden dzień." },
      { icon: "mow", title: "Koszenie traw", description: "Abonamentowe koszenia, opryski przeciw chwastom oraz nawożenie trawników." },
      { icon: "treeBranch", title: "Sadzenie roślin", description: "Nasadzenia, zakładanie rabat, sadzenie drzew i przesadzanie roślin." },
      { icon: "waterDrop", title: "Systemy nawadniające", description: "Kompletne instalacje podlewania ogrodów – od projektu po wykonanie." },
    ],
  },

  pricing: {
    label: "Cennik",
    title: "Orientacyjne ceny usług",
    subtitle: "Ceny mogą się różnić w zależności od zakresu i lokalizacji. Skontaktuj się po wycenę.",
    items: [
      { name: "Koszenie trawy", price: "od 80 zł", unit: "jednorazowe koszenie" },
      { name: "Pielęgnacja ogrodu", price: "od 150 zł", unit: "kompleksowa pielęgnacja" },
      { name: "Trawa z rolki", price: "od 45 zł/m²", unit: "z przygotowaniem podłoża" },
      { name: "Zakładanie ogrodu", price: "wycena indywidualna", unit: "projekt + realizacja" },
      { name: "System nawadniający", price: "od 2500 zł", unit: "instalacja kompletna" },
      { name: "Dojazd", price: "3 zł/km", unit: "usługa dojazdu poza miastem" },
    ],
  },

  team: {
    label: "Poznaj nas",
    title: "Nasz zespół",
    description: "Doświadczeni fachowcy z pasją do zieleni. Tworzymy ogrody, które zachwycają – od projektu po pielęgnację przez cały rok.",
    employees: [
      { name: "Marek Kowalski", role: "Właściciel", description: "Kieruje firmą i nadzoruje realizację projektów ogrodniczych." },
      { name: "Katarzyna Nowak", role: "Projektantka ogrodów", description: "Tworzy projekty terenów zielonych i aranżacje roślinne." },
      { name: "Tomasz Wiśniewski", role: "Specjalista ds. nawadniania", description: "Projektuje i montuje systemy nawadniające." },
      { name: "Anna Lewandowska", role: "Ogrodnik – pielęgnacja", description: "Pielęgnuje ogrody i dba o rośliny przez cały rok." },
      { name: "Piotr Dąbrowski", role: "Specjalista ds. trawników", description: "Zakłada i pielęgnuje trawniki z rolki." },
    ],
  },

  reviews: {
    label: "Opinie",
    title: "Co mówią o nas klienci",
    items: [
      { author: "Anna K.", text: "Profesjonalna obsługa od A do Z. Trawnik wygląda teraz rewelacyjnie, a koszenie jest zawsze na czas. Polecam Eko-Design każdemu, kto szuka solidnej firmy ogrodniczej.", rating: 5 },
      { author: "Tomasz M.", text: "Zakładaliśmy ogród od zera. Zespół Eko-Design wykonał projekt i realizację perfekcyjnie. Trawa z rolki, nasadzenia – wszystko zrobione solidnie. Bardzo zadowolony!", rating: 5 },
      { author: "Magdalena W.", text: "Świetna firma! Pielęgnują nasz ogród od dwóch lat. Zawsze punktualnie, ceny fair, a efekt pracy zachwyca. Na pewno będziemy kontynuować współpracę.", rating: 5 },
    ],
  },

  about: {
    label: "O nas",
    title: "Jakie prace ogrodnicze wykonujemy?",
    description: "Oferta jest szeroka i można ją elastycznie dopasować do potrzeb. Zajmujemy się projektowaniem nowych terenów zielonych, renowacją oraz pielęgnacją już istniejących. W naszym zespole pracują fachowcy z wieloletnim doświadczeniem.",
    works: [
      "nasadzenia roślin i zabezpieczanie przed zimą",
      "odchwaszczanie i zwalczanie szkodników",
      "nawożenie i przycinanie drzew i krzewów",
      "zakładanie i pielęgnacja trawników z rolki i z siewu",
      "budowa małej architektury ogrodowej",
    ],
  },

  contact: {
    title: "Skontaktuj się",
    address: "Eko-Design Sp. z o.o.\nul. Przykładowa 15\n22-400 Przykład",
    nip: "000-000-00-00",
    regon: "000000000",
    phone: "+48 000 000 000",
    phoneHref: "tel:+48000000000",
    email: "przykład@biuroeco.pl",
    emailHref: "mailto:przykład@biuroeco.pl",
    area: "Zamość i okolice do 50 km",
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "YouTube", href: "https://youtube.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "X", href: "https://x.com" },
    ],
  },

  gallery: {
    title: "Nasze realizacje",
  },

  nav: {
    items: [
      { id: "o-nas", label: "O nas" },
      { id: "uslugi", label: "Usługi" },
      { id: "cennik", label: "Cennik" },
      { id: "zespol", label: "Nasz zespół" },
      { id: "realizacje", label: "Realizacje" },
      { id: "opinie", label: "Opinie" },
      { id: "kontakt", label: "Kontakt" },
    ],
  },
};
