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
  const [switchers, setSwitcher]=useState(false)
    return (
          <div class="forms-section">
          <h1 class="section-title">VideoJuegos</h1>
          <div class="forms">
            <div class="form-wrapper ">
              <button type="button" class="switcher switcher-login">
                Iniciar Sesion
                <span class="underline"></span>
              </button>
              <form class="form form-login">
                  <legend>Por favor ingresa tu correo y contraseña para ingresar</legend>
                  <div class="input-block">
                    <label for="login-email">Correo</label>
                    <input id="login-email" type="email" required/>
                  </div>
                  <div class="input-block">
                    <label for="login-password">Contraseña</label>
                    <input id="login-password" type="password" required/>
                  </div>
                <button type="submit" class="btn-login">Iniciar Sesion</button>
              </form>
            </div>
            <div class="form-wrapper">
              <button type="button" class="switcher switcher-signup is-active">
                Registrarse
                <span class="underline"></span>
              </button>
              <form class="form form-signup">
              
                  <legend>Por favor ingresa tu correo, contraseña y confirmacion de la contraseña para registrarte</legend>
                  <div class="input-block">
                    <label for="signup-email">correo</label>
                    <input id="signup-email" type="email" required/>
                  </div>
                  <div class="input-block">
                    <label for="signup-password">Contraseña</label>
                    <input id="signup-password" type="password" required/>
                  </div>
                  <div class="input-block">
                    <label for="signup-password-confirm">Confirmar contraseña</label>
                    <input id="signup-password-confirm" type="password" required/>
                  </div>
                
                <button type="submit" class="btn-signup">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
    
    )
}