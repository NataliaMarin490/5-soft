




function ComponenteBotonV(props) {

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
<td><input type="submit" value={props.nameboton1} class="button" /></td>
<td><input type="submit" value={props.nameboton2} class="button" /></td>
</tr>
</tbody>
</table>







  );
}

export default ComponenteBotonV;