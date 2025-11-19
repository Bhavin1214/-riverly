import React, { useRef, useEffect, useState } from 'react'
import "../styles/Frame757.css"
import { FaArrowRight, FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6'
import FranceFlag from "../assets/flags/france.svg"
import cardImage from "../images/cardimage.png"
import { CiLocationOn } from "react-icons/ci";
import { FaFlagCheckered } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

const cards = [
  {
    id: 1,
    image: cardImage,
    country: "France / Alsace",
    countryImage: FranceFlag,
    title: "Croisière sur le canal de la Marne au Rhône",
    states: {
      location: "Saverne",
      sport: "Saverne",
      calender: "Aller - retour",
      calenderClock: "1 semaine"
    }
  },
  {
    id: 2,
    image: cardImage,
    country: "France / Alsace",
    countryImage: FranceFlag,
    title: "Croisière sur le canal de la Marne au Rhône",
    states: {
      location: "Saverne",
      sport: "Saverne",
      calender: "Aller - retour",
      calenderClock: "1 semaine"
    }
  },
  {
    id: 3,
    image: cardImage,
    country: "France / Alsace",
    countryImage: FranceFlag,
    title: "Croisière sur le canal de la Marne au Rhône",
    states: {
      location: "Saverne",
      sport: "Saverne",
      calender: "Aller - retour",
      calenderClock: "1 semaine"
    }
  },
  {
    id: 4,
    image: cardImage,
    country: "France / Alsace",
    countryImage: FranceFlag,
    title: "Croisière sur le canal de la Marne au Rhône",
    states: {
      location: "Saverne",
      sport: "Saverne",
      calender: "Aller - retour",
      calenderClock: "1 semaine"
    }
  },
  {
    id: 5,
    image: cardImage,
    country: "France / Alsace",
    countryImage: FranceFlag,
    title: "Croisière sur le canal de la Marne au Rhône",
    states: {
      location: "Saverne",
      sport: "Saverne",
      calender: "Aller - retour",
      calenderClock: "1 semaine"
    }
  },
  {
    id: 6,
    image: cardImage,
    country: "France / Alsace",
    countryImage: FranceFlag,
    title: "Croisière sur le canal de la Marne au Rhône",
    states: {
      location: "Saverne",
      sport: "Saverne",
      calender: "Aller - retour",
      calenderClock: "1 semaine"
    }
  },
  {
    id: 7,
    image: cardImage,
    country: "France / Alsace",
    countryImage: FranceFlag,
    title: "Croisière sur le canal de la Marne au Rhône",
    states: {
      location: "Saverne",
      sport: "Saverne",
      calender: "Aller - retour",
      calenderClock: "1 semaine"
    }
  },
  {
    id: 8,
    image: cardImage,
    country: "France / Alsace",
    countryImage: FranceFlag,
    title: "Croisière sur le canal de la Marne au Rhône",
    states: {
      location: "Saverne",
      sport: "Saverne",
      calender: "Aller - retour",
      calenderClock: "1 semaine"
    }
  }
]

const Frame757 = () => {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scrollAmount = 372;

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    setAtStart(el.scrollLeft <= 5);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5);
  };

  const scrollRight = () => {
    const el = scrollRef.current;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollLeft = () => {
    const el = scrollRef.current;
    el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  // Auto-scroll loop
  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        // RESTART
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // NORMAL SCROLL
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  return (
    <div className='frame757'>
      <div className='f7-frame556'>
        <h1 className='f7-header'>
          <span>Coups de coeur</span> du moment
        </h1>

        <div className='f7-buttonPrimary'>
          <p className='f7-buttonText'>Demander un devis gratuit</p>
          <FaArrowRight />
        </div>
      </div>

      <div className='f7-frame62'>
        <div
          className="f7-card-container"
          ref={scrollRef}
          onScroll={updateButtons}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {cards.map((card) => (
            <div key={card.id} className='f7-card'>
              <div className="f7-image">
                <img className='f7-cardImage' src={card.image} alt="" />
              </div>

              <div className="f7-cardBody">
                <div className='f7-cardDatail'>
                  <div className="f7-profuctSummary">
                    <div className='f7-countrybox'>
                      <img className='f7-flagImage' src={card.countryImage} alt="" />
                      <p className='f7-countryNameText'>{card.country}</p>
                    </div>

                    <p className='f7-cardTitle'>{card.title}</p>
                  </div>

                  <div className="f7-productStates">
                    <div className="f7-state"><CiLocationOn />Départ : {card.states.location}</div>
                    <div className="f7-state"><FaFlagCheckered />Arrivée : {card.states.sport}</div>
                    <div className="f7-state"><FaRegCalendarAlt />{card.states.calender}</div>
                    <div className="f7-state"><CiCalendarDate />{card.states.calenderClock}</div>
                  </div>
                </div>

                <div className='fy-divider'></div>

                <div className="f7-cardButtons">
                  <p className="f7-Button1">À partir de 670€</p>
                  <div className="f7-button2">
                    <p className='f7-button2Text'>Découvrir l’itinéraire</p>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="f7-scroll">
          <button
            className="f7-left-box"
            onClick={scrollLeft}
            disabled={atStart}
          >
            <FaArrowLeftLong className='f7-left' />
          </button>

          <button
            className="f7-right-box"
            onClick={scrollRight}
            disabled={atEnd}
          >
            <FaArrowRightLong className='f7-right' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Frame757;
