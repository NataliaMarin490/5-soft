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
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png"/>,
        <ProductoADD LaURL="https://i.imgur.com/OogAk6c.png"/>,
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png"/>,
        <ProductoADD LaURL="https://i.imgur.com/OogAk6c.png"/>,
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png"/>,
     
        ];
     
    return(

        <div className="pagina" >

        <span>Esta en pagina 4 ventas</span>
        <Link to="index"> pagina inicial </Link>

        <BarraDeBusqueda/>

        <div class="div1">    
        <CajaVS produc={productos}/>
        </div>

       

        <div class="rotated">
        <img src="https://i.imgur.com/0om2LLs.png" alt="" />
        </div>




        <div class="div2"> 
        

    
<form action="">
<hr/>

AQUI IRA EL RESUMEN DE COMPRA "CARRITO" 

        
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus atque error! Soluta culpa fuga cupiditate quasi? 
Est reprehenderit nam accusamus officiis rerum? Facere non natus explicabo exercitationem eveniet veritatis!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus atque error! Soluta culpa fuga cupiditate quasi? 
Est reprehenderit nam accusamus officiis rerum? Facere non natus explicabo exercitationem eveniet veritatis!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus atque error! Soluta culpa fuga cupiditate quasi? 
Est reprehenderit nam accusamus officiis rerum? Facere non natus explicabo exercitationem eveniet veritatis!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus atque error! Soluta culpa fuga cupiditate quasi? 
Est reprehenderit nam accusamus officiis rerum? Facere non natus explicabo exercitationem eveniet veritatis!
<hr/>

</form>
       

        

       
        </div>



        </div>
    )
}

export default Page4;



 
