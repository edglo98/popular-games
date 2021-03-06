import React from 'react'
import './styles.css'
import RecomFrom from '../../components/RecomFrom'

export default function RecomPage() {
    return (
        <div className="recom__container">
            <h1>¿No encontraste el juego que buscabas?</h1>
            <h2>Puedes sugerir su implementación y haremos lo posible porque sea agregado.</h2>
            <h5>Porfavor llena la mayor cantidad de campos posibles para poder ayudarte.</h5>
            <div>
                <RecomFrom />
            </div>
        </div>
    )
}
