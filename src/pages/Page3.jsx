import { Link } from 'react-router-dom';

import ComponenteBotonV from "../components/ComponenteBotonV";
import ComponenteBotonB from '../components/ComponenteBotonB';
import Cabecera from '../components/Cabecera';

import "../styles/modulo_Gestion_Roles.css"



import react, { useEffect, useState} from "react"





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
    //////////////
    const [Usuarios,setUsuarios] =useState([])
    const [idUsuario, setidUsuario] = useState()
    const [nombreUsuario, setnombreUsuario] = useState()
    const [rolUsuario, setrolUsuario] = useState()
    ////////////
    const [UsuariosPendintes,setUsuariosPendintes] =useState([])
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
              <th>ID Usuario</th>
              <th>Nombre Usuario</th>
              <th>Rol Usuario</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>

{Usuarios.map((x) => {
    return( 
         
        <tbody>

         <tr>
        <td> {x.idUsuario} </td> 
        <td> {x.nombreUsuario} </td> 
        <td>
          <select name="select">
            <option value="value1">Administrador</option>
            <option value="value2"selected>Vendedor</option>
            
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

<br/><br/><br/><br/>






<table class="Marco">
<tbody>
<tr>
<td>

<Cabecera cabeza="USUARIOS PENDIENTES"/><br/><br/>

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
return( 

<tbody>

<tr>
<td> {x.idUsuarioPendiente} </td> 
<td> {x.nombreUsuarioPendiente} </td>
<td> {x.rolUsuarioPendiente} </td>  
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





