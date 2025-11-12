import React from 'react'
import line from "../assets/line.svg"
import imageG19 from "../images/imageG19.png"
import "../styles/Frame692.css"


const Frame692 = () => {

    return (
        <div className='frame692'>
            <h1 className="header-text">Riverly, <span>ce qui nous lie</span></h1>
            <div className='frame691'>
                <div className='frame690'>
                    <div className='frame43'>
                        <div id='frame42-1' className='frame42'>
                            <p id='above-text' className='text'>
                                Voyager avec Riverly c’est partager une expérience touristique authentique. Les maîtres mots sont la proximité, la découverte et l’autonomie. En louant votre bateau, vous devenez le capitaine de votre croisière fluviale ! Choisissez la convivialité du voyage en famille, entre amis ou en couple et découvrez des paysages authentiques ! Vous découvrirez également les différents terroirs par la nature, le patrimoine, les vignobles, ou encore par la population locale.
                            </p>
                        </div>
                    </div>
                    <div className='frame568'>
                        <div className="frame42">
                            <p className="text" id="below-text">
                                Partir en vacances avec Riverly c’est une façon originale d’observer une région au fil de l’eau, votre vie à bord sera chaleureuse et ludique. En louant des vélos vous pourrez partir à la découverte de merveilles patrimoniales et architecturales. Nous vous aidons à établir le parcours en bateau de location qui vous ressemble, trouvez la thématique adaptée à vos envies parmi la gastronomie et l’œnologie, les escales urbaines et culturelles, le patrimoine et l’histoire, grandeur nature et baignade.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='group-19'>
                    <img src={imageG19} alt="imageG19" className='image-right' />
                    <div className="frame693">
                        <img src={line} alt="line" className="vector" />
                        <p className="text-between-vector">
                            Un certain regard sur le bonheur
                        </p>
                        <img src={line} alt="line" className="vector" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frame692
