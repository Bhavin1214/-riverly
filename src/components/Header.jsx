import React from "react";
import "../styles/Header.css";

import heartIcon from "../assets/Vector.svg";
import arrowIcon from "../assets/Icon.svg";
import logo from "../assets/logo.png";
import loyaltyIcon from "../assets/loyalty.svg";
import phoneIcon from "../assets/phone.svg";
import downIcon from "../assets/down.svg";

const Header = () => {
  return (
    <header>

      {/* === TOP BAR === */}
      <div className="header-top-bar">
        <div className="header-top-bar-content">
          <div className="circle-heart">
            <img src={heartIcon} alt="heart" />
          </div>

          <span className="text-coup">Coup de coeur</span>
          <span className="text-route">La route des Vins de Bourgogne</span>

          <div className="arrow-narrow-right">
            <img src={arrowIcon} alt="arrow" />
          </div>
        </div>
      </div>

      {/* === NAV OVER IMAGE === */}
      <div className="header-nav">
        <div className="frame-22">

          {/* Logo */}
          <div className="group-815">
            <div className="logo-riverly" style={{ backgroundImage: `url(${logo})` }}></div>
          </div>

          {/* Nav Links */}
          <div className="frame-13">
            <div className="frame-8"><span className="destinations">Destinations</span></div>
            <div className="frame-9"><span className="idees-sejours">Idées séjours</span></div>
            <div className="frame-11"><span className="nos-bateaux">Nos bateaux</span></div>
            <div className="frame-10"><span className="experience-riverly">L’expérience Riverly</span></div>

            <div className="frame-12">
              <span className="bons-plans">Bons plans</span>
              <div className="loyalty">
                <img src={loyaltyIcon} alt="loyalty" />
              </div>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="frame-16">

            <div className="frame-15">
              <div className="buttonPrimary1"><span className="devis">Devis</span></div>
              <div className="buttonPrimary2"><span className="devis2">Réservation rapide</span></div>
            </div>

            <div className="frame-1">
              <div className="buttonPrimary">
                <div className="phone-in-talk">
                  <img src={phoneIcon} alt="phone" className="vector" />
                </div>
                <span className="devis">+33 35 77 77 77</span>
              </div>
            </div>

            <div className="buttonSecondary">
              <span className="devis">FR — €</span>
              <div className="keyboard-arrow-down">
                <img src={downIcon} alt="down" className="vector" />
              </div>
            </div>

          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
