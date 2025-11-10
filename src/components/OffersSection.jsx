import React, { useState, useEffect, useRef } from "react";
import "../styles/OffersSection.css";
import image2 from "../images/image1.png";
import image1 from "../images/image2.png";
import { FaArrowLeftLong,FaArrowRight } from "react-icons/fa6";
/**
 * OffersSection
 * - responsive carousel showing multiple cards (3 / 2 / 1 by viewport)
 * - prevents horizontal scroll
 * - keyboard accessible arrows
 * - swap images / icon placeholders with your SVGs
 */
const offers = [
  {
    id: 1,
    title: "Les prix Crazy sur votre été",
    subtitle:
      "Valable sur une sélection de croisières d’une semaine en juillet, août et septembre jusqu’au lundi 26 mai à 23h59.",
    cta: "J’en profite →",
    img: image1
  },
  {
    id: 2,
    title: "Last Minute -30% sur tout mai",
    subtitle: "Embarquez pour une aventure fluviale en mai. -30% sur tous les séjours de mai",
    cta: "J’en profite →",
    img: image2
  },
  {
    id: 3,
    title: "Offre printemps",
    subtitle: "Séjours sélectionnés au printemps. Offre limitée.",
    cta: "J’en profite →",
    img: image1
  },
  {
    id: 4,
    title: "Escapade week-end",
    subtitle: "Courts séjours pour se ressourcer près des rivières.",
    cta: "J’en profite →",
    img: image2
  },
];

export default function OffersSection() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w >= 1200) setCardsPerView(3);
      else if (w >= 820) setCardsPerView(2);
      else setCardsPerView(1);
      // ensure index within bounds after resize
      setIndex((i) => Math.min(i, Math.max(0, offers.length - Math.max(1, Math.floor(w / 320)))));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    // prevent horizontal scroll from this component
    const el = containerRef.current;
    if (el) el.style.overflowX = "hidden";
  }, []);

  const maxIndex = Math.max(0, offers.length - cardsPerView);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }

  // keyboard support
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [maxIndex]);

  // carousel translate percent
  const translatePercent = (index / Math.max(1, offers.length - cardsPerView + index)) * 100;
  // simpler: compute x by item width
  const itemWidthPercent = 100 / cardsPerView;
const x = -(index * (100 / offers.length)) * cardsPerView;

  return (
    <section className="offers-section" aria-label="Offres du moment">
      <div className="offers-inner">
        <div className="offers-header">
          <h2 className="offers-title">
            Les <span className="accent">offres</span> du moment
          </h2>
          <button className="offers-cta">Toutes les offres spéciales →</button>
        </div>

        <div className="carousel-wrapper" ref={containerRef}>
          <button
            className="carousel-control left"
            aria-label="Précédent"
            onClick={prev}
            disabled={index === 0}
          >
            <FaArrowLeftLong/>
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                width: `${(offers.length * 100) / cardsPerView}%`,
                transform: `translateX(${x}%)`,
              }}
            >
              {offers.map((o) => (
                <article className="offer-card" key={o.id} role="group" aria-labelledby={`title-${o.id}`}>
                  <div
                    className="offer-image"
                    style={{ backgroundImage: `url(${o.img})` }}
                    aria-hidden="true"
                  />
                  <div className="offer-body">
                    <h3 id={`title-${o.id}`} className="offer-title">
                      {o.title}
                    </h3>
                    <p className="offer-sub">{o.subtitle}</p>
                    <button className="offer-btn">{o.cta}</button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="carousel-control right"
            aria-label="Suivant"
            onClick={next}
            disabled={index >= maxIndex}
          >
            <FaArrowRight/>
          </button>
        </div>
      </div>
    </section>
  );
}
