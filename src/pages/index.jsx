import { Link } from 'react-router-dom';
import "../styles/Intro.css"

function Index() {
    return (
        <div>
            <body className="body12">
                <nav className="navbar">
                    <div className="logo">
                        <a className="logo_text" href="#">
                            <img src="https://i.imgur.com/vkxZ4UU.png" alt="AQUI LOGO" />
                        </a>
                    </div>
                    <div className="phone">
                        <span className="phone_order">Pedidos al número</span>
                        <span className="phone_number">888 999 4232</span>
                    </div>
                    <div className="login">
                        <Link className="login_link login_link--button" to="Page1"> Log in  </Link>
                        <Link className="login_link login_link--button1" to="Page2"> Sign up  </Link>
                    </div>

                    <div className="btn_pizza">
                        <i className="fas fa-pizza-slice"></i>
                    </div>

                    <div className="btn_login">
                        <i className="fas fa-user"></i>
                    </div>

                    <div className="btn_menu">
                        <i className="fa fa-bars"></i>
                    </div>
                </nav>

                <ul>
                    <div className="navbar">
                        <li className="pizza_item">
                            <i className="fas fa-pizza-slice"></i>
                            <a className="pizza_link" href="Page3">Gestión de Roles</a>
                        </li>
                        <li className="pizza_item">
                            <i className="fas fa-pizza-slice"></i>
                            <a className="pizza_link" href="Page4">Módulo de Ventas</a>
                        </li>
                        <li className="pizza_item">
                            <i className="fas fa-pizza-slice"></i>
                            <a className="pizza_link" href="Page5">Estado de Ventas</a>
                        </li>
                        <li className="pizza_item">
                            <i className="fas fa-pizza-slice"></i>
                            <a className="pizza_link" href="Page6">Inventario</a>
                        </li>
                    </div>
                </ul>

                {/* <!-- Seccion slider --> */}
                <section className="slider"></section>

                <footer className="footer">
                    <div className="social-icons">
                        <a href="#" className="social-item"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-facebook-square"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-instagram-square"></i></a>
                    </div>

                    <div className="data">
                        <span className="data_item">5-Soft</span>
                        <span className="data_item">Telefono: 888 999 4232</span>
                    </div>

                    <span className="copyright">
                        © 2021 5-Soft |
                        Todos los derechos reservados.
                    </span>
                </footer>
            </body>
        </div>
    )
}

export default Index;