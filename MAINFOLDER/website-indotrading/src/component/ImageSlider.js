import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 575);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: "background-image 0.5s ease-in-out",
  };

  const leftArrowStyle = {
    position: "absolute",
    top: isSmallScreen ? "90px" : "200px",
    cursor: "pointer",
    zIndex: 1,
  };

  const rightArrowStyle = {
    position: "absolute",
    top: isSmallScreen ? "90px" : "200px",
    right: "0",
    cursor: "pointer",
    zIndex: 1,
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const barContainerStyles = {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: isSmallScreen ? "110%" : "100%",
    transform: isSmallScreen
      ? "translate(270%, -50px)"
      : "translate(450%, -50px)",
  };

  const barStyles = {
    cursor: "pointer",
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 575);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 3000);

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyle} onClick={goToPrev}>
        <ChevronLeftIcon
          sx={{ fontSize: isSmallScreen ? 40 : 70, color: grey[400] }}
        />
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        <ChevronRightIcon
          sx={{ fontSize: isSmallScreen ? 40 : 70, color: grey[400] }}
        />
      </div>
      <div style={slideStyles}></div>
      <div style={barContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={barStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            <HorizontalRuleIcon
              sx={{ fontSize: isSmallScreen ? 30 : 50, color: grey[400] }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
