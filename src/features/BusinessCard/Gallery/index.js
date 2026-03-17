import { useState, useEffect } from "react";
import * as S from "./styled";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { siteData } from "../../../siteData";

const Gallery = () => {
  const photos = siteData.images.gallery;
  const { title } = siteData.gallery;
  const [selectedIndex, setSelectedIndex] = useState(null);

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
      <S.Title>{title}</S.Title>
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