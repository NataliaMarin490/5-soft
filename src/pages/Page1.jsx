import { Link } from 'react-router-dom';
import "../styles/modulo_Loggin.css"
import Google from '../media/google_logo.png';
import Login from "../media/Login.png"
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

function Page1() {

  const responseGoogle = (response) => {
    console.log(response);
  }

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
                  <input type="email" pattern=".+@gmail.com" title="Por favor, ingresar una dirección de correo de Gmail" name="email" id="email" required />
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
            
              <div className='google1'>
                
                <GoogleLogin
    clientId="FALTA GENERAR LA ID"
    render={renderProps => (
      <button  className="google_btn" onClick={renderProps.onClick} disabled={renderProps.disabled}><span className='textGoogle'>Continúa con <img src={Google} alt='Logo Google' className='logo_google' />oogle</span></button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                
              </div>
            
            
          </div>
        </div>
      </main>
    </div>
  )
}
export default Page1;