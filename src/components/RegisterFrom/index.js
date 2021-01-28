import React, { useContext } from 'react'
import "./styles.css"
import images from '../../assets/images'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm'

export default function RegisterForm( ) {
  const history = useHistory()
  const { setUser } = useContext(UserContext)
  const [values, handleInputChange] = useForm({});

  const handleRegister = () => {
    setUser({
      ...values
    })
    history.push("/")
  }

  return (
    <form className="register__form" onSubmit={ handleRegister }>
      <img
        alt="gif animado de sonic"
        className="register__sonic"
        src={images.Sonic4} 
      />
      <h1>PopGames</h1>


      <input type="email" onChange={ handleInputChange } name="email" required placeholder="Escribe tu email" autoComplete="false" />

      <input type="password" onChange={ handleInputChange } name="password" required placeholder="Escribe tu contraseña" autoComplete="false" />

      <input type="password" onChange={ handleInputChange } name="password2" required placeholder="Repite tu contraseña" autoComplete="false" />

      <button type="submit" className="register__btn">Crear cuenta</button>

    </form>
  )
}