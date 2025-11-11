import React, { useEffect, useRef, useState } from "react";
import "../styles/Frame68Section.css";
import img1 from "../images/canal.png";
import img2 from "../images/bourgogne2.png";
import img3 from "../images/bretagne2.png";
import img4 from "../images/alsace2.png"
import cursorSvg from "../assets/cursor.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const items = [
  { id: 1, img: img1, country: "France", title: "Bordeaux & Vignobles", desc: "Une région historique et un savoir-faire unique." },
  { id: 2, img: img2, country: "France", title: "Touraine", desc: "Châteaux et nature le long de l'eau." },
  { id: 3, img: img4, country: "France", title: "Camargue", desc: "Paysages sauvages et faune." },
  { id: 4, img: img3, country: "France", title: "Alsace", desc: "Villages, vignobles et traditions." },
  { id: 5, img: img1, country: "France", title: "Bretagne", desc: "Côtes sauvages et ports." },
  { id: 6, img: img2, country: "France", title: "Normandie", desc: "Histoire et paysages fluviaux." },
];

export default function Frame68Section() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const viewportRef = useRef(null);

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w >= 1200) setPerView(3);
      else if (w >= 820) setPerView(2);
      else setPerView(1);
      // clamp index
      setIndex((i) => Math.min(i, Math.max(0, items.length - Math.max(1, Math.floor(w / 320)))));
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [perView, index]);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(items.length - perView, i + 1));
  }

  // width of each card in percent relative to viewport track container
  const cardPercent = 100 / perView;
  const trackTranslate = -(index * cardPercent);

  return (
    <section
      className="Frame68"
      style={{ cursor: `url(${cursorSvg}) 12 12, auto` }}
      aria-label="Nos croisières fluviales"
    >
      <div className="Frame49">
        <div className="title-wrap">
          <h2 className="Nos-croisieres">Nos croisières fluviales</h2>
        </div>

        <div className="Frame65">
          <div className="Frame742">
            <div className="chip active">France</div>
            <div className="chip">Allemagne</div>
            <div className="chip">Pays-Bas</div>
            <div className="chip">Italie</div>
            <div className="chip">Irlande</div>
            <div className="chip">Portugal</div>
            <div className="chip">Hongrie</div>
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
                      <div className="flag" />
                      <div className="country-name">{it.country}</div>
                    </div>
                    <h3 className="product-title">{it.title}</h3>
                    <p className="product-desc">{it.desc}</p>
                    <div className="card-actions">
                      <button className="btn-devis">Découvrir la région</button>
                      <button className="btn-arrow">
                        <FaArrowRight/>
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
            disabled={index >= items.length - perView}
          >
            <FaArrowRightLong />

          </button>
        </div>
      </div>
    </section>
  );
}
