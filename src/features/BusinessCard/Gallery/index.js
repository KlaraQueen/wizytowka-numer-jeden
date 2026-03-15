import { useState, useEffect } from "react";
import * as S from "./styled";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import photo1 from "./Images/pexels-artbovich-7031607.jpg";
import photo2 from "./Images/pexels-iriser-1122639.jpg";
import photo3 from "./Images/pexels-nord6-1590336.jpg";
import photo4 from "./Images/pexels-pixabay-280222.jpg";

const photos = [
  { src: photo1, alt: "Realizacja 1" },
  { src: photo2, alt: "Realizacja 2" },
  { src: photo3, alt: "Realizacja 3" },
  { src: photo4, alt: "Realizacja 4" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const goPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((i) => (i <= 0 ? photos.length - 1 : i - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((i) => (i >= photos.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (i <= 0 ? photos.length - 1 : i - 1));
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i >= photos.length - 1 ? 0 : i + 1));
    };
    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <S.Section>
      <S.Title>Nasze realizacje</S.Title>
      <S.Grid>
        {photos.map((photo, index) => (
          <S.ImageWrapper
            key={index}
            onClick={() => setSelectedIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(index);
              }
            }}
          >
            <S.Image src={photo.src} alt={photo.alt} />
          </S.ImageWrapper>
        ))}
      </S.Grid>

      {selectedIndex !== null && (
        <S.LightboxOverlay onClick={() => setSelectedIndex(null)}>
          <S.LightboxContent onClick={(e) => e.stopPropagation()}>
            <S.LightboxClose onClick={() => setSelectedIndex(null)} aria-label="Zamknij">×</S.LightboxClose>
            <S.LightboxNavPrev onClick={goPrev} aria-label="Poprzednie zdjęcie">
              <HiChevronLeft />
            </S.LightboxNavPrev>
            <S.LightboxNavNext onClick={goNext} aria-label="Następne zdjęcie">
              <HiChevronRight />
            </S.LightboxNavNext>
            <S.LightboxImage src={photos[selectedIndex].src} alt={photos[selectedIndex].alt} />
            <S.LightboxCounter>
              {selectedIndex + 1} / {photos.length}
            </S.LightboxCounter>
          </S.LightboxContent>
        </S.LightboxOverlay>
      )}
    </S.Section>
  );
};

export default Gallery;