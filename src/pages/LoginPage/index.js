import React from 'react'
import images from '../../assets/images'
import LoginForm from '../../components/LoginForm'
import './styles.css'

export default function LoginPage() {
    return (
        <div className="login">
            <LoginForm/>
            <img
                alt="gif animado de sonic"
                className="login__sonic-bg"
                src={images.Sonic2} 
            />
        </div>
    )
}
