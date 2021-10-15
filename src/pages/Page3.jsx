import { Link } from 'react-router-dom';
import axios from "axios";
import Cabecera from '../components/Cabecera';
import "../styles/modulo_Gestion_Roles.css"
import react, { useEffect, useState } from "react"

function Page3() {

    const [Usuarios,setUsuarios] =useState([])
    const [nombreUsuario, setnombreUsuario] = useState()
    const [numerodeIdentificacion, setnumerodeIdentificacion] = useState()
    const [correoElectronico, setcorreoElectronico] = useState()
    const [password, setpassword] = useState()
    const [rolUsuario, setrolUsuario] = useState()
    const [idBase, setidBase] = useState()
  
    useEffect(() => {
const options = {method: 'GET', url: 'http://localhost:5000/usuarios'};
axios.request(options).then(function (response) {
  console.log(response.data);
  setUsuarios(response.data)
}).catch(function (error) {
  console.error(error);
});      
    }, [])

    const actualizarBaseDatos = async () => {
      const options = {
        method: 'PATCH',
        url: 'http://localhost:5000/usuarios/edita',
        headers: {'Content-Type': 'application/json'},
        data: {
          id: idBase,
          nombreUsuario: nombreUsuario,
          numerodeIdentificacion: numerodeIdentificacion,
          correoElectronico: correoElectronico,
          password: password,
          rolUsuario: rolUsuario
        }
      };
      
      await axios.
      request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      window.location.reload()
    }

    const borrarBaseDatos = async () => {
  
  const options = {
    method: 'DELETE',
    url: 'http://localhost:5000/usuarios/borra',
    headers: {'Content-Type': 'application/json'},
    data: {id: idBase}
  };
  
  await axios.
  request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  window.location.reload()
    
    }

  
  return (
    <>
    <div class="algo">
      <ul>
        <div className="navbar3">
          <li className="pizza_item1">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link1" href="Index">Página Principal</a>
            {/* <Link to="index"> pagina inicial </Link>  recordar usar link para saltar cargas*/} 
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
    <th>Nombre de Usuario</th>
    <th>Numero de identificacion</th>
    <th>Correo Electronico</th>
    <th>Foto URL</th>
    <th>Rol Usuario</th>
    <th>Editar</th>
    <th>Borrar</th>
  </tr>
</thead>

{Usuarios.map((x, index) => {
return( 

<tbody>
{x.rolUsuario != "pendiente" ?
        <tr key={index}>
        <td> {x.nombreUsuario}</td> 
        <td> {x.numerodeIdentificacion} {x._id} </td>
        <td> {x.correoElectronico} </td> 
        <td> <img src={x.password}alt=""/> </td>  
        <td> { <input  type="text" value={rolUsuario} placeholder={x.rolUsuario} onChange={(e) => { 
          setidBase(x._id)
          setrolUsuario(e.target.value)
          setnombreUsuario(x.nombreUsuario)
          setnumerodeIdentificacion(x.numerodeIdentificacion)
          setcorreoElectronico(x.correoElectronico)
          setpassword(x.password)  
        }} /> }  </td>

<td> 
  <input type="button" value="📑 Editar"    class="button"   onClick={ (e) => {
     console.log("se va enviar a este ID --> " ,idBase,nombreUsuario,numerodeIdentificacion,correoElectronico,password,rolUsuario)
     actualizarBaseDatos() 
;}}  /></td>
<td><input type="button" value="❌ Eliminar" class="button" onClick={ (e) => {
console.log("se va boorar esto --> " ,idBase,nombreUsuario,numerodeIdentificacion,correoElectronico,password,rolUsuario)
borrarBaseDatos();
}
} 

/></td>
</tr>
:<tbody></tbody>} 


</tbody>


)


}
)}

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
    <th>Foto URL</th>
    <th>Rol Usuario</th>
    <th>Aceptar Petición</th>

  </tr>
</thead>

{Usuarios.map((x, index2) => {
return( 


<tbody>
{x.rolUsuario == "pendiente" ? 
<tr key={index2}>
<td> {x.nombreUsuario} </td> 
<td> {x.numerodeIdentificacion} </td>
<td> {x.correoElectronico} </td> 
<td> <img src={x.password}alt=""></img> </td>   
<td>
<input type="text" value={rolUsuario} placeholder={x.rolUsuario} onChange={(e) => { setrolUsuario(e.target.value) 
                       setidBase(x._id)
                       setnombreUsuario(x.nombreUsuario)
                       setnumerodeIdentificacion(x.numerodeIdentificacion)
                       setcorreoElectronico(x.correoElectronico)
                       setpassword(x.password)
                       
        }}/>
</td>
<td><input type="submit" value="✔️ Aceptar" class="button" onClick={ (e) => {

actualizarBaseDatos()

console.log("se va enviar a este ID --> " ,idBase,nombreUsuario,numerodeIdentificacion,correoElectronico,password,rolUsuario)


;}}  /></td>
</tr>

:<tbody></tbody>} 
</tbody>





)


})}

</table>




</td>
</tr>
</tbody>
</table>



</div>
</>)
}

export default Page3;





