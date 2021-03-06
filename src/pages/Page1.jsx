import { Link, Redirect } from 'react-router-dom';
import "../styles/modulo_Loggin.css"
import Google from '../media/google_logo.png';
import Login from "../media/Login.png"
import react, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import cookie from 'react-cookies'
import axios from "axios";

function Page1() {
  const [Usuarios, setUsuarios] = useState([])

  useEffect(() => {
    const options = { method: 'GET', url: 'https://floating-spire-36481.herokuapp.com/usuarios' };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setUsuarios(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  const [nombreUsuario, setnombreUsuario] = useState()
  const [numerodeIdentificacion, setnumerodeIdentificacion] = useState()
  const [correoElectronico, setcorreoElectronico] = useState()
  const [password, setpassword] = useState()
  const [rolUsuario, setrolUsuario] = useState("pendiente")

  const responseGoogle = (response) => {
    cookie.save('token', response.tokenId);
    cookie.save('name', response.profileObj.name);
    cookie.save('email', response.profileObj.email);
    cookie.save('Iurl', response.profileObj.imageUrl);
    setnombreUsuario(response.profileObj.name)
    setcorreoElectronico(response.profileObj.email)
    setnumerodeIdentificacion(response.profileObj.googleId)
    setpassword(response.profileObj.imageUrl)

    console.log(response.profileObj);
    let bandera = false
    Usuarios.filter((B) => {
      bandera = JSON.stringify(B).toLocaleLowerCase().includes(response.profileObj.email)
      console.log("valor", bandera)
    })

    if (bandera == false) {
      const options = {
        method: 'POST',
        url: 'https://floating-spire-36481.herokuapp.com/usuarios/nuevo',
        headers: { 'Content-Type': 'application/json' },
        data: {
          nombreUsuario: response.profileObj.name,
          numerodeIdentificacion: response.profileObj.googleId,
          correoElectronico: response.profileObj.email,
          password: response.profileObj.imageUrl,
          rolUsuario: rolUsuario
        }
      };

      axios
        .request(options).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });
    }
  }
  const redirigir = (e) => {
    if (correoElectronico != undefined) {
      return (<Redirect to='/index' />)
    }
  }

  return (
    <div>
      {redirigir(correoElectronico)} 
      <ul>
        <div className="navbar1">
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link1" href="Index">P??gina Principal</a>
          </li>
          <li className="pizza_item1">
          </li>
        </div>
      </ul>
      <main class="login-design">
        <div class="waves">
          <img src={Login} width="350hv" height="350hv" />
        </div>
        <div class="login">
          <div class="login-data">
            <h1>Inicio de Sesi??n</h1>
            <form action="#" class="login-form">
              <div class="input-group">
                <label class="input-fill">
                  <input type="email" pattern=".+@gmail.com" title="Por favor, ingresar una direcci??n de correo de Gmail" name="email" id="email" required />
                  <span class="input-label">Correo Electr??nico</span>
                  <i class="fas fa-envelope"></i>
                </label>
              </div>
              <div class="input-group">
                <label class="input-fill">
                  <input type="password" name="password" id="password" required />
                  <span class="input-label">Contrase??a</span>
                  <i class="fas fa-lock"></i>
                </label>
              </div>
              <a href="Page2" target="_blank">??Necesitas una Cuenta? </a>
              <input type="submit" value="Iniciar Sesi??n" class="btn-login" />
            </form>
            <div className='google1'>
              <GoogleLogin
                clientId="194617696880-4tg9gi23re9p5skrd7r4btbr30o41deo.apps.googleusercontent.com"
                render={renderProps => (
                  <button className="google_btn" onClick={renderProps.onClick} disabled={renderProps.disabled}><span className='textGoogle'>Contin??a con <img src={Google} alt='Logo Google' className='logo_google' />oogle</span>
                  </button>
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
export default Page1

