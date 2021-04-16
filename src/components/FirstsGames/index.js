import React from 'react'
import PropTypes from "prop-types"
import "./styles.css"
import images from '../../assets/images'

function FirstsGames({places}) {
    const[ first, second, third ] = places
    // console.log(first, second, third)
    return (
        <div className="firstsplaces">
            <div className="firstsplaces__card firstsplaces__card-second">
                <span 
                    className="firstsplaces__icon"
                    style={{
                        mask: `url(${images.Trofeo2})`,
                        maskSize: "cover",
                        WebkitMaskImage: `url(${images.Trofeo2})`,
                        WebkitMaskSize: "cover",
                    }} 
                />
                <div>
                    <img alt={second.name} src={second.image_url}/>
                </div>
                <h2>
                    {second.name}
                </h2>
                <h4>
                    {second.company}
                </h4>
            </div>
            <div className="firstsplaces__card firstsplaces__card-first">
                <span 
                    className="firstsplaces__icon"
                    style={{
                        mask: `url(${images.Trofeo1})`,
                        maskSize: "cover",
                        WebkitMaskImage: `url(${images.Trofeo1})`,
                        WebkitMaskSize: "cover",
                    }} 
                />
                <div>
                    <img alt={first.name} src={first.image_url}/>
                </div>
                <h2>
                    {first.name}   
                </h2>
                <h4>
                    {first.company}
                </h4>
            </div>
            <div className="firstsplaces__card firstsplaces__card-third">
                <span 
                    className="firstsplaces__icon"
                    style={{
                        mask: `url(${images.Trofeo3})`,
                        maskSize: "cover",
                        WebkitMaskImage: `url(${images.Trofeo3})`,
                        WebkitMaskSize: "cover",
                    }} 
                />
                <div>
                    <img alt={third.name} src={third.image_url}/>
                </div>
                <h2>
                    {third.name}
                </h2>
                <h4>
                    {third.company}
                </h4>
            </div>
        </div>
    )
}

FirstsGames.propTypes = {
    places: PropTypes.array.isRequired
}

export default FirstsGames
