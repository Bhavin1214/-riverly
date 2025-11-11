import React, { useEffect, useRef, useState } from "react";
import "../styles/Frame68Section.css";
import img1 from "../images/canal.png";
import img2 from "../images/bourgogne2.png";
import img3 from "../images/bretagne2.png";
import img4 from "../images/alsace2.png";
import cursorSvg from "../assets/cursor.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// flags
import FranceFlag from "../assets/flags/france.svg";
import AllemagneFlag from "../assets/flags/allemagne.svg";
import PaysBasFlag from "../assets/flags/paysbas.svg";
import ItalieFlag from "../assets/flags/italie.svg";
import IrlandeFlag from "../assets/flags/irlande.svg";
import PortugalFlag from "../assets/flags/portugal.svg";
import HongrieFlag from "../assets/flags/hongrie.svg";

// datasets (short form reused)
const makeSet = (name, flag) => [
  { id: 1, img: img1, country: name, title: "Bordeaux & Vignobles", desc: "Une région historique et un savoir-faire unique.", countryFlag: flag },
  { id: 2, img: img2, country: name, title: "Touraine", desc: "Châteaux et nature le long de l'eau.", countryFlag: flag },
  { id: 3, img: img3, country: name, title: "Camargue", desc: "Paysages sauvages et faune.", countryFlag: flag },
  { id: 4, img: img4, country: name, title: "Alsace", desc: "Villages, vignobles et traditions.", countryFlag: flag },
  { id: 5, img: img1, country: name, title: "Bretagne", desc: "Côtes sauvages et ports.", countryFlag: flag },
  { id: 6, img: img2, country: name, title: "Normandie", desc: "Histoire et paysages fluviaux.", countryFlag: flag },
  { id: 7, img: img3, country: name, title: "Canal du Midi", desc: "Croisières paisibles au soleil.", countryFlag: flag },
  { id: 8, img: img4, country: name, title: "Bourgogne", desc: "Vignes, nature et gastronomie.", countryFlag: flag },
  { id: 9, img: img1, country: name, title: "Aquitaine", desc: "Charmes fluviaux et villages.", countryFlag: flag },
];

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
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef(null);

  const items = datasets[activeCountry] || [];
  const maxIndex = Math.max(0, items.length - perView);

  // responsive perView setup
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w >= 1200) setPerView(3);
      else if (w >= 820) setPerView(2);
      else setPerView(1);
      setIndex(0);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoplay effect
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, maxIndex, activeCountry]);

  // keyboard nav
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [maxIndex]);

  function prev() {
    setPaused(true);
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setPaused(true);
    setIndex((i) => Math.min(maxIndex, i + 1));
  }

  const cardPercent = 100 / perView;
  const trackTranslate = -(index * cardPercent);

  return (
    <section
      className="Frame68"
      style={{ cursor: `url(${cursorSvg}) 12 12, auto` }}
      aria-label="Nos croisières fluviales"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
                  setIndex(0);
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
            disabled={index === 0}
          >
            <FaArrowLeftLong />
          </button>

          <div className="RegionsContainer" ref={viewportRef}>
            <div
              className="regions-track"
              style={{
                width: `${(items.length * 100) / perView}%`,
                transform: `translateX(${trackTranslate}%)`,
              }}
            >
              {items.map((it) => (
                <article className="Product-card" key={it.id}>
                  <div
                    className="Image"
                    style={{ backgroundImage: `url(${it.img})` }}
                    role="img"
                    aria-label={it.title}
                  />
                  <div className="card-body">
                    <div className="country-row">
                      <img src={it.countryFlag} alt={it.country} className="flag-img" />
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
            disabled={index >= maxIndex}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}
