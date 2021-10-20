import React from 'react'
import "../styles/modulo_Estado_Venta.css"
import react, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, Redirect} from 'react-router-dom';

const Page5 = () => {
    
    const [Ventas, setVentas] = useState([0])
    const [Estado, setEstado] = useState(1)
    const [IdBase, setIdBase] = useState("")

    let estado= 0
    
    useEffect(async() => {
      const options = { method: 'GET', url: 'https://floating-spire-36481.herokuapp.com/ventas' };
      await axios.request(options).then(function (response) {
        console.log(response.data);
        setVentas(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }, [estado])


    
    const siguiente =  () => {
        estado +=1
        setEstado(estado)
        console.log(estado)
        if(estado>4){estado=0}    
         /* window.location.reload() */ 
        
      }

    const anterior =  () => {
        estado -=1
        setEstado(estado)
        console.log(estado)
        if(estado<1){estado=5}
        /* window.location.reload()   */  
      }


      const actualizarBaseDatos = async () => {   
        const options = {
          method: 'PATCH',
          url: 'https://floating-spire-36481.herokuapp.com/ventas/edita',
          headers: { 'Content-Type': 'application/json' },
          data: {
            id: IdBase,
            estadoVenta: Estado
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





    return (
   
        <div>
        <ul>
            <div className="navbar4">
                <li className="pizza_item1">
                    <i className="fas fa-pizza-slice"></i>
                    <a className="pizza_link1" href="Index">Página Principal </a>
                </li>
                <li className="pizza_item1">
                    <i className="fas fa-pizza-slice"></i>
                    <a className="pizza_link" href="Page3">Gestión de Roles</a>
                </li>
                <li className="pizza_item1">
                    <i className="fas fa-pizza-slice"></i>
                    <a className="pizza_link" href="Page4">Módulo de ventas</a>
                </li>
                <li className="pizza_item1">
                    <i className="fas fa-pizza-slice"></i>
                    <a className="pizza_link" href="Page6">Inventario</a>
                </li>
            </div>
        </ul>

        {Ventas.map((x, index) => {
return( 

    <main className="cuerpo" key={index} >
    <div>
        <div className="container">
            <h1 className="text-center1">Pedido {x._id} </h1>    
            <div id="stepProgressBar">
                <div className="step">
                    <p className="step-text">Confirmación</p>
                    <div className="bullet" >
                        <div className="bullet-n"> 1</div>
                        {(x.estadoVenta == 1) ? (<div className="bullet-n">👍{console.log("1aqui",estado)} </div>):(<div>  {console.log("2aqui",estado)}</div>)}   
                    </div>
                </div>
                <div className="step">
                    <p className="step-text">Preparación</p>
                    <div className="bullet">
                        <div className="bullet-n"> 2</div></div>
                        {(x.estadoVenta == 2) ? (<div className="bullet-n">📦</div>):(<div>  {console.log("2aqui",estado)}</div>)}
                </div>
                <div className="step">
                    <p className="step-text">Entregado</p>
                    <div className="bullet">
                        <div className="bullet-n"> 3</div>
                        {(x.estadoVenta == 3) ? (<div className="bullet-n">📭</div>):(<div>  {console.log("2aqui",estado)}</div>)}
                    </div>
                </div>
                <div className="step">
                    <p className="step-text">Finalizado</p>
                    <div className="bullet ">
                        <div className="bullet-n"> 4</div>
                        {(x.estadoVenta == 4) ? (<div className="bullet-n">👌</div>):(<div>  {console.log("2aqui",estado)}</div>)}
                    </div>
                </div>
            </div>
            <div id="main">
                <p id="content" className="text-center">Valor de la venta 💲{x.valorVenta}</p>
                <p id="content" className="text-center"> 
                <input type="text" onChange={(e) => { setIdBase(e.target.value) }} placeholder="Id Venta" />
                <input type="text" onChange={(e) => { setEstado(e.target.value) }} placeholder="Estado Venta" />
                </p>
                
                
                <button className="boton" id="previousBtn" onClick={(e) => {
anterior();}}>Anterior</button>
                <button className="boton" id="nextBtn" onClick={(e) => {
siguiente();}}>Siguiente</button>
                <button className="boton" id="finishBtn" onClick={(e) => {
actualizarBaseDatos();}}>Finalizar</button>
            </div>
        </div>
    </div>
</main>
)
        })}
    
  
    </div>
        
    )
}

export default Page5

