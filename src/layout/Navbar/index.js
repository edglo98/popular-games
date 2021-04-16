import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import "./styles.css"
import HamburguerMenu from '../HamburguerMenu'
import { UserContext } from '../../context/UserContext'
import { logout } from '../../utils/auth'
import { db } from '../../firebase'

export default function Navbar() {
    const [ menu, setMenu ] = useState(false)
    const { user, setUser } = useContext( UserContext )
    const [ isAdmin, setIsAdmin ] = useState( false )
    const history = useHistory()

    const handleLogout = () => {
        logout()
        .then(()=>{
            setUser({logedin: false})
            history.push('/login')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(() =>{
        if(user.uid){
            ;(async () =>{
                const refAdmin = await db.collection("admins")
                const a = await refAdmin.where('uid_admins', 'array-contains', user.uid).get()
                setIsAdmin(!a.empty)
            })()
        }
    }, [ user.uid ]);

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
                    exact
                    to="/" 
                    className="navbar-menu__link" 
                    activeClassName="navbar-menu__active"
                >
                    Inicio
                </NavLink>
                <NavLink 
                    exact
                    to="/games" 
                    className="navbar-menu__link" 
                    activeClassName="navbar-menu__active"
                >
                    Juegos
                </NavLink>
                
                {
                    isAdmin 
                    ? <NavLink 
                        exact
                        to="/admin" 
                        className="navbar-menu__link"  
                        activeClassName="navbar-menu__active"
                    >
                        Administrar
                    </NavLink>
                    : <NavLink 
                        exact
                        to="/recom" 
                        className="navbar-menu__link"  
                        activeClassName="navbar-menu__active"
                    >
                        Recomendar
                    </NavLink>
                }
                {
                    !user.logedin 
                        ? <NavLink 
                            to="/login" 
                            className="navbar-menu__link navbar-menu__login"
                        >
                            Iniciar sesión
                        </NavLink>
                        : <button
                            className="navbar-menu__link navbar-menu__logout"
                            onClick={ handleLogout }
                        >
                            Cerrar sesión
                        </button>
                }
            </ul>

        </nav>
    )
}
