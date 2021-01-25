import React, { useState } from 'react'
import "./styles.css"

export default function LoginForm( { setState, state } ) {
  // const switchers = [...document.querySelectorAll('.switcher')]
        
  //       switchers.forEach(item => {
  //           item.addEventListener('click', function() {
  //               switchers.forEach(item => item.parentElement.classList.remove('is-active'))
  //               this.parentElement.classList.add('is-active')
  //           })
  //       })
  const [switcher, setSwitcher]=useState("login")

  const goLogin = () => {
    setSwitcher("login")
  }
  const goRegister = () => {
    setSwitcher("register")
  }
    return (
          <div class="forms-section">
          <h1 class="section-title">PopGames</h1>
          <div class="forms">

            <div class={`form-wrapper ${ switcher === "login"  && "is-active" }`}>
              <button type="button" onClick={goLogin} class="switcher switcher-login">
                Iniciar Sesion
                <span class="underline"></span>
              </button>
              <form class="form form-login">
                <fieldset>
                  <legend>Por favor ingresa tu correo y contraseña para ingresar</legend>
                  <div class="input-block">
                    <label for="login-email">Correo</label>
                    <input id="login-email" disabled={switcher === "register"  && true} type="email" required/>
                  </div>
                  <div class="input-block">
                    <label for="login-password">Contraseña</label>
                    <input id="login-password" disabled={switcher === "register"  && true} type="password" required/>
                  </div>
                </fieldset>
                <button type="submit" class="btn-login">Iniciar Sesion</button>
              </form>

            </div>
            <div class={`form-wrapper ${ switcher === "register"  && "is-active" }`}>
              <button type="button" onClick={goRegister} class="switcher switcher-signup">
                Registrarse
                <span class="underline"></span>
              </button>
              
              <form class="form form-signup">
                <fieldset>

                  <legend>Por favor ingresa tu correo, contraseña y confirmacion de la contraseña para registrarte</legend>
                  <div class="input-block">
                    <label for="signup-email">correo</label>
                    <input id="signup-email" disabled={switcher === "login"  && true} type="email" required/>
                  </div>
                  <div class="input-block">
                    <label for="signup-password">Contraseña</label>
                    <input id="signup-password" disabled={switcher === "login"  && true}  type="password" required/>
                  </div>
                  <div class="input-block">
                    <label for="signup-password-confirm">Confirmar contraseña</label>
                    <input id="signup-password-confirm" disabled={switcher === "login"  && true}  type="password" required/>
                  </div>

                </fieldset>
                <button type="submit" class="btn-signup">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
    
    )
}