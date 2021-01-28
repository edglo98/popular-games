import React, { useContext, useState } from 'react'
import "./styles.css"
import images from '../../assets/images'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm'
import { loginUser, startGoogleLogin } from '../../utils/auth'
import Spinner from '../../components/Spinner'

export default function LoginForm( ) {
  const history = useHistory()
  const { setUser } = useContext(UserContext)
  const [values, handleInputChange] = useForm({})
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async(e) => {
    e.preventDefault()
    setLoading(true)
    await loginUser(values.email, values.password, values.userName)
    .then( currentUser => setUser({logedin: true, ...currentUser}) )
    .then( ()=> history.push("/") )
    .catch( err => setError(err))
  }

  const handleGoogleLogin = async(e) => {
    e.preventDefault()
    setLoading(true)
    await startGoogleLogin()
    .then( currentUser => setUser({logedin: true, ...currentUser}) )
    .then( ()=> history.push("/") )
    .catch( err => setError(err))
    .finally( () => setLoading(false) ) 
  }
  // console.log(user)

  return (
    <form className="login__form" onSubmit={ handleLogin }>
      {error?.message}
      <img
        alt="gif animado de sonic"
        className="login__sonic"
        src={images.Sonic4} 
      />
      <h1>PopGames</h1>


      <input type="email" onChange={ handleInputChange } name="email" required placeholder="Escribe tu email" autoComplete="false" />

      <input type="password" onChange={ handleInputChange } name="password" required placeholder="Escribe tu contraseña" autoComplete="false" />

      <button type="submit" className="login__btn">{loading? <Spinner/>: "Iniciar sesión"}</button>
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