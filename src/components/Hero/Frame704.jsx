import React, { useState, useEffect } from "react";
import "../../styles/Frame704.css";
import star from "../../assets/star.svg";
import halfStar from "../../assets/halfstar.svg";
import ratingLogo from "../../assets/rating.svg";
import arrowRight from "../../assets/arrow2.svg";

const Frame704 = () => {
  const [visible, setVisible] = useState(false);
  const [reviews, setReviews] = useState(0);
  const targetReviews = 2130;

  // Fade-in and animated review counter
  useEffect(() => {
    setVisible(true);

    let start = 0;
    const duration = 1200;
    const stepTime = 10;
    const increment = targetReviews / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetReviews) {
        start = targetReviews;
        clearInterval(counter);
      }
      setReviews(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  const handleCTA = () => {
    // placeholder for scroll or navigation
    console.log("CTA clicked - navigate to adventure section");
  };

  return (
    <div className={`frame-704 ${visible ? "fade-in" : ""}`}>
      <h1 className="main-heading">
        Vivez la croisière fluviale, autrement.
      </h1>

      <div className="frame-704-inner">
        <p className="description">
          <div>
            Partez sans permis à la découverte des rivières et canaux de France et d’Europe.
          </div>
          Naviguez à votre rythme, partagez des moments précieux en famille ou entre amis,
          reconnectez-vous à la nature et redécouvrez ce qui vous lie.
        </p>

        <div className="frame-750">
          <div className="frame-749">
            <span className="review-text">
              Basé sur {reviews.toLocaleString("fr-FR")} avis
            </span>
            <div className="frame-748">
              <div className="star" style={{ backgroundImage: `url(${star})` }}></div>
              <div className="star" style={{ backgroundImage: `url(${star})` }}></div>
              <div className="star" style={{ backgroundImage: `url(${star})` }}></div>
              <div className="star" style={{ backgroundImage: `url(${star})` }}></div>
              <div className="star" style={{ backgroundImage: `url(${halfStar})` }}></div>
            </div>
          </div>
          <div
            className="rating-logo"
            style={{ backgroundImage: `url(${ratingLogo})` }}
          ></div>
        </div>

        <div
          className="frame-3 cta-container"
          role="button"
          aria-label="Plonger dans l’aventure"
          onClick={handleCTA}
        >
          <span className="cta-text">Plonger dans l’aventure</span>
          <img src={arrowRight} alt="arrow" className="cta-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Frame704;
