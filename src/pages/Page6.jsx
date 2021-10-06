import { Link } from 'react-router-dom';
import BarraDeBusqueda from '../components/BarraDeBusqueda';
import BaseDatosPruebas from '../components/BaseDatosPruebas';
import "../styles/modulo_Inventarios.css"

import react, {useEffect,useState} from 'react'



function Page6() {





    const BaseFake =
    [
      { idProducto: 1, descripcionProducto: "Slim Pizza", valorProducto: 20000, inventarioProducto: 10 },
      { idProducto: 2, descripcionProducto: "Mini Pizza", valorProducto: 15000, inventarioProducto: 10 },
      { idProducto: 3, descripcionProducto: "Classic Pizza", valorProducto: 30000, inventarioProducto: 10 },
      { idProducto: 4, descripcionProducto: "Mega Pizza", valorProducto: 50000, inventarioProducto: 10 },
      { idProducto: 5, descripcionProducto: "Nerd Pizza", valorProducto: 60000, inventarioProducto: 10 },
    ]


    const [Productos,setProductos] = useState([])
    const [Id,setId] = useState(0);
    const [Descripcion,setDescripcion] = useState("nada");
    const [Precio,setprecio] = useState(0);
    const [Busqueda,setBusqueda] = useState("Busqueda invetario");

    useEffect(()=>{
        //Aqui voy a jalar info de la base datos
        setProductos(BaseFake)
        
    },[]);




    const Mytabladeproductos = ({ ListaProductos }) =>{
        

        useEffect(()=> {
            console.log(ListaProductos);

        },[ListaProductos]);

        return ( <div> 
            
            {ListaProductos.map((x)=>{

                return(
                    <div>
            <table class="TablaInventario">
              <tbody>
                <tr>
                  <td>{x.idProducto}</td>
                  <td>{x.descripcionProducto}</td>
                  <td>{x.valorProducto}</td>
                  <td>{x.inventarioProducto}</td>
                  <td>{x.valorProducto * x.inventarioProducto}</td>
                </tr>
              </tbody>
            </table>
                    </div>
                );
            })}
            
                </div>)
       };






    return(

        <div className="invetariopage">

        <span> <font color="white">Esta en pagina inventarios 6 Gestion Inventarios</font></span>
        <Link to="index"> pagina inicial </Link>

        

        
        {/* <input type="button" onClick={(e)=>{Mytabladeproductos()}}  value="Actualizar 🔄"/> */}

        

        

        
        <br />
        <input class="input2"  onChange ={(e)=>{setBusqueda(e.target.value);console.log(e.target.value)}} type="text" name="search" placeholder={Busqueda}/>
        <br /> <br />

        
        <Mytabladeproductos ListaProductos={Productos}/>
        
        
        {/* <BaseDatosPruebas funcion="buscar" descripcion="Mini Pizza"/> */}
        

        <br/>


        <br/>



        {/* <BaseDatosPruebas funcion="actualizar" id ="0" descripcion=" esto es una update al inventario"/> */}

        <form action="formulario actualizar" method="get">
        <input type="text" onChange ={(e)=>{setId(e.target.value)}} placeholder="ID #️⃣" />
        <input type="text" onChange ={(e)=>{setDescripcion(e.target.value)}}placeholder="Descripcion 🎫" />
        <input type="text" onChange ={(e)=>{setprecio(e.target.value)}}placeholder="Precio 💲" />
        <input type="button" onClick={(e)=>{ console.log(" | La variable Id = ",Id + " | La variable Descripcion = ",Descripcion + " | La variable precio= " , 
        Precio + " | El search es = " ,Busqueda  )}}  value="Actualizar 🔄" />
        <input type="reset" value="Borrar ❌"></input>
        </form>
        
       
        
       
        

     
        </div>
    )
}

export default Page6;