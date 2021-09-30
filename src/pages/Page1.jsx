import { Link } from 'react-router-dom';


import "../styles/modulo_Loggin.css"

import Pizza from "../media/Pizza.png"
import Login from "../media/Login.png"



function Page1() {

    return(

        <div>

        <span>Esta en pagina 1 de Loggin</span>
        <Link to="index"> pagina inicial </Link>

        <main class="login-design">
      
      <div class="waves">
       
        <img src={Login} width="350hv" height="350hv" />
      </div>
      <div class="login">
        <div class="login-data">
          
          <img src={Pizza} width="175hv" height="175hv" />
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
            
            <a href="modulo_registro.html" target="_blank">¿Necesitas una Cuenta? </a>
            
            <input type="submit" value="Iniciar Sesión" class="btn-login" />
          </form>
        </div>
      </div>
    </main>

     
        </div>
    )
}

export default Page1;