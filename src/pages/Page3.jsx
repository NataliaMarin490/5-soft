import { Link } from 'react-router-dom';

import ComponenteBotonV from "../components/ComponenteBotonV";
import ComponenteBotonB from '../components/ComponenteBotonB';
import Cabecera from '../components/Cabecera';

import "../styles/modulo_Gestion_Roles.css"



function Page3() {

    return(
        <div class="algo">

        <span>Esta en pagina 3 </span>
        <Link to="index"> pagina inicial </Link>

<table class="Marco">
<tbody>
<tr>
<td>
<Cabecera cabeza="MODULO DE GESTION DE ROLES"/><br/><br/>
<ComponenteBotonV usuario="andres"  nameboton1="ACTUALIZAR" nameboton2="eliminar"/>
<ComponenteBotonV usuario="andres"  nameboton1="ACTUALIZAR" nameboton2="eliminar"/>
<ComponenteBotonV usuario="andres"  nameboton1="ACTUALIZAR" nameboton2="eliminar"/>
<ComponenteBotonV usuario="andres"  nameboton1="ACTUALIZAR" nameboton2="eliminar"/>
<ComponenteBotonV usuario="andres"  nameboton1="ACTUALIZAR" nameboton2="eliminar"/>
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
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>

<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>

<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>
<ComponenteBotonB usuario="andres" nameboton3="ACEPTAR"/>







</td>
</tr>
</tbody>
</table>



        </div>
    )
}

export default Page3;





