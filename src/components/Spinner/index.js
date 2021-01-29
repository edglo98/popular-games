import React from 'react'
import './styles.css'

export default function Spinner() {
    return (
        <div
            style={{
                width:"100%",
                display: 'grid',
                placeItems: "center"
            }}
        >
            <div className="sk-chase">
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
            </div>
        </div>
    )
}
