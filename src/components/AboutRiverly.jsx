import React from "react";
import "../styles/AboutRiverly.css";
import loyaltyIcon from "../assets/curve.svg";
import iconBox from "../assets/iconBox.svg";
import firstIcon from "../assets/firstIcon.svg";
import secondIcon from "../assets/secondIcon.svg";
import thirdIcon from "../assets/thirdIcon.svg";

const AboutRiverly = () => {
    return (
        <section className="about-riverly">
            {/* Background Layers */}
            <div className="background-curve">
                <img src={loyaltyIcon} alt="loyalty" />
            </div>
            <div className="background-cream"></div>
            {/* Left Side Text */}
            <div className="about-text">
                <h2 className="about-heading">
                    Location de bateau sans permis, <span>avec Riverly.</span>
                </h2>
                <p className="about-description">
                    <div>
                        Découvrez la richesse culturelle des territoires au côté de ceux qui
                        comptent.
                    </div>
                    Riverly, c’est bien plus qu’une croisière, c’est une
                    expérience.
                </p>
            </div>

            {/* Right Side Card Container */}
            <div className="info-card-container">
                {/* Card 1 */}
                <div className="info-card active">
                    <div className="card-header">
                        <div className="icon-box">
                            <img src={iconBox} alt="iconBox" />
                            <img className="icon" src={firstIcon} alt="icon" />
                        </div>
                        <p className="card-title">
                            Vivez l’expérience authentique du tourisme fluvial
                        </p>
                        <div className="arrow-icon-up"></div>
                    </div>
                    <p className="card-content">
                        Voyager avec Riverly c’est partager une expérience touristique
                        authentique. Les maîtres mots sont la proximité, la découverte et
                        l’autonomie. En louant votre bateau, vous devenez le capitaine de
                        votre croisière fluviale ! Choisissez la convivialité du voyage en
                        famille, entre amis ou en couple et découvrez des paysages
                        authentiques ! Vous découvrirez également les différents terroirs
                        par la nature, le patrimoine, les vignobles, ou encore par la
                        population locale.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="info-card">
                    <div className="card-header">
                        <div className="icon-box">
                            <img src={iconBox} alt="iconBox" />
                             <img className="icon" src={secondIcon} alt="icon" />
                        </div>
                        <p className="card-title">
                            Des vacances originales et personnalisées avec Riverly
                        </p>
                        <div className="arrow-icon"> </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="info-card">
                    <div className="card-header">
                        <div className="icon-box">
                            <img src={iconBox} alt="iconBox" />
                             <img className="icon" src={thirdIcon} alt="icon" />
                        </div>
                        <p className="card-title">
                            Des croisières fluviales inoubliables vous attendent
                        </p>
                        <div className="arrow-icon"> </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutRiverly;
