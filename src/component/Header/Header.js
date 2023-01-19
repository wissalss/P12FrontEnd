import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

/**
 * Nav bar
 * @component
 * @returns component 
 */


function HeaderTop() {
  return (

    <div className='top-nav'>
      <header className='nav-header'>
      <a href='/' className='Logo-link'> <img src={logo} alt="SportSee Logo" className='Logo-img' /> </a>
      <nav className='Nav-items'>
        <ul className='menu'>
          <li className='nav-item'> <a href='/' className='nav-link'>Accueil</a></li>
          <li className='nav-item'> <a href='' className='nav-link'>Profil</a></li>
          <li className='nav-item'> <a href='' className='nav-link'>Réglage</a></li>
          <li className='nav-item'> <a href='' className='nav-link'>Communauté</a></li>
        </ul>
      </nav>
      </header>
    </div>
  )
}

export default HeaderTop
