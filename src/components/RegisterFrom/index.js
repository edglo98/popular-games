import React, { useContext, useState } from 'react'
import "./styles.css"
import images from '../../assets/images'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm'
import { createNewUser } from '../../utils/auth'
import Spinner from '../../components/Spinner'

export default function RegisterForm( ) {
    const history = useHistory()
    const { setUser } = useContext(UserContext)
    const [values, handleInputChange] = useForm({})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
  
    const handleRegister = async(e) => {
        setLoading(true)
        e.preventDefault()
        await createNewUser(values.email, values.password, values.userName)
        .then( currentUser => setUser({logedin: true, ...currentUser}) )
        .then( ()=> history.push("/") )
        .catch( err => setError(err))
        .finally( () => setLoading(false) ) 
    }

    return (
        <form className="register__form" onSubmit={ handleRegister }>
            {error?.message}
            <img
                alt="gif animado de sonic"
                className="register__sonic"
                src={images.Sonic4} 
            />
            <h1>PopGames</h1>

            <input type="text" onChange={ handleInputChange } name="displayName" required placeholder="Escribe un nombre de usuario" autoComplete="false" />

            <input type="email" onChange={ handleInputChange } name="email" required placeholder="Escribe tu email" autoComplete="false" />

            <input type="password" onChange={ handleInputChange } name="password" required placeholder="Escribe tu contraseña" autoComplete="false" />

            <input type="password" onChange={ handleInputChange } name="password2" required placeholder="Repite tu contraseña" autoComplete="false" />

            <button type="submit" className="btn btn__primary">{loading? <Spinner/>: "Crear cuenta"}</button>

        </form>
    )
}