import React, { useContext } from 'react'
import "./styles.css"
import images from '../../assets/images'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin } from '../../utils/auth'

export default function LoginForm( ) {
  const history = useHistory()
  const { setUser } = useContext(UserContext)
  const [values, handleInputChange] = useForm({});

  const handleLogin = () => {
    setUser({
      id: 1,
      logedin: true,
      ...values
    })
    history.push("/")
  }

  const handleGoogleLogin = () => {
    console.log("login")
    startGoogleLogin()
  }

  return (
    <form className="login__form" onSubmit={ handleLogin }>
      <img
        alt="gif animado de sonic"
        className="login__sonic"
        src={images.Sonic4} 
      />
      <h1>PopGames</h1>


      <input type="email" onChange={ handleInputChange } name="email" required placeholder="Escribe tu email" autoComplete="false" />

      <input type="password" onChange={ handleInputChange } name="password" required placeholder="Escribe tu contraseña" autoComplete="false" />

      <button type="submit" className="login__btn">Iniciar Sesión</button>
      <legend style={{textAlign: "center"}}>¿Aun no tienes cuenta?</legend>
      <button onClick={()=> history.push("/register")} type="button" className="btn btn__link">Crear una cuenta</button>

      <button onClick={ handleGoogleLogin } type="button" className="google__btn">
        <span 
          className="google__btn-img"
          style={{
            background:`url(${images.Google}) no-repeat center`
          }}
        />
        <p>
          Entrar con Google
        </p>
      </button>

    </form>
  )
}