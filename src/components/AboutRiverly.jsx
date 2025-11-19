import React, { useState } from "react";
import "../styles/AboutRiverly.css";
import loyaltyIcon from "../assets/curve.svg";
import iconBox from "../assets/iconBox.svg";
import firstIcon from "../assets/firstIcon.svg";
import secondIcon from "../assets/secondIcon.svg";
import thirdIcon from "../assets/thirdIcon.svg";

const AboutRiverly = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleCard = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const cards = [
    {
      title: "Vivez l’expérience authentique du tourisme fluvial",
      icon: firstIcon,
      content: `Voyager avec Riverly, c’est partager une expérience touristique authentique.
      Les maîtres mots sont la proximité, la découverte et l’autonomie. En louant votre bateau,
      vous devenez le capitaine de votre croisière fluviale ! Découvrez la convivialité du voyage
      en famille, entre amis ou en couple à travers des paysages authentiques, la nature et le patrimoine local.`,
    },
    {
      title: "Des vacances originales et personnalisées avec Riverly",
      icon: secondIcon,
      content: `Avec Riverly, chaque itinéraire devient unique. Créez votre parcours en fonction de vos envies :
      culture, gastronomie, nature ou détente. Nos bateaux sont équipés pour offrir un confort optimal et
      une expérience sur mesure, quelle que soit la destination. Laissez-vous guider par vos inspirations et
      profitez d’un séjour sur l’eau à votre rythme.`,
    },
    {
      title: "Des croisières fluviales inoubliables vous attendent",
      icon: thirdIcon,
      content: `Nos croisières vous permettent de redécouvrir la beauté des voies navigables françaises et européennes.
      Admirez des villages pittoresques, goûtez à la cuisine locale, et savourez la tranquillité du fleuve.
      Chaque moment à bord d’un bateau Riverly devient un souvenir inoubliable, entre liberté, sérénité et émerveillement.`,
    },
  ];

  return (
    <section className="about-riverly" id="about-riverly">
      {/* Background Layers */}
      <div className="background-curve">
        <img src={loyaltyIcon} alt="background curve" />
      </div>
      <div className="background-cream"></div>

      {/* Left Side Text */}
      <div className="about-text">
        <h2 className="about-heading">
          Location de bateau sans permis, <span>avec Riverly.</span>
        </h2>
        <p className="about-description">
          <div>
            Découvrez la richesse culturelle des territoires au côté de ceux qui comptent.
          </div>
          Riverly, c’est bien plus qu’une croisière, c’est une expérience.
        </p>
      </div>

      {/* Right Side Card Container */}
      <div className="info-card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`info-card ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="card-header"
              onClick={() => toggleCard(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`card-content-${index}`}
            >
              <div className="icon-box">
                <img src={iconBox} alt="box" />
                <img className="icon" src={card.icon} alt="icon" />
              </div>
              <p className="card-title">{card.title}</p>
              <div
                className={
                  activeIndex === index ? "arrow-icon-up" : "arrow-icon"
                }
              ></div>
            </button>
            <div
              id={`card-content-${index}`}
              className={`card-content-wrapper ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p className="card-content">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutRiverly;
