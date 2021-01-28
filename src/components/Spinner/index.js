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
            <div class="sk-chase">
                <div class="sk-chase-dot" />
                <div class="sk-chase-dot" />
                <div class="sk-chase-dot" />
                <div class="sk-chase-dot" />
                <div class="sk-chase-dot" />
                <div class="sk-chase-dot" />
            </div>
        </div>
    )
}
