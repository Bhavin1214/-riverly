// src/components/BackgroundImage.jsx
import React, { useEffect, useState } from "react";
import "../styles/BackgroundImage.css";

const BackgroundImage = ({ imageSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.src = imageSrc || require("../assets/image.png");
    img.onload = () => setIsLoaded(true);
  }, [imageSrc]);

  return (
    <div
      className={`background-image ${isLoaded ? "fade-in" : ""}`}
      role="img"
      aria-label="Decorative river landscape background"
      style={{
        backgroundImage: `radial-gradient(
          29.05% 85.75% at 50% 50%,
          rgba(12, 35, 28, 0.3) 0%,
          rgba(13, 39, 31, 0.3) 51.92%,
          rgba(33, 61, 53, 0.3) 100%
        ), url(${imageSrc || require("../assets/image.png")})`,
      }}
    ></div>
  );
};

export default BackgroundImage;
