import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Cabecera from '../components/Cabecera';
import "../styles/modulo_Gestion_Roles.css";
import react, { useEffect, useState } from "react";
function Page3() {
  const BaseFakeUsers =
    [
      { idUsuario: 1, nombreUsuario: "User1", rolUsuario: "pendiente" },
      { idUsuario: 2, nombreUsuario: "User2", rolUsuario: "pendiente" },
      { idUsuario: 3, nombreUsuario: "User3", rolUsuario: "pendiente" },
      { idUsuario: 4, nombreUsuario: "User4", rolUsuario: "pendiente" },
      { idUsuario: 5, nombreUsuario: "User5", rolUsuario: "pendiente" },
    ]

  const BaseFakeUsersPendientes =
    [
      { idUsuarioPendiente: 6, nombreUsuarioPendiente: "User6", rolUsuarioPendiente: "pendiente" },
      { idUsuarioPendiente: 7, nombreUsuarioPendiente: "User7", rolUsuarioPendiente: "pendiente" },
      { idUsuarioPendiente: 8, nombreUsuarioPendiente: "User8", rolUsuarioPendiente: "pendiente" },
      { idUsuarioPendiente: 9, nombreUsuarioPendiente: "User9", rolUsuarioPendiente: "pendiente" },
      { idUsuarioPendiente: 10, nombreUsuarioPendiente: "User10", rolUsuarioPendiente: "pendiente" },
    ]
=======
import axios from "axios";
import ComponenteBotonV from "../components/ComponenteBotonV";
import ComponenteBotonB from '../components/ComponenteBotonB';
import Cabecera from '../components/Cabecera';
import "../styles/modulo_Gestion_Roles.css"
import react, { useEffect, useState} from "react"





function Page3() {


/*     const BaseFakeUsers =
    [
      { nombreUsuario: "anonimooo", numerodeIdentificacion: "User1", correoElectronico: "asdf@asdf", password: "123", rolUsuario: "pendiente" },
      { nombreUsuario: "anonimooo", numerodeIdentificacion: "User2", correoElectronico: "asdf@asdf", password: "123", rolUsuario: "pendiente" },
      { nombreUsuario: "anonimooo", numerodeIdentificacion: "User3", correoElectronico: "asdf@asdf", password: "123", rolUsuario: "pendiente" },
      { nombreUsuario: "anonimooo", numerodeIdentificacion: "User4", correoElectronico: "asdf@asdf", password: "123", rolUsuario: "pendiente" },
      { nombreUsuario: "anonimooo", numerodeIdentificacion: "User5", correoElectronico: "asdf@asdf", password: "123", rolUsuario: "vendedor" },
      { nombreUsuario: "anonimooo", numerodeIdentificacion: "User6", correoElectronico: "asdf@asdf", password: "123", rolUsuario: "administrador" },

    ] */

   
    //////////////
    const [Usuarios,setUsuarios] =useState([])
    const [nombreUsuario, setnombreUsuario] = useState()
    const [numeroIdentificacion, setnumeroIdentificacion] = useState()
    const [correoElectronico, setcorreoElectronico] = useState()
    const [password, setpassword] = useState()
    const [rolUsuario, setrolUsuario] = useState()
    ////////////
   
    

    useEffect(() => {
const options = {method: 'GET', url: 'http://localhost:5000/usuarios'};
axios.request(options).then(function (response) {
  console.log(response.data);
  setUsuarios(response.data)
}).catch(function (error) {
  console.error(error);
});      
    }, [])

   



    return(
        <div class="algo">

        <span>  <font color="white">Esta en pagina 3 Gestion de roles</font> </span>
        <Link to="index"> pagina inicial </Link>

<table class="Marco">
<tbody>
<tr>
<td>
<Cabecera cabeza="MODULO DE GESTION DE ROLES"/><br/><br/>




          <table class="FILA">

          < thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Numero de identificacion</th>
              <th>Correo Electronico</th>
              <th>password</th>
              <th>Rol Usuario</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>

{Usuarios.map((x, index) => {
    return( 
         
        <tbody>

        <tr key={index}>
        <td> {x.nombreUsuario} </td> 
        <td> {x.numerodeIdentificacion} </td>
        <td> {x.correoElectronico} </td> 
        <td> {x.password} </td>  
        <td> <input type="text" value={x.rolUsuario} />
{/*           <select name="select">
            <option value="value1">Administrador</option>
            <option value="value2"selected>Vendedor</option>
            
          </select> */}
          </td>

<td><input type="submit" value="editar" class="button" /></td>
<td><input type="submit" value="eliminar" class="button" /></td>
</tr>
</tbody>

    
    )


})}

</table>




</td>
</tr>
</tbody>
</table>

<br/><br/><br/><br/>






<table class="Marco">
<tbody>
<tr>
<td>

<Cabecera cabeza="USUARIOS PENDIENTES"/><br/><br/>

<table class="FILA">

< thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Numero de identificacion</th>
              <th>Correo Electronico</th>
              <th>password</th>
              <th>Rol Usuario</th>
              <th>Aceptar Petición</th>

            </tr>
  </thead>

{Usuarios.map((x, index) => {
return( 

<tbody>

<tr key={index}>
<td> {x.nombreUsuario} </td> 
<td> {x.numerodeIdentificacion} </td>
<td> {x.correoElectronico} </td> 
<td> {x.password} </td>   
<td>
<select name="select">
  <option value="value1">Administrador</option>
  <option value="value2">Vendedor</option>
  <option value="value3"selected>Pendiente</option>
</select>
</td>

<td><input type="submit" value="Aceptar" class="button" /></td>

</tr>
</tbody>


)


})}

</table>




</td>
</tr>
</tbody>
</table>


>>>>>>> a3c3713b2806b1255ff9db13195d993bf5853f70

  const [Usuarios, setUsuarios] = useState([])
  const [idUsuario, setidUsuario] = useState()
  const [nombreUsuario, setnombreUsuario] = useState()
  const [rolUsuario, setrolUsuario] = useState()
  const [UsuariosPendintes, setUsuariosPendintes] = useState([])
  const [idUsuarioPendiente, setidUsuarioPendiente] = useState()
  const [nombreUsuarioPendiente, setnombreUsuarioPendiente] = useState()
  const [rolUsuarioPendiente, setrolUsuarioPendiente] = useState()

  useEffect(() => {
    //Aqui voy a jalar info de la base datos usuario
    setUsuarios(BaseFakeUsers)
  }, [])

  useEffect(() => {
    //Aqui voy a jalar info de la base datos usuariosPendientes
    setUsuariosPendintes((BaseFakeUsersPendientes))
  }, [])

  return (
    <div class="algo">
      <ul>
        <div className="navbar3">
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link1" href="Index">Página Principal</a>
          </li>
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link" href="Page4">Módulo de Ventas</a>
          </li>
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link" href="Page5">Estado de Ventas</a>
          </li>
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link" href="Page6">Inventario</a>
          </li>
        </div>
      </ul>
      <table class="Marco">
        <tbody>
          <tr>
            <td>
              <Cabecera cabeza="MODULO DE GESTION DE ROLES" /><br /><br />
              <table class="FILA">
                < thead>
                  <tr>
                    <th>ID Usuario</th>
                    <th>Nombre Usuario</th>
                    <th>Rol Usuario</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                  </tr>
                </thead>

                {Usuarios.map((x) => {
                  return (
                    <tbody>
                      <tr>
                        <td> {x.idUsuario} </td>
                        <td> {x.nombreUsuario} </td>
                        <td>
                          <select name="select">
                            <option value="value1">Administrador</option>
                            <option value="value2" selected>Vendedor</option>
                          </select>
                        </td>
                        <td><input type="submit" value="editar" class="button" /></td>
                        <td><input type="submit" value="eliminar" class="button" /></td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br /><br /><br />
      <table class="Marco">
        <tbody>
          <tr>
            <td>
              <Cabecera cabeza="USUARIOS PENDIENTES" /><br /><br />
              <table class="FILA">
                < thead>
                  <tr>
                    <th>ID Usuario</th>
                    <th>Nombre Usuario</th>
                    <th>Rol Usuario</th>
                    <th>Editar Rol</th>
                    <th>Aceptar Petición</th>
                  </tr>
                </thead>

                {UsuariosPendintes.map((x) => {
                  return (
                    <tbody>
                      <tr>
                        <td> {x.idUsuarioPendiente} </td>
                        <td> {x.nombreUsuarioPendiente} </td>
                        <td> {x.rolUsuarioPendiente} </td>
                        <td>
                          <select name="select">
                            <option value="value1">No autorizado</option>
                            <option value="value2">Autorizado</option>
                            <option value="value3" selected>Pendiente</option>
                          </select>
                        </td>
                        <td><input type="submit" value="Aceptar" class="button" /></td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Page3;