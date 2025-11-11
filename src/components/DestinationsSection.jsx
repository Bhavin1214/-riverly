import React, { useState, useRef, useEffect } from "react";
import "../styles/DestinationsSection.css";
import franceMap from "../images/franceMap.png";
import cursorIcon from "../assets/cursor.svg";

import alsace from "../images/alsace.png";
import anjou from "../images/anjou.png";
import bourgogne from "../images/bourgogne.png";
import bretagne from "../images/bretagne.png";
import charente from "../images/charente.png";
import camargue from "../images/camargue.png";

export default function DestinationsSection() {
  const franceRegions = [
    { name: "Alsace & Ardennes", img: alsace },
    { name: "Anjou", img: anjou },
    { name: "Bourgogne & Saône", img: bourgogne },
    { name: "Bretagne", img: bretagne },
    { name: "Charente", img: charente },
    { name: "Camargue", img: camargue },
    { name: "Loire & Centre", img: alsace },
    { name: "Midi-Pyrénées", img: anjou },
    { name: "Aquitaine", img: bourgogne },
  ];

  const germanyRegions = [
    { name: "Brandebourg", img: alsace },
    { name: "Mecklembourg", img: anjou },
    { name: "Berlin", img: bourgogne },
    { name: "Hambourg", img: bretagne },
    { name: "Hanovre", img: charente },
    { name: "Saxe", img: camargue },
    { name: "Francfort", img: alsace },
    { name: "Rhénanie", img: anjou },
    { name: "Bavière", img: bourgogne },
  ];

  const [showMoreFrance, setShowMoreFrance] = useState(false);
  const [showMoreGermany, setShowMoreGermany] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showMoreFrance, showMoreGermany]);

  return (
    <section
      className="destinations-section"
      ref={sectionRef}
      style={{ cursor: `url(${cursorIcon}), auto` }}
    >
      <div className="destinations-left">
        {/* SCROLLABLE WRAPPER - this scrolls */}
        <div className="destinations-scroll">
          {/* France */}
          <div className="destination-group">
            <div className="destination-header">
              <h3>Croisière fluviale en France</h3>
              <span className="arrow">→</span>
            </div>

            <div className="regions-grid">
              {(showMoreFrance ? franceRegions : franceRegions.slice(0, 6)).map(
                (region, i) => (
                  <div className="region-card" key={i}>
                    <div
                      className="region-image"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(21,21,21,0) 0%, rgba(21,21,21,0.4) 77%), url(${region.img})`,
                      }}
                    >
                      <button className="region-btn">
                        {region.name} <span className="arrow">→</span>
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            <div
              className="show-more"
              onClick={() => setShowMoreFrance(!showMoreFrance)}
            >
              <span>{showMoreFrance ? "Afficher moins" : "Afficher plus"}</span>
              <span className="down-arrow">{showMoreFrance ? "↑" : "↓"}</span>
            </div>
          </div>

          {/* Germany */}
          <div className="destination-group">
            <div className="destination-header">
              <h3>Croisière fluviale en Allemagne</h3>
              <span className="arrow">→</span>
            </div>

            <div className="regions-grid">
              {(showMoreGermany ? germanyRegions : germanyRegions.slice(0, 6)).map(
                (region, i) => (
                  <div className="region-card" key={i}>
                    <div
                      className="region-image"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(21,21,21,0) 0%, rgba(21,21,21,0.4) 77%), url(${region.img})`,
                      }}
                    >
                      <button className="region-btn">
                        {region.name} <span className="arrow">→</span>
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            <div
              className="show-more"
              onClick={() => setShowMoreGermany(!showMoreGermany)}
            >
              <span>{showMoreGermany ? "Afficher moins" : "Afficher plus"}</span>
              <span className="down-arrow">{showMoreGermany ? "↑" : "↓"}</span>
            </div>
          </div>
        </div>

        {/* FIXED FADE - stays put while .destinations-scroll scrolls under it */}
        <div className="fade-bottom" aria-hidden="true" />
      </div>

      <div className="destinations-map">
        <img src={franceMap} alt="Carte des destinations" />
      </div>
    </section>
  );
}
