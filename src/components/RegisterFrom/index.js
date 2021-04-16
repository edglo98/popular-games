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
        if(values.password===values.password2){
            await createNewUser(values.email, values.password)
            .then( currentUser => {
                currentUser.user.updateProfile({
                    displayName: values.displayName,
                    isAdmin: true
                });
                setUser({logedin: true, ...currentUser})

            } )
            .then( ()=> history.push("/") )
            .catch( err => setError(err))
            .finally( () => setLoading(false) ) 
        }else{
            setError("las contraseñas no coinciden")
        }
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

            <input className="form__input" type="text" onChange={ handleInputChange } name="displayName" required placeholder="Escribe un nombre de usuario" autoComplete="false" />

            <input className="form__input" type="email" onChange={ handleInputChange } name="email" required placeholder="Escribe tu email" autoComplete="false" />

            <input className="form__input" type="password" onChange={ handleInputChange } name="password" required placeholder="Escribe tu contraseña" autoComplete="false" />

            <input className="form__input" type="password" onChange={ handleInputChange } name="password2" required placeholder="Repite tu contraseña" autoComplete="false" />

            <button type="submit" className="btn btn__primary">{loading? <Spinner/>: "Crear cuenta"}</button>

        </form>
    )
}