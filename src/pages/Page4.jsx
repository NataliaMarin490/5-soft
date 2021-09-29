import { Link } from 'react-router-dom';
import "../styles/ProductoADD.css"
import ProductoADD from '../components/ProductoADD';
import CajaVS from '../components/CajaVS';
import "../styles/CajaVS.css"
import BarraDeBusqueda from '../components/BarraDeBusqueda';




function Page4() {

    const productos = [
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png"/>,
        <ProductoADD LaURL="https://i.imgur.com/OogAk6c.png"/>,
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png"/>,
        <ProductoADD LaURL="https://i.imgur.com/OogAk6c.png"/>,
        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png"/>,
     
        ];

        
    return(

        <div>

        <span>Esta en pagina 4</span>
        <Link to="index"> pagina inicial </Link>

        <BarraDeBusqueda/>



        <div class="div1">    
        <CajaVS produc={productos}/>
        </div>


        <div class="div2"> 

        AQUI IRA EL RESUMEN DE COMPRA "CARRITO" 

        <ProductoADD LaURL="https://i.imgur.com/Ficfe51.png"/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus atque error! Soluta culpa fuga cupiditate quasi? 
        Est reprehenderit nam accusamus officiis rerum? Facere non natus explicabo exercitationem eveniet veritatis!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus atque error! Soluta culpa fuga cupiditate quasi? 
        Est reprehenderit nam accusamus officiis rerum? Facere non natus explicabo exercitationem eveniet veritatis!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus atque error! Soluta culpa fuga cupiditate quasi? 
        Est reprehenderit nam accusamus officiis rerum? Facere non natus explicabo exercitationem eveniet veritatis!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus atque error! Soluta culpa fuga cupiditate quasi? 
        Est reprehenderit nam accusamus officiis rerum? Facere non natus explicabo exercitationem eveniet veritatis!
        </div>


 





   
     
        </div>
    )
}

export default Page4;