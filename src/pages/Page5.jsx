import { Link } from 'react-router-dom';

import "../styles/modulo_Estado_Venta.css"





function Page5() {

    return(

        <div>

        <span>Esta en estado venta, pagina 5</span>
        <Link to="index"> pagina inicial </Link>


        <body>
    <div class="container">
        <h1 class="text-center">Pedido #4242424123</h1>
    <div id="stepProgressBar">
        <div class="step">
            <p class="step-text">Confirmación</p>
            <div class="bullet">1</div>
        </div>
        <div class="step">
            <p class="step-text">Preparación</p>
            <div class="bullet">2</div>
        </div>
        <div class="step">
            <p class="step-text">Entregado</p>
            <div class="bullet">3</div>
        </div>
        <div class="step">
            <p class="step-text">Finalizado</p>
            <div class="bullet ">4</div>
        </div>
    </div>
    <div id="main">
        <p id="content"  class="text-center">Ingresar pedido</p>
        <button id="previousBtn" >Anterior</button>
        <button id="nextBtn">Siguiente</button>
        <button id="finishBtn" >Finalizar</button>
    </div>
    </div>


    <div class="container">
        <h1 class="text-center">Pedido #3686578</h1>
    <div id="stepProgressBar">
        <div class="step">
            <p class="step-text">Confirmación</p>
            <div class="bullet">1</div>
        </div>
        <div class="step">
            <p class="step-text">Preparación</p>
            <div class="bullet">2</div>
        </div>
        <div class="step">
            <p class="step-text">Entregado</p>
            <div class="bullet">3</div>
        </div>
        <div class="step">
            <p class="step-text">Finalizado</p>
            <div class="bullet ">4</div>
        </div>
    </div>
    <div id="main">
        <p id="content"  class="text-center">Ingresar pedido</p>
        <button id="previousBtn" >Anterior</button>
        <button id="nextBtn">Siguiente</button>
        <button id="finishBtn" >Finalizar</button>
    </div>
    </div>




</body>

     
        </div>
    )
}

export default Page5;