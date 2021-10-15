import React from 'react'
import "../styles/modulo_Estado_Venta.css"

const Page5 = () => {
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
                        <a className="pizza_link" href="Page4">Módulo de ventas</a>
                    </li>
                    <li className="pizza_item1">
                        <i className="fas fa-pizza-slice"></i>
                        <a className="pizza_link" href="Page6">Inventario</a>
                    </li>
                </div>
            </ul>
            <main className="cuerpo">
                <div>
                    <div className="container">
                        <h1 className="text-center1">Pedido #4242424123</h1>
                        <div id="stepProgressBar">
                            <div className="step">
                                <p className="step-text">Confirmación</p>
                                <div className="bullet" >
                                    <div className="bullet-n"> 1</div>
                                </div>
                            </div>
                            <div className="step">
                                <p className="step-text">Preparación</p>
                                <div className="bullet">
                                    <div className="bullet-n"> 2</div></div>
                            </div>
                            <div className="step">
                                <p className="step-text">Entregado</p>
                                <div className="bullet">
                                    <div className="bullet-n"> 3</div>
                                </div>
                            </div>
                            <div className="step">
                                <p className="step-text">Finalizado</p>
                                <div className="bullet ">
                                    <div className="bullet-n"> 4</div>
                                </div>
                            </div>
                        </div>
                        <div id="main">
                            <p id="content" className="text-center">Ingresar pedido</p>
                            <button className="boton" id="previousBtn" >Anterior</button>
                            <button className="boton" id="nextBtn">Siguiente</button>
                            <button className="boton" id="finishBtn" >Finalizar</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page5

