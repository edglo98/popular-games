import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./styles.css"
import HamburguerMenu from '../HamburguerMenu'

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <nav className="navbar">

            <Link to="/" className="navbar-title">
                <span className="navbar-img">
                    {/* <RickAndMortySVG width={60} color="#292929"/> */}
                </span>
                <span>PopGames</span>
            </Link>


            <div className="hamburguer-menu_view">
                <HamburguerMenu 
                    setState={setMenu}
                    state={menu}
                />
            </div>


            <ul  className={`navbar-menu ${menu || "navbar-menu__close"}`}>
                <NavLink 
                    to="/Games" 
                    className="navbar-menu__link" 
                    activeClassName="navbar-menu__active"
                >
                    Juegos
                </NavLink>
                <NavLink 
                    to="/games" 
                    className="navbar-menu__link"  
                    activeClassName="navbar-menu__active"
                >
                    XBOX
                </NavLink>
                <NavLink 
                    to="/location" 
                    className="navbar-menu__link" 
                    activeClassName="navbar-menu__active"
                >
                    PS4
                </NavLink>
                <NavLink 
                    to="/login" 
                    className="navbar-menu__link navbar-menu__logout"
                >
                    Cerrar sesión
                </NavLink>
            </ul>

        </nav>
    )
}
