import { Link } from 'react-router-dom';
import "../styles/modulo_Estado_Venta.css"

function Page5() {
    return (
        <div>
            <span>Esta en estado venta, pagina 5</span>
            <Link to="index"> pagina inicial </Link>
            <body>
                <div className="container">
                    <h1 className="text-center">Pedido #4242424123</h1>
                    <div id="stepProgressBar">
                        <div className="step">
                            <p className="step-text">Confirmación</p>
                            <div className="bullet">1</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Preparación</p>
                            <div className="bullet">2</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Entregado</p>
                            <div className="bullet">3</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Finalizado</p>
                            <div className="bullet ">4</div>
                        </div>
                    </div>
                    <div id="main">
                        <p id="content" className="text-center">Ingresar pedido</p>
                        <button id="previousBtn" >Anterior</button>
                        <button id="nextBtn">Siguiente</button>
                        <button id="finishBtn" >Finalizar</button>
                    </div>
                </div>


                <div className="container">
                    <h1 className="text-center">Pedido #3686578</h1>
                    <div id="stepProgressBar">
                        <div className="step">
                            <p className="step-text">Confirmación</p>
                            <div className="bullet">1</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Preparación</p>
                            <div className="bullet">2</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Entregado</p>
                            <div className="bullet">3</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Finalizado</p>
                            <div className="bullet ">4</div>
                        </div>
                    </div>
                    <div id="main">
                        <p id="content" className="text-center">Ingresar pedido</p>
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