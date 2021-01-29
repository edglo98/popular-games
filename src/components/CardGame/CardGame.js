import React from 'react'
import PropTypes from 'prop-types'
import './CardGame.css'

function CardGame({title,img,sub}) {
    return (
        <div className='cardgame-container'>
            <div className='cardgame__image-container'>
                <img src={img} alt='' />
            </div>
            <div className='cardgame-content'>
                <h3>{title}</h3>
                <p>{sub}</p>
            </div>
        </div>
    )
}

CardGame.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    sub: PropTypes.string
}

export default CardGame