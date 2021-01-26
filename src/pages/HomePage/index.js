import React from 'react'
import CardGame from '../../components/CardGame/CardGame'
import './styles.css'

export default function HomePage() {
    return (
        <div>
                <div class="ex1">
                        <CardGame
                            tittle='Card Tittle'
                            imageUrl='https://sm.ign.com/t/ign_es/screenshot/default/tlou2-wp-duality-1920x1080-002b-1_cz37.1280.jpg'
                            body='Un dos tres'
                        />
                    
                </div>
        </div>
    )
}
