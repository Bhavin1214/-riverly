import React from 'react'
import "../styles/Frame9.css"

import curve from "../assets/farme9/curve2.svg"
import { FaArrowRight } from "react-icons/fa";

import iconBox from "../assets/farme9/orange.svg"

import image1 from "../images/frame9/first.png"
import image2 from "../images/frame9/second.jpg"
import image3 from "../images/frame9/third.jpg"
import image4 from "../images/frame9/forth.jpg"

import icon1 from "../assets/farme9/glass.svg"
import icon2 from "../assets/farme9/secondIcon.svg"
import icon3 from "../assets/farme9/thirdIcon.svg"
import icon4 from "../assets/farme9/camara.svg"



const cards = [
    {
        id: 1,
        Title: "Oenologie & Gastronomie",
        Description: "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
        image: image1,
        icon: icon1
    }, {
        id: 2,
        Title: "Baignade",
        Description: "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
        image: image2,
        icon: icon2
    }, {
        id: 3,
        Title: "100% Nature",
        Description: "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
        image: image3,
        icon: icon3
    }, {
        id: 4,
        Title: "Patrimoine",
        Description: "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
        image: image4,
        icon: icon4
    }
]

const Frame9 = () => {
    return (
        <div className='frame9'>
            <div className='f9-curve-container'>
                <img src={curve} alt="" className="f9-bg-curve" />
            </div>
            <div className='f9-data-container'>
                <div className='f9-header-container'>
                    <h1 className="f9-header">
                        Idées de séjour en France
                    </h1>
                </div>
                <div className='f9-card-container'>
                    {
                        cards.map((card) => (
                            <article className='f9-card'>
                                <div className='f9-card-image-container'>
                                    <img src={card.image} alt="image1" className='f9-card-image' />
                                </div>
                                <div className='f9-card-data'>
                                    <div className="f9-HI-C">
                                        <div className='f9-icon-container'>
                                            <img src={iconBox} alt="box" className="f9-iconbox" />
                                            <img src={card.icon} alt="icon" className="f9-icon" />
                                        </div>
                                        <div className='f9-card-header-container'>
                                            <p className='f9-card-header'>{card.Title}</p>
                                        </div>
                                    </div>
                                    <div className='f9-card-body-container'>
                                        <p className="f9-card-body">{card.Description}</p>
                                    </div>
                                    <div className='f9-divider'></div>
                                    <div className='f9-card-button-container'>
                                        <p className='f9-button'> Découvrir  <FaArrowRight /></p>
                                    </div>
                                </div>

                            </article>
                        ))
                    }
                </div>
                <div className='f9-footer-container'>                    
                    <p className="f9-footer">Toutes nos thématiques <FaArrowRight  className='f9-arrow2'/></p>
                </div>
            </div>
        </div>
    )
}

export default Frame9
