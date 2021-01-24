import React from 'react'
import "./styles.css"

export default function HamburguerMenu( { setState, state } ) {
    return (
        <span className="hamburguer-menu" onClick={ () => setState( !state ) }>
            <i className={` hamburguer-menu__line ${ state && "hamburguer-menu__cancel" } `}/>
            <i className={` hamburguer-menu__line ${ state && "hamburguer-menu__cancel" } `}/>    
            <i className={` hamburguer-menu__line ${ state && "hamburguer-menu__cancel" } `}/>
        </span>
    )
}
