import React from 'react'
import images from '../../assets/images'
import RegisterForm from '../../components/RegisterFrom'

export default function LoginPage() {
    return (
        <div className="login">
            <RegisterForm/>
            <img
                alt="gif animado de sonic"
                className="login__sonic-bg"
                src={images.Sonic2} 
            />
        </div>
    )
}
