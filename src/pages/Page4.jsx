import { Link } from 'react-router-dom';
import ProductoADD from '../components/ProductoADD';
import CajaVS from '../components/CajaVS';
import BarraDeBusqueda from '../components/BarraDeBusqueda';
import "../styles/CajaVS.css"
import "../styles/ProductoADD.css"
import "../styles/Rotate.css"
import "../styles/modulo_Ventas.css"
import react, { useEffect, useState } from "react"
import axios from "axios";


function Page4() {
    const fecha = Date()
    let dato=0
    const [Inventario, setInventario] = useState([])
    const [Venta, setVenta] = useState([0])
    

    useEffect(() => {
        
        const options = {method: 'GET', url: 'http://localhost:5000/productos'};
         axios.request(options).then(function (response) {
          console.log(response.data);
          setInventario(response.data)
        }).catch(function (error) {
          console.error(error);
        });      
            }, [])
 
    const venta = [
        { nombre: "Slim Pizza", precio: 20000 },
        { nombre: "Classic Pizza", precio: 30000 },
        { nombre: "Classic Pizza2", precio: 30000 },
  
    ];

    
    return (
        <div>

<ul>
                <div className="navbar4">
                    <li className="pizza_item1">
                        <i className="fas fa-pizza-slice"></i>
                        <a className="pizza_link1" href="Index">Página Principal</a>
                    </li>
                    <li className="pizza_item1">
                        <i className="fas fa-pizza-slice"></i>
                        <a className="pizza_link" href="Page3">Gestión de Roles</a>
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
      
      

                <div className="pagina" >

 

                <div className="div1">


                
                {Inventario.map((x , index) => {
              return (
                <tr key={index}>
                  <td>  {x._id}  
                  
                  <div class="container1"> <img src="https://i.imgur.com/Ficfe51.png" alt=""  />  
 <button class="btn"  onClick={(e) => {
                                    setVenta([...Venta, {productos: x.descripcionProducto , prexio:x.valorProducto}]);
                                }}
  >🛒 Agregar  <br/>
  💲<strong>{x.valorProducto}</strong> !! 🤑<br/> 
  🍕{x.descripcionProducto}
   </button> 
   
   
   </div>  </td>
                </tr>
              );
            })}



                </div>
                
                <div className="rotated">
                    <img src="https://i.imgur.com/0om2LLs.png" alt="" />
                </div>

                <div className="div2">

                <form className="FORMULARIO">
                        <h2>PEDIDO N xxx</h2>
                        <strong>IDENTIFICADOR</strong>: 1245789 <br />
                        <strong>DESCRIPCION:</strong> Compra Fisica<br />
                        <strong>FECHA VENTA:</strong> {fecha}  <br />
                        <hr />
                        <strong>NOMBRE CLIENTE:</strong> aqui debe ir usuario logeado<br />
                        <strong>ID CLIENTE:</strong> el id del usuario en BD<br />
                        <hr />
                        <strong>🍕 LISTA DE PRODUCTOS</strong>
                       


                        {Venta.map((x , index) => {
              return (
                <tr key={index}> 
                  <td>{x.productos}</td>
                  <td> { console.log("carrito ", Venta)} </td>
                </tr>

                
              );
            })}

{Venta.reduce((a,b) => { 
    {dato = dato + parseInt(b.prexio)} 
                            return (<div>

                                <strong>VALOR TOTAL 💰= </strong>
                                {dato}
                                <hr />
                               
                                
                            </div>)
                        })}

                        <br /><br />
    
                        <input className="submit1" type="submit" value="Confirmar Compra" />
                    </form>






                
                
                </div>
               
                
            </div>
        </div>
    )
}

export default Page4;




