import React, { useState, useEffect } from "react";
import "../styles/SearchEngine.css";
import { PiLighthouseLight, PiBoat } from "react-icons/pi";

const SearchEngine = () => {
  const [activeTab, setActiveTab] = useState("itineraire");
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    duree: "",
    equipage: "",
  });
  const [confirmation, setConfirmation] = useState(false);

  const itineraryOptions = {
    destination: ["Bourgogne et environs", "Camargue", "Alsace"],
    date: ["19 juin 2025", "26 juin 2025", "3 juillet 2025"],
    duree: ["Une semaine", "Deux semaines", "Week-end"],
    equipage: ["2 adultes", "4 adultes", "Famille"],
  };

  const boatOptions = {
    destination: ["Vedette Horizon", "Classique 935", "Vision 3"],
    date: ["Disponible", "Indisponible"],
    duree: ["1 jour", "3 jours", "1 semaine"],
    equipage: ["2 pers.", "4 pers.", "6 pers."],
  };

  const currentOptions =
    activeTab === "itineraire" ? itineraryOptions : boatOptions;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(true);
    setTimeout(() => setConfirmation(false), 3000);
  };

  return (
    <div className="search-engine-wrapper">
      {/* Tabs */}
      <div className="search-tabs">
        <div
          className={`search-tab ${
            activeTab === "itineraire" ? "active" : ""
          }`}
          onClick={() => setActiveTab("itineraire")}
        >
          <PiLighthouseLight size={17} /> Recherche par Itinéraire
        </div>
        <div
          className={`search-tab ${activeTab === "bateau" ? "active" : ""}`}
          onClick={() => setActiveTab("bateau")}
        >
          <PiBoat size={17} /> Recherche par Bateau
        </div>
      </div>

      {/* Search Form */}
      <form className="search-box" onSubmit={handleSubmit}>
        {Object.entries(currentOptions).map(([key, options]) => (
          <div className="search-field" key={key}>
            <label htmlFor={key}>
              {key === "destination"
                ? "Destination"
                : key === "date"
                ? "Date de départ"
                : key === "duree"
                ? "Durée du séjour"
                : "Équipage"}
            </label>
            <select
              id={key}
              value={formData[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              required
            >
              <option value="">Sélectionner</option>
              {options.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button type="submit" className="search-submit">
          Lancer ma recherche <span className="arrow">→</span>
        </button>
      </form>

      {/* Confirmation Message */}
      {confirmation && (
        <div className="confirmation-message">
          Recherche simulée avec succès ✅ (données fictives)
        </div>
      )}
    </div>
  );
};

export default SearchEngine;