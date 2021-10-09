import { Link } from 'react-router-dom';
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



        </div>
    )
}

export default Page3;





