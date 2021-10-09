import { Link } from 'react-router-dom';
import "../styles/modulo_Loggin.css"
import Pizza from "../media/Pizza.png"
import Login from "../media/Login.png"

function Page1() { 
  return (
    <div>
      <ul>
        <div className="navbar1">
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link1" href="Index">Página Principal</a>
          </li>
        </div>
      </ul>
      <main class="login-design">
        <div class="waves">
          <img src={Login} width="350hv" height="350hv" />
        </div>
        <div class="login">
          <div class="login-data">
            <h1>Inicio de Sesión</h1>
            <form action="#" class="login-form">
              <div class="input-group">
                <label class="input-fill">
                  <input type="email"  pattern=".+@gmail.com" title="Por favor, ingresar una dirección de correo de Gmail" name="email" id="email" required />
                  <span class="input-label">Correo Electrónico</span>
                  <i class="fas fa-envelope"></i>
                </label>
              </div>
              <div class="input-group">
                <label class="input-fill">
                  <input type="password" name="password" id="password" required />
                  <span class="input-label">Contraseña</span>
                  <i class="fas fa-lock"></i>
                </label>
              </div>
              <a href="Page2" target="_blank">¿Necesitas una Cuenta? </a>
              <input type="submit" value="Iniciar Sesión" class="btn-login" />
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Page1;