import { Link } from 'react-router-dom';

import "../styles/modulo_Registro.css"



function Page2() {

    return(

        <div>

        <span>Esta en pagina 2</span>
        <Link to="index"> pagina inicial </Link>

        <main class="login-design">
      
      <div class="waves">
        
        <div class="img-registro"></div>
      </div>
      <div class="login">
        <div class="login-data">
          <h2>Registro de Usuario</h2>
          
          <form action="#" class="login-form">
            <div class="input-group">
              <label class="input-fill">
                <input type="text" />
                <span class="input-label">Nombre Completo</span>
                <i class="fas fa-user-friends"></i>
              </label>
            </div>
            <div class="input-group">
              <label class="input-fill">
                <input type="number" />
                <span class="input-label">Número de identificación</span>
                <i class="fas fa-id-card"></i>
              </label>
            </div>
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
            <div class="input-group">
              <label class="input-fill">
                <input type="password" name="password" id="password" required />
                <span class="input-label">Verificar Contraseña</span>
                <i class="fas fa-lock-open"></i>
              </label>
            </div>
            <div class="input-group">
              <div class="warp">
                  <h3>Seleccione el Rol</h3>
                  <input type="radio" name="rol" id="Administrador"/>
                  <label for="Administrador">Administrador</label>

                  <input type="radio" name="rol" id="Vendedor"/>
                  <label for="Vendedor">Vendedor</label>
              </div>
          </div>
            
            <input type="submit" value="Registrar" class="btn-login" />
          </form>
        </div>
      </div>
    </main>

     
        </div>
    )
}

export default Page2;