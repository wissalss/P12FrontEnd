import React from 'react'
import './Header-left.css'
import Yoga from "./../../assets/yoga.png"
import Swimming from "./../../assets/swimming.png"
import Velo from "./../../assets/velo.png"
import Poids from "./../../assets/poids.png"
import Copiryght from "./../../assets/Copiryght.png"

/**
 * Left Menu
 * @component
 * @returns component 
 */

function HeaderLeft() {
  return (
    <div className='left-nav'>
         <section className="Icones-nav">
                <img src={Yoga} alt="yoga" />
                <img src={Swimming} alt="Swimming" />
                <img src={Velo} alt="Velo" />
                <img src={Poids} alt="Poids" />
            </section>
            <img className="copy" src={Copiryght} alt="copiryght SportSee" />
    </div>
  )
}

export default HeaderLeft
