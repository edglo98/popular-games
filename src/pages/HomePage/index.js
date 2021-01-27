import React from 'react'
import CardGame from '../../components/CardGame/CardGame'
import './styles.css'

export default function HomePage() {
    const arr = [1,2,3,4,5,6,7,8,9]
    return (
        <>
        <h1 style={{textAlign: "center"}}>
            Juegos más populares
        </h1>
        <h1 style={{textAlign: "center"}}>
            Otros juegos participando
        </h1>
        <div class="listgame__container">
            {
                arr.map(i=>(
                    <CardGame
                        key={i}
                        title='The last of us II'
                        sub='Naughty Dog/SIE'
                        img='https://sm.ign.com/t/ign_es/screenshot/default/tlou2-wp-duality-1920x1080-002b-1_cz37.1280.jpg'
                    />
                ))
            }
        </div>
        </>
    )
}
