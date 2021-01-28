import React from 'react'
import "./styles.css"
import images from '../../assets/images'
import { useHistory } from 'react-router-dom'

export default function LoginForm( ) {
  const history = useHistory()
  const handleLogin = () => {
    history.push("/")
  }
  return (
    <form class="login__form" onSubmit={ handleLogin }>
      <img
        alt="gif animado de sonic"
        className="login__sonic"
        src={images.Sonic4} 
      />
      <h1>PopGames</h1>


      <input type="email" name="email" required placeholder="Escribe tu email" autoComplete={false} />

      <input type="password" name="password" required placeholder="Escribe tu contraseña" autoComplete={false} />

      <button type="submit" class="login__btn">Iniciar Sesión</button>

      <button type="button" class="google__btn">
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