import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/Frame68Section.css";
import img1 from "../images/canal.png";
import img2 from "../images/bourgogne2.png";
import img3 from "../images/bretagne2.png";
import img4 from "../images/alsace2.png";
import cursorSvg from "../assets/cursor.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import FranceFlag from "../assets/flags/france.svg";
import AllemagneFlag from "../assets/flags/allemagne.svg";
import PaysBasFlag from "../assets/flags/paysbas.svg";
import ItalieFlag from "../assets/flags/italie.svg";
import IrlandeFlag from "../assets/flags/irlande.svg";
import PortugalFlag from "../assets/flags/portugal.svg";
import HongrieFlag from "../assets/flags/hongrie.svg";

const CARD_WIDTH = 320;
const GAP = 24;
const LEFT_PADDING = 80;
const RIGHT_PADDING = 80;

const makeSet = (name, flag) =>
  Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    img: [img1, img2, img3, img4][i % 4],
    country: name,
    title: `${name} ${i + 1}`,
    desc: "Description du lieu et expériences fluviales.",
    countryFlag: flag,
  }));

const datasets = {
  France: makeSet("France", FranceFlag),
  Allemagne: makeSet("Allemagne", AllemagneFlag),
  "Pays-Bas": makeSet("Pays-Bas", PaysBasFlag),
  Italie: makeSet("Italie", ItalieFlag),
  Irlande: makeSet("Irlande", IrlandeFlag),
  Portugal: makeSet("Portugal", PortugalFlag),
  Hongrie: makeSet("Hongrie", HongrieFlag),
};

export default function Frame68Section() {
  const [activeCountry, setActiveCountry] = useState("France");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const viewportRef = useRef(null);
  const autoSlideRef = useRef(null);
  const isUserInteracting = useRef(false);

  const items = datasets[activeCountry] || [];

  // calculate max index like OffersSection
  useEffect(() => {
    const updateDimensions = () => {
      if (!viewportRef.current) return;
      const vw = viewportRef.current.offsetWidth;

      const totalCardsWidth = items.length * CARD_WIDTH;
      const totalGapsWidth = (items.length - 1) * GAP;
      const totalContentWidth =
        totalCardsWidth + totalGapsWidth + LEFT_PADDING + RIGHT_PADDING;

      const maxTranslate = totalContentWidth - vw;
      const cardPlusGap = CARD_WIDTH + GAP;
      const calculatedMaxIndex = Math.floor(maxTranslate / cardPlusGap);

      setMaxIndex(Math.max(0, calculatedMaxIndex));
      setCurrentIndex((prev) => Math.min(prev, calculatedMaxIndex));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    const timer = setTimeout(updateDimensions, 100);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, [items]);

  // auto-slide identical to OffersSection
  useEffect(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      if (!isUserInteracting.current) {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }
    }, 3000);
    return () => clearInterval(autoSlideRef.current);
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    isUserInteracting.current = true;
    setTimeout(() => (isUserInteracting.current = false), 4000);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    isUserInteracting.current = true;
    setTimeout(() => (isUserInteracting.current = false), 4000);
  }, [maxIndex]);

  const handleMouseEnter = () => (isUserInteracting.current = true);
  const handleMouseLeave = () => (isUserInteracting.current = false);

  const cardPlusGap = CARD_WIDTH + GAP;
  const translateX = currentIndex * cardPlusGap;

  return (
    <section
      className="Frame68"
      style={{ cursor: `url(${cursorSvg}) 12 12, auto` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="Frame49">
        <div className="title-wrap">
          <h2 className="Nos-croisieres">Nos croisières fluviales</h2>
        </div>

        <div className="Frame65">
          <div className="Frame742">
            {Object.keys(datasets).map((country) => (
              <div
                key={country}
                className={`chip ${activeCountry === country ? "active" : ""}`}
                onClick={() => {
                  setActiveCountry(country);
                  setCurrentIndex(0);
                }}
              >
                {country}
              </div>
            ))}
          </div>

          <div className="Frame29">
            <button className="all-link">Toutes nos croisières fluviales</button>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="Frame752">
        <div className="Frame62">
          <button
            className="arrow2 prev"
            aria-label="Précédent"
            onClick={prev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeftLong />
          </button>

          <div className="RegionsContainer" ref={viewportRef}>
            <div
              className="regions-track"
              style={{
                transform: `translateX(-${translateX}px)`,
                paddingLeft: LEFT_PADDING,
                paddingRight: RIGHT_PADDING,
              }}
            >
              {items.map((it) => (
                <article className="Product-card" key={it.id}>
                  <div
                    className="Image"
                    style={{ backgroundImage: `url(${it.img})` }}
                  />
                  <div className="card-body">
                    <div className="country-row">
                      <img
                        src={it.countryFlag}
                        alt={it.country}
                        className="flag-img"
                      />
                      <div className="country-name">{it.country}</div>
                    </div>
                    <h3 className="product-title">{it.title}</h3>
                    <p className="product-desc">{it.desc}</p>
                    <div className="card-actions">
                      <button className="btn-devis">Découvrir la région</button>
                      <button className="btn-arrow">
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                  <div className="divider" />
                </article>
              ))}
            </div>
          </div>

          <button
            className="arrow2 next"
            aria-label="Suivant"
            onClick={next}
            disabled={currentIndex >= maxIndex}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}
