import React, { useEffect, useRef, useState } from 'react'
import "../styles/Frame768.css"

import boat1 from "../assets/boat1.svg";
import boat2 from "../assets/boat2.svg";
import { BsArrowRight } from 'react-icons/bs';

import image1 from "../images/boat1.png"
import image2 from "../images/boat2.png"
import image3 from "../images/boat3.png"
import { LuBedDouble, LuDroplets, LuSnowflake } from 'react-icons/lu';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const images = [image1, image2, image3]
const CATEGORY_OPTIONS = [
    { key: "Classic", label: "Classic" },
    { key: "Comfort", label: "Comfort" },
    { key: "Premium", label: "Premium" },
    { key: "PremiumPlus", label: "Premium +" },
];

const BOAT_TYPE_OPTIONS = [
    { key: "Penichette", label: "Pénichettes", icon: boat1 },
    { key: "Cruiser", label: "Cruisers", icon: boat2 },
];

const cardCount = 6;
const cardData = {
    title: "Pénichette Comfort 4/6 pers.",
    cabins: 2,
    bathrooms: 1,
    hasAc: true,
    priceFrom: "À partir de 690€",
}
const cards = Array.from({ length: cardCount }, (v, index) => {
    return {
        ...cardData,
        id: index + 1,
        image: images[index % images.length]
    }
})

const Frame768 = () => {
    const [activeCategory, setActiveCategory] = useState("Classic")
    const [activeBoatType, setActiveBoatType] = useState("Penichette");

    const sliderRef = useRef(null);

    // AUTO SCROLL ----------------------------------------------------
    useEffect(() => {
        const container = sliderRef.current;
        if (!container) return;

        const scrollOne = () => {
            const cardWidth = container.firstChild?.offsetWidth || 300;
            const gap = 20;
            const amount = cardWidth + gap;

            const maxScroll = container.scrollWidth - container.clientWidth;

            // next position
            const next = container.scrollLeft + amount;

            // ✔ STOP EXACTLY WITH 80px RIGHT spacing
            if (next >= maxScroll - 2) {
                container.scrollTo({
                    left: maxScroll,
                    behavior: "smooth",
                });

                // wait a bit → reset to start for infinite loop
                setTimeout(() => {
                    container.scrollTo({ left: 0, behavior: "auto" });
                }, 900);

                return;
            }

            // normal scroll
            container.scrollTo({
                left: next,
                behavior: "smooth",
            });
        };

        const interval = setInterval(scrollOne, 3000);
        return () => clearInterval(interval);
    }, []);


    // MANUAL BUTTON SCROLL -------------------------------------------
    const handleScroll = (dir) => {
        const container = sliderRef.current;
        if (!container) return;

        const cardWidth = container.firstChild?.offsetWidth || 300;
        const gap = 20;
        const amount = cardWidth + gap;

        const maxScroll = container.scrollWidth - container.clientWidth;

        if (dir === "right") {
            const next = container.scrollLeft + amount;

            if (next >= maxScroll - 2) {
                container.scrollTo({ left: maxScroll, behavior: "smooth" });

                setTimeout(() => {
                    container.scrollTo({ left: 0, behavior: "auto" });
                }, 900);

                return;
            }

            container.scrollTo({
                left: next,
                behavior: "smooth",
            });
        }

        if (dir === "left") {
            const prev = container.scrollLeft - amount;

            if (prev <= 0) {
                container.scrollTo({ left: 0, behavior: "smooth" });
                return;
            }

            container.scrollTo({ left: prev, behavior: "smooth" });
        }
    };

    return (
        <div className='frame768'>
            <div className='BS-header'>
                <p>Découvrez nos bateaux sans permis</p>
            </div>
            <div className='BS-body'>
                <div className="BS-filters">
                    <div className="BS-filters-option">
                        {/* filters */}
                        {
                            CATEGORY_OPTIONS.map((cat) => (
                                <button
                                    key={cat.key}
                                    type='button'
                                    className={["BS-FO-chip", activeCategory === cat.key ? "BS-FO-chipActive" : ""].join(" ")}
                                    onClick={() => setActiveCategory(cat.key)}
                                >
                                    {cat.label}
                                </button>
                            ))
                        }
                    </div>
                    <div className="BS-boatType">
                        {/* types */}
                        {
                            BOAT_TYPE_OPTIONS.map((type) => (
                                <button
                                    key={type.key}
                                    type="button"
                                    className={[
                                        "BS-boatType-chip",
                                        activeBoatType === type.key ? "BS-boatType-chipActive" : ""
                                    ].join(" ")}
                                    onClick={() => setActiveBoatType(type.key)}
                                >
                                    <img className='BS-boatType-chip-icon' src={type.icon} ></img>
                                    <span> {type.label} </span>
                                </button>
                            ))
                        }
                    </div>
                    <div className="BS-text">
                        <p><span>Tous nos bateaux </span> <BsArrowRight /> </p>
                        <span className='BS-underline'></span>
                    </div>
                </div>
                <div className="BS-cards" ref={sliderRef}>
                    {
                        cards.map((card) => (
                            <div className="BS-card">
                                {/* Image section */}
                                <div className="boat-card__image-wrapper">
                                    <img src={card.image} alt={card.title} className="boat-card__image" />

                                    <div className="boat-card__badge">
                                        <span>{CATEGORY_OPTIONS.map((cat) => {
                                            if (cat.key === activeCategory) {
                                                return <>{cat.label}</>
                                            }
                                        })}</span>
                                    </div>
                                </div>
                                <div className="boat-card__body">
                                    <div className='boat-card__Ubody'>
                                        <h3 className="boat-card__title">{card.title}</h3>

                                        <div className="boat-card__stats">
                                            <div className="boat-card__stat">
                                                <LuBedDouble />
                                                <span>{card.cabins} cabines</span>
                                            </div>

                                            <div className="boat-card__stat">
                                                <LuDroplets />
                                                <span>{card.bathrooms} salles d’eau</span>
                                            </div>

                                            <div className="boat-card__stat">
                                                <LuSnowflake />
                                                <span>{card.hasAc ? "Climatisation" : "Ventilation"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boat-card__divider" />
                                    <div className='boat-card__Dbody'>
                                        <p className="boat-card__price">{card.priceFrom}</p>

                                        <button className="boat-card__cta">
                                            Découvrir le bateau →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='BS-navigation'>
                <div className='bS-left' onClick={() => handleScroll("left")}>
                    <FaArrowLeftLong />
                </div>
                <div className='BS-right' onClick={() => handleScroll("right")}>
                    <FaArrowRightLong />
                </div>
            </div>
        </div>
    )
}

export default Frame768