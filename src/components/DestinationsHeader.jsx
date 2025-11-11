import React, { useState } from "react";
import "../styles/DestinationsHeader.css";

export default function DestinationsHeader() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Dummy navigation behavior
    setTimeout(() => setClicked(false), 1200);
  };

  return (
    <section className="destinations-header">
      <h2 className="destinations-title">
        Nos destinations{" "}
        <span className="highlight">de location de bateau</span>
      </h2>

      <div
        className={`destinations-cta ${clicked ? "clicked" : ""}`}
        onClick={handleClick}
      >
        <span className="cta-text">Toutes nos destinations</span>
        <span className="cta-arrow">→</span>
      </div>
    </section>
  );
}
