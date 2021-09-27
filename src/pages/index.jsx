import Componente from "../components/Componente";
import "../styles/modulo_Loggin.css"


function Index() {
  return (

    <div>
        <Componente/>

        <main class="login-design">
      
      <div class="waves">
       
        <img src="https://raw.githubusercontent.com/NataliaMarin490/5-soft/Development/media/Login.png" width="350hv" height="350hv" />
      </div>
      <div class="login">
        <div class="login-data">
          
          <img src="https://raw.githubusercontent.com/NataliaMarin490/5-soft/Development/media/Pizza.png" width="175hv" height="175hv" />
          <h1>Inicio de Sesión</h1>
          
          <form action="#" class="login-form">
            <div class="input-group">
              <label class="input-fill">
                <input type="email" name="email" id="email" required />
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
           
            <a href="#">¿Necesitas una Cuenta?</a>
            
            <input type="submit" value="Iniciar Sesión" class="btn-login" />
          </form>
        </div>
      </div>
    </main>

    </div>


     
  )
}

export default Index;