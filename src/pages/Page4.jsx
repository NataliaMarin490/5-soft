import { Link } from 'react-router-dom';

import ProductoADD from '../components/ProductoADD';
import CajaVS from '../components/CajaVS';
import BarraDeBusqueda from '../components/BarraDeBusqueda';

import "../styles/CajaVS.css"
import "../styles/ProductoADD.css"
import "../styles/Rotate.css"

import "../styles/modulo_Ventas.css"




function Page4() {

    const productos = [
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png" ElPRECIO="20.000" ElNOMBRE="Slim Pizza" />,
        <ProductoADD LaURL="https://i.imgur.com/OogAk6c.png" ElPRECIO="15.000" ElNOMBRE="Mini Pizza" />,
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png" ElPRECIO="30.000" ElNOMBRE="Classic Pizza" />,
        <ProductoADD LaURL="https://i.imgur.com/OogAk6c.png" ElPRECIO="50.000" ElNOMBRE="Mega Pizza" />,
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png" ElPRECIO="60.000" ElNOMBRE="Nerd Pizza" />,

    ];

    const venta = [
        {nombre:"Slim Pizza",precio:20000},
        {nombre:"Classic Pizza",precio:30000}
        

    ];

    const fecha = Date()

    return (

        <div className="pagina" >

            <span>Esta en pagina 4 ventas</span>
            <Link to="index"> pagina inicial </Link>



            <div class="div1">
                <BarraDeBusqueda />
                <CajaVS produc={productos} />

            </div>



            <div class="rotated">
                <img src="https://i.imgur.com/0om2LLs.png" alt="" />
            </div>




            <div class="div2">



            <h2>CARRITO DE COMPRAS</h2>
                <hr />
                

                <form class="FORMULARIO">

                    <h2>PEDIDO #123</h2>

                    <strong>IDENTIFICADOR</strong>: 1245789 <br />
                    <strong>DESCRIPCION:</strong> Compra Fisica<br />
                    <strong>FECHA VENTA:</strong> {fecha}  <br />
                    <hr />
                    <strong>NOMBRE CLIENTE:</strong> Armando Puentes<br />
                    <strong>ID CLIENTE:</strong>6546546465<br />
                    <hr />

                    <strong>🍕 LISTA DE PRODUCTOS</strong>
                    
 
                    {venta.map(item =>{
                        return(<div> {item.nombre} 

            <select name="select">
            <option value="value1"selected>1</option>
            <option value="value2" >2</option>
            <option value="value3">3</option>
            </select>
            

            💲 VALOR {item.precio}
 
                        </div>)
   
                    })} 

                     <br/><br /><br />



                   
                    
                    {venta.reduce((x,y)=> {
                        return(<div>
                             <strong>VALOR TOTAL 💰= </strong>
                             {x.precio +y.precio} 
                             <hr />
 </div>)
   
                    })} 
                    

                    <br />


                    <div class="submit"><input type="submit" value="Confirmar Compra" /></div>
                </form>

                







            </div>



        </div>
    )
}

export default Page4;




