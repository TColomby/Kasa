import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/LOGO.png'
import './Header.css'


export default function Header() {
  return (
    <header>
        <img src={LOGO} alt="Kasa logo"className='header__logo' />
        <nav> 
           <ul>
                <li><NavLink end to="/">Accueil</NavLink></li>
                <li><NavLink end to="/propos">A Propos</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
