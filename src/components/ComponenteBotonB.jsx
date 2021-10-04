


import logoLogin from "../media/logoLogin.png"





function ComponenteBotonB(props) {

  return (




<table class="FILA">
<tbody>
<tr>
<td>{props.usuario}</td>
<td>
  <select name="select">
            <option value="value1">Administrador</option>
            <option value="value2" selected>Vendedor</option>
            <option value="value3">Usuario</option>
          </select>
          </td>
<td><img src={logoLogin} alt="" /> <br/>ESTADO PENDIENTE</td>
<td><input type="submit" value={props.nameboton3} class="button" /></td>
</tr>
</tbody>
</table>







  );
}

export default ComponenteBotonB;