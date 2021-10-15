import { Link } from 'react-router-dom';
import "../styles/modulo_Registro.css"
import react, { useEffect, useState } from 'react'
import axios from "axios";

function Page2() {
  
  /* const [Usuarios, setUsuarios] = useState() */
  const [nombreUsuario, setnombreUsuario] = useState()
  const [numerodeIdentificacion, setnumerodeIdentificacion] = useState()
  const [correoElectronico, setcorreoElectronico] = useState()
  const [password, setpassword] = useState()
  const [rolUsuario, setrolUsuario] = useState("pendiente")

  const enviarBaseDatos = async () => {
    /* console.log(`enviado back , ${nombreUsuario}, ${numerodeIdentificacion}, ${correoElectronico} , ${password}`)
    setUsuarios([...Usuarios, { nombreUsuario: nombreUsuario, numerodeIdentificacion: numerodeIdentificacion, correoElectronico: correoElectronico, password: password }]);
 */
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/usuarios/nuevo',
      headers: {'Content-Type': 'application/json'},
      data: {
        nombreUsuario: nombreUsuario,
        numerodeIdentificacion: numerodeIdentificacion,
        correoElectronico: correoElectronico,
        password: password,
        rolUsuario: rolUsuario
      }
    };
    
    await axios
    .request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    

  }
  return ( 
    <div>
      <ul>
        <div className="navbar2">
          <li className="pizza_item2">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link2" href="Index">Página Principal</a>
          </li>
        </div>
      </ul>
      <main className="login-design">
        <div className="waves">
          <div className="img-registro"></div>
        </div>
        <div className="login">
          <div className="login-data">
            <h2>Registro de Usuario</h2>
            <form action="#" className="login-form">
              <div className="input-group">
                <label className="input-fill">
                  <input type="text" onChange={(e) => { setnombreUsuario(e.target.value) }}/>
                  <span className="input-label">Nombre Completo</span>
                  <i className="fas fa-user-friends"></i>
                </label>
              </div>
              <div className="input-group">
                <label className="input-fill">
                  <input type="number" onChange={(e) => { setnumerodeIdentificacion(e.target.value) }} />
                  <span className="input-label">Número de identificación</span>
                  <i className="fas fa-id-card"></i>
                </label>
              </div>
              <div className="input-group">
                <label className="input-fill">
                  <input type="email" pattern=".+@gmail.com" title="Por favor, ingresar una dirección de correo de Gmail" name="email" id="email" required onChange={(e) => { setcorreoElectronico(e.target.value) }}/>
                  <span className="input-label">Correo Electrónico</span>
                  <i className="fas fa-envelope"></i>
                </label>
              </div>
              <div className="input-group">
                <label className="input-fill">
                  <input type="password" name="password" id="password" required onChange={(e) => { setpassword(e.target.value) }} />
                  <span className="input-label">Contraseña</span>
                  <i className="fas fa-lock"></i>
                </label>
              </div>
              <div className="input-group">
                <label className="input-fill">
                  <input type="password" name="password" id="password" required />
                  <span className="input-label">Verificar Contraseña</span>
                  <i className="fas fa-lock-open"></i>
                </label>
              </div>
              <div className="input-group">
                <div className="warp">
                  <h3>Seleccione el Rol</h3>
                  <input type="radio" name="rol" id="Administrador" />
                  <label className="izq" for="Administrador">Administrador</label>
                  <input type="radio" name="rol" id="Vendedor" />
                  <label for="Vendedor">Vendedor</label>
                </div>
              </div>
              <input type="button" onClick={(e) => {enviarBaseDatos();}}  value="Registrar 🗉" className="btn-login" />
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page2;