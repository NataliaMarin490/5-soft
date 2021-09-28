



function ComponenteBotonV(props) {
  
  return (

<table class="tablaroles">
<tbody>
<tr>
<td>{props.usuario}</td>
<td>{props.permiso}</td>
<td>{props.info}</td>
<td><input type="submit" value={props.nameboton} class="button" /></td>
</tr>
</tbody>
</table>

    


  );
}

export default ComponenteBotonV;