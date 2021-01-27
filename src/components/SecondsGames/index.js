import React from 'react'
import PropTypes from "prop-types"
import "./styles.css"
import images from '../../assets/images'
import CardGame from '../CardGame/CardGame'

function SecondsGames({places}) {


    return (
        <div className="secondsgames__container">
            {
                places.map((item, i)=>(
                    <div style={{margin: ".5em"}}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <span 
                                className="secondplaces__icon"
                                style={{
                                    mask: `url(${images.Trofeo3})`,
                                    maskSize: "cover",
                                    WebkitMaskImage: `url(${images.Trofeo3})`,
                                    WebkitMaskSize: "cover",
                                }} 
                            />
                            <h4>
                                Puesto numero { i + 4 }
                            </h4>
                        </div>
                        <CardGame
                            key={item.id}
                            title={item.title}
                            sub={item.sub}
                            img={item.img}
                        />
                    </div>
                ))
            }
        </div>
    )
}

SecondsGames.propTypes = {
    places: PropTypes.array.isRequired
}

export default SecondsGames
