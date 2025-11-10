import React from "react";
import "../styles/SearchEngine.css";
import { PiLighthouseLight , PiBoat } from "react-icons/pi";

const SearchEngine = () => {
  return (
    <div className="search-engine-wrapper">

      {/* Tabs */}
      <div className="search-tabs">
        <div className="search-tab active">
          <PiLighthouseLight size={17}/> Recherche par Itinéraire
        </div>
        <div className="search-tab">
          <PiBoat size={17}/> Recherche par Bateau
        </div>
      </div>

      {/* White Search Box */}
      <div className="search-box">

        <div className="search-field">
          <label>Destination</label>
          <select>
            <option>Bourgogne et environs</option>
          </select>
        </div>

        <div className="search-field">
          <label>Date de départ</label>
          <select>
            <option>19 juin 2025</option>
          </select>
        </div>

        <div className="search-field">
          <label>Durée du séjour</label>
          <select>
            <option>Une semaine</option>
          </select>
        </div>

        <div className="search-field">
          <label>Équipage</label>
          <select>
            <option>2 adultes</option>
          </select>
        </div>

        <button className="search-submit">
          Lancer ma recherche <span className="arrow">→</span>
        </button>

      </div>
    </div>
  );
};

export default SearchEngine;
