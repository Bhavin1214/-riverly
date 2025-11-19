import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import "../styles/Trustpilot.css"
import curve from "../assets/curve3.svg"
import { IoStarSharp } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import user from "../images/user1.png"
import star from "../assets/star22.svg"

const reviewCard = {
    title: "Tout est bien conçu et organisé",
    review: [
        "La péniche est maniable",
        "L'intérieur est propre et bien conçu",
        "Il ne manque rien en matière de matériel de cuisine"
    ],
    location: "Départ depuis Glénac",
    author: {
        name: "Josette",
        avatar: user
    },
    rating: 5
};

const cardCount = 8;

const cards = Array.from({ length: cardCount }, (v, index) => {
    return {
        ...reviewCard,
        id: index + 1
    }
})

const Trustpilot = () => {
    const scrollRef = useRef(null);
    const autoRef = useRef(null);

    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const scrollAmount = 265;

    const updateButtons = () => {
        const el = scrollRef.current;
        if (!el) return;

        setAtStart(el.scrollLeft <= 45);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5);
    };
    const scrollLeft = () => {
        const el = scrollRef.current;
        if (el) el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const scrollRight = () => {
        const el = scrollRef.current;
        if (el) el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    useEffect(() => {
        startAutoScroll();
        return stopAutoScroll;
    });

    const startAutoScroll = () => {
        stopAutoScroll();
        autoRef.current = setInterval(() => {
            const el = scrollRef.current;
            if (!el) return;

            const maxScroll = el.scrollWidth - el.clientWidth;

            if (el.scrollLeft + scrollAmount >= maxScroll - 30) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }, 3000);
    };

    const stopAutoScroll = () => {
        if (autoRef.current) clearInterval(autoRef.current);
    };

    return (
        <div className='t-container' >
            <div className="t-content">
                <div className="t-header">
                    <h2 className='t-Htext'>Ils ont voyagé avec nous</h2>
                    <div className="t-reviewBox">
                        <div className="t-HR">
                            4,4
                        </div>
                        <div className="t-HRT">
                            <div className="t-HRT1">
                                Excellent sur
                            </div>
                            <div className="t-HRT2">
                                <IoStarSharp color='#04d98b' /> Trustpilot
                            </div>
                        </div>
                    </div>
                </div>
                <div className="t-body" ref={scrollRef}
                    onScroll={updateButtons}
                    onMouseEnter={stopAutoScroll}
                    onMouseLeave={startAutoScroll}
                    >
                    {
                        cards.map((card) => (
                            <div className='t-card'>
                                <div className="t-top">
                                    <div className="t-Ctitle">
                                        {card.title}
                                    </div>
                                    <div className="t-Creview">
                                        {card.review.slice(0,3).map((R)=>(
                                            <p>{R}</p>
                                        ))}
                                    </div>
                                    <div className="t-Clocation">
                                        <CiLocationOn /> {card.location}
                                    </div>
                                </div>
                                <div className="t-buttom">
                                    <div className="t-Cuser">
                                        <img className='t-Cavatar' src={card.author.avatar}  alt="avatar" />
                                        <p className='t-Cname'>{card.author.name}</p>
                                    </div>
                                    <div className="t-CBreview">
                                        <p>{card.rating}/5 </p>
                                        <img src={star} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="t-navigation">
                    <button
                        className="t-left-box"
                    onClick={scrollLeft}
                    disabled={atStart}
                    >
                        <FaArrowLeftLong className='t-left' />
                    </button>

                    <button
                        className="t-right-box"
                    onClick={scrollRight}
                    disabled={atEnd}
                    >
                        <FaArrowRightLong className='t-right' />
                    </button>
                </div>
            </div>
            <div className="t-curve">
                <img src={curve} alt="curve" className="t-curve-svg" />
            </div>
        </div>
    )
}

export default Trustpilot
