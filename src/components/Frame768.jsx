import React, { useState } from 'react'
import "../styles/Frame768.css"

import boat1 from "../assets/boat1.svg";
import boat2 from "../assets/boat2.svg";
import { BsArrowRight } from 'react-icons/bs';

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

const cardCount = 3;
const cardData = {
    title: "Pénichette Classic 4 pers.",
    cabins: 2,
    bathrooms: 1,
    hasAc: false,
    priceFrom: "À partir de 690€",
}
const cards = []

const Frame768 = () => {
    const [activeCategory, setActiveCategory] = useState("Classic")
    const [activeBoatType, setActiveBoatType] = useState("Penichette");

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
                            CATEGORY_OPTIONS.map((cat)=>(
                                <button
                                    key={cat.key}
                                    type='button'
                                    className={["BS-FO-chip", activeCategory === cat.key ? "BS-FO-chipActive" : "" ].join(" ")}
                                    onClick={()=>setActiveCategory(cat.key)}
                                >
                                    {cat.label}
                                </button>
                            ))                            
                        }
                    </div>
                    <div className="BS-boatType">
                        {/* types */}
                        {
                            BOAT_TYPE_OPTIONS.map((type)=>(
                                <button
                                    key={type.key}
                                    type="button"
                                    className={[
                                        "BS-boatType-chip",
                                        activeBoatType === type.key ? "BS-boatType-chipActive" : ""
                                    ].join(" ")}
                                    onClick={()=>setActiveBoatType(type.key)}
                                >
                                    <span className='BS-boatType-chip-icon' style={{ backgroundImage:`${type.icon}`}}></span>
                                    <span> {type.label} </span>
                                </button>
                            ))
                        }
                    </div>
                    <div className="BS-text">
                        <p><span>Tous nos bateaux </span> <BsArrowRight/> </p>
                        <span className='BS-underline'></span>
                    </div>
                </div>
                <div className="BS-cards">
                    {

                    }
                </div>
            </div>
        </div>
    )
}

export default Frame768
