import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/OffersSection.css";
import image2 from "../images/image1.png";
import image1 from "../images/image2.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

/**
 * OffersSection
 * - Auto-sliding carousel
 * - Stops when last card's right edge is 80px from viewport right edge
 */
const offers = [
  {
    id: 1,
    title: "Les prix Crazy sur votre été",
    subtitle: "Valable sur une sélection de croisières d'une semaine en juillet, août et septembre jusqu'au lundi 26 mai à 23h59.",
    cta: "J'en profite →",
    img: image1
  },
  { id: 2, title: "Last Minute -30% sur tout mai", subtitle: "Embarquez pour une aventure fluviale en mai. -30% sur tous les séjours de mai", cta: "J'en profite →", img: image2 },
  { id: 3, title: "Offre printemps", subtitle: "Séjours sélectionnés au printemps. Offre limitée.", cta: "J'en profite →", img: image1 },
  { id: 4, title: "Escapade week-end", subtitle: "Courts séjours pour se ressourcer près des rivières.", cta: "J'en profite →", img: image2 },
  {
    id: 5,
    title: "Croisières d'automne",
    subtitle: "Explorez les couleurs de l'automne avec des séjours fluviaux apaisants.",
    cta: "J'en profite →",
    img: image1
  },
  {
    id: 6,
    title: "Évasion romantique",
    subtitle: "Week-end romantique à bord, idéal pour deux.",
    cta: "J'en profite →",
    img: image2
  },
  {
    id: 7,
    title: "Voyage gourmand",
    subtitle: "Découvrez les saveurs locales tout en naviguant.",
    cta: "J'en profite →",
    img: image1
  },
  {
    id: 8,
    title: "Semaine bien-être",
    subtitle: "Yoga, spa, nature. 7 jours de détente totale.",
    cta: "J'en profite →",
    img: image2
  },
  {
    id: 9,
    title: "Aventure en famille",
    subtitle: "Des activités adaptées à tous les âges à bord.",
    cta: "J'en profite →",
    img: image1
  },
  {
    id: 10,
    title: "Découverte des vignobles",
    subtitle: "Croisière au cœur des régions viticoles.",
    cta: "J'en profite →",
    img: image2
  },
  {
    id: 11,
    title: "Croisières culturelles",
    subtitle: "Visites guidées des sites historiques à chaque escale.",
    cta: "J'en profite →",
    img: image1
  },
  {
    id: 12,
    title: "Nouvel An sur l'eau",
    subtitle: "Célébrez la nouvelle année dans une ambiance unique.",
    cta: "J'en profite →",
    img: image2
  },
  {
    id: 13,
    title: "Séjour nature",
    subtitle: "Voyage au cœur des paysages naturels préservés.",
    cta: "J'en profite →",
    img: image1
  },
  {
    id: 14,
    title: "Croisière premium",
    subtitle: "Expérience luxe avec services exclusifs à bord.",
    cta: "J'en profite →",
    img: image2
  }
];

const CARD_WIDTH = 550;
const GAP = 24;
const LEFT_PADDING = 78;
const RIGHT_PADDING = 80;

export default function OffersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef(null);
  const autoSlideRef = useRef(null);
  const isUserInteracting = useRef(false);

  // Calculate how many cards can fit and max index
  useEffect(() => {
    const updateDimensions = () => {
      if (viewportRef.current) {
        const vw = viewportRef.current.offsetWidth;
        setViewportWidth(vw);
        
        // Calculate total content width: cards + gaps + padding
        const totalCardsWidth = offers.length * CARD_WIDTH;
        const totalGapsWidth = (offers.length - 1) * GAP;
        const totalContentWidth = totalCardsWidth + totalGapsWidth + LEFT_PADDING + RIGHT_PADDING;
        
        // Calculate maximum translateX value
        // When last card's right edge is at viewport right edge - RIGHT_PADDING
        const maxTranslate = totalContentWidth - vw;
        
        // Calculate max index based on card + gap width
        const cardPlusGap = CARD_WIDTH + GAP;
        const calculatedMaxIndex = Math.floor(maxTranslate / cardPlusGap);
        
        setMaxIndex(Math.max(0, calculatedMaxIndex));
        
        // Reset to 0 if current index exceeds new max
        setCurrentIndex(prev => Math.min(prev, calculatedMaxIndex));
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Small delay to ensure proper measurement after fonts load
    const timer = setTimeout(updateDimensions, 100);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
      
      autoSlideRef.current = setInterval(() => {
        if (!isUserInteracting.current) {
          setCurrentIndex(prev => {
            // If at the end, loop back to start
            if (prev >= maxIndex) {
              return 0;
            }
            return prev + 1;
          });
        }
      }, 3000);
    };

    if (maxIndex > 0) {
      startAutoSlide();
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
    isUserInteracting.current = true;
    setTimeout(() => {
      isUserInteracting.current = false;
    }, 5000);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    isUserInteracting.current = true;
    setTimeout(() => {
      isUserInteracting.current = false;
    }, 5000);
  }, [maxIndex]);

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    isUserInteracting.current = true;
  };

  const handleMouseLeave = () => {
    isUserInteracting.current = false;
  };

  // Calculate transform value
  const cardPlusGap = CARD_WIDTH + GAP;
  const translateX = currentIndex * cardPlusGap;

  return (
    <section className="offers-section" aria-label="Offres du moment">
      <div className="offers-inner">
        <div className="offers-header">
          <h2 className="offers-title">
            Les <span className="accent">offres</span> du moment
          </h2>
          <button className="offers-cta">Toutes les offres spéciales →</button>
        </div>

        <div 
          className="carousel-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="carousel-control left"
            aria-label="Précédent"
            onClick={prev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeftLong />
          </button>

          <div className="carousel-viewport" ref={viewportRef}>
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${translateX}px)`,
              }}
            >
              {offers.map((o) => (
                <article className="offer-card" key={o.id} role="group" aria-labelledby={`title-${o.id}`}>
                  <div
                    className="offer-image"
                    style={{ backgroundImage: `url(${o.img})` }}
                    aria-hidden="true"
                  />
                  <div className="offer-body">
                    <h3 id={`title-${o.id}`} className="offer-title">
                      {o.title}
                    </h3>
                    <p className="offer-sub">{o.subtitle}</p>
                    <button className="offer-btn">{o.cta}</button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="carousel-control right"
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