import React, { useState } from "react";
import "../styles/Header.css";

import heartIcon from "../assets/Vector.svg";
import arrowIcon from "../assets/Icon.svg";
import logo from "../assets/logo.png";
import loyaltyIcon from "../assets/loyalty.svg";
import phoneIcon from "../assets/phone.svg";
import downIcon from "../assets/down.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

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

      {/* === NAVIGATION === */}
      <nav className="header-nav" aria-label="Main navigation">
        <div className="frame-22">
          {/* Logo */}
          <div className="group-815">
            <div
              className="logo-riverly"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
          </div>

          {/* Desktop Links */}
          <div className="frame-13 desktop-menu">
            {[
              "Destinations",
              "Idées séjours",
              "Nos bateaux",
              "L’expérience Riverly",
              "Bons plans",
            ].map((item, index) => (
              <div
                key={index}
                className={`nav-item ${activeLink === item ? "active" : ""}`}
                onClick={() => handleLinkClick(item)}
              >
                {item === "Bons plans" ? (
                  <div className="frame-12">
                    <span className="bons-plans">{item}</span>
                    <div className="loyalty">
                      <img src={loyaltyIcon} alt="loyalty" />
                    </div>
                  </div>
                ) : (
                  <span>{item}</span>
                )}
              </div>
            ))}
          </div>

          {/* Right Controls */}
          <div className="frame-16 desktop-controls">
            <div className="frame-15">
              <div className="buttonPrimary1">
                <span className="devis">Devis</span>
              </div>
              <div className="buttonPrimary2">
                <span className="devis2">Réservation rapide</span>
              </div>
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

          {/* Hamburger Button */}
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(true)}
          >
           <GiHamburgerMenu/>
          </button>
        </div>

        {/* Mobile Off-Canvas Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button
            className="close-menu"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            < MdOutlineClose/>
          </button>

          <div className="mobile-links">
            {[
              "Destinations",
              "Idées séjours",
              "Nos bateaux",
              "L’expérience Riverly",
              "Bons plans",
            ].map((item, index) => (
              <div
                key={index}
                className={`mobile-link ${activeLink === item ? "active" : ""}`}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </div>
            ))}

            <div className="mobile-buttons">
              <div className="buttonPrimary1">
                <span className="devis">Devis</span>
              </div>
              <div className="buttonPrimary2">
                <span className="devis2">Réservation rapide</span>
              </div>
              <div className="mobile-phone">
                <img src={phoneIcon} alt="phone" />
                <span>+33 35 77 77 77</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
      </nav>
    </header>
  );
};

export default Header;
