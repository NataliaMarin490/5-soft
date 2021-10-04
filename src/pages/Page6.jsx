import { Link } from 'react-router-dom';
import BarraDeBusqueda from '../components/BarraDeBusqueda';


import BaseDatosPruebas from '../components/BaseDatosPruebas';
import "../styles/modulo_Inventarios.css"



function Page6() {

    return(

        <div className="invetariopage">

        <span> <font color="white">Esta en pagina inventarios 6 Gestion Inventarios</font></span>
        <Link to="index"> pagina inicial </Link>

        
        <br />
        <BarraDeBusqueda search="busqueda inventario"/>
        <br /> <br />
        <BaseDatosPruebas funcion="buscar" descripcion="Mini Pizza"/>

        <br/>

        {/* <BaseDatosPruebas funcion="actualizar" id ="0" descripcion=" esto es una update al inventario"/> */}

        <form action="formulario actualizar" method="get">
        <input type="text" placeholder="ID #️⃣" />
        <input type="text" placeholder="Descripcion 🎫" />
        <input type="text" placeholder="Precio 💲" />
        <input type="submit" value="Actualizar 🔄"/>
        <input type="reset" value="Borrar ❌"></input>
        </form>
        
       
        
       
        

     
        </div>
    )
}

export default Page6;