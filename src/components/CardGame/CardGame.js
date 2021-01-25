import React from 'react'
import './CardGame.css'

function CardGame({tittle,imageUrl,body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-tittle'>
                    <h3>{tittle}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='btn'>
                    <button>
                        <a>
                            Ver más
                        </a>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default CardGame